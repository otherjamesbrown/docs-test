---
title: "Creating a Pattern Filter"
description: "Imported from docs.titanhq.com"
---

> Source: [docs.titanhq.com](https://docs.titanhq.com/en/9010-creating-a-pattern-filter.html)
> Product: SpamTitan
> Imported content type: docs_page
> Product stream: legacy

##### Creating a Pattern Filter

Follow the steps below to create a new pattern filter in SpamTitan.

For information on creating a meta pattern filter, which combines multiple rules that have been created using the Test Mode rule type, see [Creating a Meta Rule Pattern Filter](/docs-test/titanhq/products/spamtitan/docs/legacy-8/creating-a-meta-rule-pattern-filter/ "Creating a Meta Rule Pattern Filter").

1.  Log into SpamTitan as a Global Admin.

    :::note
    By default, pattern filtering is disabled for Domain Group Administrators and Domain Administrators but can be enabled for these roles by your account's Global Administrator.
    :::

2.  Go to **Filter Rules** > **Pattern Filtering** and the _Pattern Filters_ window displays:

    ![ST-pattern-filters.jpg](/docs-test/imported-assets/spamtitan-legacy/9010-creating-a-pattern-filter/99ef891252b7.jpg)

    You can use the filter bar at the top of the Pattern Filter list to view only one or a combination of filter types:

    ![ST-pattern\_filters-filter.jpg](/docs-test/imported-assets/spamtitan-legacy/9010-creating-a-pattern-filter/28c8873e5478.jpg)

3.  Click **Add...** and the _Pattern_ window displays:

    ![ST-add-pattern-filter.jpg](/docs-test/imported-assets/spamtitan-legacy/9010-creating-a-pattern-filter/c87bbf8afbf9.jpg)

4.  Using the table below as a reference, complete the fields in the _Pattern_ window.

    :::note
    If you want to create a Meta Pattern Filter, you must first create individual pattern filters using the Test Mode rule type that you can then combine to create a Meta pattern filter.
    :::

5.  Click **Save** to save your pattern, or **Cancel** to discard it.

###### Pattern Settings

Field

Description

Filter Expression:

This is how the pattern filter will be evaluated. All expressions are case-insensitive.

_Starts with_

The body or header must start with this value.

_Ends with_

The body or header must end with this value.

_Contains_

The body or header must contain this value.

_Equals_

The body or header must be exactly equal to this value.

_Matches any word in_

Enter a list of words separated by a space. If any word on the list is in the body or header, the pattern filter will trigger.

_Matches regular expression_

Enter a regular expression to match against the body or header. See [https://www.regular-expressions.info](https://www.regular-expressions.info/) for information on using regular expression.

_Matches multiple rules_

Select this option to match multiple rules you have already created using the Test Mode rule type. See [Creating a Meta Rule Pattern Filter](/docs-test/titanhq/products/spamtitan/docs/legacy-8/creating-a-meta-rule-pattern-filter/ "Creating a Meta Rule Pattern Filter").

Apply to Body:

Check for this test to trigger on the body of an email.

_Use Rawbody_

Check this to allow your body rules to trigger on the HTML of an email.

"The rawbody directive defines a test to be applied to the text of a message, as it would be likely to appear to a person reading the message in an HTML-based mail client. The _Subject_ header is _not_ included. All textual MIME components of the message are decoded, and the message is split into lines based on the line breaks in the message. The test is then applied to each message line."

_Excerpt from SpamAssassin, by Alan Schwartz (2004)_

:::danger[Warning]
Rawbody tests can cause excessive CPU usage and cause mail queues, so use with caution.
:::

Apply to Headers:

Check this to enter a header (one per line) for the pattern filter to trigger on. Leave empty to trigger on _any_ header.

Enter one header per line. Syntax is either _From_ or _From:_.

Any email header can be entered here, e.g. To, From, Cc, Subject, ALL, X-Header-From-Another-Box, Received. See [this wiki](https://en.wikipedia.org/wiki/Email#Header) for a list of common headers.

Special header rules are as follows:

_EnvelopeFrom_

Triggers on the _Envelope MAIL FROM_ instead of the _From_ header.

_ToCc_

Triggers on both the _To_ and _Cc_ headers.

_ALL_

The rule will trigger on any header.

There are also three options available to append to a header:

_:raw_

Append to the end of a header to prevent decoding of quoted-printable or base64 encoded headers.

_:addr_

Append to the end of a _From_ or _To_ header to make the rule only trigger on the address in the header.

_:name_

Append to the end of a _From_ or _To_ header to make the rule only trigger on the name in the header.

Rule Type:

Determines how the test should be scored/treated.

_Test Mode_

Test Mode does not affect the score of the mail, it is used to create meta pattern filters with "Matches multiple rules".

_Hard Block_

Adds a score of 100 to the email, causing it to be blocked.

_Hard Allow_

Subtracts a score of 100 from an email, causing it to be allowed.

_Soft Block_

Adds a configurable positive score, between 0.01 and 99.99 (default: 5).

_Soft Allow_

Subtracts a configurable negative score, between -0.01 and -99.99 (default: 5).

Comment:

Add additional notes for the rule.

Disable Rule:

Check to prevent a rule from triggering without deleting the rule.

## In this Section

-   [Pattern Settings](/docs-test/titanhq/products/spamtitan/docs/legacy-8/creating-a-pattern-filter/)
