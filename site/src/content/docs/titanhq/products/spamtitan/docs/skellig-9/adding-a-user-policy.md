---
title: "Adding a User Policy"
description: "Imported from support.titanhq.com"
---

> Source: [support.titanhq.com](https://support.titanhq.com/en/59371-adding-a-user-policy.html)
> Product: SpamTitan
> Imported content type: docs_page
> Product stream: skellig

#### Adding a User Policy

SpamTitan uses policies to decide how mail is treated. Policies can be applied to a domain (domain policy) or a user (user policy). By default, users inherit the policy set for their domain. However, a user-level policy can be created that overrides the domain-level policy. Follow the steps below to add a user policy.

1.  User Policies are available at the domain level. Either:

    -   Log in as a Domain Admin and go to **Policies** > **User Policies**, or

    -   Log in as an MSP or Customer Admin and select a domain from the All Domains table at the Customer level. Go to **Policies** > **User Policies**.

2.  Select **Actions** > **Add Policy** and the Add User Policy window displays.

    -   _First Name_ and _Last Name_: To elicit information or money, phishers sometimes attempt to impersonate users with a high position in a company, for example, the CEO or CFO. This is a form of spoofing.

        To help prevent spoofing by automatically running SpamTitan's ANTISPOOF\_NAME and ANTISPOOF\_NAME\_FUZZY tests, enter a user's first and last name in these fields. Email from an external network with this name in the _From:_ header (or a mild variation of the name) is more likely to be blocked as spam.

        For more information about anti-spoofing see [Anti-Spoofing](https://support.titanhq.com/document/preview/66446#UUID-8443bd50-0020-7fdb-1633-d048ffcb1ee9).Anti-Spoofing

    -   _Email_: Specify the user's email address.

3.  Select **Add** and the user policy is added to the User Policies table.

    ![ST-SK-user-policies.jpg](/docs-test/imported-assets/spamtitan-skellig/59371-adding-a-user-policy/03b5f11d241a.jpg)

4.  See [Editing a User Policy](/docs-test/titanhq/products/spamtitan/docs/skellig-9/editing-and-deleting-user-policies/ "Editing and Deleting User Policies") to edit the policy settings.
