import { describe, expect, it } from 'vitest';
import { extensionFromUrl } from '../../src/convert/assets';
import { extractFreshdeskId } from '../../src/discover/freshdesk';

describe('source extractors', () => {
  it('extracts Freshdesk IDs from support and alias article URLs', () => {
    expect(extractFreshdeskId('https://helpdesk.example.com/support/solutions/articles/4000186889-title')).toBe(
      '4000186889',
    );
    expect(extractFreshdeskId('https://helpdesk.example.com/a/solutions/articles/4000186889')).toBe('4000186889');
  });

  it('chooses asset extensions from URL paths before content type', () => {
    expect(extensionFromUrl('https://example.com/image.png?download=1', 'application/octet-stream')).toBe('.png');
    expect(extensionFromUrl('https://example.com/photo.jpeg', '')).toBe('.jpeg');
  });

  it('falls back to common image content types and unknown binaries', () => {
    expect(extensionFromUrl('https://example.com/download', 'image/png')).toBe('.png');
    expect(extensionFromUrl('https://example.com/download', 'image/jpeg')).toBe('.jpg');
    expect(extensionFromUrl('https://example.com/download', 'image/gif')).toBe('.gif');
    expect(extensionFromUrl('https://example.com/download', 'image/svg+xml')).toBe('.svg');
    expect(extensionFromUrl('https://example.com/download', 'application/octet-stream')).toBe('.bin');
  });
});
