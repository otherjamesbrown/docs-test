---
title: "Ensuring Your Email is Not Marked as Spam in Office 365"
description: "Imported from support.titanhq.com"
---

> Source: [support.titanhq.com](https://support.titanhq.com/en/59681-ensuring-your-email-is-not-marked-as-spam-in-office-365.html)
> Product: SpamTitan
> Imported content type: docs_page
> Product stream: skellig

### Ensuring Your Email is Not Marked as Spam in Office 365

:::note[Notice]
The instructions below include information about tools that are not owned or managed by TitanHQ and are only intended as a guideline to help you. As such, the information may be subject to change without us knowing.

If you notice anything out of place, please email [docs@titanhq.com](mailto:docs@titanhq.com) and let us know.
:::

Email being delivered from SpamTitan to Office 365 is sometimes incorrectly identified as spam, which results in delayed or failed email delivery. To avoid this, SpamTitan IP ranges should be added to your Microsoft 365 Defender.

Follow these steps to add the SpamTitan IP ranges to your Office 365 connection filter policy:

1.  Log in to [Microsoft 365 Defender](https://security.microsoft.com/).

2.  Under **Email & Collaboration** in the sidebar menu, go to **Policies & rules** > **Threat policies** and select **Anti-spam** in the Policies section.

3.  Click **Connection filter policy (Default)** and the 'Connection filter policy (Default) window' slides from the right.

    ![ST-O365-connection-filter-policy.jpg](/docs-test/imported-assets/spamtitan-skellig/59681-ensuring-your-email-is-not-marked-as-spam-in-office-365/280b3cfa3ee4.jpg)

4.  Click **Edit connection filter policy**.

5.  In **Always allow messages from the following IP addresses or address range:**, add your inbound SpamTitan IP ranges. See [SpamTitan Servers](/docs-test/titanhq/products/spamtitan/docs/skellig-9/change-your-mx-records/ "SpamTitan Servers").

6.  Check the **Turn on safe list** checkbox.

    :::note
    If you experience issues editing the connection, do not check **Turn on safe list** at this stage. Add the SpamTitan IPs in Step 5, uncheck **Turn on safe list** and proceed to Save.
    :::

7.  Click **Save**.

8.  If you were unable to turn on safe senders in Step 6, edit your connection and check **Turn on safe list** now.

See [Use the Microsoft 365 Defender portal to modify the default connection filter policy](https://docs.microsoft.com/en-us/microsoft-365/security/office-365-security/configure-the-connection-filter-policy?view=o365-worldwide#use-the-microsoft-365-defender-portal-to-modify-the-default-connection-filter-policy) ![external\_link.png](/docs-test/imported-assets/spamtitan-skellig/59681-ensuring-your-email-is-not-marked-as-spam-in-office-365/e926db1b58ca.png) for additional information.
