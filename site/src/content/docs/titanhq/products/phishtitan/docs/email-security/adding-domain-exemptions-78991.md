---
title: "Adding Domain Exemptions"
description: "Imported from support.titanhq.com"
---

> Source: [support.titanhq.com](https://support.titanhq.com/en/78991-adding-domain-exemptions.html)
> Product: PhishTitan
> Imported content type: docs_page
> Product stream: email-security

###### Adding Domain Exemptions

Adding an Exemption for an entire domain allows you to select the security checks that you want to skip for that domain. This means that all emails from the domain can bypass the selected security checks and be delivered to the intended recipient(s) without being flagged or auto-remediated.

You can also add Exemptions for sending email addresses and IPs. See [Adding Email Exemptions](/docs-test/titanhq/products/phishtitan/docs/email-security/adding-sender-email-address-exemptions/ "Adding Sender Email Address Exemptions") and [Adding IP Exemptions](/docs-test/titanhq/products/phishtitan/docs/email-security/adding-ip-exemptions/ "Adding IP Exemptions").

:::note
Ensure that the domains you exempt from security check(s) are safe. Domains added to the Exemption list bypass the selected security checks and can reduce security coverage.

Exemptions created at the MSP level will apply to all customers.

If domains are allowed by the system due to a match on the Exemptions list, then the emails from that domain will be shown in Email History with the Status _Clean_.
:::

1.  Go to **Email Security** > **Configuration** > **Exemptions** where you'll see the All tab is open by default. You can add exemptions from here or select the **Domains** tab. Select **Add Exemption**.

    ![ES-Exemptions-Customers-All.jpg](/docs-test/imported-assets/phishtitan-docs/78991-adding-domain-exemptions/3367c5212249.jpg)

    The Add Exemption window opens.

    ![ES-Exemptions-Customers-Add-Exemp-Window.jpg](/docs-test/imported-assets/phishtitan-docs/78991-adding-domain-exemptions/a0386db64439.jpg)

2.  In the Add Exemption window, do the following:

    -   _Type_: From the dropdown list, select **Domain**.

    -   _Address_: Enter the domain you want to exempt from the selected mail flow checks.

    -   Select the checkbox(es) for the mail flow check(s) you want to skip for this domain.

        <table><colgroup><col><col></colgroup><tbody><tr><td colspan="2"><p><span><strong>Sender Authentication</strong></span></p></td></tr><tr><td><p><span><em>Anti-Spoof</em></span></p></td><td><p>Compares the sender's display name to tenant display names. If there's a match but the email address differs, the message is flagged.</p></td></tr><tr><td colspan="2"><p><span><strong>Suspicious</strong></span></p></td></tr><tr><td><p><span><em>Spam</em></span></p></td><td><p>Analyzes emails for patterns commonly associated with unsolicited messages.</p></td></tr><tr><td><p><span><em>Frequently Exploited Domains</em></span></p></td><td><p>Identifies emails from senders or domains commonly used in malicious attacks.</p></td></tr><tr><td><p><span><em>Graymail</em></span></p></td><td><p>Identifies legitimate but low-value emails, such as newsletters, promotions, or bulk notifications.</p></td></tr><tr><td><p><span><em>Suspicious Intent</em></span></p></td><td><p>Analyzes email content and behavior to detect signs of phishing, fraud, or social engineering</p></td></tr><tr><td colspan="2"><p><span><strong>Malicious</strong></span></p></td></tr><tr><td><p><span><em>Fraud</em></span></p></td><td><p>Detects emails that show signs of deceptive or malicious intent, such as impersonation, or payment scams.</p></td></tr><tr><td><p><span><em>Malware</em></span></p></td><td><p>Scam emails and attachments for malicious files, or code that could harm systems or data. Infected files may be delivered to users if this check is skipped.</p></td></tr><tr><td><p><span><em>Malicious</em></span></p></td><td><p>Identifies emails designed to cause harm, such as social engineering attempts.</p></td></tr><tr><td><p><span><em>Phishing</em></span></p></td><td><p>Detects emails that attempt to steal credentials, personal data, or sensitive information.</p></td></tr></tbody></table>

    -   _Comments_ (optional): Enter a description for the domain. This might include a reason for allowing the domain exemption.

3.  Select **Add Exemption**.

    The domain is displayed in your Exemptions list.
