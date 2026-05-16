# Docs Platform POC

GitHub-backed knowledge base and technical documentation proof of concept.

## POC Information Architecture

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

## Commands

Requires Node.js `>=22.12.0`.

```bash
npm install
npm run site:dev
npm run site:build
npm run import:all -- --poc
npm test
```

The first milestone is a working Starlight site with placeholder pages. The importer then replaces placeholder content with generated MDX from cached source HTML.
