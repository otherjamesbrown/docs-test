---
title: "Anti-Spoofing Settings"
description: "Imported from docs.titanhq.com"
---

> Source: [docs.titanhq.com](https://docs.titanhq.com/en/66112-anti-spoofing-settings.html)
> Product: SpamTitan
> Imported content type: docs_page
> Product stream: legacy

##### Anti-Spoofing Settings

Go to **Filter Rules** > **Anti-Spoofing Settings** to enable anti-spoofing and edit anti-spoofing settings. The Anti-Spoof Domains window shows a list of your domains and which ones have anti-spoofing enabled (Yes) or not (No). To enable anti-spoofing, see [Enabling Anti-Spoofing](/docs-test/titanhq/products/spamtitan/docs/legacy-8/enabling-anti-spoofing-66111/ "Enabling Anti-Spoofing").

![ST-anti-spoof-edit-domain.jpg](/docs-test/imported-assets/spamtitan-legacy/66112-anti-spoofing-settings/2ced3ae47d5c.jpg)

Once Anti-Spoofing is enabled, use the table below as reference to modify your settings. Select **Save** after making changes.

:::danger[Warning]
If you do not click **Save** when editing multiple domains, only changes to the first domain checked will be saved.
:::

<table><colgroup><col align="left"><col align="left"></colgroup><thead><tr><th align="left"><p>Setting</p></th><th align="left"><p>Description</p></th></tr></thead><tbody><tr><td align="left"><p>Use SPF Record for IP Validation:</p></td><td align="left"><p>Enable this option to use your SPF record to determine if a sender is valid instead of specifying IPs in the IP List (default: disabled).</p></td></tr><tr><td><p>Display Name Spoof Protection:</p></td><td><p>Enable this option to help protect display names from being used in a fraudulent manner. When you enable this option, the display names and email addresses that you upload are verified to ensure they are valid. (default: disabled).</p></td></tr><tr><td align="left"><p>IP List:</p></td><td align="left"><p>If you have not enabled the <span><em>Use SPF Record for IP Validation</em></span> setting, you can add a list of <a href="/docs-test/titanhq/products/spamtitan/docs/legacy-8/cidr/" title="CIDR">CIDR</a> notation ranges here that are allowed to send email using your domain.</p><p>Select <span><strong>Add...</strong></span> to add an entry.</p><p>Once added, select the edit <span><img src="/docs-test/imported-assets/spamtitan-legacy/66112-anti-spoofing-settings/7455a85c9b68.jpg" alt="ST-701-edit-button.jpg"></span> icon to edit an IP, or the delete <span><img src="/docs-test/imported-assets/spamtitan-legacy/66112-anti-spoofing-settings/3b2dc809e314.jpg" alt="ST-701-delete-button.jpg"></span> icon to delete an IP from the list.</p></td></tr><tr><td align="left"><p>Hostname List</p></td><td align="left"><p>Select <span><strong>Add...</strong></span> to enter hostnames that are allowed to send email using your domain. For example, www.example.com.</p><p>Enter example.com to include any sub-domains such as support.example.com, mail.example.com, docs.example.com, and so on.</p><p>Regular expression patterns can be used here, but are not necessary. If using regular expression, note that the more generic the expression, the easier it is to bypass spoofing.</p></td></tr></tbody></table>
