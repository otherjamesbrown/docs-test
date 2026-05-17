---
title: "Customer Remediation"
description: "Imported from support.titanhq.com"
---

> Source: [support.titanhq.com](https://support.titanhq.com/en/68390-customer-remediation.html)
> Product: PhishTitan
> Imported content type: docs_page
> Product stream: email-security

###### Customer Remediation

Remediation is the process of assessing and taking action on malicious emails. Go to **Email Security** > **Configuration** > **Mail Flow** > **Remediation**, where you can select automatic remediation for all your users or keep the default option of manual remediation. You can also decide whether to send remediated emails to the junk folder or the deleted items folder.

:::note
When auto remediation is selected at the MSP level, it is enabled for all customers. However, a customer admin can revert to manual remediation, and override the auto remediation setting by the MSP. It is important to note that once the customer admin overrides the MSP selection, inheritance between the MSP level and the customer level is broken.
:::

The Remediation tab is active by default when you access the Mail Flow page.

![PT-Remediation\_Customer.jpg](/docs-test/imported-assets/phishtitan-docs/68390-customer-remediation/f283e5b9c8c3.jpg)

1.  Choose how to remediate malicious email:

    -   **Manual remediation (default)**: By default, Email Security is configured for manual remediation, which means that administrators must assess user-reported threats and select a remediation option.

        Administrators will need to assess and manage those emails by going to **Email Security** > **Incidents** and viewing the Action Needed tab. See [Incidents](/docs-test/titanhq/products/phishtitan/docs/email-security/incidents/ "Incidents") for additional information.

    -   **Auto remediation for all users**: If you select this option, then all malicious emails for all your users are automatically removed from affected inboxes.

        You can view the emails that have been auto remediated in the Resolved tab at **Email Security** > **Incidents**. If you decide that the email is safe, you can choose to add the sender to the Allow List or mark the email as safe. See [Incidents](/docs-test/titanhq/products/phishtitan/docs/email-security/incidents/ "Incidents") for additional information.

2.  Choose where to send remediated email:

    -   **Junk Email folder (default)**: Remediated emails are automatically sent to junk folders.

    -   **Deleted Items folder**: Remediated emails are automatically sent to deleted items folders.

3.  If you decide to change the default settings of **Manual remediation** and/or **Junk Email folder**, select **Save**. You'll be prompted to confirm your decision in pop-up window.
