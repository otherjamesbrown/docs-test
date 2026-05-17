---
title: "SPF Settings"
description: "Imported from docs.titanhq.com"
---

> Source: [docs.titanhq.com](https://docs.titanhq.com/en/8929-spf-settings.html)
> Product: SpamTitan
> Imported content type: docs_page
> Product stream: legacy

##### SPF Settings

Abstract

Learn to configure SPF in SpamTitan, which allows a domain owner to use special DNS records to specify which machines are authorized to transmit email for their domain.

SPF (Sender Policy Framework) allows the owner of a domain to use special DNS records to specify which machines are authorized to transmit e-mail for that domain. When receiving a message from a domain, the receiver can check the DNS records to ensure the mail is coming from locations that the domain has authorized.

When enabled in SpamTitan, messages that fail the SPF test will be rejected. This option is disabled by default as it can result in mail being rejected from domains with incorrectly configured SPF records, so it should be used with caution.

:::danger[Warning]
There is a performance penalty for all messages when using SPF, as multiple DNS queries must be performed to retrieve a domain's SPF record.
:::

Go to **System Setup** > **Mail Authentication** > **SPF** to manage your SPF settings. Click **Enable** to enable SPF and view the settings (default: disabled).

![STG-SPF-enabled-settings.jpg](/docs-test/imported-assets/spamtitan-legacy/8929-spf-settings/b6b2baad38a4.jpg)

:::note
If DMARC is enabled in SpamTitan Gateway, the behavior of SPF may change. See [DMARC and SPF](/docs-test/titanhq/products/spamtitan/docs/legacy-8/dmarc-and-spf/ "DMARC and SPF").
:::

1.  _SPF Reject on Failure:_ Enable this setting to reject email that fails SPF. Disable to allow email, even if it fails SPF (default: enabled).

2.  _SPF Reject on DMARC none policy:_ An email that fails SPF can be accepted by the receiving server if the DMARC policy allows it, as the DMARC policy overrides SPF by default. A DMARC policy with "p=none" indicates that mail that fails DMARC will still be accepted.

    Enabling this setting allows you to configure SpamTitan to reject email that fails SPF, even if there is a DMARC policy with a "p=none" value that would normally result in the email being delivered (default: disabled).

3.  _SPF Bypassed IPs/Networks:_ IP addresses and networks can bypass SPF checks if they are added to the SPF Bypassed IPs/Networks list.

    -   To add an entry, click **Add...** and the SPF window displays. Using the table below as a reference, complete the fields. Click **Save** to save this entry.

    -   To edit an existing entry, click the edit ![ST-701-edit-button.jpg](/docs-test/imported-assets/spamtitan-legacy/8929-spf-settings/7455a85c9b68.jpg) icon in the Options column and the SPF dialog box displays. Using the table below as a reference, edit the fields. Click **Save** to save changes.

    -   To delete an entry, click the delete ![ST-701-delete-button.jpg](/docs-test/imported-assets/spamtitan-legacy/8929-spf-settings/3b2dc809e314.jpg) icon in the Options column.

        <table><colgroup><col><col></colgroup><thead><tr><th><p>Field</p></th><th><p>Description</p></th></tr></thead><tbody><tr><td><p>IP/Network:</p></td><td><p>An individual IP address or network range you want to bypass SPF checks.</p></td></tr><tr><td><p>Netmask:</p></td><td><p>Select the netmask for the specified IP address. Individual IPv4 addresses have a /32 (255.255.255.255) netmask.</p></td></tr><tr><td><p>Address Type:</p></td><td><p>IPv4 (default) or IPv6.</p></td></tr><tr><td><p>Comment:</p></td><td><p>Optional comment for this entry.</p></td></tr></tbody></table>
