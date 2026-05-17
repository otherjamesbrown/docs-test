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

<table><colgroup><col><col></colgroup><thead><tr><th><p>Setting</p></th><th><p>Description</p></th></tr></thead><tbody><tr><td><p><span><strong>Greylist:</strong></span></p></td><td><p>Click <span><strong>Enable</strong></span> or <span><strong>Disable</strong></span> to turn on or off greylisting (default: disabled).</p></td></tr><tr><td><p>Auto-allow Client (number of successful deliveries):</p></td><td><p>Specifies the number of valid mail exchanges after which a client is added to the greylist exemptions automatically. Set to 0 if you wish to disable this feature. Auto-allow clients are not shown in the Sender IP Exemptions table.</p></td></tr><tr><td><p>Mail Delay (seconds):</p></td><td><p>Specifies the length of time in seconds to wait until accepting a repeated triplet as valid mail. This is automatically set to 300 (five minutes) but can be set to any number between 0 and one hour (3,600 seconds).</p></td></tr><tr><td><p><span><strong>Sender IP Exemptions:</strong></span></p></td><td><p>A list of client IP addresses to bypass greylisting. CIDR's are accepted.</p></td></tr><tr><td><p><span><strong>Sender Name Exemptions:</strong></span></p></td><td><p>A list of client hostnames to bypass greylisting. The following can be specified for sender hostname:</p><div><ul><li><p>domain.addr - domain and subdomains</p></li><li><p>/regexp/ - anything that matches the regular expression may be used.</p></li></ul></div></td></tr><tr><td><p><span><strong>Recipient Email Exemptions:</strong></span></p></td><td><p>A list of Email addresses to bypass greylisting. The following can be specified for recipient addresses:</p><div><ul><li><p>domain.addr - domain and subdomains</p></li><li><p>name@ - name@.*</p></li><li><p>name@domain.addr</p></li><li><p>/regexp/ - anything that matches the regular expression</p></li></ul></div></td></tr></tbody></table>
