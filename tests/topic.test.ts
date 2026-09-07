import assert from "node:assert/strict";
import path from "node:path";
import test from "node:test";
import { validateKnowledgeGraph } from "../src/graph-validator.js";
import type { LoadedKnowledgeObject, LoadedTopicManifest } from "../src/model.js";
import { validateSchema } from "../src/schema-validator.js";
import {
  loadTopicDirectory,
  resolveTopicEntries,
  validateTopicGraph,
  validateTopics,
} from "../src/topic.js";
import { validateKnowledge } from "../src/validation.js";

const ROOT = path.resolve(import.meta.dirname, "..");
const KNOWLEDGE = path.join(ROOT, "knowledge/v0.1");
const KNOWLEDGE_SCHEMA = path.join(ROOT, "schemas/v0.1/knowledge-object.schema.json");
const TOPICS = path.join(ROOT, "knowledge/topics");
const TOPIC_SCHEMA = path.join(ROOT, "schemas/v0.1/topic-manifest.schema.json");

function cloneTopicEntries(entries: LoadedTopicManifest[]): LoadedTopicManifest[] {
  return entries.map((entry) => ({
    ...entry,
    object: structuredClone(entry.object),
  }));
}

function cloneKnowledgeEntries(entries: LoadedKnowledgeObject[]): LoadedKnowledgeObject[] {
  return entries.map((entry) => ({
    ...entry,
    object: structuredClone(entry.object),
  }));
}

async function validKnowledgeEntries(): Promise<LoadedKnowledgeObject[]> {
  const report = await validateKnowledge(KNOWLEDGE, KNOWLEDGE_SCHEMA, {
    requireCompleteChain: false,
  });
  assert.deepEqual(report.issues, []);
  return report.entries;
}

test("topic manifests pass Schema and reference validation", async () => {
  const knowledgeEntries = await validKnowledgeEntries();
  const report = await validateTopics(TOPICS, TOPIC_SCHEMA, knowledgeEntries);

  assert.deepEqual(report.issues, []);
  assert.equal(report.entries.length, 2);
  assert.deepEqual(
    report.entries.map((entry) => entry.object.id).sort(),
    ["dora-ict-change-management", "dora-ict-incident-management-reporting"],
  );
});

test("the approved change topic resolves a complete deterministic object closure", async () => {
  const knowledgeEntries = await validKnowledgeEntries();
  const loadedTopics = await loadTopicDirectory(TOPICS);
  assert.deepEqual(loadedTopics.issues, []);
  const changeTopic = loadedTopics.entries.find((entry) =>
    entry.object.id === "dora-ict-change-management")!;

  const first = resolveTopicEntries([changeTopic.object], knowledgeEntries);
  const second = resolveTopicEntries([changeTopic.object], [...knowledgeEntries].reverse());

  assert.equal(first.length, 57);
  assert.deepEqual(first.map((entry) => entry.object.id), second.map((entry) => entry.object.id));
  assert.deepEqual(validateKnowledgeGraph(first), []);
});

test("a draft topic may have no entry Requirements", async () => {
  const knowledgeEntries = await validKnowledgeEntries();
  const loadedTopics = await loadTopicDirectory(TOPICS);
  const incidentTopic = loadedTopics.entries.find((entry) =>
    entry.object.id === "dora-ict-incident-management-reporting")!;

  assert.equal(incidentTopic.object.lifecycle_status, "draft");
  assert.deepEqual(resolveTopicEntries([incidentTopic.object], knowledgeEntries), []);
});

