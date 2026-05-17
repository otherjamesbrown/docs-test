---
title: "Managing Quarantine Email"
description: "Imported from docs.titanhq.com"
---

> Source: [docs.titanhq.com](https://docs.titanhq.com/en/1136-managing-quarantine-email.html)
> Product: SpamTitan
> Imported content type: docs_page
> Product stream: legacy

#### Managing Quarantine Email

Go to **Quarantine** > **Manage Quarantine**. Use Search Filters and Display Settings to manage the list of emails in quarantine (see [Filtering Quarantine](/docs-test/titanhq/products/spamtitan/docs/legacy-8/filtering-quarantine/ "Filtering Quarantine")).

![STG-manage\_quarantine.jpg](/docs-test/imported-assets/spamtitan-legacy/1136-managing-quarantine-email/54ca9f34333c.jpg)

The following actions can be performed on email in quarantine:

View Message

Click any message in quarantine to view it in a separate window. Click on one of the four tabs to view more information on the quarantined email - Details, View Message, View Source, and Options.

![STG-quarantine-email-blur.jpg](/docs-test/imported-assets/spamtitan-legacy/1136-managing-quarantine-email/d8a949e556a9.jpg)

All images are blocked in review to prevent possible inappropriate content. If a message is subsequently released and delivered then the original images will be present.

Release Message

On a rare occasion, an email in quarantine may have been incorrectly identified as spam. This is known as a ‘false positive’. To release a message, click the checkbox to the left of the email address and click the Release button. This will automatically forward the email to the recipient.

SpamTitan Cloud learns from this action and will prevent this type of message from being blocked in the future.

Allow a Sender

To add the email address of an email in quarantine to your Allow List, click the checkbox to the left of the email address and click the Allow button. The email address then is added to the email recipients allow list and the email is released from quarantine and delivered to the recipient.

All future emails from this sender will bypass the SpamTitan Cloud anti-spam engine. They will still be scanned for viruses and banned attachments.

Delete Message

To delete a message, click the checkbox to the left of the email address and click the **Delete** button. Delete multiple messages one at a time by selecting several email addresses at once before clicking Delete.

Deleting a message from quarantine tells SpamTitan Cloud this email is spam and so this type of message is more likely to be blocked in the future.

:::note
If a message is deleted from quarantine that message will not appear in the associated users’ quarantine, or in their quarantine report.
:::

Forward Message

Go to the **Options** tab to forward the email to the Quarantine Administrator. The email will _not_ be removed from quarantine.
