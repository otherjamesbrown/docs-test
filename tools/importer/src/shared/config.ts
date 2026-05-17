import fs from 'node:fs/promises';
import YAML from 'yaml';
import { z } from 'zod';
import { sourcesConfigPath } from './paths';
import type { SourcesConfig } from './types';

const areaSchema = z.enum([
  'redstor',
  'titanhq-platform',
  'spamtitan-kb',
  'spamtitan-skellig',
  'spamtitan-legacy',
  'phishtitan-kb',
  'phishtitan-docs',
]);

const freshdeskFolderSchema = z.object({
  folder: z.string().min(1),
  source_url: z.string().min(1),
  route_base: z.string().min(1),
  limit: z.number().int().positive(),
});

const freshdeskSourceSchema = z.object({
  id: z.string().min(1),
  type: z.literal('freshdesk_public'),
  base_url: z.string().min(1),
  area: areaSchema,
  seeds: z.array(z.string().min(1)).optional(),
  folders: z.array(freshdeskFolderSchema).min(1),
  scoped_kb_roots: z.array(z.string().min(1)).optional(),
  exclude_mirrors: z.array(z.string().min(1)).optional(),
});

const docsSeedSchema = z.union([
  z.string().min(1),
  z
    .object({
      path: z.string().min(1).optional(),
      url: z.string().min(1).optional(),
      child_depth: z.number().int().min(0).optional(),
    })
    .refine((seed) => seed.path || seed.url, 'Docs seed must include path or url'),
]);

const docsSourceSchema = z.object({
  id: z.string().min(1),
  type: z.literal('titanhq_static_docs_branch'),
  base_url: z.string().min(1),
  area: areaSchema,
  route_base: z.string().min(1),
  breadcrumbs: z.array(z.string().min(1)).min(1),
  seeds: z.array(docsSeedSchema).min(1),
  branch_label: z.string().min(1).optional(),
  product_stream: z.string().min(1).optional(),
  version_range: z.string().min(1).optional(),
  preferred: z.boolean().optional(),
});

const sourcesConfigSchema = z.object({
  products: z
    .array(
      z.object({
        id: z.string().min(1),
        label: z.string().min(1),
        canonical_host: z.string().min(1),
        sources: z.object({
          kb: sourceListSchema(freshdeskSourceSchema),
          docs: sourceListSchema(docsSourceSchema),
        }),
      }),
    )
    .min(1),
});

function sourceListSchema<T extends z.ZodType>(schema: T) {
  return z
    .preprocess((value) => {
      if (value === undefined) return undefined;
      return Array.isArray(value) ? value : [value];
    }, z.array(schema))
    .optional();
}

export async function readSourcesConfig(): Promise<SourcesConfig> {
  const content = await fs.readFile(sourcesConfigPath, 'utf8');
  return parseSourcesConfig(content);
}

export function parseSourcesConfig(content: string): SourcesConfig {
  const parsed = YAML.parse(content);
  const result = sourcesConfigSchema.safeParse(parsed);
  if (result.success) return result.data;

  const message = result.error.issues
    .map((issue) => `${issue.path.join('.') || '<root>'}: ${issue.message}`)
    .join('\n');
  throw new Error(`Invalid migration/sources.yml:\n${message}`);
}
