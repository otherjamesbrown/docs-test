---
title: "View Mail History"
description: "Imported from docs.titanhq.com"
---

> Source: [docs.titanhq.com](https://docs.titanhq.com/en/1139-view-mail-history.html)
> Product: SpamTitan
> Imported content type: docs_page
> Product stream: legacy

#### View Mail History

SpamTitan keeps a record of all mail that it processes. This information is available in **Reporting** > **History**.

Click the **Refresh** button to refresh the history list.

To view mail history by date, click the **Date Range** button and select from list of available options. Choose **Custom Date range...** to set your own date range.

![ST-701-mail-history-buttons.jpg](/docs-test/imported-assets/spamtitan-legacy/1139-view-mail-history/81e1e23dc089.jpg)

History contains the following information about each email:

-   _Date:_ date and time the email was received.

-   _Msg ID:_ a unique internal message identification number that SpamTitan Cloud assigns to each email (also known as SpamTitan ID). Click to view extended details on an email:

    ![STC-mail-history-detail.jpg](/docs-test/imported-assets/spamtitan-legacy/1139-view-mail-history/67caf5e5a60f.jpg)

-   _Client Address:_ source IP address a mail was received from.

-   _Type:_ message type as classified by SpamTitan Cloud, e.g. Clean, Spam, RBL Reject, SPF Reject, etc.

-   _From:_ sender email address.

-   _To:_ recipient email address.

-   _Subject:_ subject header of the received message.

-   _Size_: size of the message.

-   _Flow:_ The direction of the message (Inbound ![ST-701-inbound-flow.jpg](/docs-test/imported-assets/spamtitan-legacy/1139-view-mail-history/3fbcbf354e15.jpg) , Outbound ![ST-701-outbound-flow.jpg](/docs-test/imported-assets/spamtitan-legacy/1139-view-mail-history/f069ac552ce7.jpg) or Internal ![ST-701-internal-flow.jpg](/docs-test/imported-assets/spamtitan-legacy/1139-view-mail-history/27edb3b6f367.jpg)).

-   _TLS_: indicates if [TLS (Transport Layer Security)](/docs-test/titanhq/products/spamtitan/docs/legacy-8/transport-security-layer-tls/ "Transport Security Layer (TLS)") was applied to the message.

-   _Delivery:_ Indicates the delivery status of a message (Sent/Deferred/Bounced).

-   _Delivery Response_: This shows the [SMTP](/docs-test/titanhq/products/spamtitan/docs/legacy-8/smtp/ "SMTP") response from the destination server. This can be useful to indicate, for example, why a remote server rejected a message.
