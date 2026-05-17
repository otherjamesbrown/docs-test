---
title: "Create an Office 365 Outbound Connector in Azure"
description: "Imported from support.titanhq.com"
---

> Source: [support.titanhq.com](https://support.titanhq.com/en/74597-create-an-office-365-outbound-connector-in-azure.html)
> Product: PhishTitan
> Imported content type: docs_page
> Product stream: email-security

##### Create an Office 365 Outbound Connector in Azure

:::note[Notice]
The instructions below include information about external tools and are only intended as a guideline.
:::

Email Security customers using SpamTitan to send outbound mail must follow the steps below to configure an Office 365 outbound connector in Azure before completing their Email Security configuration. This connector allows outbound SpamTitan mail to pass through the Email Security service.

1.  Log into the [Exchange Admin Center](https://admin.exchange.microsoft.com/).

2.  In the sidebar menu, go to **Mail flow → Connectors**.

3.  Click **Add a connector** and select the fields as shown:

    ![ST-O365-new-connector-outbound.jpg](/docs-test/imported-assets/phishtitan-docs/74597-create-an-office-365-outbound-connector-in-azure/f6899b953a4d.jpg)

4.  Click **Next** . The **Connector name** window displays.

    -   In the **Name** field, give the connector a meaningful name, for example, _SpamTitan Outbound to Email Security_.

    -   In the **Description** field, enter an optional description for this connector, for example, _Allow Email Security to receive SpamTitan outbound mail._.

    -   Enable **Turn it on**.

    -   Click **Next**.

5.  In the **Use of connector** window:

    -   Select **Only when email messages are sent to these domains**.

    -   Enter _graph-in.us-east-2-01.prod.titanhq.com_ in the dialog box, and click **+**.

    -   Enter _graph-ndr.us-east-2-01.prod.titanhq.com_ in the dialog box, and click **+**.

        ![PT-O365-use-of-connector.jpg](/docs-test/imported-assets/phishtitan-docs/74597-create-an-office-365-outbound-connector-in-azure/0be389c64196.jpg)

    -   Click **Next**.

6.  In the **Routing** window:

    -   Select **Use the MX record associated with the partner's domain**.

    -   Click **Next**.

7.  Click **Next** on the **Security restrictions** window to accept the default TLS settings.

8.  In the **Validation email** window:

    -   Enter _validate@graph-in.us-east-2-01.prod.titanhq.com_ in the dialog box, and click **+**.

    -   Click **Validate**. A test email will be sent to the email address above. A validation success message displays once validated:

        ![PT-O365-validation-email.jpg](/docs-test/imported-assets/phishtitan-docs/74597-create-an-office-365-outbound-connector-in-azure/822b24c7c2f5.jpg)

        :::note
        Validation may not succeed due to a timeout error. If this occurs, ensure you are using the correct validation email and retry. If time out occurs again, proceed to the next step.
        :::

    -   Click **Next**.

9.  Verify the information is correct, then click **Next**.
