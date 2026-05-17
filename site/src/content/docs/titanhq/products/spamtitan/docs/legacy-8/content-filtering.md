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

Field

Description

**Filter Name:**

A descriptive name for this content filter.

**Status:**

Select ON to enable this filter or OFF to disable this filter.

**Filter Expression:**

Add or edit a filter rule where the message content for the specified location:

-   _starts with:_ begins with the specified value.

-   _ends with:_ ends with the specified value.

-   _contains:_ contains the specified value. This option matches whole words and parts of words. For example, if the value specified is _sex_, and the rule is applied to the message body if the body contains the word _sex_ or _unisex_, or then the rule will match.

    To match messages with just the word _sex_, use 'matches any word in' or 'matches regular expression' filter options.

-   _equals:_ contains only the specified value. For example, if _Free Hotel Rooms_ is specified and the filter is applied to the Subject: header, then the filter will match only if the subject contains the text _Free Hotel Rooms_, and no other text.

-   _matches any word in:_ contains any word listed in the specified value. Separate words with spaces.

-   _matches regular expression:_ matches the specified regular expression value. See [Using Regular Expression](/docs-test/titanhq/products/spamtitan/docs/legacy-8/using-regular-expression/ "Using Regular Expression") for information on writing regular expressions.

Value:

The specified value, or content, that this filter looks to match. If _starts with_, _ends with_, _contains_, _equals_, or _matches any word in_ is selected above:

-   The value must be a word or phrase.

-   The value is not case sensitive.

If _matches regular expression_ is selected above:

-   The value can be a regular expression. Regular expression is used to scan messages for text patterns, rather than specific words or phrases.

-   The regular expression syntax is validated as you type. If the syntax is invalid, the field is highlighted in red.

Dot matches new lines:

Displays when _matches regular expression_ is selected from Filter Expression: drop-down. This option makes the dot (.) in regular expression match new line characters (\\n). Enabling this option allows matching a word at the beginning of an email's body and a word at the end of an email's body with one regular expression.

Test Filter:

Enter sample text to test if your filter expression is correct and matches. If the filter rule matches the text entered, the field is highlighted in green.

**Apply to Body:**

Check to apply the rule to the body of the message.

**Apply to Headers:**

Check to apply the rule to message headers. Enter the headers in the text box provided; one header per line. For example, to apply the filter to the subject header, enter Subject or Subject:. The rule will match if it is found in any of the specified headers.

To apply the rule to all headers, leave this field blank.

**Inbound/Outbound Action:**

Select from one of these actions if an inbound or outbound message matches this filter rule:

-   _Delete:_ discard the message with no notification to the sender or recipient.

-   _Redirect to Relay:_ relay the message to a different SMTP relay host. In the _Relay:_ field, enter the fully qualified hostname or IP address of the relay host. Specify a domain, host, host:port, \[host\]:port, \[address\] or \[address\]:port; the form \[host\] turns off MX lookups.

-   _Redirect to User:_ redirect the message to the specified email address. In the _User:_ field, enter the email address of the recipient. The message will be sent to this address instead of the intended recipient(s). This action affects all recipients of the message.

-   _Bounce:_ reject the message. The sender will receive a bounce message.

-   _Allow:_ send the message to the intended recipient(s), bypassing all spam checking.

-   _Quarantine_: quarantine the message.

-   _BCC:_ add the specified address as a blind carbon-copy (BCC) recipient.

-   _Ignore:_ silently delete the matching line from the message, and inspect the next input line.

-   _Off:_ disable the rule.

**Comment:**

An optional comment on this filter.

## In this Section

-   [Using Regular Expression](/docs-test/titanhq/products/spamtitan/docs/legacy-8/using-regular-expression/)
