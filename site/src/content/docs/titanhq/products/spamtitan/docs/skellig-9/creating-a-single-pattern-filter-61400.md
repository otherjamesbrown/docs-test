---
title: "Creating a Single Pattern Filter"
description: "Imported from support.titanhq.com"
---

> Source: [support.titanhq.com](https://support.titanhq.com/en/61400-creating-a-single-pattern-filter.html)
> Product: SpamTitan
> Imported content type: docs_page
> Product stream: skellig

#### Creating a Single Pattern Filter

A single pattern filter contains one rule that is matched against your incoming email.

You can also create a multi pattern filter, which allows you to combine pattern filters you have already created. See [Creating a Multi Pattern Filter](/docs-test/titanhq/products/spamtitan/docs/skellig-9/creating-a-multi-pattern-filter-65246/ "Creating a Multi Pattern Filter").

Go to **Filtering** > **Pattern Filtering** and follow the steps below to create a _single_ pattern filter.

1.  Select **Add** > **Single Pattern** and the Create a Single Pattern Filter window displays.

2.  Complete the fields as follows:

    -   _Pattern Name_: Assign a name to this pattern filter. This is useful when searching for patterns in the Pattern Filtering table.

    -   _Pattern Description_: Provide an (optional) description of this pattern filter. This is useful for searching patterns in the Pattern Filtering table.

    -   _Pattern Expression_: Select how this pattern filter is evaluated. Select one of the following:

        Option

        Description

        Starts with

        The body or header must start with this value.

        :::note
        If _Starts with_ is selected and _Apply to body_ is selected, the subject line is seen as the start of the body. In this case, the subject line is filtered and not the body."
        :::

        Ends with

        The body or header must end with this value.

        Matches regular expression

        Enter a regular expression to match against the body or header.

        See [https://www.regular-expressions.info](https://www.regular-expressions.info/) ![small\_external\_link.png](/docs-test/imported-assets/spamtitan-skellig/61400-creating-a-single-pattern-filter/5e6d767515b2.png) for information on using regular expression.

        Matches any word in

        Enter a list of words separated by a space. If any word on the list is in the body or header, the pattern filter will trigger.

        Contains

        The body or header must contain this value.

        Equals

        The body or header must be exactly equal to this value.

    -   _Value_: Enter an expression value. Expression values are case-insensitive.

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

        :::note
        Test mode can be selected when creating a single or a multi pattern filter. However, this mode only executes when rules are combined as part of a multi pattern filter.
        :::

    -   _Score_: This field can be edited to a custom value if Soft Block or Soft Allow is selected in the Rule Type field.

    -   _Apply to Headers_: By default, a pattern filter triggers on any header. Therefore, if this field is selected and left empty, the pattern filter is triggered on all headers.

        However, you can chose to enter only certain email headers. In this case, the pattern is triggered on only the headers you enter. For example, you can enter To, From, Cc, Subject, ALL, X-Header-From-Another-Box, Received.

        ![ST-SK-pattern-filter-header-box.jpg](/docs-test/imported-assets/spamtitan-skellig/61400-creating-a-single-pattern-filter/1c4c54511c8d.jpg)

        -   Enter one header per line.

        -   Syntax is either _From_ or _From:_

        -   The following special header rules can also be entered:

            Header Rule

            Description

            EnvelopeFrom

            Triggers on the Envelope MAIL FROM instead of the From header.

            ToCc

            Triggers on both the To and Cc headers.

            ALL

            The rule will trigger on any header.

        -   The following three options are also available to append to a header. For example, _From:addr_.

            Option

            Description

            :raw

            Append to the end of a header to prevent decoding of quoted-printable or base64 encoded headers.

            :addr

            Append to the end of a From or To header to make the rule only trigger on the address in the header.

            :name

            Append to the end of a From or To header to make the rule only trigger on the name in the header.

    -   _Apply to Body_: Select to trigger this pattern filter on the body of an email (default: ON).

        -   _Use Rawbody_: Select to allow your body rules to trigger on the HTML of an email.

            :::danger[Warning]
            Rawbody tests can cause excessive CPU usage and cause mail queues, so use with caution.
            :::

3.  Select **Create** to create this single pattern filter or **Cancel** to discard.
