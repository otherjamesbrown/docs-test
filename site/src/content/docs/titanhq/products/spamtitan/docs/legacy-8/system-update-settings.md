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

<table><colgroup><col><col></colgroup><thead><tr><th><p>Field</p></th><th><p>Description</p></th></tr></thead><tbody><tr><td><p><span><strong>Current System Revision:</strong></span></p></td><td><p>Your currently installed SpamTitan Gateway version.</p></td></tr><tr><td><p><span><strong>Check for Updates Now:</strong></span></p></td><td><p>Click <span><strong>Start</strong></span> to download any available system updates. A pop-up window shows the progress of the task (ensure it is not blocked by pop-up blocking software). The download (if any) may take several minutes depending on the size of the update.</p></td></tr><tr><td><p><span><strong>Prefetch System Updates Automatically:</strong></span></p></td><td><p>Import system updates automatically using this setting (default: disabled). When enabled, updates automatically import and display in the Available Updates table from where they must manually be installed.</p><p>System updates use FTP to retrieve packages. If the Mail Firewall Appliance is behind a firewall, please ensure that FTP access is available.</p><p>Use the two fields below to set a frequency to check for updates and an email address to be notified when an update has been fetched.</p></td></tr><tr><td><p>Frequency:</p></td><td><p>Select how often you want to check for updates - hourly, daily or weekly (default: daily).</p><div dir="ltr" data-import-admonition="note" data-import-admonition-title="Note"><h3>Note</h3><p>Imported updates are not installed automatically. They are listed in the Available Updates table below and must be manually installed.</p></div></td></tr><tr><td><p>Administrator Email Address:</p></td><td><p>Enter an email address that will be notified when an update has been fetched.</p></td></tr><tr><td><p><span><strong>Installed Updates:</strong></span></p></td><td><p>Lists all updates that have been applied.</p></td></tr><tr><td><p><span><strong>Available Updates:</strong></span></p></td><td><p>This table lists update packages with version numbers higher than the current system version. To install an unapplied update, click on its install link.</p><div dir="ltr" data-import-admonition="note" data-import-admonition-title="Note"><h3>Note</h3><p>Update packages must be applied in order, so installing a package also installs any unapplied lower-numbered packages if necessary.</p></div></td></tr></tbody></table>
