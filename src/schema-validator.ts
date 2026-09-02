import { promises as fs } from "node:fs";
import { Ajv2020, type ErrorObject, type ValidateFunction } from "ajv/dist/2020.js";
import formatsModule, { type FormatsPlugin } from "ajv-formats";
import type { LoadedKnowledgeObject, ValidationIssue } from "./model.js";

function formatSchemaError(error: ErrorObject): string {
  const detail = error.message ?? error.keyword;
  return `${error.instancePath || "/"} ${detail}`;
}

export async function compileKnowledgeSchema(schemaPath: string): Promise<ValidateFunction> {
  const schema = JSON.parse(await fs.readFile(schemaPath, "utf8")) as object;
  const addFormats = ((formatsModule as unknown as { default?: FormatsPlugin }).default
    ?? formatsModule) as unknown as FormatsPlugin;
  const ajv = new Ajv2020({
    allErrors: true,
    strict: true,
    strictTypes: false,
  });
  addFormats(ajv);
  return ajv.compile(schema);
}

export async function validateSchema(
  entries: LoadedKnowledgeObject[],
  schemaPath: string,
): Promise<ValidationIssue[]> {
  const validate = await compileKnowledgeSchema(schemaPath);
  const issues: ValidationIssue[] = [];

  for (const entry of entries) {
    if (!validate(entry.object)) {
      for (const error of validate.errors ?? []) {
        issues.push({
          code: `schema.${error.keyword}`,
          path: `${entry.relativePath}${error.instancePath || ""}`,
          message: formatSchemaError(error),
        });
      }
    }
  }

  return issues;
}
