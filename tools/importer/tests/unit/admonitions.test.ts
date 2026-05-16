import { describe, expect, it } from 'vitest';
import { htmlFragmentToMarkdown } from '../../src/cli';

describe('Paligo admonition conversion', () => {
  it('preserves caution blocks as Starlight asides', () => {
    const markdown = htmlFragmentToMarkdown(`
      <ul>
        <li>
          <p>Do not cancel an update - allow it to finish.</p>
          <div dir="ltr" class="caution">
            <h3 class="title">Caution</h3>
            <p>While an update is running a pop-up window shows the status of the update. DO NOT CLOSE this pop-up window until the update completes, or the update stops running.</p>
          </div>
        </li>
      </ul>
    `);

    expect(markdown).toContain(':::caution');
    expect(markdown).toContain('DO NOT CLOSE this pop-up window');
    expect(markdown).not.toContain('### Caution');
  });
});
