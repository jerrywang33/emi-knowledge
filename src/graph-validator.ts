import path from "node:path";
import {
  KNOWLEDGE_TYPES,
  asTypedObject,
  isKnowledgeType,
  type ControlObject,
  type DecisionObject,
  type KnowledgeObject,
  type KnowledgeType,
  type LoadedKnowledgeObject,
  type RequirementObject,
  type ValidationIssue,
  type VerificationObject,
} from "./model.js";

const TYPE_DIRECTORIES: Record<KnowledgeType, string> = {
  source: "sources",
  provision: "provisions",
  requirement: "requirements",
  decision: "decisions",
  control: "controls",
  verification: "verifications",
};

interface ObjectReference {
  targetId: string;
  expectedType: KnowledgeType;
  path: string;
  dependency: boolean;
}

function objectReferences(object: KnowledgeObject): ObjectReference[] {
  if (!isKnowledgeType(object.type)) {
    return [];
  }

  const typed = asTypedObject(object);
  const references: ObjectReference[] = object.replaces.map((targetId, index) => ({
    targetId,
    expectedType: object.type,
    path: `replaces/${index}`,
    dependency: false,
  }));

  switch (typed.type) {
    case "source":
      references.push(...typed.source_relations.map((relation, index) => ({
        targetId: relation.source_id,
        expectedType: "source" as const,
        path: `source_relations/${index}/source_id`,
        dependency: true,
      })));
      break;
    case "provision":
      references.push({
        targetId: typed.source_id,
        expectedType: "source",
        path: "source_id",
        dependency: true,
      });
      break;
    case "requirement":
      references.push(...typed.provision_refs.map((reference, index) => ({
        targetId: reference.provision_id,
        expectedType: "provision" as const,
        path: `provision_refs/${index}/provision_id`,
        dependency: true,
      })));
      break;
    case "decision":
      references.push(
        ...typed.subject_requirement_ids.map((targetId, index) => ({
          targetId,
          expectedType: "requirement" as const,
          path: `subject_requirement_ids/${index}`,
          dependency: true,
        })),
        ...typed.subject_control_ids.map((targetId, index) => ({
          targetId,
          expectedType: "control" as const,
          path: `subject_control_ids/${index}`,
          dependency: true,
        })),
        ...typed.basis_provision_ids.map((targetId, index) => ({
          targetId,
          expectedType: "provision" as const,
          path: `basis_provision_ids/${index}`,
          dependency: true,
        })),
      );
      break;
    case "control":
      references.push(...typed.requirement_refs.map((reference, index) => ({
        targetId: reference.requirement_id,
        expectedType: "requirement" as const,
        path: `requirement_refs/${index}/requirement_id`,
        dependency: true,
      })));
      break;
    case "verification":
      references.push(...typed.control_ids.map((targetId, index) => ({
        targetId,
        expectedType: "control" as const,
        path: `control_ids/${index}`,
        dependency: true,
      })));
      break;
  }

  return references;
}

function findDuplicates(values: string[]): string[] {
  const seen = new Set<string>();
  const duplicates = new Set<string>();
  for (const value of values) {
    if (seen.has(value)) {
      duplicates.add(value);
    }
    seen.add(value);
  }
  return [...duplicates].sort();
}

function checkLocalUniqueness(entry: LoadedKnowledgeObject, issues: ValidationIssue[]): void {
  const object = asTypedObject(entry.object);
  const addDuplicates = (code: string, field: string, values: string[]): void => {
    for (const duplicate of findDuplicates(values)) {
      issues.push({
        code,
        path: `${entry.relativePath}/${field}`,
        message: `Duplicate local key: ${duplicate}`,
      });
    }
  };

  switch (object.type) {
    case "source":
      addDuplicates(
        "graph.duplicate_registry_identifier",
        "registry_identifiers",
        object.registry_identifiers.map((item) => `${item.registry}\u0000${item.value}`),
      );
      addDuplicates(
        "graph.duplicate_source_relation",
        "source_relations",
        object.source_relations.map((item) => `${item.relation}\u0000${item.source_id}`),
      );
      break;
    case "requirement":
      addDuplicates(
        "graph.duplicate_provision_ref",
        "provision_refs",
        object.provision_refs.map((item) => `${item.provision_id}\u0000${item.relation}`),
      );
      break;
    case "control":
      addDuplicates(
        "graph.duplicate_requirement_ref",
        "requirement_refs",
        object.requirement_refs.map((item) => `${item.requirement_id}\u0000${item.relation}`),
      );
      addDuplicates(
        "graph.duplicate_implementation_rule",
        "implementation_rules",
        object.implementation_rules.map((item) => item.key),
      );
      for (const rule of object.implementation_rules) {
        addDuplicates(
          "graph.duplicate_parameter",
          `implementation_rules/${rule.key}/parameters`,
          rule.parameters.map((parameter) => parameter.name),
        );
      }
      break;
    case "verification":
      addDuplicates(
        "graph.duplicate_evidence_requirement",
        "evidence_requirements",
        object.evidence_requirements.map((item) => item.key),
      );
      break;
  }
}

