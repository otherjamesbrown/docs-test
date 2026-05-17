# Docs Platform POC — Code Review

Reviewer: external code review pass
Date: 2026-05-17
Scope: full repo as of commit on `main` at review time.

This document captures feedback on the POC so each item can be tracked and addressed. Items are grouped by theme, with file/line references where relevant. A suggested priority order is at the bottom.

## How to use this document

This file is the **shared context** for the review — the rationale, the file/line
references, the priority order. The **unit of work** is a GitHub issue: each
issue maps to one ~PR-sized task and links back to the relevant section below.

If you are a coding agent picking up work:

1. Pick a GitHub issue (start with `[P1]`-titled ones).
2. Read the section of this file the issue links to for full context.
3. Open one PR per issue. Reference the issue in the PR description (`Closes #N`).
4. Acceptance criteria are listed inside each issue; tests where applicable.
5. CI (`.github/workflows/ci.yml`) must stay green.

If no issues exist yet, the checkbox items below are the master list — convert
them to issues before starting, or address them as a single sweep if scope
allows.

---

## TL;DR

The **approach is sound** and the surface presentation is credible: clean repo, sensible workspace split, multi-layer QA, source-traceability in every page, GitHub Pages deploy. As a "look, this works, here's the shape of the workflow" POC it succeeds.

The **implementation has a meaningful gap between what the README claims and what the code does**, and the test coverage is much thinner than the "Quality Gates" section suggests. There's also one logic/naming bug in the QA path. None of this disqualifies the POC, but it should be addressed before pitching this as the basis for a real migration tool.

---

## Is this a good approach?

**Yes, with caveats.**

What's right:

- Git-as-source-of-truth for docs is the correct call. You get diff-based review, history, easy contributor onboarding, and a story for AI assistants editing content.
- Astro Starlight is a credible, well-supported choice for a modern docs site. Good search, good DX, fast builds, free hosting via Pages.
- The stage separation (discover → fetch → convert → qa) is the right *mental model* for an importer. ETL discipline matters.
- Embedding the source URL in every page, plus `manifest.json` + `link-map.json`, is exactly what you need for migration audits and future redirects. This is the strongest part of the POC.
- Internal link rewriting keyed off a normalised `sourceLinkKey()` (matching Freshdesk and TitanHQ IDs across hostname aliases such as `webtitancloud.freshdesk.com` mirrors) is the right shape.

To address before going further:

- [ ] **Legal / ToS.** Scraping public help/docs from Redstor and TitanHQ and rehosting them on a public GitHub Pages site under your name is not acknowledged in the README. For a POC it is probably fine; for anything beyond, explicit content-ownership rules (or vendor permission / a licensing review) are needed. Add a "Legal" section to the README that says this is illustrative and not for production rehosting.
- [ ] **Scaling assumption is untested.** Whole pipeline is single-threaded serial fetch/convert with no rate-limit handling, no backoff, no resumability after a partial failure. Fine for ~130 pages; will fall over at 5,000.

---

## Architecture and structure

The README's architecture diagram looks clean, but reality drifts from it in a few places.

### 1. The "stage separation" is partly fiction

All five stages live as labels inside the single 1090-line `tools/importer/src/cli.ts`. That is fine *if* the stages are actually independent — but they aren't:

- `import:convert` re-runs `fetch` internally (`tools/importer/src/cli.ts:199`).
- `import:fetch` and `import:convert` both call `discover()` up-front, which **hits the network on every invocation** to scrape the Freshdesk folder listings. The seed/folder HTML is never cached; only article pages are. So the "stages" are not isolated and re-running `convert` still touches `helpdesk.redstor.com`.

**Action:** either (a) cache the discovery output to `manifest.json` and have later stages read it back, or (b) collapse the README to "one importer with a few flags."

### 2. The YAML config is half-real

