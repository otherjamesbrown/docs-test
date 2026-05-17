import fs from 'node:fs/promises';
import path from 'node:path';
import { exists } from '../shared/files';
import { fetchText } from '../shared/http';
import { rawPath, rawRoot } from '../shared/paths';
import type { PageCandidate } from '../shared/types';

export async function fetchAll(pages: PageCandidate[], force: boolean) {
  await fs.mkdir(rawRoot, { recursive: true });
  for (const page of pages) {
    const file = rawPath(page);
    if (!force && (await exists(file))) continue;
    const html = await fetchText(page.sourceUrl);
    await fs.mkdir(path.dirname(file), { recursive: true });
    await fs.writeFile(file, html);
  }
}
