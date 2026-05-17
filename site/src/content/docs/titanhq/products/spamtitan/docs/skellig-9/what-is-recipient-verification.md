---
title: "What is Recipient Verification?"
description: "Imported from support.titanhq.com"
---

> Source: [support.titanhq.com](https://support.titanhq.com/en/56969-what-is-recipient-verification-.html)
> Product: SpamTitan
> Imported content type: docs_page
> Product stream: skellig

#### What is Recipient Verification?

Recipient verification allows SpamTitan to verify if a recipient's email address exists _before_ sending them an email. If it does not exist, SpamTitan blocks the email before reaching the mail server (default: recipient verification is _disabled_).

Recipient verification helps improve the spam block rate by using resources more efficiently and will also help keep your daily license usage count accurate.

Dynamic Recipient Verification (DRV) is the easiest form of recipient verification to use and manage and is recommended to enable this as part of your SpamTitan setup. Follow the steps below to enable DRV on a domain.

1.  For dynamic recipient verification to work, your mail server must initially be configured to reject invalid addresses. These are links to external guides that to you enable recipient filtering on common mail servers:

    -   [Microsoft Exchange Server 2007](http://technet.microsoft.com/en-us/library/aa998898%28EXCHG.80%29.aspx) ![icons8-external-link-32.png](/docs-test/imported-assets/spamtitan-skellig/56969-what-is-recipient-verification-/9407e2037883.png)

    -   [Microsoft Exchange Server 2010](https://technet.microsoft.com/en-us/library/aa995993\(v=exchg.141\).aspx) ![icons8-external-link-32.png](/docs-test/imported-assets/spamtitan-skellig/56969-what-is-recipient-verification-/9407e2037883.png). If you use a default standalone installation of Microsoft Exchange Server 2010 without an Edge Transport server, anti-spam functionality is not installed. To enable, see [Enable Anti-Spam Functionality on a Hub Transport Server](https://technet.microsoft.com/en-us/library/bb201691\(v=exchg.141\).aspx) ![icons8-external-link-32.png](/docs-test/imported-assets/spamtitan-skellig/56969-what-is-recipient-verification-/9407e2037883.png).

    -   Microsoft Office365: To use DRV in SpamTitan Gateway, Directory Based Edge Blocking (DBEB) must be enabled in Office365 so that RCPT TO probes to invalid email addresses are rejected. You can then enable DRV in SpamTitan Gateway and the verification server will simply be your Office365 FQDN, just like the destination server.

        To enable DBEB, see [Use Directory Based Edge Blocking to reject messages sent to invalid recipients](https://docs.microsoft.com/en-us/exchange/mail-flow-best-practices/use-directory-based-edge-blocking) ![icons8-external-link-32.png](/docs-test/imported-assets/spamtitan-skellig/56969-what-is-recipient-verification-/9407e2037883.png).

    -   [Postfix ![icons8-external-link-32.png](/docs-test/imported-assets/spamtitan-skellig/56969-what-is-recipient-verification-/9407e2037883.png)](http://www.postfix.org/ADDRESS_VERIFICATION_README.html) .

2.  Once recipient verification has been enabled on your mail server, select your domain from the All Domains table and select the **Domain Configuration** tab.

    ![ST-SK-domain-configuration-tab.jpg](/docs-test/imported-assets/spamtitan-skellig/56969-what-is-recipient-verification-/805ad07c474e.jpg)

3.  From Recipient Verification, select **Dynamic**.

4.  Select **Save Changes**.
