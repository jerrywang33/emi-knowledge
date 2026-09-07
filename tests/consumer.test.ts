import assert from "node:assert/strict";
import { promises as fs } from "node:fs";
import path from "node:path";
import test from "node:test";
import {
  KnowledgeIndex,
  answerFromAgentContext,
  loadAgentContext,
  loadKnowledgeBundle,
} from "../src/release-reader.js";

const ROOT = path.resolve(import.meta.dirname, "..");
const RELEASE = path.join(ROOT, "releases/v0.1.0");
const SCHEMAS = {
  releaseArtifactSchema: path.join(ROOT, "schemas/v0.1/release-artifact.schema.json"),
  knowledgeObjectSchema: path.join(ROOT, "schemas/v0.1/knowledge-object.schema.json"),
};
const RELEASE_V02 = path.join(ROOT, "releases/v0.2.0");
const SCHEMAS_V02 = {
  releaseArtifactSchema: path.join(ROOT, "schemas/v0.2/release-artifact.schema.json"),
  knowledgeObjectSchema: path.join(ROOT, "schemas/v0.1/knowledge-object.schema.json"),
  topicManifestSchema: path.join(ROOT, "schemas/v0.1/topic-manifest.schema.json"),
};

test("a product can query source, requirement, control, verification, and evidence relations", async () => {
  const bundle = await loadKnowledgeBundle(path.join(RELEASE, "knowledge.json"), "v0.1.0", SCHEMAS);
  const index = new KnowledgeIndex(bundle);

  const sourceRequirements = index.sourceToRequirements("src-eu-reg-2024-1774");
  assert.ok(sourceRequirements.some((requirement) => requirement.id === "req-full-change-approval-independence"));
  assert.ok(sourceRequirements.some((requirement) => requirement.id === "req-simplified-production-change-test-approval"));

  const controls = index.requirementToControls("req-full-change-approval-independence");
  assert.deepEqual(controls.map((control) => control.id), ["ctl-change-role-separation"]);

  const verifications = index.controlToEvidence("ctl-change-role-separation");
  assert.deepEqual(verifications.map((item) => item.verification.id), ["ver-change-role-separation"]);
  assert.deepEqual(
    verifications.flatMap((item) => item.evidence_requirements.map((evidence) => evidence.key)),
    ["role-record", "approval-audit-log"],
  );
});

test("an Agent context is version locked and preserves citations, authority, and unresolved items", async () => {
  const contextPath = path.join(RELEASE, "agent-context.json");
  const context = await loadAgentContext(contextPath, "v0.1.0", SCHEMAS);
  const answer = answerFromAgentContext(context, "req-full-change-fallback");

  assert.equal(answer.release_version, "v0.1.0");
  assert.equal(answer.requirement_id, "req-full-change-fallback");
  assert.ok(answer.citations.some((citation) =>
    citation.provision_id === "prv-rts-2024-1774-art-17-1-e"
    && citation.authority_level === "binding_law"));
  assert.ok(answer.citations.some((citation) =>
    citation.source_id === "src-mfsa-ict-change-management-2026"
    && citation.relation === "supporting_context"
    && citation.authority_level === "official_information"));
  assert.deepEqual(answer.controls.map((control) => control.control_id), ["ctl-change-fallback-recovery"]);
  assert.ok(answer.unresolved_items.some((item) => item.path.includes("fallback-test-depth")));
  assert.ok(answer.unresolved_items.some((item) => item.path.includes("retention_period")));
  assert.ok(answer.usage_constraints.some((constraint) => constraint.includes("Do not infer institution-specific")));

  await assert.rejects(
    loadAgentContext(contextPath, "v0.2.0", SCHEMAS),
    /Release version mismatch/,
  );
});

test("human, Agent, and product artifacts carry the same fixed facts", async () => {
  const [humanDocument, bundle, context, manifest] = await Promise.all([
    fs.readFile(path.join(RELEASE, "README.md"), "utf8"),
    loadKnowledgeBundle(path.join(RELEASE, "knowledge.json"), "v0.1.0", SCHEMAS),
    loadAgentContext(path.join(RELEASE, "agent-context.json"), "v0.1.0", SCHEMAS),
    fs.readFile(path.join(RELEASE, "manifest.json"), "utf8").then(
      (content) => JSON.parse(content) as Record<string, unknown>,
    ),
  ]);

  assert.equal(bundle.content_sha256, context.content_sha256);
  assert.equal(bundle.content_sha256, manifest.content_sha256);
  assert.deepEqual(bundle.objects, context.objects);
  assert.deepEqual(bundle.unresolved_items, context.unresolved_items);
  assert.equal(bundle.objects.length, 57);

  const sectionStart = humanDocument.indexOf("### `req-full-change-approval-independence`");
  assert.ok(sectionStart >= 0);
  const sectionEnd = humanDocument.indexOf("\n### `", sectionStart + 1);
  const section = humanDocument.slice(sectionStart, sectionEnd);
  assert.match(section, /`prv-rts-2024-1774-art-17-1-b`/);
  assert.match(section, /`src-eu-reg-2024-1774`/);
  assert.match(section, /`ctl-change-role-separation`/);
  assert.match(section, /`ver-change-role-separation`/);
  assert.match(section, /`role-record`/);
  assert.match(humanDocument, new RegExp(bundle.content_sha256));
});

