---
title: "Step 2: Add Your Domain(s) Print"
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

Field

Description

**Domain**:

Your email domain, e.g. example.com. You can either use the server hostname or IP address. Use hostname for Office365, as IP address changes.

Destination Server:

The mail server to which you want clean, filtered mail delivered. This is usually the external IP address or domain name of your website or your Office 365 domain name.

Destination Port:

25 is the default SMTP port. All mail servers use port 25 unless configured otherwise.

:::caution[Important]
To ensure your server can receive mail from SpamTitan, check that your firewall is open to receive SMTP traffic on Port 25 from [SpamTitan Cloud's IP addresses](https://helpdesk.spamtitan.com/a/solutions/articles/4000186932#UUID-e3a9d5a7-71a7-85e2-3a15-054bdff1e740).
:::

Enable MX Lookup:

Allows you to use the MX records of a different domain to identify the destination server. This option will not be used by most SpamTitan Cloud customers and is not checked by default.

**Recipient Verification:**

Allows SpamTitan Cloud servers to verify if a recipient address exists before sending them an email. If a user does not exist, it will block the email before reaching the mail server (default: No Recipient Verification).

:::caution[Important]
Set to Dynamic Recipient Verification if supported. For Dynamic Recipient Verification to work, your mail server must be configured to reject invalid addresses. See [What is Recipient Verification?](https://helpdesk.spamtitan.com/a/solutions/articles/4000186933#UUID-f213b641-8356-56cd-7030-8ed88449d791)
:::

**RBL Checks:**

This setting allows you to enable or disable Realtime Blackhole List (RBL) checks for this domain. The RBL test checks the IP address of all mail servers sending mail to your domain against lists of known spammer IP addresses. This test is extremely effective at blocking spam and it is strongly recommended leaving this option enabled. Default is Yes.

**SPF Checks:**

This setting allows you to enable or disable Sender Policy Framework (SPF) checks for this domain. The SPF test checks the SPF record of the sending domain to make sure the IP of the sender is allowed for the domain and if not, it rejects the mail. This test is effective at blocking spam, however, it can cause potential [false positives](https://helpdesk.spamtitan.com/a/solutions/articles/4000186908#UUID-559b5801-e4d0-cf90-4738-636d475d0ef8) due to improperly set up SPF records. It is recommended to enable with caution. Default is Yes.

**Greylisting:**

Allows you to enable or disable greylisting for this domain. Read more about greylisting [here](https://helpdesk.spamtitan.com/a/solutions/articles/4000186910#UUID-b0ebcce0-0c83-4b8d-0c00-7d0f9b8e9383). Default is Yes.
