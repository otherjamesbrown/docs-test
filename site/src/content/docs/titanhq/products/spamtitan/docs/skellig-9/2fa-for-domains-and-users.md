---
title: "2FA for Domains and Users"
description: "Imported from support.titanhq.com"
---

> Source: [support.titanhq.com](https://support.titanhq.com/en/74401-2fa-for-domains-and-users.html)
> Product: SpamTitan
> Imported content type: docs_page
> Product stream: skellig

#### 2FA for Domains and Users

If you've [set up mandatory 2FA](/docs-test/titanhq/products/spamtitan/docs/skellig-9/enabling-mandatory-two-factor-authentication-74399/ "Enabling Mandatory Two-Factor Authentication") for your customers, you may want to disable it for some of their domains or users within the domains. Likewise, if you've [disabled 2FA](/docs-test/titanhq/products/spamtitan/docs/skellig-9/disabling-mandatory-two-factor-authentication-74400/ "Disabling Mandatory Two-Factor Authentication") for some customers, you may want to make it mandatory for certain domains or users within the domains.

To manage 2FA for your customers' domains and the users in the domains, follow the steps below.

1.  Go to **Settings** > **Two Factor Authentication**, where the All Customers table displays a list of your customers and their Enforced 2FA status.

    ![ST-TwoFA-Gen.jpg](/docs-test/imported-assets/spamtitan-skellig/74401-2fa-for-domains-and-users/dc4c3faf8d8f.jpg)

2.  Click on the customer in the table to open the domain/user slide-out. From here you can enable mandatory 2FA or disable it for that customer's domains and users.

    ![ST-Slideout-Gen.jpg](/docs-test/imported-assets/spamtitan-skellig/74401-2fa-for-domains-and-users/1ba52a385091.jpg)

    -   **To Manage 2FA for Domains**

        1.  Find the domain that you want to update and select the checkbox beside it.

        2.  If Enforced 2FA is Off, select **Enable** to make 2FA mandatory for all users in that domain.

            ![ST-Slideout-Enable.jpg](/docs-test/imported-assets/spamtitan-skellig/74401-2fa-for-domains-and-users/1b6b46950ec6.jpg)

            You'll be prompted in the pop-up window to confirm your action. Select **Enable**.

            If Enforced 2FA is ON, select **Disable** to make 2FA optional for all users in that domain.

            ![ST-Slideout-Disable.jpg](/docs-test/imported-assets/spamtitan-skellig/74401-2fa-for-domains-and-users/9879f20e0468.jpg)

            You'll be prompted in the pop-up window to confirm your action. Select **Disable**.

    -   **To Manage 2FA for Users of a Domain**

        You may have enabled mandatory 2FA for a domain, but want to turn it off for certain users. Likewise, if you made 2FA optional for a domain (disabled it), you may want to turn it on for certain users. Follow the steps below for guidance.

        1.  To view users of a domain, first select the checkbox of that single domain, and then select **Users**.

            ![ST-Users.jpg](/docs-test/imported-assets/spamtitan-skellig/74401-2fa-for-domains-and-users/4a875a4863a7.jpg)

        2.  If Enforced 2FA is Off for a domain, you can enable it for certain users. Select the checkbox(es) for those user(s) and select **Enable**.

            ![ST-2fa-Users-Enable.jpg](/docs-test/imported-assets/spamtitan-skellig/74401-2fa-for-domains-and-users/b8a3d4f372b3.jpg)

            You'll be prompted in the pop-up window to confirm your action. Select **Enable**.

            If Enforced 2FA is ON, you can disable it for certain users. Select the checkbox(es) for those user(s) and select **Disable**.

            ![ST-2fa-Users-Disable.jpg](/docs-test/imported-assets/spamtitan-skellig/74401-2fa-for-domains-and-users/227a19aca3d5.jpg)

            You'll be prompted in the pop-up window to confirm your action. Select **Disable**.

3.  Select the **X** to close the slide-out.
