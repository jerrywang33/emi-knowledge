import { promises as fs } from "node:fs";
import path from "node:path";
import {
  KNOWLEDGE_TYPES,
  asTypedObject,
  type ControlObject,
  type KnowledgeObject,
  type LoadedKnowledgeObject,
  type LoadedTopicManifest,
  type RequirementObject,
  type TopicManifest,
  type VerificationObject,
} from "./model.js";
import { countReferences, emptyCounts, validateKnowledgeGraph } from "./graph-validator.js";
import { sha256, stableJson } from "./stable-json.js";
import { assertMatchesSchema } from "./schema-validator.js";
import { resolveTopicEntries, validateTopics } from "./topic.js";
import { assertValid, formatIssues, validateKnowledge } from "./validation.js";

export interface ReleaseInput {
  id: string;
  path: string;
}

export interface ReleaseConfig {
  release_version: string;
  release_level: "source_baseline" | "engineering_baseline";
  released_on: string;
  knowledge_directory: string;
  output_directory: string;
  tool_version: string;
  inputs: {
    source_baseline: ReleaseInput;
    landscape: ReleaseInput;
    knowledge_model: ReleaseInput;
    schema: ReleaseInput & { version: string };
    release_artifact_schema: ReleaseInput & { version: string };
  } & Record<string, ReleaseInput & { version?: string }>;
  scope: {
    title: string;
    includes: string[];
    excludes: string[];
  };
  review: {
    reviewed_by_role: string;
    reviewed_on: string;
    scope: string;
  };
  limitations: string[];
  topic_selection?: {
    directory: string;
    schema: ReleaseInput & { version: string };
    topic_ids: string[];
  };
}

export interface UnresolvedItem {
  object_id: string;
  path: string;
  status: "pending" | "institution_defined";
  description: string;
}

interface InputManifest extends ReleaseInput {
  sha256: string;
  version?: string;
}

export interface ReleaseManifest extends Record<string, unknown> {
  $schema: string;
  manifest_schema_version: string;
  release_version: string;
  release_level: ReleaseConfig["release_level"];
  released_on: string;
  tool: { name: "emi-knowledge"; version: string };
  inputs: Record<string, InputManifest>;
  scope: ReleaseConfig["scope"];
  review: ReleaseConfig["review"];
  counts: Record<string, number>;
  object_count: number;
  reference_count: number;
  content_sha256: string;
  config_sha256: string;
  objects: Array<{
    id: string;
    type: string;
    revision: number;
    lifecycle_status: string;
    confirmation_status: string;
    file: string;
    sha256: string;
  }>;
  unresolved_items: UnresolvedItem[];
  limitations: string[];
  artifacts: Array<{ path: string; sha256: string }>;
  topics?: Array<{
    id: string;
    title: string;
    domain: string;
    revision: number;
    lifecycle_status: string;
    file: string;
    sha256: string;
  }>;
}

export interface GeneratedRelease {
  manifest: ReleaseManifest;
  outputDirectory: string;
  artifacts: Record<string, string>;
}

function requireString(value: unknown, field: string): asserts value is string {
  if (typeof value !== "string" || value.trim() === "") {
    throw new Error(`Release config field ${field} must be a non-empty string.`);
  }
}

function requireStringArray(value: unknown, field: string): asserts value is string[] {
  if (!Array.isArray(value) || value.some((item) => typeof item !== "string" || item.trim() === "")) {
    throw new Error(`Release config field ${field} must be an array of non-empty strings.`);
  }
}

