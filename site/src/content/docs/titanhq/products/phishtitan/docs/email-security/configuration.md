---
title: "Configuration"
description: "Imported from support.titanhq.com"
---

> Source: [support.titanhq.com](https://support.titanhq.com/en/68303-configuration.html)
> Product: PhishTitan
> Imported content type: docs_page
> Product stream: email-security

#### Configuration

From the MSP Configuration menu, you can select the following:

-   **[Mail Flow](/docs-test/titanhq/products/phishtitan/docs/email-security/msp-mail-flow/ "MSP Mail Flow")**, where you can manage how mail is processed before it's delivered to a user. This includes:

    -   [**Remediation**](/docs-test/titanhq/products/phishtitan/docs/email-security/msp-mail-flow/ "MSP Remediation"): You can decide whether you want Email Security to automatically assess malicious emails or do it manually as the administrator. Remediated emails are sent to the junk folder by default, or you can send them directly to the deleted items folder.

    -   **[Anti-spoof](/docs-test/titanhq/products/phishtitan/docs/email-security/msp-mail-flow/ "Anti-spoof")**: Email spoofing is the creation of an email with a forged sender address to intentionally mislead a recipient about its origin. This setting is enabled by default, meaning that manipulated display names are checked and an alert banner is added if detected. You also have the option to disable Anti-spoof for your customers.

    -   **[Frequently Exploited Domains](/docs-test/titanhq/products/phishtitan/docs/email-security/msp-mail-flow/ "Exploited Domains")**: You can add an alert banner to free email services. Malicious actors frequently launch phishing attacks from these services, so by adding an alert banner, you're reminding users to stay vigilant.

    -   **[Graymail](/docs-test/titanhq/products/phishtitan/docs/email-security/msp-mail-flow/ "Graymail")**: Graymail is legitimate marketing email that may be viewed as spam. By enabling this feature, you can treat graymail as malicious, and add a banner to it for all customers. If auto remediation is enabled, graymail is auto remediated.

-   [**Link Lock**](/docs-test/titanhq/products/phishtitan/docs/email-security/link-lock/ "Link Lock"), where you can enable protection against phishing, business email compromise, and zero day attacks by removing the possibility of a user selecting a malicious link in an email.

:::note
To see how effective email security is for a customer without impacting end users, you can [enable Stealth Mode](/docs-test/titanhq/products/phishtitan/docs/email-security/configuration-68364/ "Configuration") by going to **Configuration** > **Mail Flow** on the customer level. Stealth Mode allows emails to be processed silently, meaning that no banners are applied, emails are not remediated, and links are not rewritten with Link Lock. You can view the Email Security dashboard to monitor statistics and the efficacy of Stealth mode.
:::

## In this Section

-   [MSP Mail Flow](/docs-test/titanhq/products/phishtitan/docs/email-security/msp-mail-flow/)
-   [Exemptions](/docs-test/titanhq/products/phishtitan/docs/email-security/exemptions/)
-   [Link Lock](/docs-test/titanhq/products/phishtitan/docs/email-security/link-lock/)
