---
title: "Managing Realtime Blackhole Lists"
description: "Imported from docs.titanhq.com"
---

> Source: [docs.titanhq.com](https://docs.titanhq.com/en/8913-managing-realtime-blackhole-lists.html)
> Product: SpamTitan
> Imported content type: docs_page
> Product stream: legacy

###### Managing Realtime Blackhole Lists

The Realtime Blackhole List (RBL) feature is used to check external databases called DNS Blocklists (DNSbls) which contain lists of IP addresses of known spammers and compromised machines. Once enabled, sending IP addresses (not sender email addresses) are checked against the specified lists and the connection from any listed IPs is dropped before an email is fully delivered.

:::note[Important]
If an email is sent from an IP that is on one of the RBLs listed in SpamTitan, the email will be rejected _even if the sender email address is allowed_.
:::

Go to **System Setup** > **Mail Relay** > **IP Controls** to enable and manage RBLs. Click **Enable** to enable this feature, then read below for information on adding RBL servers, bypassing RBL checks and testing IPs against RBL servers.

By default, RBL checks are performed after recipient verification checks as they are quicker. However, if you have a local fast caching DNS server and want to perform the RBL checks first, select _Before Recipient Verification_ from the **Perform RBL Checks:** drop-down menu.

:::note
Performing RBL after recipient verification only works if all your domains are using either Dynamic Recipient Verification or no verification. If you use any other form of recipient verification, RBL must be configured to run before the recipient verification test.
:::

Adding RBL Servers

Once enabled, follow these steps to add an RBL server:

1.  In the RBL Server: field, enter an RBL server name, e.g. zen.spamhaus.org. See [https://en.wikipedia.org/wiki/Comparison\_of\_DNS\_blacklists](https://en.wikipedia.org/wiki/Comparison_of_DNS_blacklists)![icons8-external-link-32.png](/docs-test/imported-assets/spamtitan-legacy/8913-managing-realtime-blackhole-lists/9407e2037883.png) for a list of DNSbl servers.

2.  Click **Add** and the server name appears in the RBL Server list. Click the edit ![ST-701-edit-button.jpg](/docs-test/imported-assets/spamtitan-legacy/8913-managing-realtime-blackhole-lists/7455a85c9b68.jpg) icon to edit a server name or click the delete ![ST-701-delete-button.jpg](/docs-test/imported-assets/spamtitan-legacy/8913-managing-realtime-blackhole-lists/3b2dc809e314.jpg) icon to delete a server.

    ![STG-add-rbl-server.jpg](/docs-test/imported-assets/spamtitan-legacy/8913-managing-realtime-blackhole-lists/e568cb838d01.jpg)

3.  Repeat steps 1 and 2 to add additional RBL servers.

Bypassing RBL Checks

You can specify a list of IP addresses or CIDR addresses in the _Bypass RBL checks:_ table that will be accepted, even if they fail an RBL test. This is used to get around RBL false positives.

![STG-bypass-rbl-checks.jpg](/docs-test/imported-assets/spamtitan-legacy/8913-managing-realtime-blackhole-lists/9a5aa3814955.jpg)

Follow these steps to add an IP address to the list that will be exempt from RBL checks:

1.  Click **Add...**.

2.  Using the table below as a reference, complete the field in the Add RBL Exception dialog box.

3.  Click **Save** to save your entry or **Cancel** to discard changes.

<table><colgroup><col><col></colgroup><thead><tr><th><p>Field</p></th><th><p>Description</p></th></tr></thead><tbody><tr><td><p>IP/Network:</p></td><td><p>Enter a single IP address or network range that may be on an RBL.</p><div dir="ltr" data-import-admonition="note" data-import-admonition-title="Important"><h3>Important</h3><p>Messages from these IP addresses are still subject to other spam and virus checks.</p></div></td></tr><tr><td><p>Netmask:</p></td><td><p>Select the netmask for the specified IP address. Individual IPv4 addresses will have a /32 (255.255.255.255) netmask.</p></td></tr><tr><td><p>Address Type:</p></td><td><p>Select IPv4 (default) or IPv6.</p></td></tr><tr><td><p>Comment:</p></td><td><p>Optional comment for this entry.</p></td></tr></tbody></table>

Testing IPs Against RBL Servers

Follow the steps below to test an IP against the RBL servers you have added:

1.  Click **Test** and the Lookup IP against RBL Server(s) dialog box displays:

    ![STG-test-RBL.jpg](/docs-test/imported-assets/spamtitan-legacy/8913-managing-realtime-blackhole-lists/a3731873c164.jpg)

2.  In IP address: enter an IP address to test.

3.  Click **Lookup**.

4.  The Status column will show if the IP address is 'Listed' (red) or 'Not Listed' (green) for each server.

    ![STG-RBL-listed-status.jpg](/docs-test/imported-assets/spamtitan-legacy/8913-managing-realtime-blackhole-lists/f0699f57c96a.jpg)

    ![STG-RBL-not-listed-status.jpg](/docs-test/imported-assets/spamtitan-legacy/8913-managing-realtime-blackhole-lists/a3433305f5a4.jpg)
