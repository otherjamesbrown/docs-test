---
title: "Before Installing SpamTitan Gateway"
description: "Imported from docs.titanhq.com"
---

> Source: [docs.titanhq.com](https://docs.titanhq.com/en/8861-before-installing-spamtitan-gateway.html)
> Product: SpamTitan
> Imported content type: docs_page
> Product stream: legacy

#### Before Installing SpamTitan Gateway

Please read the following before installing SpamTitan Gateway:

1.  SpamTitan Gateway is usually installed on a server in your network between the firewall and mail server(s). This requires a rule change to your firewall to direct incoming emails on Port 25 (SMTP) to the IP address of your SpamTitan server.

    See [Firewall Ports Required by SpamTitan](/docs-test/titanhq/products/spamtitan/docs/legacy-8/firewall-ports-required-by-spamtitan/ "Firewall Ports Required by SpamTitan") for more information.

2.  If assigning a new MX record for your SpamTitan Gateway server while also maintaining your existing MX records, be aware that spammers can specifically target secondary or lower priority MX records based on the assumption that secondary MX records are not protected by spam filters.

    In this case, any secondary MX record should be a backup mail server that will queue mail if the primary MX record is unavailable.
