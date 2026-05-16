---
title: "System Update Settings"
description: "Imported from docs.titanhq.com"
---

> Source: [docs.titanhq.com](https://docs.titanhq.com/en/8939-system-update-settings.html)
> Product: SpamTitan
> Imported content type: docs_page
> Product stream: legacy

#### System Update Settings

Go to **System Setup** > **System Updates** to keep your SpamTitan Gateway current with the latest updates and fixes. As mail processing is disabled while a system update is being installed, consider applying system updates during non-business hours. See [Guidelines for Updating SpamTitan Gateway](/docs-test/titanhq/products/spamtitan/docs/legacy-8/guidelines-for-updating-spamtitan/ "Guidelines for Updating SpamTitan") before updating your system.

See the table below for a description of each setting.

![STG-system-updates.jpg](/docs-test/imported-assets/spamtitan-legacy/8939-system-update-settings/ac745d40e082.jpg)

Field

Description

**Current System Revision:**

Your currently installed SpamTitan Gateway version.

**Check for Updates Now:**

Click **Start** to download any available system updates. A pop-up window shows the progress of the task (ensure it is not blocked by pop-up blocking software). The download (if any) may take several minutes depending on the size of the update.

**Prefetch System Updates Automatically:**

Import system updates automatically using this setting (default: disabled). When enabled, updates automatically import and display in the Available Updates table from where they must manually be installed.

System updates use FTP to retrieve packages. If the Mail Firewall Appliance is behind a firewall, please ensure that FTP access is available.

Use the two fields below to set a frequency to check for updates and an email address to be notified when an update has been fetched.

Frequency:

Select how often you want to check for updates - hourly, daily or weekly (default: daily).

### Note

Imported updates are not installed automatically. They are listed in the Available Updates table below and must be manually installed.

Administrator Email Address:

Enter an email address that will be notified when an update has been fetched.

**Installed Updates:**

Lists all updates that have been applied.

**Available Updates:**

This table lists update packages with version numbers higher than the current system version. To install an unapplied update, click on its install link.

### Note

Update packages must be applied in order, so installing a package also installs any unapplied lower-numbered packages if necessary.
