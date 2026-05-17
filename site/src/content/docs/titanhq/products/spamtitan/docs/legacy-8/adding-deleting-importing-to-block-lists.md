---
title: "Adding, Deleting & Importing to Block Lists"
description: "Imported from docs.titanhq.com"
---

> Source: [docs.titanhq.com](https://docs.titanhq.com/en/1009-adding,-deleting---importing-to-block-lists.html)
> Product: SpamTitan
> Imported content type: docs_page
> Product stream: legacy

#### Adding, Deleting & Importing to Block Lists

Go to **Filter Rules** > **Domain (Group) Block List** to block specific email addresses or domain names. If you block an email address or domain, then mail from that address or domain to any domain in your domain group will be blocked before it reaches its recipient.

:::note
The Domain Group Administrator will see a Domain Group Block List tab and a Domain Administrator will see Domain Block List tab.
:::

:::note
Allow and block lists are bypassed if the _Spam should be:_ setting is set to _Passed (Tagged)_ for a user or domain policy.
:::

Adding a Block List Entry

1.  Click **Add...**.

2.  Enter the _Sender Email:_ in the form of user@example.com or _Sender Domain:_ in the form of example.com.

3.  Enter _Comments:_ as necessary.

4.  Click **Save**.

Deleting a Block List Entry

1.  Check the box to the left of the email address or domain name you want to delete. Check multiple boxes to delete several entries at once.

2.  Click **Delete**under Blocked Email Addresses or Blocked Domains.

Importing Block List Entries

1.  Create a single text file with all the entries to import (both email addresses and domains can be imported together from the same text file). The file must have one email address or domain (preceded by the '@' sign) per line. For example:

    -   john@example.com

    -   @example.com

        :::note[Important]
        To include subdomains, add a period (.) after the @ symbol for the domain.

        For example: @.example.com
        :::

2.  Click **Import...**, select the text file and click **Open**.

3.  Email addresses will be listed in Blocked Email Addresses and domains will be listed in Blocked Domains.
