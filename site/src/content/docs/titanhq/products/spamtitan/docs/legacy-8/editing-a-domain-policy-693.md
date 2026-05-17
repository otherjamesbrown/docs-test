---
title: "Editing A Domain Policy"
description: "Imported from docs.titanhq.com"
---

> Source: [docs.titanhq.com](https://docs.titanhq.com/en/693-editing-a-domain-policy.html)
> Product: SpamTitan
> Imported content type: docs_page
> Product stream: legacy

##### Editing A Domain Policy

Follow these steps to edit a domain policy:

1.  Go to **AntiSpam Engine** > **Domain Policies**.

2.  Check the domain ![ST-701-check-box.jpg](/docs-test/imported-assets/spamtitan-legacy/693-editing-a-domain-policy/d19d75015111.jpg) you want to edit and click **Edit**.

3.  Using the table below as a reference, complete the **Edit Domain Policy** window.

4.  Click **Apply** to save any changes.

Field

Description

Spam Filtering:

Specifies whether spam filtering is enabled for the selected domain (default: enabled).

Consider mail spam when the score is greater than:

This is the anti-spam engine scoring threshold above which mail is considered to be spam (default: 5).

Spam should be:

_Quarantined_: The message is accepted but quarantined.

_Passed (Tagged)_: The message is analyzed as normal and passed to the end recipient(s). Headers are added so the message can be filtered on the back-end.

You can add text to the email subject header indicating that the message has been identified as spam. To do this, enable 'Spam Modifies Subject' and specifies an appropriate Spam Subject Tag (default is \[ \*\* SPAM \*\* \]).

:::note
Selecting _Passed (Tagged)_ bypasses allow and block lists and delivers an email to the user mailbox.
:::

_Rejected_: The message is rejected. The default action is to quarantine all messages that exceed the spam threshold.

Discard Spam scoring above:

Messages scoring above the specified score will not be quarantined.

Add X-Spam headers to non-spam mails

Specifies if additional headers are added to the message indicating the result of the spam analysis.

Virus Filtering:

Specifies whether virus filtering is enabled for the selected domain (default: enabled).

Attachment Type Filtering:

Specifies if a corporate message attachment policy will be applied to messages to recipients in the selected domain. Default is enabled.

Banned Attachments should be:

Action that can be performed when a message is identified as containing a virus attachment. Default action is Quarantined.

Archive Clean Email:

Specifies if all clean messages received by this domain will be stored in History. Go to Reporting > History to view.

Quarantine Report:

Specifies if quarantine reports will be generated for recipients in this domain. If enabled, a quarantine report is generated for each recipient who has had messages quarantined. Default is disabled (see [Enable Quarantine Reports](/docs-test/titanhq/products/spamtitan/docs/legacy-8/enable-quarantine-reports/ "Enable Quarantine Reports")).

Reset settings to default:

Reset the policy to default values.
