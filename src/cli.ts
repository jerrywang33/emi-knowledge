import path from "node:path";
import { pathToFileURL } from "node:url";
import { generateReleaseFromFile } from "./release.js";
import { resolveTopicEntries, validateTopics } from "./topic.js";
import { formatIssues, validateKnowledge } from "./validation.js";

function usage(): string {
  return [
    "Usage:",
    "  tsx src/cli.ts validate <knowledge-directory> <schema-path> [--allow-incomplete]",
    "  tsx src/cli.ts validate-topics <topic-directory> <topic-schema-path> <knowledge-directory> <knowledge-schema-path>",
    "  tsx src/cli.ts release <release-config-path>",
  ].join("\n");
}

export async function main(arguments_: string[]): Promise<number> {
  const [command, ...argumentsList] = arguments_;

  if (command === "validate") {
    const [knowledgeDirectory, schemaPath, validationMode] = argumentsList;
    if (!knowledgeDirectory || !schemaPath || (validationMode && validationMode !== "--allow-incomplete")) {
      console.error(usage());
      return 2;
    }

    const report = await validateKnowledge(knowledgeDirectory, schemaPath, {
      requireCompleteChain: validationMode !== "--allow-incomplete",
    });
    if (report.issues.length > 0) {
      console.error(formatIssues(report.issues));
      return 1;
    }

    console.log(`Validated ${report.entries.length} objects and ${report.referenceCount} references.`);
    console.log(JSON.stringify(report.counts, null, 2));
    return 0;
  }

  if (command === "validate-topics") {
    const [topicDirectory, topicSchemaPath, knowledgeDirectory, knowledgeSchemaPath] = argumentsList;
    if (!topicDirectory || !topicSchemaPath || !knowledgeDirectory || !knowledgeSchemaPath) {
      console.error(usage());
      return 2;
    }

    const knowledgeReport = await validateKnowledge(knowledgeDirectory, knowledgeSchemaPath, {
      requireCompleteChain: false,
    });
    if (knowledgeReport.issues.length > 0) {
      console.error(formatIssues(knowledgeReport.issues));
      return 1;
    }

    const topicReport = await validateTopics(topicDirectory, topicSchemaPath, knowledgeReport.entries);
    if (topicReport.issues.length > 0) {
      console.error(formatIssues(topicReport.issues));
      return 1;
    }

    console.log(`Validated ${topicReport.entries.length} topic manifests.`);
    for (const entry of [...topicReport.entries].sort((left, right) => left.object.id.localeCompare(right.object.id))) {
      const objectCount = resolveTopicEntries([entry.object], knowledgeReport.entries).length;
      console.log(`${entry.object.id}: ${objectCount} selected objects (${entry.object.lifecycle_status})`);
    }
    return 0;
  }

  if (command === "release") {
    const [configPath] = argumentsList;
    if (!configPath) {
      console.error(usage());
      return 2;
    }

    const result = await generateReleaseFromFile(path.resolve(configPath), process.cwd());
    console.log(`Generated ${result.manifest.release_version} in ${result.outputDirectory}.`);
    console.log(`Content SHA-256: ${result.manifest.content_sha256}`);
    return 0;
  }

  console.error(usage());
  return 2;
}

const invokedPath = process.argv[1] ? pathToFileURL(path.resolve(process.argv[1])).href : "";
if (import.meta.url === invokedPath) {
  main(process.argv.slice(2))
    .then((exitCode) => {
      process.exitCode = exitCode;
    })
    .catch((error: unknown) => {
      console.error(error instanceof Error ? error.message : String(error));
      process.exitCode = 1;
    });
}