`migration/sources.yml` describes Freshdesk sources with `scoped_kb_roots`, `exclude_mirrors`, etc. — but **the importer never reads those Freshdesk sections.** The Redstor and SpamTitan KB folder lists are hardcoded in TypeScript at `tools/importer/src/cli.ts:117-163` with magic `limit: 10/5/20` numbers and `routeBases`. Only the `docs:` (Paligo) sources are actually driven by the YAML, via `configuredDocsSources()`.

This is the single most misleading thing in the repo: the config file looks authoritative but is partly decorative. Anyone trying to add a new Freshdesk folder by editing YAML will be confused.

**Action:** drive Freshdesk discovery from the YAML; remove the hardcoded arrays.

### 3. `configuredDocsSources()` has hardcoded product routing

`tools/importer/src/cli.ts:375-425` special-cases `product.id === 'titanhq-platform'`, `'spamtitan'`+`skellig`, `'spamtitan'`+`legacy`, and **throws** on anything else. Adding a new product to the YAML cannot work without editing TypeScript. Breadcrumbs, `routeBase`, and the `area` literal are all baked in.

**Action:** move breadcrumbs / route-base / area into the YAML schema and make the function data-driven.

### 4. Cleanup-by-substring is fragile

`clearGeneratedContent` (`tools/importer/src/cli.ts:499`) detects generated files by searching for the strings `> Imported content type:` or `> Generated import index:` in their body. Change either string and rebuilds start leaving orphans behind.

**Action:** use a `_generated: true` frontmatter flag, or wipe known generated subtrees by path, or track outputs via the manifest.

### 5. Workspace and tooling gaps

- [ ] No `tsconfig.json` in `tools/importer/` — `tsx` runs the code unchecked. No `tsc --noEmit` step in CI. A `// @ts-expect-error` could rot and you'd never know.
- [ ] `zod` is listed in dependencies (`tools/importer/package.json:19`) but **never imported**. The `as SourcesConfig` cast at `tools/importer/src/cli.ts:846` is exactly where Zod should run.
- [ ] `.gitignore` allowlists `.env.example` but no such file exists.
- [ ] `migration/redirects.csv` is in `.gitignore` but nothing in code produces it.
- [ ] `basePath = '/docs-test'` is hardcoded in two places (`cli.ts`, `astro.config.mjs`) and embedded in test fixtures. Should be one source of truth.

---

## Code quality

The code is **readable, consistent in style, and well-named** — clearly written by someone who knows what they're doing.

### Real bugs / risks

- [ ] 🐛 **`unresolvedMigratedSourceLinks` is named backwards.** `tools/importer/src/cli.ts:987-993` iterates source-domain body links and **adds them to the result when `resolveMigratedSourceHref` returns truthy** — i.e. it collects RESOLVED ones (links where we have a migrated target). The function is then reported as "unresolved migrated source link" failures by the QA at `tools/importer/src/cli.ts:830`. The test at `tools/importer/tests/unit/link-resolution.test.ts:67-69` confirms this is the intended behaviour, which means the name is just wrong. Rename to something like `unrewrittenMigratedLinks` — links that point at a page we DID migrate but were NOT rewritten in the body. The current name makes the QA output actively confusing.

- [ ] 🐛 **`normaliseMarkdown` rewrites every `# ` to `## ` site-wide** (`tools/importer/src/cli.ts:882`), with no exemption for fenced code blocks. Any imported Bash/Python with a `# comment` on its own line (after Turndown emits it inside a fence) is at risk. Same applies to the `\n{3,}` collapse — it'll touch whitespace inside fences. Do this as an AST pass via `remark`, or at minimum split on ``` fences first.

- [ ] 🐛 **`paligoAdmonitionTypes` collapses `important`/`warning`/`caution` all to `caution`** (`tools/importer/src/cli.ts:90-96`). Starlight supports `danger` — losing the distinction between an informational `important` and a literal `warning` is lossy and silently changes vendor intent.

