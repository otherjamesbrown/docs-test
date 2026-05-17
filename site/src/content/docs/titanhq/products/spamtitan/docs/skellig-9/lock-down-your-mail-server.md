---
title: "Lock Down Your Mail Server"
description: "Imported from support.titanhq.com"
---

> Source: [support.titanhq.com](https://support.titanhq.com/en/56393-lock-down-your-mail-server.html)
> Product: SpamTitan
> Imported content type: docs_page
> Product stream: skellig

### Lock Down Your Mail Server

Following best security practices, you should lock down your email server to only accept email from SpamTitan. Leaving it open to accept email from other sources leaves your mail server exposed to an attack and limits SpamTitan's effectiveness.

If you are an Office 365 customer, see [Locking Down Your Office 365 Mail Server](/docs-test/titanhq/products/spamtitan/docs/skellig-9/locking-down-your-office-365-mail-server/ "Locking Down Your Office 365 Mail Server").

From the table below, select the corresponding IPs on the same row as your SpamTitan login URL. Then, set up your email server to only accept mail from those IPs.

#### SpamTitan Servers

There are a number of SpamTitan servers, one of which your account is on. Find your login URL in the table below to see the corresponding MX and IPs to use during setup.

SpamTitan Login URL

Corresponding MX

Corresponding IPs

[https://us1-smtp-ui.titanhq.com](https://us1-smtp-ui.titanhq.com/)

us1-smtp-mx1.titanhq.com

us1-smtp-mx2.titanhq.com

18.218.73.72

18.116.252.179

18.225.12.231

18.220.209.97

3.20.181.16

3.21.255.101

3.140.160.184

[https://us2-smtp-ui.titanhq.com](https://us2-smtp-ui.titanhq.com/)

us2-smtp-mx1.titanhq.com

us2-smtp-mx2.titanhq.com

3.134.134.92

3.130.28.189

18.216.227.84

18.189.8.252

3.22.148.152

3.140.150.54

13.58.252.85

[https://us3-smtp-ui.titanhq.com](https://us3-smtp-ui.titanhq.com/)

us3-smtp-mx1.titanhq.com

us3-smtp-mx2.titanhq.com

18.219.82.30

52.14.176.194

3.145.228.208

3.23.166.50

3.143.188.200

[https://us4-smtp-ui.titanhq.com](http://https//us4-smtp-ui.titanhq.com)

us4-smtp-mx1.titanhq.com

us4-smtp-mx2.titanhq.com

3.136.238.115

3.131.225.49

3.147.24.97

3.20.154.217

3.23.0.105

[https://eu1-smtp-ui.titanhq.com](https://eu1-smtp-ui.titanhq.com/)

eu1-smtp-mx1.titanhq.com

eu1-smtp-mx2.titanhq.com

35.158.242.254

35.158.11.197

3.70.162.203

3.125.67.59

35.156.73.189

[https://uk1-smtp-ui.titanhq.com](https://uk1-smtp-ui.titanhq.com/)

uk1-smtp-mx1.titanhq.com

uk1-smtp-mx2.titanhq.com

18.132.0.23

3.10.37.203

13.41.39.52

18.169.71.187

18.130.54.77

[https://ap1-smtp-ui.titanhq.com](https://ap1-smtp-ui.titanhq.com/)

ap1-smtp-mx1.titanhq.com

ap1-smtp-mx2.titanhq.com

54.79.176.213

52.64.232.127

52.64.119.67

52.65.201.69

13.236.192.114

[https://ca1-smtp-ui.titanhq.com/](https://ca1-smtp-ui.titanhq.com/)

ca1-smtp-mx1.titanhq.com

ca1-smtp-mx2.titanhq.com

3.98.148.253

52.60.182.38

3.97.130.60

35.182.209.239

3.97.166.19

## In this Section

-   [SpamTitan Servers](/docs-test/titanhq/products/spamtitan/docs/skellig-9/lock-down-your-mail-server/)
-   [Locking Down Your Office 365 Mail Server](/docs-test/titanhq/products/spamtitan/docs/skellig-9/locking-down-your-office-365-mail-server/)
