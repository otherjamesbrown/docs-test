---
title: "Blocking and Allowing"
description: "Imported from docs.titanhq.com"
---

> Source: [docs.titanhq.com](https://docs.titanhq.com/en/1008-blocking-and-allowing.html)
> Product: SpamTitan
> Imported content type: docs_page
> Product stream: legacy

#### Blocking and Allowing

**Blocking**: No spam checking is performed for domains or email addresses that are added to the block list, they are automatically blocked.

**Allowing**: No spam checking is performed for domains or email addresses that are added to the allow list, they are automatically forwarded to the recipient.

There are important rules to note when allowing and blocking:

1.  An email address cannot be allowed and blocked at the same time. If you add an email address to the block list that is already on the allow list, they will automatically be removed from the allow list.

2.  Entries cannot exist at both the domain group level and the domain level. When adding a new domain group block list or allow list entry, if the entry already exists for any of the domains in the domain group, it will be removed as a domain level entry and marked as a domain group level entry.

3.  Per-recipient allow lists and block lists overrule the global allow list and block lists for a domain.

4.  Allowed senders will bypass the SpamTitan Cloud anti-spam engine, however, they will still be scanned for viruses and banned attachments.
