---
title: "Customer Overview"
description: "Imported from support.titanhq.com"
---

> Source: [support.titanhq.com](https://support.titanhq.com/en/60044-customer-overview.html)
> Product: SpamTitan
> Imported content type: docs_page
> Product stream: skellig

### Customer Overview

The **Overview** page gives you a summary view of all domains' activity and a list of your domain in the All Domains table.

**All Protection and Filtering** shows a summary of emails for all domains that was processed through SpamTitan over the **Last 7 Days**. Select **Last 30 Days** to show summary data for the last thirty days.

You must have added at least one domain with an active email flow to see summary data.

![ST-SK-overview-customer.jpg](/docs-test/imported-assets/spamtitan-skellig/60044-customer-overview/957f090ece86.jpg)

The **Quick Actions** bar allows you to quickly add a new domain or add an email to your Allow & Block List.

![ST-SK-customer-quick-actions.jpg](/docs-test/imported-assets/spamtitan-skellig/60044-customer-overview/a38b3ee26c7f.jpg)

The **Mail Threats** pie chart shows the percentage of non-clean messages being processed over the last seven or thirty days (default: Last 7 Days). Categories include: Spam messages; virus messages; geoblocking; HELO reject; RBL reject and other frontline reject.

![ST-Mail-Threats-Pie-Chart.jpg](/docs-test/imported-assets/spamtitan-skellig/60044-customer-overview/4350fda02439.jpg)

The **Processed Messages** graph shows details your mail processing over the last seven or thirty days (default: Last 7 Days).

![ST-SK-processed-messages-graph.jpg](/docs-test/imported-assets/spamtitan-skellig/60044-customer-overview/85d09f4d2695.jpg)

Select and unselect the labels to add and remove an item from the graph:

![ST-SK-processed-messages-options.jpg](/docs-test/imported-assets/spamtitan-skellig/60044-customer-overview/d0a48862b310.jpg)

**All Domains** is a list of all your domains. Select the column ![column-icon.jpg](/docs-test/imported-assets/spamtitan-skellig/60044-customer-overview/264f4fd45b19.jpg) icon to display the All Domains table column names. Slide each on and off to view or hide a column.

![ST-SK-all-domains-table.jpg](/docs-test/imported-assets/spamtitan-skellig/60044-customer-overview/6e5b4e797b91.jpg)

-   _Domain_: Name of the domain.

-   _Destination Server_: Address of the destination server.

-   _MX Status_: The MX records of your added domains must point to SpamTitan. This is because any domain that uses email has an MX record, which lists the mail servers available to accept mail for that domain. The MX Status indicates the following three levels of MX completion:

    -   _Active_ MX records point to SpamTitan. No further action is required.

    -   _Inactive_: Indicates that MX records are not pointing to SpamTitan. See [Change your MX Records](/docs-test/titanhq/products/spamtitan/docs/skellig-9/change-your-mx-records/ "Change your MX Records") for further information.

    -   _Partial_: Indicates that the MX record for the domain is pointing both to SpamTitan and to other mail servers. This means that if other mail servers have a lower priority MX record, email can potentially be sent to them and bypass SpamTitan filtering. See [Change your MX Records](/docs-test/titanhq/products/spamtitan/docs/skellig-9/change-your-mx-records/ "Change your MX Records") for further information.

-   _Enforced 2FA_: Indicates if 2FA is mandatory for users to access SpamTitan.

-   _RBL Checks_: Indicates if the RBL (Realtime Blackhole List) test is enabled. The RBL test checks the IP address of all mail servers sending mail to the domain against lists of known spammer IP addresses. See [Edit your Domain Configuration](/docs-test/titanhq/products/spamtitan/docs/skellig-9/edit-your-domain-configuration/ "Edit your Domain Configuration") for information.

-   _SPF Checks_: Indicates if SPF (Sender Policy Framework) test is enabled. The test checks the SPF record of the sending domain to ensure the IP of the sender is allowed for the domain and if not, it rejects the mail. See [Edit your Domain Configuration](/docs-test/titanhq/products/spamtitan/docs/skellig-9/edit-your-domain-configuration/ "Edit your Domain Configuration") for information.

-   _Greylisting_: Indicates if greylisting is enabled for this domain. Greylisting temporarily rejects all email and requires the sending server to send it again after 5 minutes. See [Edit your Domain Configuration](/docs-test/titanhq/products/spamtitan/docs/skellig-9/edit-your-domain-configuration/ "Edit your Domain Configuration") for information.

-   _Actions_: Select the view ![view-icon-small.jpg](/docs-test/imported-assets/spamtitan-skellig/60044-customer-overview/4f7d1bd09d2e.jpg) icon in the Actions column for a domain to drill down to the domain level to view and further manage that domain.

From the Actions dropdown menu, you can add and delete domains, and enable and disable enforced 2FA for domains.

![ST-Cust-Overview-Actions-Menu.jpg](/docs-test/imported-assets/spamtitan-skellig/60044-customer-overview/b4cfbd4088b8.jpg)

Follow the links below for further details.

-   [Add your Domain](/docs-test/titanhq/products/spamtitan/docs/skellig-9/add-your-domain-s/ "Add your Domain(s)").

-   [Delete Domains](/docs-test/titanhq/products/spamtitan/docs/skellig-9/delete-domains/ "Delete Domains").

-   [Two-Factor Authentication](/docs-test/titanhq/products/spamtitan/docs/skellig-9/two-factor-authentication/ "Two-Factor Authentication").

## In this Section

-   [Add your Domain(s)](/docs-test/titanhq/products/spamtitan/docs/skellig-9/add-your-domain-s-74496/)
-   [Delete Domains](/docs-test/titanhq/products/spamtitan/docs/skellig-9/delete-domains/)
