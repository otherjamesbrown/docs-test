---
title: "SpamTitan Gateway 7.13 to 8.00 Upgrade Path"
description: "Imported from docs.titanhq.com"
---

> Source: [docs.titanhq.com](https://docs.titanhq.com/en/63616-spamtitan-gateway-7-13-to-8-00-upgrade-path.html)
> Product: SpamTitan
> Imported content type: docs_page
> Product stream: legacy

#### SpamTitan Gateway 7.13 to 8.00 Upgrade Path

A direct upgrade is not currently available from SpamTitan Gateway 7.13 to 8.00. However, you can follow the steps below to create and export a backup of your 7.13 instance and import it to a fresh SpamTitan Gateway 8.00 instance.

:::note[Important]
For security purposes, some configuration settings are not saved during backup. This means that you'll need to re-enable them after you've completed the steps below. See [Items Saved During Backup](/docs-test/titanhq/products/spamtitan/docs/legacy-8/items-saved-during-backup/ "Items Saved During Backup") for help.
:::

If you are running an earlier version of SpamTitan Gateway than 7.13, you must update versions within SpamTitan to 7.13 first before following the steps below. See [Guidelines for Updating SpamTitan](/docs-test/titanhq/products/spamtitan/docs/legacy-8/guidelines-for-updating-spamtitan/).

:::note[Important]
For SpamTitan Gateway customers, please see security advice for gateway deployments: TitanHQ Security – Improving Security in Self-Hosted SpamTitan Systems : SpamTitan Help Center
:::

1.  Install a fresh instance of SpamTitan Gateway 8.00. See [Downloading and Installing SpamTitan Gateway](/docs-test/titanhq/products/spamtitan/docs/legacy-8/downloading-and-installing-spamtitan-gateway/).

2.  Create and export a backup from your SpamTitan Gateway 7.13 instance. See [Backing up your SpamTitan Gateway Configuration](/docs-test/titanhq/products/spamtitan/docs/legacy-8/backing-up-your-spamtitan-gateway-configuration/).

3.  Import your SpamTitan Gateway 7.13 backup to the fresh SpamTitan Gateway 8.00 instance. See [Backing up your SpamTitan Gateway Configuration](/docs-test/titanhq/products/spamtitan/docs/legacy-8/backing-up-your-spamtitan-gateway-configuration/).
