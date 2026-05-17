import { describe, expect, it } from 'vitest';
import { htmlFragmentToMarkdown } from '../../src/convert/cleanup';

describe('Paligo admonition conversion', () => {
  it.each([
    ['note', 'note'],
    ['tip', 'tip'],
    ['important', 'note'],
    ['warning', 'danger'],
    ['caution', 'caution'],
  ])('maps %s blocks to %s asides', (sourceType, asideType) => {
    const markdown = htmlFragmentToMarkdown(`
      <div class="${sourceType}">
        <h3 class="title">${sourceType}</h3>
        <p>Admonition body.</p>
      </div>
    `);

    expect(markdown).toContain(`:::${asideType}`);
    expect(markdown).toContain('Admonition body.');
  });

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
