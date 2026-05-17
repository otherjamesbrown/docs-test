---
title: "Notifications"
description: "Imported from support.titanhq.com"
---

> Source: [support.titanhq.com](https://support.titanhq.com/en/67944-notifications.html)
> Product: PhishTitan
> Imported content type: docs_page
> Product stream: email-security

#### Notifications

You can configure a webhook in Email Security to send a notification to a web application every time a user identifies an email as clean or phishing using the TitanHQ Outlook Add-in.

:::note[Important]
If you have already set up a webhook, you'll need to update the URL before January 31st, 2025. This is because Microsoft is retiring Office 365 connectors within Teams, and all webhook connector URLs must be updated to a new format before this date. See [Manage Microsoft 365 Connectors and Customer Connectors](https://learn.microsoft.com/en-us/microsoftteams/m365-custom-connectors#update-connectors-url) ![external\_link.png](/docs-test/imported-assets/phishtitan-docs/67944-notifications/e926db1b58ca.png) for details.
:::

If you haven't already set up a webhook in Email Security, follow the steps below:

1.  Go to [Microsoft Support](https://support.microsoft.com/en-us/office/create-incoming-webhooks-with-workflows-for-microsoft-teams-8ae491c7-0394-4861-ba59-055e33f75498#:~:text=Select%20More%20options%20next%20to%20the%20channel%20or,needs.%20Each%20template%20has%20a%20different%20authentication%20type.) ![external\_link.png](/docs-test/imported-assets/phishtitan-docs/67944-notifications/e926db1b58ca.png) for the steps to create an incoming webhook.

2.  Add the webhook to your Email Security portal, as follows:

    1.  Go to **Notifications** and enter the following:

        -   _Webhook Name_: The name for the webhook.

        -   _Webhook URL_: The URL of the webhook. When you created an incoming webhook in step 1, this is the URL that was generated.

    2.  Select **Save**.

Once you've completed these steps, your notifications will appear similar to the following:

![PT-Webhook-Message.jpg](/docs-test/imported-assets/phishtitan-docs/67944-notifications/e397cf15eefd.jpg)
