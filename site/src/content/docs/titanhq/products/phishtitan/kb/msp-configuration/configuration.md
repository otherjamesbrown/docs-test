---
title: "Configuration"
description: "Imported from helpdesk.phishtitan.com"
---

> Source: [helpdesk.phishtitan.com](https://helpdesk.phishtitan.com/support/solutions/articles/4000219237-configuration)
> Product: PhishTitan
> Imported content type: kb_article
> Source folder: MSP Configuration
> Modified: Wed, 23 Jul, 2025 at 5:05 PM

From the MSP Configuration menu, you can select the following:

-   **[Mail Flow](https://helpdesk.phishtitan.com/document/preview/69561#UUID-5421db12-e35f-d014-4ac6-f32154b09523)**, where you can manage how mail is processed before it's delivered to a user. This includes:

    -   [**Remediation**](/docs-test/titanhq/products/phishtitan/kb/remediation/msp-remediation/): You can decide whether you want Email Security to automatically assess malicious emails or do it manually as the administrator. Remediated emails are sent to the junk folder by default, or you can send them directly to the deleted items folder.

    -   **[Anti-spoof](/docs-test/titanhq/products/phishtitan/kb/msp-anti-spoof/anti-spoof/)**: Email spoofing is the creation of an email with a forged sender address to intentionally mislead a recipient about its origin. This setting is enabled by default, meaning that manipulated display names are checked and an alert banner is added if detected. You also have the option to disable Anti-spoof for your customers.

    -   **[Frequently Exploited Domains](/docs-test/titanhq/products/phishtitan/kb/exploited-domains/exploited-domains/)**: You can add an alert banner to free email services. Malicious actors frequently launch phishing attacks from these services, so by adding an alert banner, you're reminding users to stay vigilant.

    -   **[Graymail](/docs-test/titanhq/products/phishtitan/kb/msp-graymail/graymail/)**: Graymail is legitimate marketing email that may be viewed as spam. By enabling this feature, you can treat graymail as malicious, and add a banner to it for all customers. If auto remediation is enabled, graymail is auto remediated.

-   [**Link Lock**](/docs-test/titanhq/products/phishtitan/kb/link-lock/link-lock/), where you can enable protection against phishing, business email compromise, and zero day attacks by removing the possibility of a user selecting a malicious link in an email.

:::note
To see how effective email security is for a customer without impacting end users, you can [enable Stealth Mode](/docs-test/titanhq/products/phishtitan/kb/customer-configuration/configuration/) by going to **Configuration** > **Mail Flow** on the customer level. Stealth Mode allows emails to be processed silently, meaning that no banners are applied, emails are not remediated, and links are not rewritten with Link Lock. You can view the Email Security dashboard to monitor statistics and the efficacy of Stealth mode.
:::
