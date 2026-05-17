---
title: "Change Your MX Records"
description: "Imported from docs.titanhq.com"
---

> Source: [docs.titanhq.com](https://docs.titanhq.com/en/540-change-your-mx-records.html)
> Product: SpamTitan
> Imported content type: docs_page
> Product stream: legacy

#### Change Your MX Records

Any domain that uses email has [MX records](/docs-test/titanhq/products/spamtitan/docs/legacy-8/mx-record/ "MX Record"). The MX record lists the mail servers available to accept mail for that domain.

If you are a new customer whose account has just been created, you will be added to our latest servers listed here. If you are an existing customer, you may be using a different server. See [SpamTitan Cloud Server IP Addresses](/docs-test/titanhq/products/spamtitan/docs/legacy-8/spamtitan-cloud-server-ip-addresses/ "SpamTitan Cloud Server IP Addresses") for a full list.

-   cloud15.spamtitan.com

-   cloud16.spamtitan.com

Using two MX records of equal priority allows for fail-over and redundancy.

:::note[Important]
After changing your MX records, it is recommended you verify email flow through SpamTitan to your mail server **before** proceeding to the next setup step, Lock Down Your Mail Server.
:::

See below for additional information on changing MX records for different common mail services.

##### Changing MX Records on Common Mail Services

:::note[Notice]
The instructions below are for tools that are not owned or managed by TitanHQ and are only intended as a guideline to help you. As such, the information may be subject to change without us knowing.

If you notice anything incorrect, please email _[docs@titanhq.com](mailto:docs@titanhq.com)_ and let us know.
:::

###### Yahoo MX Records

1.  Log in to the administrative console for your domain on [smallbusiness.yahoo.com](https://smallbusiness.yahoo.com/). ![icons8-external-link-32.png](/docs-test/imported-assets/spamtitan-legacy/540-change-your-mx-records/9407e2037883.png)

2.  Select **Domain** from the top toolbar.

3.  Select **Manage Advanced DNS Settings**.

4.  Select **Change MX Records**.

5.  Enter your MX records.

6.  Select **Submit**.

###### Setup GoDaddy MX Records

Follow these steps to create MX records for a [GoDaddy](https://www.godaddy.com/) hosted domain.

1.  Log into your GoDaddy account and select the **My Accounts** tab.

2.  Select the domain you're using with SpamTitan to access the Domain Settings page.

3.  Select **DNS** to view your DNS records.

4.  Select **Add New Record** and then select **MX** from the Type menu.

5.  Enter the following details:

    -   _Name_: Enter **@** to put the record on your root domain.

    -   _Priority_: Enter **0**. A lower value represents higher priorities, with zero (0) being the highest priority.

    -   _Value_: This is the corresponding MX record from SpamTitan; for example: _us1-smtp-mx1.titanhq.com_.

    -   _TTL_: Default

6.  Select **Save**.

###### Setting up cPanel MX Records

Log in to the [cPanel](https://support.cpanel.net/hc/en-us) administrative console and follow the steps below to set up your cPanel MX records.

1.  From the Mail section, select **MX Entry**.

2.  From the Domains section, select **Zone Editor**.

3.  Select **MX Record** to add your MX Records.

4.  In the window that appears, enter the following:

    -   _Priority_: Enter **0**. A lower value represents higher priorities, with zero (0) being the highest priority.

    -   _Destination_: Enter your MX record.

5.  Select **Add An MX Record**.

6.  To add MX records for the additional servers, repeat the steps above for those servers. Assign backup servers a lower priority than the primary email server.

:::tip
Some cPanel servers require an MX record containing the hostname of the cPanel server for mail routing and/or authentication. If, after changing your MX records, you have issues with mail being rejected due to "too many hops" or authentication issues, add a third MX record with a priority of 100 containing the hostname of your cPanel server.

If you add a third record, you may need to lock down your cPanel server to only accept mail from the SpamTitan server.
:::

###### Setup HostGator MX Records

Log in to your [HostGator](https://www.hostgator.com/) cPanel account and follow the steps below to set up your HostGator MX records.

1.  In the **Domains** section, select **Zone Editor**.

2.  If you have more than one domain, find the domain you are using with SpamTitan under the domain heading, and select **Manage**.

3.  Find your domain's MX record from the list of zone files, and select **Edit**.

4.  Enter the following:

    -   _Priority_: Enter **0**. A lower value represents higher priorities, with zero (0) being the highest priority.

    -   _Destination_: Enter your MX record.

5.  Select **Save Record**.

###### Blacknight MX Records

-   Log into your [Blacknight](https://help.blacknight.com/) account at [https://cp.blacknight.com](https://cp.blacknight.com/) ![icons8-external-link-32.png](/docs-test/imported-assets/spamtitan-legacy/540-change-your-mx-records/9407e2037883.png), or [cp.blacknighthosting.com](https://cp.blacknighthosting.com/index.php/login) if you are on a new system.

    -   If you are logged into **cp.blacknight.com**, do the following:

        1.  Select **Hosted Domains** > **domainname** > **DNS** > **DNS Records**.

        2.  Select **Add New DNS Record**.

        3.  From the DNS Record Type drop-down menu, select **MX**.

        4.  Enter the following details:

            -   _Mail Domain_: This field can remain blank, unless you want to set up an MX record on a subdomain.

            -   _Preference_: Enter **0**. A lower value represents higher priorities, with zero (0) being the highest priority.

            -   _Mail exchanger_: Enter the mailserver record; for example: us1-smtp-mx1.titanhq.com

    -   If you are logged into **cp.blacknighthosting.com**, do the following:

        1.  Select **Domains** > **Manage DNS**.

        2.  Select the Edit Zone pencil icon to the right of the domain.

        3.  Add a new DNS record of type **MX**.

        4.  Enter the following details:

            -   _Mail Domain_: Enter **@** to put the record on your root domain.

            -   _Preference_: Enter **0**. A lower value represents higher priorities, with zero (0) being the highest priority.

            -   _Mail exchanger_: Enter the mailserver record; for example: us1-smtp-mx1.titanhq.com

###### BT Broadband MX Records

Follow these steps to create MX records for a [BT Broadband](https://business.bt.com/) hosted domain.

1.  Log into your BT Broadband office account as the _primary_ user (do this by selecting **Manage your Domain Name**).

2.  From the Domain Maintenance page, select **Manage** beside the domain name you want to modify.

3.  Select the **Advanced Domain Manager** link in menu on the left.

4.  Enter your MX records.

5.  Select **Save**.

##### Network Solutions Records

If your domain is registered at [Network Solutions](https://www.networksolutions.com/), you will need to update your MX records there.

1.  Log in to your [Network Solutions account](https://www.networksolutions.com/my-account/login).

2.  Select **Manage Account** > **My Domain Names**.

3.  Select **Edit Advanced DNS Records** and scroll to **Mail Servers** (MX Records).

4.  Select **Edit MX Records**.

5.  Enter the information for your SpamTitan Skellig MX records.

6.  Select **Continue**.

## In this Section

-   [Changing MX Records on Common Mail Services](/docs-test/titanhq/products/spamtitan/docs/legacy-8/change-your-mx-records/)
-   [Network Solutions Records](/docs-test/titanhq/products/spamtitan/docs/legacy-8/change-your-mx-records/)
