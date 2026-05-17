---
title: "Change your MX Records"
description: "Imported from support.titanhq.com"
---

> Source: [support.titanhq.com](https://support.titanhq.com/en/56392-change-your-mx-records.html)
> Product: SpamTitan
> Imported content type: docs_page
> Product stream: skellig

### Change your MX Records

Any domain that uses email has an MX record, which lists the mail servers available to accept mail for that domain. You must update the MX records of your added domains to point to SpamTitan.

Using two MX records of equal priority allows for fail-over and redundancy. From the table below, select the corresponding MX on the same row as your SpamTitan login URL.

See below for additional information on changing MX records for different common mail services.

:::note[Important]
After changing your MX records, it is recommended you verify email flow through SpamTitan to your mail server before proceeding to the next setup step, Lock Down Your Mail Server.
:::

#### SpamTitan Servers

There are a number of SpamTitan servers, one of which your account is on. Find your login URL in the table below to see the corresponding MX and IPs to use during setup.

SpamTitan Login URL

Corresponding MX

Corresponding IPs

[https://us1-smtp-ui.titanhq.com](https://us1-smtp-ui.titanhq.com/)

us1-smtp-mx1.titanhq.com

us1-smtp-mx2.titanhq.com

18.218.73.72

18.116.252.179

18.225.12.231

18.220.209.97

3.20.181.16

3.21.255.101

3.140.160.184

[https://us2-smtp-ui.titanhq.com](https://us2-smtp-ui.titanhq.com/)

us2-smtp-mx1.titanhq.com

us2-smtp-mx2.titanhq.com

3.134.134.92

3.130.28.189

18.216.227.84

18.189.8.252

3.22.148.152

3.140.150.54

13.58.252.85

[https://us3-smtp-ui.titanhq.com](https://us3-smtp-ui.titanhq.com/)

us3-smtp-mx1.titanhq.com

us3-smtp-mx2.titanhq.com

18.219.82.30

52.14.176.194

3.145.228.208

3.23.166.50

3.143.188.200

[https://us4-smtp-ui.titanhq.com](http://https//us4-smtp-ui.titanhq.com)

us4-smtp-mx1.titanhq.com

us4-smtp-mx2.titanhq.com

3.136.238.115

3.131.225.49

3.147.24.97

3.20.154.217

3.23.0.105

[https://eu1-smtp-ui.titanhq.com](https://eu1-smtp-ui.titanhq.com/)

eu1-smtp-mx1.titanhq.com

eu1-smtp-mx2.titanhq.com

35.158.242.254

35.158.11.197

3.70.162.203

3.125.67.59

35.156.73.189

[https://uk1-smtp-ui.titanhq.com](https://uk1-smtp-ui.titanhq.com/)

uk1-smtp-mx1.titanhq.com

uk1-smtp-mx2.titanhq.com

18.132.0.23

3.10.37.203

13.41.39.52

18.169.71.187

18.130.54.77

[https://ap1-smtp-ui.titanhq.com](https://ap1-smtp-ui.titanhq.com/)

ap1-smtp-mx1.titanhq.com

ap1-smtp-mx2.titanhq.com

54.79.176.213

52.64.232.127

52.64.119.67

52.65.201.69

13.236.192.114

[https://ca1-smtp-ui.titanhq.com/](https://ca1-smtp-ui.titanhq.com/)

ca1-smtp-mx1.titanhq.com

ca1-smtp-mx2.titanhq.com

3.98.148.253

52.60.182.38

3.97.130.60

35.182.209.239

3.97.166.19

#### Changing MX Records on Common Mail Services

:::note[Notice]
The instructions below are for tools that are not owned or managed by TitanHQ and are only intended as a guideline to help you. As such, the information may be subject to change without us knowing.

If you notice anything incorrect, please email _[docs@titanhq.com](mailto:docs@titanhq.com)_ and let us know.
:::

##### Yahoo MX Records

1.  Log in to the administrative console for your domain on [smallbusiness.yahoo.com](https://smallbusiness.yahoo.com/). ![icons8-external-link-32.png](/docs-test/imported-assets/spamtitan-skellig/56392-change-your-mx-records/9407e2037883.png)

2.  Select **Domain** from the top toolbar.

3.  Select **Manage Advanced DNS Settings**.

4.  Select **Change MX Records**.

5.  Enter your MX records.

6.  Select **Submit**.

##### Setup GoDaddy MX Records

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

##### Setting up cPanel MX Records

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

##### Setup HostGator MX Records

Log in to your [HostGator](https://www.hostgator.com/) cPanel account and follow the steps below to set up your HostGator MX records.

1.  In the **Domains** section, select **Zone Editor**.

2.  If you have more than one domain, find the domain you are using with SpamTitan under the domain heading, and select **Manage**.

3.  Find your domain's MX record from the list of zone files, and select **Edit**.

4.  Enter the following:

    -   _Priority_: Enter **0**. A lower value represents higher priorities, with zero (0) being the highest priority.

    -   _Destination_: Enter your MX record.

5.  Select **Save Record**.

##### Blacknight MX Records

-   Log into your [Blacknight](https://help.blacknight.com/) account at [https://cp.blacknight.com](https://cp.blacknight.com/) ![icons8-external-link-32.png](/docs-test/imported-assets/spamtitan-skellig/56392-change-your-mx-records/9407e2037883.png), or [cp.blacknighthosting.com](https://cp.blacknighthosting.com/index.php/login) if you are on a new system.

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

##### BT Broadband MX Records

Follow these steps to create MX records for a [BT Broadband](https://business.bt.com/) hosted domain.

1.  Log into your BT Broadband office account as the _primary_ user (do this by selecting **Manage your Domain Name**).

2.  From the Domain Maintenance page, select **Manage** beside the domain name you want to modify.

3.  Select the **Advanced Domain Manager** link in menu on the left.

4.  Enter your MX records.

5.  Select **Save**.

#### Network Solutions Records

If your domain is registered at [Network Solutions](https://www.networksolutions.com/), you will need to update your MX records there.

1.  Log in to your [Network Solutions account](https://www.networksolutions.com/my-account/login).

2.  Select **Manage Account** > **My Domain Names**.

3.  Select **Edit Advanced DNS Records** and scroll to **Mail Servers** (MX Records).

4.  Select **Edit MX Records**.

5.  Enter the information for your SpamTitan Skellig MX records.

6.  Select **Continue**.

## In this Section

-   [SpamTitan Servers](/docs-test/titanhq/products/spamtitan/docs/skellig-9/change-your-mx-records/)
-   [Changing MX Records on Common Mail Services](/docs-test/titanhq/products/spamtitan/docs/skellig-9/change-your-mx-records/)
-   [Network Solutions Records](/docs-test/titanhq/products/spamtitan/docs/skellig-9/change-your-mx-records/)
