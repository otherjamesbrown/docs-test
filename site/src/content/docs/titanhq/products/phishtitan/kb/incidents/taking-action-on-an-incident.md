---
title: "Taking Action on an Incident"
description: "Imported from helpdesk.phishtitan.com"
---

> Source: [helpdesk.phishtitan.com](https://helpdesk.phishtitan.com/support/solutions/articles/4000202552-taking-action-on-an-incident)
> Product: PhishTitan
> Imported content type: kb_article
> Source folder: Incidents
> Modified: Tue, 28 Oct, 2025 at 3:51 PM

Taking action on an incident is also known as _remediating_ an incident.

1.  Locate the incident you wish to take action on, and select it to display the Incident Summary page. See [Viewing an Incident](/docs-test/titanhq/products/phishtitan/kb/incidents/viewing-an-incident/ "Viewing an Incident") for more information.

    The message header displays details about the incident, including its current status and flag reason:

    ![PT-Message-Header-Incident-Summary.jpg](/docs-test/imported-assets/phishtitan-kb/4000202552/ef779d9d38d0.jpg)

2.  From the **Actions** menu, select an action to take on this incident.

    :::note
    When you select one of the following actions for an email or domain, it is applied to all affected users. Select the **Affected Users** tab to see a list of all users that received the email.
    :::

    -   _Remediate_: This action removes the email from all affected inboxes.

    -   _Mark as Safe_: This action adds a green banner to this email marking it as safe. The email is restored to all affected inboxes.

    -   _Allow Sender_: This action adds the sender to the Allow List. The email is delivered to the user's inbox without analysis. See Adding a Sender to the Allow List for additional information.

    -   _Allow Domain_: This action adds the domain to the Allow List, so that any email using that domain is delivered to the user's inbox without analysis. See Adding a Domain to the Allow List for additional information.

<table width="100%"><colgroup><col width="20%"><col width="50%"><col width="25%"></colgroup><thead><tr><th><p>Status</p></th><th><p>Description</p></th><th><p>Available Actions</p></th></tr></thead><tbody><tr><td><div><img src="/docs-test/imported-assets/phishtitan-kb/4000202552/e4220470dee3.jpg" alt="action-needed.jpg" data-xinfo-image="66286"></div></td><td><p>An email has been flagged by a user as phishing or clean using the TitanHQ for Outlook add-in.</p><p>This incident needs Admin attention and review.</p><div dir="ltr" data-import-admonition="note" data-import-admonition-title="Note"><h3>Note</h3><p>If the email has been sent to only one recipient and has been reported as phishing, then it is automatically remediated to the junk folder.</p></div></td><td><p>Remediate</p><p>Mark as Safe</p><p>Allow Sender</p><p>Allow Domain</p></td></tr><tr><td><div><img src="/docs-test/imported-assets/phishtitan-kb/4000202552/f87752bd664f.jpg" alt="sent-to-junk.jpg" data-xinfo-image="66285"></div></td><td><p>Emails can be sent to junk in the following ways:</p><div><ul><li><p>Administrator has reviewed this email and determined it was malicious and selected to move it to a user's Junk folder.</p></li><li><p>An email has been flagged by a user as phishing using the TitanHQ for Outlook add-in.</p></li></ul></div><p>This email has been moved to the Junk folder for all recipients.</p></td><td><p>Mark as Safe</p><p>Allow Sender</p><p>Allow Domain</p></td></tr><tr><td><div><img src="/docs-test/imported-assets/phishtitan-kb/4000202552/2bc09fe51906.jpg" alt="banner-applied.jpg" data-xinfo-image="66284"></div></td><td><p>Email Security has flagged this email as suspicious and applied a warning banner before delivering it to a user's Inbox.</p></td><td><p>Remediate</p><p>Mark as Safe</p><p>Allow Sender</p><p>Allow Domain</p></td></tr><tr><td><div><img src="/docs-test/imported-assets/phishtitan-kb/4000202552/73b3c504d1b8.jpg" alt="PT-Actions-Marked-As-Safe.jpg" data-xinfo-image="67485"></div></td><td><p>Administrator has reviewed this email and determined it is safe. Once marked as safe, the email is then delivered to all recipients with a banner marking it as safe.</p></td><td><p>Remediate</p><p>Allow Sender</p><p>Allow Domain</p></td></tr><tr><td><div><img src="/docs-test/imported-assets/phishtitan-kb/4000202552/4358129122bc.jpg" alt="PT-Auto-Remediated-Label.jpg" data-xinfo-image="68355"></div></td><td><p>Auto remediation has been enabled meaning that this email has automatically been moved to the Junk folder for all recipients.</p></td><td><p>Allow Sender</p><p>Mark as Safe</p></td></tr></tbody></table>
