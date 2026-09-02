import path from "node:path";
import { countReferences, emptyCounts, validateKnowledgeGraph } from "./graph-validator.js";
import { loadKnowledgeDirectory } from "./loader.js";
import type { LoadedKnowledgeObject, ValidationIssue, ValidationReport } from "./model.js";
import { validateSchema } from "./schema-validator.js";

function sortIssues(issues: ValidationIssue[]): ValidationIssue[] {
  return issues.sort((left, right) =>
    left.path.localeCompare(right.path) || left.code.localeCompare(right.code) || left.message.localeCompare(right.message));
}

export async function validateLoadedKnowledge(
  entries: LoadedKnowledgeObject[],
  schemaPath: string,
  initialIssues: ValidationIssue[] = [],
): Promise<ValidationReport> {
  const issues = [...initialIssues];
  let schemaIssues: ValidationIssue[] = [];

  if (initialIssues.length === 0) {
    schemaIssues = await validateSchema(entries, path.resolve(schemaPath));
    issues.push(...schemaIssues);
  }
  if (issues.length === 0) {
    issues.push(...validateKnowledgeGraph(entries));
  }

  const counts = emptyCounts();
  for (const entry of entries) {
    if (entry.object.type in counts) {
      counts[entry.object.type] += 1;
    }
  }

  return {
    entries,
    issues: sortIssues(issues),
    counts,
    referenceCount: countReferences(entries),
  };
}

export async function validateKnowledge(
  knowledgeDirectory: string,
  schemaPath: string,
): Promise<ValidationReport> {
  const loaded = await loadKnowledgeDirectory(knowledgeDirectory);
  return validateLoadedKnowledge(loaded.entries, schemaPath, loaded.issues);
}

export function formatIssues(issues: ValidationIssue[]): string {
  return issues.map((issue) => `${issue.path} [${issue.code}] ${issue.message}`).join("\n");
}

export function assertValid(report: ValidationReport): void {
  if (report.issues.length > 0) {
    throw new Error(`Knowledge validation failed:\n${formatIssues(report.issues)}`);
  }
}

