---
title: "Enabling Mandatory Two-Factor Authentication"
description: "Imported from support.titanhq.com"
---

> Source: [support.titanhq.com](https://support.titanhq.com/en/74399-enabling-mandatory-two-factor-authentication.html)
> Product: SpamTitan
> Imported content type: docs_page
> Product stream: skellig

#### Enabling Mandatory Two-Factor Authentication

The steps below will help you, as an MSP, to enable mandatory two-factor authentication (2FA) for all or some of your customers, their domains and users. When you enforce 2FA on the MSP level, then all admins on the MSP level, their customers, domains and users inherit the enforced 2FA feature. Be aware that customer and domain admins can modify the enforced 2FA setting.

1.  Go to **Settings** > **Two Factor Authentication**, where the All Customers table displays a list of your customers and their Enforced 2FA status.

    ![ST-TwoFA-Gen.jpg](/docs-test/imported-assets/spamtitan-skellig/74399-enabling-mandatory-two-factor-authentication/dc4c3faf8d8f.jpg)

    -   Use the Search field to locate a specific customer.

    -   Select the column ![ST-Column-icon.jpg](/docs-test/imported-assets/spamtitan-skellig/74399-enabling-mandatory-two-factor-authentication/8191dfaf599c.jpg) icon to add or remove columns from the table.

2.  You can enable mandatory 2FA for all of your customers at once or select specific customers from the list. The steps below explain both options.

    -   **Mandatory 2FA for All Customers**

        By default, the **Mandatory two-factor authentication for: _MSP Name_** is disabled, which means that it is optional for your customers to use 2FA when logging in.

        1.  To make 2FA mandatory for all of your customers when they log in, turn the **Mandatory two-factor authentication for: _MSP Name_** toggle on.

            ![ST-2FA-All-Cust-Toggle.jpg](/docs-test/imported-assets/spamtitan-skellig/74399-enabling-mandatory-two-factor-authentication/d1493a1803dd.jpg)

        2.  You'll be prompted in the pop-up window to confirm your action. Select **Continue**.

            ![ST-Enforce-2FA-Toggle-On.jpg](/docs-test/imported-assets/spamtitan-skellig/74399-enabling-mandatory-two-factor-authentication/6bb7e033cfd0.jpg)

            You'll see that the All Customers table has been updated to show Enforced 2FA is **On** for every customer.

    -   **Mandatory 2FA for Specific Customers**

        By default, the **Mandatory two-factor authentication for: _MSP Name_** is disabled, which means that it is optional for your customers to use 2FA when logging in.

        1.  To enforce mandatory 2FA for specific customers, select the checkbox(es) for the customer(s) and from the Actions dropdown menu, select **Enforce 2FA**.

            ![ST-2FA-Actions-Enable.jpg](/docs-test/imported-assets/spamtitan-skellig/74399-enabling-mandatory-two-factor-authentication/78f06267130e.jpg)

        2.  You'll be prompted in the pop-up window to confirm your action. Select **Enable**.

            ![ST-2FA-Spec-Cust-Enable.jpg](/docs-test/imported-assets/spamtitan-skellig/74399-enabling-mandatory-two-factor-authentication/d3c30b00cdfc.jpg)

            You'll see that the All Customers table has been updated to show Enforced 2FA is **On** for the customer(s).

    Now that you've enabled mandatory 2FA for some or all of your customers, you may want to turn it off for specific domains or users within those domains. See [2FA for Domains and Users](/docs-test/titanhq/products/spamtitan/docs/skellig-9/2fa-for-domains-and-users/ "2FA for Domains and Users") for further details.
