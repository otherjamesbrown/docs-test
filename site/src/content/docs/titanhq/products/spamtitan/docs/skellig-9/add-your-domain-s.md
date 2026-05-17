---
title: "Add your Domain(s)"
description: "Imported from support.titanhq.com"
---

> Source: [support.titanhq.com](https://support.titanhq.com/en/56384-add-your-domain-s-.html)
> Product: SpamTitan
> Imported content type: docs_page
> Product stream: skellig

### Add your Domain(s)

For SpamTitan to accept email for a domain and filter it, that domain must first be added to SpamTitan.

1.  Go to **Overview** and from the Actions dropdown menu, select **Add Domain**.

2.  Complete the fields in the Add Domain window:

    ![ST-SK-add-domain.jpg](/docs-test/imported-assets/spamtitan-skellig/56384-add-your-domain-s-/d1a4ef2e5f8c.jpg)

    -   _Domain_: Enter your email domain. This is a Fully Qualified Domain Name (FQDN) of a domain that you receive email for. For example, _example.com_.

    -   _Destination_: The mail server to which you want clean, filtered mail delivered. This is usually the external IP address or domain name of your website, or your Office 365 domain name.

    -   _Port_: 25 is the default SMTP port. All mail servers use port 25 unless configured otherwise.

        :::note[Important]
        To ensure your server can receive mail from SpamTitan, check that your firewall is open to receive SMTP traffic on Port 25 from your SpamTitan server.
        :::

    -   _MX Lookup_: Allows you to use the MX records of a different domain to identify the destination server. This option is not used by most customers (default: disabled).

    -   _RBL Checks_: The RBL (Realtime Blackhole List) test checks the IP address of all mail servers sending mail to your domain against lists of known spammer IP addresses. This test is highly effective at blocking spam and it is strongly recommended to leave this option enabled (default: enabled).

    -   _SPF Checks_: The SPF (Sender Policy Framework) test checks the SPF record of the sending domain to make sure the IP of the sender is allowed for the domain and if not, it rejects the mail. This test is effective at blocking spam, however, it can cause potential false positives due to improperly configured SPF records. It is recommended to enable it with caution (default: enabled).

    -   _Greylisting Checks_: Allows you to enable or disable greylisting for this domain. Greylisting temporarily rejects all email and requires the sending server to send it again after 5 minutes (default: enabled).

    -   _Recipient Verification_: Allows SpamTitan to verify if a recipient's email address exists before sending them an email. If a user does not exist, it will block the email before reaching the mail server (default: No Recipient Verification).

        :::note[Important]
        Set to Dynamic Recipient Verification if supported. For Dynamic Recipient Verification to work, your mail server must be configured to reject invalid addresses. See [What is Recipient Verification?](/docs-test/titanhq/products/spamtitan/docs/skellig-9/what-is-recipient-verification/ "What is Recipient Verification?")
        :::

        Choose a method to perform recipient verification from the drop-down menu:

        -   _Dynamic_: If your mail server supports recipient verification, select **Dynamic Recipient Verification**. Most Unix-based mail servers, Groupwise, and Exchange 2003 (off by default) support this option.

            Setting

            Description

            Server

            The server the verification probe is sent to. This is normally the same as the destination server, but it may be different if required.

            Port

        -   _LDAP_: For Exchange 2000 mail servers, or other mail servers that support LDAP directories, select **LDAP Recipient Verification** and enter your LDAP server details. This method queries the LDAP server to check if the intended recipient(s) are valid or not.

            Setting

            Description

            Server

            IP address or FQDN of your LDAP Server (use LDAPS:// in front of LDAPS addresses).

            Multiple LDAP servers can be specified. Separate each server with a comma. For example, LDAPS://ldap1.example.com,LDAPS://ldap2.example.com.

            Port

            Default port is 389.

            Anonymous

            Set to **No** for Exchange/Active Directory servers.

            User DN

            The username that SpamTitan uses to connect to your LDAP server. Use email address format, such as user@domain.local.

            Leave blank if anonymous bind is allowed.

            User Password

            Password for LDAP Search User. Leave blank if anonymous bind is allowed.

            Search Base

            Query Filter

            (|(proxyaddresses=smtp$%s)(proxyaddresses=smtp:%s)(mail=%s))

            Result Attribute

            mail

        -   _List_: Specify a list of allowed recipients by manually entering allowed email addresses.

        -   _Regular Expression_: Regular expression, also known as regex or regexp, is a standard pattern-matching tool. It allows you to create filters that can match patterns of text, rather than just single words or phrases. For more information on regular expression see [www.regular-expressions.info](https://www.regular-expressions.info/) ![external\_link.png](/docs-test/imported-assets/spamtitan-skellig/56384-add-your-domain-s-/e926db1b58ca.png).

3.  Select **Add Domain**.

## In this Section

-   [What is Recipient Verification?](/docs-test/titanhq/products/spamtitan/docs/skellig-9/what-is-recipient-verification/)
