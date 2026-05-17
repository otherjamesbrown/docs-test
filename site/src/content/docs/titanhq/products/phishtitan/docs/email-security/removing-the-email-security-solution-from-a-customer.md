---
title: "Removing the Email Security Solution from a Customer"
description: "Imported from support.titanhq.com"
---

> Source: [support.titanhq.com](https://support.titanhq.com/en/70498-removing-the-email-security-solution-from-a-customer.html)
> Product: PhishTitan
> Imported content type: docs_page
> Product stream: email-security

#### Removing the Email Security Solution from a Customer

Follow the steps below to remove the Email Security solution from a customer.

1.  First, turn off the Email Security solution for the customer in the TitanHQ platform.

    1.  Go to **Customers** in your left menu and locate the customer in the table. Select the edit ![edit-icon-small.jpg](/docs-test/imported-assets/phishtitan-docs/70498-removing-the-email-security-solution-from-a-customer/61c7eed9145b.jpg)icon in the Actions column.

    2.  In the Edit Customer window, select **Next**.

    3.  In the next window, select **Email Security** to turn it off. Select the checkbox to acknowledge that further action is required by you in the customer's Azure tenant.

        ![Plat-Edit-Cust-PT-Solution-Off-Ack.jpg](/docs-test/imported-assets/phishtitan-docs/70498-removing-the-email-security-solution-from-a-customer/b6b8c220e7b1.jpg)

    4.  Select **Update Customer**.

2.  Remove the journal rule that you set up when you were onboarded.

    1.  Go to [https://purview.microsoft.com/datalifecyclemanagement/exchange](https://purview.microsoft.com/datalifecyclemanagement/exchange) and in the left menu, select **Exchange (legacy)** > **Journal Rules**.

        ![Plat-Remove-Journal-Rule-Compliance-Portal-Version.jpg](/docs-test/imported-assets/phishtitan-docs/70498-removing-the-email-security-solution-from-a-customer/aa2316bad82b.jpg)

    2.  Select the checkbox beside the journal rule and then **Delete**.

3.  Change the NDR email address.

    1.  Go to [https://purview.microsoft.com/settings/application-settings/datalifecyclemanagement](https://purview.microsoft.com/settings/application-settings/datalifecyclemanagement) and select **Exchange (legacy)** > **Settings**.

        ![Plat-Change-NDR-email-address-Compliance-Portal-Version.jpg](/docs-test/imported-assets/phishtitan-docs/70498-removing-the-email-security-solution-from-a-customer/221f9895cd2b.jpg)

    2.  Remove the NDR email provided by TitanHQ and replace it with a new email address managed by you.

4.  Remove the Outlook Add-in for all users.

    1.  Go to [https://admin.microsoft.com/Adminportal/Home#/Settings/IntegratedApps](https://admin.microsoft.com/Adminportal/Home#/Settings/IntegratedApps) > **Deployed Apps**.

    2.  Select **THQ for Outlook** > **Actions** > **Remove App**. This will remove the Outlook Add-in for all end users.

        ![Plat-Remove-Outlook-Addin.jpg](/docs-test/imported-assets/phishtitan-docs/70498-removing-the-email-security-solution-from-a-customer/90b0bc8fb5b9.jpg)

:::note[Important]
You do not need to remove the Enterprise App as you may be using it for other TitanHQ solutions, such as Phishing Simulation or Security Awareness Training.
:::
