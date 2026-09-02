import { promises as fs } from "node:fs";
import {
  asTypedObject,
  type ControlObject,
  type KnowledgeObject,
  type ProvisionObject,
  type RequirementObject,
  type SourceObject,
  type VerificationObject,
} from "./model.js";
import type { UnresolvedItem } from "./release.js";
import { assertMatchesSchema } from "./schema-validator.js";

export interface ArtifactSchemaPaths {
  releaseArtifactSchema: string;
  knowledgeObjectSchema: string;
}

export interface KnowledgeBundle {
  $schema: string;
  bundle_schema_version: string;
  release_version: string;
  release_level: string;
  released_on: string;
  content_sha256: string;
  unresolved_items: UnresolvedItem[];
  objects: KnowledgeObject[];
}

export interface AgentContext {
  $schema: string;
  context_schema_version: string;
  release_version: string;
  release_level: string;
  released_on: string;
  content_sha256: string;
  usage_constraints: string[];
  unresolved_items: UnresolvedItem[];
  objects: KnowledgeObject[];
}

export interface ProvisionTrace {
  relation: string;
  provision: ProvisionObject;
  source: SourceObject;
}

interface VerificationDetails extends Record<string, unknown> {
  id: string;
  type: "verification";
  title: string;
}

export interface VerificationTrace {
  verification: VerificationDetails;
  evidence_requirements: VerificationObject["evidence_requirements"];
}

export interface ControlTrace {
  relation: string;
  control: ControlObject;
  verifications: VerificationTrace[];
}

export interface RequirementTrace {
  release_version: string;
  release_level: string;
  content_sha256: string;
  requirement: RequirementObject;
  provisions: ProvisionTrace[];
  controls: ControlTrace[];
  unresolved_items: UnresolvedItem[];
}

export interface AgentAnswer {
  release_version: string;
  content_sha256: string;
  requirement_id: string;
  statement: string;
  citations: Array<{
    provision_id: string;
    locator: string;
    relation: string;
    source_id: string;
    authority_level: string;
  }>;
  controls: Array<{
    control_id: string;
    verification_ids: string[];
    evidence_keys: string[];
  }>;
  unresolved_items: UnresolvedItem[];
  usage_constraints: string[];
}

function assertRecord(value: unknown, filePath: string): asserts value is Record<string, unknown> {
  if (value === null || typeof value !== "object" || Array.isArray(value)) {
    throw new Error(`${filePath} must contain one JSON object.`);
  }
}

async function loadArtifact(
  filePath: string,
  expectedVersion: string,
  schemaPaths: ArtifactSchemaPaths,
): Promise<Record<string, unknown>> {
  const value = JSON.parse(await fs.readFile(filePath, "utf8")) as unknown;
  assertRecord(value, filePath);
  await assertMatchesSchema(
    value,
    schemaPaths.releaseArtifactSchema,
    [schemaPaths.knowledgeObjectSchema],
  );

  if (value.release_version !== expectedVersion) {
    throw new Error(
      `Release version mismatch for ${filePath}: expected ${expectedVersion}, received ${String(value.release_version)}.`,
    );
  }
  return value;
}

export async function loadKnowledgeBundle(
  filePath: string,
  expectedVersion: string,
  schemaPaths: ArtifactSchemaPaths,
): Promise<KnowledgeBundle> {
  const value = await loadArtifact(filePath, expectedVersion, schemaPaths);
  if (value.bundle_schema_version !== "0.1.0") {
    throw new Error(`${filePath} is not a v0.1 knowledge bundle.`);
  }
  return value as unknown as KnowledgeBundle;
}

export async function loadAgentContext(
  filePath: string,
  expectedVersion: string,
  schemaPaths: ArtifactSchemaPaths,
): Promise<AgentContext> {
  const value = await loadArtifact(filePath, expectedVersion, schemaPaths);
  if (value.context_schema_version !== "0.1.0") {
    throw new Error(`${filePath} is not a v0.1 Agent context.`);
  }
  return value as unknown as AgentContext;
}

export class KnowledgeIndex {
  readonly objectsById: Map<string, KnowledgeObject>;

  constructor(readonly bundle: Pick<KnowledgeBundle, "release_version" | "release_level" | "content_sha256" | "unresolved_items" | "objects">) {
    this.objectsById = new Map();
    for (const object of bundle.objects) {
      if (this.objectsById.has(object.id)) {
        throw new Error(`Duplicate object ID in release bundle: ${object.id}`);
      }
      this.objectsById.set(object.id, object);
    }
  }