function checkDateRange(
  entry: LoadedKnowledgeObject,
  start: string | null | undefined,
  end: string | null | undefined,
  field: string,
  issues: ValidationIssue[],
): void {
  if (start !== null && start !== undefined && end !== null && end !== undefined && end < start) {
    issues.push({
      code: "graph.invalid_date_range",
      path: `${entry.relativePath}/${field}`,
      message: `${field} must not be earlier than its start date.`,
    });
  }
}

function checkDateRanges(entry: LoadedKnowledgeObject, issues: ValidationIssue[]): void {
  const object = asTypedObject(entry.object);
  if (object.type === "source") {
    checkDateRange(
      entry,
      object.effective_from as string | null,
      object.effective_to as string | null,
      "effective_to",
      issues,
    );
  } else if (object.type === "requirement") {
    checkDateRange(
      entry,
      object.applicability.effective_from,
      object.applicability.effective_to,
      "applicability/effective_to",
      issues,
    );
  } else if (object.type === "decision") {
    checkDateRange(
      entry,
      object.effective_from as string,
      object.effective_to as string | null,
      "effective_to",
      issues,
    );
  }
}

function checkSensitiveContent(entry: LoadedKnowledgeObject, issues: ValidationIssue[]): void {
  const patterns: Array<{ code: string; pattern: RegExp; description: string }> = [
    {
      code: "sensitive.private_key",
      pattern: /-----BEGIN (?:RSA |EC |OPENSSH )?PRIVATE KEY-----/,
      description: "Private key material is not allowed in public knowledge files.",
    },
    {
      code: "sensitive.github_token",
      pattern: /\bgh[pousr]_[A-Za-z0-9_]{20,}\b/,
      description: "GitHub token-like material is not allowed in public knowledge files.",
    },
    {
      code: "sensitive.aws_access_key",
      pattern: /\b(?:AKIA|ASIA)[A-Z0-9]{16}\b/,
      description: "AWS access-key-like material is not allowed in public knowledge files.",
    },
    {
      code: "sensitive.credential_field",
      pattern: /^\s*(?:password|api[_-]?key|access[_-]?token|client[_-]?secret)\s*:\s*(?!null\s*$|institution_defined\s*$|pending\s*$)\S+/im,
      description: "Credential values are not allowed in public knowledge files.",
    },
  ];

  for (const item of patterns) {
    if (item.pattern.test(entry.rawContent)) {
      issues.push({
        code: item.code,
        path: entry.relativePath,
        message: item.description,
      });
    }
  }
}

function checkReplacementCycles(
  objectsById: Map<string, KnowledgeObject>,
  entriesById: Map<string, LoadedKnowledgeObject>,
  issues: ValidationIssue[],
): void {
  const visited = new Set<string>();
  const visiting = new Set<string>();

  function visit(id: string, trail: string[]): void {
    if (visiting.has(id)) {
      const cycleStart = trail.indexOf(id);
      const cycle = [...trail.slice(cycleStart), id];
      const entry = entriesById.get(id);
      issues.push({
        code: "graph.replacement_cycle",
        path: entry?.relativePath ?? id,
        message: `Replacement cycle: ${cycle.join(" -> ")}`,
      });
      return;
    }
    if (visited.has(id)) {
      return;
    }

    visiting.add(id);
    const object = objectsById.get(id);
    for (const targetId of object?.replaces ?? []) {
      if (objectsById.has(targetId)) {
        visit(targetId, [...trail, id]);
      }
    }
    visiting.delete(id);
    visited.add(id);
  }

  for (const id of [...objectsById.keys()].sort()) {
    visit(id, []);
  }
}

