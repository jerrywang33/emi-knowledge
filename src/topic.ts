import path from "node:path";
import {
  KNOWLEDGE_TYPES,
  asTypedObject,
  type ControlObject,
  type DecisionObject,
  type LoadedKnowledgeObject,
  type LoadedTopicManifest,
  type TopicManifest,
  type ValidationIssue,
  type VerificationObject,
} from "./model.js";
import {
  findSensitiveContentIssues,
  knowledgeObjectReferences,
  validateKnowledgeGraph,
} from "./graph-validator.js";
import { loadStructuredDirectory } from "./loader.js";
import { validateSchema } from "./schema-validator.js";

export interface TopicValidationReport {
  entries: LoadedTopicManifest[];
  issues: ValidationIssue[];
}

function sortIssues(issues: ValidationIssue[]): ValidationIssue[] {
  return issues.sort((left, right) =>
    left.path.localeCompare(right.path)
    || left.code.localeCompare(right.code)
    || left.message.localeCompare(right.message));
}

export async function loadTopicDirectory(directory: string): Promise<{
  entries: LoadedTopicManifest[];
  issues: ValidationIssue[];
}> {
  return loadStructuredDirectory<TopicManifest>(directory, "topic manifests");
}

export function validateTopicGraph(
  topics: LoadedTopicManifest[],
  knowledgeEntries: LoadedKnowledgeObject[],
): ValidationIssue[] {
  const issues: ValidationIssue[] = [];
  const knowledgeById = new Map(knowledgeEntries.map((entry) => [entry.object.id, entry.object]));
  const topicIds = new Set<string>();

  for (const entry of topics) {
    const topic = entry.object;
    issues.push(...findSensitiveContentIssues(entry.rawContent, entry.relativePath));
    const extension = path.posix.extname(entry.relativePath);
    const topicPrefix = `${topic.domain}-`;
    const fileStem = topic.id.startsWith(topicPrefix) ? topic.id.slice(topicPrefix.length) : topic.id;
    const expectedPath = `${topic.domain}/${fileStem}${extension}`;

    if (!topic.id.startsWith(topicPrefix)) {
      issues.push({
        code: "topic.domain_prefix",
        path: `${entry.relativePath}/id`,
        message: `Topic ID ${topic.id} must start with ${topicPrefix}.`,
      });
    }

    if (entry.relativePath !== expectedPath) {
      issues.push({
        code: "topic.file_location",
        path: entry.relativePath,
        message: `Expected ${expectedPath} for ${topic.id}.`,
      });
    }

    if (topicIds.has(topic.id)) {
      issues.push({
        code: "topic.duplicate_id",
        path: entry.relativePath,
        message: `Duplicate topic ID: ${topic.id}`,
      });
    }
    topicIds.add(topic.id);

    if (topic.lifecycle_status === "approved" && topic.entry_requirement_ids.length === 0) {
      issues.push({
        code: "topic.approved_without_entry",
        path: `${entry.relativePath}/entry_requirement_ids`,
        message: "An approved topic needs at least one entry Requirement.",
      });
    }

    for (const [index, requirementId] of topic.entry_requirement_ids.entries()) {
      const target = knowledgeById.get(requirementId);
      const issuePath = `${entry.relativePath}/entry_requirement_ids/${index}`;
      if (!target) {
        issues.push({
          code: "topic.missing_reference",
          path: issuePath,
          message: `Unknown knowledge ID: ${requirementId}`,
        });
      } else if (target.type !== "requirement") {
        issues.push({
          code: "topic.reference_type",
          path: issuePath,
          message: `${requirementId} is ${target.type}; expected requirement.`,
        });
      } else if (topic.lifecycle_status === "approved" && target.lifecycle_status !== "approved") {
        issues.push({
          code: "topic.approved_dependency",
          path: issuePath,
          message: `Approved topic ${topic.id} depends on ${requirementId} with status ${target.lifecycle_status}.`,
        });
      }
    }

    const entryIds = new Set(topic.entry_requirement_ids);
    for (const [index, objectId] of topic.context_object_ids.entries()) {
      const target = knowledgeById.get(objectId);
      const issuePath = `${entry.relativePath}/context_object_ids/${index}`;
      if (entryIds.has(objectId)) {
        issues.push({
          code: "topic.duplicate_reference",
          path: issuePath,
          message: `${objectId} is already an entry Requirement.`,
        });
      }
      if (!target) {
        issues.push({
          code: "topic.missing_reference",
          path: issuePath,
          message: `Unknown knowledge ID: ${objectId}`,
        });
      } else if (topic.lifecycle_status === "approved" && target.lifecycle_status !== "approved") {
        issues.push({
          code: "topic.approved_dependency",
          path: issuePath,
          message: `Approved topic ${topic.id} depends on ${objectId} with status ${target.lifecycle_status}.`,
        });
      }
    }
  }

  for (const entry of topics) {
    const topic = entry.object;
    if (topic.lifecycle_status !== "approved") {
      continue;
    }

    const entryRequirementsAreResolvable = topic.entry_requirement_ids.every((id) =>
      knowledgeById.get(id)?.type === "requirement");
    const contextObjectsAreResolvable = topic.context_object_ids.every((id) => knowledgeById.has(id));
    if (!entryRequirementsAreResolvable || !contextObjectsAreResolvable) {
      continue;
    }

    const resolvedEntries = resolveTopicEntries([topic], knowledgeEntries);
    for (const resolvedEntry of resolvedEntries) {
      if (resolvedEntry.object.lifecycle_status !== "approved") {
        issues.push({
          code: "topic.non_approved_closure_object",
          path: `${entry.relativePath}/resolved/${resolvedEntry.object.id}`,
          message: `Approved topic ${topic.id} resolves ${resolvedEntry.object.id} with status ${resolvedEntry.object.lifecycle_status}.`,
        });
      }
    }

    const closureIssues = validateKnowledgeGraph(resolvedEntries, {
      allowExternalHistoricalReferences: true,
    });
    for (const issue of closureIssues) {
      issues.push({
        code: `topic.closure.${issue.code}`,
        path: `${entry.relativePath}/resolved/${issue.path}`,
        message: issue.message,
      });
    }
  }

  return sortIssues(issues);
}

