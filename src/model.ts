export const KNOWLEDGE_TYPES = [
  "source",
  "provision",
  "requirement",
  "decision",
  "control",
  "verification",
] as const;

export type KnowledgeType = (typeof KNOWLEDGE_TYPES)[number];

export interface Confirmation {
  status: "not_required" | "pending" | "confirmed";
  open_questions: string[];
}

export interface KnowledgeObject extends Record<string, unknown> {
  id: string;
  type: KnowledgeType;
  schema_version: string;
  revision: number;
  title: string;
  language: string;
  lifecycle_status: "draft" | "in_review" | "approved" | "superseded" | "retired";
  confirmation: Confirmation;
  replaces: string[];
}

export interface SourceObject extends KnowledgeObject {
  type: "source";
  source_relations: Array<{ relation: string; source_id: string }>;
  registry_identifiers: Array<{ registry: string; value: string }>;
}

export interface ProvisionObject extends KnowledgeObject {
  type: "provision";
  source_id: string;
  locator: {
    label: string;
    segments: Array<{ kind: string; value: string }>;
  };
}

export interface ScopeSelector {
  mode: "all" | "include" | "exclude" | "not_applicable" | "unknown";
  values: string[];
}

export interface Applicability extends Record<string, unknown> {
  basis: "source_defined" | "decision_defined" | "pending";
  jurisdictions: ScopeSelector;
  entity_types: ScopeSelector;
  license_roles: ScopeSelector;
  activities: ScopeSelector;
  products: ScopeSelector;
  data_categories: ScopeSelector;
  framework_branches: ScopeSelector;
  effective_from: string | null;
  effective_to: string | null;
  conditions: string[];
  exclusions: string[];
}

export interface RequirementObject extends KnowledgeObject {
  type: "requirement";
  statement: string;
  derivation_type: "direct" | "combined" | "interpreted";
  provision_refs: Array<{ provision_id: string; relation: string }>;
  applicability: Applicability;
}

export interface DecisionObject extends KnowledgeObject {
  type: "decision";
  decision_type: "interpretation" | "applicability" | "exception" | "implementation_choice" | "risk_acceptance";
  subject_requirement_ids: string[];
  subject_control_ids: string[];
  basis_provision_ids: string[];
}

export interface ImplementationParameter {
  name: string;
  value: string | number | boolean | null;
  unit: string | null;
}

export interface ImplementationRule {
  key: string;
  parameter_status: "not_applicable" | "fixed" | "institution_defined" | "pending";
  parameters: ImplementationParameter[];
  open_questions: string[];
}

export interface ControlObject extends KnowledgeObject {
  type: "control";
  requirement_refs: Array<{ requirement_id: string; relation: string }>;
  implementation_rules: ImplementationRule[];
}

export interface EvidenceRequirement {
  key: string;
  description: string;
  source_status: "known" | "institution_defined" | "pending";
  source_system: string | null;
  retention_status: "fixed" | "institution_defined" | "pending" | "not_applicable";
  retention_period: string | null;
  open_questions: string[];
}

export interface VerificationObject extends KnowledgeObject {
  type: "verification";
  control_ids: string[];
  evidence_requirements: EvidenceRequirement[];
}

export type TypedKnowledgeObject =
  | SourceObject
  | ProvisionObject
  | RequirementObject
  | DecisionObject
  | ControlObject
  | VerificationObject;

export interface LoadedKnowledgeObject {
  object: KnowledgeObject;
  filePath: string;
  relativePath: string;
  rawContent: string;
}

export interface ValidationIssue {
  code: string;
  path: string;
  message: string;
}

export interface ValidationReport {
  entries: LoadedKnowledgeObject[];
  issues: ValidationIssue[];
  counts: Record<KnowledgeType, number>;
  referenceCount: number;
}

export function isKnowledgeType(value: unknown): value is KnowledgeType {
  return typeof value === "string" && KNOWLEDGE_TYPES.includes(value as KnowledgeType);
}

export function asTypedObject(object: KnowledgeObject): TypedKnowledgeObject {
  return object as TypedKnowledgeObject;
}

