---
title: "Pattern Filtering"
description: "Imported from support.titanhq.com"
---

> Source: [support.titanhq.com](https://support.titanhq.com/en/61399-pattern-filtering.html)
> Product: SpamTitan
> Imported content type: docs_page
> Product stream: skellig

### Pattern Filtering

Pattern filters allow you to block or accept emails based on filter rules that can be applied to an email subject, header or body. Pattern filtering is generally not needed, but occasionally it may be necessary to define filters that block or accept emails that are being incorrectly classified. You can create either a single pattern filter or a multi pattern filter.

-   _Single Pattern_: A single pattern filter contains one rule that is matched against your incoming email. See [Creating a Single Pattern Filter](/docs-test/titanhq/products/spamtitan/docs/skellig-9/creating-a-single-pattern-filter-65244/ "Creating a Single Pattern Filter").

-   _Multi Pattern_: You can build a multi pattern filter that combines any existing pattern filters that have already been created. SpamTitan's built-in rules can also be used when creating a multi pattern filter. See [Creating a Multi Pattern Filter](/docs-test/titanhq/products/spamtitan/docs/skellig-9/creating-a-multi-pattern-filter-65246/ "Creating a Multi Pattern Filter").

Go to **Filtering** > **Pattern Filtering** to create and manage pattern filters.

-   Use the search ![search-box.jpg](/docs-test/imported-assets/spamtitan-skellig/61399-pattern-filtering/84196d80bff8.jpg) box to search the list of pattern filters.

-   Select the column ![column-icon.jpg](/docs-test/imported-assets/spamtitan-skellig/61399-pattern-filtering/264f4fd45b19.jpg) icon to display the table column names. Slide each on and off to view or hide a column.

-   To delete a pattern filter, select the box ![selected-check-box.jpg](/docs-test/imported-assets/spamtitan-skellig/61399-pattern-filtering/290997c07565.jpg) beside the pattern filter(s) and select **Delete**.

    :::note
    A single pattern filter that is in use as part of a multi pattern filter can not be deleted.
    :::

-   The following information is available for each pattern filter:

    -   _ID_: A unique ID automatically assigned to a pattern filter when created. If a pattern filter is used in building a multi-pattern filter, this ID is used to identify it. For example, a pattern filter with ID _123_ will show _RULE\_123_ in the Value field.

    -   _Pattern Name_: The name assigned to this pattern filter.

    -   _Condition & Value_: How a pattern filter is evaluated.

    -   _Pattern Type_: Either Single Pattern or Multi Pattern.

    -   _Rule Type_: How this pattern filter is scored and treated.

    -   _Status_: A pattern filter can be active or Inactive. An inactive pattern filter executes, but does not impact the spam score.

    -   _Description_: An optional description of this pattern filter.

## In this Section

-   [Creating a Single Pattern Filter](/docs-test/titanhq/products/spamtitan/docs/skellig-9/creating-a-single-pattern-filter-61400/)
-   [Editing a Single Pattern Filter](/docs-test/titanhq/products/spamtitan/docs/skellig-9/editing-a-single-pattern-filter-61401/)
-   [Creating a Multi Pattern Filter](/docs-test/titanhq/products/spamtitan/docs/skellig-9/creating-a-multi-pattern-filter-61402/)
-   [Editing a Multi Pattern Filter](/docs-test/titanhq/products/spamtitan/docs/skellig-9/editing-a-multi-pattern-filter-61849/)
