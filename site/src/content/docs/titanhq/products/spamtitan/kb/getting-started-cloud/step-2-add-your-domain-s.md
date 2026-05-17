---
title: "Step 2: Add Your Domain(s)"
description: "Imported from helpdesk.spamtitan.com"
---

> Source: [helpdesk.spamtitan.com](https://helpdesk.spamtitan.com/support/solutions/articles/4000186888-step-2-add-your-domain-s-)
> Product: SpamTitan
> Imported content type: kb_article
> Source folder: Getting Started: SpamTitan Cloud
> Modified: Wed, 14 Sep, 2022 at 7:00 PM

![](/docs-test/imported-assets/spamtitan-kb/4000186888/6116b5fe7424.jpg)

For SpamTitan Cloud servers to accept email for a domain and filter it, that domain must initially be added to SpamTitan Cloud. Follow these steps to add a domain:

1.  Go to **Settings** > **Relay Settings** and click **Add**.  The Add Domain window opens:

    ![](/docs-test/imported-assets/spamtitan-kb/4000186888/392385a1c5ea.jpg)

2.  Using the Domain Settings table below as a reference, complete the fields in the Add Domain window.

3.  Click **Save**.

Once a domain is added, click the test button ![](/docs-test/imported-assets/spamtitan-kb/4000186888/1d6f3f2c36e2.jpg) in the Options column to validate it.

:::tip
The **Import** button allows you to bulk import domains from a .csv file. The .csv file must contain the following fields:

-   Domain Name

-   Destination Mail Server:Port

-   Recipient Verification type (none/dynamic/LDAP)
:::

### Domain Settings

<table width="100%"><colgroup><col width="20%" align="left">
<col width="80%" align="left"></colgroup><thead><tr><th><p>Field</p></th><th><p>Description</p></th></tr></thead><tbody><tr><td><p><span><strong>Domain</strong></span>:</p></td><td><p>Your email domain, e.g. example.com. You can either use the server hostname or IP address. Use hostname for Office365, as IP address changes.</p></td></tr><tr><td><p>Destination Server:</p></td><td><p>The mail server to which you want clean, filtered mail delivered. This is usually the external IP address or domain name of your website or your Office 365 domain name.</p></td></tr><tr><td><p>Destination Port:</p></td><td><p>25 is the default SMTP port. All mail servers use port 25 unless configured otherwise.</p><div dir="ltr" data-import-admonition="note" data-import-admonition-title="Important"><h3>Important</h3><p>To ensure&nbsp;your server can receive&nbsp;mail from SpamTitan, check that&nbsp;your firewall&nbsp;is open to receive SMTP traffic on Port 25 from SpamTitan Cloud's IP addresses.</p></div></td></tr><tr><td><p>Enable MX Lookup:</p></td><td><p>Allows you to use the MX records of a different domain to identify the destination server. This option will not be used by most SpamTitan Cloud customers and is not checked by default.</p></td></tr><tr><td><p><span lang="en" dir="ltr"><strong>Recipient Verification:</strong></span></p></td><td><p>Allows SpamTitan Cloud servers to verify if a recipient address exists before sending them an email. If a user does not exist, it will block the email before reaching the mail server (default: No Recipient Verification).</p><div dir="ltr" data-import-admonition="note" data-import-admonition-title="Important"><h3>Important</h3><p>Set to Dynamic Recipient Verification if supported. For Dynamic Recipient Verification to work, your mail server must be configured to reject invalid addresses. See What is Recipient Verification?</p></div></td></tr><tr><td><p><span lang="en" dir="ltr"><strong>RBL Checks:</strong></span></p></td><td><p>This setting allows you to enable or disable Realtime Blackhole List (RBL) checks for this domain. The RBL test checks the IP address of all mail servers sending mail to your domain against lists of known spammer IP addresses. This test is extremely effective at blocking spam and it is strongly recommended leaving this option enabled. Default is Yes.</p></td></tr><tr><td><p><span lang="en" dir="ltr"><strong>SPF Checks:</strong></span></p></td><td><p>This setting allows you to enable or disable Sender Policy Framework (SPF) checks for this domain. The SPF test checks the SPF record of the sending domain to make sure the IP of the sender is allowed for the domain and if not, it rejects the mail. This test is effective at blocking spam, however, it can cause potential false positives due to improperly set up SPF records. It is recommended to enable with caution.&nbsp;Default is Yes.</p></td></tr><tr><td><p><span lang="en" dir="ltr"><strong>Greylisting:</strong></span></p></td><td><p>Allows you to enable or disable greylisting for this domain. Read more about greylisting here.&nbsp;Default is Yes.</p></td></tr></tbody></table>
