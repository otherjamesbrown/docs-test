---
title: "Editing a Multi Pattern Filter"
description: "Imported from support.titanhq.com"
---

> Source: [support.titanhq.com](https://support.titanhq.com/en/61647-editing-a-multi-pattern-filter.html)
> Product: SpamTitan
> Imported content type: docs_page
> Product stream: skellig

#### Editing a Multi Pattern Filter

After creating a multi pattern filter, you can edit it to update a pattern name, description, status and settings. Follow the steps below to edit a multi pattern filter.

To edit a single pattern filter, see [Editing a Single Pattern Filter](/docs-test/titanhq/products/spamtitan/docs/skellig-9/editing-a-single-pattern-filter-65245/ "Editing a Single Pattern Filter").

1.  Go to **Filtering** > **Pattern Filtering** and select a multi pattern to edit.

    ![ST-SK-pattern-filter-table.jpg](/docs-test/imported-assets/spamtitan-skellig/61647-editing-a-multi-pattern-filter/5e20510f6fe6.jpg)

2.  Edit the field using the following information for reference:

    -   _Pattern Name_: Assign a name to this pattern filter. This is useful when searching for patterns in the Pattern Filtering table.

    -   _Pattern Description_: Provide an (optional) description of this pattern filter. This is useful for searching patterns in the Pattern Filtering table.

    -   _Rule Type_: Select an option to determine how this pattern filter is scored and treated.

        Option

        Description

        Hard Block

        Adds a score of 100 to the email, causing it to be blocked.

        Hard Allow

        Subtracts a score of 100 from an email, causing it to be allowed.

        Soft Block

        Adds a configurable positive score, between 0.01 and 99.99 (default: 5).

        Soft Allow

        Subtracts a configurable negative score, between -0.01 and -99.99 (default: -5).

        Test Mode

        Use Test Mode to create a pattern filter that triggers when a match is found, but does not affect the score of the mail (score adjustment: 0).

    -   _Score_: This field can be edited to a custom value if Soft Block or Soft Allow is selected in the Rule Type field.

    -   _Status_: Select if you want this pattern filter to be **Active** or **Inactive**. Selecting Inactive prevents this pattern filter from triggering without having to delete it.

    -   _Pattern Filter_: Select either Built-in Rule or a pattern filter from the list of your existing pattern filters.

    -   _Value_: If you selected Built-in Rule from the Pattern Filter menu, enter the rule name here. If you selected an existing pattern filter from the Pattern Filter menu, the ID number for that rule automatically displays here.

    -   _Add Condition_: Select **Add Condition** to add another rule to this pattern filter. Choose either **AND** or **OR** to determine if just one or both rules need to be satisfied.

    -   _Add Group_: Select **Add Group** to add another rule, or set of rules, to this pattern filter. Choose either **AND** or **OR** to determine if just one or both groups of rules need to be satisfied.

3.  Repeat adding additional Pattern Filters and Values to build out your multi pattern filter as required.

4.  Select **Save Changes** to save changes to this multi pattern filter.
