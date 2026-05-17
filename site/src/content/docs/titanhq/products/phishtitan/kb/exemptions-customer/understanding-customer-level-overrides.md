---
title: "Understanding Customer Level Overrides"
description: "Imported from helpdesk.phishtitan.com"
---

> Source: [helpdesk.phishtitan.com](https://helpdesk.phishtitan.com/support/solutions/articles/4000228161-understanding-customer-level-overrides)
> Product: PhishTitan
> Imported content type: kb_article
> Source folder: Exemptions (Customer)
> Modified: Wed, 8 Apr, 2026 at 4:04 PM

Exemptions can be added on both the MSP and the customer level, with the customer level taking precedence. If both an MSP and a customer admin add an exemption for the same email address, domain or IP address, the customer level exemption is what will be applied to the mail flow checks. The MSP level exemption will not be applied.

The example below is based on an email address, but the same would be true for a domain or IP address.

**Example: MSP and customer both add exemptions for the same email**

An MSP adds an exemption for _Anti-spoof_ for the email address _test@gmail.com_:

![msp\_antispoof.png](/docs-test/imported-assets/phishtitan-kb/4000228161/ad03d170a72a.png)

A customer of this MSP also adds an exemption for the same email address, but for the security checks _Spam_ and _Fraud_.

![customer\_spam\_fraud.png](/docs-test/imported-assets/phishtitan-kb/4000228161/813403166004.png)

Because the customer level always takes precedence in Exemptions, the customer level entry will override the MSP level entry. The MSP exemption will not be applied to the mail flow checks and will not appear in the customer's Exemptions list. Only the security checks _Spam_ and _Fraud_ will be exempted, as set by the customer, and only these will appear in the customer's Exemptions list.

If the customer later deletes the exemption they set in this example (i.e. the exemption for _Spam_ and _Fraud_ checks on the specified email address), there will no longer be a customer level exemption present, and instead the MSP exemption (_Anti-spoof_) will start being applied to the email address. This MSP level exemption will now appear in the customer's Exemptions list, where it was not present while the customer level exemption took precedent.

![customer\_antispoof.png](/docs-test/imported-assets/phishtitan-kb/4000228161/4f0ff2537c55.png)
