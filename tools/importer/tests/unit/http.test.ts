import { afterEach, describe, expect, it, vi } from 'vitest';
import { fetchText } from '../../src/shared/http';

describe('fetchText', () => {
  afterEach(() => {
    vi.unstubAllGlobals();
  });

  it('retries transient 429 responses with backoff', async () => {
    const fetchMock = vi
      .fn()
      .mockResolvedValueOnce(new Response('rate limited', { status: 429 }))
      .mockResolvedValueOnce(new Response('ok'));
    const sleeps: number[] = [];
    vi.stubGlobal('fetch', fetchMock);

    await expect(
      fetchText('https://example.com/page', {
        sleep: async (ms) => {
          sleeps.push(ms);
        },
      }),
    ).resolves.toBe('ok');

    expect(fetchMock).toHaveBeenCalledTimes(2);
    expect(sleeps).toEqual([250]);
  });

  it('does not retry non-transient HTTP failures', async () => {
    const fetchMock = vi.fn().mockResolvedValue(new Response('not found', { status: 404 }));
    vi.stubGlobal('fetch', fetchMock);

    await expect(fetchText('https://example.com/missing', { sleep: async () => undefined })).rejects.toThrow(
      'HTTP 404',
    );
    expect(fetchMock).toHaveBeenCalledTimes(1);
  });
});
