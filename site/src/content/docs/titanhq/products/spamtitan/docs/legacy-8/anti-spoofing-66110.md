---
title: "Anti-Spoofing"
description: "Imported from docs.titanhq.com"
---

> Source: [docs.titanhq.com](https://docs.titanhq.com/en/66110-anti-spoofing.html)
> Product: SpamTitan
> Imported content type: docs_page
> Product stream: legacy

#### Anti-Spoofing

Email spoofing is the creation of an email with a forged sender address to intentionally mislead a recipient about its origin. This technique is often used in phishing campaigns and generally attempts to get a user to click a link and share their credentials or reply with sensitive information.

SpamTitan has five anti-spoof tests (described below) to help protect against email spoofing. These tests are carried out on:

-   Local domains with anti-spoofing enabled

-   Inbound email only

Go to **Filter Rules** > **Anti-Spoofing Settings** to enable (default: disabled) and manage anti-spoofing. See [Enabling Anti-Spoofing](/docs-test/titanhq/products/spamtitan/docs/legacy-8/enabling-anti-spoofing-66111/ "Enabling Anti-Spoofing") and [Anti-Spoofing Settings](/docs-test/titanhq/products/spamtitan/docs/legacy-8/anti-spoofing-settings-66112/ "Anti-Spoofing Settings").

Email Headers

SpamTitan Anti-spoofing tests check the full set of To/Cc headers, including:

<table><colgroup><col><col><col></colgroup><tbody><tr><td><p>To:</p></td><td><p>Apparently-Resent-To:</p></td><td><p>X-Original-To:</p></td></tr><tr><td><p>Apparently-To:</p></td><td><p>X-Envelope-To:</p></td><td><p>X-Rcpt-To:</p></td></tr><tr><td><p>Delivered-To:</p></td><td><p>Envelope-To:</p></td><td><p>X-Real-To:</p></td></tr><tr><td><p>Envelope-Recipients:</p></td><td><p>X-Delivered-To:</p></td><td><p>Cc:</p></td></tr><tr><td><p>Resent-To:</p></td><td><p>Resent-Cc:</p></td><td><p></p></td></tr></tbody></table>

Spam Scoring

For each test that triggers, an addition is made to the email's spam score. More than one test can trigger for a single email, in which case the scores are added together.

SpamTitan Anti-Spoofing Tests

-   ANTISPOOF\_DOMAIN: This test checks if the sender's and the recipient's domains are the same and that the SPF records match.

    If triggered, the test adds 25 to an email's spam score.

-   ANTISPOOF\_FUZZY\_DOMAIN: This test looks for a one or two character difference between the sender and recipient domain. For example, _domain.com_ would fuzzy match with _d0main.com_.

    If triggered, this test adds 5 to an email's spam score.

-   ANTISPOOF\_NAME: This test provides impersonation protection. Impersonation is when spam is sent using the _From_ name of a high profile person in a company, for example, the CEO. This test is automatically enabled when a full name is entered for a user on their user policy. A full name is at least two words (usually first name and last name), e.g. John Smith. Go to **Anti-Spam Engine** > **User Policies** to add or edit a user policy.

    If triggered, this test adds 5 to an email's spam score.

-   ANTISPOOF\_FUZZY\_NAME: This test provides additional impersonation protection by checking to see if the email sender's display name (From: name) fuzzy matches the full name (if it has been added) for a user policy. The test looks for a one or two character difference between the sender and full user name. For example, Jonathan Doe would fuzzy match with J0nathan Doe.

    If triggered, this test adds 5 to an email's spam score.

-   ANTISPOOF\_EMAIL\_ADDRESS: This test checks if someone from the same domain is spoofing by checking if the sender's full name on their user policy matches what is in the email.

    If triggered, this test adds 5 to an email's spam score.

User Names

The ANTISPOOF\_NAME test carries out a number of checks to compare a user's name as entered on their user policy with the email _From_ name. These checks are described in the table below.

Go to **Anti-Spam Engine** > **User Policies** to add or edit a user policy to include a user's full name.

<table><thead><tr><th><p>Check</p></th><th><p>Example, From: "John Smith" &lt;js@example.com&gt;</p></th></tr></thead><tbody><tr><td><p>Firstname Lastname</p></td><td><p>John Smith</p></td></tr><tr><td><p>Lastname, Firstname</p></td><td><p>Smith, John</p></td></tr><tr><td><p>F. Lastname <span><em>or </em></span>F Lastname</p></td><td><p>J. Smith <span><em>or</em></span> J Smith</p></td></tr><tr><td><p>Firstname L. <span><em>or </em></span>Firsname L</p></td><td><p>John S. <span><em>or</em></span> John S</p></td></tr><tr><td><p></p></td><td><p></p></td></tr></tbody></table>

More Information

For SpamTitan Gateway or Private Cloud admins, see [Mail Authentication](/docs-test/titanhq/products/spamtitan/docs/legacy-8/mail-authentication/ "Mail Authentication") for more information on SPF, DKIM, DMARC and ARC Signing.

## In this Section

-   [Enabling Anti-Spoofing](/docs-test/titanhq/products/spamtitan/docs/legacy-8/enabling-anti-spoofing-66111/)
-   [Anti-Spoofing Settings](/docs-test/titanhq/products/spamtitan/docs/legacy-8/anti-spoofing-settings-66112/)
