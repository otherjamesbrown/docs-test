---
title: "Configuring Attachment Filters"
description: "Imported from docs.titanhq.com"
---

> Source: [docs.titanhq.com](https://docs.titanhq.com/en/8950-configuring-attachment-filters.html)
> Product: SpamTitan
> Imported content type: docs_page
> Product stream: legacy

##### Configuring Attachment Filters

Attachment filtering allows you to identify emails that contain certain types of files based on their file extensions and/or their MIME types and take action based on a particular filter. Go to **Content Filtering** > **Attachments** to manage settings for banned file attachments.

Click **Enable** opposite _Attachment Filtering:_ to enable attachment filtering.

Click **Enable** opposite _Notify Intended Recipient:_ to notify the intended recipient of a blocked email due to banned attachment filtering.

![STG-attachment-filtering.jpg](/docs-test/imported-assets/spamtitan-legacy/8950-configuring-attachment-filters/a79d241d29e5.jpg)

Creating attachment filters is performed at the global level, however, domain or user policies can provide further control on applying attachment filtering and what action is performed if a banned attachment is discovered.

Attachment filters identify file attachments using several methods, such as Extension Filters and MIME Type Filters. See [Attachment Filtering Methods](/docs-test/titanhq/products/spamtitan/docs/legacy-8/attachment-filtering-methods/ "Attachment Filtering Methods") to learn more about each method.

-   To add a new attachment filter, click **Add...** under the table for the filter type you want to add and the Add Filter dialog box displays. Using the table below as a reference, complete the fields. Click **Save** to save this filter.

-   To edit an existing attachment filter, click the edit ![ST-701-edit-button.jpg](/docs-test/imported-assets/spamtitan-legacy/8950-configuring-attachment-filters/7455a85c9b68.jpg) icon in the Options column and the Edit Filter dialog box displays. Using the table below as a reference, edit the fields. Click **Save** to save changes.

-   To delete an attachment filter, click the ![ST-701-delete-button.jpg](/docs-test/imported-assets/spamtitan-legacy/8950-configuring-attachment-filters/3b2dc809e314.jpg) delete icon in the Options column.

<table><colgroup><col><col></colgroup><thead><tr><th><p>Field</p></th><th><p>Description</p></th></tr></thead><tbody><tr><td><p>Extension:</p><p>Pattern:</p><p>File Type:</p><p>Mime Type:</p></td><td><p>Depending on the filter type, this field is either <span><em>Extension;</em></span>, <span><em>Pattern:</em></span>, <span><em>File Type:</em></span> or <span><em>Mime Type:</em></span>. See <a href="/docs-test/titanhq/products/spamtitan/docs/legacy-8/attachment-filtering-methods/" title="Attachment Filtering Methods">Attachment Filtering Methods</a> for information on the allowable values in this field.</p></td></tr><tr><td><p>Inbound Action:</p></td><td><p>The action to take for inbound messages that match this filter:</p><div><ul><li><p><span><em>Allow:</em></span> Allow the message.</p></li><li><p><span><em>Block:</em></span> Block the message. The domain or user policy determines if the message is quarantined (go to <span><strong>AntiSpam Engine</strong></span> &gt; Domain Policies or User Policies).</p></li><li><p><span><em>Ignore:</em></span> No action taken.</p></li></ul></div></td></tr><tr><td><p>Outbound Action:</p></td><td><p>The action to take for outbound messages that match this filter:</p><div><ul><li><p><span><em>Allow:</em></span> Allow the message.</p></li><li><p><span><em>Block:</em></span> Block the message. The domain or user policy determines if the message is quarantined (go to <span><strong>AntiSpam Engine</strong></span> &gt; Domain Policies or User Policies).</p></li><li><p><span><em>Ignore:</em></span> No action taken.</p></li></ul></div></td></tr><tr><td><p>Scan Archives:</p></td><td><p>Check if you want this filter to match files contained within compress archive files.</p></td></tr><tr><td><p>Scan Double Extension:</p></td><td><p>Displays for <span><em>Extension Filters:</em></span> only. Check if you want this filter to match files containing multiple extensions. For example, an attachment <span><em>report.txt.exe</em></span> or <span><em>image.png. exe</em></span> (note spaces) match an extension filter for .exe if this option is checked.</p></td></tr><tr><td><p>Comment:</p></td><td><p>Optional comment for this filter.</p></td></tr></tbody></table>
