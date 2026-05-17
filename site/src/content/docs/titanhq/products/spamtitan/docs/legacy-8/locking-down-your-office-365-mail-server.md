---
title: "Locking Down Your Office 365 Mail Server"
description: "Imported from docs.titanhq.com"
---

> Source: [docs.titanhq.com](https://docs.titanhq.com/en/2319-locking-down-your-office-365-mail-server.html)
> Product: SpamTitan
> Imported content type: docs_page
> Product stream: legacy

##### Locking Down Your Office 365 Mail Server

Abstract

Follow the steps in this guide to lock down your inbound email flow in Office 365 to only accept email from SpamTitan Cloud IP addresses.

:::note[Notice]
The instructions below include information about tools that are not owned or managed by TitanHQ and are only intended as a guideline to help you. As such, the information may be subject to change without us knowing.

If you notice anything out of place, please email [docs@titanhq.com](mailto:docs@titanhq.com) and let us know.
:::

Follow the steps below to lock down your inbound email flow in Office 365 to only accept email from your SpamTitan. This requires you to create a receive connector in Office 365.

1.  Log on to your Office 365 Exchange Admin Center (EAC).

    :::note
    If you are using Microsoft 365 Defender, log in to [security.microsoft.com](https://security.microsoft.com/) and select **Exchange message trace** from the sidebar menu to open your Exchange Admin Center.
    :::

2.  Click **Mail flow** and then **Connectors** from the sidebar menu to view your connectors.

3.  Click ![ST-701-office365-add-button.jpg](/docs-test/imported-assets/spamtitan-legacy/2319-locking-down-your-office-365-mail-server/3d6259cd5013.jpg) **Add a connector** and the 'New connector' window displays. Select **Partner organization** as shown:

    ![ST-O365-new-connector.jpg](/docs-test/imported-assets/spamtitan-legacy/2319-locking-down-your-office-365-mail-server/8f7e53226376.jpg)

4.  Click **Next** and the 'Connector name' window displays.

5.  In the Name: field give the connector a meaningful name. For example, _SpamTitan to Office 365_. Click **Next**.

6.  In the 'Authenticating sent email' window:

    1.  Select **By verifying that the sender domain matches one of the following domains**.

    2.  Enter **\*** in the dialog box and click ![ST-O365-blue-add-button.jpg](/docs-test/imported-assets/spamtitan-legacy/2319-locking-down-your-office-365-mail-server/e670341ce122.jpg).

        ![ST-O365-authenticating-sent-email.jpg](/docs-test/imported-assets/spamtitan-legacy/2319-locking-down-your-office-365-mail-server/26717c6b2d71.jpg)

    3.  Click **Next**.

7.  In the 'Security restrictions' window:

    1.  Check **Reject email messages if they aren't sent over TLS**.

        :::note[Important]
        This option requires that outbound TLS is enabled in SpamTitan.
        :::

    2.  Select **Reject email messages if they aren't sent from within this IP address range** and enter your SpamTitan IP address.

        :::note
        See [SpamTitan Cloud IP addresses](/docs-test/titanhq/products/spamtitan/docs/legacy-8/spamtitan-cloud-server-ip-addresses/ "SpamTitan Cloud Server IP Addresses") for shared cloud IPs, or enter your own private SpamTitan IPs if using SpamTitan Private Cloud.
        :::

    3.  Click ![ST-O365-blue-add-button.jpg](/docs-test/imported-assets/spamtitan-legacy/2319-locking-down-your-office-365-mail-server/e670341ce122.jpg) to save the IP you entered:

        ![ST-O365-security-restrictions.png](/docs-test/imported-assets/spamtitan-legacy/2319-locking-down-your-office-365-mail-server/247a9b8400f0.png)

    4.  Click **Next**.

8.  The 'Review connector' page displays the information you have entered above. Verify the information is correct and click **Create connector**.
