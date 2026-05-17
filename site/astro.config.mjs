import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import YAML from 'yaml';
import { basePath } from '../shared/site.mjs';

const repoRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const sources = YAML.parse(fs.readFileSync(path.join(repoRoot, 'migration/sources.yml'), 'utf8'));

export default defineConfig({
  site: 'https://otherjamesbrown.github.io',
  base: basePath,
  integrations: [
    starlight({
      title: 'Docs Platform POC',
      social: [
        {
          icon: 'github',
          label: 'GitHub',
          href: 'https://github.com/otherjamesbrown/docs-test',
        },
      ],
      editLink: {
        baseUrl: 'https://github.com/otherjamesbrown/docs-test/edit/main/site/',
      },
      tableOfContents: {
        minHeadingLevel: 2,
        maxHeadingLevel: 4,
      },
      sidebar: buildSidebar(sources),
    }),
  ],
});

function buildSidebar(config) {
  const redstor = product(config, 'redstor');
  const platform = product(config, 'titanhq-platform');
  const spamtitan = product(config, 'spamtitan');

  return [
    {
      label: redstor.label,
      items: [
        {
          label: 'Knowledge Base',
          items: [{ label: 'Overview', slug: 'redstor/kb' }, ...freshdeskFolderItems(redstor)],
        },
      ],
    },
    {
      label: 'TitanHQ',
      items: [
        {
          label: 'Platform',
          items: docsSources(platform).map((source) => ({ label: 'Docs', slug: source.route_base })),
        },
        {
          label: 'Products',
          items: [
            {
              label: spamtitan.label,
              items: [
                { label: 'Overview', slug: productRoot(spamtitan) },
                { label: 'Knowledge Base', slug: `${productRoot(spamtitan)}/kb` },
                { label: 'Docs', slug: `${productRoot(spamtitan)}/docs` },
                ...docsSources(spamtitan).map((source) => ({
                  label: source.version_range?.startsWith('9') ? 'Skellig 9' : 'Legacy 8',
                  slug: source.route_base,
                })),
              ],
            },
          ],
        },
      ],
    },
  ];
}

function product(config, id) {
  const found = config.products.find((item) => item.id === id);
  if (!found) throw new Error(`Missing product ${id} in migration/sources.yml`);
  return found;
}

function freshdeskFolderItems(productConfig) {
  return asArray(productConfig.sources.kb).flatMap((source) =>
    source.folders.map((folder) => ({ label: folderLabel(folder.folder), slug: folder.route_base })),
  );
}

function docsSources(productConfig) {
  return asArray(productConfig.sources.docs);
}

function productRoot(productConfig) {
  const kbRoute = productConfig.sources.kb?.[0]?.folders?.[0]?.route_base;
  const docsRoute = docsSources(productConfig)[0]?.route_base;
  const route = kbRoute ?? docsRoute;
  if (!route) throw new Error(`Cannot infer route root for ${productConfig.id}`);
  return route.replace(/\/(?:kb|docs)(?:\/.*)?$/, '');
}

function folderLabel(value) {
  return value.replace(/^Getting Started:\s*/, '');
}

function asArray(value) {
  if (!value) return [];
  return Array.isArray(value) ? value : [value];
}
