import path from "node:path";
import { pathToFileURL } from "node:url";
import { KnowledgeIndex, loadKnowledgeBundle } from "../../src/release-reader.js";
import { stableJson } from "../../src/stable-json.js";

export async function main(arguments_: string[]): Promise<number> {
  const requirementId = arguments_[0] ?? "req-full-change-controlled-lifecycle";
  const repositoryRoot = path.resolve(import.meta.dirname, "../..");
  const releaseDirectory = path.join(repositoryRoot, "releases/v0.1.0");
  const bundle = await loadKnowledgeBundle(
    path.join(releaseDirectory, "knowledge.json"),
    "v0.1.0",
    {
      releaseArtifactSchema: path.join(repositoryRoot, "schemas/v0.1/release-artifact.schema.json"),
      knowledgeObjectSchema: path.join(repositoryRoot, "schemas/v0.1/knowledge-object.schema.json"),
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

