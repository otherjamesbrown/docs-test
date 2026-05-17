---
title: "SPF, DKIM & DMARC Overview"
description: "Imported from docs.titanhq.com"
---

> Source: [docs.titanhq.com](https://docs.titanhq.com/en/12726-spf,-dkim---dmarc-overview.html)
> Product: SpamTitan
> Imported content type: docs_page
> Product stream: legacy

##### SPF, DKIM & DMARC Overview

Sender Policy Framework (SPF), DomainKeys Identified Mail (DKIM) and Domain-based Message Authentication, Reporting and Conformance (DMARC) are methods and protocols to prevent email spoofing and verify the authenticity of a mail server. SPF and DKIM can be implemented independently, while DMARC uses a combination of SPF and DKIM to further secure a domain.

An email message contains two sender addresses:

1.  The _From:_ header, which usually displays the name and email address of the sender that you see in your mail client.

2.  The _Envelope From:_ or _Return-Path_ email address.

To compare these addresses to a traditional paper letter in an envelope, _Envelope From:_ is like the return address written on the envelope, and _From:_ is like the sender's signature on the letter inside the envelope. If the letter is returned, it is returned to the _Envelope From:_ address and if the recipient replies to the letter, they address it to the person who signed it.

Both types of sender addresses can be easily spoofed.

**SPF** uses a DNS record to verify the _Envelope From:_ only. This means that if a spammer spoofs the _Envelope From:_ address using a domain that has SPF enabled, it will be caught by the receiving server. However, if the spammer spoofs the _From:_ header, SPF will not catch this. An SPF DNS record essentially holds a list of all IP addresses authorized to send mail on the domain's behalf. This is an example of an SPF record:

`v=spf1 mx a ip4:89.101.246.122 include:_spf.titanhq.com ~all`

**DKIM** seals or signs an outbound mail using a digital signature. That signature can be verified by a corresponding public cryptographic key that is stored as a DNS record. DKIM can sign multiple headers of a mail or even parts of the message body. DKIM can therefore be used to verify that mail (or the signed parts of a mail) has not been altered during transit.

DKIM uses two parameters, `d=` and `i=`, to identify the sender of a mail. However, with DKIM, there is no requirement for the `d=` or `i=` values to match any of the headers in an email - so alone, it is not very useful for anti-spoofing.

This is where **DMARC** comes in.

With **DMARC**, the `d=` value in the DKIM signature must match the _From:_ header. DMARC will first check to see if the domain in the _From:_ header and the domain in the _Envelope From:_ match. If they do, it will check if the SPF verification passes. If this condition is true, you have SPF alignment, and DMARC verification will pass. However, if the domains do not match, DMARC will check to see if the domain in the _From:_ header matches the domain specified in the DKIM signature (d=example.com). If this condition is true, you have DKIM alignment and the DMARC test passes. If neither SPF or DKIM alignment checks pass, the DMARC verification fails.

This is an example of a DMARC record:

`v=DMARC1; p=quarantine; rua=mailto:test@example.com; ruf=mailto:test@example.com; pct=80;`

This example specifies that DMARC failures should be quarantined, aggregate reports and failure / forensic reports should be sent to test@example.com, and the DMARC policy should be applied to 80% of mail.

**SPF**, **DKIM** and **DMARC** all allow some form of strict or relaxed policy:

-   With SPF, the `~all` flag denotes a loose policy, meaning SPF fails are flagged but mails failing SPF verification are not blocked. The `-all` flag denotes a strict policy where mail failing SPF is blocked or rejected.

-   DMARC has additional options that allow you to select between no action/collect data only, quarantine, or reject. DMARC can also be configured to report, making it easy to test a DMARC implementation before deploying a stricter policy. Furthermore, DMARC can be configured to trigger on all mail or only on a percentage of mail.
