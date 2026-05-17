---
title: "Recommended Additional Configuration"
description: "Imported from docs.titanhq.com"
---

> Source: [docs.titanhq.com](https://docs.titanhq.com/en/8884-recommended-additional-configuration.html)
> Product: SpamTitan
> Imported content type: docs_page
> Product stream: legacy

#### Recommended Additional Configuration

**Bounce Mails**

SpamTitan Gateway has a specific module to handle unwanted bounce mails. For this module to work, you must list the hostnames of your mail servers (stamped in the Received: headers) in **System Setup** > **Mail Relay** > **Outbound** > **Hostname of Outbound Relays**. This allows SpamTitan to drop bounce mails that do not reference your mail servers.

**Importance of Accurate DNS Responses**

Accurate DNS responses are essential for SpamTitan Gateway to maintain a good spam catch rate as SpamTitan queries multiple internet-based spam blocking tools using DNS.

Because of the high volume of DNS requests that originate from free/open DNS servers such as 8.8.8.8, 8.8.4.4, 4.2.2.1, etc., test providers will _not_ respond to DNS requests from these servers. Therefore, do not configure SpamTitan to use free/open DNS servers, or, if you are using your own DNS server, do not configure it to use free/open DNS servers as a forwarder.

One test provider supplies a test you can use to determine if your DNS server is able to access their services. If you are unable to access this service, then it is likely you will have issues accessing other DNS based services and your spam catch rate will be affected. Follow these steps to test to see if you are being blocked:

-   Go to **Reporting** > **System Information** > **Tools**. In the text box beside _Dig:_ test any DNS server by entering the following and clicking **Run**:

    _@1.1.1.1 TXT test.uribl.com.multi.uribl.com_ (replace 1.1.1.1 with the IP of the DNS server you want to test).

-   If the following is returned in the results, it indicates that your DNS query was accepted:

    ![STG-dig-test-pass.jpg](/docs-test/imported-assets/spamtitan-legacy/8884-recommended-additional-configuration/103260339eef.jpg)

-   If the following is returned in the results, it indicates that your DNS query was refused:

    ![STG-dig-test-fail.jpg](/docs-test/imported-assets/spamtitan-legacy/8884-recommended-additional-configuration/032e9ae01494.jpg)