function hasApprovedDecision(
  decisions: DecisionObject[],
  decisionTypes: DecisionObject["decision_type"][],
  subjectKind: "requirement" | "control",
  subjectId: string,
): boolean {
  return decisions.some((decision) =>
    decision.lifecycle_status === "approved"
    && decisionTypes.includes(decision.decision_type)
    && (subjectKind === "requirement"
      ? decision.subject_requirement_ids.includes(subjectId)
      : decision.subject_control_ids.includes(subjectId)));
}

function checkConfirmationSupport(
  requirements: RequirementObject[],
  controls: ControlObject[],
  decisions: DecisionObject[],
  entriesById: Map<string, LoadedKnowledgeObject>,
  issues: ValidationIssue[],
): void {
  for (const requirement of requirements) {
    if (requirement.confirmation.status === "confirmed"
      && !hasApprovedDecision(decisions, ["interpretation", "applicability"], "requirement", requirement.id)) {
      issues.push({
        code: "graph.confirmation_without_decision",
        path: entriesById.get(requirement.id)?.relativePath ?? requirement.id,
        message: "A confirmed Requirement needs an approved interpretation or applicability Decision.",
      });
    }
    if (requirement.applicability.basis === "decision_defined"
      && !hasApprovedDecision(decisions, ["applicability"], "requirement", requirement.id)) {
      issues.push({
        code: "graph.applicability_without_decision",
        path: entriesById.get(requirement.id)?.relativePath ?? requirement.id,
        message: "A decision-defined applicability needs an approved applicability Decision.",
      });
    }
  }

  for (const control of controls) {
    if (control.confirmation.status === "confirmed"
      && !hasApprovedDecision(decisions, ["implementation_choice"], "control", control.id)) {
      issues.push({
        code: "graph.confirmation_without_decision",
        path: entriesById.get(control.id)?.relativePath ?? control.id,
        message: "A confirmed Control needs an approved implementation-choice Decision.",
      });
    }
  }
}

function checkCompleteChain(
  objects: KnowledgeObject[],
  entriesById: Map<string, LoadedKnowledgeObject>,
  issues: ValidationIssue[],
): void {
  const sources = objects.filter((object) => object.type === "source");
  const provisions = objects.filter((object) => object.type === "provision").map(asTypedObject);
  const requirements = objects.filter((object) => object.type === "requirement").map(asTypedObject) as RequirementObject[];
  const controls = objects.filter((object) => object.type === "control").map(asTypedObject) as ControlObject[];
  const verifications = objects.filter((object) => object.type === "verification").map(asTypedObject) as VerificationObject[];

  for (const source of sources) {
    if (!provisions.some((provision) => provision.type === "provision" && provision.source_id === source.id)) {
      issues.push({
        code: "graph.source_without_provision",
        path: entriesById.get(source.id)?.relativePath ?? source.id,
        message: "A Source in this complete-chain release needs at least one Provision.",
      });
    }
  }

  for (const provision of provisions) {
    if (provision.type === "provision"
      && !requirements.some((requirement) =>
        requirement.provision_refs.some((reference) => reference.provision_id === provision.id))) {
      issues.push({
        code: "graph.provision_without_requirement",
        path: entriesById.get(provision.id)?.relativePath ?? provision.id,
        message: "A Provision in this complete-chain release needs at least one Requirement reference.",
      });
    }
  }

  for (const requirement of requirements) {
    const implementingControls = controls.filter((control) =>
      control.requirement_refs.some((reference) =>
        reference.requirement_id === requirement.id && reference.relation === "implements"));
    if (implementingControls.length === 0) {
      issues.push({
        code: "graph.requirement_without_control",
        path: entriesById.get(requirement.id)?.relativePath ?? requirement.id,
        message: "A Requirement needs at least one Control with an implements relation.",
      });
    }
  }

  for (const control of controls) {
    if (!verifications.some((verification) => verification.control_ids.includes(control.id))) {
      issues.push({
        code: "graph.control_without_verification",
        path: entriesById.get(control.id)?.relativePath ?? control.id,
        message: "A Control needs at least one Verification.",
      });
    }
  }
}

