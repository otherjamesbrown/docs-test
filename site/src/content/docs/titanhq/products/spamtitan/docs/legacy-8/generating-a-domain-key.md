---
title: "Generating a Domain Key"
description: "Imported from docs.titanhq.com"
---

> Source: [docs.titanhq.com](https://docs.titanhq.com/en/9284-generating-a-domain-key.html)
> Product: SpamTitan
> Imported content type: docs_page
> Product stream: legacy

###### Generating a Domain Key

Go to **System Setup** > **Mail Authentication** > **ARC Signing** and follow the steps below to generate a domain key. It is important to periodically rotate your ARC keys, as the longer they go unchanged, the higher the risk of one being compromised.

1.  Click **Add...** opposite Arc Keys:.

    ![STG-add-domain-key.jpg](/docs-test/imported-assets/spamtitan-legacy/9284-generating-a-domain-key/51085363e7d6.jpg)

2.  Using the table below as a reference, complete the field in the ARC DomainKey window.

3.  Click **Generate**.

<table><colgroup><col><col></colgroup><thead><tr><th><p>Field</p></th><th><p>Description</p></th></tr></thead><tbody><tr><td><p>Selector</p></td><td><p>A unique identifier prefix for this domain key that SpamTitan uses to distinguish from any other domain keys you may have.</p></td></tr><tr><td><p>Private Key</p></td><td><p>A new Private key can be used to generate each key pair, or you can use an existing private key if required. SpamTitan can only generate 2048-bit domain keys for ARC Signing (some DNS registrars may not support the longer key length).</p></td></tr><tr><td><p>Comment</p></td><td><p>An optional comment field.</p></td></tr></tbody></table>
