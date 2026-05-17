---
title: "Modifying Mail History Display Settings"
description: "Imported from docs.titanhq.com"
---

> Source: [docs.titanhq.com](https://docs.titanhq.com/en/1142-modifying-mail-history-display-settings.html)
> Product: SpamTitan
> Imported content type: docs_page
> Product stream: legacy

##### Modifying Mail History Display Settings

Go to **Reporting** > **History** > **Display Settings** to control what columns are displayed in your Mail History.

![STC-701-reporting-history-display-filters.jpg](/docs-test/imported-assets/spamtitan-legacy/1142-modifying-mail-history-display-settings/f3dddb605033.jpg)

Check the boxes for the columns you wish to view. Settings remain as selected the next time you visit the page.

:::note[Important]
As SpamTitan Cloud runs over a cluster of three nodes, it is recommended to un-check ‘_only show messages from local cluster node_’. Otherwise, you may only see 30% of your mail reported.
:::

The following Display Settings can be checked or unchecked:

-   _Show Message Subject_: Display the subject of the message.

-   _Show Score for Clean Messages_: If enabled, the score assigned by SpamTitan Cloud will be displayed in the Type column of the history view for messages classified as Clean.

-   _Show Score for Spam Messages_: If enabled, the score assigned by SpamTitan Cloud will be displayed in the Type column of the history view for messages classified as Spam.

-   _Show Virus name for Virus Messages_: If enabled, then the name of the virus that the virus scanner detected will be displayed in the Type column of the history view for virus messages.

-   _Show Scanner that detected Virus_: If enabled, then the name(s) of the virus scanner(s) that detected the virus will be display in the Type column of the history view for virus messages.

-   _Show Message Flow_: Show in which direction the Message is coming from and going to.

-   _Show TLS encryption status_: Show the status of the [Transport Layer Security](/docs-test/titanhq/products/spamtitan/docs/legacy-8/transport-security-layer-tls/ "Transport Security Layer (TLS)") (TLS).

-   _Show delivery status_: Show Delivery Status of the message.

-   _Show delivery response_: Show SMTP response from destination server.

-   _Show RBL name_: Show the name of the RBL that blocked the message.

-   _Only show messages for local cluster node_: Clicking this option will mean that only messages for the local cluster node are displayed (see Important note above).

-   _Show Cluster node column:_ This will enable the user to see a cluster node column on the table displayed.
