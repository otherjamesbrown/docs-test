---
title: "Enable Link Lock for a Domain"
description: "Imported from docs.titanhq.com"
---

> Source: [docs.titanhq.com](https://docs.titanhq.com/en/30211-enable-link-lock-for-a-domain.html)
> Product: SpamTitan
> Imported content type: docs_page
> Product stream: legacy

##### Enable Link Lock for a Domain

Link Lock is an enhancement to SpamTitan and is available after the purchase of a SpamTitan Plus license. Once a license is in place, Link Lock must be enabled by the SpamTitan administrator at the global level. Once enabled, Link Lock can also be managed at the domain and user levels.

Follow the steps below to enable and configure Link Lock for a domain.

1.  Go to **Content Filtering** > **Link Lock** and scroll to the **Configuration** panel.

2.  In the **Domains:** table, click the edit ![ST-701-edit-button.jpg](/docs-test/imported-assets/spamtitan-legacy/30211-enable-link-lock-for-a-domain/7455a85c9b68.jpg) icon in the Options column of the domain for which you want to enable Link Lock and the Edit Link Lock Configuration (Domain) window displays.

3.  Click **Enable** to enable Link Lock and an expanded configuration window displays:

    ![ST-edit-link-lock-configuration.jpg](/docs-test/imported-assets/spamtitan-legacy/30211-enable-link-lock-for-a-domain/208cc7b7e477.jpg)

4.  Using the table and block page examples below as reference, complete the fields in the Link Lock Configuration - Domain: window.

5.  Click **Apply**.

**Link Lock Domain Configuration Settings**

<table><colgroup><col><col></colgroup><thead><tr><th><p>Setting</p></th><th><p>Description</p></th></tr></thead><tbody><tr><td><p><span><strong>Link Lock</strong></span> (ON/OFF)</p></td><td><p>Click Enable or Disable to toggle Link Lock ON or Off for this domain.</p></td></tr><tr><td><p>Rewrite mails with DKIM signature</p></td><td><p>Allow Link Lock to rewrite emails with a DKIM signature.</p><div dir="ltr" data-import-admonition="note" data-import-admonition-title="Important"><h3>Important</h3><p>Checking this option invalidates DKIM signatures, which may affect scoring on other mail systems.</p></div></td></tr><tr><td><p>Check redirected URLs</p></td><td><p>Select to allow Link Lock to follow redirected URLs (up to a max. of 5). This protects against a legitimate URL redirecting to a malicious URL.</p><div dir="ltr" data-import-admonition="note" data-import-admonition-title="Note"><h3>Note</h3><p>Selecting this option may affect system performance.</p></div></td></tr><tr><td colspan="2"><p><span><strong>Block Page Settings</strong></span></p></td></tr><tr><td><p>Use custom logo</p></td><td><p>Select to allow you to upload a custom block page image.</p></td></tr><tr><td><p>Logo</p></td><td><p>Displays the image currently being used on the Link Lock block page. Default:</p><div><img src="/docs-test/imported-assets/spamtitan-legacy/30211-enable-link-lock-for-a-domain/ac980f6eb349.jpg" alt="ST-default-link-lock-block-page-image.jpg"></div></td></tr><tr><td><p>Upload new logo</p></td><td><p>Select <span><strong>Choose File</strong></span> to upload a custom block page image. The following file formats are supported: PNG, JPG and JPEG. Maximum file size is 2 MB.</p></td></tr><tr><td><p>Use custom message</p></td><td><p>Select to allow you to add a custom block page header and/or message.</p></td></tr><tr><td><p>Message header</p></td><td><p>Enter a custom block page header (default: Access Blocked).</p></td></tr><tr><td><p>Message body</p></td><td><p>Enter a custom block page message (default: This website has been blocked as it is classified as malicious).</p></td></tr><tr><td><p>Display blocked URL</p></td><td><p>Display the blocked URL on the block page.</p></td></tr><tr><td><p>Show 'Continue to Site' button</p></td><td><p>Allow a user to continue to a blocked URL from the block page.</p></td></tr><tr><td><p><span><strong>Reset to default settings</strong></span></p></td><td><p>Select <span><strong>Reset</strong></span> reset to reset Link Lock configuration. This action sets Link Lock to OFF and unselects all fields.</p></td></tr></tbody></table>

**Link Lock Block Page Examples**

Below are examples of a Link Lock block page using the default logo, header and message. These settings can be customized for your domain using the settings described above.

<table><tbody><tr><td><div><img src="/docs-test/imported-assets/spamtitan-legacy/30211-enable-link-lock-for-a-domain/efa1c8f5cf71.jpg" alt="ST-link-lock-block-page.jpg"></div></td><td><div><img src="/docs-test/imported-assets/spamtitan-legacy/30211-enable-link-lock-for-a-domain/33d087ca650f.jpg" alt="ST-link-lock-block-page-all-settings-on.jpg"></div></td></tr></tbody></table>
