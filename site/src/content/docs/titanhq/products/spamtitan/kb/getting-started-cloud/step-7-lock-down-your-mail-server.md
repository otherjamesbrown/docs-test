---
title: "Step 7: Lock Down Your Mail Server Print"
description: "Imported from helpdesk.spamtitan.com"
---

> Source: [helpdesk.spamtitan.com](https://helpdesk.spamtitan.com/support/solutions/articles/4000186893-step-7-lock-down-your-mail-server)
> Product: SpamTitan
> Imported content type: kb_article
> Source folder: Getting Started: SpamTitan Cloud
> Modified: Wed, 14 Sep, 2022 at 7:00 PM

Following best security practice, you should lock down your email server to only accept email from SpamTitan Cloud. Leaving it open to accept email from other sources leaves your mail server exposed to an attack and limits the effectiveness of SpamTitan Cloud.

If you are an Office 365 customer, see [Locking down your Office 365 mail server](https://helpdesk.spamtitan.com/a/solutions/articles/4000186898#UUID-0572793a-3179-4568-9eb0-a3214230d5f3).

### Important

The IP addresses below are for new SpamTitan Cloud customers completing their initial setup.

If you are an existing customer, you may be using different IP addresses. See [SpamTitan Cloud Server IP Addresses](https://helpdesk.spamtitan.com/a/solutions/articles/4000186932#UUID-e3a9d5a7-71a7-85e2-3a15-054bdff1e740) for more information.

Set up your email server to only accept mail from the following [FQDN](https://helpdesk.spamtitan.com/a/solutions/articles/4000186909#UUID-eba93e97-daef-28fa-9be6-cbbbbc733d79) IP addresses:

-   cloudv.spamtitan.com  ( 18.188.207.172 )

-   cloudw.spamtitan.com  ( 18.190.56.214 )

-   cloudx.spamtitan.com  ( 18.216.101.235 )
