---
title: "Greylisting"
description: "Imported from docs.titanhq.com"
---

> Source: [docs.titanhq.com](https://docs.titanhq.com/en/1081-greylisting.html)
> Product: SpamTitan
> Imported content type: docs_page
> Product stream: legacy

#### Greylisting

Greylisting temporarily rejects all email and requires the sending server to send it again after 5 minutes. This delay is beneficial as:

-   Spammers will generally not retry to send an email, while legitimate servers do.

-   The delay gives time for an IP address to be listed on RBLs if it is spam.

While greylisting is highly effective at blocking spam it comes at the cost of mail being delayed by 5 to 10 minutes, depending on the sending server.
