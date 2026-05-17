# Docs Platform POC

This repository is a proof of concept for a GitHub-backed knowledge base and technical documentation platform. It is intended to show how content from several existing public help/documentation sites can be imported into a single modern docs experience, with Git as the primary content store.

The current POC imports selected Redstor and TitanHQ/SpamTitan content, converts it into Markdown, stores the generated pages in this repo, and renders them with Astro Starlight. GitHub Pages publishes the static site.

Live preview:

https://otherjamesbrown.github.io/docs-test/

## Source Sites

The current POC imports from these configured source sites:

- Redstor KB: https://helpdesk.redstor.com/support/solutions
- TitanHQ Platform docs: https://support.titanhq.com/en/69450-welcome-to-the-titanhq-platform-.html
- SpamTitan KB: https://helpdesk.spamtitan.com/support/home
- SpamTitan Skellig 9 docs: https://support.titanhq.com/en/56985-welcome-to-spamtitan-.html
- SpamTitan legacy 8 docs: https://docs.titanhq.com/en/2179-spamtitan-overview.html

The importer configuration lives in `migration/sources.yml`. It also records known mirror sources that should not be treated as primary import roots, such as `https://webtitancloud.freshdesk.com/support/solutions/4000009289` for SpamTitan and `https://webtitancloud.freshdesk.com/support/solutions/4000010601` for Redstor.

## Goals

- Prove that content can be scraped from the existing web-only sources.
- Preserve enough source metadata to trace imported pages back to their original URLs.
- Convert source HTML into clean Markdown suitable for long-term GitHub storage.
- Rewrite known source links to internal links where the target page has also been imported.
- Catch migration regressions with unit tests, importer QA, rendered-site QA, and CI.
- Provide a realistic structure for a consolidated KB/docs site before scaling beyond the POC.

## High-Level Architecture

```text
Existing KB/docs sites
        |
        v
Node importer
  - discovers configured source pages
  - fetches/caches raw HTML
  - converts HTML to Markdown
  - downloads imported assets
  - rewrites internal source links
  - writes manifest/link-map/report files
        |
        v
GitHub repository
  - Markdown content
  - imported assets
  - migration metadata
  - importer code and tests
        |
        v
Astro Starlight static site
        |
        v
GitHub Pages
```

## Repository Layout

```text
.
  migration/
    sources.yml          # configured source systems, seed URLs, and crawl scope
    manifest.json        # generated source-to-route metadata
    link-map.json        # generated original URL to new route map
    import-report.json   # generated import warnings and output summary

  site/
    src/content/docs/    # generated Markdown docs content
    public/              # imported images/assets used by generated docs
    scripts/qa.mjs       # rendered HTML checks for known migration issues

  tools/importer/
    src/cli.ts           # importer CLI and conversion pipeline
    tests/               # unit tests for importer behavior

  .github/workflows/
    ci.yml               # tests, importer QA, build, rendered-site QA
    pages.yml            # builds and deploys site/dist to GitHub Pages
```

## Information Architecture

The POC currently renders this structure:

```text
/
  redstor/
    kb/
      guides/
      troubleshooting/
      release-notes/
  titanhq/
    platform/
      docs/
    products/
      spamtitan/
        kb/
        docs/
          skellig-9/
          legacy-8/
```

## Import Flow

The importer is intentionally split into stages so each part can be tested or rerun:

1. `discover` reads `migration/sources.yml`, builds the page list, and writes `migration/manifest.json`.
2. `fetch` reads `migration/manifest.json` and downloads/caches the raw source HTML.
3. `convert` reads `migration/manifest.json` and turns cached HTML into Markdown and imported assets.
4. `qa` checks generated Markdown for known migration failures, including unresolved source-domain links that should have become internal links.
5. The Starlight build renders the Markdown into a static site.
6. `site:qa` checks rendered HTML for issues that only show up after build, such as missing page menu anchors or expected internal links.

For a full refresh, run:

```bash
npm run import:all -- --force
```

For staged runs, run `npm run import:discover` first. Later `fetch` and `convert` runs use the persisted manifest instead of rediscovering source folders. Passing `--force` to `fetch` or `convert` rediscovers for that command.

## Commands

Requires Node.js `>=22.12.0`.

```bash
npm install

# Run the local Starlight dev server
npm run site:dev

# Run the importer in stages
npm run import:discover
npm run import:fetch
npm run import:convert
npm run import:qa

# Or run the whole importer pipeline
npm run import:all -- --force

# Build and check the rendered site
npm run site:build
npm run site:qa

# Run all workspace tests
npm test
```

## Quality Gates

The POC has several layers of checks:

- Importer unit tests cover conversion behavior such as link resolution, slugging, Paligo section indexes, and admonition/caution handling.
- Importer QA scans generated Markdown for unresolved links back to known source systems when the target page exists in the import.
- Site QA inspects rendered HTML for specific regressions found during the POC, including missing table-of-contents anchors and missing migrated section links.
- GitHub Actions runs tests and site checks on pushes and pull requests.
- GitHub Pages deployment only publishes after a successful site build and rendered-site QA.

## Source Metadata and Redirects

Generated content includes the original source URL in each page. The importer also writes:

- `migration/manifest.json` for detailed page metadata.
- `migration/link-map.json` for original URL to generated route mapping.

Those files are the basis for future redirect planning, auditing, and migration reports.

## Current Scope

This is still a POC, not the final production migration tool. The current focus is proving the shape of the workflow:

- scrape/import a representative set of content;
- preserve source traceability;
- make internal links work;
- make the output look credible in a modern docs site;
- add tests whenever a migration bug is found.

The next step before scaling to all products would be to formalize source configuration, content ownership rules, redirect strategy, and acceptance criteria for a complete import run.
