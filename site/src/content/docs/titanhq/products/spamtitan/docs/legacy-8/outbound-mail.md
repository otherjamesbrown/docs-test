---
title: "Outbound Mail"
description: "Imported from docs.titanhq.com"
---

> Source: [docs.titanhq.com](https://docs.titanhq.com/en/32718-outbound-mail.html)
> Product: SpamTitan
> Imported content type: docs_page
> Product stream: legacy

### Outbound Mail

Follow these steps to configure SpamTitan to filter your outbound email.

1.  Add your mail server to SpamTitan's trusted network list.

    -   Go to **System Setup** > **Mail Relay** > **Outbound** > **Trusted Networks**.

    -   Click **Add...** and the Add Trusted IP/Network window displays.

    -   Enter the IP and other details for your mail server.

    -   Click **Save** to save your entry as a trusted network.

    See [Outbound Mail Delivery Settings](/docs-test/titanhq/products/spamtitan/docs/legacy-8/outbound-mail-delivery-settings/ "Outbound Mail Delivery Settings") and scroll to _Trusted Networks_.

2.  If you are relaying outbound mail through a different server, you need to configure that server to use SpamTitan as its smart host. This action configures your mail server to send all outbound mail to SpamTitan.

    :::note
    This step is only necessary if you are relaying outbound mail through a different server.
    :::

    See [Outbound Mail Delivery Settings](/docs-test/titanhq/products/spamtitan/docs/legacy-8/outbound-mail-delivery-settings/ "Outbound Mail Delivery Settings") and scroll to _Enable Smarthost_.

3.  Adjust the settings in your SpamTitan outbound mail policy.

    Go to **Anti-Spam Engine** > **Domain Policies** and click the edit ![ST-701-edit-button.jpg](/docs-test/imported-assets/spamtitan-legacy/32718-outbound-mail/7455a85c9b68.jpg) icon beside Outbound Mail. Edit the policy to:

    -   Set the "Consider mail spam when score is greater than:" to **8**.

    -   Set the "Spam should be:" action to **Quarantined**.

    See [Editing a Domain Policy](/docs-test/titanhq/products/spamtitan/docs/legacy-8/editing-a-domain-policy-693/ "Editing A Domain Policy").

4.  If you use Office 365, create a smart host outbound connector between your Office 365 and SpamTitan.

    See [Creating an Office 365 Outbound Connector](/docs-test/titanhq/products/spamtitan/docs/legacy-8/creating-an-office-365-outbound-connector/ "Creating an Office 365 Outbound Connector").

Once the steps above are complete, your mail server is configured to send all email addressed to an external email address to SpamTitan, where it is scanned before delivery to the destination address, or quarantined.

#### Recommended Additional Setup Outbound Filtering

The following steps are recommended to optimize your outbound mail filtering setup and reduce resolution time in the event your mail server is blacklisted.

1.  SpamTitan performs tests on the IP of any server it receives email from, so your internal mail server IP may trigger tests. This can happen for many reasons, such as your mail server not having DNS records, or being listed on an RBL (many RBL servers list private IP ranges by default. For example, 192.168.\*, 172.16.\* or 10.\*).

    To prevent SpamTitan from performing tests on your mail server, add the IP to **Anti-Spam Engine** > **Settings** > **Internal Networks**. Email sent by the server is not tested, only the actual server is exempt.

    See [Internal Networks](/docs-test/titanhq/products/spamtitan/docs/legacy-8/internal-networks/ "Internal Networks").

2.  Sign up to Microsoft's Smart Network Data Services (SNDS) by registering your SpamTitan server IP(s) at [https://sendersupport.olc.protection.outlook.com/snds/index.aspx](https://sendersupport.olc.protection.outlook.com/snds/index.aspx) ![external\_link.png](/docs-test/imported-assets/spamtitan-legacy/32718-outbound-mail/e926db1b58ca.png)

    Once registered, your mail server will send all emails addressed to an external email address to SpamTitan, where they can be scanned and delivered, or quarantined. The service allows you to see the volume of mail sent to Microsoft free email services, and also see any emails that have been reported as spam.

    -   Once registered, consider signing up for the Junk Mail Reporting Program. This allows Microsoft to send a copy of any email marked as spam, so you can react quickly and prevent your IPs from being blocked.

    -   A free Microsoft account is required to register for SNDS. IP ownership is verified based on an email sent to an address obtained from the WHOIS record, or based on the PTR record domain.

    -   Deliverability to all free mail services can be improved further by implementing SPF, DKIM and DMARC for your email domains.

    -   In event of an issue with a Microsoft listing, you can send a delist request along with proof of ownership of your IPs (provided after signup).

## In this Section

-   [Recommended Additional Setup Outbound Filtering](/docs-test/titanhq/products/spamtitan/docs/legacy-8/outbound-mail/)
