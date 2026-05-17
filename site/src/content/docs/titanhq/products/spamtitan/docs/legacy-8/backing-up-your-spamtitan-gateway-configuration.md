---
title: "Backing Up your SpamTitan Gateway Configuration"
description: "Imported from docs.titanhq.com"
---

> Source: [docs.titanhq.com](https://docs.titanhq.com/en/8993-backing-up-your-spamtitan-gateway-configuration.html)
> Product: SpamTitan
> Imported content type: docs_page
> Product stream: legacy

#### Backing Up your SpamTitan Gateway Configuration

Backups allow you to create a backup file of the configuration of your SpamTitan appliance that can be saved locally and restored on demand. Saved settings include network settings, domain configurations, user preferences and email allow and block lists. Quarantine user and policy details are also backed up as part of this process, but quarantine messages are not.

Go to **Settings** > **Backup** to manage backup settings.

![STG-backup-configuration.jpg](/docs-test/imported-assets/spamtitan-legacy/8993-backing-up-your-spamtitan-gateway-configuration/680e305e3580.jpg)

To _export_ your current SpamTitan Gateway configuration settings to a backup file:

1.  Go to **Settings** > **Backup** > **Backup Configuration**.

2.  Click **Start**.

3.  If the backup is successfully created the backup file is available to download as a compressed .TAR file.

To _import_ a previously exported SpamTitan Gateway backup file:

1.  Go to **Settings** > **Backup** > **Backup Configuration**.

2.  Select **Choose File** to select a backup file that you previously exported from SpamTitan Gateway and click **Open**.

    :::note[Important]
    With the exception of 7.13, which can be imported to an 8.00 instance, the backup file being imported must be at the same patch level as the currently installed system revision.
    :::

3.  Click **Start** to complete the import.

## In this Section

-   [Scheduling an Automatic Backup](/docs-test/titanhq/products/spamtitan/docs/legacy-8/scheduling-an-automatic-backup/)
-   [Items Saved During Backup](/docs-test/titanhq/products/spamtitan/docs/legacy-8/items-saved-during-backup/)
