import assert from "node:assert/strict";
import { promises as fs } from "node:fs";
import os from "node:os";
import path from "node:path";
import test from "node:test";
import { generateRelease, type ReleaseConfig } from "../src/release.js";

const ROOT = path.resolve(import.meta.dirname, "..");

const CONFIG: ReleaseConfig = {
  release_version: "v0.1.0",
  release_level: "engineering_baseline",
  released_on: "2026-09-02",
  knowledge_directory: "knowledge/v0.1",
  output_directory: "releases/v0.1.0",
  tool_version: "0.1.0",
  inputs: {
    source_baseline: {
      id: "DORA-SOURCES-2026-08-31-R2",
      path: "docs/sources/dora-source-baseline.md",
    },
    landscape: {
      id: "DORA-LANDSCAPE-2026-08-31",
      path: "docs/dora/dora-landscape.md",
    },
    knowledge_model: {
      id: "KNOWLEDGE-MODEL-V0.1",
      path: "docs/model/v0.1-knowledge-model.md",
    },
    schema: {
      id: "KNOWLEDGE-OBJECT-SCHEMA-V0.1",
      version: "0.1.0",
      path: "schemas/v0.1/knowledge-object.schema.json",
    },
    release_artifact_schema: {
      id: "RELEASE-ARTIFACT-SCHEMA-V0.1",
      version: "0.1.0",
      path: "schemas/v0.1/release-artifact.schema.json",
    },
  },
  scope: {
    title: "EMI Knowledge v0.1 DORA ICT Change Management",
    includes: ["DORA ICT change management complete knowledge chain."],
    excludes: ["Institution-specific legal applicability and compliance conclusions."],
  },
  review: {
    reviewed_by_role: "emi_knowledge_engineering_maintainer",
    reviewed_on: "2026-09-02",
    scope: "Source mapping, model conformance, engineering controls, verification, and release reproducibility.",
  },
  limitations: ["Institution-specific parameters and evidence retention periods remain unresolved."],
};

const TOPIC_CONFIG: ReleaseConfig = {
  ...CONFIG,
  release_version: "v0.2.0",
  released_on: "2026-09-07",
  tool_version: "0.2.0",
  inputs: {
    ...CONFIG.inputs,
    release_artifact_schema: {
      id: "RELEASE-ARTIFACT-SCHEMA-V0.2",
      version: "0.2.0",
      path: "schemas/v0.2/release-artifact.schema.json",
    },
  },
  scope: {
    title: "EMI Knowledge v0.2 topic-selected release test",
    includes: ["The approved DORA ICT change management topic."],
    excludes: ["Draft topics and institution-specific conclusions."],
  },
  topic_selection: {
    directory: "knowledge/topics",
    schema: {
      id: "TOPIC-MANIFEST-SCHEMA-V0.1",
      version: "0.1.0",
      path: "schemas/v0.1/topic-manifest.schema.json",
    },
    topic_ids: ["dora-ict-change-management"],
  },
};

test("release generation is deterministic and exposes unresolved institution items", async (context) => {
  const temporaryRoot = await fs.mkdtemp(path.join(os.tmpdir(), "emi-knowledge-release-"));
  context.after(async () => fs.rm(temporaryRoot, { recursive: true, force: true }));
  const firstDirectory = path.join(temporaryRoot, "first");
  const secondDirectory = path.join(temporaryRoot, "second");

  const first = await generateRelease(CONFIG, ROOT, firstDirectory);
  const second = await generateRelease(CONFIG, ROOT, secondDirectory);

  assert.deepEqual(first.artifacts, second.artifacts);
  assert.equal(first.manifest.content_sha256, second.manifest.content_sha256);
  assert.equal(first.manifest.object_count, 57);
  assert.equal(first.manifest.reference_count, 147);
  assert.ok(first.manifest.unresolved_items.length > 0);
  assert.ok(first.manifest.unresolved_items.every((item) =>
    item.status === "institution_defined" || item.status === "pending"));

  const files = (await fs.readdir(firstDirectory)).sort();
  assert.deepEqual(files, ["README.md", "agent-context.json", "knowledge.json", "manifest.json"]);
});

test("checked-in v0.1.0 artifacts match the fixed release config", async (context) => {
  const releaseDirectory = path.join(ROOT, "releases/v0.1.0");
  const config = JSON.parse(
    await fs.readFile(path.join(releaseDirectory, "release.config.json"), "utf8"),
  ) as ReleaseConfig;
  const temporaryDirectory = await fs.mkdtemp(path.join(os.tmpdir(), "emi-knowledge-checked-release-"));
  context.after(async () => fs.rm(temporaryDirectory, { recursive: true, force: true }));

  const generated = await generateRelease(config, ROOT, temporaryDirectory);
  for (const [artifactPath, generatedContent] of Object.entries(generated.artifacts)) {
    const checkedInContent = await fs.readFile(path.join(releaseDirectory, artifactPath), "utf8");
    assert.equal(checkedInContent, generatedContent, `${artifactPath} has drifted from release.config.json`);
  }
});

test("a topic-selected release fixes topic and object revisions", async (context) => {
  const temporaryDirectory = await fs.mkdtemp(path.join(os.tmpdir(), "emi-knowledge-topic-release-"));
  context.after(async () => fs.rm(temporaryDirectory, { recursive: true, force: true }));

  const generated = await generateRelease(TOPIC_CONFIG, ROOT, temporaryDirectory);
  const knowledgeBundle = JSON.parse(generated.artifacts["knowledge.json"]!) as {
    topics: Array<{ id: string; revision: number }>;
    objects: Array<{ id: string }>;
  };

  assert.equal(generated.manifest.manifest_schema_version, "0.2.0");
  assert.equal(generated.manifest.object_count, 57);
  assert.equal(generated.manifest.reference_count, 147);
  assert.deepEqual(generated.manifest.topics?.map((topic) => topic.id), ["dora-ict-change-management"]);
  assert.equal(generated.manifest.inputs.topic_schema?.version, "0.1.0");
  assert.deepEqual(
    knowledgeBundle.topics.map((topic) => ({ id: topic.id, revision: topic.revision })),
    [{ id: "dora-ict-change-management", revision: 1 }],
  );
  assert.equal(knowledgeBundle.objects.length, 57);
  assert.match(generated.artifacts["README.md"]!, /dora-ict-change-management/);
});

test("a release rejects draft and unknown topic selections", async (context) => {
  const temporaryDirectory = await fs.mkdtemp(path.join(os.tmpdir(), "emi-knowledge-topic-reject-"));
  context.after(async () => fs.rm(temporaryDirectory, { recursive: true, force: true }));

  await assert.rejects(
    generateRelease({
      ...TOPIC_CONFIG,
      topic_selection: {
        ...TOPIC_CONFIG.topic_selection!,
        topic_ids: ["dora-ict-incident-management-reporting"],
      },
    }, ROOT, temporaryDirectory),
    /non-approved topics: dora-ict-incident-management-reporting/,
  );

  await assert.rejects(
    generateRelease({
      ...TOPIC_CONFIG,
      topic_selection: {
        ...TOPIC_CONFIG.topic_selection!,
        topic_ids: ["dora-unknown-topic"],
      },
    }, ROOT, temporaryDirectory),
    /Unknown topic ID in release config: dora-unknown-topic/,
  );
});
