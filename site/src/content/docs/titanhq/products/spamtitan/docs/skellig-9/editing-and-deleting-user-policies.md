---
title: "Editing and Deleting User Policies"
description: "Imported from support.titanhq.com"
---

> Source: [support.titanhq.com](https://support.titanhq.com/en/59372-editing-and-deleting-user-policies.html)
> Product: SpamTitan
> Imported content type: docs_page
> Product stream: skellig

#### Editing and Deleting User Policies

Editing a User Policy

Follow the steps below to edit a user policy.

1.  User Policies are available at the domain level. Either:

    -   Log in as a Domain Admin and go to **Policies** > **User Policies**, or

    -   Log in as an MSP or Customer Admin and select a domain from the All Domains table at the Customer level. Go to **Policies** > **User Policies**.

2.  Select the policy you want to edit from the **User Policies** table by selecting the edit ![edit-icon-small.jpg](/docs-test/imported-assets/spamtitan-skellig/59372-editing-and-deleting-user-policies/61c7eed9145b.jpg) icon under the Actions column:

    ![ST-SK-user-policies.jpg](/docs-test/imported-assets/spamtitan-skellig/59372-editing-and-deleting-user-policies/03b5f11d241a.jpg)

3.  Make changes to the user policy using the setting descriptions here as a reference:

    -   _User Details_: Edit a user's first or last name.

        To help prevent spoofing by automatically running SpamTitan's ANTISPOOF\_NAME and ANTISPOOF\_NAME\_FUZZY tests, enter a user's first and last name in these fields. Email from an external network with this name in the _From:_ header (or a mild variation of the name) is more likely to be blocked as spam. For more information about anti-spoofing in SpamTitan, see [Anti-Spoofing](https://support.titanhq.com/document/preview/60093#UUID-f49757ea-0552-b61d-218d-d31a8c79a11e).Anti-Spoofing

    -   _Spam Filtering_: Specifies if spam filtering is enabled (ON) or disabled (OFF) for the selected user (default: ON).

        -   _Mark as Spam when score is greater than_: This is the spam scoring threshold, above which mail is considered to be spam (default: 5).

        -   _Spam should be_:

            <table><tbody><tr><td><p>Quarantined</p></td><td><p>The message is accepted, but quarantined and appears in the user's quarantine reports. It can be released from quarantine if deemed to be a false positive.</p></td></tr><tr><td><p>Pass and Tag</p></td><td><p>The message is analyzed as normal and passed to the end recipient. Headers are added to allow filtering on the back-end.</p></td></tr><tr><td><p>Rejected</p></td><td><p>The message is rejected. The default action is to quarantine all messages that exceed the spam threshold. In the case of a banned attachment or spam, a DSN (delivery status notification) will be generated. No DSN will be generated for viruses, as most viruses originate from forged mail addresses.</p></td></tr></tbody></table>

        -   _Discard Spam scoring above_: Messages scoring above this specified spam score are not quarantined.

        -   _Send NDR_: If checked, a Delivery Status Notification (DSN) is generated if a mail is quarantined.

            :::note[Important]
            DSNs can cause backscatter, which can result in a server IP being blocked.
            :::

        -   _Add X-Spam headers to non-spam mails_: If enabled, additional headers are added to the message that indicates the result of the spam analysis. The following headers are added:

            -   X-Spam-Status: Shows if a message exceeded the spam threshold and the score is achieved. The rules that were fired by the anti-spam engine are also listed.

            -   X-Spam-Score: Shows the spam score achieved.

        -   _Classify marketing emails as spam_: If this checkbox is enabled, then marketing emails are classified as spam with a score of 7.01. Depending on the value entered in the _Mark as Spam when score is greater than_ field and the option selected in _Spam should be_ field, the marketing emails will be quarantined, passed, or rejected. For example, if the overall spam threshold is set to 6 for emails to be quarantined, then marketing emails will be classified as spam and quarantined.

        -   _Modify Subject for spam emails_: This checkbox is only visible if you selected _Spam should be_ **Pass and Tag**. Select this checkbox if you want to modify the subject line of spam emails, which is possible in the Spam Subject Tag field.

        -   _Spam Subject Tag_: This field becomes active if you selected the _Modify Subject for spam emails_ checkbox. _\[\*\*SPAM\*\*\]_ is the default and will appear in the subject line of spam emails. You can add a spam score to modify the filtering level on the back-end, for example, _\[\*\*SPAM\*\*\] 3_.

    -   _Virus Filtering_: Specifies if virus filtering is enabled (ON) or disabled (OFF) for this user (default: ON).

        -   _Viruses should be_:

            <table><tbody><tr><td><p>Quarantined</p></td><td><p>The message is accepted, but quarantined and appears in the user's quarantine reports. It can be released from quarantine if deemed to be a false positive.</p></td></tr><tr><td><p>Pass and Tag</p></td><td><p>The message is analyzed as normal and passed to the end recipient. Headers are added to allow filtering on the back-end.</p></td></tr><tr><td><p>Rejected</p></td><td><p>The message is rejected. The default action is to quarantine all messages that exceed the spam threshold. In the case of a banned attachment or spam, a DSN (delivery status notification) will be generated. No DSN will be generated for viruses, as most viruses originate from forged mail addresses.</p></td></tr></tbody></table>

        -   _Sandbox_: Specifies if sandboxing is enabled or disabled for this user (default: OFF).

    -   _Attachment Type Filtering_: If enabled (ON), the corporate message attachment policy is applied to messages sent to this user (default: ON).

        -   _Banned Attachments should be_:

            <table><tbody><tr><td><p>Quarantined</p></td><td><p>The message is accepted, but quarantined and appears in the user's quarantine reports. It can be released from quarantine if deemed to be a false positive.</p></td></tr><tr><td><p>Pass and Tag</p></td><td><p>The message is analyzed as normal and passed to the end recipient. Headers are added to allow filtering on the back-end.</p></td></tr><tr><td><p>Rejected</p></td><td><p>The message is rejected. The default action is to quarantine all messages that exceed the spam threshold. In the case of a banned attachment or spam, a DSN (delivery status notification) will be generated. No DSN will be generated for viruses, as most viruses originate from forged mail addresses.</p></td></tr></tbody></table>

    -   _Quarantine Report_: If enabled, a quarantine report is generated for this user when they have messages quarantined.

        The Digest column in **Policies** > **User Policies** will list On or Off for a policy depending on how this setting is configured.

        -   _Language_: Select the language you want reports to be written in.

        -   _Email report_: Select the frequency with which quarantine reports will be sent. Reports may be generated daily (default), every week day, weekly, monthly or never.

        -   _Report contains_: A quarantine report can contain a list of all items that are currently quarantined for each user or new quarantined items since the last report was generated (default). Both of these can be viewed with or without the virus-infected emails included.

        -   _Exclude spam mails scoring above_: Spam that scores above a certain threshold (usually 5) is deemed spam. In quarantine reports, users generally want to view email that just scored just above the spam score threshold so they can look for any false positives.

    -   _Archive Mail_: If enabled, all clean messages received by this user are stored in history.

    -   _Enforce 2FA_: To enforce mandatory 2FA on a user, switch the toggle On. Turn it **Off** to make 2FA optional for that user. See [2FA for Users](/docs-test/titanhq/products/spamtitan/docs/skellig-9/2fa-for-users/ "2FA for Users") for further details.

    -   _Lock Policy_: If enabled, any domain policy change will not affect this user policy. For example, if the domain policy for _example.com_ changes the spam score to 1, any user under _example.com_ will also see that change appear on their user policy unless it has been locked. See [Locking and Unlocking User Policies](/docs-test/titanhq/products/spamtitan/docs/skellig-9/locking-and-unlocking-user-policies/ "Locking and Unlocking User Policies") for further details.

        :::note
        A warning is given to an admin when editing a domain policy with locked users.
        :::

4.  Select **Save Changes** to save the user policy settings.

Deleting a User Policy

-   To delete one or more user policies, select the checkbox(es) to the left of the user policy (or policies) and go to the **Actions** dropdown menu and select **Delete Policy**.