export async function validateTopics(
  topicDirectory: string,
  topicSchemaPath: string,
  knowledgeEntries: LoadedKnowledgeObject[],
): Promise<TopicValidationReport> {
  const loaded = await loadTopicDirectory(topicDirectory);
  const issues = [...loaded.issues];

  if (issues.length === 0) {
    issues.push(...await validateSchema(loaded.entries, path.resolve(topicSchemaPath)));
  }
  if (issues.length === 0) {
    issues.push(...validateTopicGraph(loaded.entries, knowledgeEntries));
  }

  return { entries: loaded.entries, issues: sortIssues(issues) };
}

function sortKnowledgeEntries(entries: LoadedKnowledgeObject[]): LoadedKnowledgeObject[] {
  const order = new Map(KNOWLEDGE_TYPES.map((type, index) => [type, index]));
  return [...entries].sort((left, right) =>
    (order.get(left.object.type) ?? 99) - (order.get(right.object.type) ?? 99)
    || left.object.id.localeCompare(right.object.id));
}

export function resolveTopicEntries(
  topics: TopicManifest[],
  knowledgeEntries: LoadedKnowledgeObject[],
): LoadedKnowledgeObject[] {
  const entriesById = new Map(knowledgeEntries.map((entry) => [entry.object.id, entry]));
  const objects = knowledgeEntries.map((entry) => asTypedObject(entry.object));
  const controls = objects.filter((object): object is ControlObject => object.type === "control");
  const decisions = objects.filter((object): object is DecisionObject => object.type === "decision");
  const verifications = objects.filter((object): object is VerificationObject => object.type === "verification");
  const selectedIds = new Set<string>();
  const queue: string[] = [];

  const select = (id: string): void => {
    if (!selectedIds.has(id)) {
      if (!entriesById.has(id)) {
        throw new Error(`Unknown knowledge ID in topic selection: ${id}`);
      }
      selectedIds.add(id);
      queue.push(id);
    }
  };

  for (const topic of topics) {
    for (const id of [...topic.entry_requirement_ids, ...topic.context_object_ids]) {
      select(id);
    }
  }

  while (queue.length > 0) {
    const id = queue.shift()!;
    const entry = entriesById.get(id)!;
    const object = asTypedObject(entry.object);

    for (const reference of knowledgeObjectReferences(entry.object)) {
      if (reference.dependency) {
        select(reference.targetId);
      }
    }

    if (object.type === "requirement") {
      for (const control of controls) {
        if (control.requirement_refs.some((reference) => reference.requirement_id === object.id)) {
          select(control.id);
        }
      }
      for (const decision of decisions) {
        if (decision.subject_requirement_ids.includes(object.id)) {
          select(decision.id);
        }
      }
    } else if (object.type === "control") {
      for (const verification of verifications) {
        if (verification.control_ids.includes(object.id)) {
          select(verification.id);
        }
      }
      for (const decision of decisions) {
        if (decision.subject_control_ids.includes(object.id)) {
          select(decision.id);
        }
      }
    }
  }

  return sortKnowledgeEntries([...selectedIds].map((id) => entriesById.get(id)!));
}
