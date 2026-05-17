---
title: "Managing Email History"
description: "Imported from support.titanhq.com"
---

> Source: [support.titanhq.com](https://support.titanhq.com/en/78402-managing-email-history.html)
> Product: PhishTitan
> Imported content type: docs_page
> Product stream: email-security

##### Managing Email History

Go to **Email Security** > **Email History** to select an email in the list to view the email summary. Use the filter options to locate specific emails, based on **Date**, **Verdict**, and **Status** . For example, when you select **Status**, a dropdown checklist appears from which you can select one or more options to filter email history results.

![ES-Email-History-Customers2.jpg](/docs-test/imported-assets/phishtitan-docs/78402-managing-email-history/fb095ccca828.jpg)

Click on an email to view its details. A slideout panel appears with the Message section displayed by default. You can take action on some emails by selecting **Actions**. See [Taking Action on an Email](https://support.titanhq.com/document/preview/79028#UUID-eab00547-98c2-89e3-5cc7-08b59369b03f) for details.Taking Action on an Email

![ES-Email-History-Customers3.jpg](/docs-test/imported-assets/phishtitan-docs/78402-managing-email-history/f003624ac908.jpg)

You can move between emails in the list, and as you select each one, the details are repopulated with the new data. The details available for an email are:

Email Summary

-   _Status_: Indicates the status of an email:

    -   _Action Needed_: An email has been flagged by a user as phishing or safe using the TitanHQ for Outlook add-in. This incident needs Admin attention and review.

    -   _Banner Applied_: The system has flagged this email as suspicious and applied a warning banner before delivering it to a user's Inbox.

    -   _Auto Remediated_: Auto remediation has been enabled meaning that this email has automatically been moved to the Junk folder or the Deleted folder for all recipients.

    -   _Marked as Safe_: Administrator has reviewed this email and determined it is safe. Once marked as safe, the email is then delivered to all recipients with a banner marking it as safe.

    -   _Remediated_: Email has been assessed by the admin as malicious and sent to Junk Email folder or the Deleted Items folder.

-   _Verdict_: Indicates that the email has been processed and categorized as follows:

    -   _Clean_: Email has been assessed as a legitimate and safe message.

    -   _Fraud_: Email Security flagged this email as fraud. Email fraud intentionally deceives the recipient into sharing personal data, such as bank or credit card details.

    -   _Frequently Exploited Domains_: A domain frequently used for malicious activities such as phishing, malware distribution, or spam. These domains are often used to deceive users.

    -   _Graymail_: Refers to solicited marketing emails and comes from a legitimate source. Recipients once subscribed to them and now may no longer open or read them.

    -   _Malicious Intent_: A message designed to deceive or harm the recipient, typically by delivering malware, stealing credentials or sensitive data, or manipulating the user through phishing, spoofing, or other social engineering techniques.

    -   _Malicious Links_: A malicious URL is a link embedded in an email that was created with the purpose of promoting scams, attacks, and frauds. When selected, malicious URLs can download ransomware, or lead to phishing or spearphishing emails.

    -   _Malware_: Malware, short for "malicious software", can be a file or a link in an email that is intentionally harmful to a computer, network or server. If a user interacts with the link or file, malware can infect networks and devices and steal, encrypt and delete sensitive data.

    -   _Phishing_: Phishing emails attempt to trick people into revealing personal or confidential information which can then be used illicitly; for example, to steal a recipient's money or identity.

    -   _Spam_: Spam refers to unsolicited emails that are sent to a large number of recipients, usually as advertising.

    -   _Spoofed Display Name_: Email Security detected a spoofed display name. Email spoofing is the creation of an email with a forged sender address to intentionally mislead a recipient about its origin.

    -   _Suspicious Intent_: A message that shows warning signs of potential malicious activity—such as unusual sender details, unexpected requests, or questionable links or attachments—but lacks definitive proof of being malicious.

    -   _Suspicious Text_: Email Security detected suspicious text in the body of this email.

    -   _User Reported_: A user reported this email as suspicious with the TitanHQ for Outlook add-in.

    -   _User Reported Clean_: A user reported this email as clean with the TitanHQ for Outlook add-in.

    -   _User Reported Phishing_: A user reported this email as phishing with the TitanHQ for Outlook add-in.

    -   _User Reported Spam_: A user reported this email as spam with the TitanHQ for Outlook add-in.

Message

-   _Date Received_: Date and time the email was received.

-   _Sender_: Email address of the sender.

-   _Recipient_: Email address of the recipient.

-   _Envelope From_: The return address in the email header that is used to return bounced mail.

-   _Header From_: The sender's address which is visible in the email header.

-   _Subject_: Subject header of the email.

-   _Sender IP_: IP Address of the sending server.

Status Classification

-   _Internet message ID_: A globally unique identifier for an email, embedded in the message header, that distinguishes it from all other messages.

-   _Virus Infection_: Indicates whether a virus was detected.
