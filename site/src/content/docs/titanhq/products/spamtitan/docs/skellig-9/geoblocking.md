---
title: "Geoblocking"
description: "Imported from support.titanhq.com"
---

> Source: [support.titanhq.com](https://support.titanhq.com/en/59921-geoblocking.html)
> Product: SpamTitan
> Imported content type: docs_page
> Product stream: skellig

### Geoblocking

Geoblocking restricts email based on a sender's geographic location, which is identified by the sending server's IP address.

In SpamTitan, geoblocking is based on rules and exemptions. You create a geoblocking rule to restrict email from a geographic location (country) and then exemptions can be added to exclude mail from the geoblocking rules. Email can be excluded based on:

-   IP (the IPv4 address that an email originates from).

-   Domain (the domain an email originates from).

-   Email (the email address that the email is sent from).

An MSP admin can enable or disable geoblocking at a global level (default: disabled). Once enabled, geoblocking can be managed at the customer and domain levels. Each level can apply its own geoblocking rules, with rules being inherited from a higher level by default. If applied, a lower level rule supersedes a higher level rule.

:::note[Important]
If disabling geoblocking, all geoblocking rules must be deleted to ensure geoblocking is turned off.
:::

Example: If _Country\_Example_ is blocked by the MSP admin, all customers and domains inherit this rule and block email from _Country\_Example_. However, if Customer A wants to allow email from _Country\_Example_, the Customer A admin can create a rule that will supersede the MSP level rule.

SpamTitan uses the ISO 3166 Alpha-2 standard of two digit country codes for geoblocking. See [https://www.iso.org/obp/ui/#search/code/](https://www.iso.org/obp/ui/#search/code/) (reference data in the Alpha-2 column).

Go to **Filtering** > **Geoblocking** to enable and manage geoblocking.

## In this Section

-   [Excluding a Domain from a Geoblocking Rule](/docs-test/titanhq/products/spamtitan/docs/skellig-9/excluding-a-domain-from-a-geoblocking-rule/)
-   [Excluding an IP from a Geoblocking Rule](/docs-test/titanhq/products/spamtitan/docs/skellig-9/excluding-an-ip-from-a-geoblocking-rule/)
-   [Adding a Geoblocking Rule](/docs-test/titanhq/products/spamtitan/docs/skellig-9/adding-a-geoblocking-rule/)
-   [Excluding an Email Address from a Geoblocking Rule](/docs-test/titanhq/products/spamtitan/docs/skellig-9/excluding-an-email-address-from-a-geoblocking-rule/)
