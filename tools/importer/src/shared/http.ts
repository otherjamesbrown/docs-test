export async function fetchText(url: string, options: FetchTextOptions = {}): Promise<string> {
  const attempts = options.attempts ?? 3;
  const sleep = options.sleep ?? defaultSleep;
  let lastError: unknown;

  for (let attempt = 1; attempt <= attempts; attempt += 1) {
    try {
      const response = await fetch(url, {
        headers: {
          'user-agent': 'docs-platform-poc/0.1 (+https://github.com/otherjamesbrown/docs-test)',
        },
      });
      if (response.ok) return response.text();

      lastError = new Error(`HTTP ${response.status}`);
      if (!isRetryableStatus(response.status) || attempt === attempts) break;
    } catch (error) {
      lastError = error;
      if (attempt === attempts) break;
    }

    await sleep(backoffMs(attempt));
  }

  throw new Error(`Failed to fetch ${url} after ${attempts} attempts: ${String(lastError)}`);
}

interface FetchTextOptions {
  attempts?: number;
  sleep?: (ms: number) => Promise<void>;
}

function isRetryableStatus(status: number): boolean {
  return status === 429 || status >= 500;
}

function backoffMs(attempt: number): number {
  return 250 * 2 ** (attempt - 1);
}

function defaultSleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
