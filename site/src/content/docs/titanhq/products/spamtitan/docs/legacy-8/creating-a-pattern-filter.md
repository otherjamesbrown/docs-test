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

<table><colgroup><col><col><col></colgroup><thead><tr><th><p>Field</p></th><th colspan="2"><p>Description</p></th></tr></thead><tfoot><tr><td><p></p></td><td><p></p></td><td><p></p></td></tr></tfoot><tbody><tr><td><p>Filter Expression:</p></td><td colspan="2"><p>This is how the pattern filter will be evaluated.&nbsp;All expressions are case-insensitive.</p></td></tr><tr><td><p></p></td><td><p><span xml:lang="en" lang="en" dir="ltr"><em>Starts with</em></span></p></td><td><p>The body or header must start with this value.</p></td></tr><tr><td><p></p></td><td><p><span xml:lang="en" lang="en" dir="ltr"><em>Ends with</em></span></p></td><td><p>The body or header must end with this value.</p></td></tr><tr><td><p></p></td><td><p><span xml:lang="en" lang="en" dir="ltr"><em>Contains</em></span></p></td><td><p>The body or header must contain this value.</p></td></tr><tr><td><p></p></td><td><p><span xml:lang="en" lang="en" dir="ltr"><em>Equals</em></span></p></td><td><p>The body or header must be exactly equal to this value.</p></td></tr><tr><td><p></p></td><td><p><span xml:lang="en" lang="en" dir="ltr"><em>Matches any word in</em></span></p></td><td><p>Enter a list of words separated by a space. If any word on the list is in the body or header, the pattern filter will trigger.</p></td></tr><tr><td><p></p></td><td><p><span xml:lang="en" lang="en" dir="ltr"><em>Matches regular expression</em></span></p></td><td><p>Enter a regular expression to match against the body or header. See&nbsp;<a href="https://www.regular-expressions.info/" target="_blank" rel="noopener">https://www.regular-expressions.info</a> for information on using regular expression.</p></td></tr><tr><td><p></p></td><td><p><span xml:lang="en" lang="en" dir="ltr"><em>Matches multiple rules</em></span></p></td><td><p>Select this option to match multiple rules you have already created using the Test Mode rule type. See <a href="/docs-test/titanhq/products/spamtitan/docs/legacy-8/creating-a-meta-rule-pattern-filter/" title="Creating a Meta Rule Pattern Filter">Creating a Meta Rule Pattern Filter</a>.</p></td></tr><tr><td colspan="3"><p></p></td></tr><tr><td><p>Apply to Body:</p></td><td colspan="2"><p>Check for this test to trigger on the body of an email.</p></td></tr><tr valign="top"><td><p></p></td><td><p><span xml:lang="en" lang="en" dir="ltr"><em>Use Rawbody</em></span></p></td><td><p>Check this to allow your body rules to trigger on the HTML of an email.&nbsp;</p><p>"The rawbody directive defines a test to be applied to the text of a message, as it would be likely to appear to a person reading the message in an HTML-based mail client. The <span><em>Subject</em></span> header is <span><em>not</em></span> included. All textual MIME components of the message are decoded, and the message is split into lines based on the line breaks in the message. The test is then applied to each message line."</p><p><sup><span><em>Excerpt from SpamAssassin, by&nbsp;Alan Schwartz (2004)</em></span></sup></p></td></tr><tr><td><p></p></td><td colspan="2"><div dir="ltr" data-import-admonition="danger" data-import-admonition-title="Warning"><h3>Warning</h3><p>Rawbody tests can cause excessive CPU usage and cause mail queues, so use with caution.</p></div></td></tr><tr><td colspan="3"><p></p></td></tr><tr valign="top"><td><p>Apply to Headers:</p></td><td colspan="2"><p>Check this to enter a header (one per line) for the pattern filter to trigger on. Leave empty to trigger on <span><em>any</em></span> header.&nbsp;</p><p>Enter one header per line. Syntax is either&nbsp;<span><em>From</em></span>&nbsp;or&nbsp;<span><em>From:</em></span>.</p><p>Any email header can be entered here, e.g. To, From, Cc, Subject, ALL, X-Header-From-Another-Box, Received.&nbsp;See&nbsp;<a href="https://en.wikipedia.org/wiki/Email#Header" target="_blank" rel="noopener">this wiki</a>&nbsp;for a list of common headers.</p><p>Special header rules are as follows:</p></td></tr><tr><td><p></p></td><td><p><span xml:lang="en" lang="en" dir="ltr"><em>EnvelopeFrom</em></span></p></td><td><p>Triggers on the <span><em>Envelope MAIL FROM</em></span> instead of the <span><em>From</em></span> header.</p></td></tr><tr><td><p></p></td><td><p><span xml:lang="en" lang="en" dir="ltr"><em>ToCc</em></span></p></td><td><p>Triggers on both the <span><em>To</em></span>&nbsp;and&nbsp;<span><em>Cc</em></span> headers.</p></td></tr><tr><td><p></p></td><td><p><span xml:lang="en" lang="en" dir="ltr"><em>ALL</em></span></p></td><td><p>The rule will trigger on any header.</p></td></tr><tr><td><p></p></td><td colspan="2"><p>There are also three options available to append to a header:</p></td></tr><tr><td><p></p></td><td><p><span xml:lang="en" lang="en" dir="ltr"><em>:raw</em></span></p></td><td><p>Append to the end of a header to prevent decoding of quoted-printable or base64 encoded headers.</p></td></tr><tr><td><p></p></td><td><p><span xml:lang="en" lang="en" dir="ltr"><em>:addr</em></span></p></td><td><p>Append to the end of a <span><em>From</em></span> or <span><em>To</em></span> header to make the rule only trigger on the address in the header.</p></td></tr><tr><td><p></p></td><td><p><span xml:lang="en" lang="en" dir="ltr"><em>:name</em></span></p></td><td><p>Append to the end of a <span><em>From</em></span> or <span><em>To</em></span> header to make the rule only trigger on the name in the header.</p></td></tr><tr><td colspan="3"><p></p></td></tr><tr><td><p>Rule Type:</p></td><td colspan="2"><p>Determines how the test should be scored/treated.</p></td></tr><tr><td><p></p></td><td><p><span xml:lang="en" lang="en" dir="ltr"><em>Test Mode</em></span></p></td><td><p>Test Mode does not affect the score of the mail, it is used to create meta pattern filters with "Matches multiple rules".</p></td></tr><tr><td><p></p></td><td><p><span xml:lang="en" lang="en" dir="ltr"><em>Hard Block</em></span></p></td><td><p>Adds a score of 100 to the email, causing it to be blocked.</p></td></tr><tr><td><p></p></td><td><p><span xml:lang="en" lang="en" dir="ltr"><em>Hard Allow</em></span></p></td><td><p>Subtracts a score of 100 from an email, causing it to be allowed.</p></td></tr><tr><td><p></p></td><td><p><span xml:lang="en" lang="en" dir="ltr"><em>Soft Block</em></span></p></td><td><p>Adds a configurable positive score, between 0.01 and 99.99 (default: 5).</p></td></tr><tr><td><p></p></td><td><p><span xml:lang="en" lang="en" dir="ltr"><em>Soft Allow</em></span></p></td><td><p>Subtracts a configurable negative score, between -0.01 and -99.99 (default: 5).</p></td></tr><tr><td colspan="3"><p></p></td></tr><tr><td><p>Comment:</p></td><td colspan="2"><p>Add additional notes for the rule.</p></td></tr><tr><td><p>Disable Rule:</p></td><td colspan="2"><p>Check to prevent a rule from triggering without deleting the rule.</p></td></tr></tbody></table>

## In this Section

-   [Pattern Settings](/docs-test/titanhq/products/spamtitan/docs/legacy-8/creating-a-pattern-filter/)
