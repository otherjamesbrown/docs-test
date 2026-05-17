---
title: "Comcast \"SecurityEdge\" causes linklock.titanhq.com Access Denied / 403 error"
description: "Imported from helpdesk.spamtitan.com"
---

> Source: [helpdesk.spamtitan.com](https://helpdesk.spamtitan.com/support/solutions/articles/4000197262-comcast-securityedge-causes-linklock-titanhq-com-access-denied-403-error)
> Product: SpamTitan
> Imported content type: kb_article
> Source folder: Link Lock
> Modified: Wed, 23 Aug, 2023 at 1:14 AM

Problem:  If you are getting a "Access to [linklock.titanhq.com](https://linklock.titanhq.com/) was denied" or similar error when trying to click on Link Lock links, it may be related to Comcast's "SecurityEdge".

If enabled you will see an error similar to this image in the browser:

![](/docs-test/imported-assets/spamtitan-kb/4000197262/7fa10b72b7b1.png)

To test, run the following in Command Prompt:
**nslookup linklock.titanhq.com
**
**you should get this (or similar)**

k8s-ingressn-ingressn-e4b41ee854-e87a49efc6c35241.elb.us-east-2.amazonaws.com.

3.131.14.177

18.223.179.225

18.118.56.25

If you see just a single IP address, there is a good chance Comcast's Security Edge is blocking it:

You can manually allow / block domains using SecurityEdge:

[https://business.comcast.com/support/article/internet/securityedge-manage-settings#block-and-allow-lists](https://business.comcast.com/support/article/internet/securityedge-manage-settings#block-and-allow-lists)

SecurityEdge has their own Block & Allow List that [linklock.titanhq.com](https://linklock.titanhq.com/) can be added to.

![](/docs-test/imported-assets/spamtitan-kb/4000197262/561d8b80df09.png)
