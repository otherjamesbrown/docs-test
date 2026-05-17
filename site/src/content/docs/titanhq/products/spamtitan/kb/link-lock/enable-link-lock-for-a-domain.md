---
title: "Enable Link Lock for a Domain"
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

<table><colgroup><col width="30%">
<col width="70%"></colgroup><thead><tr><th><p>Setting</p></th><th><p>Description</p></th></tr></thead><tbody><tr><td><p><span><strong>Link Lock</strong></span> (ON/OFF)</p></td><td><p>Click Enable or Disable to toggle Link Lock ON or Off for this domain.</p></td></tr><tr><td><p>Rewrite mails with DKIM signature</p></td><td><p>Allow Link Lock to rewrite emails with a DKIM signature.</p><div dir="ltr" data-import-admonition="note" data-import-admonition-title="Important"><h3>Important</h3><p>Checking this option invalidates DKIM signatures, which may affect scoring on other mail systems.</p></div></td></tr><tr><td><p>Check redirected URLs</p></td><td><p>Select to allow Link Lock to follow redirected URLs (up to a max. of 5). This protects against a legitimate URL redirecting to a malicious URL.</p><div dir="ltr" data-import-admonition="note" data-import-admonition-title="Note"><h3>Note</h3><p>Selecting this option may affect system performance.</p></div></td></tr><tr><td colspan="2"><p><span><strong>Block Page Settings</strong></span></p></td></tr><tr><td><p>Use custom logo</p></td><td><p>Select to allow you to upload a custom block page image.</p></td></tr><tr><td><p>Logo</p></td><td><p>Displays the image currently being used on the Link Lock block page. Default:</p><div><img src="/docs-test/imported-assets/spamtitan-kb/4000186943/ac980f6eb349.jpg" data-xinfo-image="32227"></div></td></tr><tr><td><p>Upload new logo</p></td><td><p>Select <span><strong>Choose File</strong></span> to upload a custom block page image. The following file formats are supported: PNG, JPG and JPEG. Maximum file size is 2 MB.</p></td></tr><tr><td><p>Use custom message</p></td><td><p>Select to allow you to add a custom block page header and/or message.</p></td></tr><tr><td><p>Message header</p></td><td><p>Enter a custom block page header (default: Access Blocked).</p></td></tr><tr><td><p>Message body</p></td><td><p>Enter a custom block page message (default: This website has been blocked as it is classified as malicious).</p></td></tr><tr><td><p>Display blocked URL</p></td><td><p>Display the blocked URL on the block page.</p></td></tr><tr><td><p>Show 'Continue to Site' button</p></td><td><p>Allow a user to continue to a blocked URL from the block page.</p></td></tr><tr><td><p><span><strong>Reset to default settings</strong></span></p></td><td><p>Select <span><strong>Reset</strong></span> reset to reset Link Lock configuration. This action sets Link Lock to OFF and unselects all fields.</p></td></tr></tbody></table>

**Link Lock Block Page Examples**

Below are examples of a Link Lock block page using the default logo, header and message. These settings can be customized for your domain using the settings described above.

<table><tbody><tr><td><div><img src="/docs-test/imported-assets/spamtitan-kb/4000186943/efa1c8f5cf71.jpg" data-xinfo-image="29888"></div></td><td><div><img src="/docs-test/imported-assets/spamtitan-kb/4000186943/33d087ca650f.jpg" data-xinfo-image="29889"></div></td></tr></tbody></table>
