---
title: "Enable Link Lock for a User Print"
description: "Imported from helpdesk.spamtitan.com"
---

> Source: [helpdesk.spamtitan.com](https://helpdesk.spamtitan.com/support/solutions/articles/4000186944-enable-link-lock-for-a-user)
> Product: SpamTitan
> Imported content type: kb_article
> Source folder: Link Lock
> Modified: Wed, 14 Sep, 2022 at 4:10 PM

![](/docs-test/imported-assets/spamtitan-kb/4000186944/8f1ecbff6e4e.jpg)

Link Lock is an enhancement to SpamTitan and is available after the purchase of a SpamTitan Plus license. Once a license is in place, Link Lock must be enabled by the SpamTitan administrator at the global level. Once enabled, Link Lock can also be managed at the domain and user levels.

Follow the steps below to enable Link Lock for a user.

1.  Go to **Content Filtering** > **Link Lock** and scroll to the **Configuration** panel.

2.  In the **Users** table, click the edit ![](/docs-test/imported-assets/spamtitan-kb/4000186944/7455a85c9b68.jpg) icon in the Options column of the user for which you want to enable Link Lock and the Link Lock Configuration (User) window displays:

    ![](/docs-test/imported-assets/spamtitan-kb/4000186944/b1e4661838c5.jpg)

3.  Click **Enable** to turn Link Lock ON for this user.

4.  Select **Rewrite links in DKIM signed mails** to allow Link Lock to write emails with a DKIM signature for this user.

    :::caution[Important]
    Checking this option invalidates DKIM signatures, which may affect scoring on other mail systems.
    :::

5.  Click **Apply**.
