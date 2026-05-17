---
title: "New range of SpamTitan Custom Rules"
description: "Imported from docs.titanhq.com"
---

> Source: [docs.titanhq.com](https://docs.titanhq.com/en/26429-new-range-of-spamtitan-custom-rules.html)
> Product: SpamTitan
> Imported content type: docs_page
> Product stream: legacy

##### New range of SpamTitan Custom Rules

-   **ST\_RCVD\_IN\_HOSTKARMA\_W** = Sender listed in HOSTKARMA-WHITE

-   **ST\_RCVD\_IN\_HOSTKARMA\_BL** = Sender listed in HOSTKARMA-BLACK

-   **ST\_RCVD\_IN\_HOSTKARMA\_BR** = Sender listed in HOSTKARMA-BROWN

-   **ST\_RCVD\_IN\_SEMBLACK** = Received from an IP listed by SpamEatingMonkey BLACK

-   **ST\_RCVD\_IN\_NIX\_SPAM** = Listed in NIX-SPAM DNSBL (heise.de)

-   **ST\_RCVD\_IN\_MSPIKE\_BL** = Received via a relay with bad Mailspike Reputation

-   **ST\_RCVD\_IN\_SPAMRATS\_DYNA** = Sender listed in dyna.spamrats

-   **ST\_TRANSACTION1** = Catch viruses with between 1 and three capital letters followed by keywords

-   **ST\_INFO\_BADDOM** = From info at new domain

-   **ST\_VIDEO\_NASTY** = Spam links to movies

-   **ST\_SEX** = Sexually Explicit Spam

-   **ST\_CARBS** = Diet spam

-   **ST\_VID1** = Weight loss video clips

-   **ST\_ANCHOR\_VALIDATE** = uri within Anchor tag ($lt;a href=...$gt;) is different than the internal text of the tax ($lt;a$gt;...$lt;/a$gt;)

-   **ST\_WTC\_URIBL** = URI is rejected by WebTitan Cloud

-   **ST\_WORD\_WITHOUT\_VOWELS** = Long word without any vowels

-   **ST\_DIGITS\_LETTERS** = Mixed groups of letters followed by numbers

-   **ST\_SPF\_SOFTFAIL\_FREEMAIL** = Escalate SPF Softfails for free mail services

-   **ST\_SPACED\_URLS** = Body contains URLs that are space-separated at the dots

-   **ST\_SPACED\_EMAILS** = Body contains email addresses that are space-separated at the dots and/or the at symbol

-   **ST\_DEAR\_EMAILS** = Body contains "Dear user@domain.com"

-   **ST\_UNDISCLOSED\_RECIPIENTS** = To "undisclosed-recipients:;"

-   **ST\_SHORTENED\_LINKS** = punish link shorteners in emails

-   **ST\_INVALID\_DOLLARS** = A dollar amount should be separated by a period, not a comma, likely spam.

-   **ST\_APPLE\_SPAM** = Looks like an Apple Invoice, but isn't

-   **ST\_FROM\_GOOGLE\_NOT\_GMAIL** = Penalize Google Apps spamming accounts

-   **ST\_LONG\_ENVELOPE\_FROM** = Envelope From is very long

-   **ST\_LOC\_SHORT** = Contains short body and URI

-   **ST\_TOO\_MANY\_NBSP** = A large number of non-breaking space characters are used in a row, with spaces in between

-   **ST\_REPEAT\_CHAR** = The same character repeated too many times in a row in a header

-   **ADULT\_CONTENT\_BODY** = Meta test, testing for NSFW phrases and words in the rawbody

-   **ADULT\_CONTENT\_HEADER** = Meta test, testing for NSFW phrases and words in the Subject

-   **IGNORE\_BAYES\_00\_ADULT** = Cancel out BAYES\_00 test if triggered with the Adult Content Ruleset

-   **ST\_URIBL\_RFC\_CLUELESS\_DSN** = URI listed on dsn.rfc-clueless.org

-   **ST\_URIBL\_RFC\_CLUELESS\_PMR** = URI listed on postmaster.rfc-clueless.org

-   **ST\_URIBL\_RFC\_CLUELESS\_ABS** = URI listed on abuse.rfc-clueless.org

-   **ST\_URIBL\_RFC\_CLUELESS\_WHO** = URI listed on whois.rfc-clueless.org

-   **ST\_URIBL\_RFC\_CLUELESS\_BMX** = URI listed on bogusmx.rfc-clueless.org

-   **ST\_URIBL\_RFC\_CLUELESS\_MULTI** = URIs are listed on 4/5 rfc-clueless.org lists

-   **ST\_RCVD\_IN\_ANONMAILS\_LASTEXT** = Received via a relay listed in spam.dnsbl.anonmails.de

-   **ST\_RCVD\_IN\_INPS\_DE\_LASTEXT** = Received via a relay listed in inps.de DNSBL

-   **ST\_RCVD\_IN\_SPAMCANNIBAL\_LASTEXT** = Received via a relay listed in bl.spamcannibal.org

-   **ST\_RCVD\_IN\_SPAMCANNIBAL** = Passed through a relay listed in bl.spamcannibal.org

-   **ST\_RCVD\_IN\_BLOCKLIST\_DE\_LASTEXT** = Received via a relay listed in bl.blocklist.de

-   **ST\_RCVD\_IN\_BLOCKLIST\_DE** = Passed through a relay listed in bl.blocklist.de

-   **ST\_RCVD\_IN\_LASHBACK\_LASTEXT** = Received via a relay listed in Lashback unsubscore.com

-   **ST\_RCVD\_IN\_LASHBACK** = Passed through relay listed in Lashback unsubscore.com

-   **ST\_RCVD\_IN\_BACKSCATTERER\_LASTEXT** = Received via a relay listed in Backscatter RBL list

-   **ST\_RCVD\_IN\_BRBL** = Passed through a relay listed in Barracuda RBL

-   **ST\_RCVD\_IN\_S5H\_LASTEXT** = Received via a relay listed in all.s5h.net

-   **ST\_RCVD\_IN\_FABEL\_LASTEXT** = Received via a relay listed in spamsources.fabel.dk

-   **ST\_URIBL\_ZAPBL** = Contains a domain listed in the ZapBL RHSBL block list

-   **ST\_RCVD\_IN\_ZAPBL\_LASTEXT** = Received via a relay listed in ZapBL

-   **ST\_RCVD\_IN\_ZAPBL** = Passed through a relay listed in ZapBL

-   **ST\_RCVD\_IN\_DNSRBL\_LASTEXT** = Received via a relay listed in dnsrbl.org

-   **ST\_URIBL\_SARBL** = Contains an URL listed in the SARBL blocklist

-   **ST\_URIBL\_FMBLA** = Contains an URL listed in the fmb.la blocklist

-   **ST\_RCVD\_IN\_FMBLA\_LASTEXT** = Received via a relay listed in bl.fmb.la

-   **ST\_RCVD\_IN\_FMBLA** = Passed through a relay listed in bl.fmb.la

-   **ST\_URIBL\_ABUSE\_RO\_BLACK** = Contains a blocked URL at uribl.abuse.ro

-   **ST\_RCVD\_IN\_ABUSE\_RO\_LASTEXT** = Received via a relay listed in rbl.abuse.ro

-   **ST\_RCVD\_IN\_ABUSE\_RO** = Passed through a relay listed in rbl.abuse.ro

-   **ST\_ENVFROM\_IN\_ABUSE\_RO** = Envelope From: sender listed in dbl.abuse.ro

-   **ST\_RCVD\_IN\_MEGARBL\_LASTEXT** = Received via a relay listed in rbl.megarbl.net

-   **ST\_RCVD\_IN\_REALTIME\_LASTEXT** = Received via a relay listed in rbl.realtimeblacklist.com

-   **ST\_RCVD\_IN\_DRONEBL\_LASTEXT** = Received via a relay listed in dnsbl.dronebl.org

-   **ST\_RCVD\_IN\_DRONEBL** = Passed through a relay listed in dnsbl.dronebl.org

-   **ST\_URIBL\_SWINOG** = Contains a blocked URL listed in uribl.swinog.ch.

-   **ST\_RCVD\_IN\_SENDERSCORE\_90\_100** = Senderscore.org score of 90 to 100

-   **ST\_RCVD\_IN\_SENDERSCORE\_80\_89** = Senderscore.org score of 80 to 89

-   **ST\_RCVD\_IN\_SENDERSCORE\_70\_79** = Senderscore.org score of 70 to 79

-   **ST\_RCVD\_IN\_SENDERSCORE\_60\_69** = Senderscore.org score of 60 to 69

-   **ST\_RCVD\_IN\_SENDERSCORE\_50\_59** = Senderscore.org score of 50 to 59

-   **ST\_RCVD\_IN\_SENDERSCORE\_30\_49** = Senderscore.org score of 30 to 49

-   **ST\_RCVD\_IN\_SENDERSCORE\_0\_29** = Senderscore.org score of 0 to 29

-   **ST\_RCVD\_IN\_UCEPROTECT1** = Listed in dnsbl-1.uceprotect.net

-   **ST\_RCVD\_IN\_UCEPROTECT2** = Listed in dnsbl-2.uceprotect.net

-   **ST\_RCVD\_IN\_UCEPROTECT3** = Listed in dnsbl-3.uceprotect.net

-   **ST\_URIBL\_SEM** = Contains a URI listed by SEM-URI

-   **ST\_URIBL\_SEM\_RED** = Contains a URI listed by SEM-URIRED

-   **ST\_RCVD\_IN\_SEMBACKSCATTER** = Received from an IP listed by SEM-BACKSCATTER

-   **ST\_RCVD\_IN\_SEMBLACK** = Received from an IP listed by SEM-NETBLACK

-   **ST\_URIBL\_SEM\_FRESH** = Contains a domain registered less than 5 days ago

-   **ST\_URIBL\_SEM\_FRESH10** = Contains a domain registered less than 10 days ago

-   **ST\_URIBL\_SEM\_FRESH15** = Contains a domain registered less than 15 days ago

-   **ST\_URIBL\_SEM\_FRESH30** = Contains a domain registered less than 30 days ago

-   **ST\_DMARC\_FAIL\_REJECT** = DMARC validation failed and policy is to reject

-   **ST\_DMARC\_FAIL\_QUAR** = DMARC validation failed and policy is quarantine

-   **ST\_DMARC\_FAIL\_NONE** = DMARC validation failed and policy is none

-   **ST\_DMARC\_PASS\_REJECT** = DMARC validation passed and policy is to reject

-   **ST\_DMARC\_PASS\_QUAR** = DMARC validation passed and policy is quarantine

-   **ST\_DMARC\_PASS\_NONE** = DMARC validation passed and policy is none
