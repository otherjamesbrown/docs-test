---
title: "DMARC"
description: "Imported from docs.titanhq.com"
---

> Source: [docs.titanhq.com](https://docs.titanhq.com/en/8931-dmarc.html)
> Product: SpamTitan
> Imported content type: docs_page
> Product stream: legacy

##### DMARC

DMARC (Domain-based Message Authentication, Reporting and Conformance) is an email authentication, policy and reporting protocol that helps detect and prevent email spoofing. Spoofing is when the email _From:_ address is forged so it appears to have come from your domain, but it is actually spam. This spoofed email can negatively affect the reputation of your domain and also impact legitimate email being sent by your users.

DMARC helps prevent spoofing by allowing email senders and receivers to verify their email. Receivers can supply senders with information about their authentication, while senders can tell receivers what to do when they receive a message that does not authenticate.

DMARC builds on the widely used SPF (Sender Policy Framework) and DKIM (DomainKeys Identified Mail) protocols to verify emails are authentic. A message that does not pass SPF or DKIM checks triggers the DMARC policy. See [DMARC Policies](/docs-test/titanhq/products/spamtitan/docs/legacy-8/dmarc-policies/ "DMARC Policies").

See [dmarc.org](https://dmarc.org/) ![external\_link.png](/docs-test/imported-assets/spamtitan-legacy/8931-dmarc/e926db1b58ca.png) for more information.

## In this Section

-   [DMARC Policies](/docs-test/titanhq/products/spamtitan/docs/legacy-8/dmarc-policies/)
-   [Enabling and Configuring DMARC in SpamTitan](/docs-test/titanhq/products/spamtitan/docs/legacy-8/enabling-and-configuring-dmarc-in-spamtitan/)
-   [DMARC and SPF](/docs-test/titanhq/products/spamtitan/docs/legacy-8/dmarc-and-spf/)
