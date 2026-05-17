---
title: "Enabling ARC Signing"
description: "Imported from docs.titanhq.com"
---

> Source: [docs.titanhq.com](https://docs.titanhq.com/en/9285-enabling-arc-signing.html)
> Product: SpamTitan
> Imported content type: docs_page
> Product stream: legacy

###### Enabling ARC Signing

Go to **System Setup** > **Mail Authentication** > **ARC Signing** and follow the steps below to enable ARC signing. If your DNS service is provided by a domain name registrar, contact that registrar to update your DNS records.

1.  Click the select ![ST-701-test-button.jpg](/docs-test/imported-assets/spamtitan-legacy/9285-enabling-arc-signing/1d6f3f2c36e2.jpg) icon in the Options column to the right of the ARC key you want to use.

    ![STG-add-domain-key.jpg](/docs-test/imported-assets/spamtitan-legacy/9285-enabling-arc-signing/51085363e7d6.jpg)

2.  The DNS TXT record displays as shown:

    ![STG-DNS-TXT-record.jpg](/docs-test/imported-assets/spamtitan-legacy/9285-enabling-arc-signing/2b56fc47cd60.jpg)

3.  Copy the DNS TXT record to a text editor and remove all spaces, carriage returns, and double-quotes. Select and highlight the following only and add this record to your domain's DNS records:

    ![STG-add-DNS-TXT-record.jpg](/docs-test/imported-assets/spamtitan-legacy/9285-enabling-arc-signing/f96f8a28b1f5.jpg)

4.  SpamTitan attempts to detect the presence of these records and verify that they are correct. Click Save to force a check. ARC Signing will be displayed as either:

    -   Verification pending: verification has yet to be performed against this domain (e.g. ARC signing disabled).

    -   Verified.

Only Enable ARC signing for a domain once the DNS TXT record has been published and verified to be correct. Once this is done, then the ARC header will be added to inbound messages.
