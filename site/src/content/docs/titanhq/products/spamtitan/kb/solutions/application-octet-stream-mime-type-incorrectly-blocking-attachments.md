---
title: "'application/octet-stream' Mime Type Incorrectly Blocking Attachments"
description: "Imported from helpdesk.spamtitan.com"
---

> Source: [helpdesk.spamtitan.com](https://helpdesk.spamtitan.com/support/solutions/articles/4000189400--application-octet-stream-mime-type-incorrectly-blocking-attachments)
> Product: SpamTitan
> Imported content type: kb_article
> Source folder: Solutions
> Modified: Tue, 6 Dec, 2022 at 12:58 PM

![](/docs-test/imported-assets/spamtitan-kb/4000189400/569fc657a5f9.jpg)

**What is the issue?**

Legitimate email with the MIME type application/octet-stream is being blocked as "Banned".

**What causes the issue?**

The application/octet-stream is a MIME type that is generically used for attaching several types of files to messages, including:

-   Images

-   Executables (including viruses)

-   .doc and .xls files (including those with viruses)

-   .docx and .xlsx files (that are legitimate)

-   .pdf files (that are legitimate)

-   .ZIP and other archives

-   others

Given the generic nature of this MIME type, it should never be used to block or allow in **Content Filtering** > **Attachment** **Mime Type Filters**.

![](/docs-test/imported-assets/spamtitan-kb/4000189400/f2a8ab11c593.jpg)

**What is the solution?**

1.  Go to **Content Filtering** **Attachments** > **Mime Type Filters**.

2.  If _application/octet-stream_ is listed in the Mime Type column, delete the entry by clicking the **Delete** ![](/docs-test/imported-assets/spamtitan-kb/4000189400/cae7b2d2e282.jpg) icon in the Options column.

3.  Click **Apply**.
