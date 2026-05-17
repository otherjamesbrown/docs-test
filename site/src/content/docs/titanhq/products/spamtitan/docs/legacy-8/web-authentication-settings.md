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

Method

Description

Internal (default)

Internal is selected by default and means that a password is automatically generated for a user when they are added to the database. Users are added to the database when spam or viruses sent to them are caught and quarantined.

LDAP

If selected, you can specify an external LDAP-enabled directory to authenticate and authorize users on a per-domain basis. LDAP authentication can be configured to support any LDAP-compliant directory including Microsoft Active Directory, Lotus Domino, SunOne/iPlanet Directory Server and Novell eDirectory.

LDAP Server:

The name of the LDAP server that SpamTitan Gateway attempts to connect to for authentication purposes. To use secure LDAP, prefix the server with 'ldaps://' and specify the secure port (default: port 636).

LDAP Port:

The port SpamTitan uses to connect to the LDAP server for authentication purposes (default: port 389).

LDAP Anonymous Search:

Some LDAP directories require a valid user/password to bind to the server to perform LDAP searches. Choose Allowed or Not Allowed from the drop-down menu.

LDAP Search User DN:

If anonymous bind is not allowed, you must specify the DN of the user that will be used to bind to the server. This is usually a user principal name (UPN). The UPN is your active directory user name and active directory domain combined in the following format: user\_name@domain. For example, exampleuser@domain.local

LDAP Password:

The password for the user specified in the LDAP Search User DN field.

LDAP Query Specify:

The attribute that contains the username of the person authenticating in this field. The default is mail=%%EMAIL%% where %%EMAIL%% will be replaced with the email of the person authenticating. For example, if the email address of the person authenticating is joe@example.com then %EMAIL%% will be replaced with joe@example.com. Similarly, %%USER%% can be used to specify the left-hand side of the email address.

The following filters can be used in Microsoft Exchange:

(|(proxyAddresses=smtp$%%EMAIL%%)

(proxyAddresses=smtp:%%EMAIL%%)

(mail=%%EMAIL%%))

(|(proxyAddresses=smtp$%%EMAIL%%)

(proxyAddresses=sip:%%EMAIL%%)

(proxyAddresses=smtp:%%EMAIL%%)

(mail=%%EMAIL%%))

LDAP Search Base:

Specify the directory that the search will commence from in this field. If the LDAP server can determine the defaultNamingContext (Active Directory only) then you can specify %%defaultNamingContext%% and the authentication module will determine this before searching.

SQL Server

SQL authentication allows you to perform authentication against an external SQL server.

SQL Database:

The SQL database type being used.

SQL Server:

The IP address or hostname of the SQL server that SpamTitan attempts to connect to for authentication purposes.

SQL Port:

The port SpamTitan uses to connect to the SQL Server for authentication purposes (default: port 3306).

SQL Username:

The username used to connect to the SQL server to perform authentication.

SQL Password:

The password associated with the above username.

SQL Database Name:

The name of the database containing the authentication tables.

SQL Table:

The SQL table to be queried for authentication. SQL Email Column: The column that contains the list of email addresses.

SQL Password Column:

The column that contains the password.

SQL Password Type:

The password can be stored in plain text format, as an MD5 checksum or encrypted (Crypt).

POP3

POP3 Server:

The IP address or hostname of the POP3 server that SpamTitan attempts to connect to for authentication purposes.

POP3 Port:

The port used to connect to the POP3 server (default: port 110).

Use Secure Authentication:

You can enable Secure Authentication if supported by the POP3 server.

POP3 Address Type:

The username format required by your POP3 server. If the POP3 server requires only the mailbox name for authentication, then select the user. SpamTitan strips the domain name from the user-supplied email.

IMAP

IMAP Server:

The IP address or hostname of the IMAP server that SpamTitan Gateway connects to for authentication purposes.

IMAP Port:

The port SpamTitan uses to connect to the IMAP server (default: port 143).

Use Secure Authentication:

You can enable secure authentication if supported by the IMAP server.

IMAP Address Type:

The format expected by your IMAP server. Some IMAP servers require credentials to be specified as an email address, while others require just the left-hand side of the email address (the username).
