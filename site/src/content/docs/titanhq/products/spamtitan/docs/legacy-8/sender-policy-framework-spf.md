---
title: "Sender Policy Framework (SPF)"
description: "Imported from docs.titanhq.com"
---

> Source: [docs.titanhq.com](https://docs.titanhq.com/en/1324-sender-policy-framework--spf-.html)
> Product: SpamTitan
> Imported content type: docs_page
> Product stream: legacy

#### Sender Policy Framework (SPF)

SPF (Sender Policy Framework) allows the owner of a domain to use special DNS records to specify which machines are authorized to transmit e-mail for that domain. When receiving a message from a domain, the receiver can check the DNS records to ensure the mail is coming from locations that the domain has authorized.

When enabled in SpamTitan, messages that fail the SPF test will be rejected. This option is disabled by default as it can result in mail being rejected from domains with incorrectly configured SPF records, so it should be used with caution.
