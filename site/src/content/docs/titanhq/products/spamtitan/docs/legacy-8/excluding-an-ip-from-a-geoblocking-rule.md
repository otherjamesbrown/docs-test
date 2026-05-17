---
title: "Excluding an IP from a Geoblocking Rule"
description: "Imported from docs.titanhq.com"
---

> Source: [docs.titanhq.com](https://docs.titanhq.com/en/29113-excluding-an-ip-from-a-geoblocking-rule.html)
> Product: SpamTitan
> Imported content type: docs_page
> Product stream: legacy

##### Excluding an IP from a Geoblocking Rule

You can exclude email from geoblocking rules by creating exemptions. This allows email through even if a geoblocking rule is blocking the country it originates from. Email can be exempted based on the sender's IP, domain or email address.

Follow the steps below to create an exemption based on sender IP, which is the IPv4 address that an email originates from.

1.  Go to **Filter Rules** > **Geoblocking**.

2.  In the Sender IP Exemptions: table click **Add...** and the Add Sender IP Exemption window displays:

    ![ST-geoblocking-add-IP-exemption.jpg](/docs-test/imported-assets/spamtitan-legacy/29113-excluding-an-ip-from-a-geoblocking-rule/2f64f7062cc7.jpg)

3.  Complete the fields as follows:

    -   Sender IP/Network: IPv4 address that you want to exempt from geoblocking rules.

    -   Netmask: The 32-bit netmask that is used to divide an IP address into its respective subnets \[255.255.255.255 - 255.0.0.0.0\]

    -   Comment: An optional comment on this IP exemption.

4.  Click **Save** to save this IP exemption or **Cancel** to discard.

Once an exemption has been added, it can be edited or deleted. Click the edit ![ST-701-edit-button.jpg](/docs-test/imported-assets/spamtitan-legacy/29113-excluding-an-ip-from-a-geoblocking-rule/7455a85c9b68.jpg) icon to edit an exemption, or click the delete ![ST-701-delete-button.jpg](/docs-test/imported-assets/spamtitan-legacy/29113-excluding-an-ip-from-a-geoblocking-rule/3b2dc809e314.jpg) icon to delete an exemption.
