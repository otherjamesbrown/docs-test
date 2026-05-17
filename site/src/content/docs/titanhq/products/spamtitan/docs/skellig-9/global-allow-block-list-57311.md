---
title: "Global Allow & Block List"
description: "Imported from support.titanhq.com"
---

> Source: [support.titanhq.com](https://support.titanhq.com/en/57311-global-allow---block-list.html)
> Product: SpamTitan
> Imported content type: docs_page
> Product stream: skellig

### Global Allow & Block List

An MSP admin can globally allow or block email addresses, domains or IPs by adding them to your global Allow & Block List.

#### About Allowing & Blocking

Email addresses, domains and IPs (MSP level) can be allowed and blocked by being added to your Allow & Block List. It's important to understand the following when using allow and block lists:

-   **IP Allowing (MSP level only)**: Spam filtering, virus filtering, banned attachments filtering and SPF checks are not performed on IPs that are on the allow list. However, RBL checks and greylisting is still applied.

    :::danger[Warning]
    Allowed IPs bypass settings put in place for your security. Ensure an IP is trusted and details are correct _before_ adding to your allow list.
    :::

-   **Domain & Email Allowing**: Spam filtering is not performed for domains or email addresses that are on the allow list. However, RBL, SPF, greylisting, virus checking and attachment scanning are still applied.

-   **Blocking**: Spam checking is not performed on IPs, domains or email addresses that are added to your block list, they are automatically blocked.

**Allow and Block List Precedence**

There are four allow & block list levels in SpamTitan. Each is accessed by logging in at the appropriate access level, or by drilling down to that level as your access allows and going to the **Filtering** menu:

1.  _MSP Allow & Block list_: Entries apply to all of an MSP's customers, all their domains and all users of those domains.

2.  _Customer Allow & Block list_: Entries apply to all of a customer's domains and users of those domains.

3.  _Domain Allow & Block list_: Entries apply to a single domain and all users of that domain. For example, www.example.com.

4.  _User Allow & Block list_: Entries apply to a single user. For example, user@example.com.

Go to **Filtering** > **Allow & Block List** and follow the steps below to add an allowed or blocked domain, email address or IP.

#### Adding an Allowed or Blocked Email

Go to **Filtering** > **Allow & Block List** and follow the steps below to add allowed or blocked emails:

1.  Select the **Emails** tab.

2.  You can add allowed or blocked emails individually or upload a list of emails in a .csv file.

    -   To add allowed or blocked emails individually:

        1.  Select **Add** and choose **Allow Email** or **Block Email**.

        2.  Complete the fields in the pop-up:

            ![ST-SK-add-allow-block-email.jpg](/docs-test/imported-assets/spamtitan-skellig/57311-global-allow---block-list/d6e6508e43e1.jpg)

            -   _Email to Allow/Block_: an email in the form of user@example.com

            -   _Comment (optional)_: Optional comments about this allow or block email.

        3.  Select **Allow** or **Block**.

    -   To upload a list of emails:

        1.  Select **Add** and choose **Upload Emails**.

        2.  In the pop-up window, drag and drop the csv file to be uploaded.

#### Adding an Allowed or Blocked Domain

Go to **Filtering** > **Allow & Block List** and follow the steps below to add an allowed or blocked domain:

1.  Select the **Domains** tab.

2.  You can add allowed or blocked domains individually or upload a list of domains in a .csv file.

    -   To add allowed or blocked domains individually:

        1.  Select **Add** and choose **Upload Domain(s)**.

        2.  Complete the fields in the pop-up:

            ![ST-SK-add-allow-block-domain.jpg](/docs-test/imported-assets/spamtitan-skellig/57311-global-allow---block-list/8d5e0630bb5b.jpg)

            -   _Domain to Allow/Block_: Enter the domain you want to allow or block.

            -   _Include Subdomains_: If your domain is example.com and you select this option, then all domains that end in example.com will also be allowed or blocked. For example, support.example.com and products.example.com.

            -   _Comments (optional)_: Optional comments about this allow or block domain.

        3.  Select **Allow** or **Block**.

    -   To upload a list of domains:

        1.  Select **Add** and choose **Upload Domain(s)**.

        2.  In the pop-up window, drag and drop the csv file to be uploaded.

#### Adding an Allowed or Blocked IP

Go to **Filtering** > **Allow & Block List** and follow the steps below to add an allowed or blocked IP.

:::caution
Allowed IPs can bypass settings put in place for your security. Ensure any IP you add as an allowed IP is trusted and details are correct before adding.
:::

1.  Select the **IPs** tab.

2.  You can add allowed or blocked IPs individually or upload a list of IPs in a .csv file.

    -   To add allowed or blocked IPs individually:

        1.  Select **Add** and choose **Allow an IP** or **Block an IP**.

        2.  Complete the fields in the pop-up:

            ![ST-SK-add-allow-IP.jpg](/docs-test/imported-assets/spamtitan-skellig/57311-global-allow---block-list/83fc4410f76c.jpg)

            -   _IP Network_: An individual IP address or network range to be allowed or blocked.

                :::caution
                Allowed IPs can bypass settings put in place for your security. Ensure any IP you add as an allowed IP is trusted and details are correct before adding.
                :::

            -   _Netmask_: Select the netmask for the specified IP address. Individual IPv4 addresses have a /32 (255.255.255.255) netmask.

            -   _Address Type_: IPv4 (default) or IPv6.

            -   _Comments (optional):_ Optional comments about this allow or block IP.

        3.  Select **Allow** or **Block**.

    -   To upload a list of IPs:

        1.  Select **Add** and choose **Upload IP(s)**.

        2.  In the pop-up window, drag and drop the csv file to be uploaded.

## In this Section

-   [About Allowing & Blocking](/docs-test/titanhq/products/spamtitan/docs/skellig-9/global-allow-block-list-57311/)
-   [Adding an Allowed or Blocked Email](/docs-test/titanhq/products/spamtitan/docs/skellig-9/global-allow-block-list-57311/)
-   [Adding an Allowed or Blocked Domain](/docs-test/titanhq/products/spamtitan/docs/skellig-9/global-allow-block-list-57311/)
-   [Adding an Allowed or Blocked IP](/docs-test/titanhq/products/spamtitan/docs/skellig-9/global-allow-block-list-57311/)
