---
title: "MSP Mail Flow"
description: "Imported from support.titanhq.com"
---

> Source: [support.titanhq.com](https://support.titanhq.com/en/69620-msp-mail-flow.html)
> Product: PhishTitan
> Imported content type: docs_page
> Product stream: email-security

##### MSP Mail Flow

From **Configuration** > **Mail Flow**, you can manage how mail is processed before it is delivered to a user. This includes:

-   [**Remediation**](/docs-test/titanhq/products/phishtitan/docs/email-security/msp-mail-flow/ "MSP Remediation"): You can decide whether you want Email Security to automatically assess malicious emails or do it manually as the administrator. Remediated emails are sent to the junk folder by default, or you can send them directly to the deleted items folder.

-   **[Anti-spoof](/docs-test/titanhq/products/phishtitan/docs/email-security/msp-mail-flow/ "Anti-spoof")**: Email spoofing is the creation of an email with a forged sender address to intentionally mislead a recipient about its origin. This setting is enabled by default, meaning that manipulated display names are checked and an alert banner is added if detected. You also have the option to disable Anti-spoof for your customers.

-   **[Frequently Exploited Domains](/docs-test/titanhq/products/phishtitan/docs/email-security/msp-mail-flow/ "Exploited Domains")**: You can add an alert banner to free email services. Malicious actors frequently launch phishing attacks from these services, so by adding an alert banner, you're reminding users to stay vigilant.

-   **[Graymail](/docs-test/titanhq/products/phishtitan/docs/email-security/msp-mail-flow/ "Graymail")**: Graymail is legitimate marketing email that may be viewed as spam. By enabling this feature, you can treat graymail as malicious, and add a banner to it for all customers. If auto remediation is enabled, graymail is auto remediated.

###### MSP Remediation

Remediation is the process of assessing and taking action on malicious emails. Go to **Email Security** > **Configuration** > **Mail Flow** > **Remediation**, where you can select automatic remediation for all your customers or keep the default option of manual remediation. You can also decide whether to send remediated emails to the junk folder or the deleted items folder.

:::note
When auto remediation is selected at the MSP level, it is enabled for all customers. However, a customer admin can revert to manual remediation, and override the auto remediation setting by the MSP. It is important to note that once the customer admin overrides the MSP selection, inheritance between the MSP level and the customer level is broken.
:::

The Remediation tab is active by default when you access the Mail Flow page.

![PT-Remediation.jpg](/docs-test/imported-assets/phishtitan-docs/69620-msp-mail-flow/485ccf8eb34a.jpg)

1.  Choose how to remediate malicious email:

    -   **Manual remediation (default)**: By default, Email Security is configured for manual remediation, which means that administrators must assess user-reported threats and select a remediation option.

        Administrators will need to assess and manage those emails by going to **Email Security** > **Incidents** and viewing the Action Needed tab. See [Incidents](/docs-test/titanhq/products/phishtitan/docs/email-security/incidents/ "Incidents") for additional information.

    -   **Auto remediation for all customers**: If you select this option, then all malicious emails for all your customers are automatically removed from affected inboxes.

        You can view the emails that have been auto remediated in the Resolved tab at **Email Security** > **Incidents**. If you decide that the email is safe, you can choose to add the sender to the Allow List or mark the email as safe. See [Incidents](/docs-test/titanhq/products/phishtitan/docs/email-security/incidents/ "Incidents") for additional information.

2.  Choose where to send remediated email:

    -   **Junk Email folder (default)**: Remediated emails are automatically sent to junk folders.

    -   **Deleted Items folder**: Remediated emails are automatically sent to deleted items folders.

3.  If you decide to change the default settings of **Manual remediation** and/or **Junk Email folder**, select **Save**. You'll be prompted to confirm your decision in pop-up window.

###### Anti-spoof

Email spoofing is the creation of an email with a forged sender address to intentionally mislead a recipient about its origin. This technique is often used in phishing campaigns and is an attempt to get a user to click a link and share their credentials or reply with sensitive information.

Anti-spoof is automatically enabled, which means that it checks for manipulated display names and adds an alert banner if detected. Users are then protected against impersonation. You do, however, have the option to disable Anti-spoof for your customers.

To manage your Anti-spoof setting, follow the steps below.

1.  Go to **Email Security** > **Configuration** > **Mail Flow**. Select **Anti-spoof** from the tab.

    ![PT-Antispoof-MSP.jpg](/docs-test/imported-assets/phishtitan-docs/69620-msp-mail-flow/18654e6c37ed.jpg)

2.  Select the toggle to enable or disable Anti-Spoof.

3.  Select **Save**.

###### Exploited Domains

Malicious actors frequently launch phishing attacks from free email services. You can add an alert banner to emails from these domains as a reminder to users to stay vigilant, even if the email content does not look suspicious.

To turn on alert banners in emails from these domains, follow these steps:

1.  Go to **Email Security** > **Configuration** > **Mail Flow**. Select **Frequently Exploited Domains** from the tab.

    ![ES-MSP-Exploited-Domains.jpg](/docs-test/imported-assets/phishtitan-docs/69620-msp-mail-flow/19712b3de773.jpg)

2.  Select the toggle **Add an alert banner to email from frequently exploited domains** to turn on alerts.

3.  Select **Save**.

###### Graymail

Graymail refers to solicited marketing emails and comes from a legitimate source. Your customers once subscribed to them and now may no longer open or read them. As a result, graymail falls into a category between spam and desired emails.

As an MSP admin, you can enable this feature to treat all graymail as malicious. Once enabled, an alert banner is added to graymail for all your customers. Graymail is always auto remediated.

1.  Go to **Email Security** > **Configuration** > **Mail Flow**. Select **Graymail** from the tab.

2.  Select the toggle **Treat graymail as malicious** to turn on alerts.

    ![PT-Graymail.jpg](/docs-test/imported-assets/phishtitan-docs/69620-msp-mail-flow/924133d52336.jpg)

3.  Select **Save**.

## In this Section

-   [MSP Remediation](/docs-test/titanhq/products/phishtitan/docs/email-security/msp-mail-flow/)
-   [Anti-spoof](/docs-test/titanhq/products/phishtitan/docs/email-security/msp-mail-flow/)
-   [Exploited Domains](/docs-test/titanhq/products/phishtitan/docs/email-security/msp-mail-flow/)
-   [Graymail](/docs-test/titanhq/products/phishtitan/docs/email-security/msp-mail-flow/)