test("topic resolution keeps historical replacements outside the runtime closure", async () => {
  const knowledgeEntries = cloneKnowledgeEntries(await validKnowledgeEntries());
  const loadedTopics = await loadTopicDirectory(TOPICS);
  const changeTopic = loadedTopics.entries.find((entry) =>
    entry.object.id === "dora-ict-change-management")!;
  const current = knowledgeEntries.find((entry) =>
    entry.object.id === changeTopic.object.entry_requirement_ids[0])!;
  const historicalId = "req-historical-change-rule";
  current.object.replaces = [historicalId];
  knowledgeEntries.push({
    ...current,
    object: {
      ...structuredClone(current.object),
      id: historicalId,
      lifecycle_status: "superseded",
      replaces: [],
    },
    relativePath: `requirements/${historicalId}.yaml`,
  });

  const selected = resolveTopicEntries([changeTopic.object], knowledgeEntries);
  assert.ok(!selected.some((entry) => entry.object.id === historicalId));
  assert.deepEqual(validateKnowledgeGraph(selected, {
    requireCompleteChain: false,
    allowExternalHistoricalReferences: true,
  }), []);
});

test("topic validation rejects unknown fields and incomplete approved topics", async () => {
  const loadedTopics = await loadTopicDirectory(TOPICS);
  const entries = cloneTopicEntries(loadedTopics.entries);
  const incidentTopic = entries.find((entry) =>
    entry.object.id === "dora-ict-incident-management-reporting")!;
  incidentTopic.object.uncontrolled_field = true;
  incidentTopic.object.lifecycle_status = "approved";

  const issues = await validateSchema(entries, TOPIC_SCHEMA);
  assert.ok(issues.some((issue) => issue.code === "schema.additionalProperties"));
  assert.ok(issues.some((issue) =>
    issue.code === "schema.minItems" && issue.path.includes("entry_requirement_ids")));
  assert.ok(issues.some((issue) =>
    issue.code === "schema.const" && issue.path.includes("coverage")));
});

test("topic graph validation rejects missing, mistyped, and non-approved dependencies", async () => {
  const knowledgeEntries = cloneKnowledgeEntries(await validKnowledgeEntries());
  const loadedTopics = await loadTopicDirectory(TOPICS);
  const entries = cloneTopicEntries(loadedTopics.entries);
  const changeTopic = entries.find((entry) => entry.object.id === "dora-ict-change-management")!;
  const firstRequirementId = changeTopic.object.entry_requirement_ids[0]!;
  const firstRequirement = knowledgeEntries.find((entry) => entry.object.id === firstRequirementId)!;
  firstRequirement.object.lifecycle_status = "draft";
  changeTopic.object.entry_requirement_ids.push("req-missing-topic-entry");
  changeTopic.object.entry_requirement_ids.push("src-eu-reg-2022-2554");
  changeTopic.object.context_object_ids.push(firstRequirementId);
  changeTopic.rawContent += `\naccess_token: ${["ghp", "A".repeat(30)].join("_")}\n`;

  const issues = validateTopicGraph(entries, knowledgeEntries);
  assert.ok(issues.some((issue) => issue.code === "topic.missing_reference"));
  assert.ok(issues.some((issue) => issue.code === "topic.reference_type"));
  assert.ok(issues.some((issue) => issue.code === "topic.approved_dependency"));
  assert.ok(issues.some((issue) => issue.code === "topic.duplicate_reference"));
  assert.ok(issues.some((issue) => issue.code === "sensitive.github_token"));
});

test("an approved topic rejects a non-approved object in its resolved closure", async () => {
  const knowledgeEntries = cloneKnowledgeEntries(await validKnowledgeEntries());
  const loadedTopics = await loadTopicDirectory(TOPICS);
  const changeTopic = loadedTopics.entries.find((entry) =>
    entry.object.id === "dora-ict-change-management")!;
  const verification = knowledgeEntries.find((entry) => entry.object.type === "verification")!;
  verification.object.lifecycle_status = "draft";

  const issues = validateTopicGraph([changeTopic], knowledgeEntries);

  assert.ok(issues.some((issue) =>
    issue.code === "topic.non_approved_closure_object"
    && issue.path.endsWith(`/resolved/${verification.object.id}`)));
});
