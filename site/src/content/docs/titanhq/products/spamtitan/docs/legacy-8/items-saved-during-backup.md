---
title: "Items Saved During Backup"
description: "Imported from docs.titanhq.com"
---

> Source: [docs.titanhq.com](https://docs.titanhq.com/en/52528-items-saved-during-backup.html)
> Product: SpamTitan
> Imported content type: docs_page
> Product stream: legacy

##### Items Saved During Backup

The table below shows the different categories (tabs) in SpamTitan Gateway and indicates which ones are saved as part of a backup.

-   _Yes_ indicates that the configuration settings for a category are saved during backup (including all subcategories, with exceptions noted).

-   _No_ indicates that the configuration settings for a category are not saved during backup (including all subcategories).

Category

Sub-Category

Backed Up

Post Back-up Steps

System Setup

Licensing

No

System Setup

Network

Yes, except for:

-   _IP Configuration_

-   _IP Delivery Pools_

-   _Port Forwarding_

System Setup

Time

Yes

System Setup

Mail Relay

Yes, except for:

-   _Domains_ > _LDAP Recipient verification is disabled and switched to internal_.

-   _Outbound_ > _Hostname of outbound relay(s)_

-   _Outbound_ > _Smarthosts_

-   _Outbound_ > _SASLAuth_

-   _Outbound_ > _TLS Encryption_

If you used the following prior to backup and want to continue using them afterwards, you'll need to re-enable them:

-   LDAP Recipient Verification. See [Managing Domains](/docs-test/titanhq/products/spamtitan/docs/legacy-8/managing-domains/ "Managing Domains").

-   Hostname of outbound relay(s)

-   Smarthosts

-   SASLAuth

-   TLS Encryption

For the last four items above, see [Outbound Mail Delivery Settings](/docs-test/titanhq/products/spamtitan/docs/legacy-8/outbound-mail-delivery-settings/ "Outbound Mail Delivery Settings").

System Setup

Mail Authentication

Yes

System Setup

Rate Controls

Yes

System Setup

System Updates

No

Content Filtering

Yes

Anti-Spam Engine

Yes, except for _Bayes configuration_

Settings

Yes, except for:

-   _User Management_ > _Two-Factor Authentication (2FA)_

-   _User Management_ > _REST API tokens_

-   _SSL_ > _no certs are restored_

-   _TLS is disabled._

-   _Backup_ > _Schedule Backup settings_

-   _Access/Authentication_ > _Web Authentication_ _(LDAP authentication is disabled and switched to internal.)_

If you used the following prior to backup and want to continue using them afterwards, you'll need to re-enable them:

-   Two-Factor Authentication. See [Two-Factor Authentication](/docs-test/titanhq/products/spamtitan/docs/legacy-8/two-factor-authentication/ "Two-Factor Authentication").

-   New Oauth access tokens. See [Using APIs in SpamTitan Gateway](/docs-test/titanhq/products/spamtitan/docs/legacy-8/using-apis-in-spamtitan-gateway/ "Using APIs in SpamTitan Gateway").

-   New certificates. See [Generating Certificate Signing Requests](/docs-test/titanhq/products/spamtitan/docs/legacy-8/generating-certificate-signing-requests/ "Generating Certificate Signing Requests").

-   TLS encryption. See [Enabling TLS](/docs-test/titanhq/products/spamtitan/docs/legacy-8/enabling-tls/ "Enabling TLS").

-   Backup Schedule. See [Scheduling an Automatic Backup](/docs-test/titanhq/products/spamtitan/docs/legacy-8/scheduling-an-automatic-backup/ "Scheduling an Automatic Backup").

-   LDAP authentication. See [Web Authentication Settings](/docs-test/titanhq/products/spamtitan/docs/legacy-8/web-authentication-settings/ "Web Authentication Settings").

Filter Rules

Yes

Quarantine

Manage Quarantine

No

Quarantine

Settings

Yes

Quarantine

Aliases

Yes, except for:

-   _Active Directory Servers_ > _LDAP authentication is disabled_

-   _Password is removed._

If you used LDAP Authentication prior to backup and want to continue using it afterwards, you'll need to re-enable it. See [Aliases](/docs-test/titanhq/products/spamtitan/docs/legacy-8/aliases/ "Aliases").

Reporting

History

No

Reporting

Todays Reports

No

Reporting

Archived Reports

No

Reporting

Schedule Reports

Yes

Logs

View Logs

No

Logs

Alerts

Yes

Cluster

Cluster member

No

Cluster

Advanced options

Yes
