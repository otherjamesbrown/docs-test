---
title: "Getting Started: Customer Admin"
description: "Imported from helpdesk.phishtitan.com"
---

> Source: [helpdesk.phishtitan.com](https://helpdesk.phishtitan.com/support/solutions/articles/4000201281-getting-started-customer-admin)
> Product: PhishTitan
> Imported content type: kb_article
> Source folder: Getting Started: Customer Admin
> Modified: Thu, 5 Dec, 2024 at 5:27 PM

Welcome to Email Security! A customer admin who has been onboarded to Email Security by their MSP and received their login credentials can follow the steps below to connect and configure their account.

1.  [Log into Email Security](/docs-test/titanhq/products/phishtitan/kb/getting-started-customer-admin/log-into-email-security/ "Log into Email Security").

2.  [Update your Security Settings](/docs-test/titanhq/products/phishtitan/kb/getting-started-customer-admin/step-2-update-your-security-settings/ "Step 2: Update your Security Settings").

3.  _Do you filter outbound email with a filtering solution other than Microsoft 365?_

    -   _Yes_: Create an Office 365 outbound connector in Azure _before_ completing the next step.

        See Create an Office 365 Outbound Connector in Azure.

    -   _No_: Continue to next step.

4.  [Connect to Microsoft 365](/docs-test/titanhq/products/phishtitan/kb/getting-started-customer-admin/connect-to-microsoft-365/ "Connect to Microsoft 365").

5.  [Add a Non Delivery Report Email Address](/docs-test/titanhq/products/phishtitan/kb/getting-started-customer-admin/add-a-non-delivery-report-email-address/ "Add a Non-Delivery Report Email Address").

6.  [Add a Journaling Rule](/docs-test/titanhq/products/phishtitan/kb/getting-started-customer-admin/add-a-journaling-rule/ "Add a Journaling Rule").

7.  _Do you use Link Lock as part of your SpamTitan service?_

    -   _Yes_: Link Lock must be disabled in SpamTitan to allow Email Security to process mail accurately.

        See [Disable Link Lock in SpamTitan](/docs-test/titanhq/products/phishtitan/kb/getting-started-customer-admin/disable-link-lock-in-spamtitan/ "Disable Link Lock in SpamTitan").

    -   _No_: Continue to next step.

8.  Deploy TitanHQ for Outlook.
