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

<table><colgroup><col align="left"><col align="left"></colgroup><thead><tr><th><p>Field</p></th><th><p>Description</p></th></tr></thead><tbody><tr><td><p>Spam Filtering:</p></td><td><p>Specifies whether spam filtering is enabled for the selected domain (default: enabled).</p></td></tr><tr><td><p>Consider mail spam when the score is greater than:</p></td><td><p>This is the anti-spam engine scoring threshold above which mail is considered to be spam (default: 5).</p></td></tr><tr><td><p>Spam should be:</p></td><td><p><span><em>Quarantined</em></span>: The message is accepted but quarantined.</p><p><span><em>Passed (Tagged)</em></span>: The message is analyzed as normal and passed to the end recipient(s). Headers are added so the message can be filtered on the back-end.</p><p>You can add text to the email subject header indicating that the message has been identified as spam. To do this, enable 'Spam Modifies Subject' and specifies an appropriate Spam Subject Tag (default is&nbsp;[ ** SPAM ** ]).</p><div dir="ltr" data-import-admonition="note" data-import-admonition-title="Note"><h3>Note</h3><p>Selecting <span><em>Passed (Tagged)</em></span> bypasses allow and block lists and delivers an email to the user mailbox.</p></div><p><span><em>Rejected</em></span>: The message is rejected. The default action is to quarantine all messages that exceed the spam threshold.</p></td></tr><tr><td><p>Discard Spam scoring above:</p></td><td><p>Messages scoring above the specified score will not be quarantined.</p></td></tr><tr><td><p>Add X-Spam headers to non-spam mails</p></td><td><p>Specifies if additional headers are added to the message indicating the result of the spam analysis.</p></td></tr><tr><td><p>Virus Filtering:</p></td><td><p>Specifies whether virus filtering is enabled for the selected domain (default: enabled).</p></td></tr><tr><td><p>Attachment Type Filtering:</p></td><td><p>Specifies if a corporate message attachment policy will be applied to messages to recipients in the selected domain.&nbsp;Default is enabled.</p></td></tr><tr><td><p>Banned Attachments should be:</p></td><td><p>Action that can be performed when a message is identified as containing a virus attachment. Default action is Quarantined.</p></td></tr><tr><td><p>Archive Clean Email:</p></td><td><p>Specifies if all clean messages received by this domain will be stored in History. Go to Reporting &gt; History to view.</p></td></tr><tr><td><p>Quarantine Report:</p></td><td><p>Specifies if quarantine reports will be generated for recipients in this domain. If enabled, a quarantine report is generated for each recipient who has had messages quarantined. Default is disabled (see <a href="/docs-test/titanhq/products/spamtitan/docs/legacy-8/enable-quarantine-reports/" title="Enable Quarantine Reports">Enable Quarantine Reports</a>).</p></td></tr><tr><td><p>Reset settings to default:</p></td><td><p>Reset the policy to default values.</p></td></tr></tbody></table>