  private getObject<T extends KnowledgeObject["type"]>(
    id: string,
    type: T,
  ): Extract<ReturnType<typeof asTypedObject>, { type: T }> {
    const object = this.objectsById.get(id);
    if (!object) {
      throw new Error(`Unknown knowledge object: ${id}`);
    }
    if (object.type !== type) {
      throw new Error(`${id} is ${object.type}; expected ${type}.`);
    }
    return asTypedObject(object) as Extract<ReturnType<typeof asTypedObject>, { type: T }>;
  }

  sourceToRequirements(sourceId: string): RequirementObject[] {
    this.getObject(sourceId, "source");
    const provisionIds = new Set(
      this.bundle.objects
        .map(asTypedObject)
        .filter((object): object is ProvisionObject => object.type === "provision" && object.source_id === sourceId)
        .map((object) => object.id),
    );
    return this.bundle.objects
      .map(asTypedObject)
      .filter((object): object is RequirementObject =>
        object.type === "requirement"
        && object.provision_refs.some((reference) => provisionIds.has(reference.provision_id)))
      .sort((left, right) => left.id.localeCompare(right.id));
  }

  requirementToControls(requirementId: string): ControlObject[] {
    this.getObject(requirementId, "requirement");
    return this.bundle.objects
      .map(asTypedObject)
      .filter((object): object is ControlObject =>
        object.type === "control"
        && object.requirement_refs.some((reference) => reference.requirement_id === requirementId))
      .sort((left, right) => left.id.localeCompare(right.id));
  }

  controlToEvidence(controlId: string): VerificationTrace[] {
    this.getObject(controlId, "control");
    return this.bundle.objects
      .map(asTypedObject)
      .filter((object): object is VerificationObject =>
        object.type === "verification" && object.control_ids.includes(controlId))
      .sort((left, right) => left.id.localeCompare(right.id))
      .map((verification) => {
        const { evidence_requirements: evidenceRequirements, ...verificationDetails } = verification;
        return {
          verification: verificationDetails as VerificationDetails,
          evidence_requirements: evidenceRequirements,
        };
      });
  }

  traceRequirement(requirementId: string): RequirementTrace {
    const requirement = this.getObject(requirementId, "requirement") as RequirementObject;
    const provisions = requirement.provision_refs.map((reference) => {
      const provision = this.getObject(reference.provision_id, "provision") as ProvisionObject;
      const source = this.getObject(provision.source_id, "source") as SourceObject;
      return { relation: reference.relation, provision, source };
    });
    const controls = this.requirementToControls(requirementId).map((control) => {
      const relation = control.requirement_refs.find((reference) =>
        reference.requirement_id === requirementId)?.relation ?? "unknown";
      return {
        relation,
        control,
        verifications: this.controlToEvidence(control.id),
      };
    });
    const relatedObjectIds = new Set<string>([
      requirement.id,
      ...provisions.flatMap((item) => [item.provision.id, item.source.id]),
      ...controls.flatMap((item) => [
        item.control.id,
        ...item.verifications.map((verification) => verification.verification.id),
      ]),
    ]);

    return {
      release_version: this.bundle.release_version,
      release_level: this.bundle.release_level,
      content_sha256: this.bundle.content_sha256,
      requirement,
      provisions,
      controls,
      unresolved_items: this.bundle.unresolved_items.filter((item) => relatedObjectIds.has(item.object_id)),
    };
  }
}

export function answerFromAgentContext(context: AgentContext, requirementId: string): AgentAnswer {
  const trace = new KnowledgeIndex(context).traceRequirement(requirementId);
  return {
    release_version: trace.release_version,
    content_sha256: trace.content_sha256,
    requirement_id: trace.requirement.id,
    statement: trace.requirement.statement,
    citations: trace.provisions.map((item) => ({
      provision_id: item.provision.id,
      locator: item.provision.locator.label,
      relation: item.relation,
      source_id: item.source.id,
      authority_level: String(item.source.authority_level),
    })),
    controls: trace.controls.map((item) => ({
      control_id: item.control.id,
      verification_ids: item.verifications.map((verification) => verification.verification.id),
      evidence_keys: item.verifications.flatMap((verification) =>
        verification.evidence_requirements.map((evidence) => evidence.key)),
    })),
    unresolved_items: trace.unresolved_items,
    usage_constraints: context.usage_constraints,
  };
}
