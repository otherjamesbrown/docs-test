---
title: "Create an Exchange Rule"
description: "Imported from support.titanhq.com"
---

> Source: [support.titanhq.com](https://support.titanhq.com/en/77793-create-an-exchange-rule.html)
> Product: SpamTitan
> Imported content type: docs_page
> Product stream: skellig

### Create an Exchange Rule

This section explains how to set up an Exchange Rule that will identify the reported mails and send them to the Exchange Connector.

1.  Go to [Exchange admin center](https://admin.exchange.microsoft.com/) and in the left navigation menu, select **Mailflow** > **Rules**. Then select **Add a rule** > **Create a new rule**.

    ![ST-Skellig-Create-Exchange-Rule.jpg](/docs-test/imported-assets/spamtitan-skellig/77793-create-an-exchange-rule/d2ec5b53b656.jpg)

2.  In the Set rule conditions window, complete the following fields:

    ![ST-Skellig-Create-Exchange-Rule1.jpg](/docs-test/imported-assets/spamtitan-skellig/77793-create-an-exchange-rule/7d301f23d8f1.jpg)

    -   _Name_: Enter the name for your rule; for example, _Reported Email Redirect_.

    -   _Apply this rule if_: From this dropdown menu, select **The recipient**. In the _Select One_ dropdown menu beside it, select **is this person**. In the pop-up window, search for the name of the shared mailbox you created, which is _report-email-cybersentriq_, and select **Save**.

    -   _Do the following_: From this dropdown menu, select **Redirect the message to**. In the _Select One_ dropdown menu beside it, select **the following connector**. In the pop-up window, select the connector you created in [Create an Exchange Connector](/docs-test/titanhq/products/spamtitan/docs/skellig-9/create-an-exchange-connector/ "Create an Exchange Connector"), and select **Save**.

    -   _Except if_: Leave this section empty.

3.  Select **Next**.

4.  In the Set rule settings window, use the default Rule mode option of **Enforce**. From the _Match sender address in message_ dropdown menu, select **Header or envelope**.

    ![ST-Skellig-Create-Exchange-Rule2.jpg](/docs-test/imported-assets/spamtitan-skellig/77793-create-an-exchange-rule/13e4b5602929.jpg)

5.  Select **Next**.

6.  Review the information you've entered, and select **Finish**. And when rule is created successfully, select **Done**.

    ![ST-Skellig-Create-Exchange-Rule3.jpg](/docs-test/imported-assets/spamtitan-skellig/77793-create-an-exchange-rule/c41391361156.jpg)

    Now that you've created the rule, you'll need to enable it.

7.  Go to the Rules list, and locate the new rule at the bottom of the list. Click on the rule name, and n the pop-up window, select the **Enable or disable rule** toggle. This will change the status to **Enabled**. Close the pop-up window.

Next, you'll need to [configure Microsoft Defender](/docs-test/titanhq/products/spamtitan/docs/skellig-9/configure-microsoft-defender/ "Configure Microsoft Defender").
