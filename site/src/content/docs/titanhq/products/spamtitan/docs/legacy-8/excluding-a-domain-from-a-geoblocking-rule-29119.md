---
title: "Excluding a Domain from a Geoblocking Rule"
description: "Imported from docs.titanhq.com"
---

> Source: [docs.titanhq.com](https://docs.titanhq.com/en/29119-excluding-a-domain-from-a-geoblocking-rule.html)
> Product: SpamTitan
> Imported content type: docs_page
> Product stream: legacy

##### Excluding a Domain from a Geoblocking Rule

You can exclude email from geoblocking rules by creating exemptions. This allows email through even if a geoblocking rule is blocking the country it originates from. Email can be exempted based on the sender's IP, domain or email address.

Follow the steps below to create an exemption based on the sender domain, which is the domain that an email originates from.

1.  Go to **Filter Rules** > **Geoblocking**.

2.  In the Sender Domain Exemptions: table click Add... and the Add Sender Domain Exemption window displays:

    ![ST-geoblocking-add-domain-exemption.jpg](/docs-test/imported-assets/spamtitan-legacy/29119-excluding-a-domain-from-a-geoblocking-rule/8ea5518da25f.jpg)

3.  Complete the fields as follows:

    -   Sender Domain: Domain you want to exempt from geoblocking rules.

    -   Include Subdomains: Check if you are adding _example.com_ as a domain and also want to exclude all its subdomains, e.g. _support.example.com_ and _products.example.com_.

    -   Comment: An optional comment on this domain exemption.

4.  Click **Save** to save this domain exemption or **Cancel** to discard.

Once an exemption has been added, it can be edited or deleted. Click the edit ![ST-701-edit-button.jpg](/docs-test/imported-assets/spamtitan-legacy/29119-excluding-a-domain-from-a-geoblocking-rule/7455a85c9b68.jpg) icon to edit an exemption, or click the delete ![ST-701-delete-button.jpg](/docs-test/imported-assets/spamtitan-legacy/29119-excluding-a-domain-from-a-geoblocking-rule/3b2dc809e314.jpg) icon to delete an exemption.