export function countReferences(entries: LoadedKnowledgeObject[]): number {
  return entries.reduce((count, entry) => count + objectReferences(entry.object).length, 0);
}

export function validateKnowledgeGraph(entries: LoadedKnowledgeObject[]): ValidationIssue[] {
  const issues: ValidationIssue[] = [];
  const objectsById = new Map<string, KnowledgeObject>();
  const entriesById = new Map<string, LoadedKnowledgeObject>();

  for (const entry of entries) {
    const object = entry.object;
    if (!isKnowledgeType(object.type)) {
      continue;
    }

    const extension = path.posix.extname(entry.relativePath);
    const expectedPath = `${TYPE_DIRECTORIES[object.type]}/${object.id}${extension}`;
    if (entry.relativePath !== expectedPath) {
      issues.push({
        code: "graph.file_location",
        path: entry.relativePath,
        message: `Expected ${expectedPath} for ${object.id}.`,
      });
    }

    if (objectsById.has(object.id)) {
      issues.push({
        code: "graph.duplicate_id",
        path: entry.relativePath,
        message: `Duplicate knowledge ID: ${object.id}`,
      });
    } else {
      objectsById.set(object.id, object);
      entriesById.set(object.id, entry);
    }

    checkLocalUniqueness(entry, issues);
    checkDateRanges(entry, issues);
    checkSensitiveContent(entry, issues);
  }

  const locatorOwners = new Map<string, LoadedKnowledgeObject>();
  for (const entry of entries) {
    const object = asTypedObject(entry.object);
    if (object.type !== "provision") {
      continue;
    }
    const key = `${object.source_id}\u0000${object.locator.label}`;
    const existing = locatorOwners.get(key);
    if (existing) {
      issues.push({
        code: "graph.duplicate_locator",
        path: entry.relativePath,
        message: `Duplicate locator ${object.locator.label} for source ${object.source_id}; first used in ${existing.relativePath}.`,
      });
    } else {
      locatorOwners.set(key, entry);
    }
  }

  for (const entry of entries) {
    const owner = entry.object;
    for (const reference of objectReferences(owner)) {
      const target = objectsById.get(reference.targetId);
      if (!target) {
        issues.push({
          code: "graph.missing_reference",
          path: `${entry.relativePath}/${reference.path}`,
          message: `Unknown knowledge ID: ${reference.targetId}`,
        });
        continue;
      }
      if (target.type !== reference.expectedType) {
        issues.push({
          code: "graph.reference_type",
          path: `${entry.relativePath}/${reference.path}`,
          message: `${reference.targetId} is ${target.type}; expected ${reference.expectedType}.`,
        });
      }
      if (reference.targetId === owner.id) {
        issues.push({
          code: "graph.self_reference",
          path: `${entry.relativePath}/${reference.path}`,
          message: "A knowledge object cannot reference itself here.",
        });
      }
      if (reference.dependency && owner.lifecycle_status === "approved" && target.lifecycle_status !== "approved") {
        issues.push({
          code: "graph.approved_dependency",
          path: `${entry.relativePath}/${reference.path}`,
          message: `Approved object ${owner.id} depends on ${reference.targetId} with status ${target.lifecycle_status}.`,
        });
      }
    }
  }

  checkReplacementCycles(objectsById, entriesById, issues);

  const objects = [...objectsById.values()];
  const requirements = objects.filter((object) => object.type === "requirement") as RequirementObject[];
  const controls = objects.filter((object) => object.type === "control") as ControlObject[];
  const decisions = objects.filter((object) => object.type === "decision") as DecisionObject[];
  checkConfirmationSupport(requirements, controls, decisions, entriesById, issues);
  checkCompleteChain(objects, entriesById, issues);

  return issues.sort((left, right) =>
    left.path.localeCompare(right.path) || left.code.localeCompare(right.code) || left.message.localeCompare(right.message));
}

export function emptyCounts(): Record<KnowledgeType, number> {
  return Object.fromEntries(KNOWLEDGE_TYPES.map((type) => [type, 0])) as Record<KnowledgeType, number>;
}

