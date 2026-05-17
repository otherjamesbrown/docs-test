---
title: "Built-in Rules"
description: "Imported from docs.titanhq.com"
---

> Source: [docs.titanhq.com](https://docs.titanhq.com/en/25060-built-in-rules.html)
> Product: SpamTitan
> Imported content type: docs_page
> Product stream: legacy

##### Built-in Rules

Abstract

SpamTitan uses an extensive set of first and third-party rules for capturing spam, including this comprehensive set of built-in rules.

-   **GTUBE** = Generic Test for Unsolicited Bulk Email

-   **TRACKER\_ID** = Incorporates a tracking ID number

-   **WEIRD\_QUOTING** = Weird repeated double-quotation marks

-   **MIME\_HTML\_ONLY\_MULTI** = Multipart message only has text/html MIME parts

-   **MIME\_CHARSET\_FARAWAY** = MIME character set indicates a foreign language

-   **EMAIL\_ROT13** = Body contains a ROT13-encoded email address

-   **LONGWORDS** = Long string of long words

-   **MPART\_ALT\_DIFF** = HTML and text parts are different

-   **MPART\_ALT\_DIFF\_COUNT** = HTML and text parts are different

-   **BLANK\_LINES\_80\_90** = Message body has 80-90% blank lines

-   **CHARSET\_FARAWAY** = Character set indicates a foreign language

-   **MIME\_BASE64\_BLANKS** = Extra blank lines in base64 encoding

-   **MIME\_BASE64\_TEXT** = Message text disguised using base64 encoding

-   **MISSING\_MIME\_HB\_SEP** = Missing blank line between MIME header and body

-   **MIME\_HTML\_MOSTLY** = Multipart message mostly text/html MIME

-   **MIME\_HTML\_ONLY** = Message only has text/html MIME parts

-   **MIME\_QP\_LONG\_LINE** = Quoted-printable line longer than 76 chars

-   **MIME\_BAD\_ISO\_CHARSET** = MIME character set is an unknown ISO charset

-   **HTTPS\_IP\_MISMATCH** = IP to HTTPS link found in HTML

-   **HTTPS\_HTTP\_MISMATCH** = Link presents text as HTTPS://... however the link is to an HTTP://... URL

-   **URI\_TRUNCATED** = Message contained a URI which was truncated

-   **NO\_RECEIVED** = Informational: the message has no Received headers

-   **ALL\_TRUSTED** = Passed through trusted hosts only via SMTP

-   **NO\_RELAYS** = Informational: the message was not relayed via SMTP

-   **RCVD\_IN\_SORBS\_HTTP** = SORBS: sender is open HTTP proxy server

-   **RCVD\_IN\_SORBS\_SOCKS** = SORBS: sender is open SOCKS proxy server

-   **RCVD\_IN\_SORBS\_MISC** = SORBS: sender is an open proxy server

-   **RCVD\_IN\_SORBS\_SMTP** = SORBS: sender is open SMTP relay

-   **RCVD\_IN\_SORBS\_WEB** = SORBS: sender is an abusable web server

-   **RCVD\_IN\_SORBS\_BLOCK** = SORBS: sender demands to never be tested

-   **RCVD\_IN\_SORBS\_ZOMBIE** = SORBS: sender is on a hijacked network

-   **RCVD\_IN\_SORBS\_DUL** = SORBS: sent directly from the dynamic IP address

-   **RCVD\_IN\_SBL** = Received via a relay in Spamhaus SBL

-   **RCVD\_IN\_XBL** = Received via a relay in Spamhaus XBL

-   **RCVD\_IN\_PBL** = Received via a relay in Spamhaus PBL

-   **RCVD\_IN\_SBL\_CSS** = Received via a relay in Spamhaus SBL-CSS

-   **RCVD\_IN\_BL\_SPAMCOP\_NET** = Received via a relay in bl.spamcop.net

-   **RCVD\_IN\_MAPS\_RBL** = Relay in RBL

-   **RCVD\_IN\_MAPS\_DUL** = Relay in DUL

-   **RCVD\_IN\_MAPS\_RSS** = Relay in RSS

-   **RCVD\_IN\_MAPS\_OPS** = Relay in OPS

-   **RCVD\_IN\_MAPS\_NML** = Relay in NML

-   **RCVD\_IN\_IADB\_VOUCHED** = ISIPP IADB lists as a vouched-for sender

-   **RCVD\_IN\_RP\_CERTIFIED** = Sender in ReturnPath Certified - Contact cert-sa@returnpath.net

-   **RCVD\_IN\_RP\_SAFE** = Sender in ReturnPath Safe - Contact safe-sa@returnpath.net

-   **RCVD\_IN\_RP\_RNBL** = Relay in RNBL

-   **DKIMDOMAIN\_IN\_DWL** = Signing domain listed in Spamhaus DWL

-   **DKIMDOMAIN\_IN\_DWL\_UNKNOWN** = Unrecognized response from Spamhaus DWL

-   **SUBJECT\_DRUG\_GAP\_C** = Subject contains a gappy version of 'cialis'

-   **SUBJECT\_DRUG\_GAP\_L** = Subject contains a gappy version of 'levitra'

-   **SUBJECT\_DRUG\_GAP\_S** = Subject contains a gappy version of 'soma'

-   **SUBJECT\_DRUG\_GAP\_VA** = Subject contains a gappy version of 'valium'

-   **SUBJECT\_DRUG\_GAP\_X** = Subject contains a gappy version of 'xanax'

-   **DRUG\_DOSAGE** = Talks about price per dose

-   **DRUG\_ED\_CAPS** = Mentions an E.D. drug

-   **DRUG\_ED\_SILD** = Talks about an E.D. drug using its chemical name

-   **DRUG\_ED\_GENERIC** = Mentions Generic Viagra

-   **DRUG\_ED\_ONLINE** = Fast Viagra Delivery

-   **ONLINE\_PHARMACY** = Online Pharmacy

-   **NO\_PRESCRIPTION** = No prescription needed

-   **VIA\_GAP\_GRA** = Attempts to disguise the word 'viagra'

-   **DRUGS\_ERECTILE** = Refers to an erectile drug

-   **DRUGS\_ERECTILE\_OBFU** = Obfuscated reference to an erectile drug

-   **DRUGS\_DIET** = Refers to a diet drug

-   **DRUGS\_DIET\_OBFU** = Obfuscated reference to a diet drug

-   **DRUGS\_MUSCLE** = Refers to a muscle relaxant

-   **DRUGS\_ANXIETY** = Refers to an anxiety control drug

-   **DRUGS\_ANXIETY\_OBFU** = Obfuscated reference to an anxiety control drug

-   **DRUGS\_SMEAR1** = Two or more drugs crammed together into one word

-   **DRUGS\_ANXIETY\_EREC** = Refers to both an erectile and an anxiety drug

-   **DRUGS\_SLEEP\_EREC** = Refers to both an erectile and a sleep aid drug

-   **DRUGS\_MANYKINDS** = Refers to at least four kinds of drugs

-   **RDNS\_DYNAMIC** = Delivered to the internal network by host with dynamic-looking rDNS

-   **RDNS\_NONE** = Delivered to internal network by a host with no rDNS

-   **HELO\_STATIC\_HOST** = Relay HELO'd using static hostname

-   **HELO\_DYNAMIC\_IPADDR** = Relay HELO'd using suspicious hostname (IP addr 1)

-   **HELO\_DYNAMIC\_DHCP** = Relay HELO'd using suspicious hostname (DHCP)

-   **HELO\_DYNAMIC\_HCC** = Relay HELO'd using suspicious hostname (HCC)

-   **HELO\_DYNAMIC\_ROGERS** = Relay HELO'd using suspicious hostname (Rogers)

-   **HELO\_DYNAMIC\_DIALIN** = Relay HELO'd using suspicious hostname (T-Dialin)

-   **HELO\_DYNAMIC\_HEXIP** = Relay HELO'd using suspicious hostname (Hex IP)

-   **HELO\_DYNAMIC\_SPLIT\_IP** = Relay HELO'd using suspicious hostname (Split IP)

-   **HELO\_DYNAMIC\_IPADDR2** = Relay HELO'd using suspicious hostname (IP addr 2)

-   **HELO\_DYNAMIC\_CHELLO\_NL** = Relay HELO'd using suspicious hostname (Chello.nl)

-   **HELO\_DYNAMIC\_HOME\_NL** = Relay HELO'd using suspicious hostname (Home.nl)

-   **FREEMAIL\_REPLYTO** = Reply-To/From or Reply-To/body contain different freemails

-   **FREEMAIL\_REPLY** = From and body contain different freemails

-   **FREEMAIL\_FROM** = Sender email is commonly abused enduser mail provider

-   **FREEMAIL\_ENVFROM\_END\_DIGIT** = Envelope-from freemail username ends in digit

-   **FREEMAIL\_REPLYTO\_END\_DIGIT** = Reply-To freemail username ends in digit

-   **FREEMAIL\_FORGED\_REPLYTO** = Freemail in Reply-To, but not From

-   **FRAGMENTED\_MESSAGE** = Partial message

-   **FROM\_BLANK\_NAME** = From: contains empty name

-   **FROM\_STARTS\_WITH\_NUMS** = From: starts with several numbers

-   **FROM\_OFFERS** = From address is "at something-offers"

-   **FROM\_NO\_USER** = From: has no local-part before @ sign

-   **PLING\_QUERY** = Subject has an exclamation mark and question mark

-   **MSGID\_SPAM\_CAPS** = Spam tool Message-Id: (caps variant)

-   **MSGID\_SPAM\_LETTERS** = Spam tool Message-Id: (letters variant)

-   **MSGID\_RANDY** = Message-Id has pattern used in spam

-   **MSGID\_YAHOO\_CAPS** = Message-ID has ALLCAPS@yahoo.com

-   **FORGED\_MSGID\_AOL** = Message-ID is forged, (aol.com)

-   **FORGED\_MSGID\_EXCITE** = Message-ID is forged, (excite.com)

-   **FORGED\_MSGID\_HOTMAIL** = Message-ID is forged, (hotmail.com)

-   **FORGED\_MSGID\_MSN** = Message-ID is forged, (msn.com)

-   **FORGED\_MSGID\_YAHOO** = Message-ID is forged, (yahoo.com)

-   **MSGID\_FROM\_MTA\_HEADER** = Message-Id was added by a relay

-   **MSGID\_SHORT** = Message-ID is unusually short

-   **DATE\_SPAMWARE\_Y2K** = Date header uses unusual Y2K formatting

-   **INVALID\_DATE** = Invalid Date: header (not RFC 2822)

-   **INVALID\_DATE\_TZ\_ABSURD** = Invalid Date: header (timezone does not exist)

-   **INVALID\_TZ\_CST** = Invalid date in header (wrong CST timezone)

-   **INVALID\_TZ\_EST** = Invalid date in the header (wrong EST timezone)

-   **FROM\_EXCESS\_BASE64** = From: base64 encoded unnecessarily

-   **ENGLISH\_UCE\_SUBJECT** = Subject contains an English UCE tag

-   **JAPANESE\_UCE\_SUBJECT** = Subject contains a Japanese UCE tag

-   **JAPANESE\_UCE\_BODY** = Body contains Japanese UCE tag

-   **KOREAN\_UCE\_SUBJECT** = Subject: contains Korean unsolicited email tag

-   **RCVD\_DOUBLE\_IP\_SPAM** = Bulk email fingerprint (double IP) found

-   **RCVD\_DOUBLE\_IP\_LOOSE** = Received: by and from look like IP addresses

-   **FORGED\_TELESP\_RCVD** = Contains forged hostname for a DSL IP in Brazil

-   **CONFIRMED\_FORGED** = Received headers are forged

-   **MULTI\_FORGED** = Received headers indicate multiple forgeries

-   **NONEXISTENT\_CHARSET** = Character set doesn't exist

-   **MISSING\_MID** = Missing Message-Id: header

-   **MISSING\_DATE** = Missing Date: header

-   **MISSING\_SUBJECT** = Missing Subject: header

-   **MISSING\_FROM** = Missing From: header

-   **GAPPY\_SUBJECT** = Subject: contains G.a.p.p.y-T.e.x.t

-   **PREVENT\_NONDELIVERY** = Message has Prevent-NonDelivery-Report header

-   **X\_IP** = Message has X-IP header

-   **MISSING\_MIMEOLE** = Message has X-MSMail-Priority, but no X-MimeOLE

-   **SUBJ\_AS\_SEEN** = Subject contains "As Seen"

-   **SUBJ\_DOLLARS** = Subject starts with a dollar amount

-   **SUBJ\_YOUR\_FAMILY** = Subject contains "Your Family"

-   **RCVD\_FAKE\_HELO\_DOTCOM** = Received contains a faked HELO hostname

-   **SUBJECT\_DIET** = Subject talks about losing pounds

-   **MIME\_BOUND\_DD\_DIGITS** = Spam tool pattern in MIME boundary

-   **MIME\_BOUND\_DIGITS\_15** = Spam tool pattern in MIME boundary

-   **MIME\_BOUND\_MANY\_HEX** = Spam tool pattern in MIME boundary

-   **TO\_MALFORMED** = To: has a malformed address

-   **MIME\_HEADER\_CTYPE\_ONLY** = 'Content-Type' found without required MIME headers

-   **WITH\_LC\_SMTP** = Received line contains spam-sign (lowercase smtp)

-   **SUBJ\_BUY** = Subject line starts with Buy or Buying

-   **RCVD\_AM\_PM** = Received headers forged (AM/PM)

-   **FAKE\_OUTBLAZE\_RCVD** = Received header contains faked 'mr.outblaze.com'

-   **UNCLOSED\_BRACKET** = Headers contain an unclosed bracket

-   **FROM\_DOMAIN\_NOVOWEL** = From: domain has a series of non-vowel letters

-   **FROM\_LOCAL\_NOVOWEL** = From: localpart has series of non-vowel letters

-   **FROM\_LOCAL\_HEX** = From: localpart has a long hexadecimal sequence

-   **FROM\_LOCAL\_DIGITS** = From: localpart has long digit sequence

-   **X\_PRIORITY\_CC** = Cc: after X-Priority: (bulk email fingerprint)

-   **BAD\_ENC\_HEADER** = Message has bad MIME encoding in the header

-   **RCVD\_ILLEGAL\_IP** = Received: contains illegal IP address

-   **CHARSET\_FARAWAY\_HEADER** = A foreign language charset used in headers

-   **SUBJ\_ILLEGAL\_CHARS** = Subject: has too many raw illegal characters

-   **FROM\_ILLEGAL\_CHARS** = From: has too many raw illegal characters

-   **HEAD\_ILLEGAL\_CHARS** = Headers have too many raw illegal characters

-   **FORGED\_HOTMAIL\_RCVD2** = hotmail.com 'From' address, but no 'Received:'

-   **FORGED\_YAHOO\_RCVD** = 'From' yahoo.com does not match 'Received' headers

-   **SORTED\_RECIPS** = Recipient list is sorted by address

-   **SUSPICIOUS\_RECIPS** = Similar addresses in the recipient list

-   **MISSING\_HEADERS** = Missing To: header

-   **DATE\_IN\_PAST\_03\_06** = Date: is 3 to 6 hours before Received: date

-   **DATE\_IN\_PAST\_06\_12** = Date: is 6 to 12 hours before Received: date

-   **DATE\_IN\_PAST\_12\_24** = Date: is 12 to 24 hours before Received: date

-   **DATE\_IN\_PAST\_24\_48** = Date: is 24 to 48 hours before Received: date

-   **DATE\_IN\_PAST\_96\_XX** = Date: is 96 hours or more before Received: date

-   **DATE\_IN\_FUTURE\_03\_06** = Date: is 3 to 6 hours after Received: date

-   **DATE\_IN\_FUTURE\_06\_12** = Date: is 6 to 12 hours after Received: date

-   **DATE\_IN\_FUTURE\_12\_24** = Date: is 12 to 24 hours after Received: date

-   **DATE\_IN\_FUTURE\_24\_48** = Date: is 24 to 48 hours after Received: date

-   **DATE\_IN\_FUTURE\_48\_96** = Date: is 48 to 96 hours after Received: date

-   **DATE\_IN\_FUTURE\_96\_XX** = Date: is 96 hours or more after Received: date

-   **UNRESOLVED\_TEMPLATE** = Headers contain an unresolved template

-   **SUBJ\_ALL\_CAPS** = Subject is all capitals

-   **LOCALPART\_IN\_SUBJECT** = Local part of To: address appears in Subject

-   **MSGID\_OUTLOOK\_INVALID** = Message-Id is fake (in Outlook Express format)

-   **HEADER\_COUNT\_CTYPE** = Multiple Content-Type headers found

-   **HEAD\_LONG** = Message headers are very long

-   **MISSING\_HB\_SEP** = Missing blank line between message header and body

-   **UNPARSEABLE\_RELAY** = Informational: message has unparseable relay lines

-   **RCVD\_HELO\_IP\_MISMATCH** = Received: HELO and IP do not match, but should

-   **RCVD\_NUMERIC\_HELO** = Received: contains an IP address used for HELO

-   **NO\_RDNS\_DOTCOM\_HELO** = Host HELO'd as a big ISP, but had no rDNS

-   **HTML\_SHORT\_LINK\_IMG\_1** = HTML is very short with a linked image

-   **HTML\_SHORT\_LINK\_IMG\_2** = HTML is very short with a linked image

-   **HTML\_SHORT\_LINK\_IMG\_3** = HTML is very short with a linked image

-   **HTML\_SHORT\_CENTER** = HTML is very short with CENTER tag

-   **HTML\_CHARSET\_FARAWAY** = A foreign language charset used in HTML markup

-   **HTML\_MIME\_NO\_HTML\_TAG** = HTML-only message, but there is no HTML tag

-   **HTML\_MISSING\_CTYPE** = Message is HTML without HTML Content-Type

-   **HIDE\_WIN\_STATUS** = Javascript to hide URLs in browser

-   **OBFUSCATING\_COMMENT** = HTML comments which obfuscate text

-   **JS\_FROMCHARCODE** = Document is built from a Javascript charcode array

-   **HTML\_MESSAGE** = HTML included in message

-   **HTML\_COMMENT\_SHORT** = HTML comment is very short

-   **HTML\_COMMENT\_SAVED\_URL** = HTML message is a saved web page

-   **HTML\_EMBEDS** = HTML with embedded plugin object

-   **HTML\_EXTRA\_CLOSE** = HTML contains far too many close tags

-   **HTML\_FONT\_SIZE\_LARGE** = HTML font size is large

-   **HTML\_FONT\_SIZE\_HUGE** = HTML font size is huge

-   **HTML\_FONT\_LOW\_CONTRAST** = HTML font color similar or identical to background

-   **HTML\_FONT\_FACE\_BAD** = HTML font face is not a word

-   **HTML\_FORMACTION\_MAILTO** = HTML includes a form which sends mail

-   **HTML\_IMAGE\_ONLY\_04** = HTML: images with 0-400 bytes of words

-   **HTML\_IMAGE\_ONLY\_08** = HTML: images with 400-800 bytes of words

-   **HTML\_IMAGE\_ONLY\_12** = HTML: images with 800-1200 bytes of words

-   **HTML\_IMAGE\_ONLY\_16** = HTML: images with 1200-1600 bytes of words

-   **HTML\_IMAGE\_ONLY\_20** = HTML: images with 1600-2000 bytes of words

-   **HTML\_IMAGE\_ONLY\_24** = HTML: images with 2000-2400 bytes of words

-   **HTML\_IMAGE\_ONLY\_28** = HTML: images with 2400-2800 bytes of words

-   **HTML\_IMAGE\_ONLY\_32** = HTML: images with 2800-3200 bytes of words

-   **HTML\_IMAGE\_RATIO\_02** = HTML has a low ratio of text to image area

-   **HTML\_IMAGE\_RATIO\_04** = HTML has a low ratio of text to image area

-   **HTML\_IMAGE\_RATIO\_06** = HTML has a low ratio of text to image area

-   **HTML\_IMAGE\_RATIO\_08** = HTML has a low ratio of text to image area

-   **HTML\_OBFUSCATE\_05\_10** = Message is 5% to 10% HTML obfuscation

-   **HTML\_OBFUSCATE\_10\_20** = Message is 10% to 20% HTML obfuscation

-   **HTML\_OBFUSCATE\_20\_30** = Message is 20% to 30% HTML obfuscation

-   **HTML\_OBFUSCATE\_30\_40** = Message is 30% to 40% HTML obfuscation

-   **HTML\_OBFUSCATE\_50\_60** = Message is 50% to 60% HTML obfuscation

-   **HTML\_OBFUSCATE\_70\_80** = Message is 70% to 80% HTML obfuscation

-   **HTML\_OBFUSCATE\_90\_100** = Message is 90% to 100% HTML obfuscation

-   **HTML\_TAG\_BALANCE\_BODY** = HTML has unbalanced "body" tags

-   **HTML\_TAG\_BALANCE\_HEAD** = HTML has unbalanced "head" tags

-   **HTML\_TAG\_EXIST\_BGSOUND** = HTML has "bgsound" tag

-   **HTML\_BADTAG\_40\_50** = HTML message is 40% to 50% bad tags

-   **HTML\_BADTAG\_50\_60** = HTML message is 50% to 60% bad tags

-   **HTML\_BADTAG\_60\_70** = HTML message is 60% to 70% bad tags

-   **HTML\_BADTAG\_90\_100** = HTML message is 90% to 100% bad tags

-   **HTML\_NONELEMENT\_30\_40** = 30% to 40% of HTML elements are non-standard

-   **HTML\_NONELEMENT\_40\_50** = 40% to 50% of HTML elements are non-standard

-   **HTML\_NONELEMENT\_60\_70** = 60% to 70% of HTML elements are non-standard

-   **HTML\_NONELEMENT\_80\_90** = 80% to 90% of HTML elements are non-standard

-   **HTML\_IFRAME\_SRC** = Message has HTML IFRAME tag with SRC URI

-   **DC\_GIF\_UNO\_LARGO** = Message contains a single large gif image

-   **DC\_PNG\_UNO\_LARGO** = Message contains a single large png image

-   **DC\_IMAGE\_SPAM\_TEXT** = Possible Image-only spam with little text

-   **DC\_IMAGE\_SPAM\_HTML** = Possible Image-only spam

-   **RCVD\_IN\_MSPIKE\_L5** = Very bad reputation (-5)

-   **RCVD\_IN\_MSPIKE\_L4** = Bad reputation (-4)

-   **RCVD\_IN\_MSPIKE\_L3** = Low reputation (-3)

-   **RCVD\_IN\_MSPIKE\_L2** = Suspicious reputation (-2)

-   **RCVD\_IN\_MSPIKE\_H5** = Excellent reputation (+5)

-   **RCVD\_IN\_MSPIKE\_H4** = Very Good reputation (+4)

-   **RCVD\_IN\_MSPIKE\_H3** = Good reputation (+3)

-   **RCVD\_IN\_MSPIKE\_H2** = Average reputation (+2)

-   **RCVD\_IN\_MSPIKE\_BL** = Mailspike blocked

-   **RCVD\_IN\_MSPIKE\_WL** = Mailspike good senders

-   **UPPERCASE\_50\_75** = message body is 50-75% uppercase

-   **UPPERCASE\_75\_100** = message body is 75-100% uppercase

-   **INVALID\_MSGID** = Message-Id is not valid, according to RFC 2822

-   **FORGED\_MUA\_MOZILLA** = Forged mail pretending to be from Mozilla

-   **PERCENT\_RANDOM** = Message has a random macro in it

-   **EMPTY\_MESSAGE** = Message appears to have no textual parts and no Subject: text

-   **NO\_HEADERS\_MESSAGE** = Message appears to be missing most RFC-822 headers

-   **DIGEST\_MULTIPLE** = Message hits more than one network digest check

-   **NO\_DNS\_FOR\_FROM** = Envelope sender has no MX or A DNS records

-   **GMD\_PDF\_HORIZ** = Contains pdf 100-240 (high) x 450-800 (wide)

-   **GMD\_PDF\_SQUARE** = Contains pdf 180-360 (high) x 180-360 (wide)

-   **GMD\_PDF\_VERT** = Contains pdf 450-800 (high) x 100-240 (wide)

-   **GMD\_PRODUCER\_GPL** = PDF producer was GPL Ghostscript

-   **GMD\_PRODUCER\_POWERPDF** = PDF producer was PowerPDF

-   **GMD\_PRODUCER\_EASYPDF** = PDF producer was BCL easyPDF

-   **GMD\_PDF\_ENCRYPTED** = Attached PDF is encrypted

-   **GMD\_PDF\_EMPTY\_BODY** = Attached PDF with empty message body

-   **REMOVE\_BEFORE\_LINK** = Removal phrase right before a link

-   **GUARANTEED\_100\_PERCENT** = One hundred percent guaranteed

-   **DEAR\_FRIEND** = Dear Friend? That's not very dear!

-   **DEAR\_SOMETHING** = Contains 'Dear (something)'

-   **BILLION\_DOLLARS** = Talks about lots of money

-   **EXCUSE\_4** = Claims you can be removed from the list

-   **EXCUSE\_REMOVE** = Talks about how to be removed from mailings

-   **STRONG\_BUY** = Tells you about a strong buy

-   **STOCK\_ALERT** = Offers an alert about a stock

-   **NOT\_ADVISOR** = Not registered investment advisor

-   **PREST\_NON\_ACCREDITED** = 'Prestigious Non-Accredited Universities'

-   **BODY\_ENHANCEMENT** = Information on growing body parts

-   **BODY\_ENHANCEMENT2** = Information on getting larger body parts

-   **IMPOTENCE** = Impotence cure

-   **URG\_BIZ** = Contains urgent matter

-   **MONEY\_BACK** = Money back guarantee

-   **FREE\_QUOTE\_INSTANT** = Free express or no-obligation quote

-   **BAD\_CREDIT** = Eliminate Bad Credit

-   **REFINANCE\_YOUR\_HOME** = Home refinancing

-   **REFINANCE\_NOW** = Home refinancing

-   **NO\_MEDICAL** = No Medical Exams

-   **DIET\_1** = Lose Weight Spam

-   **FIN\_FREE** = Freedom of a financial nature

-   **FORWARD\_LOOKING** = Stock Disclaimer Statement

-   **ONE\_TIME** = One Time Rip Off

-   **JOIN\_MILLIONS** = Join Millions of Americans

-   **MARKETING\_PARTNERS** = Claims you registered with a partner

-   **LOW\_PRICE** = Lowest Price

-   **UNCLAIMED\_MONEY** = People just leave money laying around

-   **OBSCURED\_EMAIL** = Message seems to contain rot13ed address

-   **BANG\_OPRAH** = Talks about Oprah with an exclamation!

-   **ACT\_NOW\_CAPS** = Talks about 'acting now' with capitals

-   **MORE\_SEX** = Talks about a bigger drive for sex

-   **BANG\_GUAR** = Something is emphatically guaranteed

-   **RUDE\_HTML** = Spammer message says you need an HTML mailer

-   **INVESTMENT\_ADVICE** = Message mentions investment advice

-   **MALE\_ENHANCE** = Message talks about enhancing men

-   **PRICES\_ARE\_AFFORDABLE** = Message says that prices aren't too expensive

-   **REPLICA\_WATCH** = Message talks about a replica watch

-   **EM\_ROLEX** = Message puts emphasis on the watch manufacturer

-   **FREE\_PORN** = Possible porn - Free Porn

-   **CUM\_SHOT** = Possible porn - Cum Shot

-   **LIVE\_PORN** = Possible porn - Live Porn

-   **SUBJECT\_SEXUAL** = Subject indicates sexually-explicit content

-   **RATWARE\_EGROUPS** = Bulk email fingerprint (eGroups) found

-   **RATWARE\_OE\_MALFORMED** = X-Mailer has malformed Outlook Express version

-   **RATWARE\_MOZ\_MALFORMED** = Bulk email fingerprint (Mozilla malformed) found

-   **RATWARE\_MPOP\_WEBMAIL** = Bulk email fingerprint (mPOP Web-Mail)

-   **FORGED\_MUA\_IMS** = Forged mail pretending to be from IMS

-   **FORGED\_MUA\_OUTLOOK** = Forged mail pretending to be from MS Outlook

-   **FORGED\_MUA\_OIMO** = Forged mail pretending to be from MS Outlook IMO

-   **FORGED\_MUA\_EUDORA** = Forged mail pretending to be from Eudora

-   **FORGED\_MUA\_THEBAT\_CS** = Mail pretending to be from The Bat! (charset)

-   **FORGED\_MUA\_THEBAT\_BOUN** = Mail pretending to be from The Bat! (boundary)

-   **FORGED\_OUTLOOK\_HTML** = Outlook can't send HTML message only

-   **FORGED\_IMS\_HTML** = IMS can't send HTML message only

-   **FORGED\_THEBAT\_HTML** = The Bat! can't send HTML message only

-   **REPTO\_QUOTE\_AOL** = AOL doesn't do quoting like this

-   **REPTO\_QUOTE\_IMS** = IMS doesn't do quoting like this

-   **REPTO\_QUOTE\_MSN** = MSN doesn't do quoting like this

-   **REPTO\_QUOTE\_QUALCOMM** = Qualcomm/Eudora doesn't do quoting like this

-   **REPTO\_QUOTE\_YAHOO** = Yahoo! doesn't do quoting like this

-   **FORGED\_QUALCOMM\_TAGS** = QUALCOMM mailers can't send HTML in this format

-   **FORGED\_IMS\_TAGS** = IMS mailers can't send HTML in this format

-   **FORGED\_OUTLOOK\_TAGS** = Outlook can't send HTML in this format

-   **RATWARE\_HASH\_DASH** = Contains a hashbuster in Send-Safe format

-   **RATWARE\_ZERO\_TZ** = Bulk email fingerprint (+0000) found

-   **X\_MESSAGE\_INFO** = Bulk email fingerprint (X-Message-Info) found

-   **HEADER\_SPAM** = Bulk email fingerprint (header-based) found

-   **RATWARE\_RCVD\_PF** = Bulk email fingerprint (Received PF) found

-   **RATWARE\_RCVD\_AT** = Bulk email fingerprint (Received @) found

-   **RATWARE\_OUTLOOK\_NONAME** = Bulk email fingerprint (Outlook no name) found

-   **RATWARE\_MS\_HASH** = Bulk email fingerprint (msgid ms hash) found

-   **RATWARE\_NAME\_ID** = Bulk email fingerprint (msgid from) found

-   **RATWARE\_EFROM** = Bulk email fingerprint (envfrom) found

-   **NUMERIC\_HTTP\_ADDR** = Uses a numeric IP address in URL

-   **HTTP\_ESCAPED\_HOST** = Uses %-escapes inside a URL's hostname

-   **HTTP\_EXCESSIVE\_ESCAPES** = Completely unnecessary %-escapes inside a URL

-   **IP\_LINK\_PLUS** = Dotted-decimal IP address followed by CGI

-   **WEIRD\_PORT** = Uses non-standard port number for HTTP

-   **YAHOO\_RD\_REDIR** = Has Yahoo Redirect URI

-   **YAHOO\_DRS\_REDIR** = Has Yahoo Redirect URI

-   **HTTP\_77** = Contains an URL-encoded hostname (HTTP77)

-   **SPOOF\_COM2OTH** = URI contains ".com" in middle

-   **SPOOF\_COM2COM** = URI contains ".com" in middle and end

-   **SPOOF\_NET2COM** = URI contains ".net" or ".org", then ".com"

-   **URI\_HEX** = URI hostname has a long hexadecimal sequence

-   **URI\_NOVOWEL** = URI hostname has a long non-vowel sequence

-   **URI\_UNSUBSCRIBE** = URI contains suspicious unsubscribe link

-   **URI\_NO\_WWW\_INFO\_CGI** = CGI in .info TLD other than third-level "www"

-   **URI\_NO\_WWW\_BIZ\_CGI** = CGI in .biz TLD other than third-level "www"

-   **NORMAL\_HTTP\_TO\_IP** = URI host has a public dotted-decimal IPv4 address

-   **BOUNCE\_MESSAGE** = MTA bounce message

-   **CHALLENGE\_RESPONSE** = Challenge-Response message for mail you sent

-   **CRBOUNCE\_MESSAGE** = Challenge-Response bounce message

-   **VBOUNCE\_MESSAGE** = Virus-scanner bounce message

-   **ANY\_BOUNCE\_MESSAGE** = Message is some kind of bounce message

-   **ACCESSDB** = Message would have been caught by accessdb

-   **MICROSOFT\_EXECUTABLE** = Message includes Microsoft executable program

-   **MIME\_SUSPECT\_NAME** = MIME filename does not match content

-   **DCC\_CHECK** = Detected as bulk mail by DCC (dcc-servers.net)

-   **DCC\_REPUT\_00\_12** = DCC reputation between 0 and 12 % (mostly ham)

-   **DCC\_REPUT\_70\_89** = DCC reputation between 70 and 89 %

-   **DCC\_REPUT\_90\_94** = DCC reputation between 90 and 94 %

-   **DCC\_REPUT\_95\_98** = DCC reputation between 95 and 98 % (mostly spam)

-   **DCC\_REPUT\_99\_100** = DCC reputation between 99 % or higher (spam)

-   **DKIM\_SIGNED** = Message has a DKIM or DK signature, not necessarily valid

-   **DKIM\_VALID** = Message has at least one valid DKIM or DK signature

-   **DKIM\_VALID\_AU** = Message has a valid DKIM or DK signature from author's domain

-   **DKIM\_ADSP\_NXDOMAIN** = No valid author signature, and domain not in DNS

-   **DKIM\_ADSP\_DISCARD** = No valid author signature, domain signs all mail and suggests discarding the rest

-   **DKIM\_ADSP\_ALL** = No valid author signature, domain signs all mail

-   **DKIM\_ADSP\_CUSTOM\_LOW** = No valid author signature, adsp\_override is CUSTOM\_LOW

-   **DKIM\_ADSP\_CUSTOM\_MED** = No valid author signature, adsp\_override is CUSTOM\_MED

-   **DKIM\_ADSP\_CUSTOM\_HIGH** = No valid author signature, adsp\_override is CUSTOM\_HIGH

-   **NML\_ADSP\_CUSTOM\_LOW** = ADSP custom\_low hit, and not from a mailing list

-   **NML\_ADSP\_CUSTOM\_MED** = ADSP custom\_med hit, and not from a mailing list

-   **NML\_ADSP\_CUSTOM\_HIGH** = ADSP custom\_high hit, and not from a mailing list

-   **HASHCASH\_20** = Contains valid Hashcash token (20 bits)

-   **HASHCASH\_21** = Contains valid Hashcash token (21 bits)

-   **HASHCASH\_22** = Contains valid Hashcash token (22 bits)

-   **HASHCASH\_23** = Contains valid Hashcash token (23 bits)

-   **HASHCASH\_24** = Contains valid Hashcash token (24 bits)

-   **HASHCASH\_25** = Contains valid Hashcash token (25 bits)

-   **HASHCASH\_HIGH** = Contains valid Hashcash token (>25 bits)

-   **HASHCASH\_2SPEND** = Hashcash token already spent in another mail

-   **SUBJECT\_FUZZY\_MEDS** = Attempt to obfuscate words in Subject:

-   **SUBJECT\_FUZZY\_VPILL** = Attempt to obfuscate words in Subject:

-   **SUBJECT\_FUZZY\_CHEAP** = Attempt to obfuscate words in Subject:

-   **SUBJECT\_FUZZY\_PENIS** = Attempt to obfuscate words in Subject:

-   **SUBJECT\_FUZZY\_TION** = Attempt to obfuscate words in Subject:

-   **FUZZY\_AFFORDABLE** = Attempt to obfuscate words in spam

-   **FUZZY\_AMBIEN** = Attempt to obfuscate words in spam

-   **FUZZY\_BILLION** = Attempt to obfuscate words in spam

-   **FUZZY\_CPILL** = Attempt to obfuscate words in spam

-   **FUZZY\_CREDIT** = Attempt to obfuscate words in spam

-   **FUZZY\_ERECT** = Attempt to obfuscate words in spam

-   **FUZZY\_GUARANTEE** = Attempt to obfuscate words in spam

-   **FUZZY\_MEDICATION** = Attempt to obfuscate words in spam

-   **FUZZY\_MILLION** = Attempt to obfuscate words in spam

-   **FUZZY\_MONEY** = Attempt to obfuscate words in spam

-   **FUZZY\_MORTGAGE** = Attempt to obfuscate words in spam

-   **FUZZY\_OBLIGATION** = Attempt to obfuscate words in spam

-   **FUZZY\_OFFERS** = Attempt to obfuscate words in spam

-   **FUZZY\_PHARMACY** = Attempt to obfuscate words in spam

-   **FUZZY\_PHENT** = Attempt to obfuscate words in spam

-   **FUZZY\_PRESCRIPT** = Attempt to obfuscate words in spam

-   **FUZZY\_PRICES** = Attempt to obfuscate words in spam

-   **FUZZY\_REFINANCE** = Attempt to obfuscate words in spam

-   **FUZZY\_REMOVE** = Attempt to obfuscate words in spam

-   **FUZZY\_ROLEX** = Attempt to obfuscate words in spam

-   **FUZZY\_SOFTWARE** = Attempt to obfuscate words in spam

-   **FUZZY\_THOUSANDS** = Attempt to obfuscate words in spam

-   **FUZZY\_VLIUM** = Attempt to obfuscate words in spam

-   **FUZZY\_VIOXX** = Attempt to obfuscate words in spam

-   **FUZZY\_VPILL** = Attempt to obfuscate words in spam

-   **FUZZY\_XPILL** = Attempt to obfuscate words in spam

-   **SPF\_PASS** = SPF: sender matches SPF record

-   **SPF\_NEUTRAL** = SPF: sender does not match SPF record (neutral)

-   **SPF\_FAIL** = SPF: sender does not match SPF record (fail)

-   **SPF\_SOFTFAIL** = SPF: sender does not match SPF record (softfail)

-   **SPF\_HELO\_PASS** = SPF: HELO matches SPF record

-   **SPF\_HELO\_NEUTRAL** = SPF: HELO does not match SPF record (neutral)

-   **SPF\_HELO\_FAIL** = SPF: HELO does not match SPF record (fail)

-   **SPF\_HELO\_SOFTFAIL** = SPF: HELO does not match SPF record (softfail)

-   **SPF\_NONE** = SPF: sender does not publish an SPF Record

-   **SPF\_HELO\_NONE** = SPF: HELO does not publish an SPF Record

-   **UNWANTED\_LANGUAGE\_BODY** = Message written in an undesired language

-   **BODY\_8BITS** = Body includes 8 consecutive 8-bit characters

-   **URIBL\_SBL** = Contains an URL's NS IP listed in the SBL blocklist

-   **URIBL\_DBL\_SPAM** = Contains a spam URL listed in the DBL blocklist

-   **URIBL\_DBL\_PHISH** = Contains a Phishing URL listed in the DBL blocklist

-   **URIBL\_DBL\_MALWARE** = Contains a malware URL listed in the DBL blocklist

-   **URIBL\_DBL\_BOTNETCC** = Contains a botnet C&C URL listed in the DBL blocklist

-   **URIBL\_DBL\_ABUSE\_SPAM** = Contains an abused spamvertized URL listed in the DBL blocklist

-   **URIBL\_DBL\_ABUSE\_REDIR** = Contains an abused redirector URL listed in the DBL blocklist

-   **URIBL\_DBL\_ABUSE\_PHISH** = Contains an abused phishing URL listed in the DBL blocklist

-   **URIBL\_DBL\_ABUSE\_MALW** = Contains an abused malware URL listed in the DBL blocklist

-   **URIBL\_DBL\_ABUSE\_BOTCC** = Contains an abused botnet C&C URL listed in the DBL blocklist

-   **URIBL\_DBL\_ERROR** = Error: queried the DBL blocklist for an IP

-   **URIBL\_WS\_SURBL** = Contains an URL listed in the WS SURBL blocklist

-   **URIBL\_PH\_SURBL** = Contains an URL listed in the PH SURBL blocklist

-   **URIBL\_MW\_SURBL** = Contains a URL listed in the MW SURBL blocklist

-   **URIBL\_CR\_SURBL** = Contains an URL listed in the CR SURBL blocklist

-   **URIBL\_ABUSE\_SURBL** = Contains an URL listed in the ABUSE SURBL blocklist

-   **SURBL\_BLOCKED** = ADMINISTRATOR NOTICE: The query to SURBL was blocked. See [http://wiki.apache.org/spamassassin/DnsBlocklists/#dnsbl-block](http://wiki.apache.org/spamassassin/DnsBlocklists/#dnsbl-block) for more information.

-   **URIBL\_BLACK** = Contains an URL listed in the URIBL block list

-   **URIBL\_GREY** = Contains an URL listed in the URIBL greylist

-   **URIBL\_RED** = Contains an URL listed in the URIBL redlist

-   **URIBL\_BLOCKED** = ADMINISTRATOR NOTICE: The query to URIBL was blocked. See [http://wiki.apache.org/spamassassin/DnsBlocklists/#dnsbl-block](http://wiki.apache.org/spamassassin/DnsBlocklists/#dnsbl-block) for more information.

-   **AWL** = Adjusted score from AWL reputation of From: address

-   **SHORTCIRCUIT** = Not all rules were run, due to a shortcircuited rule

-   **TXREP** = Score normalizing based on the sender's reputation

-   **USER\_IN\_BLACKLIST** = From: address is in the user's block list

-   **USER\_IN\_WHITELIST** = From: address is in the user's allow list

-   **USER\_IN\_DEF\_WHITELIST** = From: address is in the default allow list

-   **USER\_IN\_BLACKLIST\_TO** = User is listed in 'blacklist\_to'

-   **USER\_IN\_WHITELIST\_TO** = User is listed in 'whitelist\_to'

-   **USER\_IN\_MORE\_SPAM\_TO** = User is listed in 'more\_spam\_to'

-   **USER\_IN\_ALL\_SPAM\_TO** = User is listed in 'all\_spam\_to'

-   **URI\_HOST\_IN\_BLACKLIST** = host or domain listed in the URI block list

-   **URI\_HOST\_IN\_WHITELIST** = host or domain listed in the URI allow list

-   **HEADER\_HOST\_IN\_BLACKLIST** = Blocked header host or domain

-   **HEADER\_HOST\_IN\_WHITELIST** = Allowed header host or domain

-   **USER\_IN\_DKIM\_WHITELIST** = From: address is in the user's DKIM allow list

-   **USER\_IN\_DEF\_DKIM\_WL** = From: address is in the default DKIM allow list

-   **USER\_IN\_SPF\_WHITELIST** = From: address is in the user's SPF allow list

-   **USER\_IN\_DEF\_SPF\_WL** = From: address is in the default SPF allow list

-   **ENV\_AND\_HDR\_SPF\_MATCH** = Env and Hdr From used in default SPF WL Match

-   **SUBJECT\_IN\_WHITELIST** = Subject: contains string in the user's allow list

-   **SUBJECT\_IN\_BLACKLIST** = Subject: contains a string in the user's block list

-   **AC\_BR\_BONANZA** = Too many newlines in a row... spammy template

-   **AC\_DIV\_BONANZA** = Too many divs in a row... spammy template

-   **AC\_HTML\_NONSENSE\_TAGS** = Many consecutive multi-letter HTML tags, likely nonsense/spam

-   **AC\_SPAMMY\_URI\_PATTERNS1** = link combos match highly spammy template

-   **AC\_SPAMMY\_URI\_PATTERNS10** = link combos match highly spammy template

-   **AC\_SPAMMY\_URI\_PATTERNS11** = link combos match highly spammy template

-   **AC\_SPAMMY\_URI\_PATTERNS12** = link combos match highly spammy template

-   **AC\_SPAMMY\_URI\_PATTERNS2** = link combos match highly spammy template

-   **AC\_SPAMMY\_URI\_PATTERNS3** = link combos match highly spammy template

-   **AC\_SPAMMY\_URI\_PATTERNS4** = link combos match highly spammy template

-   **AC\_SPAMMY\_URI\_PATTERNS8** = link combos match highly spammy template

-   **AC\_SPAMMY\_URI\_PATTERNS9** = link combos match highly spammy template

-   **ADMAIL** = "admail" and variants

-   **ADMITS\_SPAM** = Admits this is an ad

-   **ADVANCE\_FEE\_2\_NEW\_FORM** = Advance Fee fraud and a form

-   **ADVANCE\_FEE\_2\_NEW\_MONEY** = Advance Fee fraud and lots of money

-   **ADVANCE\_FEE\_3\_NEW** = Appears to be advance fee fraud (Nigerian 419)

-   **ADVANCE\_FEE\_3\_NEW\_FORM** = Advance Fee fraud and a form

-   **ADVANCE\_FEE\_3\_NEW\_MONEY** = Advance Fee fraud and lots of money

-   **ADVANCE\_FEE\_4\_NEW** = Appears to be advance fee fraud (Nigerian 419)

-   **ADVANCE\_FEE\_4\_NEW\_MONEY** = Advance Fee fraud and lots of money

-   **ADVANCE\_FEE\_5\_NEW\_FRM\_MNY** = Advance Fee fraud form and lots of money

-   **ADVANCE\_FEE\_5\_NEW\_MONEY** = Advance Fee fraud and lots of money

-   **AD\_PREFS** = Advertising preferences

-   **APOSTROPHE\_FROM** = From address contains an apostrophe

-   **AXB\_XMAILER\_MIMEOLE\_OL\_024C2** = Yet another X header trait

-   **AXB\_XMAILER\_MIMEOLE\_OL\_1ECD5** = Yet another X header trait##} AXB\_XMAILER\_MIMEOLE\_OL\_1ECD5

-   **AXB\_X\_FF\_SEZ\_S** = Forefront sez this is spam

-   **BANKING\_LAWS** = Talks about banking laws

-   **BASE64\_LENGTH\_79\_INF** = base64 encoded email part uses line length of 78 or 79 characters

-   **BASE64\_LENGTH\_79\_INF** = base64 encoded email part uses line length greater than 79 characters

-   **BODY\_SINGLE\_URI** = Message body is only a URI

-   **BODY\_SINGLE\_WORD** = Message body is only one word (no spaces)

-   **BODY\_URI\_ONLY** = Message body is only a URI in one line of text or for an image

-   **BOGUS\_MSM\_HDRS** = Apparently bogus Microsoft email headers

-   **CANT\_SEE\_AD** = You really want to see our spam.

-   **CK\_HELO\_DYNAMIC\_SPLIT\_IP** = Relay HELO'd using a suspicious hostname (Split IP)

-   **CK\_HELO\_GENERIC** = Relay used name indicative of a Dynamic Pool or Generic rPTR

-   **CN\_B2B\_SPAMMER** = Chinese company introducing itself

-   **COMMENT\_GIBBERISH** = Nonsense in long HTML comment

-   **COMPENSATION** = "Compensation"

-   **CORRUPT\_FROM\_LINE\_IN\_HDRS** = Informational: the message is corrupt, with a From line in its headers

-   **CTYPE\_8SPACE\_GIF** = Stock spam image part 'Content-Type' found (8 spc)

-   **DATE\_IN\_FUTURE\_96\_Q** = Date: is 4 days to 4 months after Received: date

-   **DEAR\_BENEFICIARY** = Dear Beneficiary:

-   **DEAR\_WINNER** = Spam with a generic salutation of "dear winner"

-   **DOS\_ANAL\_SPAM\_MAILER** = X-mailer pattern common to anal porn site spam

-   **DOS\_FIX\_MY\_URI** = Looks like a "fix my obfu'd URI please" spam

-   **DOS\_HIGH\_BAT\_TO\_MX** = The Bat! Direct to MX with High Bits

-   **DOS\_LET\_GO\_JOB** = Let go from their job and now makes lots of dough!

-   **DOS\_OE\_TO\_MX** = Delivered directly to MX with OE headers

-   **DOS\_OE\_TO\_MX\_IMAGE** = Direct to MX with OE headers and an image

-   **DOS\_OUTLOOK\_TO\_MX** = Delivered directly to MX with Outlook headers

-   **DOS\_RCVD\_IP\_TWICE\_C** = Received from the same IP twice in a row (only one external relay; empty or IP helo)

-   **DOS\_STOCK\_BAT** = Probable pump and dump stock spam

-   **DOS\_URI\_ASTERISK** = Found an asterisk in a URI

-   **DOS\_YOUR\_PLACE** = Russian dating spam

-   **DRUGS\_HDIA** = Subject mentions "hoodia"

-   **DRUGS\_STOCK\_MIMEOLE** = Stock-spam forged headers found (5510)

-   **DX\_TEXT\_01** = "message status"

-   **DX\_TEXT\_02** = "change your message stat"

-   **DX\_TEXT\_03** = "XXX Media Group"

-   **DYN\_RDNS\_AND\_INLINE\_IMAGE** = Contains image, and was sent by dynamic rDNS

-   **DYN\_RDNS\_SHORT\_HELO\_HTML** = Sent by dynamic rDNS, short HELO, and HTML

-   **DYN\_RDNS\_SHORT\_HELO\_IMAGE** = Short HELO string, dynamic rDNS, inline image

-   **ENCRYPTED\_MESSAGE** = Message is encrypted, not likely to be spam

-   **EXCUSE\_24** = Claims you wanted this ad

-   **FBI\_MONEY** = The FBI wants to give you lots of money?

-   **FBI\_SPOOF** = Claims to be FBI, but not from FBI domain

-   **FORM\_FRAUD** = Fill a form and a fraud phrase

-   **FORM\_FRAUD\_3** = Fill a form and several fraud phrases

-   **FORM\_FRAUD\_5** = Fill a form and many fraud phrases

-   **FORM\_LOW\_CONTRAST** = Fill in a form with hidden text

-   **FOUND\_YOU** = I found you...

-   **FROM\_IN\_TO\_AND\_SUBJ** = From address is in To and Subject

-   **FROM\_MISSPACED** = From: missing whitespace

-   **FROM\_MISSP\_MSFT** = From misspaced + supposed Microsoft tool

-   **FROM\_MISSP\_REPLYTO** = From misspaced, has Reply-To

-   **FROM\_MISSP\_TO\_UNDISC** = From misspaced, To undisclosed

-   **FROM\_MISSP\_USER** = From misspaced, from "User"

-   **FROM\_MISSP\_XPRIO** = Misspaced FROM + X-Priority

-   **FROM\_WORDY** = From address looks like a sentence

-   **FROM\_WORDY\_SHORT** = From address looks like a sentence + short message

-   **FROM\_WSP\_TRAIL** = Trailing whitespace before '>' in From header field

-   **FSL\_CTYPE\_WIN1251** = Content-Type only seen in 419 spam

-   **FSL\_NEW\_HELO\_USER** = Spam's using Helo and User

-   **FUZZY\_MERIDIA** = Obfuscation of the word "meridia"

-   **GOOGLE\_DOCS\_PHISH** = Possible phishing via a Google Docs form

-   **GOOGLE\_DOCS\_PHISH\_MANY** = Phishing via a Google Docs form

-   **GOOG\_MALWARE\_DNLD** = File download via Google - Malware?

-   **GOOG\_REDIR\_SHORT** = Google redirect to obscure spamvertised website + short message

-   **HDRS\_LCASE** = Odd capitalization of the message header

-   **HDRS\_MISSP** = Misspaced headers

-   **HDR\_ORDER\_FTSDMCXX\_001C** = Header order similar to spam (FTSDMCXX/MID variant)

-   **HDR\_ORDER\_FTSDMCXX\_BAT** = Header order similar to spam (FTSDMCXX/boundary variant)

-   **HEADER\_COUNT\_SUBJECT** = Multiple Subject headers found

-   **HELO\_MISC\_IP** = Looking for more Dynamic IP Relays

-   **HEXHASH\_WORD** = Multiple instances of word + hexadecimal hash

-   **HK\_NAME\_DRUGS** = From name contains drugs

-   **HK\_RANDOM\_ENVFROM** = Envelope sender username looks random

-   **HTML\_OFF\_PAGE** = HTML element rendered well off the displayed page

-   **KHOP\_DYNAMIC** = Relay looks like a dynamic address

-   **LIST\_PARTIAL\_SHORT\_MSG** = Incomplete mailing list headers + short message

-   **LIST\_PRTL\_PUMPDUMP** = Incomplete List-\* headers and stock pump-and-dump

-   **LIST\_PRTL\_SAME\_USER** = Incomplete List-\* headers and from+to user the same

-   **LONG\_HEX\_URI** = Very long purely hexadecimal URI

-   **LONG\_IMG\_URI** = Image URI with very long path component - web bug?

-   **LOOPHOLE\_1** = A loophole in the banking laws?

-   **LOTTO\_AGENT** = Claims Agent

-   **LUCRATIVE** = Make lots of money!

-   **MANY\_HDRS\_LCASE** = Odd capitalization of multiple message headers

-   **MANY\_SPAN\_IN\_TEXT** = Many <SPAN> tags embedded within text

-   **MILLION\_USD** = Talks about millions of dollars

-   **MIMEOLE\_DIRECT\_TO\_MX** = MIMEOLE + direct-to-MX

-   **MONEY\_ATM\_CARD** = Lots of money on an ATM card

-   **MONEY\_FRAUD\_3** = Lots of money and several fraud phrases

-   **MONEY\_FRAUD\_5** = Lots of money and many fraud phrases

-   **MONEY\_FRAUD\_8** = Lots of money and very many fraud phrases

-   **MONEY\_FROM\_41** = Lots of money from Africa

-   **MONEY\_FROM\_MISSP** = Lots of money and misspaced From

-   **MSGID\_MULTIPLE\_AT** = Message-ID contains multiple '@' characters

-   **MSGID\_NOFQDN1** = Message-ID with no domain name

-   **MSM\_PRIO\_REPTO** = MSMail priority header + Reply-to + short subject

-   **NSL\_RCVD\_FROM\_USER** = Received from User

-   **NSL\_RCVD\_HELO\_USER** = Received from HELO User

-   **NULL\_IN\_BODY** = Message has NUL (ASCII 0) byte in the message

-   **OBFU\_JVSCR\_ESC** = Injects content using obfuscated javascript

-   **PART\_CID\_STOCK** = Has a spammy image attachment (by Content-ID)

-   **PART\_CID\_STOCK\_LESS** = Has a spammy image attachment (by Content-ID, more specific)

-   **PHP\_NOVER\_MUA** = Mail from PHP with no version number

-   **PHP\_ORIG\_SCRIPT** = Sent by bot & other signs

-   **PHP\_SCRIPT\_MUA** = Sent by PHP script, no version number

-   **PUMPDUMP** = Pump-and-dump stock scam phrase

-   **PUMPDUMP\_MULTI** = Pump-and-dump stock scam phrases

-   **PUMPDUMP\_TIP** = Pump-and-dump stock tip

-   **RAND\_HEADER\_MANY** = Many random gibberish message headers

-   **RCVD\_BAD\_ID** = Received header contains id field with bad characters

-   **RCVD\_DBL\_DQ** = Malformatted message header

-   **RCVD\_FORGED\_WROTE** = Forged 'Received' header found ('wrote:' spam)

-   **RCVD\_IN\_DNSWL\_BLOCKED** = ADMINISTRATOR NOTICE: The query to DNSWL was blocked. See [http://wiki.apache.org/spamassassin/DnsBlocklists/#dnsbl-block](http://wiki.apache.org/spamassassin/DnsBlocklists/#dnsbl-block) for more information.

-   **RCVD\_IN\_DNSWL\_HI** = Sender listed at [http://www.dnswl.org/](http://www.dnswl.org/), high trust

-   **RCVD\_IN\_DNSWL\_LOW** = Sender listed at [http://www.dnswl.org/](http://www.dnswl.org/), low trust

-   **RCVD\_IN\_DNSWL\_MED** = Sender listed at [http://www.dnswl.org/](http://www.dnswl.org/), medium trust

-   **RCVD\_IN\_DNSWL\_NONE** = Sender listed at [http://www.dnswl.org/](http://www.dnswl.org/), no trust

-   **RCVD\_IN\_IADB\_DK** = IADB: Sender publishes Domain Keys record

-   **RCVD\_IN\_IADB\_DOPTIN** = IADB: All mailing list mail is confirmed opt-in

-   **RCVD\_IN\_IADB\_DOPTIN\_GT50** = IADB: Confirmed opt-in used more than 50% of the time

-   **RCVD\_IN\_IADB\_DOPTIN\_LT50** = IADB: Confirmed opt-in used less than 50% of the time

-   **RCVD\_IN\_IADB\_EDDB** = IADB: Participates in Email Deliverability Database

-   **RCVD\_IN\_IADB\_EPIA** = IADB: Member of Email Processing Industry Alliance

-   **RCVD\_IN\_IADB\_GOODMAIL** = IADB: Sender has been certified by GoodMail

-   **RCVD\_IN\_IADB\_LISTED** = Participates in the IADB system

-   **RCVD\_IN\_IADB\_LOOSE** = IADB: Adds relationship addrs w/out opt-in

-   **RCVD\_IN\_IADB\_MI\_CPEAR** = IADB: Complies with Michigan's CPEAR law

-   **RCVD\_IN\_IADB\_MI\_CPR\_30** = IADB: Checked lists against Michigan's CPR within 30 days

-   **RCVD\_IN\_IADB\_MI\_CPR\_MAT** = IADB: Sends no material under Michigan's CPR

-   **RCVD\_IN\_IADB\_ML\_DOPTIN** = IADB: Mailing list email only, confirmed opt-in

-   **RCVD\_IN\_IADB\_NOCONTROL** = IADB: Has absolutely no mailing controls in place

-   **RCVD\_IN\_IADB\_OOO** = IADB: One-to-one/transactional email only

-   **RCVD\_IN\_IADB\_OPTIN** = IADB: All mailing list mail is opt-in

-   **RCVD\_IN\_IADB\_OPTIN\_GT50** = IADB: Opt-in used more than 50% of the time

-   **RCVD\_IN\_IADB\_OPTIN\_LT50** = IADB: Opt-in used less than 50% of the time

-   **RCVD\_IN\_IADB\_OPTOUTONLY** = IADB: Scrapes addresses, pure opt-out only

-   **RCVD\_IN\_IADB\_RDNS** = IADB: Sender has reverse DNS record

-   **RCVD\_IN\_IADB\_SENDERID** = IADB: Sender publishes Sender ID record

-   **RCVD\_IN\_IADB\_SPF** = IADB: Sender publishes SPF record

-   **RCVD\_IN\_IADB\_UNVERIFIED\_1** = IADB: Accepts unverified sign-ups

-   **RCVD\_IN\_IADB\_UNVERIFIED\_2** = IADB: Accepts unverified sign-ups, gives chance to opt out

-   **RCVD\_IN\_IADB\_UT\_CPEAR** = IADB: Complies with Utah's CPEAR law

-   **RCVD\_IN\_IADB\_UT\_CPR\_30** = IADB: Checked lists against Utah's CPR within 30 days

-   **RCVD\_IN\_IADB\_UT\_CPR\_MAT** = IADB: Sends no material under Utah's CPR

-   **RCVD\_IN\_PSBL** = Received via a relay in PSBL

-   **RCVD\_MAIL\_COM** = Forged Received header (contains post.com or mail.com)

-   **RDNS\_LOCALHOST** = Sender's public rDNS is "localhost"

-   **RISK\_FREE** = No risk!

-   **SERGIO\_SUBJECT\_VIAGRA01** = Viagra garbled subject

-   **SHORT\_HELO\_AND\_INLINE\_IMAGE** = Short HELO string, with inline image

-   **SINGLETS\_LOW\_CONTRAST** = Single-letter formatted HTML + hidden text

-   **SPAMMY\_XMAILER** = X-Mailer string is common in spam and not in ham

-   **SPOOFED\_FREEM\_REPTO** = Forged freemail sender with freemail reply-to

-   **SPOOFED\_FREEM\_REPTO\_CHN** = Forged freemail sender with Chinese freemail reply-to

-   **STATIC\_XPRIO\_OLE** = Static RDNS + X-Priority + MIMEOLE

-   **STOCK\_IMG\_CTYPE** = Stock spam image part, with distinctive Content-Type header

-   **STOCK\_IMG\_HDR\_FROM** = Stock spam image part, with distinctive From line

-   **STOCK\_IMG\_HTML** = Stock spam image part, with distinctive HTML

-   **STOCK\_IMG\_OUTLOOK** = Stock spam image part, with Outlook-like features

-   **STOCK\_LOW\_CONTRAST** = Stocks + hidden text

-   **STOCK\_TIP** = Stock tips

-   **STYLE\_GIBBERISH** = Nonsense in HTML <STYLE> tag

-   **SUBJECT\_NEEDS\_ENCODING** = Subject is encoded but does not specify the encoding

-   **SYSADMIN** = Supposedly from your IT department

-   **TBIRD\_SUSP\_MIME\_BDRY** = Unlikely Thunderbird MIME boundary

-   **TEQF\_USR\_IMAGE** = To and from user nearly same + image

-   **TEQF\_USR\_MSGID\_HEX** = To and from user nearly same + unusual message ID

-   **TEQF\_USR\_MSGID\_MALF** = To and from user nearly same + malformed message ID

-   **THIS\_AD** = "This ad" and variants

-   **TO\_IN\_SUBJ** = To address is in Subject

-   **TO\_NO\_BRKTS\_DYNIP** = To: lacks brackets and dynamic rDNS

-   **TO\_NO\_BRKTS\_FROM\_MSSP** = Multiple header formatting problems

-   **TO\_NO\_BRKTS\_HTML\_IMG** = To: lacks brackets and HTML and one image

-   **TO\_NO\_BRKTS\_HTML\_ONLY** = To: lacks brackets and HTML only

-   **TO\_NO\_BRKTS\_MSFT** = To: lacks brackets and supposed Microsoft tool

-   **TO\_NO\_BRKTS\_NORDNS\_HTML** = To: lacks brackets and no rDNS and HTML only

-   **TO\_NO\_BRKTS\_PCNT** = To: lacks brackets + percentage

-   **TT\_MSGID\_TRUNC** = Scora: Message-Id ends after left-bracket + digits

-   **TT\_OBSCURED\_VALIUM** = Scora: obscured "VALIUM" in subject

-   **TT\_OBSCURED\_VIAGRA** = Scora: obscured "VIAGRA" in subject

-   **TVD\_ACT\_193** = Message refers to an act passed in the 1930s

-   **TVD\_APPROVED** = Body states that the recipient has been approved

-   **TVD\_DEAR\_HOMEOWNER** = Spam with the generic salutation of "dear homeowner"

-   **TVD\_ENVFROM\_APOST** = Envelope From contains single-quote

-   **TVD\_FLOAT\_GENERAL** = Message uses CSS float style

-   **TVD\_FUZZY\_DEGREE** = Obfuscation of the word "degree"

-   **TVD\_FUZZY\_FINANCE** = Obfuscation of the word "finance"

-   **TVD\_FUZZY\_FIXED\_RATE** = Obfuscation of the phrase "fixed rate"

-   **TVD\_FUZZY\_MICROCAP** = Obfuscation of the word "micro-cap"

-   **TVD\_FUZZY\_PHARMACEUTICAL** = Obfuscation of the word "pharmaceutical"

-   **TVD\_FUZZY\_SYMBOL** = Obfuscation of the word "symbol"

-   **TVD\_FW\_GRAPHIC\_NAME\_LONG** = Long image attachment name

-   **TVD\_FW\_GRAPHIC\_NAME\_MID** = Medium sized image attachment name

-   **TVD\_INCREASE\_SIZE** = Advertising for penis enlargement

-   **TVD\_LINK\_SAVE** = Spam with the text "link to save"

-   **TVD\_PH\_BODY\_ACCOUNTS\_PRE** = The body matches phrases such as "accounts suspended", "account credited", "account verification"

-   **TVD\_PH\_REC** = Message includes a phrase commonly used in phishing mails

-   **TVD\_PH\_SEC** = Message includes a phrase commonly used in phishing mails

-   **TVD\_QUAL\_MEDS** = The body matches phrases such as "quality meds" or "quality medication"

-   **TVD\_RATWARE\_CB** = Content-Type header that is commonly indicative of ratware

-   **TVD\_RATWARE\_CB\_2** = Content-Type header that is commonly indicative of ratware

-   **TVD\_RATWARE\_MSGID\_02** = Ratware with a Message-ID header that is entirely lower-case

-   **TVD\_RCVD\_IP** = Message was received from an IP address

-   **TVD\_RCVD\_IP4** = Message was received from an IPv4 address

-   **TVD\_RCVD\_SINGLE** = Message was received from localhost

-   **TVD\_SECTION** = References to specific legal codes

-   **TVD\_SILLY\_URI\_OBFU** = URI obfuscation that can fool a URIBL or a uri rule

-   **TVD\_SPACED\_SUBJECT\_WORD3** = Entire subject is "UPPERlowerUPPER" with no whitespace

-   **TVD\_SPACE\_ENCODED** = Space ratio & encoded subject

-   **TVD\_SPACE\_ENC\_FM\_MIME** = Space ratio & encoded subject & MIME needed

-   **TVD\_SPACE\_RATIO\_MINFP** = Space ratio

-   **TVD\_STOCK1** = Spam related to stock trading

-   **TVD\_SUBJ\_ACC\_NUM** = Subject has spammy looking monetary reference

-   **TVD\_SUBJ\_FINGER\_03** = Entire subject is enclosed in asterisks "\* like so \*"

-   **TVD\_SUBJ\_OWE** = Subject line states that the recipient is in debt

-   **TVD\_SUBJ\_WIPE\_DEBT** = Spam advertising a way to eliminate debt

-   **TVD\_VISIT\_PHARMA** = Body mentions online pharmacy

-   **TVD\_VIS\_HIDDEN** = Invisible textarea HTML tags

-   **TW\_GIBBERISH\_MANY** = Lots of gibberish text to spoof pattern matching filters

-   **T\_DATE\_IN\_FUTURE\_Q\_PLUS** = Date: is over 4 months after Received: date

-   **T\_DOS\_OUTLOOK\_TO\_MX\_IMAGE** = Direct to MX with Outlook headers and an image

-   **T\_EMRCP** = "Excess Maximum Return Capital Profit" scam

-   **T\_END\_FUTURE\_EMAILS** = Spammy unsubscribe

-   **T\_LOTTO\_AGENT\_FM** = Claims Agent

-   **T\_LOTTO\_AGENT\_RPLY** = Claims Agent

-   **T\_LOTTO\_URI** = Claims Department URL

-   **T\_RP\_MATCHES\_RCVD** = Envelope sender domain matches handover relay domain

-   **T\_SHARE\_50\_50** = Share the money 50/50

-   **UC\_GIBBERISH\_OBFU** = Multiple instances of "word VERYLONGGIBBERISH word"

-   **URIBL\_RHS\_DOB** = Contains a URI of a new domain (Day Old Bread)

-   **URI\_DATA** = "data:" URI - possible malware or phish

-   **URI\_DQ\_UNSUB** = IP-address unsubscribe URI

-   **URI\_GOOGLE\_PROXY** = Accessing a blocked URI or obscuring the source of phish via Google proxy?

-   **URI\_ONLY\_MSGID\_MALF** = URI only + malformed message ID

-   **URI\_OPTOUT\_3LD** = Opt-out URI, suspicious hostname

-   **URI\_OPTOUT\_USME** = Opt-out URI, unusual TLD

-   **URI\_PHISH** = Phishing using web form

-   **URI\_TRY\_3LD** = "Try it" URI, suspicious hostname

-   **URI\_TRY\_USME** = "Try it" URI, unusual TLD

-   **URI\_WPADMIN** = WordPress login/admin URI, possible phishing

-   **URI\_WP\_DIRINDEX** = URI for compromised WordPress site, possible malware

-   **URI\_WP\_HACKED** = URI for compromised WordPress site, possible malware

-   **URI\_WP\_HACKED\_2** = URI for compromised WordPress site, possible malware

-   **XM\_PHPMAILER\_FORGED** = Apparently forged header

-   **XPRIO** = Has X-Priority header

-   **XPRIO\_SHORT\_SUBJ** = Has X-Priority header + short subject

-   **URIBL\_SC\_SURBL** = Contains an URL listed in the SC SURBL blocklist

-   **URIBL\_WS\_SURBL** = Contains an URL listed in the WS SURBL blocklist

-   **URIBL\_PH\_SURBL** = Contains an URL listed in the PH SURBL blocklist

-   **URIBL\_MW\_SURBL** = Contains a Malware Domain or IP listed in the MW SURBL blocklist

-   **URIBL\_AB\_SURBL** = Contains an URL listed in the AB SURBL blocklist

-   **URIBL\_JP\_SURBL** = Contains an URL listed in the JP SURBL blocklist
