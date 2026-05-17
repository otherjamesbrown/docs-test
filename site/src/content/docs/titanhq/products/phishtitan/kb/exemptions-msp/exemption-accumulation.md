---
title: "Exemption Accumulation"
description: "Imported from helpdesk.phishtitan.com"
---

> Source: [helpdesk.phishtitan.com](https://helpdesk.phishtitan.com/support/solutions/articles/4000228155-exemption-accumulation)
> Product: PhishTitan
> Imported content type: kb_article
> Source folder: Exemptions (MSP)
> Modified: Wed, 8 Apr, 2026 at 3:59 PM

If an MSP or customer admin has created multiple exemptions, it's possible that more than one of these will sometimes apply to the same inbound email. In this case, as there is no precedence between sender, domain and IP address exemptions that have been set on the same level, the exemptions will simply accumulate (i.e. all will be applied).

**Example: An admin creates separate exemptions for a sender and a domain**

An admin creates an exemption for the sender _usera@testing.com_ , with the security check _Anti-spoof_ set to be bypassed. The admin also creates a separate exemption for the domain _testing.com_ , with the security check _Spam_ set to be bypassed.

![ExemptionExample5.jpg](/docs-test/imported-assets/phishtitan-kb/4000228155/7e99f05778e0.jpg)

In this scenario, both _Anti-spoof_ and _Spam_ will be bypassed for all emails from usera@testing.com because an exemption has been set for the sender as well as for the sender's domain.

If the admin added a third exemption, namely for an IP address that is used by this domain or sender, all checks set to be bypassed for the IP address would also apply to emails from usera@testing.com.
