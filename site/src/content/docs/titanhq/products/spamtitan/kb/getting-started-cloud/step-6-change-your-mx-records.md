---
title: "Step 6: Change Your MX Records"
description: "Imported from helpdesk.spamtitan.com"
---

> Source: [helpdesk.spamtitan.com](https://helpdesk.spamtitan.com/support/solutions/articles/4000186892-step-6-change-your-mx-records)
> Product: SpamTitan
> Imported content type: kb_article
> Source folder: Getting Started: SpamTitan Cloud
> Modified: Wed, 14 Sep, 2022 at 7:00 PM

![](/docs-test/imported-assets/spamtitan-kb/4000186892/6116b5fe7424.jpg)

Any domain that uses email has MX records. The MX record lists the mail servers available to accept mail for that domain.

If you are a new customer whose account has just been created, you will be added to our latest servers listed here. If you are an existing customer, you may be using a different server. See SpamTitan Cloud Server IP Addresses for a full list.

-   cloud15.spamtitan.com

-   cloud16.spamtitan.com

Using two MX records of equal priority allows for fail-over and redundancy.

:::note[Important]
After changing your MX records, it is recommended you verify email flow through SpamTitan to your mail server **before** proceeding to the next setup step, Lock Down Your Mail Server.
:::

See below for additional information on changing MX records for different common mail services.

### Changing MX Records on Common Mail Services

:::note
The instructions below are for tools that are not owned or managed by TitanHQ and are only intended as a guideline to help you. As such, the information may be subject to change without us knowing.

If you notice anything incorrect, please email _[docs@titanhq.com](mailto:docs@titanhq.com)_ and let us know.
:::

#### Yahoo MX Records

1.  Log in to the administrative console for your domain on [smallbusiness.yahoo.com](https://smallbusiness.yahoo.com/). ![](/docs-test/imported-assets/spamtitan-kb/4000186892/9407e2037883.png)

2.  Select **Domain** from the top toolbar.

3.  Click **Manage Advanced DNS Settings**.

4.  Click **Change MX Records**.

5.  Add your SpamTitan IPs to the MX record values, e.g. cloud15.spamtitan.com, cloud16.spamtitan.com.

6.  Click **Submit**.

#### Setup GoDaddy MX Records

Follow these steps to create MX records for a GoDaddy hosted domain.

1.  Log into your GoDaddy account and click the **My Accounts** tab.

2.  Under Domains locate the domain you're using with SpamTitan. Click **Advanced Details** to the right of this domain.

3.  Under DNS Manager click **Launch**.

4.  In MX (Mail Exchanger), click **Quick Add**.

5.  Add your SpamTitan IPs, e.g. cloud15.spamtitan.com with an @ sign in the **Host** field and the destination in the **Points to** field. Add both MX records to the table.

6.  Click **Save Zone File** at the top or the bottom of the page.

#### Setting up cPanel MX Records

Log in to the cPanel administrative console and follow the steps below to set up your cPanel MX records.

1.  From the Mail section, select **MX Entry**.

2.  In the Email Routing box, select **Remote Mail Exchanger** and click **Change**.

3.  Add your SpamTitan Cloud IPs, e.g. cloud15.spamtitan.com, cloud16.spamtitan.com.

4.  Click **Add New Record**.

5.  To add MX records for the additional servers, repeat the steps above for those servers. Assign backup servers a lower priority than the primary email server.

:::tip
Some cPanel servers require an MX record containing the hostname of the cPanel server for mail routing and/or authentication. If, after changing your MX records, you have issues with mail being rejected due to "too many hops" or authentication issues, add a third MX record with a priority of 100 containing the hostname of your cPanel server.

If you add a third record, you may need to lock down your cPanel server to only accept mail from the SpamTitan server.
:::

#### Setup HostGator MX Records

Log in to your HostGator cPanel account and follow the steps below to set up your HostGator MX records.

1.  Click **MX Entry** in the mail section.

2.  If you have more than one domain, select the domain you are using with SpamTitan under the domain heading.

3.  Under email routing, select **Remote Mail Exchanger**.

4.  Click **Change**.

5.  Add your SpamTitan Cloud IPs, e.g. cloud15.spamtitan.com, cloud16.spamtitan.com.

#### Blacknight MX Records

1.  Log into your account at [https://cp.blacknight.com](https://cp.blacknight.com/) ![](/docs-test/imported-assets/spamtitan-kb/4000186892/9407e2037883.png).

2.  Click **Registered Domains**.

3.  Select Manage DNS for the domain you use for SpamTitan.

4.  Go to the **DNS** > **DNS Records** tab and select **Add New DNS Record**.

5.  From the **DNS Record Type** drop-down select **MX**.

6.  Enter your SpamTitan IPs in the Mail Exchanger field, e.g. cloud15.spamtitan.com, cloud16.spamtitan.com.

#### BT Broadband MX Records

Follow these steps to create MX records for a BT Broadband hosted domain.

1.  Log into your BT Broadband office account as the _primary_ user (do this by clicking **Manage your Domain Name**).

2.  From the BT Business Your Account area, go to the **Domain Management Console**.

3.  Select the **Domain Maintenance** tab and choose the domain you are using with SpamTitan.

4.  Delete any existing MX records for this domain.

5.  Select **MX** from the first drop-down menu.

6.  Include your SpamTitan IPs in the MX record values, e.g. cloud15.spamtitan.com, cloud16.spamtitan.com including the name in the _Key-Value_ field and the value in the _Value_ field.

7.  Click **Go**.
