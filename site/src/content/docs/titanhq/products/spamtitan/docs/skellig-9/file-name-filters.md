---
title: "File Name Filters"
description: "Imported from support.titanhq.com"
---

> Source: [support.titanhq.com](https://support.titanhq.com/en/61095-file-name-filters.html)
> Product: SpamTitan
> Imported content type: docs_page
> Product stream: skellig

#### File Name Filters

A file name filter extracts an attachment's file name using the email's MIME headers and applies a decision based on the file name filter settings.

After creating or editing a filter, or number of filters, select **Apply Filters** to apply the filters to your mail. This button is not available for five minutes after selection.

##### Creating a File Name Filter

1.  Go to **Filtering** > **Attachments** and select the **File Name Filters** tab.

2.  Select **Create** and the Create A Filename Pattern Filter window displays.

    -   _Filename Pattern_: Use the asterisk sign (\*) to match zero or more characters; use the question mark sign (?) to match a single character. For instance, to filter all executable attachments that include the word sample, create a filter \*sample\*.exe.

    -   _Inbound action_: Select the action to take on inbound emails that match this filter:

        -   _Allow_: Allow the email.

        -   _Block_: Block the email.

            :::note[Important]
            The domain or user policy determines if the message is quarantined. Go to **Policies** > **Domain Policy** or **User Policies**.
            :::

        -   _Ignore:_ Take no action.

    -   _Scan Archives_: Select if you want this filter to match files contained within compressed archive files.

    -   _Comments (optional)_: Enter optional comments about this file name filter.

3.  Select **Create** or save this extension filter or **Cancel** to discard changes.

    :::note[Important]
    After creating or editing a filter, or number of filters, select **Apply Filters** to apply the filters to your mail. This button is not available for five minutes after selection.
    :::

## In this Section

-   [Creating a File Name Filter](/docs-test/titanhq/products/spamtitan/docs/skellig-9/file-name-filters/)
