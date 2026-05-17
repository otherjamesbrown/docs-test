---
title: "Greylisting Settings"
description: "Imported from docs.titanhq.com"
---

> Source: [docs.titanhq.com](https://docs.titanhq.com/en/8924-greylisting-settings.html)
> Product: SpamTitan
> Imported content type: docs_page
> Product stream: legacy

##### Greylisting Settings

Greylisting is an anti-spam technique that rejects email from unknown sources temporarily. All SMTP compliant mail servers will defer rejected mail and resend it after a set period (usually five minutes). As servers sending spam are rarely SMTP compliant, they may not resend the rejected mail and so the spam is blocked.

Mail is identified by its triplet. A triplet is the CLIENT\_IP, SENDER, and RECIPIENT of the sending mail. If it is the first time that a triplet is seen, or the time since the last triplet with the same details is less than the Mail Delay setting, then the mail is rejected with a temporary error.

Go to **System Setup** > **Mail Relay** > **Greylisting** to view and edit greylisting settings. See the table below for a description of each setting.

![STG\_greylisting.jpg](/docs-test/imported-assets/spamtitan-legacy/8924-greylisting-settings/b79a04bcb0b8.jpg)

Setting

Description

**Greylist:**

Click **Enable** or **Disable** to turn on or off greylisting (default: disabled).

Auto-allow Client (number of successful deliveries):

Specifies the number of valid mail exchanges after which a client is added to the greylist exemptions automatically. Set to 0 if you wish to disable this feature. Auto-allow clients are not shown in the Sender IP Exemptions table.

Mail Delay (seconds):

Specifies the length of time in seconds to wait until accepting a repeated triplet as valid mail. This is automatically set to 300 (five minutes) but can be set to any number between 0 and one hour (3,600 seconds).

**Sender IP Exemptions:**

A list of client IP addresses to bypass greylisting. CIDR's are accepted.

**Sender Name Exemptions:**

A list of client hostnames to bypass greylisting. The following can be specified for sender hostname:

-   domain.addr - domain and subdomains

-   /regexp/ - anything that matches the regular expression may be used.

**Recipient Email Exemptions:**

A list of Email addresses to bypass greylisting. The following can be specified for recipient addresses:

-   domain.addr - domain and subdomains

-   name@ - name@.\*

-   name@domain.addr

-   /regexp/ - anything that matches the regular expression
