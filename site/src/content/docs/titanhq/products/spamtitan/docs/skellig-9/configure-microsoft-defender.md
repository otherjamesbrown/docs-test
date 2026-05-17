---
title: "Configure Microsoft Defender"
description: "Imported from support.titanhq.com"
---

> Source: [support.titanhq.com](https://support.titanhq.com/en/77794-configure-microsoft-defender.html)
> Product: SpamTitan
> Imported content type: docs_page
> Product stream: skellig

### Configure Microsoft Defender

Follow the steps below to allow Exchange to send copies of reported mails to a shared mailbox.

1.  Go to [Microsoft 365 admin center](https://admin.cloud.microsoft/) and in the left navigation menu, select **Admin centers** > **Security**.

    ![ST-Skellig-Config-MS-Security.jpg](/docs-test/imported-assets/spamtitan-skellig/77794-configure-microsoft-defender/e380c1282c83.jpg)

2.  Select **System** > **Settings**, and then **Email & collaboration**.

    ![ST-Skellig-Create-Exchange-Rule4.jpg](/docs-test/imported-assets/spamtitan-skellig/77794-configure-microsoft-defender/1b604a2a3c51.jpg)

3.  In the left panel, select **User reported settings**, and then scroll down to **Reported message destinations**. In the **Add an exchange online mailbox to send reported message to**, enter the shared mailbox you created, which is _report-email-cybersentriq_.

    ![ST-Skellig-Config-MS-Security3.jpg](/docs-test/imported-assets/spamtitan-skellig/77794-configure-microsoft-defender/ee69ec02309c.jpg)

4.  Select **Save**.

Now when you use your Outlook client to report suspicious mails, copies of the reported mails will also be sent to your SpamTitan server for analysis.
