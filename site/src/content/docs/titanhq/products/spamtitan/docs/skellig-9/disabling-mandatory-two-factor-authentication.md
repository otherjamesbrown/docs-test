---
title: "Disabling Mandatory Two-Factor Authentication"
description: "Imported from support.titanhq.com"
---

> Source: [support.titanhq.com](https://support.titanhq.com/en/74500-disabling-mandatory-two-factor-authentication.html)
> Product: SpamTitan
> Imported content type: docs_page
> Product stream: skellig

#### Disabling Mandatory Two-Factor Authentication

The steps below will help you, as a customer admin, disable mandatory two-factor authentication (2FA) for all or some of your domains and users. When you disable enforced 2FA on the customer level, then all admins on the customer level, their domains and users inherit this setting. Be aware that domain admins can modify the enforced 2FA setting.

Disabling enforced 2FA means that 2FA becomes optional for users when they log in.

1.  Go to **Settings** > **Two Factor Authentication**, where the All Domains table displays a list of your domains and their Enforced 2FA status.

    ![ST-Cust-Domain-Table1.jpg](/docs-test/imported-assets/spamtitan-skellig/74500-disabling-mandatory-two-factor-authentication/f47d1226f3d1.jpg)

    -   Use the Search field to locate a specific domain.

    -   Select the column ![ST-Column-icon.jpg](/docs-test/imported-assets/spamtitan-skellig/74500-disabling-mandatory-two-factor-authentication/8191dfaf599c.jpg) icon to add or remove columns from the table.

2.  You can disable mandatory 2FA for all of your domains at once or select specific domains from the list. The steps below explain both options.

    -   **Optional 2FA for All Domains**

        If the **Mandatory two-factor authentication for: _Customer Name_** is enabled, then it means that users in your domains must use 2FA when logging in.

        1.  To disable mandatory 2FA for all of your domains and make it optional, turn the **Mandatory two-factor authentication for: _Customer Name_** toggle off.

            ![ST-2FA-All-Cust-Toggle-Off.jpg](/docs-test/imported-assets/spamtitan-skellig/74500-disabling-mandatory-two-factor-authentication/788ddb980b26.jpg)

        2.  You'll be prompted in the pop-up window to confirm your action. Select **Continue**.

            ![ST-2FA-All-Cust-Pop-Up-Optional.jpg](/docs-test/imported-assets/spamtitan-skellig/74500-disabling-mandatory-two-factor-authentication/8516bb56afb1.jpg)

            You'll see that the All Domains table has been updated to show Enforced 2FA is Off for every domain.

    -   **Optional 2FA for Selected Domains**

        1.  To disable mandatory 2FA for specific domains, select the checkbox(es) for the domain(s) and from the Actions dropdown menu, select **Disable 2FA**.

            ![ST-Cust-Domain-Spec-Disable.jpg](/docs-test/imported-assets/spamtitan-skellig/74500-disabling-mandatory-two-factor-authentication/b3e049af6f7b.jpg)

        2.  You'll be prompted in the pop-up window to confirm your action. Select **Disable**.

            ![ST-Cust-Domain-Spec-Disable1.jpg](/docs-test/imported-assets/spamtitan-skellig/74500-disabling-mandatory-two-factor-authentication/73c3fbd216f5.jpg)

            You'll see that the All Domains table has been updated to show Enforced 2FA is **Off** for the domains(s).

    Now that you've made 2FA optional for some or all domains, you may want to make it mandatory for certain users within those domains. See [2FA for Users](/docs-test/titanhq/products/spamtitan/docs/skellig-9/2fa-for-users/ "2FA for Users") for further details.
