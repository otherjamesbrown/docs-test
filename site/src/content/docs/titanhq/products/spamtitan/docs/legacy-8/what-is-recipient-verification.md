---
title: "What is Recipient Verification?"
description: "Imported from docs.titanhq.com"
---

> Source: [docs.titanhq.com](https://docs.titanhq.com/en/1556-what-is-recipient-verification-.html)
> Product: SpamTitan
> Imported content type: docs_page
> Product stream: legacy

#### What is Recipient Verification?

Recipient verification allows SpamTitan Cloud servers to verify if a recipient email address exists **before** sending them an email. If a user does not exist, it will block the email before reaching the mail server (default: recipient verification is _disabled_).

Recipient verification helps improve the spam block rate by using resources more efficiently and will also help keep your daily license usage count accurate.

Dynamic Recipient Verification (DRV) is the easiest form of recipient verification to use and manage and is recommended to enable this as part of your SpamTitan Cloud setup. Follow the steps below to enable DRV.

1.  For dynamic recipient verification to work, your mail server must initially be configured to reject invalid addresses. These are links to external guides that will help you enable recipient filtering on common mail server software:

    -   [Microsoft Exchange Server 2007](http://technet.microsoft.com/en-us/library/aa998898%28EXCHG.80%29.aspx) ![icons8-external-link-32.png](/docs-test/imported-assets/spamtitan-legacy/1556-what-is-recipient-verification-/9407e2037883.png)

    -   [Microsoft Exchange Server 2010](https://technet.microsoft.com/en-us/library/aa995993\(v=exchg.141\).aspx) ![icons8-external-link-32.png](/docs-test/imported-assets/spamtitan-legacy/1556-what-is-recipient-verification-/9407e2037883.png). If you use a default standalone installation of Microsoft Exchange Server 2010 without an Edge Transport server, anti-spam functionality is not installed. To enable, see [Enable Anti-Spam Functionality on a Hub Transport Server](https://technet.microsoft.com/en-us/library/bb201691\(v=exchg.141\).aspx) ![icons8-external-link-32.png](/docs-test/imported-assets/spamtitan-legacy/1556-what-is-recipient-verification-/9407e2037883.png).

    -   Microsoft Office365: To use DRV in SpamTitan Gateway, Directory Based Edge Blocking (DBEB) must be enabled in Office365 so that RCPT TO probes to invalid email addresses are rejected. You can then enable DRV in SpamTitan Gateway and the verification server will simply be your Office365 FQDN, just like the destination server.

        To enable DBEB, see [Use Directory Based Edge Blocking to reject messages sent to invalid recipients](https://docs.microsoft.com/en-us/exchange/mail-flow-best-practices/use-directory-based-edge-blocking) ![icons8-external-link-32.png](/docs-test/imported-assets/spamtitan-legacy/1556-what-is-recipient-verification-/9407e2037883.png).

    -   [Lotus Domino](https://www.ibm.com/support/knowledgecenter/en/SSKTMJ_10.0.1/admin/conf_restrictingusersfromreceivinginternetmail_t.html) ![icons8-external-link-32.png](/docs-test/imported-assets/spamtitan-legacy/1556-what-is-recipient-verification-/9407e2037883.png).

    -   [Postfix ![icons8-external-link-32.png](/docs-test/imported-assets/spamtitan-legacy/1556-what-is-recipient-verification-/9407e2037883.png)](http://www.postfix.org/ADDRESS_VERIFICATION_README.html) .

2.  Once recipient verification has been enabled on your mail server, log into SpamTitan Cloud and go to **Settings** > **Relay Settings**.

3.  Edit your domain to select dynamic verification (see [Mail Relay Settings](/docs-test/titanhq/products/spamtitan/docs/legacy-8/mail-relay-settings/ "Mail Relay Settings") for further information).
