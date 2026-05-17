---
title: "Quarantine Reports"
description: "Imported from support.titanhq.com"
---

> Source: [support.titanhq.com](https://support.titanhq.com/en/65242-quarantine-reports.html)
> Product: SpamTitan
> Imported content type: docs_page
> Product stream: skellig

#### Quarantine Reports

A quarantine report contains a list of emails that have been caught and quarantined. Users can directly manage their quarantined mail through these reports, which are emailed to them on a periodic basis.

A quarantine report provides links for a user to manage their quarantined emails directly from the report. See a sample quarantine report below.

:::note
Quarantine report links are tokenized, meaning that they expire. By default, quarantine report links expire after seven days.
:::

Quarantine reports are generated each night. For each user, a report is generated if certain conditions are met:

-   [Quarantine reports are enabled](/docs-test/titanhq/products/spamtitan/docs/skellig-9/enable-quarantine-reports-65239/ "Enable Quarantine Reports") by a domain admin at the domain level (default: disabled).

-   The user has email in quarantine.

-   Today is a day for which the user or their Admin requested a quarantine report. For example, if a user or their Admin specifies that quarantine reports be sent weekly, the report will only be sent on a Friday.

![STC-701-quarantine-report-sample-callouts.jpg](/docs-test/imported-assets/spamtitan-skellig/65242-quarantine-reports/925693331870.jpg)

:::note
When you select a link in the quarantine report, you'll be prompted to confirm your action in a pop-up window:

![ST-Confirm-Continue.jpg](/docs-test/imported-assets/spamtitan-skellig/65242-quarantine-reports/ee8ed0a6a3f7.jpg)

You can select **Don't show this confirmation again** checkbox if you don't want the Confirm Action pop-up window to be displayed again.
:::
