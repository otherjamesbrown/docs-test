---
title: "Add a Non-Delivery Report Email Address"
description: "Imported from helpdesk.phishtitan.com"
---

> Source: [helpdesk.phishtitan.com](https://helpdesk.phishtitan.com/support/solutions/articles/4000201286-add-a-non-delivery-report-email-address)
> Product: PhishTitan
> Imported content type: kb_article
> Source folder: Getting Started: Customer Admin
> Modified: Thu, 5 Dec, 2024 at 5:28 PM

A non-delivery report (NDR) is typically sent to an email sender when a message cannot be delivered to let them know that an issue has occurred. Before creating a journal rule, Microsoft 365 requires that you specify a non-delivery email address to receive journal reports if they are not deliverable to the email address specified in a journal rule.

:::note[Important]
If you already have an NDR email address in place in Microsoft 365, you do not need to complete the steps below.
:::

Follow the steps below to add a non-delivery report (NDR) email address to Microsoft 365.

1.  From the customer level in Email Security, go to **Settings** > **Connections**.

2.  Under **Step 1** _Add a non-delivery report (NDR) to Microsoft 365,_ select **More Details**.

3.  Select the copy ![copy-icon.jpg](/docs-test/imported-assets/phishtitan-kb/4000201286/b25416526d89.jpg) icon to copy your unique NDR email address.

4.  Go to [https://purview.microsoft.com/settings/application-settings/datalifecyclemanagement](https://purview.microsoft.com/settings/application-settings/datalifecyclemanagement).

5.  Select **Replace** and paste your unique NDR email address in to the _Send undeliverable journal reports to:_ field.

6.  Select **Save**.

Next, you'll need to [create a journaling rule](/docs-test/titanhq/products/phishtitan/kb/getting-started-customer-admin/add-a-journaling-rule/ "Add a Journaling Rule") to allow email flow through the Email Security service.
