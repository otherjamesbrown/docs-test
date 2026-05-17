---
title: "Enabling Mandatory Two-Factor Authentication"
description: "Imported from support.titanhq.com"
---

> Source: [support.titanhq.com](https://support.titanhq.com/en/74499-enabling-mandatory-two-factor-authentication.html)
> Product: SpamTitan
> Imported content type: docs_page
> Product stream: skellig

#### Enabling Mandatory Two-Factor Authentication

The steps below will help you, as a customer admin, enable mandatory two-factor authentication (2FA) for all or some of your domains and users. When you enforce 2FA on the customer level, then all admins on the customer level, their domains and users inherit the enforced 2FA feature. Be aware that domain admins can modify the enforced 2FA setting.

1.  Go to **Settings** > **Two Factor Authentication**, where the All Domains table displays a list of your domains and their Enforced 2FA status.

    ![ST-Cust-Domain-Table.jpg](/docs-test/imported-assets/spamtitan-skellig/74499-enabling-mandatory-two-factor-authentication/7da292f36800.jpg)

    -   Use the Search field to locate a specific domain.

    -   Select the column ![ST-Column-icon.jpg](/docs-test/imported-assets/spamtitan-skellig/74499-enabling-mandatory-two-factor-authentication/8191dfaf599c.jpg) icon to add or remove columns from the table.

2.  You can enable mandatory 2FA for all of your domains at once or select specific domains from the list. The steps below explain both options.

    -   **Mandatory 2FA for All Domains**

        If the **Mandatory two-factor authentication for: _Customer Name_** is disabled, then it means that 2FA is optional for users when logging in.

        1.  To make 2FA mandatory for all of your domains, turn the **Mandatory two-factor authentication for: _Customer Name_** toggle on.

            ![ST-2FA-All-Cust-Toggle.jpg](/docs-test/imported-assets/spamtitan-skellig/74499-enabling-mandatory-two-factor-authentication/d1493a1803dd.jpg)

        2.  You'll be prompted in the pop-up window to confirm your action. Select **Continue**.

            ![ST-Enforce-2FA-Toggle-On.jpg](/docs-test/imported-assets/spamtitan-skellig/74499-enabling-mandatory-two-factor-authentication/6bb7e033cfd0.jpg)

            You'll see that the All Domains table has been updated to show Enforced 2FA is **On** for every domain.

    -   **Mandatory 2FA for Specific Domains**

        If the **Mandatory two-factor authentication for: _Customer Name_** is disabled, then it means that 2FA is optional for users in your domains to use 2FA when logging in.

        1.  To make 2FA mandatory for specific domains, select the checkbox(es) for the domains(s) and from the Actions dropdown menu, select **Enforce 2FA**.

            ![ST-Cust-Domain-Spec.jpg](/docs-test/imported-assets/spamtitan-skellig/74499-enabling-mandatory-two-factor-authentication/fe4bd4742dcd.jpg)

        2.  You'll be prompted in the pop-up window to confirm your action. Select **Enable**.

            ![ST-Cust-Domain-Spec-Enable.jpg](/docs-test/imported-assets/spamtitan-skellig/74499-enabling-mandatory-two-factor-authentication/388215fdefa4.jpg)

            You'll see that the All Domains table has been updated to show Enforced 2FA is **On** for the domains(s).

    Now that you've enabled mandatory 2FA for some or all of your domains, you may want to turn it off for specific users within those domains. See [2FA for Users](/docs-test/titanhq/products/spamtitan/docs/skellig-9/2fa-for-users/ "2FA for Users") for more details.