export function validateReleaseConfig(config: ReleaseConfig): void {
  if (!/^v\d+\.\d+\.\d+$/.test(config.release_version)) {
    throw new Error("release_version must use vMAJOR.MINOR.PATCH format.");
  }
  if (!["source_baseline", "engineering_baseline"].includes(config.release_level)) {
    throw new Error("release_level must be source_baseline or engineering_baseline.");
  }
  if (!/^\d{4}-\d{2}-\d{2}$/.test(config.released_on)) {
    throw new Error("released_on must use YYYY-MM-DD format.");
  }
  requireString(config.knowledge_directory, "knowledge_directory");
  requireString(config.output_directory, "output_directory");
  requireString(config.tool_version, "tool_version");
  requireString(config.scope.title, "scope.title");
  requireStringArray(config.scope.includes, "scope.includes");
  requireStringArray(config.scope.excludes, "scope.excludes");
  requireString(config.review.reviewed_by_role, "review.reviewed_by_role");
  requireString(config.review.reviewed_on, "review.reviewed_on");
  requireString(config.review.scope, "review.scope");
  requireStringArray(config.limitations, "limitations");

  if (config.topic_selection) {
    requireString(config.topic_selection.directory, "topic_selection.directory");
    requireString(config.topic_selection.schema.id, "topic_selection.schema.id");
    requireString(config.topic_selection.schema.path, "topic_selection.schema.path");
    requireString(config.topic_selection.schema.version, "topic_selection.schema.version");
    requireStringArray(config.topic_selection.topic_ids, "topic_selection.topic_ids");
    if (config.topic_selection.topic_ids.length === 0) {
      throw new Error("Release config field topic_selection.topic_ids must contain at least one topic ID.");
    }
    if (new Set(config.topic_selection.topic_ids).size !== config.topic_selection.topic_ids.length) {
      throw new Error("Release config field topic_selection.topic_ids must not contain duplicates.");
    }
  }

  for (const [key, input] of Object.entries(config.inputs)) {
    requireString(input.id, `inputs.${key}.id`);
    requireString(input.path, `inputs.${key}.path`);
  }
  requireString(config.inputs.schema.version, "inputs.schema.version");
  requireString(config.inputs.release_artifact_schema.version, "inputs.release_artifact_schema.version");
}

function resolveRepositoryPath(repositoryRoot: string, configuredPath: string): string {
  if (path.isAbsolute(configuredPath)) {
    throw new Error(`Release config paths must be repository-relative: ${configuredPath}`);
  }
  const resolved = path.resolve(repositoryRoot, configuredPath);
  const relative = path.relative(repositoryRoot, resolved);
  if (relative.startsWith("..") || path.isAbsolute(relative)) {
    throw new Error(`Release config path leaves the repository: ${configuredPath}`);
  }
  return resolved;
}

function sortObjects(entries: LoadedKnowledgeObject[]): LoadedKnowledgeObject[] {
  const order = new Map(KNOWLEDGE_TYPES.map((type, index) => [type, index]));
  return [...entries].sort((left, right) =>
    (order.get(left.object.type) ?? 99) - (order.get(right.object.type) ?? 99)
    || left.object.id.localeCompare(right.object.id));
}

function addUnresolved(
  items: UnresolvedItem[],
  objectId: string,
  itemPath: string,
  status: UnresolvedItem["status"],
  description: string,
): void {
  items.push({ object_id: objectId, path: itemPath, status, description });
}

export function collectUnresolvedItems(objects: KnowledgeObject[]): UnresolvedItem[] {
  const items: UnresolvedItem[] = [];

  for (const object of objects) {
    if (object.confirmation.status === "pending") {
      for (const [index, question] of object.confirmation.open_questions.entries()) {
        addUnresolved(items, object.id, `confirmation.open_questions[${index}]`, "pending", question);
      }
    }

    const typed = asTypedObject(object);
    if (typed.type === "requirement") {
      if (typed.applicability.basis === "pending") {
        addUnresolved(items, typed.id, "applicability.basis", "pending", "Applicability needs an authorised decision.");
      }
      const selectors = [
        "jurisdictions",
        "entity_types",
        "license_roles",
        "activities",
        "products",
        "data_categories",
        "framework_branches",
      ] as const;
      for (const selector of selectors) {
        if (typed.applicability[selector].mode === "unknown") {
          addUnresolved(items, typed.id, `applicability.${selector}`, "pending", `${selector} remains unknown.`);
        }
      }
    } else if (typed.type === "control") {
      for (const rule of typed.implementation_rules) {
        if (rule.parameter_status === "institution_defined") {
          for (const parameter of rule.parameters) {
            addUnresolved(
              items,
              typed.id,
              `implementation_rules.${rule.key}.parameters.${parameter.name}`,
              "institution_defined",
              `The consuming institution must set ${parameter.name}.`,
            );
          }
        } else if (rule.parameter_status === "pending") {
          for (const [index, question] of rule.open_questions.entries()) {
            addUnresolved(items, typed.id, `implementation_rules.${rule.key}.open_questions[${index}]`, "pending", question);
          }
        }
      }
    } else if (typed.type === "verification") {
      for (const evidence of typed.evidence_requirements) {
        if (evidence.source_status === "institution_defined") {
          addUnresolved(
            items,
            typed.id,
            `evidence_requirements.${evidence.key}.source_system`,
            "institution_defined",
            `The consuming institution must map the source system for ${evidence.key}.`,
          );
        } else if (evidence.source_status === "pending") {
          addUnresolved(items, typed.id, `evidence_requirements.${evidence.key}.source_system`, "pending", `The source system for ${evidence.key} is pending.`);
        }

        if (evidence.retention_status === "institution_defined") {
          addUnresolved(
            items,
            typed.id,
            `evidence_requirements.${evidence.key}.retention_period`,
            "institution_defined",
            `The consuming institution must set the retention period for ${evidence.key}.`,
          );
        } else if (evidence.retention_status === "pending") {
          addUnresolved(items, typed.id, `evidence_requirements.${evidence.key}.retention_period`, "pending", `The retention period for ${evidence.key} is pending.`);
        }
      }
    }
  }

  return items.sort((left, right) =>
    left.object_id.localeCompare(right.object_id)
    || left.path.localeCompare(right.path)
    || left.description.localeCompare(right.description));
}

