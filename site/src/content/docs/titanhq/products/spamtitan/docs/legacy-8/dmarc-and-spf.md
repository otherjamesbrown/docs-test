---
title: "DMARC and SPF"
description: "Imported from docs.titanhq.com"
---

> Source: [docs.titanhq.com](https://docs.titanhq.com/en/8934-dmarc-and-spf.html)
> Product: SpamTitan
> Imported content type: docs_page
> Product stream: legacy

###### DMARC and SPF

A DMARC policy overrides SPF by default and as such, if DMARC is enabled in SpamTitan Gateway, the behavior of SPF could change. If you have _SPF Reject_ enabled, mail that fails SPF during the initial SMTP handshake will still be rejected during the initial SMTP handshake, but only if the sending domain does not have a DMARC record.

If the sending domain does have a DMARC record, then the message body will be accepted and the policy that has been defined in the DMARC record will be applied. A DMARC policy can specify ‘none’, ‘quarantine’, or ‘reject’, see [DMARC Policies](/docs-test/titanhq/products/spamtitan/docs/legacy-8/dmarc-policies/ "DMARC Policies").

It is good practice to set up your DMARC record with a policy of ‘none’ initially to monitor where mail is being sent from. When you are confident that your SPF record is correct, then change the policy to 'quarantine' or 'reject'.
