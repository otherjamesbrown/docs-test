---
title: "Add a New User Policy"
description: "Imported from docs.titanhq.com"
---

> Source: [docs.titanhq.com](https://docs.titanhq.com/en/758-add-a-new-user-policy.html)
> Product: SpamTitan
> Imported content type: docs_page
> Product stream: legacy

##### Add a New User Policy

To add a new user policy:

1.  Go to **Anti-Spam Engine** > **User Policies**.

2.  Click the **Add…** button.

3.  Using the table below as a reference, complete the **Add User Policy** window.

4.  Click **Apply** to save changes.

:::tip
Once a user policy has been added, you can view the interface as that user by impersonating them. See [Impersonating](/docs-test/titanhq/products/spamtitan/docs/legacy-8/impersonating-884/ "Impersonating") to learn more.
:::

###### User Policy Settings

Field

Description

**Email Address(es):**

Specify one or more email addresses to create user policies for. If adding multiple addresses, put each email address on a new line.

**User's Full Name:**

To elicit information or money, phishers sometimes attempt to impersonate users with a high position in a company, for example, the CEO or CFO.

To help prevent this, enter a user's full name here. Email from an _external_ network with this name in the 'From:' header (or a mild variation of the name) is more likely to be blocked as spam.

See [SpamTitan Cloud Anti-Spoofing](https://docs.titanhq.com/document/preview/4238#UUID-76dfa006-a3ce-8a67-623a-f4e26db58f58).SpamTitan Cloud Anti-Spoofing

**User Role:**

Select from User Roles which have been created in Anti-Spam Engine > Roles and Permissions > User Roles.

**Spam Filtering:**

Specifies whether spam filtering is enabled for this user. Default is enabled.

Consider mail spam when score is greater than:

This is the scoring threshold above which mail is considered to be spam for this user. Default is 5.

Spam should be:

_Quarantined_: The message is accepted but quarantined (default setting).

_Passed (Tagged)_: The message is analyzed as normal and passed to the end recipient(s). Headers are added so the message can be filtered on the back-end.

You can add text to the email subject header indicating that the message has been identified as spam. To do this, enable 'Spam Modifies Subject' and specify an appropriate Spam Subject Tag (default is \[ \*\* SPAM \*\* \]).

:::note
Selecting _Passed (Tagged)_ bypasses allow and block lists and delivers an email to the user mailbox.
:::

_Rejected_: The message is rejected. The default action is to quarantine all messages that exceed the spam threshold.

Discard Spam scoring above:

Messages scoring above the specified score will not be quarantined. Default is 999.

Add X-Spam headers to non-spam mails:

Specifies if additional headers are added to the message indicating the result of the spam analysis. Default is enabled.

**Virus Filtering:**

Specifies whether virus filtering is enabled for the selected user. Default is enabled.

**Attachment Type Filtering:**

Specifies if a corporate message attachment policy will be applied to messages to the selected user. Default is enabled.

Banned Attachments should be:

Select action to be performed when a message is identified as containing a virus attachment. Default action is Quarantined.

**Archive Email:**

Specifies if all clean messages received by this user will be stored in History. Go to **Reporting** > **History** to view.

:::note
Archived emails are stored for 5 days.
:::

**Lock Policy:**

If enabled, changes to a user's domain policy will not affect this user policy. For example, if the domain policy for example.com changes the spam score to 1, any user policy under example.com will also see that change appear on their policy unless it has been locked. Default is disabled.

**Quarantine Report:**

Specifies if quarantine reports will be generated for this user. Default is disabled.

Language:

Select the language quarantine reports are written in. Users can change the quarantine report language within their UI.

Email report every:

Select the frequency that quarantine reports are generated (never, every day, every weekday, every Friday, or every month). Users can change the quarantine report frequency within their UI.

Report contains:

A quarantine report can list of all items that are currently quarantined for a user, or just new quarantined items since the last report was generated (default).

Both options can be viewed with or without virus-infected emails included. If a user has no quarantined messages or no new quarantined messages since the last report, then no report will be sent.

Exclude spam mails scoring above:

Messages with a spam score above a certain value can generally be deemed as spam. Users are usually only interested in messages that fall just above the spam threshold, so they can identify any false positives.

If users get a significant amount of spam, you can exclude spam messages above a certain spam score, e.g. 30, to keep their quarantine report more manageable (default: 999).

## In this Section

-   [User Policy Settings](/docs-test/titanhq/products/spamtitan/docs/legacy-8/add-a-new-user-policy/)
