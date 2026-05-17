---
title: "Add Your Domain(s)"
description: "Imported from docs.titanhq.com"
---

> Source: [docs.titanhq.com](https://docs.titanhq.com/en/1597-add-your-domain-s-.html)
> Product: SpamTitan
> Imported content type: docs_page
> Product stream: legacy

##### Add Your Domain(s)

For SpamTitan Cloud servers to accept email for a domain and filter it, that domain must initially be added to SpamTitan Cloud. Follow these steps to add a domain:

1.  Go to **Settings** > **Relay Settings** and click **Add**.  The Add Domain window opens:

    ![Add Domain window settings](/docs-test/imported-assets/spamtitan-legacy/1597-add-your-domain-s-/392385a1c5ea.jpg)

2.  Using the Domain Settings table below as a reference, complete the fields in the Add Domain window.

3.  Click **Save**.

Once a domain is added, click the test button ![ST-701-test-button.jpg](/docs-test/imported-assets/spamtitan-legacy/1597-add-your-domain-s-/1d6f3f2c36e2.jpg) in the Options column to validate it.

:::tip
The **Import** button allows you to bulk import domains from a .csv file. The .csv file must contain the following fields:

-   Domain Name

-   Destination Mail Server:Port

-   Recipient Verification type (none/dynamic/LDAP)
:::

###### Domain Settings

Field

Description

**Domain**:

The Fully Qualified Domain Name (FQDN) of a domain that you receive email for. For example, _example.com_.

Destination Server:

The mail server to which you want clean, filtered mail delivered. This is usually the external IP address or domain name of your website or your Office 365 domain name.

Destination Port:

25 is the default SMTP port. All mail servers use port 25 unless configured otherwise.

:::note[Important]
To ensure your server can receive mail from SpamTitan, check that your firewall is open to receive SMTP traffic on Port 25 from [SpamTitan Cloud's IP addresses](/docs-test/titanhq/products/spamtitan/docs/legacy-8/spamtitan-cloud-server-ip-addresses/ "SpamTitan Cloud Server IP Addresses").
:::

Enable MX Lookup:

Allows you to use the MX records of a different domain to identify the destination server. This option will not be used by most SpamTitan Cloud customers and is not checked by default.

**Recipient Verification:**

Allows SpamTitan Cloud servers to verify if a recipient address exists before sending them an email. If a user does not exist, it will block the email before reaching the mail server (default: No Recipient Verification).

:::note[Important]
Set to Dynamic Recipient Verification if supported. For Dynamic Recipient Verification to work, your mail server must be configured to reject invalid addresses. See [What is Recipient Verification?](/docs-test/titanhq/products/spamtitan/docs/legacy-8/what-is-recipient-verification/ "What is Recipient Verification?")
:::

**RBL Checks:**

This setting allows you to enable or disable Realtime Blackhole List (RBL) checks for this domain. The RBL test checks the IP address of all mail servers sending mail to your domain against lists of known spammer IP addresses. This test is extremely effective at blocking spam and it is strongly recommended leaving this option enabled. Default is Yes.

**SPF Checks:**

This setting allows you to enable or disable Sender Policy Framework (SPF) checks for this domain. The SPF test checks the SPF record of the sending domain to make sure the IP of the sender is allowed for the domain and if not, it rejects the mail. This test is effective at blocking spam, however, it can cause potential [false positives](/docs-test/titanhq/products/spamtitan/docs/legacy-8/false-positive/ "False positive") due to improperly set up SPF records. It is recommended to enable with caution. Default is Yes.

**Greylisting:**

Allows you to enable or disable greylisting for this domain. Read more about greylisting [here](/docs-test/titanhq/products/spamtitan/docs/legacy-8/greylisting/ "Greylisting"). Default is Yes.

## In this Section

-   [Domain Settings](/docs-test/titanhq/products/spamtitan/docs/legacy-8/add-your-domain-s-1597/)
