import fs from 'node:fs/promises';
import path from 'node:path';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { downloadAsset } from '../../src/convert/assets';
import { assetCachePath, repoRoot } from '../../src/shared/paths';
import type { PageCandidate } from '../../src/shared/types';

const page: PageCandidate = {
  area: 'spamtitan-kb',
  sourceId: 'test-asset-cache',
  sourceUrl: 'https://docs.example.com/en/page.html',
  sourceHost: 'docs.example.com',
  canonicalHost: 'docs.example.com',
  title: 'Asset Cache',
  route: 'test/asset-cache',
  outputPath: 'test/asset-cache.md',
  contentType: 'docs_page',
  breadcrumbs: ['Test'],
  product: 'Test',
};

const testAssetDir = path.join(repoRoot, 'site/public/imported-assets/spamtitan-kb/test-asset-cache');
let originalCache: string | undefined;

describe('downloadAsset', () => {
  beforeEach(async () => {
    originalCache = await fs.readFile(assetCachePath, 'utf8').catch(() => undefined);
    await fs.rm(testAssetDir, { recursive: true, force: true });
    await fs.rm(assetCachePath, { force: true });
  });

  afterEach(async () => {
    vi.unstubAllGlobals();
    await fs.rm(testAssetDir, { recursive: true, force: true });
    if (originalCache === undefined) {
      await fs.rm(assetCachePath, { force: true });
    } else {
      await fs.writeFile(assetCachePath, originalCache);
    }
  });

  it('returns cached asset paths without re-downloading existing files', async () => {
    const fetchMock = vi
      .fn()
      .mockResolvedValue(new Response(new Uint8Array([1, 2, 3]), { headers: { 'content-type': 'image/png' } }));
    vi.stubGlobal('fetch', fetchMock);

    const first = await downloadAsset('https://docs.example.com/images/screen.png', page);
    const second = await downloadAsset('https://docs.example.com/images/screen.png', page);

    expect(second).toBe(first);
    expect(fetchMock).toHaveBeenCalledTimes(1);
    await expect(fs.access(path.join(repoRoot, 'site/public', first))).resolves.toBeUndefined();
  });
});
