---
title: "Managing Display Name Anti-Spoofing"
description: "Imported from support.titanhq.com"
---

> Source: [support.titanhq.com](https://support.titanhq.com/en/72547-managing-display-name-anti-spoofing.html)
> Product: SpamTitan
> Imported content type: docs_page
> Product stream: skellig

#### Managing Display Name Anti-Spoofing

The information below will help you to enable and manage anti-spoofing settings for one or more users from the customer level.

##### Enabling Display Name Anti-Spoofing

Follow the steps below to enable display name anti-spoofing for one or more users. Check the breadcrumb to ensure you are at the customer level:

![ST-SK-breadcrumb-customer.jpg](/docs-test/imported-assets/spamtitan-skellig/72547-managing-display-name-anti-spoofing/e49be174a616.jpg)

:::note
Once you have enabled Display Name anti-spoofing, you must upload the display names of users you want to protect in order for display name anti-spoofing to be applied. See [Adding Display Names](/docs-test/titanhq/products/spamtitan/docs/skellig-9/managing-display-name-anti-spoofing-72547/ "Adding Display Names") for details.
:::

1.  Go to the customer level, and from the side-bar menu select **Filtering** > **Anti-Spoof**. Select the **Display Name Anti-Spoofing** tab at the top.

    A list of your domains are displayed:

    -   _Domain_: Domain name.

    -   _Status_: Indicates if anti-spoofing is enabled for this domain.

    -   _Last Updated_: Date and time domain was last updated.

2.  Locate the domain that you want to enable display name anti-spoofing for and select it. The Display Name Anti-Spoofing Data slideout appears.

3.  To enable display name anti-spoofing, move the **Enable Display Name Anti-Spoofing for this domain** slider to ON (default: OFF).

    ![ST-DisplayName-slideout-Protected-Users.jpg](/docs-test/imported-assets/spamtitan-skellig/72547-managing-display-name-anti-spoofing/c16056cae898.jpg)

    The list of users associated with this domain are listed in the table with the following details:

    -   _Display Name_: User's name displayed in the email header.

    -   _Email Address_: User's work email address.

    -   _Status_: Indicates whether display name anti-spoofing is on.

4.  To enable display name anti-spoofing for disabled display names, locate the display names with status OFF in the Status column and select the checkbox(es).

    ![ST-DisplayName-slideout-Protected-Users-Enabled.jpg](/docs-test/imported-assets/spamtitan-skellig/72547-managing-display-name-anti-spoofing/171473c25efb.jpg)

5.  Select **Enable** from the Actions dropdown menu. Select **Enable** again when you are prompted to confirm.

You can disable a protected user by selecting the display name and then **Disable** from the Actions dropdown menu. Select **Disable** when you are prompted to confirm.

:::note[Important]
Disabling a display name means that the anti-spoofing filter is turned off. If a malicious attempt to spoof the display name is made, then the email will not be identified and quarantined.
:::

###### Adding Display Names

SpamTitan allows you to add display names of users to protect them from spoofing attempts.

:::note
Even if you have enabled Display Name anti-spoofing, it is necessary to upload the display names of users you want to protect in order for display name anti-spoofing to be applied.

Once you have enabled Display Name anti-spoofing, follow the instructions below to add display names.
:::

If you already have display names and they are not yet enabled for anti-spoofing, see [Enabling Display Name Anti-Spoofing](/docs-test/titanhq/products/spamtitan/docs/skellig-9/managing-display-name-anti-spoofing-72547/ "Enabling Display Name Anti-Spoofing").

1.  Go to the customer level, and from the side-bar menu, select **Filtering** > **Anti-Spoof**. Select the **Display Name Anti-Spoofing** tab at the top.

    Your domains are listed in the table with the following details:

    -   _Domain_: Domain name.

    -   _Status_: Indicates whether display name spoofing is enabled for the domain.

    -   _Last updated_: Date and time that the domain was last updated.

2.  Locate the domain that you want to enable display name anti-spoofing for and select it. The Display Name Anti-Spoofing Data slideout appears.

    -   Use the Search field to locate display names currently associated with this domain.

    -   Select the Column ![column-icon.jpg](/docs-test/imported-assets/spamtitan-skellig/72547-managing-display-name-anti-spoofing/264f4fd45b19.jpg) icon to hide or view columns

3.  Select the **Add Users** tab to add one or more display names. The users associated with these display names will be protected by anti-spoofing.

    -   **Add Single Users**

        1.  Select **Add Single Users** and enter the following details:

            -   _Display Name_: User's name displayed in the email header.

            -   _Email Address_: User's work email address.

        2.  Select **Add**.

    -   **Add Multiple Users**

        1.  Select **Add Multiple Users** to upload multiple display names and their email addresses at one time, using a CSV file.

        2.  If you don't already have a list of users, you can go to your Microsoft Entra ID portal and export users from there. You can do so by selecting **All users** > **Download users**. Alternatively, you can go to your Group Members section, and select **Bulk operations** > **Download members**. Both options will provide a CSV file for download.

        3.  Once you have your list of users, you'll need to download the CSV template, by selecting it in Step 1, as shown below.

            ![ST-Display-Name-Download-CSV.jpg](/docs-test/imported-assets/spamtitan-skellig/72547-managing-display-name-anti-spoofing/c0461b8438e2.jpg)

            Save it and populate it with the display name data from the Entra ID file you downloaded. Note that the CSV template only requires Display Names and Email Addresses, so you will need to extract only this data from the Entra ID file.

        4.  Upload your new CSV file by clicking in the indicated area in the UI.

        5.  Locate the file in the pop-up window or drag and drop it from your folder.

    After you've added display names, they'll appear in the display name list.

## In this Section

-   [Enabling Display Name Anti-Spoofing](/docs-test/titanhq/products/spamtitan/docs/skellig-9/managing-display-name-anti-spoofing-72547/)
