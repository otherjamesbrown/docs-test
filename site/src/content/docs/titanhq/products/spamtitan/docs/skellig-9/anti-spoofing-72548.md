---
title: "Anti-Spoofing"
description: "Imported from support.titanhq.com"
---

> Source: [support.titanhq.com](https://support.titanhq.com/en/72548-anti-spoofing.html)
> Product: SpamTitan
> Imported content type: docs_page
> Product stream: skellig

### Anti-Spoofing

SpamTitan provides protection against both Domain Spoofing and Display Name Spoofing. Domain Spoofing is the creation of a fake website name or email domain to intentionally mislead users about its origin. Display name spoofing deceives email recipients about its origin by forging the sender's display name. Both techniques are often used in phishing campaigns, with the intention of getting a user to click a link and share their credentials or reply with sensitive information. To help protect your domains and display names from malicious attacks, you can enable domain anti-spoofing and display name anti-spoofing.

**Domain Anti-Spoofing**

Domain anti-spoofing detects when a sender pretends to use a different domain than the one actually being used.

SpamTitan applies the following logic to help protect against domain anti-spoofing.

-   For emails coming from external domains, DMARC tests account for the sending domain’s veracity.

-   For emails appearing to come from internal senders, domain anti-spoofing (fuzzy) analyzes the sender domain and assesses 'fuzziness' based on the algorithmic distance from the recipient domain.

If these tests fail, then the spam score is increased. This means that the likelihood of the email being quarantined increases.

**Display Name Anti-Spoofing**

When display name anti-spoofing is enabled, it provides protection against a sender's display name being forged.

SpamTitan applies the following logic to help protect against display name anti-spoofing:

-   If the display name matches, the email addresses are compared. If the email addresses differ, then the anti-spoofing rule is applied. This increases the spam score, and the email is likely to be quarantined.

**Configuring Domain and Display Name Anti-Spoofing**

Both domain and customer admins can enable and manage anti-spoofing for their domains and display names.

-   If you are a customer admin:

    -   See [Managing Domain Anti-Spoofing at Customer Level](/docs-test/titanhq/products/spamtitan/docs/skellig-9/managing-domain-anti-spoofing-72546/ "Managing Domain Anti-Spoofing") and [Managing Display Name Anti-Spoofing at Customer Level](/docs-test/titanhq/products/spamtitan/docs/skellig-9/managing-display-name-anti-spoofing-72547/ "Managing Display Name Anti-Spoofing").

-   If you are a domain admin:

    -   See [Managing Domain Anti-Spoofing at Domain Level](/docs-test/titanhq/products/spamtitan/docs/skellig-9/managing-domain-anti-spoofing/ "Managing Domain Anti-Spoofing") and [Managing Display Name Anti-Spoofing at Domain Level](/docs-test/titanhq/products/spamtitan/docs/skellig-9/managing-display-name-anti-spoofing/ "Managing Display Name Anti-Spoofing").

## In this Section

-   [Managing Domain Anti-Spoofing](/docs-test/titanhq/products/spamtitan/docs/skellig-9/managing-domain-anti-spoofing/)
-   [Managing Display Name Anti-Spoofing](/docs-test/titanhq/products/spamtitan/docs/skellig-9/managing-display-name-anti-spoofing/)
