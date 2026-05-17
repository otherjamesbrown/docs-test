---
title: "Creating an Office 365 Outbound Connector"
description: "Imported from docs.titanhq.com"
---

> Source: [docs.titanhq.com](https://docs.titanhq.com/en/27637-creating-an-office-365-outbound-connector.html)
> Product: SpamTitan
> Imported content type: docs_page
> Product stream: legacy

#### Creating an Office 365 Outbound Connector

Abstract

Follow our simple guide for the steps to create a smart host outbound connector between your Office 365 and SpamTitan.

:::note[Notice]
The instructions below include information about external tools and are only intended as a guideline.

If you notice anything out of place, please email [docs@titanhq.com](mailto:docs@titanhq.com) and let us know.
:::

Follow the steps below to create a smart host outbound connector between your Office 365 and SpamTitan.

1.  Log on to your Office 365 Exchange Admin Center (EAC).

    :::note
    If you are using Microsoft 365 Defender, log in to [security.microsoft.com](https://security.microsoft.com/) and select **Exchange message trace** from the sidebar menu to open your Exchange Admin Center.
    :::

2.  Select **Mail flow** and then **Connectors** from the sidebar menu to view your connectors.

3.  Select ![ST-701-office365-add-button.jpg](/docs-test/imported-assets/spamtitan-legacy/27637-creating-an-office-365-outbound-connector/3d6259cd5013.jpg) **Add a connector** and the 'New connector' window displays. Select the fields as shown:

    ![ST-O365-new-connector-outbound.jpg](/docs-test/imported-assets/spamtitan-legacy/27637-creating-an-office-365-outbound-connector/f6899b953a4d.jpg)

4.  Select **Next** and the 'Connector name' window displays.

    1.  In the _Name:_ field, give the connector a meaningful name, e.g. _SpamTitan Outbound_.

    2.  In the _Description:_ field enter an optional description for this connector, e.g. _Connector for SpamTitan Outbound_.

    3.  Unselect _**Turn it on**_. You can enable this connector once you are ready to cutover mail flow.

    4.  Select **Next**.

5.  In the 'Use of connector' window:

    1.  Select **Only when email messages are sent to these domains**.

    2.  Enter **\*** in the dialog box and click ![ST-O365-blue-add-button.jpg](/docs-test/imported-assets/spamtitan-legacy/27637-creating-an-office-365-outbound-connector/e670341ce122.jpg).

        ![ST-O365-use-of-connector.jpg](/docs-test/imported-assets/spamtitan-legacy/27637-creating-an-office-365-outbound-connector/17050a9f4349.jpg)

    3.  Select **Next**.

6.  In the 'Routing' window:

    1.  Select **Route email through these smart hosts**.

    2.  Enter the hostname or IP address for your smart host, e.g. _cloud-out-c.spamtitan.com_, and click ![ST-O365-blue-add-button.jpg](/docs-test/imported-assets/spamtitan-legacy/27637-creating-an-office-365-outbound-connector/e670341ce122.jpg).

    3.  Repeat Step 2 for each smart host you want to add. Select **Next** when done.

7.  Select **Next** on the 'Security restrictions' window to accept the default TLS settings.

8.  In the 'Validation email' window, you can enter an external email address (outside your organization) to test the connection:

    1.  Enter an external email address, e.g. _test@example.com_ and click ![ST-O365-blue-add-button.jpg](/docs-test/imported-assets/spamtitan-legacy/27637-creating-an-office-365-outbound-connector/e670341ce122.jpg).

    2.  Select **Validate** and a test email will be sent to the address provided.

9.  A summary page displays the information you have entered above. Verify the information is correct and click **Next**.

10.  When you are ready to start routing mail through SpamTitan, ensure your connector status is 'On'. To do this, go to **Mail flow** > **Connectors**, highlight this connector and click the enable icon.

     ![ST-O365-enable-outbound-connector.jpg](/docs-test/imported-assets/spamtitan-legacy/27637-creating-an-office-365-outbound-connector/4d452829236d.jpg)

11.  Your connector is now active and you can start routing outbound mail through SpamTitan.
