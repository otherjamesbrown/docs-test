---
title: "Customer Mail Flow"
description: "Imported from support.titanhq.com"
---

> Source: [support.titanhq.com](https://support.titanhq.com/en/69622-customer-mail-flow.html)
> Product: PhishTitan
> Imported content type: docs_page
> Product stream: email-security

##### Customer Mail Flow

From **Configuration** > **Mail Flow**, you can manage how mail is processed before it is delivered to a user. This includes:

-   **Stealth mode**: This feature helps MSPs to see how effective email security is for a customer without impacting end users because it allows emails to be processed silently. This means that no banners are applied, emails are not remediated, and links are not rewritten with Link Lock. MSPs can view the Email Security dashboard to monitor statistics and the efficacy of Stealth mode.

    Slide the toggle on to enable/off to disable. When you do so, a pop-up window appears prompting you to confirm and advising you to notify affected administrators of the change.

-   **[Remediation](/docs-test/titanhq/products/phishtitan/docs/email-security/msp-mail-flow/ "MSP Remediation")**: You can decide whether you want Email Security to automatically assess malicious emails or do it manually as the administrator. Remediated emails are sent to the junk folder by default, or you can send them directly to the deleted items folder.

-   **[Anti-spoof](/docs-test/titanhq/products/phishtitan/docs/email-security/anti-spoof/ "Anti-spoof")**: Email spoofing is the creation of an email with a forged sender address to intentionally mislead a recipient about its origin. This setting is enabled by default, meaning that manipulated display names are checked and an alert banner is added if detected. You also have the option to disable Anti-spoof for your organization.

-   **[Frequently Exploited Domains](/docs-test/titanhq/products/phishtitan/docs/email-security/msp-mail-flow/ "Exploited Domains")**: You can add an alert banner to free email services. Malicious actors frequently launch phishing attacks from these services, so by adding an alert banner, you're reminding users to stay vigilant.

-   **[Graymail](/docs-test/titanhq/products/phishtitan/docs/email-security/graymail/ "Graymail")**: Graymail is legitimate marketing email that may be viewed as spam. By enabling this feature, you can treat graymail as malicious, and add a banner to it for all users. If auto remediation is enabled, graymail is auto remediated.

## In this Section

-   [Customer Remediation](/docs-test/titanhq/products/phishtitan/docs/email-security/customer-remediation/)
-   [Anti-spoof](/docs-test/titanhq/products/phishtitan/docs/email-security/anti-spoof/)
-   [Exploited Domains](/docs-test/titanhq/products/phishtitan/docs/email-security/exploited-domains/)
-   [Graymail](/docs-test/titanhq/products/phishtitan/docs/email-security/graymail/)
