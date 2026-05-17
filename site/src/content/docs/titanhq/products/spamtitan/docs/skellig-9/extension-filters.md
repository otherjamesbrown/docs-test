---
title: "Extension Filters"
description: "Imported from support.titanhq.com"
---

> Source: [support.titanhq.com](https://support.titanhq.com/en/61094-extension-filters.html)
> Product: SpamTitan
> Imported content type: docs_page
> Product stream: skellig

#### Extension Filters

An extension filter extracts a file attachment extension using an email's MIME headers and applies a decision based on the extension filter settings.

Go to **Filtering** > **Attachments** and select the **Extension Filters** tab. Extension filters that have been created at a higher level of access and applied to your domain(s) are displayed with "(inherited)" following the filter name – for example, _js (inherited)_.

After creating or editing a filter, or number of filters, select **Apply Filters** to apply the filters to your mail. This button is not available for five minutes after selection.

:::caution
If a filename extension has been modified, it may not be recognized by an extension filter. For example, if an executable file, _photo.exe_, has been renamed to _photo.jpg_, an .exe extension filter will not detect this change. In this situation, a File Type Filter and/or a MIME Type filter are also necessary.
:::

##### Creating an Extension Filter

1.  Go to **Filtering** > **Attachments** and select the **Extension Filters** tab.

2.  Select **Create** and the Create An Extension Filter window displays.

    -   _Extension_: Enter a file extension. Only alphanumeric characters are allowed for filename extensions.

    -   _Inbound action_: Select the action to take on inbound emails that match this filter:

        -   _Allow_: Allow the email.

        -   _Block_: Block the email.

            :::note[Important]
            The domain or user policy determines if the message is quarantined. Go to **Policies** > **Domain Policy** or **User Policies**.
            :::

        -   _Ignore:_ Take no action.

    -   _Scan Archives_: Select if you want this filter to match files contained within compressed archive files.

    -   _Scan Double Extensions_: Select to identify attachments that have been renamed to conceal their true type, as double extensions can be used to trick a user into opening malware. A mail client may hide a second extension, so _filename.gif.exe_ appears as _filename.gif_.

    -   _Comments (optional)_: Enter optional comments about this extension filter.

3.  Select **Create** or save this extension filter or **Cancel** to discard changes.

    :::note[Important]
    After creating or editing a filter, or number of filters, select **Apply Filters** to apply the filters to your mail. This button is not available for five minutes after selection.
    :::

## In this Section

-   [Creating an Extension Filter](/docs-test/titanhq/products/spamtitan/docs/skellig-9/extension-filters/)