- [ ] ⚠️ **`repoRoot = path.resolve(new URL('../../..', import.meta.url).pathname)`** at `tools/importer/src/cli.ts:10` is broken on Windows (`pathname` is `/C:/...`). The same file correctly uses `pathToFileURL` at `tools/importer/src/cli.ts:1085`, so the right pattern is known — use `fileURLToPath` here.

- [ ] ⚠️ **`dedupePages` has dead code.** `tools/importer/src/cli.ts:928-938`: the `if (seenRoutes.has(route))` block sets `route` with a suffix, then the immediately-following `while` loop checks the same condition and does the same thing. The first iteration of the `while` is unreachable.

- [ ] ⚠️ **`sourceDomainBodyLinks` is also a QA failure** (`tools/importer/src/cli.ts:832-834`) — meaning *any* link back to a source domain fails QA, even if the target wasn't imported. The README implies the gate only fires for "links back to known source systems when the target page exists in the import." Either tighten the README or relax the gate. As written, the importer will fail QA the moment it encounters a perfectly fine outbound reference to a non-imported source-domain page.

### Smaller things

- [ ] Asset downloads (`tools/importer/src/cli.ts:797`) re-fetch on every `convert` run because `clearGeneratedContent` wipes `assetsRoot` first. Content-hashed filenames give you free idempotency — keep the assets dir and skip the download if the digest file already exists. Won't matter at 130 pages; will at 5,000.
- [ ] `fetchText` has no retry/backoff and no rate limiting. One 429 mid-pipeline and the whole run dies.
- [ ] The hardcoded `limit: 10/5/20` per folder is configuration living in code with no comment explaining the choice. Move to YAML.
- [ ] TitanHQ Platform seeds are explicitly enumerated in YAML while Skellig/Legacy use the Paligo BFS via `child_depth`. Inconsistent — pick one.
- [ ] `safeFileName` is only ever called on `sourceId`, which for both Freshdesk and Paligo is already filename-safe. Dead defence; remove or document why.

---

## Tests

The README says: *"Importer unit tests cover conversion behavior such as link resolution, slugging, Paligo section indexes, and admonition/caution handling."* That's literally true — there is one test for each. There are roughly **nine assertions across four test files**. For a 1090-line importer, that's thin.

What's well-covered:

- ✅ `slugify` — edge cases (ampersand, parens, multiple separators).
- ✅ Link resolution — Freshdesk alias forms and TitanHQ docs URLs, plus the QA-time body-link extraction. This is the most thorough file.
- ✅ One admonition smoke test.
- ✅ One section-index smoke test.

What is **not** covered — i.e. the high-risk surface area:

- [ ] **Freshdesk discovery selectors** (`.fw-articles a[href*=...]` etc.) — externally-controlled HTML, the thing most likely to silently break when the source site reskins. Should have fixture-based tests.
- [ ] **`convertFreshdeskArticle` end-to-end** with a saved-HTML fixture → expected Markdown.
- [ ] **`convertDocsPage` end-to-end** ditto.
- [ ] **`cleanupBody`** — attribute stripping, anchor handling, etc.
- [ ] **`rewriteAssetsAndLinks`** — the most complex function: hash preservation, mailto preservation, URL absolutisation, the "replaceWith text" branch for unresolved source-domain links. This is the heart of the migration value-add and has zero tests.
- [ ] **`dedupePages`** (collisions).
- [ ] **`normaliseMarkdown`** — including the H1 demotion and the code-fence gotcha above.
- [ ] **`discoverDocs`** BFS (child_depth, hostname filtering, hash-fragment filtering).
- [ ] **`extractFreshdeskId`**, **`extensionFromUrl`**, **`docsPageTitle`** edge cases.
- [ ] **YAML schema validation** — currently a raw `as SourcesConfig` cast with no validation.

**Recommendation:** target snapshot tests against ~5 representative captured HTML files (one Freshdesk article with images and links, one Paligo topic with admonitions and section index, one with mixed legacy/skellig cross-links) before adding anything else. That gets regression coverage on the actual transformation, not just the helpers.

### Site QA

