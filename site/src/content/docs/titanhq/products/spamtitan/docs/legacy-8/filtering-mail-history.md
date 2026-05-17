---
title: "Filtering Mail History"
description: "Imported from docs.titanhq.com"
---

> Source: [docs.titanhq.com](https://docs.titanhq.com/en/1141-filtering-mail-history.html)
> Product: SpamTitan
> Imported content type: docs_page
> Product stream: legacy

##### Filtering Mail History

Go to **Reporting** > **History** > **Mail Filters** to filter the emails in your mail history.

![STC-701-reporting-history-mail-filters.jpg](/docs-test/imported-assets/spamtitan-legacy/1141-filtering-mail-history/ae17c061fef3.jpg)

Filter using the following criteria:

-   _Message Flow:_ view email that was sent (Outbound ![ST-701-outbound-flow.jpg](/docs-test/imported-assets/spamtitan-legacy/1141-filtering-mail-history/f069ac552ce7.jpg)), received (Inbound ![ST-701-inbound-flow.jpg](/docs-test/imported-assets/spamtitan-legacy/1141-filtering-mail-history/3fbcbf354e15.jpg)) or both (Inbound and Outbound).

-   _Recipient email address_: enter a full email address or perform wildcard searches with an asterisk (\*), e.g. entering \*@example.com as the Recipient email address filter shows email sent to all users in the example.com domain.

-   _Sender email address:_ enter a full email address or perform wildcard searches with an asterisk (\*), e.g. entering \*@example.com as the Sender email address filter shows email from all users in the example.com domain.

-   _Source IP address_: filter results based on the connecting client IP address.

-   _SpamTitan ID_: a unique internal message identification number that SpamTitan Cloud assigns to each email (also known as Msg ID and appears in the Msg ID column).

-   _Score_: the SpamTitan spam score assigned to a message. Messages which are not analyzed for spam are will have no score (e.g. rejected messages)

-   _Delivery Status_: delivery status can be Any, Sent, Deferred, Bounced or Expired. Messages rejected or quarantined by SpamTitan will have no delivery status assigned to them as they have not been delivered.

-   _Subject_: filter based on message subject. Perform wildcard searches with an asterisk (\*).

-   _Message Type_: allows you to filter messages based on how they were classified by SpamTitan Cloud. The default is any type, or you can check one or several boxes to choose specific types.

Click **Apply** to filter messages.
