---
title: "Managing Domain Anti-Spoofing"
description: "Imported from support.titanhq.com"
---

> Source: [support.titanhq.com](https://support.titanhq.com/en/72546-managing-domain-anti-spoofing.html)
> Product: SpamTitan
> Imported content type: docs_page
> Product stream: skellig

#### Managing Domain Anti-Spoofing

The information below will help you to enable and manage anti-spoofing settings for your domains from the customer level.

##### Enabling Domain Anti-Spoofing

As a customer admin, you can enable and manage your domains for anti-spoofing by following the steps below. Check the breadcrumb to ensure you are at the customer level:

![ST-SK-breadcrumb-customer.jpg](/docs-test/imported-assets/spamtitan-skellig/72546-managing-domain-anti-spoofing/e49be174a616.jpg)

1.  Go to the customer level, and from the side-bar menu select **Filtering** > **Anti-Spoof**.

    The Domain Anti-Spoofing tab opens by default where you can see a list of your domains and whether anti-spoofing is enabled.

    -   _Domain_: Domain name.

    -   _Status_: Indicates whether anti-spoofing is enabled for this domain.

2.  Locate the domain that you want to enable anti-spoofing for and select it. The Domain Anti-Spoofing Data slideout appears with the Domain Data tab displayed by default.

    ![ST-Domain-slideout.jpg](/docs-test/imported-assets/spamtitan-skellig/72546-managing-domain-anti-spoofing/d9c4c84b31c4.jpg)

    Use the Search field to find IPs/Hostnames in the table. Select the column ![column-icon.jpg](/docs-test/imported-assets/spamtitan-skellig/72546-managing-domain-anti-spoofing/264f4fd45b19.jpg) icon to hide or view columns.

    To delete an IP/Hostname, select the checkbox and then select **Delete**.

3.  To enable domain anti-spoofing, move the **Enable Domain Anti-Spoofing** slider to ON (default: OFF).

4.  In addition to specifying an IP in the IP & Hostnames table, you can use your SPF record to determine if a sender is valid. To do this, move the **Use SPF Record for IP Validation** slider to ON (default: OFF).

5.  To add a list of trusted IPs and hostnames, see [Anti-Spoofing Trusted IPs and Hostnames](/docs-test/titanhq/products/spamtitan/docs/skellig-9/managing-domain-anti-spoofing-72546/ "Anti-Spoofing Trusted IPs and Hostnames") for details.

##### Anti-Spoofing Trusted IPs and Hostnames

SpamTitan allows you to add a list of trusted IPs and hostnames that are allowed to send emails using your domain. IPs, hostnames, and trusted networks can bypass anti-spoof testing. In general, using IPs is more secure than using hostnames. Try to only use hostnames if you are not using SPF, as your service has too many IPs to list.

Keep the following in mind when using anti-spoofing:

-   Email coming from an IP approved for outbound relay is not checked for spoofing.

-   If SPF is enabled and the IP/Hostname list is empty, then the SPF test results are applied.

-   If SPF is disabled and the IP/Hostname list is empty, then no testing is applied.

-   If SPF is disabled and there is an IP/Hostname listed, then the IP is tested to determine if it matches. If it matches, then the anti-spoofing rule is not triggered; if it doesn't match then the anti-spoofing rule is triggered.

-   If SPF is enabled and there is an IP/Hostname listed, then the IP is tested to determine if it matches. If it matches, then no SPF testing is applied. If it fails, then SPF testing is applied.

Follow the steps below to add a trusted IP or Hostname for domain anti-spoofing.

1.  Go to the customer level, and from the side-bar menu select **Filtering** > **Anti-Spoof**.

2.  Locate the domain that you want to add a trusted IP/Hostname to, and select it. The Domain Anti-Spoofing Data slideout appears.

3.  Select the **Add IP & Hostnames** tab.

    ![ST-Domain-slideout-Add-IP-Hostnames.jpg](/docs-test/imported-assets/spamtitan-skellig/72546-managing-domain-anti-spoofing/6a4361f6de3f.jpg)

4.  From here you can add single or multiple IPs/Networks and Hostnames as follows:

    -   **Add Single IP/Network**

        1.  Select **Add Single IP/Network** and enter the following details:

            -   _IP/Network_: The IP address you want to add.

                If **Use SPF Record for IP Validation** is OFF in Anti-Spoofing settings, the IPs added here are trusted to send email using your domain. CIDR notation ranges can be used.

            -   _Netmask_: The 32-bit netmask that is used to divide an IP address into its respective subnets \[255.255.255.255 - 255.0.0.0.0\]

            -   _Comments (optional)_: Add a description for the IP.

        2.  Select **Add**.

    -   **Add Multiple IP/Network Using CSV**

        1.  Select **Add Multiple IP/Nework Using CSV** to upload multiple IPs/Networks at one time, using a CSV file.

        2.  If you don't already have a CSV file to upload, you can download a sample from the UI. Save it and populate it with your IPs/Hostnames.

        3.  Upload your new CSV file by clicking in the indicated area in the UI.

        4.  Locate the file in the pop-up window or drag and drop it from your folder.

    -   **Add Single Hostname**

        1.  Select **Add Single Hostname** and enter the following details:

            -   _Hostname_: Enter a hostname that is trusted to send email using your domain. For example, www.example.com. Enter _example.com_ to include any sub-domains such as _support.example.com_, or _docs.example.com_.

                Regular expression patterns can be used. However, be advised that the more generic the expression, the easier it is to bypass spoofing.

            -   _Comments (optional)_: Add a description for the hostname.

        2.  Select **Add**.

    -   **Add Multiple Hostnames Using CSV**

        1.  Select **Add Multiple Hostnames Using CSV** to upload multiple hostnames at one time, using a CSV file.

        2.  If you don't already have a CSV file to upload, you can download a sample from the UI. Save it and populate it with your hostnames.

        3.  Upload your new CSV file by clicking in the indicated area in the UI.

        4.  Locate the file in the pop-up window or drag and drop it from your folder.

## In this Section

-   [Enabling Domain Anti-Spoofing](/docs-test/titanhq/products/spamtitan/docs/skellig-9/managing-domain-anti-spoofing-72546/)
-   [Anti-Spoofing Trusted IPs and Hostnames](/docs-test/titanhq/products/spamtitan/docs/skellig-9/managing-domain-anti-spoofing-72546/)
