---
title: "SpamTitan Gateway / Private Cloud sending all message through Sandboxing -- 2006/04/06"
description: "Imported from helpdesk.spamtitan.com"
---

> Source: [helpdesk.spamtitan.com](https://helpdesk.spamtitan.com/support/solutions/articles/4000228114-spamtitan-gateway-private-cloud-sending-all-message-through-sandboxing-2006-04-06)
> Product: SpamTitan
> Imported content type: kb_article
> Source folder: Announcements
> Modified: Mon, 6 Apr, 2026 at 6:15 PM

**Date:  2026, April 6, 10:15 AM ET
**
Problem: Starting around 4 hours ago, many systems started sending a much higher rate of messages to Sandboxing, with this reason: AV:need-to-sandbox UNKNOWN

For now, but the best way to get around this is to disable Sandboxing in **Content Filtering > Viruses**
**\---** This will stop new messages from getting sandboxing, but it will still try to process the ones that have been already send.

We are working on the long tern fix that is causing the increase in files sent to the Sandbox.

We apologize for the inconvenience.

**Update:**  **11:00 ET US -** a new signature update has been released to address the problem. In general signature update occur hourly, so we recommend waiting about 1 hour before re-enabling Sandboxing, and monitor history to make sure it is working as expected.

**Update:  13:00 ET US -** it looks like the new signature update, when it is pulled down, fixes the problem going forward.
