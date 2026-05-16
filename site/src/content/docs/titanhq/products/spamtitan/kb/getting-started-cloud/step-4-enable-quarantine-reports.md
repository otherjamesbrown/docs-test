---
title: "Step 4: Enable Quarantine Reports Print"
description: "Imported from helpdesk.spamtitan.com"
---

> Source: [helpdesk.spamtitan.com](https://helpdesk.spamtitan.com/support/solutions/articles/4000186890-step-4-enable-quarantine-reports)
> Product: SpamTitan
> Imported content type: kb_article
> Source folder: Getting Started: SpamTitan Cloud
> Modified: Wed, 14 Sep, 2022 at 7:00 PM

![](/docs-test/imported-assets/spamtitan-kb/4000186890/6116b5fe7424.jpg)

Enable quarantine reports to send a report to all users that have had email blocked. Quarantine reports are not enabled by default.

To enable quarantine reports for your domain:

1.  Go to **AntiSpam Engine** > **Domain Policies**.

2.  In the Domain Policy Management window, check the domain ![](/docs-test/imported-assets/spamtitan-kb/4000186890/d19d75015111.jpg) for which you want to enable quarantine reports and click **Edit**. The Edit Domain Policy window will display:

    ![](/docs-test/imported-assets/spamtitan-kb/4000186890/133f23b61181.jpg)

3.  In the Edit Domain Policy window, click **Enable** to the right of Quarantine Report:

    ![](/docs-test/imported-assets/spamtitan-kb/4000186890/90e96e22eb14.jpg)

4.  Use the table below as reference to set your quarantine report preferences:

    Field

    Description

    Language:

    Select the language you want your reports to be written in.

    Email report every:

    Select the frequency with which quarantine reports will be sent. Reports may be generated every day, every weekday, every Friday, or every month.

    Report contains:

    A quarantine report can contain a list of all items that are currently quarantined for each user or new quarantined items since the last report was generated (default). Both of these can be viewed with or without the virus infected emails included.

    Exclude spam mails scoring above:

    Spam that scores above a certain threshold (usually 5) is deemed spam. In quarantine reports, users generally want to view email that just scored just above the spam score threshold so they can look for any false positives.

    If a user receives a significant amount of spam, exclude spam messages above a higher threshold, e.g. 30, to keep their quarantine report manageable.

    This setting is set to 999 by default, meaning that no messages will be excluded, as a message cannot score higher.

5.  Click **Apply** to save changes.
