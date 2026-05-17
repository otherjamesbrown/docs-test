---
title: "Taking Action on an Email"
description: "Imported from helpdesk.phishtitan.com"
---

> Source: [helpdesk.phishtitan.com](https://helpdesk.phishtitan.com/support/solutions/articles/4000226795-taking-action-on-an-email)
> Product: PhishTitan
> Imported content type: kb_article
> Source folder: Email History (Customer)
> Modified: Wed, 15 Apr, 2026 at 12:03 PM

1.  Locate the email you wish to take action on, and select it to display the Email Summary page. In the example below, an email with an _Action Needed_ status has been selected. The email summary displays details about the email, including its current status and verdict.

    ![ES-Email-History-Action.jpg](/docs-test/imported-assets/phishtitan-kb/4000226795/71026100bf89.jpg)

2.  From the **Actions** menu, select an action to take on this email. Depending on its status, different options are available.

    -   _Remediate_: This action removes the email from all affected inboxes. If the email was sent to multiple recipients, you'll be prompted with a pop-up window to confirm your decision to remediate the email. Select **Remediate for All**.

        ![ES-Email-History-Action-Remediate.jpg](/docs-test/imported-assets/phishtitan-kb/4000226795/5811bc67b024.jpg)

        If the email was sent to one recipient, the email will be remediated. You won't receive a pop-up to confirm your decision.

    -   _Mark as Safe_: This action restores the email to all affected inboxes and adds a banner marking it as safe.

    -   _Exempt Sender_: This action adds the sender's email address to the Exemptions list. You'll be prompted to add the mail flow checks you want to skip for this address. See [Exemptions](/docs-test/titanhq/products/phishtitan/kb/exemptions-msp/exemptions/) for further details.

    -   _Exempt Domain_: This action adds the sender's domain to the Exemptions list. You'll be prompted to add the mail flow checks you want to skip for this address. See [Exemptions](/docs-test/titanhq/products/phishtitan/kb/exemptions-msp/exemptions/) for further details.
