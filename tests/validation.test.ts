import assert from "node:assert/strict";
import test from "node:test";
import path from "node:path";
import { validateKnowledgeGraph } from "../src/graph-validator.js";
import { loadKnowledgeDirectory } from "../src/loader.js";
import type {
  ControlObject,
  DecisionObject,
  LoadedKnowledgeObject,
  RequirementObject,
} from "../src/model.js";
import { validateSchema } from "../src/schema-validator.js";
import { validateKnowledge } from "../src/validation.js";

const ROOT = path.resolve(import.meta.dirname, "..");
const KNOWLEDGE = path.join(ROOT, "knowledge/v0.1");
const SCHEMA = path.join(ROOT, "schemas/v0.1/knowledge-object.schema.json");

function cloneEntries(entries: LoadedKnowledgeObject[]): LoadedKnowledgeObject[] {
  return entries.map((entry) => ({
    ...entry,
    object: structuredClone(entry.object),
  }));
}

async function loadedEntries(): Promise<LoadedKnowledgeObject[]> {
  const loaded = await loadKnowledgeDirectory(KNOWLEDGE);
  assert.deepEqual(loaded.issues, []);
  return loaded.entries;
}

test("the v0.1 knowledge chain passes all validation layers", async () => {
  const report = await validateKnowledge(KNOWLEDGE, SCHEMA);
  assert.deepEqual(report.issues, []);
  assert.equal(report.entries.length, 57);
  assert.equal(report.referenceCount, 147);
  assert.deepEqual(report.counts, {
    source: 3,
    provision: 20,
    requirement: 15,
    decision: 3,
    control: 8,
    verification: 8,
  });
});

test("Schema validation rejects unknown fields", async () => {
  const entries = cloneEntries(await loadedEntries());
  entries[0]!.object.uncontrolled_field = true;
  const issues = await validateSchema(entries, SCHEMA);
  assert.ok(issues.some((issue) => issue.code === "schema.unevaluatedProperties"));
});

test("graph validation rejects duplicate IDs and broken references", async () => {
  const entries = cloneEntries(await loadedEntries());
  entries.push({ ...entries[0]!, object: structuredClone(entries[0]!.object) });
  const requirement = entries.find((entry) => entry.object.type === "requirement")!.object as RequirementObject;
  requirement.provision_refs[0]!.provision_id = "prv-missing-reference";
  const issues = validateKnowledgeGraph(entries);
  assert.ok(issues.some((issue) => issue.code === "graph.duplicate_id"));
  assert.ok(issues.some((issue) => issue.code === "graph.missing_reference"));
});

test("graph validation rejects target type and approval-state conflicts", async () => {
  const entries = cloneEntries(await loadedEntries());
  const requirement = entries.find((entry) => entry.object.type === "requirement")!.object as RequirementObject;
  const control = entries.find((entry) => entry.object.type === "control")!.object as ControlObject;
  requirement.provision_refs[0]!.provision_id = control.id;

  const source = entries.find((entry) => entry.object.type === "source")!.object;
  source.lifecycle_status = "draft";
  const issues = validateKnowledgeGraph(entries);
  assert.ok(issues.some((issue) => issue.code === "graph.reference_type"));
  assert.ok(issues.some((issue) => issue.code === "graph.approved_dependency"));
});

test("graph validation requires a decision for confirmed controls", async () => {
  const entries = cloneEntries(await loadedEntries());
  const control = entries.find((entry) => entry.object.type === "control")!.object as ControlObject;
  for (const entry of entries) {
    if (entry.object.type === "decision") {
      const decision = entry.object as DecisionObject;
      decision.subject_control_ids = decision.subject_control_ids.filter((id) => id !== control.id);
    }
  }
  const issues = validateKnowledgeGraph(entries);
  assert.ok(issues.some((issue) =>
    issue.code === "graph.confirmation_without_decision" && issue.path.includes(control.id)));
});

test("graph validation rejects replacement cycles and incomplete chains", async () => {
  const entries = cloneEntries(await loadedEntries());
  const controls = entries.filter((entry) => entry.object.type === "control").slice(0, 2);
  controls[0]!.object.replaces = [controls[1]!.object.id];
  controls[1]!.object.replaces = [controls[0]!.object.id];

  const requirement = entries.find((entry) => entry.object.type === "requirement")!.object as RequirementObject;
  for (const entry of entries) {
    if (entry.object.type === "control") {
      const control = entry.object as ControlObject;
      control.requirement_refs = control.requirement_refs.filter((reference) => reference.requirement_id !== requirement.id);
    }
  }

  const issues = validateKnowledgeGraph(entries);
  assert.ok(issues.some((issue) => issue.code === "graph.replacement_cycle"));
  assert.ok(issues.some((issue) =>
    issue.code === "graph.requirement_without_control" && issue.path.includes(requirement.id)));
});

test("graph validation rejects credential-like material", async () => {
  const entries = cloneEntries(await loadedEntries());
  const tokenLikeValue = ["ghp", "A".repeat(30)].join("_");
  entries[0]!.rawContent += `\naccess_token: ${tokenLikeValue}\n`;
  const issues = validateKnowledgeGraph(entries);
  assert.ok(issues.some((issue) => issue.code === "sensitive.github_token"));
  assert.ok(issues.some((issue) => issue.code === "sensitive.credential_field"));
});
