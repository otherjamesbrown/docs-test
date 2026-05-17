---
title: "Sandboxing in SpamTitan"
description: "Imported from support.titanhq.com"
---

> Source: [support.titanhq.com](https://support.titanhq.com/en/66510-sandboxing-in-spamtitan.html)
> Product: SpamTitan
> Imported content type: docs_page
> Product stream: skellig

#### Sandboxing in SpamTitan

Sandboxing allows for the detection and isolation of files suspected of containing malware so they can be further analyzed. SpamTitan uses Bitdefender for sandboxing. During the sandboxing process, Bitdefender only retains hashes of files and corresponding scan results.

Follow the steps below to enable or disable sandboxing (default: enabled).

Sandboxing is be enabled or disabled within a domain policy. A domain policy can be accessed at either the Customer level from **Policies** > **Domain Policies**, or at the Domain level from **Policies** > **Domain Policy**.

1.  From the Customer level, go to **Policies** > **Domain Policies** or from the Domain level go to **Policies** > **Domain Policy**.

2.  Scroll to **Virus Filtering** and select **On**.

    ![ST-SK-enable-sandboxing.jpg](/docs-test/imported-assets/spamtitan-skellig/66510-sandboxing-in-spamtitan/aa944c1a20b9.jpg)

3.  Select ![selected-check-box.jpg](/docs-test/imported-assets/spamtitan-skellig/66510-sandboxing-in-spamtitan/290997c07565.jpg) **Sandbox**.

4.  Select **Save Changes** to save changes to this domain policy.

##### How Sandboxing works in SpamTitan

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

-   [How Sandboxing works in SpamTitan](/docs-test/titanhq/products/spamtitan/docs/skellig-9/sandboxing-in-spamtitan/)
