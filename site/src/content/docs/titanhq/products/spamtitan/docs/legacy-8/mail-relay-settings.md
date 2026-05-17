---
title: "Mail Relay Settings"
description: "Imported from docs.titanhq.com"
---

> Source: [docs.titanhq.com](https://docs.titanhq.com/en/956-mail-relay-settings.html)
> Product: SpamTitan
> Imported content type: docs_page
> Product stream: legacy

#### Mail Relay Settings

Abstract

SpamTitan only accepts email for domains you specify. Follow these steps to add, edit, delete or verify the domains your organization will accept mail from.

Go to **Settings** > **Mail Relay** to add, edit, delete or verify the domains your organization accepts mail from. SpamTitan Cloud will only accept email for domains listed here. Use the search bar at the top of the domain list to filter through the listed domains:

![ST-701-settings-mail-relay-filter.jpg](/docs-test/imported-assets/spamtitan-legacy/956-mail-relay-settings/d745af309fb0.jpg)

Adding a Domain

:::tip
The **Import** button allows you to bulk import domains from a comma-separated values (.csv) file. The .csv file must contain the following fields:

-   Domain Name

-   Destination Mail Server:Port

-   Recipient Verification type (none/dynamic/LDAP)
:::

1.  Click **Add...**.

2.  Using the table below for reference, complete the Add Domain window.

3.  Click **Save** to save your changes.

Editing a Domain

1.  Click on the edit ![ST-701-edit-button.jpg](/docs-test/imported-assets/spamtitan-legacy/956-mail-relay-settings/7455a85c9b68.jpg) icon in the Options column.

2.  Using the table below for reference, complete the Edit Domain window.

3.  Click **Save** to save your changes.

Deleting a Domain

1.  Click the checkbox ![ST-701-check-box.jpg](/docs-test/imported-assets/spamtitan-legacy/956-mail-relay-settings/d19d75015111.jpg) to the left of the domain name you want to delete. To delete a single domain, click the delete ![ST-701-delete-button.jpg](/docs-test/imported-assets/spamtitan-legacy/956-mail-relay-settings/3b2dc809e314.jpg) icon in the Options column to the right of that domain.

2.  Click **Delete**.

Verifying a Domain

Follow these steps to verify that a domain is entered correctly and to send a test email:

1.  Click the test ![ST-701-test-button.jpg](/docs-test/imported-assets/spamtitan-legacy/956-mail-relay-settings/1d6f3f2c36e2.jpg) icon on the right under the Options column. The Send Test Email dialog is displayed.

2.  Enter a valid email address for the selected domain.

3.  Click **Send**.

##### Domain Settings

<table><colgroup><col align="left"><col align="left"></colgroup><thead><tr><th><p>Field</p></th><th><p>Description</p></th></tr></thead><tbody><tr><td><p><span><strong>Domain</strong></span>:</p></td><td><p>The Fully Qualified Domain Name (FQDN) of a domain that you receive email for. For example, <span><em>example.com</em></span>.</p></td></tr><tr><td><p>Destination Server:</p></td><td><p>The mail server to which you want clean, filtered mail delivered. This is usually the external IP address or domain name of your website or your Office 365 domain name.</p></td></tr><tr><td><p>Destination Port:</p></td><td><p>25 is the default SMTP port. All mail servers use port 25 unless configured otherwise.</p><div dir="ltr" data-import-admonition="note" data-import-admonition-title="Important"><h3>Important</h3><p>To ensure&nbsp;your server can receive&nbsp;mail from SpamTitan, check that&nbsp;your firewall&nbsp;is open to receive SMTP traffic on Port 25 from <a href="/docs-test/titanhq/products/spamtitan/docs/legacy-8/spamtitan-cloud-server-ip-addresses/" title="SpamTitan Cloud Server IP Addresses">SpamTitan Cloud's IP addresses</a>.</p></div></td></tr><tr><td><p>Enable MX Lookup:</p></td><td><p>Allows you to use the MX records of a different domain to identify the destination server. This option will not be used by most SpamTitan Cloud customers and is not checked by default.</p></td></tr><tr><td><p><span xml:lang="en" lang="en" dir="ltr"><strong>Recipient Verification:</strong></span></p></td><td><p>Allows SpamTitan Cloud servers to verify if a recipient address exists before sending them an email. If a user does not exist, it will block the email before reaching the mail server (default: No Recipient Verification).</p><div dir="ltr" data-import-admonition="note" data-import-admonition-title="Important"><h3>Important</h3><p>Set to Dynamic Recipient Verification if supported. For Dynamic Recipient Verification to work, your mail server must be configured to reject invalid addresses. See <a href="/docs-test/titanhq/products/spamtitan/docs/legacy-8/what-is-recipient-verification/" title="What is Recipient Verification?">What is Recipient Verification?</a></p></div></td></tr><tr><td><p><span xml:lang="en" lang="en" dir="ltr"><strong>RBL Checks:</strong></span></p></td><td><p>This setting allows you to enable or disable Realtime Blackhole List (RBL) checks for this domain. The RBL test checks the IP address of all mail servers sending mail to your domain against lists of known spammer IP addresses. This test is extremely effective at blocking spam and it is strongly recommended leaving this option enabled. Default is Yes.</p></td></tr><tr><td><p><span xml:lang="en" lang="en" dir="ltr"><strong>SPF Checks:</strong></span></p></td><td><p>This setting allows you to enable or disable Sender Policy Framework (SPF) checks for this domain. The SPF test checks the SPF record of the sending domain to make sure the IP of the sender is allowed for the domain and if not, it rejects the mail. This test is effective at blocking spam, however, it can cause potential <a href="/docs-test/titanhq/products/spamtitan/docs/legacy-8/false-positive/" title="False positive">false positives</a> due to improperly set up SPF records. It is recommended to enable with caution.&nbsp;Default is Yes.</p></td></tr><tr><td><p><span xml:lang="en" lang="en" dir="ltr"><strong>Greylisting:</strong></span></p></td><td><p>Allows you to enable or disable greylisting for this domain. Read more about greylisting <a href="/docs-test/titanhq/products/spamtitan/docs/legacy-8/greylisting/" title="Greylisting">here</a>.&nbsp;Default is Yes.</p></td></tr></tbody></table>

## In this Section

-   [Domain Settings](/docs-test/titanhq/products/spamtitan/docs/legacy-8/mail-relay-settings/)
