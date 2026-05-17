---
title: "Excluding an IP from a Geoblocking Rule"
description: "Imported from support.titanhq.com"
---

> Source: [support.titanhq.com](https://support.titanhq.com/en/57308-excluding-an-ip-from-a-geoblocking-rule.html)
> Product: SpamTitan
> Imported content type: docs_page
> Product stream: skellig

#### Excluding an IP from a Geoblocking Rule

You can exclude email from geoblocking rules by creating exemptions. This allows email through even if a geoblocking rule is blocking the country it originates from. Email can be exempted based on the sender's IP, domain or email address.

Follow the steps below to create an exemption based on sender IP, which is the IPv4 address that an email originates from.

1.  Go to **Filter Rules** > **Geoblocking** and select the **Exemptions** tab.

2.  Select **Add** > **Sender IP** and the Sender IP window displays:

    ![ST-SK-geoblocking-add-IP-exemption.jpg](/docs-test/imported-assets/spamtitan-skellig/57308-excluding-an-ip-from-a-geoblocking-rule/ab260c742c83.jpg)

3.  Complete the fields as follows:

    -   _Sender IP/Network_: IPv4 address that you want to exempt from geoblocking rules.

    -   _Netmask_: The 32-bit netmask that is used to divide an IP address into its respective subnets \[255.255.255.255 - 255.0.0.0.0\].

    -   _Comment_: An optional comment on this IP exemption.

4.  Select **Add Exemption** to save this IP exemption, or **Cancel** to discard.

Once an exemption has been added, it can be edited or deleted:

-   Select the edit ![edit-icon.jpg](/docs-test/imported-assets/spamtitan-skellig/57308-excluding-an-ip-from-a-geoblocking-rule/90a487f7499b.jpg) icon in the Actions column to edit an exemption.

-   Delete an exemption by selecting the checkbox ![selected-check-box.jpg](/docs-test/imported-assets/spamtitan-skellig/57308-excluding-an-ip-from-a-geoblocking-rule/290997c07565.jpg) beside the exemption name and selecting **Delete**. Multiple exemptions can be deleted together by selecting multiple exemptions and selecting **Delete**.
