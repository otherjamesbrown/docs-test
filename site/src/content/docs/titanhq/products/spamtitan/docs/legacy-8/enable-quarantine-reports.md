---
title: "Enable Quarantine Reports"
description: "Imported from docs.titanhq.com"
---

> Source: [docs.titanhq.com](https://docs.titanhq.com/en/640-enable-quarantine-reports.html)
> Product: SpamTitan
> Imported content type: docs_page
> Product stream: legacy

#### Enable Quarantine Reports

Enable quarantine reports to send a report to all users that have had email blocked. Quarantine reports are not enabled by default.

To enable quarantine reports for your domain:

1.  Go to **AntiSpam Engine** > **Domain Policies**.

2.  In the Domain Policy Management window, check the domain ![ST-701-check-box.jpg](/docs-test/imported-assets/spamtitan-legacy/640-enable-quarantine-reports/d19d75015111.jpg) for which you want to enable quarantine reports and click **Edit**. The Edit Domain Policy window will display:

    ![ST-701-edit-domain-policy-quarantine-disabled.jpg](/docs-test/imported-assets/spamtitan-legacy/640-enable-quarantine-reports/133f23b61181.jpg)

3.  In the Edit Domain Policy window, click **Enable** to the right of Quarantine Report:

    ![ST-701-enable-quarantine-reports.jpg](/docs-test/imported-assets/spamtitan-legacy/640-enable-quarantine-reports/90e96e22eb14.jpg)

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

    Spam that scores above a certain threshold (usually 5) is deemed spam. In quarantine reports, users generally want to view email that just scored just above the spam score threshold so they can look for any [false positives](/docs-test/titanhq/products/spamtitan/docs/legacy-8/false-positive/ "False positive").

    If a user receives a significant amount of spam, exclude spam messages above a higher threshold, e.g. 30, to keep their quarantine report manageable.

    This setting is set to 999 by default, meaning that no messages will be excluded, as a message cannot score higher.

5.  Click **Apply** to save changes.
