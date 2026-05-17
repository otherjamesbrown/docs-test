---
title: "ARC Signing"
description: "Imported from docs.titanhq.com"
---

> Source: [docs.titanhq.com](https://docs.titanhq.com/en/8935-arc-signing.html)
> Product: SpamTitan
> Imported content type: docs_page
> Product stream: legacy

##### ARC Signing

Not all mail goes directly from the sender to the recipient. Some intermediaries might make changes to an email before forwarding it, which can result in the email failing SPF, DKIM or DMARC. Authenticated Received Chain (ARC) helps preserve email authentication results and verifies the identity of email intermediaries that forward a message on to its final destination.

When ARC is enabled, messages are signed using a private domain key before being sent. Recipient servers can then retrieve the public key from the domains DNS to decrypt incoming headers and verify that the message really comes from your domain and hasn't been changed along the way.

How ARC Works

1.  Before adding a digital signature to inbound mail, you must generate a domain key that SpamTitan uses to create signed mail headers that are unique to your system.

2.  Add the public key to the DNS records for your system's domain.

    :::note[Important]
    DKIM TXT records should be added to the domain's DNS _before_ enabling ARC signing.
    :::

3.  Recipients can then verify the source of a mail message by retrieving your public key and using it to confirm your signature.

## In this Section

-   [Generating a Domain Key](/docs-test/titanhq/products/spamtitan/docs/legacy-8/generating-a-domain-key/)
-   [Enabling ARC Signing](/docs-test/titanhq/products/spamtitan/docs/legacy-8/enabling-arc-signing/)
