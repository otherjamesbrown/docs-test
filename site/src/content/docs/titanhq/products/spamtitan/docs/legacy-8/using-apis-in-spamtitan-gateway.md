---
title: "Using APIs in SpamTitan Gateway"
description: "Imported from docs.titanhq.com"
---

> Source: [docs.titanhq.com](https://docs.titanhq.com/en/10547-using-apis-in-spamtitan-gateway.html)
> Product: SpamTitan
> Imported content type: docs_page
> Product stream: legacy

#### Using APIs in SpamTitan Gateway

SpamTitan can be managed remotely using the SpamTitan API set. SpamTitan APIs are a set of scripts that can be used to perform tasks from within your own environment. For example, adding multiple domains or allow list entries can be time-consuming using the SpamTitan UI, but can be quickly executed using APIs.

REST API access is based on use of an authorization token. Go to **Settings** > **User Management** > **RestAPI Keys** to view, add and revoke tokens.

![STG-RestAPI-keys.jpg](/docs-test/imported-assets/spamtitan-legacy/10547-using-apis-in-spamtitan-gateway/560b06406768.jpg)

Go to [api-spamtitan.titanhq.com](https://api-spamtitan.titanhq.com/) to review the full SpamTitan REST API set and documentation.

Legacy APIs

For customers who built functionality using our legacy APIs, access to SpamTitan APIs is restricted to the IP addresses listed in **Settings** > **Access/Authentication** > **API Allowed Hosts**.

:::note[Notice]
It is recommended that all customers move to REST API.
:::
