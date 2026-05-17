---
title: "Content Filtering"
description: "Imported from docs.titanhq.com"
---

> Source: [docs.titanhq.com](https://docs.titanhq.com/en/8951-content-filtering.html)
> Product: SpamTitan
> Imported content type: docs_page
> Product stream: legacy

#### Content Filtering

Content filtering allows you to create custom filters for inbound and outbound email and take a specified action on any email that matches a filter. Content filtering is recommended if:

-   You want to take an action on an email that can not be done using pattern filtering, such as a redirect, delete, bounce or ignore. See [Pattern Filtering](/docs-test/titanhq/products/spamtitan/docs/legacy-8/pattern-filtering/ "Pattern Filtering").

-   You want to bypass virus filtering or attachment filtering using allow lists.

Go to **Content Filtering** > **Content Filtering** to add, edit and delete content filters.

Pre-defined Content Filters

Three pre-defined content filters are already in place in SpamTitan Gateway:

:::note
The pre-defined filters are designed to match _most_ formats for credit card numbers and social security numbers. However, as numbers can be formatted in multiple ways, the filter patterns may not catch all messages containing credit card numbers or social security numbers. Also, as the filter looks for a specific pattern of numbers, it is possible that numeric patterns that are not credit card numbers or social security numbers may be matched.
:::

1.  _Credit Card Numbers:_ When enabled, this filter scans for content matching credit card numbers. Messages containing Visa, Mastercard, Discovery, American Express or Diners Club card numbers will be subject to the specified action.

2.  _Social Security Numbers:_ When enabled, this filter scans messages for U.S. social security numbers. Messages containing social security numbers matching the pattern nnn-nn-nnnn are subject to the specified action. The pattern checks for valid social security numbers by ensuring the pattern does not contain a group of digits that are all zeros, such as in 000-11-1111, 111-00-1111, or 111-11-0000.

3.  _X-Originating-IP:_ This filter is only enabled in SpamTitan cloud builds. When enabled, the filter strips any headers that may be added by a MTA (Message Transfer Agent), as they can cause email to be blocked after RBL testing.

Adding, Editing or Deleting a Content Filter

-   To add a new content filter, click **Add...** and the Add Filter window displays. Using the table below, complete the fields. Click **Save** to save this content filter.

-   To edit an existing content filter, click the edit ![ST-701-edit-button.jpg](/docs-test/imported-assets/spamtitan-legacy/8951-content-filtering/7455a85c9b68.jpg) button in the Options column and the Edit Filter window displays. Using the table below as a reference, edit the fields. Click **Save** to save this content filter.

-   To delete a single content filter, click the delete ![ST-701-delete-button.jpg](/docs-test/imported-assets/spamtitan-legacy/8951-content-filtering/3b2dc809e314.jpg) button in the options column. To delete multiple content filters, check the box ![ST-701-check-box.jpg](/docs-test/imported-assets/spamtitan-legacy/8951-content-filtering/d19d75015111.jpg) beside the names of the filters you want to delete and click **Delete**.

<table><colgroup><col><col></colgroup><thead><tr><th><p>Field</p></th><th><p>Description</p></th></tr></thead><tbody><tr><td><p><span><strong>Filter Name:</strong></span></p></td><td><p>A descriptive name for this content filter.</p></td></tr><tr><td><p><span><strong>Status:</strong></span></p></td><td><p>Select ON to enable this filter or OFF to disable this filter.</p></td></tr><tr><td><p><span><strong>Filter Expression:</strong></span></p></td><td><p>Add or edit a filter rule where the message content for the specified location:</p><div><ul><li><p><span><em>starts with:</em></span> begins with the specified value.</p></li><li><p><span><em>ends with:</em></span> ends with the specified value.</p></li><li><p><span><em>contains: </em></span>contains the specified value. This option matches whole words <span>and</span> parts of words. For example, if the value specified is <span><em>sex</em></span>, and the rule is applied to the message body if the body contains the word <span><em>sex</em></span> or <span><em>unisex</em></span>, or then the rule will match.</p><p>To match messages with just the word <span><em>sex</em></span>, use 'matches any word in' or 'matches regular expression' filter options.</p></li><li><p><span><em>equals:</em></span> contains only the specified value. For example, if <span><em>Free Hotel Rooms</em></span> is specified and the filter is applied to the Subject: header, then the filter will match only if the subject contains the text <span><em>Free Hotel Rooms</em></span>, and no other text.</p></li><li><p><span><em>matches any word in:</em></span> contains <span>any</span> word listed in the specified value. Separate words with spaces.</p></li><li><p><span><em>matches regular expression:</em></span> matches the specified regular expression value. See <a href="/docs-test/titanhq/products/spamtitan/docs/legacy-8/using-regular-expression/" title="Using Regular Expression">Using Regular Expression</a> for information on writing regular expressions.</p></li></ul></div></td></tr><tr><td><p>Value:</p></td><td><p>The specified value, or content, that this filter looks to match. If <span><em>starts with</em></span>, <span><em>ends with</em></span>, <span><em>contains</em></span>, <span><em>equals</em></span>, or <span><em>matches any word in</em></span> is selected above:</p><div><ul><li><p>The value must be a word or phrase.</p></li><li><p>The value is not case sensitive.</p></li></ul></div><p>If <span><em>matches regular expression</em></span> is selected above:</p><div><ul><li><p>The value can be a regular expression. Regular expression is used to scan messages for text patterns, rather than specific words or phrases.</p></li><li><p>The regular expression syntax is validated as you type. If the syntax is invalid, the field is highlighted in red.</p></li></ul></div></td></tr><tr><td><p>Dot matches new lines:</p></td><td><p>Displays when <span><em>matches regular expression</em></span> is selected from Filter Expression: drop-down. This option makes the dot (.) in regular expression match new line characters (\n). Enabling this option allows matching a word at the beginning of an email's body and a word at the end of an email's body with one regular expression.</p></td></tr><tr><td><p>Test Filter:</p></td><td><p>Enter sample text to test if your filter expression is correct and matches. If the filter rule matches the text entered, the field is highlighted in green.</p></td></tr><tr><td><p><span><strong>Apply to Body:</strong></span></p></td><td><p>Check to apply the rule to the body of the message.</p></td></tr><tr><td><p><span><strong>Apply to Headers:</strong></span></p></td><td><p>Check to apply the rule to message headers. Enter the headers in the text box provided; one header per line. For example, to apply the filter to the subject header, enter Subject or Subject:. The rule will match if it is found in any of the specified headers.</p><p>To apply the rule to all headers, leave this field blank.</p></td></tr><tr><td><p><span><strong>Inbound/Outbound Action:</strong></span></p></td><td><p>Select from one of these actions if an inbound or outbound message matches this filter rule:</p><div><ul><li><p><span><em>Delete:</em></span> discard the message with no notification to the sender or recipient.</p></li><li><p><span><em>Redirect to Relay:</em></span> relay the message to a different SMTP relay host. In the <span><em>Relay:</em></span> field, enter the fully qualified hostname or IP address of the relay host. Specify a domain, host, host:port, [host]:port, [address] or [address]:port; the form [host] turns off MX lookups.</p></li><li><p><span><em>Redirect to User:</em></span> redirect the message to the specified email address. In the <span><em>User:</em></span> field, enter the email address of the recipient. The message will be sent to this address instead of the intended recipient(s). This action affects all recipients of the message.</p></li><li><p><span><em>Bounce:</em></span> reject the message. The sender will receive a bounce message.</p></li><li><p><span><em>Allow:</em></span> send the message to the intended recipient(s), bypassing all spam checking.</p></li><li><p><span><em>Quarantine</em></span>: quarantine the message.</p></li><li><p><span><em>BCC:</em></span> add the specified address as a blind carbon-copy (BCC) recipient.</p></li><li><p><span><em>Ignore:</em></span> silently delete the matching line from the message, and inspect the next input line.</p></li><li><p><span><em>Off:</em></span> disable the rule.</p></li></ul></div></td></tr><tr><td><p><span><strong>Comment:</strong></span></p></td><td><p>An optional comment on this filter.</p></td></tr></tbody></table>

## In this Section

-   [Using Regular Expression](/docs-test/titanhq/products/spamtitan/docs/legacy-8/using-regular-expression/)
