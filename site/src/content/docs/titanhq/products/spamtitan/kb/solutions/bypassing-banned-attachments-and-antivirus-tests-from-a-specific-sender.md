---
title: "Bypassing Banned Attachments & Antivirus Tests from a Specific Sender"
description: "Imported from helpdesk.spamtitan.com"
---

> Source: [helpdesk.spamtitan.com](https://helpdesk.spamtitan.com/support/solutions/articles/4000189402-bypassing-banned-attachments-antivirus-tests-from-a-specific-sender)
> Product: SpamTitan
> Imported content type: kb_article
> Source folder: Solutions
> Modified: Tue, 6 Dec, 2022 at 12:58 PM

![](/docs-test/imported-assets/spamtitan-kb/4000189402/569fc657a5f9.jpg)

**What is the issue?**

This is a description of how to create a content filter that will exclude an email from ALL but the front-line tests.

**What is the solution?**

1.  Go to **Content Filtering** > **Content Filtering** and click **Add...**.

2.  Complete the fields in the Add Filter dialogue box as shown in this example, but replace _example@domain.com_ in the _Value_ field with the email address you want to create the filter for. When using **matches regular expression**, you must escape any special characters by using a backslash (\\) before the special character. For example, _example\\@domain\\.com_ will bypass banned attachments sent from _example@domain.com_:

    ![](/docs-test/imported-assets/spamtitan-kb/4000189402/01bd659ee0f0.jpg)

3.  Click **Save**.

**Further Info**

For more information, see our [Content Filtering](/docs-test/titanhq/products/spamtitan/docs/legacy-8/content-filtering/) and [Using Regular Expression](/docs-test/titanhq/products/spamtitan/docs/legacy-8/using-regular-expression/) documentation.
