---
title: "Editing a Single Pattern Filter"
description: "Imported from support.titanhq.com"
---

> Source: [support.titanhq.com](https://support.titanhq.com/en/61401-editing-a-single-pattern-filter.html)
> Product: SpamTitan
> Imported content type: docs_page
> Product stream: skellig

#### Editing a Single Pattern Filter

After creating a single pattern filter, you can edit it to update a pattern name, description, status and settings. Follow the steps below to edit a _single_ pattern filter.

To edit a multi pattern filter, see [Editing a Multi Pattern Filter](/docs-test/titanhq/products/spamtitan/docs/skellig-9/editing-a-multi-pattern-filter-65247/ "Editing a Multi Pattern Filter").

1.  Go to **Filtering** > **Pattern Filtering** and select a single pattern to edit.

    ![ST-SK-pattern-filter-table.jpg](/docs-test/imported-assets/spamtitan-skellig/61401-editing-a-single-pattern-filter/5e20510f6fe6.jpg)

2.  Edit your pattern details using the information below as reference:

    -   _Pattern Name_: Assign a name to this pattern filter. This is useful when searching for patterns in the Pattern Filtering table.

    -   _Pattern Description_: Provide an (optional) description of this pattern filter. This is useful for searching patterns in the Pattern Filtering table.

    -   _Rule Type_: Select an option to determine how this pattern filter is scored and treated.

        <table><colgroup><col><col></colgroup><thead><tr><th><p>Option</p></th><th><p>Description</p></th></tr></thead><tbody><tr><td><p>Hard Block</p></td><td><p>Adds a score of 100 to the email, causing it to be blocked.</p></td></tr><tr><td><p>Hard Allow</p></td><td><p>Subtracts a score of 100 from an email, causing it to be allowed.</p></td></tr><tr><td><p>Soft Block</p></td><td><p>Adds a configurable positive score, between 0.01 and 99.99 (default: 5).</p></td></tr><tr><td><p>Soft Allow</p></td><td><p>Subtracts a configurable negative score, between -0.01 and -99.99 (default: -5).</p></td></tr><tr><td><p>Test Mode</p></td><td><p>Use Test Mode to create a pattern filter that triggers when a match is found, but does not affect the score of the mail (score adjustment: 0).</p></td></tr><tr><td><p></p></td><td><p></p></td></tr></tbody></table>

    -   _Score_: This field can be edited to a custom value if Soft Block or Soft Allow is selected in the Rule Type field.

    -   _Status_: Select if you want this pattern filter to be **Active** or **Inactive**. Selecting Inactive prevents this pattern filter from triggering without having to delete it.

        :::note
        If you set the status of a single pattern filter to inactive and it is in use as part of a multi pattern filter, it will not execute as part of the multi pattern filter.
        :::

    -   _Pattern Expression_: Select how this pattern filter is evaluated. Select one of the following:

        <table><colgroup><col><col></colgroup><thead><tr><th><p>Option</p></th><th><p>Description</p></th></tr></thead><tbody><tr><td><p>Starts with</p></td><td><p>The body or header must start with this value.</p><div dir="ltr" data-import-admonition="note" data-import-admonition-title="Note"><h3>Note</h3><p>If <span><em>Starts with</em></span> is selected and <span><em>Apply to body</em></span> is selected, the subject line is seen as the start of the body. In this case, the subject line is filtered and not the body."</p></div></td></tr><tr><td><p>Ends with</p></td><td><p>The body or header must end with this value.</p></td></tr><tr><td><p>Matches regular expression</p></td><td><p>Enter a regular expression to match against the body or header.</p><p>See <a href="https://www.regular-expressions.info/" target="_blank" rel="noopener">https://www.regular-expressions.info</a>
        <span><img src="/docs-test/imported-assets/spamtitan-skellig/61401-editing-a-single-pattern-filter/5e6d767515b2.png" alt="small_external_link.png"></span> for information on using regular expression.</p></td></tr><tr><td><p>Matches any word in</p></td><td><p>Enter a list of words separated by a space. If any word on the list is in the body or header, the pattern filter will trigger.</p></td></tr><tr><td><p>Contains</p></td><td><p>The body or header must contain this value.</p></td></tr><tr><td><p>Equals</p></td><td><p>The body or header must be exactly equal to this value.</p></td></tr></tbody></table>

    -   _Value_: Enter an expression value or built-in rule name. Expression values are case-insensitive.

    -   _Apply to Headers_: By default, a pattern filter triggers on any header. Therefore, if this field is selected and left empty, the pattern filter is triggered on all headers.

        However, you can chose to enter only certain email headers. In this case, the pattern is triggered on only the headers you enter. For example, you can enter To, From, Cc, Subject, ALL, X-Header-From-Another-Box, Received.

        ![ST-SK-pattern-filter-header-box.jpg](/docs-test/imported-assets/spamtitan-skellig/61401-editing-a-single-pattern-filter/1c4c54511c8d.jpg)

        -   Enter one header per line.

        -   Syntax is either _From_ or _From:_

        -   The following special header rules can also be entered:

            <table><colgroup><col><col></colgroup><thead><tr><th><p>Header Rule</p></th><th><p>Description</p></th></tr></thead><tbody><tr><td><p>EnvelopeFrom</p></td><td><p>Triggers on the&nbsp;Envelope MAIL FROM&nbsp;instead of the&nbsp;From&nbsp;header.</p></td></tr><tr><td><p>ToCc</p></td><td><p>Triggers on both the&nbsp;To&nbsp;and&nbsp;Cc&nbsp;headers.</p></td></tr><tr><td><p>ALL</p></td><td><p>The rule will trigger on any header.</p></td></tr><tr><td><p></p></td><td><p></p></td></tr></tbody></table>

        -   The following three options are also available to append to a header. For example, _From:addr_.

            <table><colgroup><col><col></colgroup><thead><tr><th><p>Option</p></th><th><p>Description</p></th></tr></thead><tbody><tr><td><p>:raw</p></td><td><p>Append to the end of a header to prevent decoding of quoted-printable or base64 encoded headers.</p></td></tr><tr><td><p>:addr</p></td><td><p>Append to the end of a&nbsp;From&nbsp;or&nbsp;To&nbsp;header to make the rule only trigger on the address in the header.</p></td></tr><tr><td><p>:name</p></td><td><p>Append to the end of a&nbsp;From&nbsp;or&nbsp;To&nbsp;header to make the rule only trigger on the name in the header.</p></td></tr><tr><td><p></p></td><td><p></p></td></tr></tbody></table>

    -   _Apply to Body_: Select to trigger this pattern filter on the body of an email (default: ON).

        -   _Use Rawbody_: Select to allow your body rules to trigger on the HTML of an email.

            :::danger[Warning]
            Rawbody tests can cause excessive CPU usage and cause mail queues, so use with caution.
            :::

3.  Select **Save Changes** to save changes made to this pattern filter.
