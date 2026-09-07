import { promises as fs } from "node:fs";
import path from "node:path";
import { parseDocument } from "yaml";
import type {
  KnowledgeObject,
  LoadedDocument,
  LoadedKnowledgeObject,
  ValidationIssue,
} from "./model.js";

const SUPPORTED_EXTENSIONS = new Set([".json", ".yaml", ".yml"]);

async function listKnowledgeFiles(directory: string): Promise<string[]> {
  const files: string[] = [];

  async function visit(currentDirectory: string): Promise<void> {
    const entries = await fs.readdir(currentDirectory, { withFileTypes: true });
    entries.sort((left, right) => left.name.localeCompare(right.name));

    for (const entry of entries) {
      const entryPath = path.join(currentDirectory, entry.name);
      if (entry.isDirectory()) {
        await visit(entryPath);
      } else if (entry.isFile() && SUPPORTED_EXTENSIONS.has(path.extname(entry.name).toLowerCase())) {
        files.push(entryPath);
      }
    }
  }

  await visit(directory);
  return files;
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return value !== null && typeof value === "object" && !Array.isArray(value);
}

function parseYaml(content: string, relativePath: string): { value?: unknown; issues: ValidationIssue[] } {
  const document = parseDocument(content, {
    prettyErrors: true,
    uniqueKeys: true,
  });

  if (document.errors.length > 0) {
    return {
      issues: document.errors.map((error) => ({
        code: "parse.yaml",
        path: relativePath,
        message: error.message,
      })),
    };
  }

  return { value: document.toJS(), issues: [] };
}

function parseJson(content: string, relativePath: string): { value?: unknown; issues: ValidationIssue[] } {
  try {
    return { value: JSON.parse(content) as unknown, issues: [] };
  } catch (error) {
    return {
      issues: [{
        code: "parse.json",
        path: relativePath,
        message: error instanceof Error ? error.message : String(error),
      }],
    };
  }
}

export interface LoadResult<T extends Record<string, unknown>> {
  entries: LoadedDocument<T>[];
  issues: ValidationIssue[];
}

export async function loadStructuredDirectory<T extends Record<string, unknown>>(
  directory: string,
  contentLabel: string,
): Promise<LoadResult<T>> {
  const absoluteDirectory = path.resolve(directory);
  const entries: LoadedDocument<T>[] = [];
  const issues: ValidationIssue[] = [];
  let files: string[];

  try {
    files = await listKnowledgeFiles(absoluteDirectory);
  } catch (error) {
    return {
      entries,
      issues: [{
        code: "load.directory",
        path: absoluteDirectory,
        message: error instanceof Error ? error.message : String(error),
      }],
    };
  }

  if (files.length === 0) {
    issues.push({
      code: "load.empty",
      path: absoluteDirectory,
      message: `No YAML or JSON ${contentLabel} were found.`,
    });
  }

  for (const filePath of files) {
    const relativePath = path.relative(absoluteDirectory, filePath).split(path.sep).join("/");
    const rawContent = await fs.readFile(filePath, "utf8");
    const parsed = path.extname(filePath).toLowerCase() === ".json"
      ? parseJson(rawContent, relativePath)
      : parseYaml(rawContent, relativePath);

    issues.push(...parsed.issues);
    if (parsed.value === undefined) {
      continue;
    }
    if (!isRecord(parsed.value)) {
      issues.push({
        code: "parse.object",
        path: relativePath,
        message: "A knowledge file must contain exactly one object.",
      });
      continue;
    }

    entries.push({
      object: parsed.value as T,
      filePath,
      relativePath,
      rawContent,
    });
  }

  return { entries, issues };
}

export async function loadKnowledgeDirectory(directory: string): Promise<LoadResult<KnowledgeObject>> {
  return loadStructuredDirectory<KnowledgeObject>(directory, "knowledge objects");
}
