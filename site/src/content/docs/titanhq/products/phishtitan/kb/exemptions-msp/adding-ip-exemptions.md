---
title: "Adding IP Exemptions"
description: "Imported from helpdesk.phishtitan.com"
---

> Source: [helpdesk.phishtitan.com](https://helpdesk.phishtitan.com/support/solutions/articles/4000228152-adding-ip-exemptions)
> Product: PhishTitan
> Imported content type: kb_article
> Source folder: Exemptions (MSP)
> Modified: Wed, 8 Apr, 2026 at 3:59 PM

Adding an Exemption for a sending email server IP allows you to select the security checks that you want to skip for that IP. This means that all emails from the that IP can bypass the selected security checks and be delivered to the intended recipient(s) without being flagged or auto-remediated.

If you want to add individual email addresses or domains as Exemptions, see [Adding Email Exemptions](/docs-test/titanhq/products/phishtitan/kb/exemptions-msp/adding-sender-email-address-exemptions/ "Adding Sender Email Address Exemptions") or [Adding Domain Exemptions](/docs-test/titanhq/products/phishtitan/kb/exemptions-msp/adding-domain-exemptions/ "Adding Domain Exemptions").

:::note
Ensure that the IPs you exempt from security check(s) are safe. IPs added to the Exemption list bypass the selected security checks and can reduce security coverage.

Exemptions created at the MSP level will apply to all customers.

If IPs are allowed by the system due to a match on the Exemptions list, the emails from that IP will be shown in Email History with the Status _Clean_.
:::

1.  Go to **Email Security** > **Configuration** > **Exemptions** where you'll see the All tab is open by default. You can add exemptions from here or select the **IPs** tab. Select **Add Exemption**.

    ![ES-Exemptions-MSP-AddExempt.jpg](/docs-test/imported-assets/phishtitan-kb/4000228152/612480697d3e.jpg)

    The Add Exemption window opens.

    ![ES-Exemptions-MSP-AddExempt-Window.jpg](/docs-test/imported-assets/phishtitan-kb/4000228152/aca62708fc18.jpg)

2.  In the Add Exemption window, do the following:

    -   _Type_: From the dropdown list, select **IPs**.

    -   _Address_: Enter the IP address that you want to exempt from the selected mail flow checks.

    -   Select the checkbox(es) for the mail flow check(s) you want to skip for this IP.

        <table width="100%"><colgroup><col width="30%"><col width="70%"></colgroup><tbody><tr><td colspan="2"><p><span><strong>Sender Authentication</strong></span></p></td></tr><tr><td><p><span><em>Anti-Spoof</em></span></p></td><td><p>Compares the sender's display name to tenant display names. If there's a match but the email address differs, the message is flagged.</p></td></tr><tr><td colspan="2"><p><span><strong>Suspicious</strong></span></p></td></tr><tr><td><p><span><em>Spam</em></span></p></td><td><p>Analyzes emails for patterns commonly associated with unsolicited messages.</p></td></tr><tr><td><p><span><em>Frequently Exploited Domains</em></span></p></td><td><p>Identifies emails from senders or domains commonly used in malicious attacks.</p></td></tr><tr><td><p><span><em>Graymail</em></span></p></td><td><p>Identifies legitimate but low-value emails, such as newsletters, promotions, or bulk notifications.</p></td></tr><tr><td><p><span><em>Suspicious Intent</em></span></p></td><td><p>Analyzes email content and behavior to detect signs of phishing, fraud, or social engineering</p></td></tr><tr><td colspan="2"><p><span><strong>Malicious</strong></span></p></td></tr><tr><td><p><span><em>Fraud</em></span></p></td><td><p>Detects emails that show signs of deceptive or malicious intent, such as impersonation, or payment scams.</p></td></tr><tr><td><p><span><em>Malware</em></span></p></td><td><p>Scam emails and attachments for malicious files, or code that could harm systems or data. Infected files may be delivered to users if this check is skipped.</p></td></tr><tr><td><p><span><em>Malicious</em></span></p></td><td><p>Identifies emails designed to cause harm, such as social engineering attempts.</p></td></tr><tr><td><p><span><em>Phishing</em></span></p></td><td><p>Detects emails that attempt to steal credentials, personal data, or sensitive information.</p></td></tr></tbody></table>

    -   _Comments_ (optional): Enter a description for the IP Address. This might include a reason for allowing the IP Address exemption.

3.  Select **Add Exemption**.

    The IP Address is displayed in your Exemptions list.
