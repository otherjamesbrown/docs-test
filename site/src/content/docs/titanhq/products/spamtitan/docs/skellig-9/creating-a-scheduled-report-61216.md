---
title: "Creating a Scheduled Report"
description: "Imported from support.titanhq.com"
---

> Source: [support.titanhq.com](https://support.titanhq.com/en/61216-creating-a-scheduled-report.html)
> Product: SpamTitan
> Imported content type: docs_page
> Product stream: skellig

#### Creating a Scheduled Report

Go to **Reporting** > **Scheduled** to schedule daily, weekly or monthly reports that can be emailed to a specified email address, or multiple email addresses.

When scheduling a report, it can optionally be archived to make it available later in **Reporting** > **Archive**.

Follow the steps below to create a scheduled report.

1.  Select **Reporting** > **Scheduled** and select **Add**.

    ![ST-SK-add-scheduled-report.jpg](/docs-test/imported-assets/spamtitan-skellig/61216-creating-a-scheduled-report/8762b1ba57b7.jpg)

2.  Complete the fields in the Add Scheduled Report window:

    -   _Type_: Select which report you want to schedule:

        Report

        Description

        Domain Summary Report

        The number of emails processed by category for each domain.

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

        License Usage Report

        License usage by email address.

        Geoblocking

        The count for each of the top geoblocked countries from which mail has been blocked by defined geoblocking rules.

        Geoblocking Clients

        IP addresses of senders and the corresponding countries that are most blocked by their defined geoblocking rules.

        Top Malicious Link Recipients

        The number of malicious links detected by recipient.

        Top Malicious Link Senders

        The number of malicious links detected by sender.

        Malicious Links Summary Report

        Summary of the number of malicious links detected by sending domain and recipient.

    -   _Subject_: The email subject line that will show in the sent report.

    -   _Frequency_: Choose one of the following:

        -   ![daily-icon.jpg](/docs-test/imported-assets/spamtitan-skellig/61216-creating-a-scheduled-report/c24bcf5bb30f.jpg) **Daily**: Generate a report for the previous day’s activity.

        -   ![weekly-icon.jpg](/docs-test/imported-assets/spamtitan-skellig/61216-creating-a-scheduled-report/35b2a9a74953.jpg) **Weekly**: Runs each Monday and produces a report for the previous Monday-Sunday.

        -   ![monthly-icon.jpg](/docs-test/imported-assets/spamtitan-skellig/61216-creating-a-scheduled-report/9860208e83c0.jpg) **Monthly**: Runs on the 1st of the month and produces a report for the previous calendar month.

    -   _Format_: Generate the report as a PDF, a comma separated CSV file or a plain text file.

    -   _Archive_: Specifies if the report will be archived. Select **Yes** to archive. If selected, the report appears in **Reporting** > **Archive**.

    -   _Recipients_: The report is emailed to the email address(es) entered here. Separate email addresses with a comma ','. For example, report@example.com, report-2@example.com, report-3@example.com.

3.  Select **Add** to create this report or **Cancel** to discard.
