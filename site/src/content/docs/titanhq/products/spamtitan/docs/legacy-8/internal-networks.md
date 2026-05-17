---
title: "Internal Networks"
description: "Imported from docs.titanhq.com"
---

> Source: [docs.titanhq.com](https://docs.titanhq.com/en/8957-internal-networks.html)
> Product: SpamTitan
> Imported content type: docs_page
> Product stream: legacy

##### Internal Networks

Go to **Anti-Spam Engine** > **Settings** > **Internal Networks** to list your internal networks. Mail coming from listed internal networks is treated more favorably for spam testing. Specifying internal networks also allows SpamTitan Gateway to optimize RBL lookups, detect when messages never left a trusted network path and increase spam scoring accuracy.

![STG-internal-networks.jpg](/docs-test/imported-assets/spamtitan-legacy/8957-internal-networks/2ea67ffc0a09.jpg)

Internal networks should include all hosts that act as an MX for your domains, or that may deliver mail internally in your organization. For example, if mail entering your organization is first processed by another server, it should be listed. If SpamTitan _is_ the MX for your organization, leave this as the default (127.0.0.1).

Entries can be specified as a single host or as a network specified in CIDR format.

-   To add a new internal network, click **Add...** and the Internal Networks window displays. Using the table below as a reference, complete the fields. Click **Save** to save this entry.

-   To edit an existing internal network, click the edit ![ST-701-edit-button.jpg](/docs-test/imported-assets/spamtitan-legacy/8957-internal-networks/7455a85c9b68.jpg) icon in the Options column and the Internal Network window displays. Using the table below as a reference, edit the fields. Click **Save** to save changes.

-   To delete an internal network, click the delete ![ST-701-delete-button.jpg](/docs-test/imported-assets/spamtitan-legacy/8957-internal-networks/3b2dc809e314.jpg) icon in the Options column.
