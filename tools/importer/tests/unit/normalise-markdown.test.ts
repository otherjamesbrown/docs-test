import { describe, expect, it } from 'vitest';
import { htmlFragmentToMarkdown } from '../../src/convert/cleanup';
import { normaliseMarkdown } from '../../src/convert/markdown';

describe('Markdown normalisation', () => {
  it('demotes body H1 headings without changing fenced code comments', () => {
    const markdown = normaliseMarkdown(`# Body heading

\`\`\`bash
# install dependencies
npm install
\`\`\`
`);

    expect(markdown).toContain('## Body heading');
    expect(markdown).toContain('# install dependencies');
    expect(markdown).not.toContain('## install dependencies');
  });

  it('preserves blank-line runs inside fenced code blocks', () => {
    const markdown = normaliseMarkdown(`Intro

\`\`\`bash
echo before


echo after
\`\`\`
`);

    expect(markdown).toContain('echo before\n\n\necho after');
  });

  it('preserves code comments produced from imported HTML code blocks', () => {
    const markdown = htmlFragmentToMarkdown(`
      <h1>Setup</h1>
      <pre><code class="language-bash"># keep this as a shell comment
npm install</code></pre>
    `);

    expect(markdown).toContain('## Setup');
    expect(markdown).toContain('# keep this as a shell comment');
    expect(markdown).not.toContain('## keep this as a shell comment');
  });
});
