---
title: "Quarantine Reports"
description: "Imported from docs.titanhq.com"
---

> Source: [docs.titanhq.com](https://docs.titanhq.com/en/1592-quarantine-reports.html)
> Product: SpamTitan
> Imported content type: docs_page
> Product stream: legacy

#### Quarantine Reports

A quarantine report contains a list of emails that have been caught and quarantined. Users can directly manage their quarantined mail through these reports, which are emailed to them on a periodic basis.

A quarantine report provides links for a user to manage their quarantined emails directly from the report. See a sample quarantine report below.

:::note
Quarantine report links are tokenized, meaning that they expire. By default, quarantine report links expire after 7 days.
:::

SpamTitan Cloud will generate reports each night. For each user, a report will be generated if certain conditions are met:

-   [Quarantine reports are enabled](/docs-test/titanhq/products/spamtitan/docs/legacy-8/enable-quarantine-reports/ "Enable Quarantine Reports") by the Domain Group Administrator for the user's domain.

-   The user has email in quarantine.

-   Today is a day for which the user or their Admin requested a quarantine report, e.g. if a user or their Admin specifies that quarantine reports be sent weekly, the report will only be sent on a Friday.

![STC-701-quarantine-report-sample-callouts.jpg](/docs-test/imported-assets/spamtitan-legacy/1592-quarantine-reports/925693331870.jpg)

:::note
When you select a link in the quarantine report, you'll be prompted to confirm your action in a pop-up window:

![ST-Confirm-Continue-ST-Legacy.jpg](/docs-test/imported-assets/spamtitan-legacy/1592-quarantine-reports/97d84b581195.jpg)

You can select **Don't show this confirmation again** checkbox if you don't want the Confirm Action pop-up window to be displayed again.
:::
