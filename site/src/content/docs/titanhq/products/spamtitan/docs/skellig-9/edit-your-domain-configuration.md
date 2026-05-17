---
title: "Edit your Domain Configuration"
description: "Imported from support.titanhq.com"
---

> Source: [support.titanhq.com](https://support.titanhq.com/en/60088-edit-your-domain-configuration.html)
> Product: SpamTitan
> Imported content type: docs_page
> Product stream: skellig

#### Edit your Domain Configuration

Follow the steps below to edit the configuration of a domain that has already been added to SpamTitan. Check the breadcrumb to ensure you are at the domain level:

![ST-SK-breadcrumb-domain.jpg](/docs-test/imported-assets/spamtitan-skellig/60088-edit-your-domain-configuration/075c04714cfa.jpg)

1.  From the side-bar menu select **Overview** and then select the **Domain Configuration** tab.

    ![ST-SK-domain-configuration.jpg](/docs-test/imported-assets/spamtitan-skellig/60088-edit-your-domain-configuration/3ab3a1458a05.jpg)

2.  Using the information below for reference, edit your domain settings.

    :::note
    The _Domain_ field is not editable.
    :::

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

            <table><colgroup><col><col></colgroup><thead><tr><th><p>Setting</p></th><th><p>Description</p></th></tr></thead><tbody><tr><td><p>Server</p></td><td><p>The server the verification probe is sent to. This is normally the same as the destination server, but it may be different if required.</p></td></tr><tr><td><p>Port</p></td><td><p></p></td></tr></tbody></table>

        -   _LDAP_: For Exchange 2000 mail servers, or other mail servers that support LDAP directories, select **LDAP Recipient Verification** and enter your LDAP server details. This method queries the LDAP server to check if the intended recipient(s) are valid or not.

            <table><colgroup><col><col></colgroup><thead><tr><th><p>Setting</p></th><th><p>Description</p></th></tr></thead><tbody><tr><td><p>Server</p></td><td><p>IP address or FQDN of your LDAP Server (use LDAPS:// in front of LDAPS addresses).</p><p>Multiple LDAP servers can be specified. Separate each server with a comma. For example, LDAPS://ldap1.example.com,LDAPS://ldap2.example.com.</p></td></tr><tr><td><p>Port</p></td><td><p>Default port is 389.</p></td></tr><tr><td><p>Anonymous</p></td><td><p>Set to <span><strong>No</strong></span> for Exchange/Active Directory servers.</p></td></tr><tr><td><p>User DN</p></td><td><p>The username that SpamTitan uses to connect to your LDAP server. Use email address format, such as user@domain.local.</p><p>Leave blank if anonymous bind is allowed.</p></td></tr><tr><td><p>User Password</p></td><td><p>Password for LDAP Search User. Leave blank if anonymous bind is allowed.</p></td></tr><tr><td><p>Search Base</p></td><td><p></p></td></tr><tr><td><p>Query Filter</p></td><td><p>(|(proxyaddresses=smtp$%s)(proxyaddresses=smtp:%s)(mail=%s))</p></td></tr><tr><td><p>Result Attribute</p></td><td><p>mail</p></td></tr></tbody></table>

        -   _List_: Specify a list of allowed recipients by manually entering allowed email addresses.

        -   _Regular Expression_: Regular expression, also known as regex or regexp, is a standard pattern-matching tool. It allows you to create filters that can match patterns of text, rather than just single words or phrases. For more information on regular expression see [www.regular-expressions.info](https://www.regular-expressions.info/) ![external\_link.png](/docs-test/imported-assets/spamtitan-skellig/60088-edit-your-domain-configuration/e926db1b58ca.png).

3.  Select **Save** to save any domain configuration updates.