`site/scripts/qa.mjs` is the nicest piece of testing in the repo — three concrete regressions, each tied to a real symptom (TOC anchors, migrated links, page titles). It's a small list but it's the right idea. Keep growing it.

### Importer QA

Has the naming bug above and the over-broad gate. Worth a pass.

---

## A few other things

- [ ] **Honest framing in the README.** The "Quality Gates" section reads as if the importer is well-tested. It's well-*scaffolded*. Tighten the wording to match reality, or write the missing tests.
- [ ] **CI runs `npm install`, not `npm ci`** (`.github/workflows/ci.yml:18`). Use `npm ci` so the lockfile is authoritative.
- [ ] **No `typecheck` step** in CI. `tsc --noEmit` is free insurance.
- [ ] **No `astro check`** in CI. Catches MDX/content-collection schema drift cheaply.
- [ ] **No `lint`/`format` config checked in.** Code is consistent so it's being formatted somehow, but anyone else contributing will diverge — add Prettier/ESLint.
- [ ] **GitHub Pages workflow rebuilds from scratch but doesn't run `npm test`** (`.github/workflows/pages.yml`). It builds and runs site QA, but the unit tests are a separate workflow. That's fine *as long as* `CI` is a required status check on `main` — otherwise a direct push to main can ship code that fails tests. Verify branch protection is set.
- [ ] **Sidebar in `site/astro.config.mjs:24-63` is hand-maintained.** Every new section needs a YAML edit *and* an Astro config edit. Given everything else is generated, consider generating the sidebar config from the manifest at build time.

---

## Answers to the original questions

1. **Is this a good approach?** Yes. Git-backed Markdown + Starlight + GitHub Pages + a typed Node importer is exactly the right shape for this problem. The traceability story (source URL in every page, manifest, link-map) is genuinely good.

2. **Is the architecture/structure correct?** Mostly yes at the file/workspace level. The discrepancy between what the README says is configurable (YAML-driven, staged pipeline) and what actually is (half-hardcoded, stages share state) is the main thing to fix before scaling. Specifically: drive Freshdesk discovery from YAML, persist discovery output between stages, and make `configuredDocsSources` data-driven instead of `if (product.id === 'spamtitan')`.

3. **Is the code well-structured?** Within the single file, yes — names are good, helpers are at the right granularity, types are decent. Across files, no — 1090 lines in one file mixing discovery, fetch, HTML cleanup, Turndown rules, link resolution, asset download, QA, manifest writing, and CLI parsing is more than one module should hold. Split: `discover/`, `convert/`, `qa/`, `shared/` (with the link-key logic moved out, since it's used by both convert and qa).

4. **Are there enough tests?** No. The coverage is honest (the tests that exist work) but it doesn't match what the README implies. The biggest gap is **no end-to-end fixture tests** for either `convertFreshdeskArticle` or `convertDocsPage`, and no tests for `rewriteAssetsAndLinks`. Those three are where 80% of the migration risk lives.

---

## Suggested priority order

Highest-value fixes first:

1. [ ] Fix the `unresolvedMigratedSourceLinks` naming (or behaviour) so the QA output is honest.
2. [ ] Add fixture-based tests for `convertFreshdeskArticle` and `convertDocsPage`.
3. [ ] Move the hardcoded Freshdesk folder lists into `sources.yml`, validate the YAML with Zod, and remove the special-cased product `if` ladder.
4. [ ] Persist discovery output to `manifest.json` and have `fetch` / `convert` read it back instead of re-scraping seed pages.
5. [ ] Fix the `# ` → `## ` regex to not touch code fences (and switch to a remark plugin if you can).
6. [ ] Add `tsc --noEmit` and `astro check` to CI; switch `npm install` → `npm ci`.
7. [ ] Split `cli.ts` into `discover/`, `convert/`, `qa/`, `shared/` modules.
8. [ ] Add a "Legal / scope" note to the README about scraped third-party content.
9. [ ] Sweep the smaller items above.