function markdownLink(label: string, url: unknown): string {
  return typeof url === "string" ? `[${label}](${url})` : label;
}

function generateHumanDocument(
  config: ReleaseConfig,
  objects: KnowledgeObject[],
  contentHash: string,
  unresolvedItems: UnresolvedItem[],
  topics: TopicManifest[],
): string {
  const sources = objects.filter((object) => object.type === "source");
  const provisions = objects.filter((object) => object.type === "provision").map(asTypedObject);
  const requirements = objects.filter((object) => object.type === "requirement").map(asTypedObject) as RequirementObject[];
  const controls = objects.filter((object) => object.type === "control").map(asTypedObject) as ControlObject[];
  const verifications = objects.filter((object) => object.type === "verification").map(asTypedObject) as VerificationObject[];
  const objectsById = new Map(objects.map((object) => [object.id, object]));
  const lines: string[] = [
    `# ${config.scope.title}`,
    "",
    `- 版本：\`${config.release_version}\``,
    `- 发布级别：\`${config.release_level}\``,
    `- 版本日期：\`${config.released_on}\``,
    `- 内容摘要：\`${contentHash}\``,
    "",
    "本文件由受控知识对象生成。发布级别只说明来源与工程知识经过当前范围的审查，不提供具体机构法律适用性、合规状态或生产控制认证。",
    "",
  ];

  if (topics.length > 0) {
    lines.push(
      "## 专题",
      "",
      "| ID | 标题 | 修订 |",
      "| --- | --- | ---: |",
      ...topics.map((topic) => `| \`${topic.id}\` | ${topic.title} | ${topic.revision} |`),
      "",
    );
  }

  lines.push(
    "## 范围",
    "",
    ...config.scope.includes.map((item) => `- 包含：${item}`),
    ...config.scope.excludes.map((item) => `- 排除：${item}`),
    "",
    "## 内容统计",
    "",
    "| 类型 | 数量 |",
    "| --- | ---: |",
    ...KNOWLEDGE_TYPES.map((type) => `| ${type} | ${objects.filter((object) => object.type === type).length} |`),
    "",
    "## 来源",
    "",
    "| ID | 文件 | 来源层级 |",
    "| --- | --- | --- |",
    ...sources.map((source) =>
      `| \`${source.id}\` | ${markdownLink(source.title, source.official_url)} | \`${String(source.authority_level)}\` |`),
    "",
    "## 要求、控制与验证",
    "",
  );

  for (const requirement of requirements) {
    lines.push(
      `### \`${requirement.id}\` ${requirement.title}`,
      "",
      requirement.statement,
      "",
      `适用分支：${requirement.applicability.framework_branches.values.map((item) => `\`${item}\``).join("、")}`,
      "",
      "依据：",
      "",
    );

    for (const reference of requirement.provision_refs) {
      const provision = provisions.find((item) => item.id === reference.provision_id);
      if (!provision || provision.type !== "provision") {
        continue;
      }
      const source = objectsById.get(provision.source_id);
      lines.push(
        `- \`${provision.id}\` ${provision.locator.label}，关系 \`${reference.relation}\`，来源 \`${source?.id ?? provision.source_id}\`。`,
      );
    }

    lines.push("", "控制和检查：", "");
    const implementingControls = controls.filter((control) =>
      control.requirement_refs.some((reference) => reference.requirement_id === requirement.id));
    for (const control of implementingControls) {
      lines.push(`- \`${control.id}\` ${control.title}`);
      for (const verification of verifications.filter((item) => item.control_ids.includes(control.id))) {
        const evidenceKeys = verification.evidence_requirements.map((item) => `\`${item.key}\``).join("、");
        lines.push(`- \`${verification.id}\` ${verification.title}；证据模板：${evidenceKeys}。`);
      }
    }
    lines.push("");
  }

  lines.push("## 待机构确认", "");
  if (unresolvedItems.length === 0) {
    lines.push("当前发布没有待确认项。", "");
  } else {
    lines.push(
      "| 对象 | 状态 | 路径 | 内容 |",
      "| --- | --- | --- | --- |",
      ...unresolvedItems.map((item) =>
        `| \`${item.object_id}\` | \`${item.status}\` | \`${item.path}\` | ${item.description} |`),
      "",
    );
  }

  lines.push(
    "## 已知限制",
    "",
    ...config.limitations.map((item) => `- ${item}`),
    "",
    "## 审查记录",
    "",
    `- 审查角色：\`${config.review.reviewed_by_role}\``,
    `- 审查日期：\`${config.review.reviewed_on}\``,
    `- 审查范围：${config.review.scope}`,
    "",
  );

  return `${lines.join("\n")}\n`;
}

