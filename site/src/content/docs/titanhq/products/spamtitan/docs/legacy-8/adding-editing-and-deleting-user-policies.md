---
title: "Adding, Editing and Deleting User Policies"
description: "Imported from docs.titanhq.com"
---

> Source: [docs.titanhq.com](https://docs.titanhq.com/en/8969-adding,-editing-and-deleting-user-policies.html)
> Product: SpamTitan
> Imported content type: docs_page
> Product stream: legacy

##### Adding, Editing and Deleting User Policies

Go to **Anti-Spam Engine** > **User Policies** > **User Policy Management** to add, edit or delete a user policy.

Adding a User Policy

1.  Click **Add...** and the Add User Policies window displays.

    ![STG-add-user-policies.jpg](/docs-test/imported-assets/spamtitan-legacy/8969-adding,-editing-and-deleting-user-policies/b99adfadb4be.jpg)

2.  Using the table below as a reference, complete the fields in the Add User Policies window.

3.  Click **Save** to save this user policy, or **Cancel** to discard.

Editing a User Policy

1.  To edit a single policy, check the box ![ST-701-check-box.jpg](/docs-test/imported-assets/spamtitan-legacy/8969-adding,-editing-and-deleting-user-policies/d19d75015111.jpg) to the left of that user policy and click **Edit**, or click the edit ![ST-701-edit-button.jpg](/docs-test/imported-assets/spamtitan-legacy/8969-adding,-editing-and-deleting-user-policies/7455a85c9b68.jpg) icon in the Options column. To edit multiple policies at once, check the box beside several polices and click **Edit**.

2.  Using the table below as a reference, complete the fields in the Edit User Policies window.

Deleting a User Policy

-   To delete a single user policy, check the box ![ST-701-check-box.jpg](/docs-test/imported-assets/spamtitan-legacy/8969-adding,-editing-and-deleting-user-policies/d19d75015111.jpg) to the left of that user policy and click **Delete**, or click the delete ![ST-701-delete-button.jpg](/docs-test/imported-assets/spamtitan-legacy/8969-adding,-editing-and-deleting-user-policies/3b2dc809e314.jpg) icon in the Options column. To delete multiple policies at once, check the box beside those polices and click **Delete**.

###### User Policy Settings

Field

Description

**Email Address(es):**

Enter the email address for the user you want to create a new user policy for. Enter multiple email addresses (separated with a line break) to create several user policies at once.

**User's Full Name:**

To elicit information or money, phishers sometimes attempt to impersonate users with a high position in a company, for example, the CEO or CFO.

To help prevent this, enter a user's full name here. Email from an _external_ network with this name in the 'From:' header (or a mild variation of the name) is more likely to be blocked as spam.

See [Anti-Spoofing](/docs-test/titanhq/products/spamtitan/docs/legacy-8/anti-spoofing-66110/ "Anti-Spoofing").

:::danger[Warning]
Avoid using common names, as they are more like to cause false positives.
:::

**User Role:**

Allows you to select a pre-defined user role that has been created in **Anti-Spam Engine** > **Roles and Permissions** > **User Roles**.

**Spam Filtering:**

Specifies if spam filtering is enabled or disabled for the selected user (default: enabled).

Consider mail spam when score is greater than:

This is the anti-spam engine scoring threshold above which mail is considered to be spam (default: 5).

Spam should be:

-   _Quarantined_: The message is accepted, but quarantined and appears in the user's quarantine reports. It may be released from quarantine if deemed to be a false positive.

-   _Passed (Tagged)_: The message is analyzed as normal and passed to the end recipient(s). Headers are added to allow filtering on the back-end.

    To prepend text to the subject indicating that the message has been identified as spam, enable Spam Modifies Subject and specify an appropriate Subject Tag (default: \[ \*\* SPAM \*\* \]). To include the spam score in the subject, specify \_SCORE\_ in the spam subject tag. This will be replaced with the actual score.

    :::note
    Selecting _Passed (Tagged)_ bypasses allow and block lists and delivers an email to the user mailbox.
    :::

-   _Rejected_: The message is rejected. The default action is to quarantine all messages that exceed the spam threshold. In the case of a banned attachment or spam, a DSN will be generated. No DSN will be generated for viruses, as most viruses originate from forged mail addresses.

Send NDR:

If checked, a Delivery Status Notification (DSN) is generated if a mail is quarantined.

:::note[Important]
DSNs can cause backscatter which can result in email being blocked.
:::

Discard Spam scoring above:

Messages scoring above the specified score are not quarantined.

Add X-Spam headers to non-spam mails:

If enabled, additional headers are added to the message that indicates the result of the spam analysis. The following headers are added:

-   _X-Spam-Status:_ Shows if a message exceeded the spam threshold and the score is achieved. The rules that were fired by the anti-spam engine are also listed.

-   _X-Spam-Score:_ Shows the spam score achieved.

:::note
These headers are only added to inbound messages.
:::

**Virus Filtering:**

Specifies if virus filtering is enabled or disabled for this user (default: enabled).

Viruses should be:

-   _Quarantined_: The message is accepted, but quarantined and appears in the user's quarantine reports. It may be released from quarantine if deemed to be a false positive.

-   _Passed (Tagged)_: The message is analyzed as normal and passed to the end recipient(s). Headers are added to allow filtering on the back-end.

    To prepend text to the subject indicating that the message has been identified as spam, enable Spam Modifies Subject and specify an appropriate Subject Tag (default: \[ \*\* SPAM \*\* \]). To include the spam score in the subject, specify \_SCORE\_ in the spam subject tag. This will be replaced with the actual score.

-   _Rejected_: The message is rejected. The default action is to quarantine all messages that exceed the spam threshold. In the case of a banned attachment or spam, a DSN will be generated. No DSN will be generated for viruses, as most viruses originate from forged mail addresses.

**Sandboxing:**

Specifies if sandboxing is enabled or disabled for this user (default: disabled).

**Attachment Type Filtering:**

If enabled, the corporate message attachment policy is applied to messages sent to this user (default: enabled). Go to **Content Filtering** > **Attachments** to configure global attachment filtering settings.

Banned Attachments should be:

-   _Quarantined_: The message is accepted, but quarantined and appears in the user's quarantine reports. It may be released from quarantine if deemed to be a false positive.

-   _Passed (Tagged)_: The message is analyzed as normal and passed to the end recipient(s). Headers are added to allow filtering on the back-end.

    To prepend text to the subject indicating that the message has been identified as spam, enable Spam Modifies Subject and specify an appropriate Subject Tag (default: \[ \*\* SPAM \*\* \]). To include the spam score in the subject, specify \_SCORE\_ in the spam subject tag. This will be replaced with the actual score.

-   _Rejected_: The message is rejected. The default action is to quarantine all messages that exceed the spam threshold. In the case of a banned attachment or spam, a DSN will be generated. No DSN will be generated for viruses, as most viruses originate from forged mail addresses.

**Archive Mail:**

If enabled, all clean messages received by this domain are stored in history. Go to **Reporting** > **History** to view.

**Lock Policy:**

If enabled, any domain policy change will not affect this user policy. For example, if the domain policy for _example.com_ changes the spam score to 1, any user under _example.com_ will also see that change appear on their user policy unless it has been locked.

:::note
A warning is given to an admin when editing a domain policy with locked users.
:::

**Quarantine Report:**

If enabled, a quarantine report is generated for this user if they have messages in quarantine.

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

-   [User Policy Settings](/docs-test/titanhq/products/spamtitan/docs/legacy-8/adding-editing-and-deleting-user-policies/)
