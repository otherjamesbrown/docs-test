---
title: "Managing Domain Anti-Spoofing"
description: "Imported from support.titanhq.com"
---

> Source: [support.titanhq.com](https://support.titanhq.com/en/72549-managing-domain-anti-spoofing.html)
> Product: SpamTitan
> Imported content type: docs_page
> Product stream: skellig

#### Managing Domain Anti-Spoofing

The information below will help you to enable and manage anti-spoofing settings for one or more domains from the domain level.

##### Enabling Domain Anti-Spoofing

Follow the steps below to enable anti-spoofing for one or more domains that have been added to SpamTitan. Check the breadcrumb to ensure you are at the domain level:

![ST-SK-breadcrumb-domain.jpg](/docs-test/imported-assets/spamtitan-skellig/72549-managing-domain-anti-spoofing/075c04714cfa.jpg)

1.  From the domain level, go to the side-bar menu and select **Filtering** > **Anti-Spoof**. The Domain Anti-Spoofing tab opens by default.

2.  To enable domain anti-spoofing, move the **Domain Anti-Spoofing** slider to ON (default: OFF).

    ![ST-Domain-DomainLevel.jpg](/docs-test/imported-assets/spamtitan-skellig/72549-managing-domain-anti-spoofing/32d92d460cfc.jpg)

    Use the Search field to find IPs/Hostnames in the table. Select the column ![column-icon.jpg](/docs-test/imported-assets/spamtitan-skellig/72549-managing-domain-anti-spoofing/264f4fd45b19.jpg) icon to hide or view columns.

    To delete an IP/Hostname, select the checkbox and then select **Delete**.

3.  In addition to specifying an IP in the IP & Hostnames table, you can use your SPF record to determine if a sender is valid. To do this, move the **Use SPF Record for IP Validation** slider to ON (default: OFF).

##### Anti-Spoofing Trusted IPs and Hostnames

SpamTitan allows you to add a list of trusted IPs and hostnames that are allowed to send emails using your domain. IPs, hostnames, and trusted networks can bypass anti-spoof testing. In general, using IPs is more secure than using hostnames. Try to only use hostnames if you are not using SPF, as your service has too many IPs to list.

Keep the following in mind when using anti-spoofing:

-   Email coming from an IP approved for outbound relay is not checked for spoofing.

-   If SPF is enabled and the IP/Hostname list is empty, then the SPF test results are applied.

-   If SPF is disabled and the IP/Hostname list is empty, then no testing is applied.

-   If SPF is disabled and there is an IP/Hostname listed, then the IP is tested to determine if it matches. If it matches, then the anti-spoofing rule is not triggered; if it doesn't match then the anti-spoofing rule is triggered.

-   If SPF is enabled and there is an IP/Hostname listed, then the IP is tested to determine if it matches. If it matches, then no SPF testing is applied. If it fails, then SPF testing is applied.

Follow the steps below to add a trusted IP or Hostname for domain anti-spoofing.

1.  From the domain level, go to the side-bar menu and select **Filtering** > **Anti-Spoof**. The Domain Anti-Spoofing tab opens by default.

2.  Under **IPs & Hostnames** you can add IPs and hostnames as follows:

    -   To add an IP:

        1.  Select **Add** > **Add an IP Address** and enter the following:

            -   _IP/Network_: The IP address you want to add.

                If **Use SPF Record for IP Validation** is OFF in Anti-Spoofing settings, the IPs added here are trusted to send email using your domain. CIDR notation ranges can be used.

            -   _Netmask_: The 32-bit netmask that is used to divide an IP address into its respective subnets \[255.255.255.255 - 255.0.0.0.0\]

            -   _Comments (optional)_: Add a description for the IP.

        2.  Select **Add**.

    -   To add a hostname:

        1.  Select **Add** > **Add a hostname** and enter the following:

            -   _Hostname_: Enter a hostname that is trusted to send email using your domain. For example, www.example.com. Enter _example.com_ to include any sub-domains such as _support.example.com_, or _docs.example.com_.

                Regular expression patterns can be used. However, be advised that the more generic the expression, the easier it is to bypass spoofing.

            -   _Comments (optional)_: Add a description for the hostname.

        2.  Select **Add**.

## In this Section

-   [Enabling Domain Anti-Spoofing](/docs-test/titanhq/products/spamtitan/docs/skellig-9/managing-domain-anti-spoofing/)
-   [Anti-Spoofing Trusted IPs and Hostnames](/docs-test/titanhq/products/spamtitan/docs/skellig-9/managing-domain-anti-spoofing/)