async function readInputs(config: ReleaseConfig, repositoryRoot: string): Promise<Record<string, InputManifest>> {
  const result: Record<string, InputManifest> = {};
  const configuredInputs: Record<string, ReleaseInput & { version?: string }> = { ...config.inputs };
  if (config.topic_selection) {
    configuredInputs.topic_schema = config.topic_selection.schema;
  }

  for (const [key, input] of Object.entries(configuredInputs).sort(([left], [right]) => left.localeCompare(right))) {
    const inputPath = resolveRepositoryPath(repositoryRoot, input.path);
    const content = await fs.readFile(inputPath);
    result[key] = {
      id: input.id,
      path: input.path,
      sha256: sha256(content),
      ...("version" in input ? { version: input.version } : {}),
    };
  }
  return result;
}

async function readHistoricalObjectLock(
  config: ReleaseConfig,
  repositoryRoot: string,
): Promise<string[] | undefined> {
  if (config.topic_selection) {
    return undefined;
  }

  const manifestPath = resolveRepositoryPath(repositoryRoot, path.join(config.output_directory, "manifest.json"));
  let parsed: unknown;
  try {
    parsed = JSON.parse(await fs.readFile(manifestPath, "utf8"));
  } catch (error) {
    if ((error as NodeJS.ErrnoException).code === "ENOENT") {
      return undefined;
    }
    throw new Error(`Cannot read historical release manifest ${manifestPath}: ${(error as Error).message}`);
  }

  if (typeof parsed !== "object" || parsed === null) {
    throw new Error(`Historical release manifest must contain an object: ${manifestPath}`);
  }
  const manifest = parsed as { release_version?: unknown; objects?: unknown };
  if (manifest.release_version !== config.release_version) {
    throw new Error(`Historical release manifest version does not match ${config.release_version}: ${manifestPath}`);
  }
  if (!Array.isArray(manifest.objects) || manifest.objects.length === 0) {
    throw new Error(`Historical release manifest has no object selection: ${manifestPath}`);
  }

  const objectIds = manifest.objects.map((value, index) => {
    if (typeof value !== "object" || value === null || !("id" in value)
      || typeof value.id !== "string" || value.id.trim() === "") {
      throw new Error(`Historical release manifest has an invalid object at index ${index}: ${manifestPath}`);
    }
    return value.id;
  });
  if (new Set(objectIds).size !== objectIds.length) {
    throw new Error(`Historical release manifest contains duplicate object IDs: ${manifestPath}`);
  }
  return objectIds;
}

