---
title: "Configuring Clam AV Settings"
description: "Imported from docs.titanhq.com"
---

> Source: [docs.titanhq.com](https://docs.titanhq.com/en/8943-configuring-clam-av-settings.html)
> Product: SpamTitan
> Imported content type: docs_page
> Product stream: legacy

##### Configuring Clam AV Settings

ClamAV is a free, cross-platform and open-source antivirus software toolkit able to detect many types of malicious software, including viruses. It is a powerful, fast, and accurate virus detection engine that uses a scalable, multi-threaded daemon to scan for viruses. As using third party rules has additional memory requirements, your SpamTitan Gateway should have a minimum of 4GB before enabling this option.

When virus checking is enabled, ClamAV is the default antivirus engine for SpamTitan Gateway. Go to **Content Filtering** > **Viruses** > **Clam AntiVirus** to view and manage settings.

![STG-clamAV-settings.jpg](/docs-test/imported-assets/spamtitan-legacy/8943-configuring-clam-av-settings/cf9eb5a13517.jpg)

The table below describes the different ClamAV settings.

Field

Description

Database Last Update:

Displays date and time the last ClamAV update was applied.

Database Version:

Displays:

-   the current version of ClamAV that is running on SpamTitan Gateway.

-   revision number for the latest definitions.

-   the date the latest definitions were produced.

Update Now:

Click **Start** to check for the latest updates to the virus definition database.

Enable Automatic Updates:

Click **Enable** to automatically retrieve and apply ClamAV virus definitions. If enabled, select a frequency of every hour, every day or every week. The recommended setting is enabled, with a frequency of every hour selected.

Click **Disable** to disable automatic updates.

Use Google Safebrowsing Database:

Click **Enable** to enable the use of the Google Safebrowsing database by ClamAV. Email links are scanned to check if they are on the safe browsing list and block them if they are. If a suspect link is detected, the spam score of the email is boosted by three points.

:::danger[Warning]
Enabling this setting increases memory usage.
:::

See [safebrowsing.google.com](https://safebrowsing.google.com/) ![icons8-external-link-32.png](/docs-test/imported-assets/spamtitan-legacy/8943-configuring-clam-av-settings/9407e2037883.png) for more information on Google Safebrowsing.

Use Third-party Databases:

Enabling this option adds several third-party databases to ClamAV:

-   [Sanesecurity](https://sanesecurity.com/) ![icons8-external-link-32.png](/docs-test/imported-assets/spamtitan-legacy/8943-configuring-clam-av-settings/9407e2037883.png)

-   [SecuriteInfo](https://www.securiteinfo.com/) ![icons8-external-link-32.png](/docs-test/imported-assets/spamtitan-legacy/8943-configuring-clam-av-settings/9407e2037883.png)

-   [Malware Patrol](https://www.malwarepatrol.net/) ![icons8-external-link-32.png](/docs-test/imported-assets/spamtitan-legacy/8943-configuring-clam-av-settings/9407e2037883.png)

-   [LinuxMalwareDetect](https://github.com/rfxn/linux-malware-detect) ![icons8-external-link-32.png](/docs-test/imported-assets/spamtitan-legacy/8943-configuring-clam-av-settings/9407e2037883.png)

-   [YARA](https://virustotal.github.io/yara/) ![icons8-external-link-32.png](/docs-test/imported-assets/spamtitan-legacy/8943-configuring-clam-av-settings/9407e2037883.png)

:::danger[Warning]
Enabling this setting increases memory usage.
:::

Treat OLE Macros as:

Specify what action to take on files with OLE Macros. The options are:

-   _Nothing_: No special action taken based on OLE macro status.

-   _Virus_: Mark files containing OLE macros as a virus.

-   _Spam Score_: Add a score of 2 to the email spam score. This makes it more _likely_ to be marked as Spam, but without immediately blocking it.

-   _Sandbox_: Send the mail to the sandbox. See [Sandboxing in SpamTitan Gateway](/docs-test/titanhq/products/spamtitan/docs/legacy-8/sandboxing-in-spamtitan-gateway/ "Sandboxing in SpamTitan Gateway").
