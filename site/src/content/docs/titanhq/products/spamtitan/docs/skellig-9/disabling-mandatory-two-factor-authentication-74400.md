---
title: "Disabling Mandatory Two-Factor Authentication"
description: "Imported from support.titanhq.com"
---

> Source: [support.titanhq.com](https://support.titanhq.com/en/74400-disabling-mandatory-two-factor-authentication.html)
> Product: SpamTitan
> Imported content type: docs_page
> Product stream: skellig

#### Disabling Mandatory Two-Factor Authentication

The steps below will help you, as an MSP, disable mandatory two-factor authentication (2FA) for all or some of your customers, their domains and users. When you disable enforced 2FA on the MSP level, then all admins on the MSP level, their customers, domains and users inherit this setting. Be aware that customer and domain admins can modify the enforced 2FA setting.

Disabling enforced 2FA means that 2FA becomes optional for users when they log in.

1.  Go to **Settings** > **Two Factor Authentication**, where the All Customers table displays a list of your customers and their Enforced 2FA status.

    ![ST-2FA-All-Cust-On.jpg](/docs-test/imported-assets/spamtitan-skellig/74400-disabling-mandatory-two-factor-authentication/8c6fc8c0b85d.jpg)

    -   Use the Search field to locate a specific customer.

    -   Select the column ![ST-Column-icon.jpg](/docs-test/imported-assets/spamtitan-skellig/74400-disabling-mandatory-two-factor-authentication/8191dfaf599c.jpg) icon to add or remove columns from the table.

2.  You can disable mandatory 2FA for all of your customers at once or select specific customers from the list. The steps below explain both options.

    -   **Optional 2FA for All Customers**

        1.  To disable mandatory 2FA for all of your customers and make it optional, turn the **Mandatory two-factor authentication for: MSP Name** toggle off.

            ![ST-2FA-All-Cust-Toggle-Off.jpg](/docs-test/imported-assets/spamtitan-skellig/74400-disabling-mandatory-two-factor-authentication/788ddb980b26.jpg)

        2.  You'll be prompted in the pop-up window to confirm your action. Select **Continue**.

            ![ST-2FA-All-Cust-Pop-Up-Optional.jpg](/docs-test/imported-assets/spamtitan-skellig/74400-disabling-mandatory-two-factor-authentication/8516bb56afb1.jpg)

            You'll see that the All Customers table has been updated to show Enforced 2FA is Off for every customer.

    -   **Optional 2FA for Selected Customers**

        1.  To disable mandatory 2FA for specific customers, select the checkbox(es) for the customer(s) and from the Actions dropdown menu, select **Disable 2FA**.

            ![ST-2FA-Spec-Custs-Disable.jpg](/docs-test/imported-assets/spamtitan-skellig/74400-disabling-mandatory-two-factor-authentication/1ae10ebed65d.jpg)

        2.  You'll be prompted in the pop-up window to confirm your action. Select **Disable**.

            ![ST-2FA-Spec-Custs-Disable1.jpg](/docs-test/imported-assets/spamtitan-skellig/74400-disabling-mandatory-two-factor-authentication/64c01ca521aa.jpg)

            You'll see that the All Customers table has been updated to show Enforced 2FA is **Off** for the customer(s).

    Now that you've made 2FA optional for some or all customers, you may want to make it mandatory for specific domains or users within those domains. See [2FA for Domains and Users](/docs-test/titanhq/products/spamtitan/docs/skellig-9/2fa-for-domains-and-users/ "2FA for Domains and Users") for further details.
