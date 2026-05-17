---
title: "Viewing an Incident"
description: "Imported from helpdesk.phishtitan.com"
---

> Source: [helpdesk.phishtitan.com](https://helpdesk.phishtitan.com/support/solutions/articles/4000202550-viewing-an-incident)
> Product: PhishTitan
> Imported content type: kb_article
> Source folder: Incidents
> Modified: Tue, 28 Oct, 2025 at 3:51 PM

1.  Go to **Email Security** > **Incidents**. Incidents reported by a user are listed in the Action Needed tab. In the Resolved tab, you can see incidents flagged by the system, including [auto remediation](/docs-test/titanhq/products/phishtitan/kb/remediation/msp-remediation/) if you've set that up, and the ones you've marked as safe or sent to junk (remediated).

    You can manage how the table is displayed as follows:

    -   Use the Search ![PhS-Search.jpg](/docs-test/imported-assets/phishtitan-kb/4000202550/4886534741fd.jpg) box to search the list of incidents.

    -   Select the column ![ES-Column-Reorder-icon.jpg](/docs-test/imported-assets/phishtitan-kb/4000202550/9ff217c6917f.jpg) icon to manage how table columns are displayed. By default, all columns are visible and arranged in a specific order. You can change the display by doing the following:

        -   View or hide columns using the toggle.

        -   Use the reordering ![ES-Reordering-icon.jpg](/docs-test/imported-assets/phishtitan-kb/4000202550/75ef450eda3f.jpg) icon to move columns up and down the list. This changes the left-to-right display. An item at the top of the list, for example, means that it will be the first column on the left. Select Restore Defaults to restore the columns to their default positions.

    -   Resize columns by hovering your cursor over the column boundary you want to adjust until it becomes a resize ![ES-Resize-Cursor.jpg](/docs-test/imported-assets/phishtitan-kb/4000202550/3b077003c7a7.jpg) cursor. Drag the boundary until the column is the width you want.

    -   Select the up/down ![sort-arrows.jpg](/docs-test/imported-assets/phishtitan-kb/4000202550/b903746dee2c.jpg) arrows in the column headers to sort column content.

2.  To view additional details of an incident, locate the incident in the table and select it. The Incident Summary slides out from the right side of the page.

    ![PT-Incident-Sum-Slideout-Overview.jpg](/docs-test/imported-assets/phishtitan-kb/4000202550/cc3c67aa49ce.jpg)

    You can move between incidents in the table, and as you select each one, the Incident Summary slideout repopulates with the data. Select the fullscreen ![PT-pop-out-icon.jpg](/docs-test/imported-assets/phishtitan-kb/4000202550/d7722aceddac.jpg)icon if you want to view the Incident Summary in fullscreen.

    :::note
    If you're a read-only admin, then you don't have access to view the content in the body of this email.
    :::

### Incident Summary

The Incident Summary page shows all available details for an incident listed in **Email Security** > **Incidents**. When you select the incident you want to view in the Incidents table, the Incident Summary page appears as a slideout. You can move between incidents in the table and the Incident Summary page repopulates with the new data. You can select the fullscreen ![PT-pop-out-icon.jpg](/docs-test/imported-assets/phishtitan-kb/4000202550/d7722aceddac.jpg) icon beside the Subject at the top of the page to expand it.

![PT-Incident-Sum-Slideout.jpg](/docs-test/imported-assets/phishtitan-kb/4000202550/de2e20955a6e.jpg)

You can navigate the four tabs at the top to find more information about the incident.

![PT-incidents-tabs.jpg](/docs-test/imported-assets/phishtitan-kb/4000202550/d682489f2753.jpg)

**DETAILS**

The Details tab is automatically displayed when the Incident Summary page opens. It includes the status, flag reason and content of the email. If the email was flagged as phishing or fraud, Reasons for Detection and URL Analysis sections appear below the Received Email section. All of these sections can be expanded and collapsed by selecting the up/down arrow.

![PT-Reasons-for-Detection.jpg](/docs-test/imported-assets/phishtitan-kb/4000202550/0e40bf8824ba.jpg)

-   **Status**

    Every incident is assigned a status

    <table width="100%"><colgroup><col width="20%"><col width="50%"><col width="25%"></colgroup><thead><tr><th><p>Status</p></th><th><p>Description</p></th><th><p>Available Actions</p></th></tr></thead><tbody><tr><td><div><img src="/docs-test/imported-assets/phishtitan-kb/4000202550/e4220470dee3.jpg" alt="action-needed.jpg" data-xinfo-image="66286"></div></td><td><p>An email has been flagged by a user as phishing or clean using the TitanHQ for Outlook add-in.</p><p>This incident needs Admin attention and review.</p><div dir="ltr" data-import-admonition="note" data-import-admonition-title="Note"><h3>Note</h3><p>If the email has been sent to only one recipient and has been reported as phishing, then it is automatically remediated to the junk folder.</p></div></td><td><p>Remediate</p><p>Mark as Safe</p><p>Allow Sender</p><p>Allow Domain</p></td></tr><tr><td><div><img src="/docs-test/imported-assets/phishtitan-kb/4000202550/f87752bd664f.jpg" alt="sent-to-junk.jpg" data-xinfo-image="66285"></div></td><td><p>Emails can be sent to junk in the following ways:</p><div><ul><li><p>Administrator has reviewed this email and determined it was malicious and selected to move it to a user's Junk folder.</p></li><li><p>An email has been flagged by a user as phishing using the TitanHQ for Outlook add-in.</p></li></ul></div><p>This email has been moved to the Junk folder for all recipients.</p></td><td><p>Mark as Safe</p><p>Allow Sender</p><p>Allow Domain</p></td></tr><tr><td><div><img src="/docs-test/imported-assets/phishtitan-kb/4000202550/2bc09fe51906.jpg" alt="banner-applied.jpg" data-xinfo-image="66284"></div></td><td><p>Email Security has flagged this email as suspicious and applied a warning banner before delivering it to a user's Inbox.</p></td><td><p>Remediate</p><p>Mark as Safe</p><p>Allow Sender</p><p>Allow Domain</p></td></tr><tr><td><div><img src="/docs-test/imported-assets/phishtitan-kb/4000202550/73b3c504d1b8.jpg" alt="PT-Actions-Marked-As-Safe.jpg" data-xinfo-image="67485"></div></td><td><p>Administrator has reviewed this email and determined it is safe. Once marked as safe, the email is then delivered to all recipients with a banner marking it as safe.</p></td><td><p>Remediate</p><p>Allow Sender</p><p>Allow Domain</p></td></tr><tr><td><div><img src="/docs-test/imported-assets/phishtitan-kb/4000202550/4358129122bc.jpg" alt="PT-Auto-Remediated-Label.jpg" data-xinfo-image="68355"></div></td><td><p>Auto remediation has been enabled meaning that this email has automatically been moved to the Junk folder for all recipients.</p></td><td><p>Allow Sender</p><p>Mark as Safe</p></td></tr></tbody></table>

-   **Flag Reason**

    The following table explains reasons why an email can be flagged for further investigation.

    <table width="100%"><colgroup><col width="30%"><col width="70%"></colgroup><thead><tr><th><p>Flag Reason</p></th><th><p>Description</p></th></tr></thead><tbody><tr><td><p>User Reported Phishing</p></td><td><p>A user reported this email as phishing with the TitanHQ for Outlook add-in.</p></td></tr><tr><td><p>User Reported Clean</p></td><td><p>A user reported this email as clean with the TitanHQ for Outlook add-in.</p></td></tr><tr><td><p>Suspicious Text</p></td><td><p>Email Security detected suspicious text in the body of this email.</p></td></tr><tr><td><p>Malicious Links</p></td><td><p>Email Security detected malicious links in the body of this email. A malicious URL is a link embedded in an email that was created with the purpose of promoting scams, attacks, and frauds. When selected, malicious URLs can download ransomware, or lead to phishing or spearphishing emails.</p></td></tr><tr><td><p>Phishing</p></td><td><p>Email Security flagged this email as a phishing attempt. Phishing emails attempt to trick&nbsp;people into revealing personal or confidential information which can then be used illicitly; for example, to steal a recipient's money or identity.</p></td></tr><tr><td><p>Spoofed Display Name</p></td><td><p>Email Security detected a spoofed display name. Email spoofing is the creation of an email with a forged sender address to intentionally mislead a recipient about its origin.</p></td></tr><tr><td><p>Spam</p></td><td><p>Email Security flagged this email as spam. Spam refers to unsolicited emails that are sent to a large number of recipients, usually as advertising.</p></td></tr><tr><td><p>Fraud</p></td><td><p>Email Security flagged this email as fraud. Email fraud intentionally deceives the recipient into sharing personal data, such as bank or credit card details.</p></td></tr><tr><td><p>Graymail</p></td><td><p>Email Security flagged this email as Graymail. Graymail refers to solicited marketing emails and comes from a legitimate source. Recipients once subscribed to them and now may no longer open or read them.</p></td></tr><tr><td><p>Exploited Domains</p></td><td><p>Email Security detected this email as coming from a free email service, which malicious actors frequently use to launch phishing attacks. An alert banner was added as a reminder to users to stay vigilant, even if the email content does not look suspicious.</p></td></tr></tbody></table>

-   **Actions**

    From the **Actions** menu, select an action to take on this incident.

    ![PT-Actions-Menu.jpg](/docs-test/imported-assets/phishtitan-kb/4000202550/de45109ad35b.jpg)

    When you select one of the following actions for an email or domain, it is applied to all affected users. Select the **Affected Users** tab to see a list of all users that received the email.

    -   _Remediate_: This action removes the email from all affected inboxes.

    -   _Mark as Safe_: This action adds a green banner to this email marking it as safe. The email is restored to all affected inboxes.

    -   _Allow Sender_: This action adds the sender to the Allow List. The email is delivered to the user's inbox without analysis. See Adding a Sender to the Allow List for additional information.

    -   _Allow Domain_: This action adds the domain to the Allow List, so that any email using that domain is delivered to the user's inbox without analysis. See Adding a Domain to the Allow List for additional information.

-   **Banners**

    Email Security adds a banner to an email based on the following:

    -   **Threat reported or detected**: A Warning banner is applied if malware or phishing has been automatically detected by Email Security.

        ![ES-Banner-Mal-Phish.jpg](/docs-test/imported-assets/phishtitan-kb/4000202550/f9a23cfa0361.jpg)

        If spam is detected, then you'll see a warning banner specifically for spam:

        ![ES-SPAM-banner.jpg](/docs-test/imported-assets/phishtitan-kb/4000202550/e182c775dea9.jpg)

        If your administrator has flagged the email as phishing, then it also receives a Warning banner:

        ![PT-Red-Warning-Banner-Sent-to-Junk.jpg](/docs-test/imported-assets/phishtitan-kb/4000202550/e1a0c5066d61.jpg)

        If there is malicious intent in the language of an email, a warning banner is applied:

        ![ES-Banner-red-malicious-intent.jpg](/docs-test/imported-assets/phishtitan-kb/4000202550/6dc36681e6d5.jpg)

        If an email is reported as phishing using the Outlook Add-in, the email is moved to the Junk folder and a new banner is applied:

        ![ES-Banner-outlookadding-warning.jpg](/docs-test/imported-assets/phishtitan-kb/4000202550/38ba70b70261.jpg)

    -   **No threat detected**: If an email is considered clean and no threat has been detected, a green banner is applied.

        ![PT-Greem-Clean-Banner.jpg](/docs-test/imported-assets/phishtitan-kb/4000202550/88e0995091c1.jpg)

    -   **[Exploited Domains](/docs-test/titanhq/products/phishtitan/kb/exploited-domains/exploited-domains/)**: If you have turned on the Exploited Domains feature, then it means that an alert banner is added to emails from domains known to be frequently used in phishing attacks. It is a reminder to users to stay vigilant, even if the content of an email does not look suspicious.

        ![PT-Susp-Domains-Alert-Banner.png](/docs-test/imported-assets/phishtitan-kb/4000202550/55e07e31a160.png)

        The language and tone in some emails may indicate that a phishing attempt is being made. When this happens, an alert banner is applied to caution you.

        ![ES-Banner-phishing-suspicious.jpg](/docs-test/imported-assets/phishtitan-kb/4000202550/c01db134902b.jpg)

    -   **Anti-spoof**: When Anti-spoof is enabled, manipulated display names are checked, and if detected, an alert banner is added.

        ![PT-Antispoof-Banner.jpg](/docs-test/imported-assets/phishtitan-kb/4000202550/7d438b225eec.jpg)

    -   **Info**: When Graymail is enabled, it is treated as malicious, and an information banner is added to alert customers and users. If auto remediation is enabled, graymail is auto remediated.

        ![PT-Graymail-banner.jpg](/docs-test/imported-assets/phishtitan-kb/4000202550/f3ab028a43a0.jpg)

**THREAT COACH**

Threat Coach is an AI-driven feature to help you understand phishing emails. Powered by TitanHQ AI, Threat Coach analyzes incoming emails for sentiment, context, tone, and potentially malicious intent. Threat indicators are highlighted and explained so that you can learn more about the threats used in phishing emails.

:::note
Threat Coach is in beta testing. Not all email categories are included for analysis in this release. If an email has been analyzed, Threat Coach indicators are highlighted and explained. As beta testing continues, additional categories will be included.
:::

1.  To access Threat Coach, go to **Incidents** and select the Resolved tab.

2.  Go to the [Incident Summary](/docs-test/titanhq/products/phishtitan/kb/incidents/viewing-an-incident/ "Incident Summary") page for the incident you want to view, and select the **Threat Coach** tab.

    ![PT-Threat-Coach-Main.jpg](/docs-test/imported-assets/phishtitan-kb/4000202550/947cd59f66f8.jpg)

    If the email has been analyzed, then it will display threat indicators, which are described in the **Indicator Guide** in the section below the email contents.

3.  ![PT-Indicator-Guide.jpg](/docs-test/imported-assets/phishtitan-kb/4000202550/2613a83e8935.jpg)

    The Indicator Guide lists potential signals of a phishing email, including:

    -   **Generic Greeting**: Generic or vague greetings like "Dear Customer" or "Dear User" instead of using your name.

    -   **Brand Impersonation**: Mimicking well-known brands, often using a similar sender domain.

    -   **Spelling/Grammar Errors**: Noticeably poor, inaccurate or incorrect spelling and/or grammar.

    -   **Request for Financial Assistance**: Unexpected reqest for sensitive information or financial help from a seemingly known contact.

    -   **Urgent/Threatening Language**: Urgent scare tactics; threats of account suspension, legal action, or other losses.

    -   **Requests for PII**: Request for personally identifiable information like bank details, credit card, or social security number.

    -   **Suspicious URL**: Links unrelated to sender's domain or mimicking a reputable branded domain.

    -   **Unexpected Reward**: The promise of an unexpected gain like a tax refund or bonus from your bank.

    -   **Unrealistic Offer**: The promise of big gains by providing personal information or clicking on suspicious links.

**AFFECTED USERS**

The date and subject of the email are listed here, along with the email addresses of the recipient and sender. The name of the customer is also listed.

**RECEIVED HEADERS**

The content of the received header is displayed.
