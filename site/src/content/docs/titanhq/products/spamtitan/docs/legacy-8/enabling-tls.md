---
title: "Enabling TLS"
description: "Imported from docs.titanhq.com"
---

> Source: [docs.titanhq.com](https://docs.titanhq.com/en/8986-enabling-tls.html)
> Product: SpamTitan
> Imported content type: docs_page
> Product stream: legacy

#### Enabling TLS

Transport Layer Security (TLS) provides a mechanism for certificate-based authentication and encryption. TLS is used to encrypt both inbound and outbound email, however, only inbound TLS requires an SSL certificate as the server receiving mail provides the certificate for outbound email.

To enable outbound TLS, go to **System Setup** > **Mail Relay** > **Outbound** > **TLS Encryption**. See [Outbound Mail Delivery Settings](/docs-test/titanhq/products/spamtitan/docs/legacy-8/outbound-mail-delivery-settings/ "Outbound Mail Delivery Settings") for more information.

To enable inbound TLS, go to **Settings** > **TLS** and click **Enable**. See the table below for a description of the inbound TLS settings.

If enabled, SpamTitan Gateway attempts to negotiate an encrypted session with the peer for the SMTP connection. If a TLS session can not be negotiated then the session reverts to plain text.

When inbound TLS is enabled, your SpamTitan Gateway server advertises STARTTLS as an available service. This means any mail server wishing to send mail to you over TLS can issue the STARTTLS command to begin TLS negotiation.

:::note
You cannot force a server that is sending you email to use TLS. That must be configured on the sending server.
:::

Field

Description

Certificate:

Choose a certificate from the drop-down list of installed certificates.

Go to **Settings** > **SSL** to manage certificates.

Include TLS info in the Received header:

Adds TLS information to the received header of all mail received using TLS. Information added includes the protocol and cipher used as well as the client and issuer CommonName.

TLS Logging:

Records TLS information in the text logs on your SpamTitan Gateway server.

TLS 1.0:

Enable or disable TLS 1.0 protocol for SMTP connections (default: disabled). Disable for increased security, or enable for greater compatibility with older mail servers.

TLS 1.1:

Enable or disable TLS 1.1 protocol for SMTP connections (default: disabled). Disable for increased security, or enable for greater compatibility with older mail servers.

Weak TLS Ciphers:

For PCI compliance, set Weak TLS Ciphers to Off (disable). Some mail transport agents may only support weaker ciphers.
