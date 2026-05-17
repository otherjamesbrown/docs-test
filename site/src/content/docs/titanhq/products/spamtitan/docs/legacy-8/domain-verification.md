---
title: "Domain Verification"
description: "Imported from docs.titanhq.com"
---

> Source: [docs.titanhq.com](https://docs.titanhq.com/en/29261-domain-verification.html)
> Product: SpamTitan
> Imported content type: docs_page
> Product stream: legacy

###### Domain Verification

Domains can be verified in SpamTitan by either MX record or email. Domains must be verified before you can pass your mail through SpamTitan. Follow the steps below to select a domain verification method.

:::note
Enabling this option adds the _domain\_verification_ field to domain API results.
:::

MX Record Verification

Follow these steps to add the SpamTitan MX record to your authoritative Domain Name Server (DNS):

1.  Go to **System Setup** > **Mail Relay** > **General Settings**.

2.  From the _Domain verification method:_ dropdown menu select **Add a MX record** or **Any**. To revalidate all existing domains, select the **(all domains)** option.

    :::danger[Warning]
    If **(all domains)** is selected, all mail for your existing domains is rejected until your MX records are updated and verified.
    :::

3.  Go to **Mail Relay** > **Domains** and click the test ![ST-701-test-button.jpg](/docs-test/imported-assets/spamtitan-legacy/29261-domain-verification/1d6f3f2c36e2.jpg) icon in the Options column for your unverified domain.

4.  Copy the MX entry that is displayed and add it to your MX records (set up with your authoritative Domain Name Server (DNS)).

    MX entry examples (these are examples _only_, do not use as your SpamTitan MX record. Use the entry displayed on the Send Test Email window.):

    -   mydomain.com. 21600 IN MX 10 mailserver1.mydomain.com.

    -   mydomain.com. 21600 IN MX 15 mailserver2.mydomain.com.

    -   mydomain.com. 21600 IN MX 99 xxxxxxxxxxxxxxxxxxxxxxxxxxx.mydomain.com.

    :::tip
    You may see mail in the message log after making this MX record change. This is because spammers routinely send mail to all MX records for a domain.
    :::

5.  Once you have made the change to your MX records, go to **Mail Relay** > **Domains** and click the test ![ST-701-test-button.jpg](/docs-test/imported-assets/spamtitan-legacy/29261-domain-verification/1d6f3f2c36e2.jpg) icon again in the Options column. SpamTitan should see the changes made and verify your domain. If the domain does not verify correctly, check that your MX changes are live by using one of the following websites to return your MX information:

    -   [http://mxtoolbox.com/](https://mxtoolbox.com/) ![external\_link.png](/docs-test/imported-assets/spamtitan-legacy/29261-domain-verification/e926db1b58ca.png)

    -   [https://toolbox.googleapps.com/apps/dig/](https://toolbox.googleapps.com/apps/dig/) ![external\_link.png](/docs-test/imported-assets/spamtitan-legacy/29261-domain-verification/e926db1b58ca.png) (select the MX option)

If your domain's MX records are not yet showing the SpamTitan MX record after completing the steps above, you will need to wait until they do before your domain can be verified.

Email verification

Follow these steps to verify a domain by sending an email to the postmaster of the domain:

1.  Go to **System Setup** > **Mail Relay** > **General Settings**.

2.  From the _Domain verification method:_ dropdown menu select **Send an email to postmaster address** or **Any**. To revalidate all existing domains, select the **(all domains)** option.

3.  If you selected **(all domains)** in step 2, add one or more new domains if required.

4.  To verify a domain, click the link in the email sent to the postmaster for the domain. If an email is not received by the postmaster, contact your mail administrator to verify that your domain has a postmaster account and that it accepts all mail.
