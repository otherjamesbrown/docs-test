---
title: "Create an Exchange Connector"
description: "Imported from support.titanhq.com"
---

> Source: [support.titanhq.com](https://support.titanhq.com/en/77792-create-an-exchange-connector.html)
> Product: SpamTitan
> Imported content type: docs_page
> Product stream: skellig

### Create an Exchange Connector

After you've created a shared mailbox, you'll need to create an Exchange Connector to forward copies of reported mails to a specified SpamTitan server.

1.  In [Exchange admin center](https://admin.exchange.microsoft.com/), go to the left navigation menu, and select **Mailflow** > **Connectors**. Select **Add a connector**.

    ![ST-Skellig-Create-Connector.jpg](/docs-test/imported-assets/spamtitan-skellig/77792-create-an-exchange-connector/52e7c7ff2ca9.jpg)

2.  In the New connector window, select **Office 365** under **Connection from**. Select **Your organization's email server** under **Connection to**.

    ![ST-Skellig-Create-Connector1.jpg](/docs-test/imported-assets/spamtitan-skellig/77792-create-an-exchange-connector/50e73dc0165e.jpg)

3.  Select **Next**.

4.  In the Connector name window, enter the name for your connector, for example, _Reported Email Redirect_. Add an optional description.

5.  Under **What do you want to do after connector is saved?**, select **Turn it on**.

    ![ST-Skellig-Create-Connector2.jpg](/docs-test/imported-assets/spamtitan-skellig/77792-create-an-exchange-connector/a56b1a9b931e.jpg)

6.  Select **Next**.

7.  In the Use of connector window, select **Only when I have a transport rule set up that redirects messages to this connector**.

    ![ST-Skellig-Create-Connector3.jpg](/docs-test/imported-assets/spamtitan-skellig/77792-create-an-exchange-connector/c21bcd35f462.jpg)

8.  Select **Next**.

9.  For Routing, enter the MX FQDN for the SpamTitan service you are using. This is usually one of the MX records for your email domain, for example, eu1-smtp-mx1.titanhq.com. Select **+**.

    ![ST-Skellig-Create-Connector4.jpg](/docs-test/imported-assets/spamtitan-skellig/77792-create-an-exchange-connector/3ab77f3c8337.jpg)

10.  Select **Next**.

11.  In the Security restrictions window, use **Always use Transport Layer Security (TLS) to secure the connection (recommended)**, which is selected by default. Select **Any digital certificate, including self-signed certificates**.

     ![ST-Skellig-Create-Connector5.jpg](/docs-test/imported-assets/spamtitan-skellig/77792-create-an-exchange-connector/7d9ebec94c2f.jpg)

12.  Select **Next**.

13.  In the Validation email window, enter an email address for an active mailbox on your email server; for example, _report-email-cybersentriq@ yourdomain.com_ and select **+**. Select **Validate**.

     ![ST-Skellig-Create-Connector6.jpg](/docs-test/imported-assets/spamtitan-skellig/77792-create-an-exchange-connector/848de7118436.jpg)

14.  Select **Next**.

15.  Review the connector information, and select **Create Connector**.

     ![ST-Skellig-Create-Connector7.jpg](/docs-test/imported-assets/spamtitan-skellig/77792-create-an-exchange-connector/f37fa90ae3c9.jpg)

16.  Select **Done**.

Next, [create an Exchange Rule](/docs-test/titanhq/products/spamtitan/docs/skellig-9/create-an-exchange-rule/ "Create an Exchange Rule").
