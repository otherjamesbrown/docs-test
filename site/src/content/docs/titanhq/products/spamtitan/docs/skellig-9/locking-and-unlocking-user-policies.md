---
title: "Locking and Unlocking User Policies"
description: "Imported from support.titanhq.com"
---

> Source: [support.titanhq.com](https://support.titanhq.com/en/75829-locking-and-unlocking-user-policies.html)
> Product: SpamTitan
> Imported content type: docs_page
> Product stream: skellig

#### Locking and Unlocking User Policies

SpamTitan uses policies to decide how mail is treated. Policies can be applied to a domain (domain policy) or a user (user policy).

By default, users inherit the policy set for their domain. By locking a user policy, any domain policy change will not affect the user policy. This means that if, for example, the domain policy for _example.com_ changes the spam score to 1, then any user under _example.com_ will not see that change appear on their user policy. When you unlock a user policy, then it inherits any changes made on the domain level.

Follow the steps below to lock/unlock a user policy:

1.  User Policies are available at the domain level. Either:

    -   Log in as a Domain Admin and go to **Policies** > **User Policies**, or

    -   Log in as an MSP or Customer Admin and select a domain from the All Domains table at the Customer level. Go to **Policies** > **User Policies**.

2.  In the User Policies table, locate the policy that you want to manage. The Locked column indicates whether the policy is locked or unlocked.

    ![ST-Skellig-Lock-Pol-RN.jpg](/docs-test/imported-assets/spamtitan-skellig/75829-locking-and-unlocking-user-policies/762a80308b50.jpg)

3.  You can lock or unlock the user policy in two different ways:

    -   Select the edit ![edit-icon-small.jpg](/docs-test/imported-assets/spamtitan-skellig/75829-locking-and-unlocking-user-policies/61c7eed9145b.jpg) icon in the Actions column for a user policy to open the edit page for that user policy. Scroll down to **Lock Policy**.

        ![ST-SK-user-policies-lock.jpg](/docs-test/imported-assets/spamtitan-skellig/75829-locking-and-unlocking-user-policies/92691d1aa60b.jpg)

        -   Select **ON** to lock the user policy so that any domain policy change will not affect the user policy.

        -   Select **OFF** to unlock the user policy. This means that any change in the domain policy will automatically be applied to the user policy.

    -   Alternatively, select the checkbox beside the user policy you want to manage and select the Actions dropdown menu:

        ![ST-SK-Lock-Unlock-from-Actions-Menu.jpg](/docs-test/imported-assets/spamtitan-skellig/75829-locking-and-unlocking-user-policies/650eaadc685a.jpg)

        -   If the user policy you selected is unlocked, then you can **Lock Policy**. When you select this option, it means that any domain policy changes will not be applied to the user policy.

        -   If the user policy you selected is locked, then the **Unlock Policy** option is available. When you select this, it means that any change in the domain policy will automatically be applied to the user policy.
