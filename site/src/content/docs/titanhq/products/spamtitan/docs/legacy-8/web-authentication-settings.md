---
title: "Web Authentication Settings"
description: "Imported from docs.titanhq.com"
---

> Source: [docs.titanhq.com](https://docs.titanhq.com/en/8990-web-authentication-settings.html)
> Product: SpamTitan
> Imported content type: docs_page
> Product stream: legacy

##### Web Authentication Settings

Web authentication settings allow you to specify which authentication method will be used for each of your domains when a user attempts to log in. Support for external authentication means that users do not have to remember multiple passwords. All login attempts are directed to the appropriate authentication server for that domain.

The following authentication methods are supported:

-   Internal (default)

-   LDAP

-   SQL Server

-   POP3

-   IMAP

Go to **Settings** > **Access/Authentication** > **Web Authentication Settings** to manage your web authentication settings.

![STG-web-authentication-settings.jpg](/docs-test/imported-assets/spamtitan-legacy/8990-web-authentication-settings/31a6dddb10b1.jpg)

To select the web authentication method for a domain:

1.  Click on the edit ![ST-701-edit-button.jpg](/docs-test/imported-assets/spamtitan-legacy/8990-web-authentication-settings/7455a85c9b68.jpg) icon in the Actions column for that domain. To edit multiple domains at once, click the checkbox ![ST-701-check-box.jpg](/docs-test/imported-assets/spamtitan-legacy/8990-web-authentication-settings/d19d75015111.jpg) beside each domain and click **Edit**.

2.  The Edit: domain name window displays. From the Authentication Method: drop-down menu, select the authentication method you want to use. See the table below for a description of each method.

3.  Using the table below as a reference, complete the field for your selected method and click **Apply** to save your settings.

<table><thead><tr><th><p>Method</p></th><th colspan="2"><p>Description</p></th></tr></thead><tbody><tr><td><p>Internal (default)</p></td><td colspan="2"><p>Internal is selected by default and means that a password is automatically generated for a user when they are added to the database. Users are added to the database when spam or viruses sent to them are caught and quarantined.</p></td></tr><tr><td><p>LDAP</p></td><td colspan="2"><p>If selected, you can specify an external LDAP-enabled directory to authenticate and authorize users on a per-domain basis. LDAP authentication can be configured to support any LDAP-compliant directory including Microsoft Active Directory, Lotus Domino, SunOne/iPlanet Directory Server and Novell eDirectory.</p></td></tr><tr><td rowspan="7"></td><td><p>LDAP Server:</p></td><td><p>The name of the LDAP server that SpamTitan Gateway attempts to connect to for authentication purposes. To use secure LDAP, prefix the server with 'ldaps://' and specify the secure port (default: port 636).</p></td></tr><tr><td><p>LDAP Port:</p></td><td><p>The port SpamTitan uses to connect to the LDAP server for authentication purposes (default: port 389).</p></td></tr><tr><td><p>LDAP Anonymous Search:</p></td><td><p>Some LDAP directories require a valid user/password to bind to the server to perform LDAP searches. Choose Allowed or Not Allowed from the drop-down menu.</p></td></tr><tr><td><p>LDAP Search User DN:</p></td><td><p>If anonymous bind is not allowed, you must specify the DN of the user that will be used to bind to the server. This is usually a user principal name (UPN). The UPN is your active directory user name and active directory domain combined in the following format: user_name@domain. For example, exampleuser@domain.local</p></td></tr><tr><td><p>LDAP Password:</p></td><td><p>The password for the user specified in the LDAP Search User DN field.</p></td></tr><tr><td><p>LDAP Query Specify:</p></td><td><p>The attribute that contains the username of the person authenticating in this field. The default is mail=%%EMAIL%% where %%EMAIL%% will be replaced with the email of the person authenticating. For example, if the email address of the person authenticating is joe@example.com then %EMAIL%% will be replaced with joe@example.com. Similarly, %%USER%% can be used to specify the left-hand side of the email address.</p><p>The following filters can be used in Microsoft Exchange:</p><p>(|(proxyAddresses=smtp$%%EMAIL%%)</p><p>(proxyAddresses=smtp:%%EMAIL%%)</p><p>(mail=%%EMAIL%%))</p><p>(|(proxyAddresses=smtp$%%EMAIL%%)</p><p>(proxyAddresses=sip:%%EMAIL%%)</p><p>(proxyAddresses=smtp:%%EMAIL%%)</p><p>(mail=%%EMAIL%%))</p></td></tr><tr><td><p>LDAP Search Base:</p></td><td><p>Specify the directory that the search will commence from in this field. If the LDAP server can determine the defaultNamingContext (Active Directory only) then you can specify %%defaultNamingContext%% and the authentication module will determine this before searching.</p></td></tr><tr><td><p>SQL Server</p></td><td colspan="2"><p>SQL authentication allows you to perform authentication against an external SQL server.</p></td></tr><tr><td rowspan="9"></td><td><p>SQL Database:</p></td><td><p>The SQL database type being used.</p></td></tr><tr><td><p>SQL Server:</p></td><td><p>The IP address or hostname of the SQL server that SpamTitan attempts to connect to for authentication purposes.</p></td></tr><tr><td><p>SQL Port:</p></td><td><p>The port SpamTitan uses to connect to the SQL Server for authentication purposes (default: port 3306).</p></td></tr><tr><td><p>SQL Username:</p></td><td><p>The username used to connect to the SQL server to perform authentication.</p></td></tr><tr><td><p>SQL Password:</p></td><td><p>The password associated with the above username.</p></td></tr><tr><td><p>SQL Database Name:</p></td><td><p>The name of the database containing the authentication tables.</p></td></tr><tr><td><p>SQL Table:</p></td><td><p>The SQL table to be queried for authentication. SQL Email Column: The column that contains the list of email addresses.</p></td></tr><tr><td><p>SQL Password Column:</p></td><td><p>The column that contains the password.</p></td></tr><tr><td><p>SQL Password Type:</p></td><td><p>The password can be stored in plain text format, as an MD5 checksum or encrypted (Crypt).</p></td></tr><tr><td><p>POP3</p></td><td><p>POP3 Server:</p></td><td><p>The IP address or hostname of the POP3 server that SpamTitan attempts to connect to for authentication purposes.</p></td></tr><tr><td><p></p></td><td><p>POP3 Port:</p></td><td><p>The port used to connect to the POP3 server (default: port 110).</p></td></tr><tr><td><p></p></td><td><p>Use Secure Authentication:</p></td><td><p>You can enable Secure Authentication if supported by the POP3 server.</p></td></tr><tr><td><p></p></td><td><p>POP3 Address Type:</p></td><td><p>The username format required by your POP3 server. If the POP3 server requires only the mailbox name for authentication, then select the user. SpamTitan strips the domain name from the user-supplied email.</p></td></tr><tr><td><p>IMAP</p></td><td><p>IMAP Server:</p></td><td><p>The IP address or hostname of the IMAP server that SpamTitan Gateway connects to for authentication purposes.</p></td></tr><tr><td><p></p></td><td><p>IMAP Port:</p></td><td><p>The port SpamTitan uses to connect to the IMAP server (default: port 143).</p></td></tr><tr><td><p></p></td><td><p>Use Secure Authentication:</p></td><td><p>You can enable secure authentication if supported by the IMAP server.</p></td></tr><tr><td><p></p></td><td><p>IMAP Address Type:</p></td><td><p>The format expected by your IMAP server. Some IMAP servers require credentials to be specified as an email address, while others require just the left-hand side of the email address (the username).</p></td></tr></tbody></table>
