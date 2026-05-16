import { describe, expect, it } from 'vitest';
import { slugify } from '../../src/shared/slug';

describe('slugify', () => {
  it('creates stable route-safe slugs', () => {
    expect(slugify('SpamTitan Skellig (9.00+) Release Notes')).toBe(
      'spamtitan-skellig-9-00-release-notes',
    );
  });

  it('normalises ampersands', () => {
    expect(slugify('Guides & Troubleshooting')).toBe('guides-and-troubleshooting');
  });
});

