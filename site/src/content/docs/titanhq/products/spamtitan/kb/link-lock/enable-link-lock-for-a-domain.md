---
title: "Enable Link Lock for a Domain Print"
description: "Imported from helpdesk.spamtitan.com"
---

> Source: [helpdesk.spamtitan.com](https://helpdesk.spamtitan.com/support/solutions/articles/4000186943-enable-link-lock-for-a-domain)
> Product: SpamTitan
> Imported content type: kb_article
> Source folder: Link Lock
> Modified: Wed, 14 Sep, 2022 at 4:10 PM

![](/docs-test/imported-assets/spamtitan-kb/4000186943/8f1ecbff6e4e.jpg)

Link Lock is an enhancement to SpamTitan and is available after the purchase of a SpamTitan Plus license. Once a license is in place, Link Lock must be enabled by the SpamTitan administrator at the global level. Once enabled, Link Lock can also be managed at the domain and user levels.

Follow the steps below to enable and configure Link Lock for a domain.

1.  Go to **Content Filtering** > **Link Lock** and scroll to the **Configuration** panel.

2.  In the **Domains:** table, click the edit ![](/docs-test/imported-assets/spamtitan-kb/4000186943/7455a85c9b68.jpg) icon in the Options column of the domain for which you want to enable Link Lock and the Edit Link Lock Configuration (Domain) window displays.

3.  Click **Enable** to enable Link Lock and an expanded configuration window displays:

    ![](/docs-test/imported-assets/spamtitan-kb/4000186943/208cc7b7e477.jpg)

4.  Using the table and block page examples below as reference, complete the fields in the Link Lock Configuration - Domain: window.

5.  Click **Apply**.

**Link Lock Domain Configuration Settings**

Setting

Description

**Link Lock** (ON/OFF)

Click Enable or Disable to toggle Link Lock ON or Off for this domain.

Rewrite mails with DKIM signature

Allow Link Lock to rewrite emails with a DKIM signature.

:::note[Important]
Checking this option invalidates DKIM signatures, which may affect scoring on other mail systems.
:::

Check redirected URLs

Select to allow Link Lock to follow redirected URLs (up to a max. of 5). This protects against a legitimate URL redirecting to a malicious URL.

:::note
Selecting this option may affect system performance.
:::

**Block Page Settings**

Use custom logo

Select to allow you to upload a custom block page image.

Logo

Displays the image currently being used on the Link Lock block page. Default:

![](/docs-test/imported-assets/spamtitan-kb/4000186943/ac980f6eb349.jpg)

Upload new logo

Select **Choose File** to upload a custom block page image. The following file formats are supported: PNG, JPG and JPEG. Maximum file size is 2 MB.

Use custom message

Select to allow you to add a custom block page header and/or message.

Message header

Enter a custom block page header (default: Access Blocked).

Message body

Enter a custom block page message (default: This website has been blocked as it is classified as malicious).

Display blocked URL

Display the blocked URL on the block page.

Show 'Continue to Site' button

Allow a user to continue to a blocked URL from the block page.

**Reset to default settings**

Select **Reset** reset to reset Link Lock configuration. This action sets Link Lock to OFF and unselects all fields.

**Link Lock Block Page Examples**

Below are examples of a Link Lock block page using the default logo, header and message. These settings can be customized for your domain using the settings described above.

![](/docs-test/imported-assets/spamtitan-kb/4000186943/efa1c8f5cf71.jpg)

![](/docs-test/imported-assets/spamtitan-kb/4000186943/33d087ca650f.jpg)
