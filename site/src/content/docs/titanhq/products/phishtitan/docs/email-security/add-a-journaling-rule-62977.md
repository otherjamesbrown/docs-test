---
title: "Add a Journaling Rule"
description: "Imported from support.titanhq.com"
---

> Source: [support.titanhq.com](https://support.titanhq.com/en/62977-add-a-journaling-rule.html)
> Product: PhishTitan
> Imported content type: docs_page
> Product stream: email-security

##### Add a Journaling Rule

As part of configuration, you need to create a journaling rule in Microsoft 365 to allow email flow through the Email Security service.

A journaling mailbox is the mailbox that receives messages that match a journaling rule's conditions. Messages matching the rule's conditions are delivered to the journaling address specified in the rule.

You have a unique Email Security journaling address available to you in Email Security to create the journaling rule.

:::note[Important]
A Microsoft 365 or Office 365 mailbox can't be used as a journaling mailbox.
:::

Follow the steps below to add a journaling rule for Email Security to Microsoft 365.

1.  From the customer level in Email Security, go to **Settings** > **Connections**.

2.  Under **Step 2** _Add a journaling rule to Microsoft 365_, select **More Details**.

3.  Select the ![copy-icon.jpg](/docs-test/imported-assets/phishtitan-docs/62977-add-a-journaling-rule/b25416526d89.jpg) icon to copy your unique journaling email address.

4.  Go to [https://purview.microsoft.com/datalifecyclemanagement/exchange](https://purview.microsoft.com/datalifecyclemanagement/exchange)

5.  From the left menu, select **Exchange (legacy)** > **Journal rules**.

6.  Select the ![ST-701-office365-add-button.jpg](/docs-test/imported-assets/phishtitan-docs/62977-add-a-journaling-rule/3d6259cd5013.jpg) **New rule** tab.

7.  Paste the journaling email address copied in Step 3 into the _Send journal reports to:_ field.

8.  Under _Journal messages sent or received from_, select **Everyone**.

9.  Under _Type of message to journal,_ select **All messages**. The completed form should look as follows:

    ![PT-completed-journal-rule-form.jpg](/docs-test/imported-assets/phishtitan-docs/62977-add-a-journaling-rule/e6b8973ddaf7.jpg)

10.  In the _Journal rule name:_ field, enter a name for this rule. For example, **Email Security**.

11.  Select **Next** and then **Submit**.
