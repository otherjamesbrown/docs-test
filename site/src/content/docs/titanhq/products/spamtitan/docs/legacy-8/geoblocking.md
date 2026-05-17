---
title: "Geoblocking"
description: "Imported from docs.titanhq.com"
---

> Source: [docs.titanhq.com](https://docs.titanhq.com/en/29111-geoblocking.html)
> Product: SpamTitan
> Imported content type: docs_page
> Product stream: legacy

#### Geoblocking

Geoblocking restricts email based on a sender's geographic location, which is identified by the sending server's IP address.

In SpamTitan, geoblocking is based on rules and exemptions. You create a geoblocking rule to restrict email from a geographic location (country) and then exemptions can be added to exclude mail from the geoblocking rules. Email can be excluded based on:

-   IP (the IPv4 address that an email originates from).

-   Domain (the domain an email originates from).

-   Email (the email address that the email is sent from).

A SpamTitan administrator can enable or disable geoblocking at a global level (default: _disabled_). Once enabled, geoblocking can be managed at the admin, domain group, domain and user levels. Each level can apply its own geoblocking rules, with rules being inherited from a higher level by default. If applied, a lower level rule supersedes a higher level rule.

Example: If _Country\_Example_ is blocked at the admin level, all domain groups inherit this rule and block email from _Country\_Example_. However, if Domain Group A wants to allow email from _Country\_Example_, the Domain Group A admin can create a rule that will supersede the admin level rule.

SpamTitan uses the ISO 3166 Alpha-2 standard of two digit country codes for geoblocking. See [https://www.iso.org/obp/ui/#search/code/](https://www.iso.org/obp/ui/#search/code/) (reference data in the Alpha-2 column).

Go to **Filter Rules** > **Geoblocking** to enable and manage geoblocking.

## In this Section

-   [Add a Geoblocking Rule for a Country](/docs-test/titanhq/products/spamtitan/docs/legacy-8/add-a-geoblocking-rule-for-a-country/)
-   [Excluding an IP from a Geoblocking Rule](/docs-test/titanhq/products/spamtitan/docs/legacy-8/excluding-an-ip-from-a-geoblocking-rule/)
-   [Excluding a Domain from a Geoblocking Rule](/docs-test/titanhq/products/spamtitan/docs/legacy-8/excluding-a-domain-from-a-geoblocking-rule/)
-   [Excluding an Email Address from a Geoblocking Rule](/docs-test/titanhq/products/spamtitan/docs/legacy-8/excluding-an-email-address-from-a-geoblocking-rule/)
