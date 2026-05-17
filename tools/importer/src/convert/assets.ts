import crypto from 'node:crypto';
import fs from 'node:fs/promises';
import path from 'node:path';
import { exists, readJson, writeJson } from '../shared/files';
import { assetCachePath, basePath, repoRoot } from '../shared/paths';
import type { PageCandidate } from '../shared/types';

export async function downloadAsset(assetUrl: string, page: PageCandidate): Promise<string> {
  const cacheKey = assetCacheKey(assetUrl, page);
  const cache = await readAssetCache();
  const cached = cache[cacheKey];
  if (cached && (await exists(path.join(repoRoot, 'site/public', cached)))) {
    return cached;
  }

  const response = await fetch(assetUrl);
  if (!response.ok) throw new Error(`HTTP ${response.status}`);
  const arrayBuffer = await response.arrayBuffer();
  const buffer = Buffer.from(arrayBuffer);
  const contentType = response.headers.get('content-type') ?? '';
  const ext = extensionFromUrl(assetUrl, contentType);
  const digest = crypto.createHash('sha256').update(buffer).digest('hex').slice(0, 12);
  const fileName = `${digest}${ext}`;
  const relative = path.posix.join('imported-assets', page.area, page.sourceId, fileName);
  const fullPath = path.join(repoRoot, 'site/public', relative);
  await fs.mkdir(path.dirname(fullPath), { recursive: true });
  if (!(await exists(fullPath))) {
    await fs.writeFile(fullPath, buffer);
  }
  cache[cacheKey] = relative;
  await writeJson(assetCachePath, cache);
  return relative;
}

export function importedAssetHref(assetPath: string): string {
  return `${basePath}/${assetPath}`;
}

export function extensionFromUrl(url: string, contentType: string): string {
  const pathname = new URL(url).pathname;
  const ext = path.extname(pathname);
  if (ext && ext.length <= 6) return ext;
  if (contentType.includes('png')) return '.png';
  if (contentType.includes('jpeg') || contentType.includes('jpg')) return '.jpg';
  if (contentType.includes('gif')) return '.gif';
  if (contentType.includes('svg')) return '.svg';
  return '.bin';
}

type AssetCache = Record<string, string>;

async function readAssetCache(): Promise<AssetCache> {
  try {
    return (await readJson(assetCachePath)) as AssetCache;
  } catch {
    return {};
  }
}

function assetCacheKey(assetUrl: string, page: PageCandidate): string {
  return `${page.area}:${page.sourceId}:${assetUrl}`;
}
