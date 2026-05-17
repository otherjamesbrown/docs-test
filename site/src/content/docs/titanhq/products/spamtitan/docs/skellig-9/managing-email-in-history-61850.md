---
title: "Managing Email in History"
description: "Imported from support.titanhq.com"
---

> Source: [support.titanhq.com](https://support.titanhq.com/en/61850-managing-email-in-history.html)
> Product: SpamTitan
> Imported content type: docs_page
> Product stream: skellig

#### Managing Email in History

Go to **History** and select an email in the list to view further information for that email, including message view and source. A slideout panel appears with the Details tab displayed by default.

![ST-History-Slideout-Main.jpg](/docs-test/imported-assets/spamtitan-skellig/61850-managing-email-in-history/88d8dcae5bcf.jpg)

You can move between emails in the list, and as you select each one, the details are repopulated with the new data. Select the fullscreen ![PT-pop-out-icon.jpg](/docs-test/imported-assets/spamtitan-skellig/61850-managing-email-in-history/d7722aceddac.jpg) icon beside the SpamTitan ID at the top if you want a fullscreen view.

If you view an email that is in quarantine, you can select the Actions menu to delete, forward, release, or allow the email directly from History. See further details in the Actions table below.

View Email Details

The Details available for an email are:

![ST-History-Slideout-Main-Details-View.jpg](/docs-test/imported-assets/spamtitan-skellig/61850-managing-email-in-history/43d2874850c8.jpg)

-   _Message Received_: Date and time the email was received.

-   _Recipient_: Email address of the recipient.

-   _Envelope From_: The return address in the email header that is used to return bounced mail.

-   _Header From_: The sender's address which is visible in the email header.

-   _Host_: The sending host that initiated communication.

-   _Mail flow_: Indicates whether the mail flow was inbound or outbound.

-   _Delivery Status_: Indicates the delivery status of a message.

-   _Subject_: Subject header of the email.

-   _Country of Origin_: Country that the email originated in.

-   _Message ID_: A unique internal message identification number that SpamTitan assigns to each email (also known as SpamTitan ID).

-   _Content Classification_: SpamTitan assessment of the email content.

-   _Score_: Overall spam score. See [Quarantine](/docs-test/titanhq/products/spamtitan/docs/skellig-9/quarantine-65238/ "Quarantine").

-   _Virus Infection_: Indicates whether a virus was detected.

-   _Quarantined_: Indicates whether the email was quarantined or allowed.

-   _Last Status Update_: Date and time that a status was last given for the email.

-   _Client Address_: The source IP address a mail was received from.

-   _SMTP Response_: Current status of email in SpamTitan.

Message View

Select **Message View** to view the email as it appears in a user's mailbox. Select **Show all Headers** to view all email headers.

![ST-History-Slideout-Main-Message-View.jpg](/docs-test/imported-assets/spamtitan-skellig/61850-managing-email-in-history/3a821cf2a9b4.jpg)

Source View

Select **View Source** to view the email source.

![ST-History-Slideout-Main-Source-View.jpg](/docs-test/imported-assets/spamtitan-skellig/61850-managing-email-in-history/a630a7db2365.jpg)

Actions

Go to the Actions dropdown menu, and select one of the four buttons - **Delete**, **Forward**, **Release**, or **Allow** - to perform an action on the email. See further information on each action below.

**Possibly need note here to explain how to delete in the History section.**

<table><colgroup><col><col></colgroup><thead><tr><th><p>Action</p></th><th><p>Description</p></th></tr></thead><tbody><tr><td><p>Delete</p></td><td><p>Select <span><strong>Delete</strong></span> to delete the email you are viewing. Deleting a message from quarantine tells SpamTitan this email is spam and so this type of message is more likely to be blocked in the future.</p><div dir="ltr" data-import-admonition="note" data-import-admonition-title="Note"><h3>Note</h3><p>If a message is deleted from quarantine that message will not appear in the associated users’ quarantine, or in their quarantine report.</p></div></td></tr><tr><td><p>Forward</p></td><td><p>Select <span><strong>Forward</strong></span> to enter an email address and forward an email. Once forwarded, the email is <span><em>not</em></span>&nbsp;removed from quarantine.</p></td></tr><tr><td><p>Release</p></td><td><p>Occasionally, an email in quarantine may have been incorrectly identified as spam. This is known as a ‘false positive’. Select <span><strong>Release</strong></span> to release an email from quarantine and automatically forward the email to the recipient.</p></td></tr><tr><td><p>Allow</p></td><td><p>Select <span><strong>Allow</strong></span> to add the email address of an email in quarantine to your Allow List. The email address is added to your allow list and the email is released from quarantine and delivered to the recipient.</p><p>All future emails from this sender will bypass the SpamTitan anti-spam engine, but are still scanned for viruses and banned attachments.</p></td></tr></tbody></table>
