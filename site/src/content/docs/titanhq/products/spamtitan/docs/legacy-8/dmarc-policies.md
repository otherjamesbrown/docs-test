---
title: "DMARC Policies"
description: "Imported from docs.titanhq.com"
---

> Source: [docs.titanhq.com](https://docs.titanhq.com/en/8932-dmarc-policies.html)
> Product: SpamTitan
> Imported content type: docs_page
> Product stream: legacy

###### DMARC Policies

When an incoming email does not pass DKIM, the sender can define what action the email receiver should take by setting a policy in their DMARC record. A policy can specify ‘none’, ‘quarantine’, or ‘reject’.

-   _None_: the receiving server takes no action if DMARC has failed. In SpamTitan, no action will be taken on DMARC failures and the email will be processed as normal.

-   _Quarantine_: the receiving server stores the mail for review (and possible release). As long as you are not overriding this policy action in your SpamTitan DMARC settings, the email will be accepted for delivery and quarantined before any virus or spam checking takes place.

    Quarantined messages are listed in your quarantine report in the DMARC MESSAGES table.

    :::note
    If your SpamTitan is **not** cloud-based, you must enable DMARC in your quarantine reports to see DMARC messages.

    Go to **Quarantine** > **Settings** > **Advanced** and check ![ST-701-check-box.jpg](/docs-test/imported-assets/spamtitan-legacy/8932-dmarc-policies/d19d75015111.jpg) DMARC under _Report Contains:_.
    :::

    ![ST-DMARC-quarantine-report.jpg](/docs-test/imported-assets/spamtitan-legacy/8932-dmarc-policies/f97df6745526.jpg)

    If a message that has been quarantined as failing DMARC is released, SpamTitan will perform virus scanning and spam filtering testing. This may result in the message being blocked and sent to quarantine again, but this time marked as either 'spam' or 'virus'.

-   _Reject_: the sender has a close-to-zero chance of false positives and mail should not be allowed on the recipient server if it fails DMARC. In SpamTitan, DMARC rejects will result in the sending client receiving a 5XX reject response after the end of the DATA command.
