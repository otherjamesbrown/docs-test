---
title: "Incidents"
description: "Imported from support.titanhq.com"
---

> Source: [support.titanhq.com](https://support.titanhq.com/en/66985-incidents.html)
> Product: PhishTitan
> Imported content type: docs_page
> Product stream: email-security

#### Incidents

In Email Security, potential threats are called incidents. An incident can be flagged by the system or by a user using the TitanHQ for Outlook add-in.

Go to **Email Security** > **Incidents** to view, take action on (remediate), and manage incidents in Email Security.

:::note
If you have auto remediation set up, then Email Security will automatically send malicious mails to a user's junk folder. See [Remediation](/docs-test/titanhq/products/phishtitan/docs/email-security/msp-mail-flow/ "MSP Remediation") for more details.
:::

Incidents are divided into two groups, which can be accessed by selecting either the Action Needed or Resolved tabs at the top of the page.

![PT-Incident-Tabs.jpg](/docs-test/imported-assets/phishtitan-docs/66985-incidents/d02d84121153.jpg)

-   The Action Needed tab opens by default when you select **Email Security** > **Incidents** and displays incidents requiring admin attention. These are Incidents that have been reported by users using the TitanHQ for Outlook add-in. When you mark these mails as safe or move them to junk, they are automatically moved to the Resolved tab.

-   The Resolved tab contains mails that have been automatically flagged by the system and ones you have taken action on are also listed here. No further action is required for these incidents.

From both the Action Needed and Resolved tabs, you can quickly remediate one or more incidents from all affected inboxes using the multi-selection feature as follows:

1.  Select the Incident(s) to be remediated to reveal an Actions dropdown menu in the upper-right corner.

    ![ES-MultiSelect-Selection.jpg](/docs-test/imported-assets/phishtitan-docs/66985-incidents/7e0986965260.jpg)

2.  Select **Actions** > **Remediate** to remove the emails from affected inboxes.

    ![ES-MultiSelect-Dropdown-onlyRemediate.jpg](/docs-test/imported-assets/phishtitan-docs/66985-incidents/4d95468042fb.jpg)

3.  A pop-up window will notify you of the emails to be remediated and indicate if some incidents are not available for remediation. Select **Start Remediation** to begin the process.

    ![ES-MultiSelect-Confirmation-Popup.jpg](/docs-test/imported-assets/phishtitan-docs/66985-incidents/dcd6491b7b6a.jpg)

    You’ll see an Action Status notification, as in the example below, informing you of the remediation progress.

    ![ES-MultiSelect-Action-Progress-Completion.jpg](/docs-test/imported-assets/phishtitan-docs/66985-incidents/bd6f148545f4.jpg)

    Once remediated, the email(s) will be labelled as _Remediated_ in the Status column. The Action Status notification area automatically closes when you leave the Incidents page.

See [Taking Action on an Incident](/docs-test/titanhq/products/phishtitan/docs/email-security/taking-action-on-an-incident/ "Taking Action on an Incident") for further information on managing Incidents.

To manage how Incidents are displayed, you can do the following:

-   Use the search ![search-incidents.jpg](/docs-test/imported-assets/phishtitan-docs/66985-incidents/6974c408d7c8.jpg) box to search the list of incidents.

-   Select the column ![ES-Column-Reorder-icon.jpg](/docs-test/imported-assets/phishtitan-docs/66985-incidents/9ff217c6917f.jpg) icon to manage table columns. By default, all columns are visible and arranged in a specific order. You can change the display by doing the following:

    By default, all columns are visible and arranged in a specific order. You can change the display by doing the following:

    -   Select or deselect the checkbox beside a column name to show or hide a column.

    -   Use the reordering ![ES-Reordering-icon.jpg](/docs-test/imported-assets/phishtitan-docs/66985-incidents/75ef450eda3f.jpg) icon to move columns up and down the list. This changes the left-to-right display. An item at the top of the list, for example, means that it will be the first column on the left. Select **Restore default order** to restore the columns to their default positions.

    -   Resize columns by hovering your cursor over the column boundary you want to adjust until it becomes a resize ![ES-Resize-Cursor.jpg](/docs-test/imported-assets/phishtitan-docs/66985-incidents/3b077003c7a7.jpg) cursor. Drag the boundary until the column is the width you want.

    :::note
    Note that any changes you make here will remain, even if you leave the page.
    :::

    The following columns are available:

    -   _Date_: The date the reported email was received.

    -   _Subject_: Email subject line of the reported email.

    -   _Sender_: Sender email address of the reported email.

    -   _Flag Reason_: The reason this email was flagged for further investigation. See [Incident Flag Reasons](/docs-test/titanhq/products/phishtitan/docs/email-security/incidents/ "Incident Flag Reasons").

    -   _Status_: The current status of this incident. See [Incident Status Descriptions](/docs-test/titanhq/products/phishtitan/docs/email-security/incidents/ "Incident Status Descriptions").

    -   _Customer_: The Email Security customer this incident is related to.

    -   _Actions_: Actions available for this incident.

-   From the Actions column, you can do the following:

    -   To [add a sender to the Allow List](https://support.titanhq.com/document/preview/67712#UUID-83afd69f-2910-6688-a4c7-896ffd8dfa19), select the allow sender ![PT-Allow-List-Icon.jpg](/docs-test/imported-assets/phishtitan-docs/66985-incidents/3e5939c61b17.jpg) icon for the incident. See [Allow List](https://support.titanhq.com/document/preview/67714#UUID-0f87f3af-e69d-2ed3-5499-af04009daf7d) for further details.Adding a Sender to the Allow ListAllow List

    -   To [add a domain to the Allow List](https://support.titanhq.com/document/preview/68495#UUID-a958ef5a-c36e-114d-2f66-71b301958bd6), select the allow domain ![PT-Allow-Domain-Icon.jpg](/docs-test/imported-assets/phishtitan-docs/66985-incidents/761f9fc9da7a.jpg) icon for the incident. See [Allow List](https://support.titanhq.com/document/preview/67714#UUID-0f87f3af-e69d-2ed3-5499-af04009daf7d) for further details.Adding a Domain to the Allow ListAllow List

To [view additional details of an incident](/docs-test/titanhq/products/phishtitan/docs/email-security/viewing-an-incident/ "Viewing an Incident"), locate the incident in the table and select it. See [Incident Summary](/docs-test/titanhq/products/phishtitan/docs/email-security/viewing-an-incident/ "Incident Summary") for further details.

##### Incident Flag Reasons

<table><colgroup><col><col></colgroup><thead><tr><th><p>Flag Reason</p></th><th><p>Description</p></th></tr></thead><tbody><tr><td><p>User Reported Phishing</p></td><td><p>A user reported this email as phishing with the TitanHQ for Outlook add-in.</p></td></tr><tr><td><p>User Reported Spam</p></td><td><p>A user reported this email as spam with the TitanHQ for Outlook add-in.</p></td></tr><tr><td><p>User Reported Clean</p></td><td><p>A user reported this email as clean with the TitanHQ for Outlook add-in.</p></td></tr><tr><td><p>Suspicious Text</p></td><td><p>Email Security detected suspicious text in the body of this email.</p></td></tr><tr><td><p>Malicious Links</p></td><td><p>Email Security detected malicious links in the body of this email. A malicious URL is a link embedded in an email that was created with the purpose of promoting scams, attacks, and frauds. When selected, malicious URLs can download ransomware, or lead to phishing or spearphishing emails.</p></td></tr><tr><td><p>Phishing</p></td><td><p>Email Security flagged this email as a phishing attempt. Phishing emails attempt to trick&nbsp;people into revealing personal or confidential information which can then be used illicitly; for example, to steal a recipient's money or identity.</p></td></tr><tr><td><p>Spoofed Display Name</p></td><td><p>Email Security detected a spoofed display name. Email spoofing is the creation of an email with a forged sender address to intentionally mislead a recipient about its origin.</p></td></tr><tr><td><p>Spam</p></td><td><p>Email Security flagged this email as spam. Spam refers to unsolicited emails that are sent to a large number of recipients, usually as advertising.</p></td></tr><tr><td><p>Fraud</p></td><td><p>Email Security flagged this email as fraud. Email fraud intentionally deceives the recipient into sharing personal data, such as bank or credit card details.</p></td></tr><tr><td><p>Graymail</p></td><td><p>Email Security flagged this email as Graymail. Graymail refers to solicited marketing emails and comes from a legitimate source. Recipients once subscribed to them and now may no longer open or read them.</p></td></tr><tr><td><p>Exploited Domains</p></td><td><p>Email Security detected this email as coming from a free email service, which malicious actors frequently use to launch phishing attacks. An alert banner was added as a reminder to users to stay vigilant, even if the email content does not look suspicious.</p></td></tr></tbody></table>

##### Incident Status Descriptions

<table><colgroup><col><col><col></colgroup><thead><tr><th><p>Status</p></th><th><p>Description</p></th><th><p>Available Actions</p></th></tr></thead><tbody><tr><td><div><img src="/docs-test/imported-assets/phishtitan-docs/66985-incidents/e4220470dee3.jpg" alt="action-needed.jpg"></div></td><td><p>An email has been flagged by a user as phishing or clean using the TitanHQ for Outlook add-in.</p><p>This incident needs Admin attention and review.</p><div dir="ltr" data-import-admonition="note" data-import-admonition-title="Note"><h3>Note</h3><p>If the email has been sent to only one recipient and has been reported as phishing, then it is automatically remediated to the junk folder.</p></div></td><td><p>Remediate</p><p>Mark as Safe</p><p>Allow Sender</p><p>Allow Domain</p></td></tr><tr><td><div><img src="/docs-test/imported-assets/phishtitan-docs/66985-incidents/cb6662edc6f0.jpg" alt="ES-Remediated-Button.jpg"></div></td><td><p>Emails can be remediated in the following ways:</p><div><ul><li><p>Administrator has reviewed this email and determined it was malicious and selected to move it to a user's Junk folder.</p></li><li><p>An email has been flagged by a user as phishing using the TitanHQ for Outlook add-in.</p></li></ul></div><p>This email has been moved to the Junk folder for all recipients.</p></td><td><p>Mark as Safe</p><p>Allow Sender</p><p>Allow Domain</p></td></tr><tr><td><div><img src="/docs-test/imported-assets/phishtitan-docs/66985-incidents/2bc09fe51906.jpg" alt="banner-applied.jpg"></div></td><td><p>Email Security has flagged this email as suspicious and applied a warning banner before delivering it to a user's Inbox.</p></td><td><p>Remediate</p><p>Mark as Safe</p><p>Allow Sender</p><p>Allow Domain</p></td></tr><tr><td><div><img src="/docs-test/imported-assets/phishtitan-docs/66985-incidents/73b3c504d1b8.jpg" alt="PT-Actions-Marked-As-Safe.jpg"></div></td><td><p>Administrator has reviewed this email and determined it is safe. Once marked as safe, the email is then delivered to all recipients with a banner marking it as safe.</p></td><td><p>Remediate</p><p>Allow Sender</p><p>Allow Domain</p></td></tr><tr><td><div><img src="/docs-test/imported-assets/phishtitan-docs/66985-incidents/4358129122bc.jpg" alt="PT-Auto-Remediated-Label.jpg"></div></td><td><p>Auto remediation has been enabled meaning that this email has automatically been moved to the Junk folder for all recipients.</p></td><td><p>Allow Sender</p><p>Mark as Safe</p></td></tr></tbody></table>

## In this Section

-   [Incident Flag Reasons](/docs-test/titanhq/products/phishtitan/docs/email-security/incidents/)
-   [Incident Status Descriptions](/docs-test/titanhq/products/phishtitan/docs/email-security/incidents/)
-   [Malicious Email Classification](/docs-test/titanhq/products/phishtitan/docs/email-security/malicious-email-classification/)
-   [Viewing an Incident](/docs-test/titanhq/products/phishtitan/docs/email-security/viewing-an-incident/)
-   [Taking Action on an Incident](/docs-test/titanhq/products/phishtitan/docs/email-security/taking-action-on-an-incident/)
