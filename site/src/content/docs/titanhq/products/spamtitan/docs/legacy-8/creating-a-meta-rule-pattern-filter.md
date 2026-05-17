---
title: "Creating a Meta Rule Pattern Filter"
description: "Imported from docs.titanhq.com"
---

> Source: [docs.titanhq.com](https://docs.titanhq.com/en/9012-creating-a-meta-rule-pattern-filter.html)
> Product: SpamTitan
> Imported content type: docs_page
> Product stream: legacy

##### Creating a Meta Rule Pattern Filter

A Meta Rule pattern filter allows you to create a filter that combines individual pattern filters that have **already been created** using the Test Mode rule type.

Therefore, before creating a Meta Rule pattern filter, you must first create the individual pattern filters that you wish to combine. See [Creating a Pattern Filter](/docs-test/titanhq/products/spamtitan/docs/legacy-8/creating-a-pattern-filter/ "Creating a Pattern Filter") on how to create individual pattern filters.

Once your individual pattern filters have been created, follow the steps below to create a new meta pattern filter.

1.  Log into SpamTitan as a Global Admin.

    :::note
    By default, pattern filtering is disabled for Domain Group Administrators and Domain Administrators. Please contact Support to enable pattern filtering for these roles on your account.
    :::

2.  Go to **Filter Rules** > **Pattern Filtering** and the _Pattern Filters_ window displays showing a list of your existing pattern filters. You must have at least two pattern filters with the rule type Test Mode that you want to combine to continue.

    ![ST\_test\_mode-list.jpg](/docs-test/imported-assets/spamtitan-legacy/9012-creating-a-meta-rule-pattern-filter/a72efb2320c1.jpg)

    You can use the filter bar at the top of the Pattern Filter list to view only one or a combination of filter types:

    ![ST-pattern\_filters-filter.jpg](/docs-test/imported-assets/spamtitan-legacy/9012-creating-a-meta-rule-pattern-filter/28c8873e5478.jpg)

3.  Click **Add...** and the _Pattern_ window displays.

4.  From the _Filter Expression:_ drop-down, choose **matches multiple rules**.

5.  A variation of the _Pattern_ window displays. Click the drop-down menu to see a list of your Test Mode rules. You can also select _Other_ from this drop-down menu to enter one of the rule sets that come built into SpamTitan. See [Spam Tests used by SpamTitan](/docs-test/titanhq/products/spamtitan/docs/legacy-8/spam-tests-used-by-spamtitan/ "Spam Tests used by SpamTitan") for more information.

    ![ST-matches-multiple-rules.jpg](/docs-test/imported-assets/spamtitan-legacy/9012-creating-a-meta-rule-pattern-filter/cd2bdc631b43.jpg)

6.  Select the first rule you want to use, e.g. _Regex: one (simple|easy) trick_ in our example above and click **Add...**.

    ![ST-select-rule.jpg](/docs-test/imported-assets/spamtitan-legacy/9012-creating-a-meta-rule-pattern-filter/193b900a187c.jpg)

    This rule is then added as shown:

    ![ST-select-rule-added.jpg](/docs-test/imported-assets/spamtitan-legacy/9012-creating-a-meta-rule-pattern-filter/cc027980804e.jpg)

7.  Select the second rule you want to use, e.g. _Contains: Doctors will hate you_ in our example and click **Add...**.

    ![ST-select-rule-2.jpg](/docs-test/imported-assets/spamtitan-legacy/9012-creating-a-meta-rule-pattern-filter/903d3a70c87d.jpg)

    This rule is then also added as shown:

    ![ST-select-rule2-added.jpg](/docs-test/imported-assets/spamtitan-legacy/9012-creating-a-meta-rule-pattern-filter/3b875c315a46.jpg)

8.  Choose AND or OR from the drop-down menu on the right to determine if just one or both rules need to be satisfied.

9.  To add further rules, click the **Add...** button as shown below. Continue to Step 12 if you do not want to add more rules.

    ![ST-select-rule-add-button.jpg](/docs-test/imported-assets/spamtitan-legacy/9012-creating-a-meta-rule-pattern-filter/4edad408c9d7.jpg)

10.  If you add more rules, choose AND or OR from the drop-down menu as shown below to determine if just one or both rule sets need to be satisfied:

     ![ST-select-add-button.jpg](/docs-test/imported-assets/spamtitan-legacy/9012-creating-a-meta-rule-pattern-filter/9b6a92abdef3.jpg)

11.  Repeat Steps 6 - 9 above to add another ruleset.

12.  Your Meta Rule should look something similar to this example:

     ![ST-complete-rule.jpg](/docs-test/imported-assets/spamtitan-legacy/9012-creating-a-meta-rule-pattern-filter/52bd25682dae.jpg)

13.  Using the Meta Rule Pattern Filter Settings table below as a reference, complete the _Rule Type:_, _Comment:_ and _Disable Rules:_ fields.

14.  Click **Save** to save your meta-rule or **Cancel** to discard.

###### Meta Rule Pattern Filter Settings

<table><colgroup><col><col><col></colgroup><thead><tr><th><p>Field</p></th><th colspan="2"><p>Description</p></th></tr></thead><tfoot><tr><td colspan="3"><p></p></td></tr></tfoot><tbody><tr><td><p>Filter Expression:</p></td><td colspan="2"><p>Select <span><em>Matches Multiples Rules</em></span> to create a meta-rule filter.</p></td></tr><tr><td><p>Rule Type:</p></td><td colspan="2"><p>Determines how the test should be scored/treated.</p></td></tr><tr><td><p></p></td><td><p>Hard Block</p></td><td><p>Adds a score of 100 to the email, causing it to be blocked.</p></td></tr><tr><td><p></p></td><td><p>Hard Allow</p></td><td><p>Subtracts a score of 100 from an email, causing it to be allowed.</p></td></tr><tr><td><p></p></td><td><p>Soft Block</p></td><td><p>Adds a configurable positive score, between 0.01 and 99.99 (default: 5).</p></td></tr><tr><td><p></p></td><td><p>Soft Allow</p></td><td><p>Subtracts a configurable negative score, between -0.01 and -99.99 (default: 5).</p></td></tr><tr><td><p></p></td><td><p></p></td><td><p></p></td></tr><tr><td><p>Comment:</p></td><td colspan="2"><p>Add additional notes for the rule.</p></td></tr><tr><td><p>Disable Rule:</p></td><td colspan="2"><p>Check to prevent a rule from triggering without deleting the rule.</p></td></tr></tbody></table>

## In this Section

-   [Meta Rule Pattern Filter Settings](/docs-test/titanhq/products/spamtitan/docs/legacy-8/creating-a-meta-rule-pattern-filter/)
