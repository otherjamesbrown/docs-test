import fs from 'node:fs/promises';
import path from 'node:path';

export async function writeJson(file: string, value: unknown) {
  await fs.mkdir(path.dirname(file), { recursive: true });
  await fs.writeFile(file, `${JSON.stringify(value, null, 2)}\n`);
}

export async function readJson(file: string): Promise<unknown> {
  return JSON.parse(await fs.readFile(file, 'utf8'));
}

export async function exists(file: string): Promise<boolean> {
  try {
    await fs.access(file);
    return true;
  } catch {
    return false;
  }
}

export async function collectFiles(dir: string, ext: string): Promise<string[]> {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  const files = await Promise.all(
    entries.map(async (entry) => {
      const full = path.join(dir, entry.name);
      if (entry.isDirectory()) return collectFiles(full, ext);
      return entry.isFile() && entry.name.endsWith(ext) ? [full] : [];
    }),
  );
  return files.flat();
}
