---
title: "Configuration"
description: "Imported from helpdesk.phishtitan.com"
---

> Source: [helpdesk.phishtitan.com](https://helpdesk.phishtitan.com/support/solutions/articles/4000219238-configuration)
> Product: PhishTitan
> Imported content type: kb_article
> Source folder: Customer Configuration
> Modified: Wed, 23 Jul, 2025 at 5:01 PM

From the customer Configuration menu, you can select the following:

-   **[Mail Flow](https://helpdesk.phishtitan.com/document/preview/69565#UUID-651e6831-f99c-2bcb-9020-12891e6f20df)**, where you can manage how mail is processed before it's delivered to a user. This includes:

    -   **Stealth mode**: This feature helps MSPs to see how effective email security is for a customer without impacting end users because it allows emails to be processed silently. This means that no banners are applied, emails are not remediated, and links are not rewritten with Link Lock. MSPs can view the Email Security dashboard to monitor statistics and the efficacy of Stealth mode.

        Slide the toggle on to enable/off to disable. When you do so, a pop-up window appears prompting you to confirm and advising you to notify affected administrators of the change.

    -   **[Remediation](/docs-test/titanhq/products/phishtitan/kb/remediation/msp-remediation/)**: You can decide whether you want Email Security to automatically assess malicious emails or do it manually as the administrator. Remediated emails are sent to the junk folder by default, or you can send them directly to the deleted items folder.

    -   **[Anti-spoof](/docs-test/titanhq/products/phishtitan/kb/customer-anti-spoof/anti-spoof/)**: Email spoofing is the creation of an email with a forged sender address to intentionally mislead a recipient about its origin. This setting is enabled by default, meaning that manipulated display names are checked and an alert banner is added if detected. You also have the option to disable Anti-spoof for your organization.

    -   Allow List: You can add domains and senders' email addresses to the Allow List, which reduces false positives for users.

    -   **[Frequently Exploited Domains](/docs-test/titanhq/products/phishtitan/kb/exploited-domains/exploited-domains/)**: You can add an alert banner to free email services. Malicious actors frequently launch phishing attacks from these services, so by adding an alert banner, you're reminding users to stay vigilant.

    -   **[Graymail](/docs-test/titanhq/products/phishtitan/kb/customer-graymail/graymail/)**: Graymail is legitimate marketing email that may be viewed as spam. By enabling this feature, you can treat graymail as malicious, and add a banner to it for all users. If auto remediation is enabled, graymail is auto remediated.

-   [**Link Lock**](/docs-test/titanhq/products/phishtitan/kb/link-lock/link-lock/), where you can enable protection against phishing, business email compromise, and zero day attacks by removing the possibility of a user selecting a malicious link in an email.
