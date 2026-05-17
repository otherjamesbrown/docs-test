---
title: "Domain Policies"
description: "Imported from support.titanhq.com"
---

> Source: [support.titanhq.com](https://support.titanhq.com/en/61137-domain-policies.html)
> Product: SpamTitan
> Imported content type: docs_page
> Product stream: skellig

#### Domain Policies

When a new domain is added, a policy is created for that domain in **Policies** > **Domain Policies**.

![ST-SK-domain-policies-table.jpg](/docs-test/imported-assets/spamtitan-skellig/61137-domain-policies/1d7721dcf7c2.jpg)

Domain policy settings are inherited by all users in that domain. However, if a separate user-based policy is created at the domain level in **Policies** > **User Policies** that policy overrides the domain policy for that user.

The Domain Policies table shows an summary for each domain of the following domain settings: spam filtering (Spam), virus filtering (Virus), attachment type filtering (Banned), archive mail (Archive).

<table><colgroup><col><col></colgroup><thead><tr><th><p>Setting</p></th><th><p>Description</p></th></tr></thead><tbody><tr><td><p>Spam</p></td><td><p>Indicates the status of the spam filtering setting for this domain. This setting can be ON or OFF. If it is on, the status shows the spam score and the action selected when an email is identified as spam.</p><p>For example, this status indicates that the spam filtering setting is on, that the spam score is 5 and any email identified as spam is quarantined:</p><div><img src="/docs-test/imported-assets/spamtitan-skellig/61137-domain-policies/4a90c98bc7f8.jpg" alt="on-quarantine-button.jpg"></div></td></tr><tr><td><p>Virus</p></td><td><p>Indicates the status of the virus filtering setting for this domain. This setting can be ON or OFF. If it is on, the status shows the action selected when an email is identified as containing a virus.</p><p>For example, this status indicates that the virus filtering setting is on and any email identified as containing a virus is rejected:</p><div><img src="/docs-test/imported-assets/spamtitan-skellig/61137-domain-policies/403556b818fd.jpg" alt="on-reject-button.jpg"></div></td></tr><tr><td><p>Banned</p></td><td><p>Indicates the status of the attachment type filtering setting for this domain. This setting can be ON or OFF. If it is on, the status shows the action selected when an email containing a banned attachment is identified.</p><p>For example, this status indicates that the attachment type filtering setting is on and any email identified as containing a banned attachment is passed:</p><div><img src="/docs-test/imported-assets/spamtitan-skellig/61137-domain-policies/175170cbccc3.jpg" alt="on-passtag-button.jpg"></div></td></tr><tr><td><p>Archive</p></td><td><p>Indicates if the archive mail setting is on (active) or off (inactve) for this domain. If enabled, all clean messages received by this domain are stored in history for seven days. Archived mail older than this is deleted.</p><div><img src="/docs-test/imported-assets/spamtitan-skellig/61137-domain-policies/69a5e3c55eed.jpg" alt="active-button.jpg"></div><div><img src="/docs-test/imported-assets/spamtitan-skellig/61137-domain-policies/69d6888513d7.jpg" alt="inactive-button.jpg"></div></td></tr></tbody></table>
