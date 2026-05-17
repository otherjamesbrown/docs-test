export async function fetchText(url: string): Promise<string> {
  const response = await fetch(url, {
    headers: {
      'user-agent': 'docs-platform-poc/0.1 (+https://github.com/otherjamesbrown/docs-test)',
    },
  });
  if (!response.ok) throw new Error(`Failed to fetch ${url}: HTTP ${response.status}`);
  return response.text();
}
