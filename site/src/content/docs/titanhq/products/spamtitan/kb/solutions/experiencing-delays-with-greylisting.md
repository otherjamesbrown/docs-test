---
title: "Experiencing Delays with Greylisting? Print"
description: "Imported from helpdesk.spamtitan.com"
---

> Source: [helpdesk.spamtitan.com](https://helpdesk.spamtitan.com/support/solutions/articles/4000189399-experiencing-delays-with-greylisting-)
> Product: SpamTitan
> Imported content type: kb_article
> Source folder: Solutions
> Modified: Tue, 6 Dec, 2022 at 12:58 PM

![](/docs-test/imported-assets/spamtitan-kb/4000189399/569fc657a5f9.jpg)

### What is Greylisting

Greylisting temporarily rejects all email and requires the sending server to send it again after 5 minutes. This delay is beneficial as:

-   Spammers will generally not retry to send an email, while legitimate servers do.

-   The delay gives time for an IP address to be listed on RBLs if it is spam.

While greylisting is highly effective at blocking spam it comes at the cost of mail being delayed by 5 to 10 minutes, depending on the sending server.

### Note

Mail delays are expected when greylisting is enabled.

### Greylisting Settings: Reducing Mail Delay

You can decrease the mail delay setting to reduce the possibility of mail delay when greylisting is enabled

1.  Log in to SpamTitan as a global admin.

2.  Go to **System Setup** > **Mail Relay** > **Greylisting** and locate the _Mail Delay (seconds)_ field. By default, this is set to 240 seconds, meaning there is a delay of 240 seconds before an email is accepted after it was deferred by greylisting.

3.  Decreasing the number of seconds in the Mail Delay setting reduces the chance of a mail being delayed if the sending mail server re-sends it too early. Consider decreasing this setting to 180 seconds, meaning the wait period before a mail is accepted _after_ it is deferred by greylisting is 3 minutes.

4.  Select **Save**.

### Warning

Reducing the greylisting mail delay setting increases your risk of receiving spam.

Also, mail delays _may_ not improve by reducing this setting, as it is the decision of the sending mail server to resend a mail after it has been deferred by greylisting.

For documentation on this and other greylisting settings, see [Greylisting Settings](https://docs.titanhq.com/en/8924-greylisting-settings.html).
