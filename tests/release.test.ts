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

