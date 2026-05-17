---
title: "Scheduling Reports"
description: "Imported from docs.titanhq.com"
---

> Source: [docs.titanhq.com](https://docs.titanhq.com/en/1198-scheduling-reports.html)
> Product: SpamTitan
> Imported content type: docs_page
> Product stream: legacy

#### Scheduling Reports

Go to **Reporting** > **Scheduled Reports** to schedule daily, weekly or monthly reports that can be emailed to a specified email address or multiple email addresses.

When scheduling, reports can also optionally be archived which makes them available in **Reporting** > **Archived Reports**.

To schedule a report, go to **Reporting** > **Scheduled Reports** and click **Add**.

The Add Report window displays and you can choose the following options:

-   _Type_: Choose which report to schedule:

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

-   _From_: Schedule a report showing information for the entire cluster or just on individual nodes (that can be specified).

-   _Frequency_: Choose one of the following:

    -   Daily Report: generate a report for the previous day’s activity.

    -   Weekly Report: runs each Monday and produces a report for the previous Monday-Sunday.

    -   Monthly report: runs on the 1st of the month and produces a report for the previous month.

-   _Format_: Generate a report as a PDF, text file, Microsoft Excel spreadsheet or all three.

-   _Max. item_s: Maximum number of items to display in the report.

-   _Archive_: Specifies if the report will also be archived. If selected, the report will appear in **Reporting** > **Archived Reports**.

-   _Email_: The report will be emailed to email address(es) listed here. Separate email addresses with spaces.

-   _Subject_: The email subject line that will show in the sent report.
