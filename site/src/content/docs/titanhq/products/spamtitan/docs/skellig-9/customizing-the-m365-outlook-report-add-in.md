---
title: "Customizing the M365 Outlook Report Add-in"
description: "Imported from support.titanhq.com"
---

> Source: [support.titanhq.com](https://support.titanhq.com/en/77785-customizing-the-m365-outlook-report-add-in.html)
> Product: SpamTitan
> Imported content type: docs_page
> Product stream: skellig

## Customizing the M365 Outlook Report Add-in

With the Microsoft Outlook Add-in reporting tool, you have the ability to report suspicious emails directly from your Outlook client and send them to Microsoft. By following the steps below, you can also customize M365 to send copies of the reported mails to a dedicated mailbox, which forwards them to SpamTitan for improved analysis.

:::note[Important]
If you are using several CyberSentriq products, such as PhishTitan, then you already have the TitanHQ reporting tool in your M365 Outlook client and you do not need to customize the M365 Outlook Report Add-in for SpamTitan.

![ST-0365-Button.jpg](/docs-test/imported-assets/spamtitan-skellig/77785-customizing-the-m365-outlook-report-add-in/ed9669aa51ce.jpg)

If this is the case, it is suggested that you use the TitanHQ reporting tool in Outlook instead of the Microsoft one. See [Disable M365 Outlook Report Add-in](/docs-test/titanhq/products/spamtitan/docs/skellig-9/disable-m365-outlook-report-add-in/) for details on how to hide the M365 reporting tool in your Outlook client.
:::

To customize M365 to send copies of reported emails directly from your Outlook client to SpamTitan, follow the steps below:

1.  [Create a Shared Mailbox](/docs-test/titanhq/products/spamtitan/docs/skellig-9/create-a-shared-mailbox/ "Create a Shared Mailbox"): To receive copies of reported mails in a mailbox on your server.

2.  [Create an Exchange Connector](/docs-test/titanhq/products/spamtitan/docs/skellig-9/create-an-exchange-connector/ "Create an Exchange Connector"). To forward reported mails from your mailbox to a specified SpamTitan server.

3.  [Create an Exchange Rule](/docs-test/titanhq/products/spamtitan/docs/skellig-9/create-an-exchange-rule/ "Create an Exchange Rule"). To intercept reported mails and send them to the Exchange Connector.

4.  [Configure Microsoft Defender](/docs-test/titanhq/products/spamtitan/docs/skellig-9/configure-microsoft-defender/ "Configure Microsoft Defender"). To allow Exchange to send reported mails to a shared mailbox.

:::note
The instructions below are for tools that are not owned or managed by TitanHQ and are only intended as a guideline to help you. As such, the information may be subject to change without us knowing.

If you notice anything incorrect, please email [docs@titanhq.com](mailto:docs@titanhq.com) and let us know.
:::

## In this Section

-   [Create a Shared Mailbox](/docs-test/titanhq/products/spamtitan/docs/skellig-9/create-a-shared-mailbox/)
-   [Create an Exchange Connector](/docs-test/titanhq/products/spamtitan/docs/skellig-9/create-an-exchange-connector/)
-   [Create an Exchange Rule](/docs-test/titanhq/products/spamtitan/docs/skellig-9/create-an-exchange-rule/)
-   [Configure Microsoft Defender](/docs-test/titanhq/products/spamtitan/docs/skellig-9/configure-microsoft-defender/)
