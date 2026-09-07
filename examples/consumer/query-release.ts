import { promises as fs } from "node:fs";
import path from "node:path";
import { pathToFileURL } from "node:url";
import {
  KnowledgeIndex,
  loadKnowledgeBundle,
  type ArtifactSchemaPaths,
} from "../../src/release-reader.js";
import { stableJson } from "../../src/stable-json.js";

function manifestInputPath(
  inputs: Record<string, unknown>,
  key: string,
  repositoryRoot: string,
): string | undefined {
  const input = inputs[key];
  if (input === undefined) {
    return undefined;
  }
  if (input === null || typeof input !== "object" || Array.isArray(input)) {
    throw new Error(`Release manifest input ${key} must be an object.`);
  }
  const inputPath = (input as Record<string, unknown>).path;
  if (typeof inputPath !== "string" || inputPath.length === 0) {
    throw new Error(`Release manifest input ${key} must define path.`);
  }
  const resolved = path.resolve(repositoryRoot, inputPath);
  const relative = path.relative(repositoryRoot, resolved);
  if (relative.startsWith("..") || path.isAbsolute(relative)) {
    throw new Error(`Release manifest input ${key} resolves outside the repository.`);
  }
  return resolved;
}

export async function resolveReleaseSchemaPaths(
  repositoryRoot: string,
  releaseVersion: string,
): Promise<ArtifactSchemaPaths> {
  const manifestPath = path.join(repositoryRoot, `releases/${releaseVersion}/manifest.json`);
  const manifest = JSON.parse(await fs.readFile(manifestPath, "utf8")) as unknown;
  if (manifest === null || typeof manifest !== "object" || Array.isArray(manifest)) {
    throw new Error(`${manifestPath} must contain one JSON object.`);
  }
  const inputs = (manifest as Record<string, unknown>).inputs;
  if (inputs === null || typeof inputs !== "object" || Array.isArray(inputs)) {
    throw new Error(`${manifestPath} must define inputs.`);
  }
  const inputRecord = inputs as Record<string, unknown>;
  const releaseArtifactSchema = manifestInputPath(inputRecord, "release_artifact_schema", repositoryRoot);
  const knowledgeObjectSchema = manifestInputPath(inputRecord, "schema", repositoryRoot);
  const topicManifestSchema = manifestInputPath(inputRecord, "topic_schema", repositoryRoot);
  if (!releaseArtifactSchema || !knowledgeObjectSchema) {
    throw new Error(`${manifestPath} does not define the required release and knowledge Schema inputs.`);
  }
  return {
    releaseArtifactSchema,
    knowledgeObjectSchema,
    ...(topicManifestSchema ? { topicManifestSchema } : {}),
  };
}

export async function main(arguments_: string[]): Promise<number> {
  const requirementId = arguments_[0] ?? "req-full-change-controlled-lifecycle";
  const releaseVersion = arguments_[1] ?? "v0.1.0";
  if (!/^v\d+\.\d+\.\d+$/.test(releaseVersion)) {
    throw new Error(`Release version must use vMAJOR.MINOR.PATCH format: ${releaseVersion}`);
  }
  const repositoryRoot = path.resolve(import.meta.dirname, "../..");
  const releaseDirectory = path.join(repositoryRoot, `releases/${releaseVersion}`);
  const schemaPaths = await resolveReleaseSchemaPaths(repositoryRoot, releaseVersion);
  const bundle = await loadKnowledgeBundle(
    path.join(releaseDirectory, "knowledge.json"),
    releaseVersion,
    schemaPaths,
  );
  const trace = new KnowledgeIndex(bundle).traceRequirement(requirementId);
  process.stdout.write(stableJson(trace));
  return 0;
}

const invokedPath = process.argv[1] ? pathToFileURL(path.resolve(process.argv[1])).href : "";
if (import.meta.url === invokedPath) {
  main(process.argv.slice(2)).catch((error: unknown) => {
    console.error(error instanceof Error ? error.message : String(error));
    process.exitCode = 1;
  });
}
