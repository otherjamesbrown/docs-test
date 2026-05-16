---
title: "Calculating SpamTitan License Usage Print"
description: "Imported from helpdesk.spamtitan.com"
---

> Source: [helpdesk.spamtitan.com](https://helpdesk.spamtitan.com/support/solutions/articles/4000189403-calculating-spamtitan-license-usage)
> Product: SpamTitan
> Imported content type: kb_article
> Source folder: Solutions
> Modified: Tue, 6 Dec, 2022 at 12:58 PM

![](/docs-test/imported-assets/spamtitan-kb/4000189403/569fc657a5f9.jpg)

**What does the solution describe?**

This solution outlines:

-   How license usage is calculated

-   Which log file stores license count information

-   Running a daily license usage report

**How License Usage is Calculated**

All email addresses that receive email count towards your license. The license count is calculated on a calendar-day basis, averaged out over the previous five days. So, this is a five-day rolling average of legitimate email that passes through SpamTitan.

Go to **System Setup** > **Licensing** **License** Information to view your daily average.

![](/docs-test/imported-assets/spamtitan-kb/4000189403/937dceb0a684.jpg)

**Which log file stores license count information**

The license count is performed daily, and the results are logged in _cfma.log_, which you can view from **Logs** > **Interface** (search for "License Count").

The log lists the number of license uses per domain for the previous calendar day. This log is the authoritative source for license usage.

**Running a daily license usage report**

Go to **Reporting** > **Reports** to schedule a daily _License Usage Report_ that shows the email addresses that counted against the license for the previous calendar day. If you have a cluster environment, select **Cluster** from the _From_ menu.

![](/docs-test/imported-assets/spamtitan-kb/4000189403/13b0092cb252.jpg)
