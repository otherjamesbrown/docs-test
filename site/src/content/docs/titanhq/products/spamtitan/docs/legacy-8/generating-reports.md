---
title: "Generating Reports"
description: "Imported from docs.titanhq.com"
---

> Source: [docs.titanhq.com](https://docs.titanhq.com/en/1161-generating-reports.html)
> Product: SpamTitan
> Imported content type: docs_page
> Product stream: legacy

#### Generating Reports

Go to **Reporting** > **Reports** to generate several on-demand reports. Once a report has been configured and run, it will appear in the Todays Reports tab.

The following filtering options are available when generating an on-demand report:

-   _Type_: select the report type from the following:

    Report Type

    Description

    Domain Summary Report

    The number of emails processed by category for each domain.

    Domain Group Summary Report

    The number of emails processed by category for each domain group.

    Top Spam Recipients

    Email addresses that received the most spam.

    Top Virus Recipients

    Email addresses that received the most viruses.

    Top Email Recipients (mails)

    Email addresses that received the most number of emails.

    Top Email Recipients (MB)

    Email addresses that received the largest sized emails in megabytes.

    Top Email Senders (mails)

    Email addresses that sent the most number of emails.

    Top Email Senders (MB)

    Email addresses that sent the largest sized emails in megabytes.

    :::note
    The following malicious link reports provide data on Link Lock, which is an enhancement to SpamTitan and is available after the purchase of a SpamTitan Plus license. If you wish to purchase a SpamTitan Plus license, please contact your Account Manager or email [sales@titanhq.com](mailto:sales@titanhq.com).
    :::

    Top Malicious Link Recipients

    The number of malicious links detected by recipient.

    Top Malicious Link Senders

    The number of malicious links detected by sender.

    Malicious Links Summary Report

    Summary of the number of malicious links detected by sending domain and recipient.

    License Usage Report

    License usage by email address.

-   _Period_: specifies the period for which the report will be generated.

-   _From_: specifies if the report will show results from 'Local node only' or 'Cluster'.

    :::note[Important]
    As SpamTitan Cloud runs on a cluster of three nodes, it is recommended that you choose ‘Cluster’ here. Otherwise, you may only see 30% of your mail reported.
    :::

-   _Size_: indicates the number of items to include in the report (this option is not relevant for all reports).

To run a report, click the **Run** button. The following confirmation will appear:

![ST-701-reporting-reports-run.jpg](/docs-test/imported-assets/spamtitan-legacy/1161-generating-reports/58e39f3b2ad0.jpg)
