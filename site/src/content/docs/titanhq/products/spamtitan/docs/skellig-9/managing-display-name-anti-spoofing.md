---
title: "Managing Display Name Anti-Spoofing"
description: "Imported from support.titanhq.com"
---

> Source: [support.titanhq.com](https://support.titanhq.com/en/72550-managing-display-name-anti-spoofing.html)
> Product: SpamTitan
> Imported content type: docs_page
> Product stream: skellig

#### Managing Display Name Anti-Spoofing

The information below will help you to enable and manage anti-spoof settings for one or more users from the domain level.

##### Enabling Display Name Anti-Spoofing

Follow the steps below to enable display name anti-spoofing for one or more users. Check the breadcrumb to ensure you are at the domain level:

![ST-SK-breadcrumb-domain.jpg](/docs-test/imported-assets/spamtitan-skellig/72550-managing-display-name-anti-spoofing/075c04714cfa.jpg)

:::note
Once you have enabled Display Name anti-spoofing, you must upload the display names of users you want to protect in order for display name anti-spoofing to be applied. See [Adding Display Names](/docs-test/titanhq/products/spamtitan/docs/skellig-9/managing-display-name-anti-spoofing/ "Adding Display Names") for details.
:::

1.  Go to the domain level, and from the side-bar menu select **Filtering** > **Anti-Spoof**. Select the **Display Name Anti-Spoofing** tab at the top.

2.  To enable Display Name anti-spoofing, move the **Display Name Anti-Spoofing** slider to ON (default: OFF).

    ![ST-Display-Name-DomainLevel.jpg](/docs-test/imported-assets/spamtitan-skellig/72550-managing-display-name-anti-spoofing/9683c5308a59.jpg)

    The list of users associated with this domain are listed in the table with the following details:

    -   _Display Name_: User's name displayed in the email header.

    -   _Email Address_: User's work email address.

    -   _Enabled_: Indicates whether display name anti-spoofing is enabled.

    -   _Updated At_: Date and time that the display name was last updated.

3.  To enable display name anti-spoofing for disabled display names, locate the display names with status OFF in the Enabled column.

    ![ST-Display-Name-Domain-Users.jpg](/docs-test/imported-assets/spamtitan-skellig/72550-managing-display-name-anti-spoofing/280f61caa847.jpg)

4.  Select the checkbox(es) and then select **Enable**. Select **Enable** again when you are prompted to confirm.

    ![ST-Display-Name-Domain-Enable.jpg](/docs-test/imported-assets/spamtitan-skellig/72550-managing-display-name-anti-spoofing/ab36c24b75ca.jpg)

You can disable a protected user by selecting the display name and then **Disable**. Select **Disable** when you are prompted to confirm.

##### Adding Display Names

SpamTitan allows you to add display names of users to protect them from spoofing attempts.

:::note
Even if you have enabled Display Name anti-spoofing, it is necessary to upload the display names of users you want to protect in order for display name anti-spoofing to be applied.

Once you have enabled Display Name anti-spoofing, follow the instructions below to add display names.
:::

If you already have display names and they are not yet enabled for anti-spoofing, see [Enabling Display Name Anti-Spoofing](/docs-test/titanhq/products/spamtitan/docs/skellig-9/managing-display-name-anti-spoofing/ "Enabling Display Name Anti-Spoofing").

1.  Go to the domain level, and from the side-bar menu select **Filtering** > **Anti-Spoof**. Select the **Display Name Anti-Spoofing** tab at the top.

    Display names currently protected in this domain are listed in the table.

    Use the Search field to locate display names currently associated with this domain.

    Select the Column ![column-icon.jpg](/docs-test/imported-assets/spamtitan-skellig/72550-managing-display-name-anti-spoofing/264f4fd45b19.jpg) icon to hide or view columns

    -   _Display Name_: User's name displayed in the email header.

    -   _Email Address_: User's work email address.

    -   _Enabled_: Indicates if display name anti-spoofing is turned on.

    -   _Updated At_: Date and time that the display name was last updated.

2.  Select **Add** to add a single display name or multiple display names. The users associated with these display names will be protected by anti-spoofing.

    -   To add a single display name:

        1.  Select **Single Display Name** and enter the following details:

            -   _Display Name_: User's name displayed in the email header.

            -   _Email Address_: User's work email address.

        2.  Select **Add**.

    -   To add multiple display names:

        1.  Select **Multiple Display Name** to upload a CSV file containing multiple users and their email addresses.

        2.  If you don't already have a list of users, you can go to your Microsoft Entra ID portal and export users from there. You can do so by selecting **All users** > **Download users**. Alternatively, you can go to your Group Members section, and select **Bulk operations** > **Download members**. Both options will provide a CSV file for download.

        3.  Once you have your list of users, you'll need to download the CSV template, by selecting it in Step 1, as shown below.

            ![ST-Download-CSV-Domain-Level.jpg](/docs-test/imported-assets/spamtitan-skellig/72550-managing-display-name-anti-spoofing/01a388f0d80b.jpg)

            Save it and populate it with the display name data from the Entra ID file you downloaded. Note that the CSV template only requires Display Names and Email Addresses, so you will need to extract only this data from the Entra ID file.

        4.  Upload your new CSV file by clicking in the indicated area in the UI.

        5.  Locate the file in the pop-up window or drag and drop it from your folder.

    After you've added display names, they'll appear in the display name list.

## In this Section

-   [Enabling Display Name Anti-Spoofing](/docs-test/titanhq/products/spamtitan/docs/skellig-9/managing-display-name-anti-spoofing/)
-   [Adding Display Names](/docs-test/titanhq/products/spamtitan/docs/skellig-9/managing-display-name-anti-spoofing/)
