---
title: "Connect to Microsoft 365"
description: "Imported from helpdesk.phishtitan.com"
---

> Source: [helpdesk.phishtitan.com](https://helpdesk.phishtitan.com/support/solutions/articles/4000194417-connect-to-microsoft-365)
> Product: PhishTitan
> Imported content type: kb_article
> Source folder: Getting Started: MSP Admin
> Modified: Wed, 1 Oct, 2025 at 3:21 PM

Once a customer account has been added to Email Security, the account needs to be connected to Microsoft 365. This is done at the customer level of access and can be completed by an MSP admin if they have the required Azure access for their customer.

Follow the steps below to connect a customer account to Microsoft 365.

1.  Go to your customers table, which you can access by selecting **Customers** or **Email Security** > **Overview**.

    ![Plat-Customers-Connect-to-O365.jpg](/docs-test/imported-assets/phishtitan-kb/4000194417/13d412820a0c.jpg)

2.  From here, you can access the customer level in one of the following ways:

    -   Find the customer you want to connect to Microsoft 365 and from the Connection column, select **Add Connection**.

    -   Alternatively, select the view icon from the actions column of the customers table. Then go to **Settings** > **Connections** > **Add Connection**.

3.  From the dialog, select your **Microsoft account**:

    ![PT-m365-sign-in.jpg](/docs-test/imported-assets/phishtitan-kb/4000194417/faf6a970f664.jpg)

4.  When prompted, enter your Microsoft password, and select **Sign in**.

5.  If two-factor authentication (2FA) is enabled for your account, confirm login when prompted.

6.  Review the permission requested and to continue, select **Accept**.

7.  Once connected, the dialog closes and you are returned to the **Connections** page.

:::note[Important]
A connection has now been established to the customer's Microsoft tenant, but the remaining configuration steps must be completed to allow mail flow to Email Security. See [Add a Non-Delivery Report Email Address](/docs-test/titanhq/products/phishtitan/kb/getting-started-msp-admin/add-a-non-delivery-report-email-address/ "Add a Non-Delivery Report Email Address") for details.
:::
