---
title: "Enable Link Lock for a User"
description: "Imported from docs.titanhq.com"
---

> Source: [docs.titanhq.com](https://docs.titanhq.com/en/30224-enable-link-lock-for-a-user.html)
> Product: SpamTitan
> Imported content type: docs_page
> Product stream: legacy

##### Enable Link Lock for a User

Link Lock is an enhancement to SpamTitan and is available after the purchase of a SpamTitan Plus license. Once a license is in place, Link Lock must be enabled by the SpamTitan administrator at the global level. Once enabled, Link Lock can also be managed at the domain and user levels.

Follow the steps below to enable Link Lock for a user.

1.  Go to **Content Filtering** > **Link Lock** and scroll to the **Configuration** panel.

2.  In the **Users** table, click the edit ![ST-701-edit-button.jpg](/docs-test/imported-assets/spamtitan-legacy/30224-enable-link-lock-for-a-user/7455a85c9b68.jpg) icon in the Options column of the user for which you want to enable Link Lock and the Link Lock Configuration (User) window displays:

    ![ST-edit-user-link-lock-config.jpg](/docs-test/imported-assets/spamtitan-legacy/30224-enable-link-lock-for-a-user/b1e4661838c5.jpg)

3.  Click **Enable** to turn Link Lock ON for this user.

4.  Select **Rewrite links in DKIM signed mails** to allow Link Lock to write emails with a DKIM signature for this user.

    :::caution[Important]
    Checking this option invalidates DKIM signatures, which may affect scoring on other mail systems.
    :::

5.  Click **Apply**.
