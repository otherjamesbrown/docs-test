---
title: "Managing Domains"
description: "Imported from docs.titanhq.com"
---

> Source: [docs.titanhq.com](https://docs.titanhq.com/en/8910-managing-domains.html)
> Product: SpamTitan
> Imported content type: docs_page
> Product stream: legacy

##### Managing Domains

Go to **System Setup** > **Mail Relay** > **Domains** to add, edit, delete or verify your recipient email. SpamTitan Gateway will only accept email for domains listed in the Domains table. Use the search bar at the top of the domain list to filter through the listed domains:

![ST-701-settings-mail-relay-filter.jpg](/docs-test/imported-assets/spamtitan-legacy/8910-managing-domains/d745af309fb0.jpg)

Adding a Domain

:::tip
Click **Import...** to import domains in bulk from a comma-separated values (.csv) file rather than entering each domain separately. The CSV file must have the following format:

-   Domain name (required)

-   Destination Mail Server:Port (required)

-   Recipient Verification type (none/dynamic/LDAP) (required)

-   Domain Group Name (optional), listed after all recipient verification settings

See [Importing Domains](/docs-test/titanhq/products/spamtitan/docs/legacy-8/importing-domains/ "Importing Domains") for more information.

You can also use SpamTitan APIs to import domains. See [Using APIs in SpamTitan Gateway](/docs-test/titanhq/products/spamtitan/docs/legacy-8/using-apis-in-spamtitan-gateway/ "Using APIs in SpamTitan Gateway").
:::

1.  Click **Add...**.

2.  Using the table below for reference, complete the Add Domain window.

3.  Click **Save** to save your changes.

Editing a Domain

1.  Click on the edit ![ST-701-edit-button.jpg](/docs-test/imported-assets/spamtitan-legacy/8910-managing-domains/7455a85c9b68.jpg) icon in the Options column.

2.  Using the table below for reference, complete the Edit Domain window.

3.  Click **Save** to save your changes.

Deleting a Domain

1.  Click the checkbox ![ST-701-check-box.jpg](/docs-test/imported-assets/spamtitan-legacy/8910-managing-domains/d19d75015111.jpg) to the left of the domain name(s) you want to delete. To delete a single domain, click the delete ![ST-701-delete-button.jpg](/docs-test/imported-assets/spamtitan-legacy/8910-managing-domains/3b2dc809e314.jpg) icon in the Options column to the right of that domain.

2.  Click **Delete**.

Verifying a Domain

Follow these steps to verify that a domain is entered correctly and to send a test email:

1.  Click the test ![ST-701-test-button.jpg](/docs-test/imported-assets/spamtitan-legacy/8910-managing-domains/1d6f3f2c36e2.jpg) icon on the right under the Options column. The Send Test Email dialog displays.

2.  Enter a valid email address for the selected domain.

3.  Click **Send**.

4.  Confirm the recipient has received the test email.

###### Domain Settings

<table><colgroup><col><col></colgroup><thead><tr><th><p>Field</p></th><th><p>Description</p></th></tr></thead><tbody><tr><td valign="top"><p><span><strong>Domain:</strong></span></p></td><td><p>The Fully Qualified Domain Name (FQDN) of a domain that you receive email for. For example, <span><em>example.com</em></span>.</p><p>If outbound filtering is enabled, the FQDN of a domain for which you send mail can be entered. See <a href="/docs-test/titanhq/products/spamtitan/docs/legacy-8/outbound-mail/" title="Outbound Mail">Outbound Mail</a>.</p></td></tr><tr><td valign="top"><p>Destination Server:</p></td><td><p>The destination mail server FQDN or IP for this domain. Typically, the destination mail server is the Microsoft Exchange Server, or alternative mail server, on your local network.</p><p>Multiple servers can be specified for failover or used in a round-robin fashion. The delimiter used controls this behavior:</p><div><ul><li><p>Comma (','): Each server listed is used in a round-robin.</p></li><li><p>Space (' '): The first entry is the primary mail server and subsequent entries are failover servers. Failover servers are only used if the preceding entry is unreachable.</p></li></ul></div></td></tr><tr><td valign="top"><p>Destination Port:</p></td><td><p>Destination mail server port (default: 25). If multiple destination mail servers are specified, they must all use the same port.</p></td></tr><tr><td><p>Enable MX Lookup:</p></td><td><p>Enable to relay mail using the MX records for the server listed in the Destination Server field (default: disabled). If enabled, you must enter a domain name in the Destination Server field.</p></td></tr><tr><td valign="top"><p><span><strong>Recipient Verification:</strong></span></p></td><td><p>If recipient verification is enabled, messages to unknown users are immediately rejected before the message even arrives in your network. See <a href="/docs-test/titanhq/products/spamtitan/docs/legacy-8/more-about-recipient-verification/" title="More About Recipient Verification">More About Recipient Verification</a>.</p><p>Choose a method to perform recipient verification from the drop-down menu:</p><div><ul><li><p><span><em>Dynamic Recipient Verification:</em></span> If your mail server supports recipient verification, select Dynamic Recipient Verification. Most Unix based mail servers, Groupwise, and Exchange 2003 (off by default) support this option.</p><p>In the <span><em>Verification Server</em></span> field enter the server the verification probe will be sent to. This is normally the same as the destination server, but it may be different if required.</p></li><li><p><span><em>LDAP Recipient Verification:</em></span> For Exchange 2000 mail servers, or other mail servers that support LDAP directories, select LDAP Recipient Verification and enter in your LDAP server details. This will query the LDAP server to check if the intended recipient(s) are valid or not.</p><p>The <span>default</span> settings for LDAP Recipient Verification are as follows:</p><div><table><colgroup><col><col></colgroup><thead><tr><th><p>Field</p></th><th><p>Description</p></th></tr></thead><tbody><tr><td><p>LDAP Server:</p></td><td><p>IP address or FQDN of your LDAP Server (use LDAPS:// in front of LDAPS addresses).</p><p>Multiple LDAP servers can be specified. Separate each server with a comma. For example, <span><em>LDAPS://ldap1.example.com,LDAPS://ldap2.example.com</em></span>.</p></td></tr><tr><td><p>LDAP Port:</p></td><td><p>Default port is 389.</p></td></tr><tr><td><p>LDAP Anonymous Search:</p></td><td><p>Set to 'Not Allowed' for Exchange/Active Directory servers.</p></td></tr><tr><td><p>LDAP Search User DN:</p></td><td><p>The username that SpamTitan will use to connect to your LDAP server. Use email address format i.e. user@domain.local.</p><p>Leave blank if anonymous bind is allowed.</p></td></tr><tr><td><p>LDAP Password:</p></td><td><p>Password for LDAP Search User. Leave blank if anonymous bind is allowed.</p></td></tr><tr><td><p>LDAP Query Filter:</p></td><td><p>(|(proxyaddresses=smtp$%s)(proxyaddresses=smtp:%s)(mail=%s))</p></td></tr><tr><td><p>LDAP Result Attribute:</p></td><td><p>mail</p></td></tr><tr><td><p>LDAP Search base:</p></td><td><p>Based on your domain name. If the internal domain is domain.local, then the search base is DC=domain, DC=local</p></td></tr></tbody></table></div></li><li><p></p></li><li><p><span><em>Specify Allowed Recipients:</em></span> When editing a domain, you can specify a list of allowed recipients by manually entering allowed email addresses. Alternatively, click <span><strong>Import</strong></span> to import a text file of allowed addresses. Specify one email address per line.</p></li><li><p><span><em>Specify Regular Expression:</em></span> Regular expression, also known as regex or regexp, is a standard pattern matching tool used in many scripting languages. It allows you to create filters that can match patterns of text, rather than just single words or phrases.</p></li></ul></div></td></tr><tr><td valign="top"><p><span><strong>RBL Checks:</strong></span></p></td><td><p>This setting allows you to enable or disable Realtime Blackhole List (RBL) checks for this domain. The RBL test checks the IP address of all mail servers sending mail to your domain against lists of known spammer IP addresses. This test is extremely effective at blocking spam and it is strongly recommended leaving this option enabled. (default: Yes).</p></td></tr><tr><td valign="top"><p><span><strong>SPF Checks:</strong></span></p></td><td><p>This setting allows you to enable or disable Sender Policy Framework (SPF) checks for this domain. The SPF test checks the SPF record of the sending domain to make sure the IP of the sender is allowed for the domain and if not, it rejects the mail. This test is effective at blocking spam, however, it can cause potential false positives due to improperly set up SPF records. It is recommended to enable with caution. (default: Yes).</p></td></tr><tr><td valign="top"><p><span><strong>Greylisting:</strong></span></p></td><td><p>Allows you to enable or disable greylisting for this domain. Greylisting temporarily rejects all email and requires the sending server to send it again after 5 minutes.</p></td></tr><tr><td valign="top"><p><span><strong>IP Delivery Pool:</strong></span></p></td><td><p>Outbound email sent from a user in this domain uses an IP address from the selected IP Delivery Pool. If no IP Delivery Pool is selected, the email is sent from the Main Pool, which defaults to the IP address of the appliance.</p><p>Go to <span><strong>System Setup</strong></span> &gt; <span><strong>Network</strong></span> &gt; <span><strong>IP Delivery Pools</strong></span> to configure IP delivery pools.</p></td></tr><tr><td valign="top"><p><span><strong>Domain Group:</strong></span></p></td><td><p>Assign this domain to a domain group that has been already been created in <span><strong>AntiSpam Engine</strong></span> &gt; <span><strong>Domain Groups</strong></span>. This field only appears if at least one domain group exists. The field auto-completes, offering suggestions of existing domain groups as you type.</p><p>Assigning a domain to a domain group allows one or more Domain Group Administrators to be created with access to the domains within that domain group.</p></td></tr></tbody></table>

## In this Section

-   [Domain Settings](/docs-test/titanhq/products/spamtitan/docs/legacy-8/managing-domains/)
-   [Importing Domains](/docs-test/titanhq/products/spamtitan/docs/legacy-8/importing-domains/)
-   [More About Recipient Verification](/docs-test/titanhq/products/spamtitan/docs/legacy-8/more-about-recipient-verification/)
