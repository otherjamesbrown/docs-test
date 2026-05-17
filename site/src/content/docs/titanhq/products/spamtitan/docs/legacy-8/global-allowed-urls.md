---
title: "Global Allowed URLs"
description: "Imported from docs.titanhq.com"
---

> Source: [docs.titanhq.com](https://docs.titanhq.com/en/30214-global-allowed-urls.html)
> Product: SpamTitan
> Imported content type: docs_page
> Product stream: legacy

###### Global Allowed URLs

You can exclude URLs from Link Lock by adding them to an allowed URLs list. This can be done at the global, domain and user levels.

Follow the steps below to add a URL to your global allowed URLs list. URLs on this list are exempt from Link Lock. Global allowed URLs are inherited by domain and user levels.

By default, a number of URLs have been already been added to your global allowed URLs. These are the URLs of other link rewriting services and listing them avoids Link Lock rewriting them again:

-   Check Point's CloudGuard: _checkpoint.url-protection.com_

-   Gmail's Clic-Time Link Protection: _google.com_

-   Barracuda's Link Protect: _linkprotect.cudasvc.com_

-   Mimecast URL Protect: _mimecast.com_

-   Microsoft Safe Links: _safelinks.protection.outlook.com_

-   Proofpoint URL Defense: _urldefense.proofpoint.com_

1.  Go to **Content Filtering** > **Link Lock** and scroll to the **Allowed URLs** panel.

2.  In the **Global:** table, click **Add...** and the Add Allowed URL window displays.

    ![ST-add-global-link-lock-allowed-URL.jpg](/docs-test/imported-assets/spamtitan-legacy/30214-global-allowed-urls/ed54f749d15c.jpg)

3.  Complete the fields as follows:

    -   URL: The URL you want to be exempt from Link Lock. Global allowed URLs are inherited by domain and user levels.

    -   Comment: An optional comment on this allowed URL.

4.  Click **Apply**.
