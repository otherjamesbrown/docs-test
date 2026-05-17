---
title: "Filtering Quarantine"
description: "Imported from docs.titanhq.com"
---

> Source: [docs.titanhq.com](https://docs.titanhq.com/en/1137-filtering-quarantine.html)
> Product: SpamTitan
> Imported content type: docs_page
> Product stream: legacy

#### Filtering Quarantine

To filter email in quarantine, go to **Quarantine** > **Manage Quarantine** > **Search Filters** tab. The following window displays:

![ST-701-quarantine-search-filter.jpg](/docs-test/imported-assets/spamtitan-legacy/1137-filtering-quarantine/92336c6d1124.jpg)

To filter the quarantine list, enter your search criteria:

-   _Message Type:_ filter messages based on how they were classified by SpamTitan.

-   _Message Flow:_ search email that is sent (Outbound), received (Inbound) or both (Inbound and Outbound).

-   _Score:_ the spam score assigned to a message. Messages which are not analyzed for spam are will have no score (e.g. rejected messages).

-   _Subject:_ filter based on message subject. Use ‘\*’ for wildcards.

:::note
By default, quarantined email is listed by score. The lower the score, the less ‘spammy’ an email is and the higher the possibility that it may be a false positive - i.e., not spam.
:::

Filter by date

To filter quarantine by date, click the Date Range button on the top right above the quarantine email list.

Filter by Email Address

To filter by recipient, enter a full email address in the Recipient email address: field. To filter by sender, enter a full email address in the Sender email address: field.

Perform wildcard searches with an asterisk (\*), e.g. enter \*@example.com as the Recipient email address filter to show all users in the example.com domain. Note that performing very broad searches such as '\*a\*' may fail with a 'memory exhaustion' error.

Filter results can be sorted by Date or Score in ascending or descending order by clicking on that column heading.
