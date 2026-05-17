---
title: "Web Authentication Settings"
description: "Imported from docs.titanhq.com"
---

> Source: [docs.titanhq.com](https://docs.titanhq.com/en/889-web-authentication-settings.html)
> Product: SpamTitan
> Imported content type: docs_page
> Product stream: legacy

#### Web Authentication Settings

The Domain Group Administrator can go to **Settings** > **Access/Authentication** to set the authentication method for each domain.

Support for external authentication means that users do not have to remember multiple passwords. All login attempts are directed to the appropriate authentication server for that domain.

The following authentication methods are supported:

-   Internal (default)

-   LDAP

-   SQL server

-   POP3

-   IMAP

Follow these steps to set the authentication method for a domain:

1.  Click the edit ![ST-701-edit-button.jpg](/docs-test/imported-assets/spamtitan-legacy/889-web-authentication-settings/7455a85c9b68.jpg) icon in the Actions column to the right of the domain name. To set the same authentication method for multiple domains at once, click the checkbox ![ST-701-check-box.jpg](/docs-test/imported-assets/spamtitan-legacy/889-web-authentication-settings/d19d75015111.jpg) to the left of each domain you want to include and click the **Edit...** button.

2.  Using the table below for reference, choose which _Authentication Method:_ you want to use from the drop-down menu.

3.  Click **Apply** to save your settings.

Setting

Description

Internal

Internal is selected by default and means that a password is automatically generated for a user when they are added to the database. Users are added to the database when spam or viruses sent to them are caught and quarantined.

LDAP

[LDAP Authentication](/docs-test/titanhq/products/spamtitan/docs/legacy-8/ldap/ "LDAP") allows you to specify an external LDAP-enabled directory to authenticate and authorize users on a per-domain basis. LDAP authentication for SpamTitan Cloud can be configured to support any LDAP-compliant directory including Microsoft Active Directory, Lotus Domino, SunOne/iPlanet Directory Server and Novell eDirectory.

_LDAP Server:_  The name of the LDAP server that SpamTitan Cloud attempts to connect to for authentication purposes. To use secure LDAP, prefix the server with 'ldaps://' and specify the secure port (default: 636).

_LDAP Port:_  The port SpamTitan uses to connect to the LDAP server for authentication purposes. Default port 389.

_LDAP Anonymous Search:_ Some LDAP directories require a valid user/password to bind to the server to perform LDAP searches. Choose Allowed or Not Allowed from the drop-down menu.

_LDAP Query Specify:_ the attribute that contains the username of the person authenticating in this field. The default is `mail=%%EMAIL%%` where `%%EMAIL%%` will be replaced with the email of the person authenticating. For example, if the email address of the person authenticating is `joe@example.com` then `%EMAIL%%` will be replaced with `joe@example.com`. Similarly, `%%USER%%` can be used to specify the left-hand side of the email address.

_LDAP Search Base:_ Specify the directory that search will commence from in this field. If the LDAP server can determine the defaultNamingContext (Active Directory only) then you can specify `%%defaultNamingContext%%` and the authentication module will determine this before doing the search.

SQL

SQL authentication allows you to perform authentication against an external SQL server.

_SQL Database:_ This field specifies the SQL database type been used.

_SQL Server_: The IP address or hostname of the SQL server that SpamTitan attempts to connect to for authentication purposes.

_SQL Port:_ The port SpamTitan uses to connect to the SQL Server for authentication purposes. Default port 3306.

_SQL Username:_ The username used to connect to the SQL server to perform authentication.

_SQL Password:_ The password associated with the username. SQL Database Name: The field contains the name of the database containing the authentication tables.

_SQL Table:_ The SQL table to be queried for authentication. SQL Email Column: The column that contains the list of email addresses.

_SQL Password Column:_ This field specifies the column that contains the password.

_SQL Password Type:_ The password may be stored in plain text format, an MD5 checksum or encrypted (Crypt).

POP3

_POP3 Server:_ The IP address or hostname of the POP3 server that SpamTitan Cloud will attempt to connect to for authentication purposes.

_POP3 Port:_ The port SpamTitan Cloud will use to connect to the POP3 server for authentication purposes. Default port 110.

_Use Secure Authentication:_ You can enable Secure Authentication if supported by the POP3 server.

_POP3 Address Type:_ This is the username format required by your POP3 server. If the POP3 server requires only the mailbox name for authentication, then select user. SpamTitan Cloud will then strip the domain name from the user supplied email.

IMAP

_IMAP Server:_ The IP address or hostname of the IMAP server that SpamTitan Cloud connects to for authentication purposes.

_IMAP Port:_ The port SpamTitan Cloud uses to connect to the IMAP server for authentication purposes. Default port 143.

_Use Secure Authentication:_ You can enable secure authentication if supported by the IMAP server.

_IMAP Address Type:_ This field specifies the format expected by your IMAP server. Some IMAP servers require credentials to be specified as an email address, while others require just the left-hand side of the email address (the username).
