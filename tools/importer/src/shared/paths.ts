import path from 'node:path';
import { fileURLToPath } from 'node:url';
import type { PageCandidate } from './types';

export const repoRoot = path.resolve(fileURLToPath(new URL('../../../..', import.meta.url)));
export const siteDocsRoot = path.join(repoRoot, 'site/src/content/docs');
export const assetsRoot = path.join(repoRoot, 'site/public/imported-assets');
export const rawRoot = path.join(repoRoot, 'migration/raw');
export const reportPath = path.join(repoRoot, 'migration/import-report.json');
export const manifestPath = path.join(repoRoot, 'migration/manifest.json');
export const linkMapPath = path.join(repoRoot, 'migration/link-map.json');
export const assetCachePath = path.join(repoRoot, 'migration/asset-cache.json');
export const sourcesConfigPath = path.join(repoRoot, 'migration/sources.yml');
export const basePath = '/docs-test';

export function rawPath(page: PageCandidate): string {
  return path.join(rawRoot, page.area, `${safeFileName(page.sourceId)}.html`);
}

export function safeFileName(value: string): string {
  return value.replace(/[^a-zA-Z0-9._-]/g, '-');
}