test("a product can query the fixed v0.2 incident classification chain", async () => {
  const bundle = await loadKnowledgeBundle(
    path.join(RELEASE_V02, "knowledge.json"),
    "v0.2.0",
    SCHEMAS_V02,
  );
  const index = new KnowledgeIndex(bundle);

  assert.deepEqual(
    bundle.topics?.map((topic) => topic.id),
    ["dora-ict-change-management", "dora-ict-incident-management-reporting"],
  );
  assert.deepEqual(
    index.requirementToControls("req-major-incident-determination").map((control) => control.id),
    ["ctl-incident-classification"],
  );
  const evidence = index.controlToEvidence("ctl-incident-classification");
  assert.deepEqual(evidence.map((item) => item.verification.id), ["ver-incident-classification"]);
  assert.deepEqual(
    evidence.flatMap((item) => item.evidence_requirements.map((requirement) => requirement.key)),
    ["classification-assessment", "classification-history"],
  );

  await assert.rejects(
    loadKnowledgeBundle(path.join(RELEASE_V02, "knowledge.json"), "v0.2.0", {
      releaseArtifactSchema: SCHEMAS_V02.releaseArtifactSchema,
      knowledgeObjectSchema: SCHEMAS_V02.knowledgeObjectSchema,
    }),
    /requires topicManifestSchema/,
  );
});

test("the v0.2 Agent context preserves reporting citations and institution decisions", async () => {
  const context = await loadAgentContext(
    path.join(RELEASE_V02, "agent-context.json"),
    "v0.2.0",
    SCHEMAS_V02,
  );
  const answer = answerFromAgentContext(context, "req-initial-notification-deadline");

  assert.equal(answer.release_version, "v0.2.0");
  assert.ok(answer.citations.some((citation) =>
    citation.provision_id === "prv-rts-2025-301-art-5-1-a"
    && citation.source_id === "src-eu-reg-2025-301"
    && citation.authority_level === "binding_law"));
  assert.deepEqual(answer.controls.map((control) => control.control_id), ["ctl-regulatory-report-workflow"]);
  assert.ok(answer.unresolved_items.some((item) => item.path.includes("member-state-business-calendar")));
  assert.ok(answer.unresolved_items.some((item) => item.path.includes("retention_period")));
  assert.ok(answer.usage_constraints.some((constraint) => constraint.includes("topics fixed in this release")));
});

test("v0.2 human, Agent, and product artifacts carry the same topic-selected facts", async () => {
  const [humanDocument, bundle, context, manifest] = await Promise.all([
    fs.readFile(path.join(RELEASE_V02, "README.md"), "utf8"),
    loadKnowledgeBundle(path.join(RELEASE_V02, "knowledge.json"), "v0.2.0", SCHEMAS_V02),
    loadAgentContext(path.join(RELEASE_V02, "agent-context.json"), "v0.2.0", SCHEMAS_V02),
    fs.readFile(path.join(RELEASE_V02, "manifest.json"), "utf8").then(
      (content) => JSON.parse(content) as Record<string, unknown>,
    ),
  ]);

  assert.equal(bundle.content_sha256, context.content_sha256);
  assert.equal(bundle.content_sha256, manifest.content_sha256);
  assert.deepEqual(bundle.topics, context.topics);
  assert.deepEqual(bundle.objects, context.objects);
  assert.deepEqual(bundle.unresolved_items, context.unresolved_items);
  assert.equal(bundle.objects.length, 256);
  assert.match(humanDocument, /dora-ict-change-management/);
  assert.match(humanDocument, /dora-ict-incident-management-reporting/);
  assert.match(humanDocument, /`req-major-incident-determination`/);
  assert.match(humanDocument, /`ctl-incident-classification`/);
  assert.match(humanDocument, /`ver-incident-classification`/);
  assert.match(humanDocument, /`classification-assessment`/);
  assert.match(humanDocument, new RegExp(bundle.content_sha256));
});
