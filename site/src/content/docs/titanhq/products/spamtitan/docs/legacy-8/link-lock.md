---
title: "In this Section"
description: "Imported from docs.titanhq.com"
---

> Source: [docs.titanhq.com](https://docs.titanhq.com/en/30222-link-lock.html)
> Product: SpamTitan
> Imported content type: docs_page
> Product stream: legacy

#### Link Lock

Link Lock provides protection against phishing, business email compromise, and zero day attacks by removing the possibility of a user clicking on a malicious link in an email. SpamTitan does this by rewriting all links in every inbound email. Subsequently, when a link is clicked, SpamTitan can verify if the destination URL is safe or malicious. If the link is malicious, the user is presented with a block page indicating that there is a security risk.

With Link Lock, links always remain rewritten, even if an email is forwarded. Links are checked in real-time once clicked. SpamTitan allows you to exclude URLs from Link Lock by adding them to an allowed URLs list, which can be done at the global, domain and user levels.

Link Lock is an enhancement to SpamTitan and is available after the purchase of a SpamTitan Plus license. If you are a SpamTitan Gateway or SpamTitan Private Cloud customer, you can go to **System Setup** > **Licensing** > **License Information** to see if SpamTitan Plus (Link Lock) is included in your current license. If not, or if you are a SpamTitan Shared Cloud customer, please contact your Account Manager or email [sales@titanhq.com](mailto:sales@titanhq.com) to purchase a SpamTitan Plus license.

Once a SpamTitan Plus license is in place, a SpamTitan administrator can enable or disable Link Lock at the global level (default: _disabled_). Once enabled, Link Lock can also be managed at the domain and user levels.

Go to **Content Filtering** > **Link Lock** to enable and configure Link Lock.

## In this Section

-   [Enable Link Lock for a Domain](https://docs.titanhq.com/en/30223-enable-link-lock-for-a-domain.html)
-   [Enable Link Lock for a User](https://docs.titanhq.com/en/30224-enable-link-lock-for-a-user.html)
-   [Link Lock Allowed URLs](https://docs.titanhq.com/en/30225-link-lock-allowed-urls.html)
