import { describe, expect, it } from 'vitest';
import { docsSectionIndexItems } from '../../src/cli';

describe('docs section index extraction', () => {
  it('extracts direct child topics from Paligo sidebars', () => {
    const html = `
      <aside class="site-sidebar">
        <ul>
          <li>
            <a href="61767-spamtitan-release-notes.html" data-permalink="61767-spamtitan-release-notes.html">
              SpamTitan Release Notes
            </a>
            <ul>
              <li>
                <a href="61768-spamtitan-release-notes.html" data-permalink="61768-spamtitan-release-notes.html">
                  SpamTitan Release Notes
                </a>
                <ul>
                  <li><a href="61768-spamtitan-release-notes.html#skellig-913">Skellig (9.13)</a></li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>
      </aside>
    `;

    expect(
      docsSectionIndexItems(
        html,
        '61767-spamtitan-release-notes',
        'https://support.titanhq.com/en/61767-spamtitan-release-notes.html',
      ),
    ).toEqual([
      {
        href: 'https://support.titanhq.com/en/61768-spamtitan-release-notes.html',
        text: 'SpamTitan Release Notes',
      },
    ]);
  });
});
