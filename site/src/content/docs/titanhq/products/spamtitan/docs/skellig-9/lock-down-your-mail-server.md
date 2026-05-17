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

<table><colgroup><col align="left"><col align="left"><col align="left"></colgroup><thead><tr><th><p>SpamTitan Login URL</p></th><th><p>Corresponding MX</p></th><th><p>Corresponding IPs</p></th></tr></thead><tbody><tr><td><p><a href="https://us1-smtp-ui.titanhq.com/" target="_blank" rel="noopener">https://us1-smtp-ui.titanhq.com</a></p></td><td><p>us1-smtp-mx1.titanhq.com</p><p>us1-smtp-mx2.titanhq.com</p></td><td><p>18.218.73.72</p><p>18.116.252.179</p><p>18.225.12.231</p><p>18.220.209.97</p><p>3.20.181.16</p><p>3.21.255.101</p><p>3.140.160.184</p></td></tr><tr><td><p><a href="https://us2-smtp-ui.titanhq.com/" target="_blank" rel="noopener">https://us2-smtp-ui.titanhq.com</a></p></td><td><p>us2-smtp-mx1.titanhq.com</p><p>us2-smtp-mx2.titanhq.com</p></td><td><p>3.134.134.92</p><p>3.130.28.189</p><p>18.216.227.84</p><p>18.189.8.252</p><p>3.22.148.152</p><p>3.140.150.54</p><p>13.58.252.85</p></td></tr><tr><td><p><a href="https://us3-smtp-ui.titanhq.com/" target="_blank" rel="noopener">https://us3-smtp-ui.titanhq.com</a></p></td><td><p>us3-smtp-mx1.titanhq.com</p><p>us3-smtp-mx2.titanhq.com</p></td><td><p>18.219.82.30</p><p>52.14.176.194</p><p>3.145.228.208</p><p>3.23.166.50</p><p>3.143.188.200</p></td></tr><tr><td><p><a href="http://https//us4-smtp-ui.titanhq.com" target="_blank" rel="noopener">https://us4-smtp-ui.titanhq.com</a></p></td><td><p>us4-smtp-mx1.titanhq.com</p><p>us4-smtp-mx2.titanhq.com</p></td><td><p>3.136.238.115</p><p>3.131.225.49</p><p>3.147.24.97</p><p>3.20.154.217</p><p>3.23.0.105</p></td></tr><tr><td><p><a href="https://eu1-smtp-ui.titanhq.com/" target="_blank" rel="noopener">https://eu1-smtp-ui.titanhq.com</a></p></td><td><p>eu1-smtp-mx1.titanhq.com</p><p>eu1-smtp-mx2.titanhq.com</p></td><td><p>35.158.242.254</p><p>35.158.11.197</p><p>3.70.162.203</p><p>3.125.67.59</p><p>35.156.73.189</p></td></tr><tr><td><p><a href="https://uk1-smtp-ui.titanhq.com/" target="_blank" rel="noopener">https://uk1-smtp-ui.titanhq.com</a></p></td><td><p>uk1-smtp-mx1.titanhq.com</p><p>uk1-smtp-mx2.titanhq.com</p></td><td><p>18.132.0.23</p><p>3.10.37.203</p><p>13.41.39.52</p><p>18.169.71.187</p><p>18.130.54.77</p></td></tr><tr><td><p><a href="https://ap1-smtp-ui.titanhq.com/" target="_blank" rel="noopener">https://ap1-smtp-ui.titanhq.com</a></p></td><td><p>ap1-smtp-mx1.titanhq.com</p><p>ap1-smtp-mx2.titanhq.com</p></td><td><p>54.79.176.213</p><p>52.64.232.127</p><p>52.64.119.67</p><p>52.65.201.69</p><p>13.236.192.114</p></td></tr><tr><td><p><a href="https://ca1-smtp-ui.titanhq.com/" target="_blank" rel="noopener">https://ca1-smtp-ui.titanhq.com/</a></p></td><td><p>ca1-smtp-mx1.titanhq.com</p><p>ca1-smtp-mx2.titanhq.com</p></td><td><p>3.98.148.253</p><p>52.60.182.38</p><p>3.97.130.60</p><p>35.182.209.239</p><p>3.97.166.19</p></td></tr></tbody></table>

## In this Section

-   [SpamTitan Servers](/docs-test/titanhq/products/spamtitan/docs/skellig-9/lock-down-your-mail-server/)
-   [Locking Down Your Office 365 Mail Server](/docs-test/titanhq/products/spamtitan/docs/skellig-9/locking-down-your-office-365-mail-server/)
