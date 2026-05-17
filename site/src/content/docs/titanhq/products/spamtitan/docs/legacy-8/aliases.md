---
title: "Aliases"
description: "Imported from docs.titanhq.com"
---

> Source: [docs.titanhq.com](https://docs.titanhq.com/en/9374-aliases.html)
> Product: SpamTitan
> Imported content type: docs_page
> Product stream: legacy

#### Aliases

Alias unification allows users to see all their quarantined messages for all their alias email accounts when they receive a quarantine report, or when they log in via the user interface. Go to **Quarantine** > **Aliases** > **Alias Unification for Microsoft Exchange Email** and click **Enable** to enable this feature.

![STG-quarantine-aliases.jpg](/docs-test/imported-assets/spamtitan-legacy/9374-aliases/1197b29fa7e2.jpg)

To automatically import user aliases from Active Directory, select one or more active directory servers from the list and click **Import Aliases**.

To add an active directory server to the list click **Add...**. Using the table below as a reference, complete the fields in _Add LDAP Server_ dialog box and click **Save**.

<table><colgroup><col><col></colgroup><thead><tr><th><p>Field</p></th><th><p>Description</p></th></tr></thead><tbody><tr><td><p>LDAP server:</p></td><td><p>LDAP server or LDAP/LDAPS URL. These are valid examples:</p><div><ul><li><p>hostname (LDAP on the default LDAP port 389).</p></li><li><p>hostname:778 (LDAP on port 778).</p></li><li><p>ldap://hostname (LDAP on default port 389).</p></li><li><p>ldap://hostname:778 ( LDAP on port 778).</p></li><li><p>ldaps://hostname (secure LDAP (LDAPS) on the default LDAPS port 636).</p></li><li><p>ldaps://hostname:1444 (LDAPS on port 1444).</p></li></ul></div></td></tr><tr><td><p>Base entry (DN)</p></td><td><p>The base entry distinguished name (DN) as configured on the LDAP server. The base entry serves as the starting point of the LDAP directory search. Example: dc=rainbowx,dc=net</p></td></tr><tr><td><p>Server login user:</p></td><td><p>Username for accessing the LDAP server.</p></td></tr><tr><td><p>Server login password:</p></td><td><p>Password for accessing the LDAP server. £ is not permitted in the password.</p></td></tr><tr><td><p>Import Frequency:</p></td><td><p>The frequency with which SpamTitan synchronizes with active directory. Choose Never, Hourly or Daily.</p></td></tr></tbody></table>

Imported aliases are displayed in the _Unified Email Details_ list. To manually add to this list, click **Add...** and using the table below as a reference, complete the field in the Add Alias dialog and click **Save**.

![STG-alias-unified-email-details.jpg](/docs-test/imported-assets/spamtitan-legacy/9374-aliases/44eb44d50237.jpg)

To import aliases from a text file click **Import...**. The format of the text file is as follows:

-   primary@example.com alias1@example.com alias2@example.com alias3@example.com

<table><colgroup><col><col></colgroup><thead><tr><th><p>Field</p></th><th><p>Description</p></th></tr></thead><tbody><tr><td><p>Delivery Address:</p></td><td><p>Primary email address.</p></td></tr><tr><td><p>Aliases:</p></td><td><p>Enter additional names that this user receives email to. For example, if the account is for user <span><em>john@example.com</em></span>, you may also want to allow him to receive mail at <span><em>john.doe@example.com</em></span>.</p></td></tr></tbody></table>
