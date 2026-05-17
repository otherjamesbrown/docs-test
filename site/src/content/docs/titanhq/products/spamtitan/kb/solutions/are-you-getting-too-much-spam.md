---
title: "Are you Getting too Much Spam? Print"
description: "Imported from helpdesk.spamtitan.com"
---

> Source: [helpdesk.spamtitan.com](https://helpdesk.spamtitan.com/support/solutions/articles/4000179149-are-you-getting-too-much-spam-)
> Product: SpamTitan
> Imported content type: kb_article
> Source folder: Solutions
> Modified: Mon, 24 Jul, 2023 at 8:39 AM

![](/docs-test/imported-assets/spamtitan-kb/4000179149/5e79f0b6e610.png)

**SaaS**

![](/docs-test/imported-assets/spamtitan-kb/4000179149/e087d2c4e111.png)

**DCI / Gateway**

![](/docs-test/imported-assets/spamtitan-kb/4000179149/ccbfbc9604c1.png)

Before looking at the types of spam you are receiving, please ensure that the following tests are enabled or operational:

1.  1\. RBLs 2\. Botnet Analysis3\. Network Testing4\. DNS Responses

    Make sure you have added these three recommended RBL servers:

    **zen.spamhaus.org
    psbl.surriel.com
    truncate.gbudb.net**

    See [Managing Realtime Blackhole Lists](/docs-test/titanhq/products/spamtitan/docs/legacy-8/managing-realtime-blackhole-lists/).

    Ensure Botnet Analysis is enabled. See [Botnet Analysis](/docs-test/titanhq/products/spamtitan/docs/legacy-8/botnet-analysis/).

    Ensure Network Testing is enabled. See [Network Testing](/docs-test/titanhq/products/spamtitan/docs/legacy-8/network-testing/).

    Accurate DNS responses are essential for SpamTitan to maintain a good spam catch rate. Because of the high volume of DNS requests that originate from free/open DNS, test providers will not respond to DNS requests from these servers.

    Therefore, do not configure SpamTitan to use free/open DNS servers such as 8.8.8.8. Use your own DNS server, if possible, to ensure you are getting accurate responses. If you do not have your own DNS server, consider using your ISP’s DNS server if applicable.

    Run the test [outlined here](/docs-test/titanhq/products/spamtitan/docs/legacy-8/recommended-additional-configuration/) to see if you are being blocked.

Once you have verified the tests above are enabled or operational, take a look at the different types of spam listed below and the options you have to reduce them.

**Spoofing**

Spoofed email can arrive in many forms. Which best describes the spoofed mails you are receiving:

-   _My email domain is being spoofed:_

To prevent this, enable SPF and DMARC.

See [Enabling & Configuring DMARC](/docs-test/titanhq/products/spamtitan/docs/legacy-8/enabling-and-configuring-dmarc-in-spamtitan/) and also [SPF Settings](/docs-test/titanhq/products/spamtitan/docs/legacy-8/spf-settings/).

-   _The names of users in my organisation are being spoofed:_

See [AntiSpoofing](/docs-test/titanhq/products/spamtitan/docs/legacy-8/anti-spoofing/).

**Malicious links**

If you ran the test in step 3 above and got a positive result, but you are still receiving malicious links, submit a ticket on our [Support Portal](http://helpdesk.spamtitan.com/). Attach examples of the full emails you are receiving, not just the links.

**Malicious Attachments**

1.  Go to **Reporting** > **System Information** > **Services** and check that both Clam and Bitdefender are running. See Available Services.
2.  Enable sandboxing. See [Sandboxing](/docs-test/titanhq/products/spamtitan/docs/legacy-8/sandboxing-in-spamtitan-gateway/).
3.  Enable Google Safebrowsing Database in your Clam AV settings.
4.  Use third party databases. See [Configuring Clam AV Settings](/docs-test/titanhq/products/spamtitan/docs/legacy-8/configuring-clam-av-settings/).
5.  Use banned attachments if uncommon files. See [Configuring Attachment Filters](/docs-test/titanhq/products/spamtitan/docs/legacy-8/configuring-attachment-filters/).

If you are still receiving malicious attachments after changing these settings, submit a ticket to Support and attach the original emails you are receiving.

**Unsoliciated Marketing Email**

Submit a ticket to [Support](http://helpdesk.spamtitan.com/) and request that additional Unsolicited Marketing Email rules are added to your SpamTitan.

**None of the Above**

1.  If you have checked the three tests at the top of this page and are still receiving a high level of spam that does not match the types listed here, consider the following actions:

    -   If the spam you are receiving is scoring high, but not high enough to block, consider tuning your spam score. See [Editing a Domain Policy](/docs-test/titanhq/products/spamtitan/docs/legacy-8/editing-a-domain-policy/) and [Editing a User Policy](/docs-test/titanhq/products/spamtitan/docs/legacy-8/adding-editing-and-deleting-user-policies/).

    -   Open a ticket on our [support portal](https://helpdesk.spamtitan.com/) and our Support Engineers will help investigate your email further.
