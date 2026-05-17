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

Field

Description

Extension:

Pattern:

File Type:

Mime Type:

Depending on the filter type, this field is either _Extension;_, _Pattern:_, _File Type:_ or _Mime Type:_. See [Attachment Filtering Methods](/docs-test/titanhq/products/spamtitan/docs/legacy-8/attachment-filtering-methods/ "Attachment Filtering Methods") for information on the allowable values in this field.

Inbound Action:

The action to take for inbound messages that match this filter:

-   _Allow:_ Allow the message.

-   _Block:_ Block the message. The domain or user policy determines if the message is quarantined (go to **AntiSpam Engine** > Domain Policies or User Policies).

-   _Ignore:_ No action taken.

Outbound Action:

The action to take for outbound messages that match this filter:

-   _Allow:_ Allow the message.

-   _Block:_ Block the message. The domain or user policy determines if the message is quarantined (go to **AntiSpam Engine** > Domain Policies or User Policies).

-   _Ignore:_ No action taken.

Scan Archives:

Check if you want this filter to match files contained within compress archive files.

Scan Double Extension:

Displays for _Extension Filters:_ only. Check if you want this filter to match files containing multiple extensions. For example, an attachment _report.txt.exe_ or _image.png. exe_ (note spaces) match an extension filter for .exe if this option is checked.

Comment:

Optional comment for this filter.
