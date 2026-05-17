---
title: "Sandboxing in SpamTitan Gateway"
description: "Imported from docs.titanhq.com"
---

> Source: [docs.titanhq.com](https://docs.titanhq.com/en/8946-sandboxing-in-spamtitan-gateway.html)
> Product: SpamTitan
> Imported content type: docs_page
> Product stream: legacy

###### Sandboxing in SpamTitan Gateway

Sandboxing allows for the detection and isolation of files suspected of containing malware, so they can be further analyzed. SpamTitan uses Bitdefender for sandboxing. During the sandboxing process, Bitdefender only retains hashes of files and corresponding scan results.

Follow the steps below to enable or disable sandboxing (default: disabled). Sandboxing can also be enabled or disabled on a per-policy basis.

1.  Go to **Content Filtering** > **Viruses** and scroll down to **BitDefender Antivirus**.

2.  Click **Enable** opposite _Sandboxing:_ (default: disabled).

To disable sandboxing again, click **Disable**.

###### How Sandboxing works in SpamTitan

Using a pre-filter that is more aggressive than the normal AV engine, Bitdefender Antivirus determines if an email attachment should or should not be sent to the sandbox. If the engine recommends an attachment be sent to the sandbox, the following occurs:

1.  If the email would not otherwise have been blocked by any other means, SpamTitan uploads the attachment to the sandbox where it is assigned a job identifier.

2.  SpamTitan queries the sandbox every fifteen seconds (for up to twenty minutes) to see if the job is complete. During this period, the message delivery status in History is 'Sent to Sandbox'.

3.  If no result is returned after twenty minutes, the file is marked as clean and the email passed.

4.  If the sandbox returns that the attachment contains malware, the email is blocked as a virus with the virus name assigned as ATP.Sandbox. The message will be listed under Viruses in the relevant Quarantine report.

    :::tip
    You can view emails that have been sandboxed by filtering them in History. Go to **Reporting** > **History** > **Mail Filters** and check 'Sandboxed'.
    :::

5.  If a message blocked as spam is released and it was originally marked as 'Sent to Sandbox', upon release SpamTitan will re-scan the message against the Bitdefender Antivirus engine. This may result in the message getting blocked or being sent to the sandbox.

## In this Section

-   [How Sandboxing works in SpamTitan](/docs-test/titanhq/products/spamtitan/docs/legacy-8/sandboxing-in-spamtitan-gateway/)
