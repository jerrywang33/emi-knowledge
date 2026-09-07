import path from "node:path";
import { pathToFileURL } from "node:url";
import { KnowledgeIndex, loadKnowledgeBundle } from "../../src/release-reader.js";
import { stableJson } from "../../src/stable-json.js";

export async function main(arguments_: string[]): Promise<number> {
  const requirementId = arguments_[0] ?? "req-full-change-controlled-lifecycle";
  const releaseVersion = arguments_[1] ?? "v0.1.0";
  const versionMatch = /^v(\d+)\.(\d+)\.\d+$/.exec(releaseVersion);
  if (!versionMatch) {
    throw new Error(`Release version must use vMAJOR.MINOR.PATCH format: ${releaseVersion}`);
  }
  const schemaDirectory = `v${versionMatch[1]}.${versionMatch[2]}`;
  const repositoryRoot = path.resolve(import.meta.dirname, "../..");
  const releaseDirectory = path.join(repositoryRoot, `releases/${releaseVersion}`);
  const bundle = await loadKnowledgeBundle(
    path.join(releaseDirectory, "knowledge.json"),
    releaseVersion,
    {
      releaseArtifactSchema: path.join(repositoryRoot, `schemas/${schemaDirectory}/release-artifact.schema.json`),
      knowledgeObjectSchema: path.join(repositoryRoot, "schemas/v0.1/knowledge-object.schema.json"),
      ...(schemaDirectory === "v0.1"
        ? {}
        : { topicManifestSchema: path.join(repositoryRoot, "schemas/v0.1/topic-manifest.schema.json") }),
    },
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
