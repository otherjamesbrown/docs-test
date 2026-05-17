---
title: "Link Lock"
description: "Imported from support.titanhq.com"
---

> Source: [support.titanhq.com](https://support.titanhq.com/en/66570-link-lock.html)
> Product: PhishTitan
> Imported content type: docs_page
> Product stream: email-security

##### Link Lock

:::note[Important]
Link Lock is enabled or disabled at the Customer level (default: enabled).

Link Lock settings are also edited and managed at the Customer level.

Settings are _not_ inherited from the MSP level.
:::

Link Lock provides protection against phishing, business email compromise, and zero day attacks by removing the possibility of a user selecting a malicious link in an email. Email Security does this by rewriting all links in every inbound email. Subsequently, when a link is clicked, Email Security can verify if the destination URL is safe or malicious. If the link is malicious, the user is presented with a block page indicating that there is a security risk.

With Link Lock, links always remain rewritten, even if an email is forwarded. Links are checked in real-time once clicked. Email Security allows you to exclude URLs from Link Lock by adding them to an allowed URLs (exemptions) list, which can be done at the MSP and customer levels.

Go to **Configuration** > **Link Lock** at the Customer level to enable and configure Link Lock.

## In this Section

-   [Configuring Link Lock](/docs-test/titanhq/products/phishtitan/docs/email-security/configuring-link-lock-66571/)
-   [Adding Link Lock Exemptions](/docs-test/titanhq/products/phishtitan/docs/email-security/adding-link-lock-exemptions-66572/)
