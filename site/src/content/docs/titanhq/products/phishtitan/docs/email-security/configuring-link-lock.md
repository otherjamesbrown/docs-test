---
title: "Configuring Link Lock"
description: "Imported from support.titanhq.com"
---

> Source: [support.titanhq.com](https://support.titanhq.com/en/66033-configuring-link-lock.html)
> Product: PhishTitan
> Imported content type: docs_page
> Product stream: email-security

###### Configuring Link Lock

:::note[Important]
Link Lock is enabled or disabled at the Customer level (default: enabled).

Link Lock settings are also edited and managed at the Customer level.

Settings are _not_ inherited from the MSP level.
:::

Follow the steps below to configure Link Lock.

1.  Go to **Configuration** > **Link Lock** at the customer level.

2.  Select the **Policy Configuration** tab to configure your settings:

    -   _Follow redirection links_: Select **Yes** to allow Link Lock to follow redirected URLs (up to a maximum of five). This protects against a legitimate URL redirecting to a malicious URL.

        :::note
        Selecting this option may affect system performance.
        :::

    -   _Display a button on the block page allowing a user to continue to the blocked site_: Allows a user to continue to a blocked URL from the block page.

    -   _Display default logo on the block page_: Displays the image currently being used on the Link Lock block page. Default:

        ![PT-link-lock-default-logo.jpg](/docs-test/imported-assets/phishtitan-docs/66033-configuring-link-lock/e957cad15885.jpg)

    -   _Use custom logo on the block page_: When you select **Yes**, you'll be given the option to **Choose File** and upload a custom block page image. The following file formats are supported: PNG, JPG and JPEG. Maximum file size is 2048 KB.

    -   _Edit text on the block page_: Select **Yes** to add a custom block page heading and/or message.

3.  Select **Save Changes**.

**Link Lock Block Page Examples**

Below are examples of a Link Lock block page using the default logo, header, and message. These settings can be customized for your domain using the settings described above.

<table><tbody><tr><td><div><img src="/docs-test/imported-assets/phishtitan-docs/66033-configuring-link-lock/a8a00af5d05c.jpg" alt="PT-link-lock-block-page.jpg"></div></td><td><div><img src="/docs-test/imported-assets/phishtitan-docs/66033-configuring-link-lock/a5af0c8eb577.jpg" alt="PT-link-lock-block-page-detail.jpg"></div></td></tr></tbody></table>
