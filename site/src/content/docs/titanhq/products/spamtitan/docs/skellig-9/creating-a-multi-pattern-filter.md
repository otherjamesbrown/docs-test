---
title: "Creating a Multi Pattern Filter"
description: "Imported from support.titanhq.com"
---

> Source: [support.titanhq.com](https://support.titanhq.com/en/61398-creating-a-multi-pattern-filter.html)
> Product: SpamTitan
> Imported content type: docs_page
> Product stream: skellig

#### Creating a Multi Pattern Filter

A multi pattern filter allows you to create a filter that combines pattern filters that have already been created. SpamTitan's built-in rules can also be used when creating a multi pattern filter.

Go to **Filtering** > **Pattern Filtering** and follow the steps below to create a _multi_ pattern filter.

1.  Select **Add** > **Multi Pattern** and the Create a Multi Pattern Filter window displays.

2.  Complete the fields as follows:

    -   _Pattern Name_: Assign a name to this pattern filter. This is useful when searching for patterns in the Pattern Filtering table.

    -   _Pattern Description_: Provide an (optional) description of this pattern filter. This is useful for searching patterns in the Pattern Filtering table.

    -   _Rule Type_: Select an option to determine how this pattern filter is scored and treated.

        <table><colgroup><col><col></colgroup><thead><tr><th><p>Option</p></th><th><p>Description</p></th></tr></thead><tbody><tr><td><p>Hard Block</p></td><td><p>Adds a score of 100 to the email, causing it to be blocked.</p></td></tr><tr><td><p>Hard Allow</p></td><td><p>Subtracts a score of 100 from an email, causing it to be allowed.</p></td></tr><tr><td><p>Soft Block</p></td><td><p>Adds a configurable positive score, between 0.01 and 99.99 (default: 5).</p></td></tr><tr><td><p>Soft Allow</p></td><td><p>Subtracts a configurable negative score, between -0.01 and -99.99 (default: -5).</p></td></tr><tr><td><p>Test Mode</p></td><td><p>Use Test Mode to create a pattern filter that triggers when a match is found, but does not affect the score of the mail (score adjustment: 0).</p><div dir="ltr" data-import-admonition="note" data-import-admonition-title="Note"><h3>Note</h3><p>Test mode can be selected when creating a single or a multi pattern filter. However, this mode only executes when rules are combined as part of a multi pattern filter.</p></div></td></tr><tr><td><p></p></td><td><p></p></td></tr></tbody></table>

    -   _Score_: This field can be edited to a custom value if Soft Block or Soft Allow is selected in the Rule Type field.

    -   _Pattern Filter_: Select either Built-in Rule or an existing pattern filter from the list of your existing pattern filters.

    -   _Value_: If you selected Built-in Rule from the Pattern Filter menu, enter the rule name here. If you selected an existing pattern filter from the Pattern Filter menu, the ID number for that rule automatically displays here.

    -   _Add Condition_: Select **Add Condition** to add another rule to this pattern filter. Choose either **AND** or **OR** to determine if just one or both rules need to be satisfied.

    -   _Add Group_: Select **Add Group** to add another rule, or set of rules, to this pattern filter. Choose either **AND** or **OR** to determine if just one or both groups of rules need to be satisfied.

3.  Repeat adding additional Pattern Filters and Values to build out your multi pattern filter as required.

4.  Select **Create** to create this multi pattern filter or Cancel to discard.
