---
title: "1423 - RedApp user roles"
description: "Imported from helpdesk.redstor.com"
---

> Source: [helpdesk.redstor.com](https://helpdesk.redstor.com/support/solutions/articles/4000219765-1423-redapp-user-roles)
> Product: Redstor
> Imported content type: kb_article
> Source folder: Guides
> Modified: Modified on Fri, 17 Apr at 1:41 PM

When creating a new user on the RedApp, you can assign that user access and permissions relating to certain companies (customers) and/or products. Note that the term "companies" in the RedApp also includes other types of customer organisations, such as schools.

Depending on what you give a user access to, they will have one of the following roles:

-   **Partner Admin:** can manage all companies (including their own, e.g. creating other partner users) and products assigned to them
-   **Partner User:** can manage all companies and products assigned to them
-   **Company Admin:** can manage their own company (e.g. creating other company users) and all products assigned to their company
-   **Company User:** can manage all products assigned to their company
-   **Company ViewOnly:** can view all products assigned to their company
-   **Product User:** can manage one product assigned to their company
-   **Product ViewOnly:** can view one product assigned to their company

A summary of the various roles can be seen in the table below.

Action

Partner Admin

Partner User

Company Admin

Company User

Company ViewOnly

Product User

Product ViewOnly

Add users

Yes

Yes

Yes

No

No

No

No

View users

Yes

Yes

Yes

No

No

No

No

Edit users

Yes

Yes

Yes

No

No

No

No

Remove users

Yes

Yes

Yes

No

No

No

No

Manage Marketplace

Yes

No

No

No

No

No

No

Add products

Yes

Yes

Yes\*

No

No

No

No

Edit products

Yes

Yes

Yes

No

No

No

No

Remove products

Yes

Yes

Yes\*

No

No

No

No

Add partner

Yes

No

No

No

No

No

No

Edit partner

Yes

No

No

No

No

No

No

Remove partner

Yes

No

No

No

No

No

No

Add customer

Yes

Yes

No

No

No

No

No

Edit customer

Yes

Yes

No

No

No

No

No

Remove customer

Yes

Yes

No

No

No

No

No

Add policies

Yes

Yes

Yes

No

No

No

No

Edit policies

Yes

Yes

Yes

No

No

No

No

Remove policies

Yes

Yes

Yes

No

No

No

No

Add collections

Yes

Yes

Yes

No

No

No

No

Edit collections

Yes

Yes

Yes

No

No

No

No

Remove collections

Yes

Yes

Yes

No

No

No

No

Add folders (groups)

Yes

Yes

Yes

No

No

No

No

Edit folders

Yes

Yes

Yes

No

No

No

No

Remove folders

Yes

Yes

Yes

No

No

No

No

Add backup selection

Yes

Yes

Yes

Yes

No

Yes

No

Edit backup selection

Yes

Yes

Yes

Yes

No

Yes

No

Add backup schedule

Yes

Yes

Yes

Yes

No

Yes

No

Edit backup schedule

Yes

Yes

Yes

Yes

No

Yes

No

Recover data

Yes

Yes

Yes

Yes

No

Yes

No

Delete data

Yes

Yes

Yes

Yes

No

Yes

No

View suspicious files

Yes

Yes

Yes

Yes

No

Yes

No

Manage suspicious files

Yes

Yes

Yes

Yes

No

Yes

No

Use remote access

Yes

Yes

Yes

No

No

No

No

Read audit trail

Yes

Yes

Yes

Yes

Yes

Yes

Yes

Configure 2FA

Yes

Yes

Yes

No

No

No

No

Manage email notifications

Yes

Yes

Yes

Yes

No

Yes

No

Add trials

Yes

Yes

Yes

No

No

No

No

View estimated cost

Yes

No

Yes\*

No

No

No

No

Remove seats

Yes

Yes

Yes

No

No

No

No

View seats

Yes

Yes

Yes

Yes

Yes

Yes

Yes

Add company policy\*\*

Yes

No

No

No

No

No

No

Edit company policy

Yes

No

No

No

No

No

No

Remove company policy

Yes

No

No

No

No

No

No

View company policy

Yes

Yes

Yes

Yes

Yes

Yes

Yes

View sign-on providers

Yes

Yes

Yes

Yes

Yes

No

No

Add sign-on providers

Yes

No

Yes

No

No

No

No

Edit sign-on providers

Yes

No

Yes

No

No

No

No

Remove sign-on providers

Yes

No

Yes

No

No

No

No

View RedApp integrations\*\*\*

Yes

No

No

No

No

No

No

Edit RedApp integrations

Yes

No

No

No

No

No

No

Remove RedApp integrations

Yes

No

No

No

No

No

No

Add RedApp integrations

Yes

No

No

No

No

No

No

Add bundles

Yes

No

No

No

No

No

No

Edit bundles

Yes

No

No

No

No

No

No

View bundles

Yes

No

No

No

No

No

No

Remove bundles

Yes

No

No

No

No

No

No

View KMS config

Yes

No

Yes

No

No

No

No

Manage KMS config

Yes

No

Yes

No

No

No

No

View exported key state

Yes

No

Yes

No

No

No

No

Export encryption keys

Yes

No

Yes

No

No

No

No

View scheduled reports

Yes

No

Yes

No

No

No

No

Schedule reports

Yes

No

Yes

No

No

No

No

Edit report schedules

Yes

No

Yes

No

No

No

No

Remove scheduled reports

Yes

No

Yes

No

No

No

No

View report templates

Yes

No

Yes

No

No

No

No

\*Direct customers only

\*\*This action currently refers to the company's Microsoft 365 retention policy.

\*\*\*Current integration options include the [RedAPI](/docs-test/redstor/kb/guides/how-to-use-the-redapi/), [ConnectWise](https://helpdesk.redstor.com/support/solutions/articles/4000219982), and [Backup Radar](https://helpdesk.redstor.com/support/solutions/articles/4000220217).
