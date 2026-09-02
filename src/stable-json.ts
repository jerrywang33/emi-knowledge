import { createHash } from "node:crypto";

function normalize(value: unknown): unknown {
  if (Array.isArray(value)) {
    return value.map(normalize);
  }

  if (value !== null && typeof value === "object") {
    const record = value as Record<string, unknown>;
    return Object.fromEntries(
      Object.keys(record)
        .sort()
        .map((key) => [key, normalize(record[key])]),
    );
  }

  return value;
}

export function stableJson(value: unknown): string {
  return `${JSON.stringify(normalize(value), null, 2)}\n`;
}

export function sha256(value: string | Buffer): string {
  return createHash("sha256").update(value).digest("hex");
}

