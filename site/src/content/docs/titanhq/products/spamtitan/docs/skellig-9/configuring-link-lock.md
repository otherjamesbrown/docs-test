---
title: "Configuring Link Lock"
description: "Imported from support.titanhq.com"
---

> Source: [support.titanhq.com](https://support.titanhq.com/en/60372-configuring-link-lock.html)
> Product: SpamTitan
> Imported content type: docs_page
> Product stream: skellig

#### Configuring Link Lock

Follow the steps below to configure Link Lock.

1.  Go to **Filtering** > **Link Lock**.

2.  If Link Lock is not enabled, select **Enabled**. See [Enabling Link Lock](/docs-test/titanhq/products/spamtitan/docs/skellig-9/enabling-link-lock-60362/ "Enabling Link Lock").

3.  Select the **Policy Configuration** tab and configure your settings:

    -   _Rewrite DKIM-signed mail_: Allow Link Lock to rewrite emails with a DKIM signature.

        :::note[Important]
        Selecting this option invalidates both DKIM and S/MIME signatures, which may affect scoring on other mail systems.
        :::

    -   _Follow redirection links_: Select to allow Link Lock to follow redirected URLs (up to a max. of 5). This protects against a legitimate URL redirecting to a malicious URL.

        :::note
        Selecting this option may affect system performance.
        :::

    -   _Display a button on the block page to continue to the blocked site_: Allow a user to continue to a blocked URL from the block page.

    -   _Show the original website URL on the block page_: Display the blocked URL on the block page.

    -   _Show logo on the block page_: Displays the image currently being used on the Link Lock block page. Default:

        ![ST-default-link-lock-block-page-image.jpg](/docs-test/imported-assets/spamtitan-skellig/60372-configuring-link-lock/ac980f6eb349.jpg)

    -   _Use custom logo on the block page_: Select **Choose File** to upload a custom block page image. The following file formats are supported: PNG, JPG and JPEG. Maximum file size is 2048 KB.

    -   _Use custom message on the block page_: Select to allow you to add a custom block page header and/or message.

4.  Click **Save Changes**.

**Link Lock Block Page Examples**

Below are examples of a Link Lock block page using the default logo, header and message. These settings can be customized for your domain using the settings described above.

![ST-link-lock-block-page.jpg](/docs-test/imported-assets/spamtitan-skellig/60372-configuring-link-lock/efa1c8f5cf71.jpg)

![ST-link-lock-block-page-all-settings-on.jpg](/docs-test/imported-assets/spamtitan-skellig/60372-configuring-link-lock/33d087ca650f.jpg)