export async function generateRelease(
  config: ReleaseConfig,
  repositoryRoot: string,
  outputOverride?: string,
): Promise<GeneratedRelease> {
  validateReleaseConfig(config);
  const root = path.resolve(repositoryRoot);
  const knowledgeDirectory = resolveRepositoryPath(root, config.knowledge_directory);
  const schemaPath = resolveRepositoryPath(root, config.inputs.schema.path);
  const outputDirectory = outputOverride ?? resolveRepositoryPath(root, config.output_directory);
  const releaseArtifactSchemaPath = resolveRepositoryPath(root, config.inputs.release_artifact_schema.path);
  const releaseArtifactSchema = JSON.parse(await fs.readFile(releaseArtifactSchemaPath, "utf8")) as { $id?: unknown };
  if (typeof releaseArtifactSchema.$id !== "string" || releaseArtifactSchema.$id.trim() === "") {
    throw new Error(`Release artifact Schema has no valid $id: ${config.inputs.release_artifact_schema.path}`);
  }
  const releaseArtifactSchemaId = releaseArtifactSchema.$id;
  const artifactSchemaVersion = config.inputs.release_artifact_schema.version;
  const report = await validateKnowledge(knowledgeDirectory, schemaPath, {
    requireCompleteChain: false,
  });
  assertValid(report);

  let releaseEntries = report.entries;
  let selectedTopicEntries: LoadedTopicManifest[] = [];
  let topicSchemaPath: string | undefined;

  if (config.topic_selection) {
    const topicDirectory = resolveRepositoryPath(root, config.topic_selection.directory);
    topicSchemaPath = resolveRepositoryPath(root, config.topic_selection.schema.path);
    const topicReport = await validateTopics(topicDirectory, topicSchemaPath, report.entries);
    if (topicReport.issues.length > 0) {
      throw new Error(`Topic validation failed:\n${formatIssues(topicReport.issues)}`);
    }

    const topicsById = new Map(topicReport.entries.map((entry) => [entry.object.id, entry]));
    selectedTopicEntries = [...config.topic_selection.topic_ids]
      .sort()
      .map((topicId) => {
        const entry = topicsById.get(topicId);
        if (!entry) {
          throw new Error(`Unknown topic ID in release config: ${topicId}`);
        }
        return entry;
      });

    const nonApprovedTopics = selectedTopicEntries.filter((entry) =>
      entry.object.lifecycle_status !== "approved");
    if (nonApprovedTopics.length > 0) {
      throw new Error(
        `Release contains non-approved topics: ${nonApprovedTopics.map((entry) => entry.object.id).join(", ")}`,
      );
    }

    releaseEntries = resolveTopicEntries(
      selectedTopicEntries.map((entry) => entry.object),
      report.entries,
    );
    if (releaseEntries.length === 0) {
      throw new Error("Topic selection resolved to no knowledge objects.");
    }
  } else {
    const historicalObjectIds = await readHistoricalObjectLock(config, root);
    if (!historicalObjectIds) {
      throw new Error("A new release must define topic_selection; only an existing historical manifest can lock an object-only release.");
    }
    const entriesById = new Map(report.entries.map((entry) => [entry.object.id, entry]));
    releaseEntries = historicalObjectIds.map((objectId) => {
      const entry = entriesById.get(objectId);
      if (!entry) {
        throw new Error(`Historical release object is missing from current knowledge: ${objectId}`);
      }
      return entry;
    });
  }

  const closureIssues = validateKnowledgeGraph(releaseEntries, {
    allowExternalHistoricalReferences: true,
  });
  if (closureIssues.length > 0) {
    throw new Error(`Release knowledge graph is invalid:\n${formatIssues(closureIssues)}`);
  }

  const nonApproved = releaseEntries.filter((entry) => entry.object.lifecycle_status !== "approved");
  if (nonApproved.length > 0) {
    throw new Error(`Release contains non-approved objects: ${nonApproved.map((entry) => entry.object.id).sort().join(", ")}`);
  }

  const sortedEntries = sortObjects(releaseEntries);
  const objects = sortedEntries.map((entry) => entry.object);
  const topics = selectedTopicEntries.map((entry) => entry.object);
  const contentHash = sha256(stableJson(config.topic_selection ? { objects, topics } : objects));
  const unresolvedItems = collectUnresolvedItems(objects);
  const inputs = await readInputs(config, root);
  const counts = emptyCounts();
  for (const entry of sortedEntries) {
    counts[entry.object.type] += 1;
  }
  const referenceCount = countReferences(sortedEntries);
  const objectManifest = sortedEntries.map((entry) => ({
    id: entry.object.id,
    type: entry.object.type,
    revision: entry.object.revision,
    lifecycle_status: entry.object.lifecycle_status,
    confirmation_status: entry.object.confirmation.status,
    file: `${config.knowledge_directory}/${entry.relativePath}`,
    sha256: sha256(stableJson(entry.object)),
  }));
  const topicManifest = selectedTopicEntries.map((entry) => ({
    id: entry.object.id,
    title: entry.object.title,
    domain: entry.object.domain,
    revision: entry.object.revision,
    lifecycle_status: entry.object.lifecycle_status,
    file: path.relative(root, entry.filePath).split(path.sep).join("/"),
    sha256: sha256(stableJson(entry.object)),
  }));

  const knowledgeBundleValue = {
    $schema: releaseArtifactSchemaId,
    bundle_schema_version: artifactSchemaVersion,
    release_version: config.release_version,
    release_level: config.release_level,
    released_on: config.released_on,
    content_sha256: contentHash,
    unresolved_items: unresolvedItems,
    ...(config.topic_selection ? { topics } : {}),
    objects,
  };
  const usageConstraints = [
    "Use only the object IDs and relationships present in this fixed release.",
    "Preserve authority_level, lifecycle_status, confirmation status, and unresolved items in answers.",
    "Do not infer institution-specific applicability, parameter values, evidence systems, or retention periods.",
  ];
  if (config.topic_selection) {
    usageConstraints.push("Use only the topics fixed in this release and preserve each topic scope and open questions.");
  }
  const agentContextValue = {
    $schema: releaseArtifactSchemaId,
    context_schema_version: artifactSchemaVersion,
    release_version: config.release_version,
    release_level: config.release_level,
    released_on: config.released_on,
    content_sha256: contentHash,
    usage_constraints: usageConstraints,
    unresolved_items: unresolvedItems,
    ...(config.topic_selection ? { topics } : {}),
    objects,
  };
  const knowledgeBundle = stableJson(knowledgeBundleValue);
  const agentContext = stableJson(agentContextValue);
  const humanDocument = generateHumanDocument(config, objects, contentHash, unresolvedItems, topics);
  const artifacts: Record<string, string> = {
    "README.md": humanDocument,
    "agent-context.json": agentContext,
    "knowledge.json": knowledgeBundle,
  };

  const manifest: ReleaseManifest = {
    $schema: releaseArtifactSchemaId,
    manifest_schema_version: artifactSchemaVersion,
    release_version: config.release_version,
    release_level: config.release_level,
    released_on: config.released_on,
    tool: { name: "emi-knowledge", version: config.tool_version },
    inputs,
    scope: config.scope,
    review: config.review,
    counts,
    object_count: sortedEntries.length,
    reference_count: referenceCount,
    content_sha256: contentHash,
    config_sha256: sha256(stableJson(config)),
    objects: objectManifest,
    ...(config.topic_selection ? { topics: topicManifest } : {}),
    unresolved_items: unresolvedItems,
    limitations: config.limitations,
    artifacts: Object.entries(artifacts)
      .sort(([left], [right]) => left.localeCompare(right))
      .map(([artifactPath, content]) => ({ path: artifactPath, sha256: sha256(content) })),
  };

  const referencedSchemaPaths = [schemaPath, ...(topicSchemaPath ? [topicSchemaPath] : [])];
  await assertMatchesSchema(knowledgeBundleValue, releaseArtifactSchemaPath, referencedSchemaPaths);
  await assertMatchesSchema(agentContextValue, releaseArtifactSchemaPath, referencedSchemaPaths);
  await assertMatchesSchema(manifest, releaseArtifactSchemaPath, referencedSchemaPaths);
  artifacts["manifest.json"] = stableJson(manifest);

  await fs.mkdir(outputDirectory, { recursive: true });
  for (const [artifactPath, content] of Object.entries(artifacts).sort(([left], [right]) => left.localeCompare(right))) {
    await fs.writeFile(path.join(outputDirectory, artifactPath), content, "utf8");
  }

  return { manifest, outputDirectory, artifacts };
}

export async function generateReleaseFromFile(configPath: string, repositoryRoot: string): Promise<GeneratedRelease> {
  const config = JSON.parse(await fs.readFile(configPath, "utf8")) as ReleaseConfig;
  return generateRelease(config, repositoryRoot);
}
