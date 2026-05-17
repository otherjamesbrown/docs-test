---
title: "More About Recipient Verification"
description: "Imported from docs.titanhq.com"
---

> Source: [docs.titanhq.com](https://docs.titanhq.com/en/8911-more-about-recipient-verification.html)
> Product: SpamTitan
> Imported content type: docs_page
> Product stream: legacy

###### More About Recipient Verification

SpamTitan Gateway supports several methods of performing recipient verification, however, Dynamic Recipient Verification (DRV) is the easiest to use and manage. To use DRV, your mail server must reject emails addressed to invalid addresses (recipient filtering). SpamTitan then uses your mail server to verify if a recipient specified on an incoming mail is valid or not.

Below is information and links to external guides that will help you enable recipient filtering on common mail server software. Once recipient filtering is enabled on your mail server, go to **System Setup** > **Mail Relay** > **Domains** to enable recipient verification (see [Managing Domains](/docs-test/titanhq/products/spamtitan/docs/legacy-8/managing-domains/ "Managing Domains") for more information).

If you are using MS Exchange 2013 or 2016, see [Dynamic Recipient Verification using MS Exchange 2013 and 2016](/docs-test/titanhq/products/spamtitan/docs/legacy-8/dynamic-recipient-verification-using-ms-exchange-2013-and-2016/ "Dynamic Recipient Verification using MS Exchange 2013 and 2016").

-   [Microsoft Exchange Server 2007](http://technet.microsoft.com/en-us/library/aa998898%28EXCHG.80%29.aspx) ![icons8-external-link-32.png](/docs-test/imported-assets/spamtitan-legacy/8911-more-about-recipient-verification/9407e2037883.png)

-   [Microsoft Exchange Server 2010](https://technet.microsoft.com/en-us/library/aa995993\(v=exchg.141\).aspx) ![icons8-external-link-32.png](/docs-test/imported-assets/spamtitan-legacy/8911-more-about-recipient-verification/9407e2037883.png). If you use a default standalone installation of Microsoft Exchange Server 2010 without an Edge Transport server, anti-spam functionality is not installed. To enable, see [Enable Anti-Spam Functionality on a Hub Transport Server](https://technet.microsoft.com/en-us/library/bb201691\(v=exchg.141\).aspx) ![icons8-external-link-32.png](/docs-test/imported-assets/spamtitan-legacy/8911-more-about-recipient-verification/9407e2037883.png).

-   Microsoft Office365: To use DRV in SpamTitan Gateway, Directory Based Edge Blocking (DBEB) must be enabled in Office365 so that RCPT TO probes to invalid email addresses are rejected. You can then enable DRV in SpamTitan Gateway and the verification server will simply be your Office365 FQDN, just like the destination server.

    To enable DBEB, see [Use Directory Based Edge Blocking to reject messages sent to invalid recipients](https://docs.microsoft.com/en-us/exchange/mail-flow-best-practices/use-directory-based-edge-blocking) ![icons8-external-link-32.png](/docs-test/imported-assets/spamtitan-legacy/8911-more-about-recipient-verification/9407e2037883.png).

-   [Lotus Domino](https://www.ibm.com/support/knowledgecenter/en/SSKTMJ_10.0.1/admin/conf_restrictingusersfromreceivinginternetmail_t.html) ![icons8-external-link-32.png](/docs-test/imported-assets/spamtitan-legacy/8911-more-about-recipient-verification/9407e2037883.png).

-   [Postfix ![icons8-external-link-32.png](/docs-test/imported-assets/spamtitan-legacy/8911-more-about-recipient-verification/9407e2037883.png)](http://www.postfix.org/ADDRESS_VERIFICATION_README.html) .
