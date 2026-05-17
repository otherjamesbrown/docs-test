---
title: "Excluding a Domain from a Geoblocking Rule"
description: "Imported from support.titanhq.com"
---

> Source: [support.titanhq.com](https://support.titanhq.com/en/57306-excluding-a-domain-from-a-geoblocking-rule.html)
> Product: SpamTitan
> Imported content type: docs_page
> Product stream: skellig

#### Excluding a Domain from a Geoblocking Rule

You can exclude email from geoblocking rules by creating exemptions. This allows email through even if a geoblocking rule is blocking the country it originates from. Email can be exempted based on the sender's IP, domain or email address.

Follow the steps below to create an exemption based on the sender domain, which is the domain that an email originates from.

1.  Go to **Filtering** > **Geoblocking** and select the **Exemptions** tab.

2.  Select **Add** > **Sender Domain** and the Sender Domain window displays:

    ![ST-SK-geoblocking-add-domain-exemption.jpg](/docs-test/imported-assets/spamtitan-skellig/57306-excluding-a-domain-from-a-geoblocking-rule/281cc2cc4e9e.jpg)

3.  Complete the fields as follows:

    -   _Sender Domain_: Domain you want to exempt from geoblocking rules.

    -   _Include Subdomains_: Select if you are adding _example.com_ as a domain and also want to exclude all its subdomains. For example, _support.example.com_ and _products.example.com_.

    -   _Comment_: An optional comment on this domain exemption.

4.  Select **Add Exemption** to save this domain exemption, or **Cancel** to discard.

Once an exemption has been added, it can be edited or deleted:

-   Select the edit ![edit-icon.jpg](/docs-test/imported-assets/spamtitan-skellig/57306-excluding-a-domain-from-a-geoblocking-rule/90a487f7499b.jpg) icon in the Actions column to edit an exemption.

-   Delete an exemption by selecting the checkbox ![selected-check-box.jpg](/docs-test/imported-assets/spamtitan-skellig/57306-excluding-a-domain-from-a-geoblocking-rule/290997c07565.jpg) beside the exemption name and selecting **Delete**. Multiple exemptions can be deleted together by selecting multiple exemptions and selecting **Delete**.
