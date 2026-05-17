---
title: "MIME Type Filters"
description: "Imported from support.titanhq.com"
---

> Source: [support.titanhq.com](https://support.titanhq.com/en/61144-mime-type-filters.html)
> Product: SpamTitan
> Imported content type: docs_page
> Product stream: skellig

#### MIME Type Filters

After creating or editing a filter, or number of filters, select **Apply Filters** to apply the filters to your mail. This button is not available for five minutes after selection.

##### Creating a MIME Type Filter

1.  Go to **Filtering** > **Attachments** and select the **Mime Type Filters** tab.

2.  Select **Create** and the Create A Mime Type Filter window displays.

    -   _Mime Type_: Enter a Mime type. Mime Type is the file type that is reported in the MIME Content-Disposition and Content-Type headers. Both are recorded in their raw (encoded) form and rfc2047-decoded form, if applicable. It consists of a general type and a specific type indicator. For example image/png, video/avi or text/html.

    -   _Inbound action_: Select the action to take on inbound emails that match this filter:

        -   _Allow_: Allow the email.

        -   _Block_: Block the email.

            :::note[Important]
            The domain or user policy determines if the message is quarantined. Go to **Policies** > **Domain Policy** or **User Policies**.
            :::

        -   _Ignore:_ Take no action.

    -   _Comments (optional)_: Enter optional comments about this extension filter.

3.  Select **Create** or save this extension filter or **Cancel** to discard changes.

    :::note[Important]
    After creating or editing a filter, or number of filters, select **Apply Filters** to apply the filters to your mail. This button is not available for five minutes after selection.
    :::

## In this Section

-   [Creating a MIME Type Filter](/docs-test/titanhq/products/spamtitan/docs/skellig-9/mime-type-filters-61144/)
