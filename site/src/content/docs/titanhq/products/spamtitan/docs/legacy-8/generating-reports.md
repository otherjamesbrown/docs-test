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

    <table><colgroup><col><col></colgroup><thead><tr><th><p>Report Type</p></th><th><p>Description</p></th></tr></thead><tbody><tr><td><p>Domain Summary Report</p></td><td><p>The number of emails processed by category for each domain.</p></td></tr><tr><td><p>Domain Group Summary Report</p></td><td><p>The number of emails processed by category for each domain group.</p></td></tr><tr><td><p>Top Spam Recipients</p></td><td><p>Email addresses that received the most spam.</p></td></tr><tr><td><p>Top Virus Recipients</p></td><td><p>Email addresses that received the most viruses.</p></td></tr><tr><td><p>Top Email Recipients (mails)</p></td><td><p>Email addresses that received the most number of emails.</p></td></tr><tr><td><p>Top Email Recipients (MB)</p></td><td><p>Email addresses that received the largest sized emails in megabytes.</p></td></tr><tr><td><p>Top Email Senders (mails)</p></td><td><p>Email addresses that sent the most number of emails.</p></td></tr><tr><td><p>Top Email Senders (MB)</p></td><td><p>Email addresses that sent the largest sized emails in megabytes.</p></td></tr><tr><td colspan="2"><div dir="ltr" data-import-admonition="note" data-import-admonition-title="Note"><h3>Note</h3><p>The following malicious link reports provide data on Link Lock, which is an enhancement to SpamTitan and is available after the purchase of a SpamTitan Plus license. If you wish to purchase a SpamTitan Plus license, please contact your Account Manager or email <a href="mailto:sales@titanhq.com" target="_blank">sales@titanhq.com</a>.</p></div></td></tr><tr><td><p>Top Malicious Link Recipients</p></td><td><p>The number of malicious links detected by recipient.</p></td></tr><tr><td><p>Top Malicious Link Senders</p></td><td><p>The number of malicious links detected by sender.</p></td></tr><tr><td><p>Malicious Links Summary Report</p></td><td><p>Summary of the number of malicious links detected by sending domain and recipient.</p></td></tr><tr><td><p>License Usage Report</p></td><td><p>License usage by email address.</p></td></tr><tr><td><p></p></td><td><p></p></td></tr></tbody></table>

-   _Period_: specifies the period for which the report will be generated.

-   _From_: specifies if the report will show results from 'Local node only' or 'Cluster'.

    :::note[Important]
    As SpamTitan Cloud runs on a cluster of three nodes, it is recommended that you choose ‘Cluster’ here. Otherwise, you may only see 30% of your mail reported.
    :::

-   _Size_: indicates the number of items to include in the report (this option is not relevant for all reports).

To run a report, click the **Run** button. The following confirmation will appear:

![ST-701-reporting-reports-run.jpg](/docs-test/imported-assets/spamtitan-legacy/1161-generating-reports/58e39f3b2ad0.jpg)
