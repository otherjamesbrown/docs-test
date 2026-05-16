---
title: "Link Lock"
description: "Imported from support.titanhq.com"
---

> Source: [support.titanhq.com](https://support.titanhq.com/en/60370-link-lock.html)
> Product: SpamTitan
> Imported content type: docs_page
> Product stream: skellig

### Link Lock

Link Lock provides protection against phishing, business email compromise, and zero day attacks by removing the possibility of a user clicking on a malicious link in an email. SpamTitan does this by rewriting all links in every inbound email. Subsequently, when a link is clicked, SpamTitan can verify if the destination URL is safe or malicious. If the link is malicious, the user is presented with a block page indicating that there is a security risk.

With Link Lock, links always remain rewritten, even if an email is forwarded. Links are checked in real-time once clicked. SpamTitan allows you to exclude URLs from Link Lock by adding them to an allowed URLs list, which can be done at the MSP, customer and domain levels.

Once a SpamTitan Plus license is in place, an MSP and can enable or disable Link Lock at the MSP level (default: _disabled_). Once enabled, Link Lock can also be managed at the customer and domain levels. Each level can apply its own Link Lock settings, with settings being inherited from a higher level by default. If applied, a lower level setting supersedes a higher level setting. See [SpamTitan Levels of Access](https://support.titanhq.com/en/56985-welcome-to-spamtitan-.html#UUID-9b86e1bd-6d98-8ffc-6375-f06980d100af_UUID-d5fbb009-8517-9451-08cb-4a0d22505446 "SpamTitan Levels of Access").

Go to **Filtering** > **Link Lock** to enable and configure Link Lock.
