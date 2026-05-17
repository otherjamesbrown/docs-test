---
title: "Editing A Domain Policy"
description: "Imported from support.titanhq.com"
---

> Source: [support.titanhq.com](https://support.titanhq.com/en/57419-editing-a-domain-policy.html)
> Product: SpamTitan
> Imported content type: docs_page
> Product stream: skellig

### Editing A Domain Policy

When a new domain is added, a default policy is created for that domain in **Policies** > **Domain Policies**. Follow the steps below to view and edit a domain policy.

:::tip
If enabled, a quarantine report is sent to users with a list of emails that have been caught and quarantined. Users can directly deliver, allow list, or delete quarantined mail from these reports.

Enabling quarantine reports in Step 6 is recommended (default: OFF) to remove this administrative overhead.
:::

1.  Go to **Policies** > **Domain Policies**.

2.  Select the edit ![edit-icon.jpg](/docs-test/imported-assets/spamtitan-skellig/57419-editing-a-domain-policy/90a487f7499b.jpg) icon in the Actions column for a domain policy to open the edit page for that domain policy:

    ![ST-SK-Edit-Domain-Policy1.jpg](/docs-test/imported-assets/spamtitan-skellig/57419-editing-a-domain-policy/430b184747c1.jpg)

3.  Spam Filtering:

    Select **On** or **Off** to enable or disable spam filtering for this domain (default: ON).

    -   _Mark as Spam when score is greater than_: This is the scoring threshold above which mail is considered to be spam (default: 5).

    -   _Spam should be_: Select the option you want when an email is identified as spam.

        Option

        Description

        Quarantined

        The email is accepted, but quarantined and appears in the user's quarantine reports. It can be released from quarantine if deemed to be a false positive.

        Passed (Tagged)

        The message is analyzed as normal and passed to the end recipient(s). Headers are added to allow filtering on the back end.

        :::note
        Selecting Passed (Tagged) bypasses allow and block lists and delivers an email to the user mailbox.
        :::

        Rejected

        The message is rejected. The default action is to quarantine all messages that exceed the spam threshold.

    -   _Discard Spam scoring above_: Emails scoring above the specified score are not quarantined.

    -   _Send NDR_: If checked, a Delivery Status Notification (DSN) is generated if a mail is quarantined.

        :::caution
        DSNs can cause backscatter which can result in a server IP being blocked.
        :::

    -   _Add X-Spam headers to non-spam mails_: If enabled, additional headers are added to the message that indicates the result of the spam analysis. The following headers are added:

        -   X-Spam-Status: Shows if a message exceeded the spam threshold and the score is achieved. The rules that were fired by the anti-spam engine are also listed.

        -   X-Spam-Score: Shows the spam score achieved.

        These headers are only added to inbound messages.

    -   _Classify marketing emails as spam_: If this checkbox is enabled, then marketing emails are classified as spam with a score of 7.01. Depending on the value entered in the _Mark as Spam when score is greater than_ field and the option selected in _Spam should be_ field, the marketing emails will be quarantined, passed, or rejected. For example, if the overall spam threshold is set to 6 for emails to be quarantined, then marketing emails will be classified as spam and quarantined.

4.  Virus Filtering:

    Select **On** or **Off** to specify if virus filtering is enabled or disabled for this domain (default: ON).

    -   _Virus should be_: Select the action to take when an email is identified as containing a virus:

        Option

        Description

        Quarantined

        The email is accepted, but quarantined and appears in the user's quarantine reports. It can be released from quarantine if deemed to be a false positive.

        Passed (Tagged)

        The message is analyzed as normal and passed to the end recipient(s). Headers are added to allow filtering on the back end.

        Rejected

        The message is rejected. The default action is to quarantine all messages that exceed the spam threshold.

    -   _Sandbox_: Select to enable sandboxing (default: enabled).

5.  Attachment Type Filtering:

    Select **On** or **Off** to specify if attachment filtering is enabled or disabled for this domain (default: ON).

    If enabled, the customer-level message attachment policy is applied to messages sent to this domain. Go to **Filtering** > **Attachments** to configure attachment filtering settings.

    -   _Banned Attachments should be_: Select the option you want when a banned attachment is identified:

        Option

        Description

        Quarantined

        The email is accepted, but quarantined and appears in the user's quarantine reports. It can be released from quarantine if deemed to be a false positive.

        Passed (Tagged)

        The message is analyzed as normal and passed to the end recipient(s). Headers are added to allow filtering on the back end.

        Rejected

        The message is rejected. The default action is to quarantine all messages that exceed the spam threshold.

6.  Quarantine Report:

    Select **On** or **Off** to specify if a quarantine report is generated for each recipient in this domain when they have their email quarantined.

    -   _Language_: Select the language you want reports to be written in.

    -   _Email report_: Select the frequency with which quarantine reports will be sent. Reports may be generated daily, every weekday, weekly, monthly or never.

    -   _Report contains_: A quarantine report can contain a list of all items that are currently quarantined for each user or new quarantined items since the last report was generated (default). Both of these can be viewed with or without the virus-infected emails included.

    -   _Exclude spam mails scoring above_: Spam that scores above a certain threshold (usually 5) is deemed spam. In quarantine reports, users generally want to view email that just scored just above the spam score threshold so they can look for any false positives.

7.  Archive Mail:

    Select **On** or **Off** to specify if all clean messages received by this domain are stored in history (default: Off). Email stored in history is searchable from **History** in the side-bar.

8.  Enforce 2FA:

    To enforce mandatory 2FA on all domains, switch the toggle On. Turn it Off to make 2FA optional for users in those domains. See [2FA for Domains and Users](/docs-test/titanhq/products/spamtitan/docs/skellig-9/2fa-for-domains-and-users/ "2FA for Domains and Users") for further details.

9.  Select **Save Changes** to save any changes to this domain policy.
