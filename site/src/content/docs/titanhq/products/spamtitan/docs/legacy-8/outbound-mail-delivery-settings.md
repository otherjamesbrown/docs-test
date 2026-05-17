---
title: "Outbound Mail Delivery Settings"
description: "Imported from docs.titanhq.com"
---

> Source: [docs.titanhq.com](https://docs.titanhq.com/en/8920-outbound-mail-delivery-settings.html)
> Product: SpamTitan
> Imported content type: docs_page
> Product stream: legacy

##### Outbound Mail Delivery Settings

Go to **System Setup** > **Mail Relay** > **Outbound** to configure settings for outbound mail delivery. See below for further information on editing each of the outbound mail delivery settings.

Setting

Description

Hostname of Outbound relay(s):

Lists the hostname of the relay(s) that you send your outbound mail through. This can be used to 'rescue' legitimate bounce messages that were generated in response to mail you did send. If a bounce message is found, and it contains one of these hostnames in a Received header in the bounced message, it will not be marked as a blow back virus-bounce.

-   To add a new relay, enter the hostname of the relay and click **Add**.

-   To edit an entry for an existing relay, click on the edit ![ST-701-edit-button.jpg](/docs-test/imported-assets/spamtitan-legacy/8920-outbound-mail-delivery-settings/7455a85c9b68.jpg) icon in the Options column.

-   To delete an entry, click on the delete ![ST-701-delete-button.jpg](/docs-test/imported-assets/spamtitan-legacy/8920-outbound-mail-delivery-settings/3b2dc809e314.jpg) icon in the Options column.

Trusted Networks:

The trusted networks table lists those IP addresses and networks that are allowed to relay mail through SpamTitan (only necessary if you are delivering outbound mail).

:::note
Trusted network settings are not clustered.
:::

-   To add a new trusted network/IP, click **Add...** and the Add Trusted IP/Network window displays. Using the table below as a reference, complete the fields and click **Save** to save your entry.

-   To edit an entry, click on the edit ![ST-701-edit-button.jpg](/docs-test/imported-assets/spamtitan-legacy/8920-outbound-mail-delivery-settings/7455a85c9b68.jpg) icon in the Options column. Using the table below as a reference, complete the fields and click **Save** to save your entry.

-   To delete an entry, click on the delete ![ST-701-delete-button.jpg](/docs-test/imported-assets/spamtitan-legacy/8920-outbound-mail-delivery-settings/3b2dc809e314.jpg) icon in the Options column. To delete multiple entries, check the box ![ST-701-check-box.jpg](/docs-test/imported-assets/spamtitan-legacy/8920-outbound-mail-delivery-settings/d19d75015111.jpg) to the left of all entries you want to delete and click **Delete**.

Field

Description

IP/Network:

An individual IP address or network range which is trusted to relay mail outbound through SpamTitan.

Netmask:

Select the netmask for the specified IP address. Individual IPv4 addresses will have a /32 (255.255.255.255) netmask.

Address Type:

IPv4 (default) or IPv6.

Comment:

Optional comment for this entry.

Verify Domain on Outbound Relay:

When enabled, SpamTitan Gateway checks that mail from a trusted network is either coming from or going to a domain listed in your Domains table (**System Setup** > **Mail Relay** > **Domains**).

This prevents potential viruses on your network sending Spam out from domains you do not manage (default: disabled).

:::note[Important]
This feature does not work against SASL authenticated email.
:::

Enable Smarthost:

A Smart Host is a mail server that allows SpamTitan Gateway to send mail via an intermediate server, instead of directly to the recipient's servers. Smart hosts may require the sender to authenticate. This differentiates smart hosts from open relays, which allow any other servers to send mail anywhere.

:::note
This setting applies to _all_ outbound mail. Go to **System Setup** > **Mail Relay** > **Advanced Routing** to redirect mail based on a specific sender address or domain.
:::

To enable a smart host:

1.  Click **Enable**.

2.  Specify your smart host, port number and authentication settings.

3.  To ensure traffic between SpamTitan and the smart host is encrypted, select _Yes_ in the Force TLS encryption: drop-down.

4.  Click **Save**.

Enable SASL Authentication:

SMTP/SASL Authentication allows messages from anywhere in the world to be relayed via your SpamTitan Gateway server. If a mail client successfully authenticates itself by providing a username and password to SpamTitan, then it will be permitted to relay mail. The credentials provided are compared against the users credentials in an LDAP/Active Directory.

:::note
As users credentials are submitted in cleartext, it is recommended to configure TLS for inbound connections at **Settings** > **TLS**.
:::

The default settings are as follows:

Field

Descriptions

Authentication method:

LDAP, LDAPS or IMAP (default: LDAP).

Require TLS encryption:

LDAP Server:

IP address or FQDN of your LDAP Server (use LDAPS:// in front of LDAPS addresses).

LDAP Port:

Default port is 389.

LDAP Anonymous Search:

Set to 'Not Allowed' for Exchange/Active Directory servers.

LDAP Search User DN:

The username that SpamTitan will use to connect to your LDAP server. Use email address format i.e. user@domain.local.

LDAP Password:

Password for LDAP Search User.

LDAP Filter:

LDAP Search base:

Based on your domain name. If the internal domain is domain.local, then the search base is DC=domain, DC=local

Hide Internal IP Addresses:

Enable to remove headers from outbound mail containing IP addresses listed in **System Setup** > **Mail Relay** > **Outbound** > **Trusted Networks**.

TLS Encryption:

Enable TLS Encryption to use a secure TLS encrypted channel to send outbound mail from all domains.

By default, this enables a TLS usage policy of _Opportunistic TLS encryption for all connections_. SpamTitan advertises and negotiates an encrypted channel with the peer for the SMTP connection. The encrypted channel is only used when the peer also supports it (opportunistic).

Choose _Use TLS only for specified domains_ to use encryption for only the specified domains listed in TLS Exception Policy.

-   To add a new domain for TLS encryption, click **Add...** and the Add Domain for TLS Encryption dialog displays. Use the table below as a reference to complete the field. Click **Save** to save the entry.

-   To edit an entry, click the edit ![ST-701-edit-button.jpg](/docs-test/imported-assets/spamtitan-legacy/8920-outbound-mail-delivery-settings/7455a85c9b68.jpg) icon in the Options column. The Edit Domain for TLS Encryption dialog displays.

-   To delete an entry, click the delete ![ST-701-delete-button.jpg](/docs-test/imported-assets/spamtitan-legacy/8920-outbound-mail-delivery-settings/3b2dc809e314.jpg) icon in the Options column.

Field

Description

Domain:

Recipient domain to which this TLS policy relates.

Include sub-domains:

Whether the policy applies to sub-domains of the given domain.

Policy:

The security levels in order of increasing security are:

-   _Disable TLS_.

-   _Opportunistic TLS Encryption_

    When opportunistic TLS handshakes fail, SpamTitan retries the connection with TLS disabled. This allows mail delivery to sites with non-interoperable TLS implementations.

-   _Mandatory TLS Encryption_

    Messages are sent only over TLS encrypted sessions. The SMTP transaction is aborted unless the STARTTLS ESMTP feature is supported by the remote SMTP server. If no suitable servers are found, the message will be deferred.

    Mandatory TLS encryption is not viable as a default security level for mail delivery to the public Internet as most MX hosts do not support TLS at all, and some of those that do have broken implementations.

-   _Mandatory TLS Encryption with Verification_

    At the "verify" TLS security level, messages are sent only over TLS encrypted sessions if the remote SMTP server certificate is valid (not expired or revoked, and signed by a trusted certificate authority) and where the server certificate name matches a known pattern.

Allowed SSL/TLS Protocols:

When _Mandatory TLS Encryption_ or higher is chosen, then you must specify the protocols that the SpamTitan SMTP client will use (default: SSLv2 and TLSv1).

Comment:

Optional comment for this entry.

_TLS 1.0:_ Enable or disable TLS 1.0 protocol for SMTP connections (default: disabled). Disable for increased security, or enable for greater compatibility with older mail servers.

_TLS 1.1:_ Enable or disable TLS 1.1 protocol for SMTP connections (default: disabled). Disable for increased security, or enable for greater compatibility with older mail servers.

_Weak TLS Ciphers:_ For PCI compliance, set Weak TLS Ciphers to Off (disable). Some mail transport agents may only support weaker ciphers.

Send Client Certificate:

If a client certificate is requested by a receiving server, this is the certificate that SpamTitan will send. SecureMail servers will tend to request client certificates to validate the sending server. Go to **Settings** > **SSL** to load certificates.

:::note
Do not enable this unless required.
:::
