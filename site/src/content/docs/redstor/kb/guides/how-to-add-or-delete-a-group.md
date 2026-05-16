---
title: "1100 - How to add or delete a Group"
description: "Imported from helpdesk.redstor.com"
---

> Source: [helpdesk.redstor.com](https://helpdesk.redstor.com/support/solutions/articles/4000219747-1100-how-to-add-or-delete-a-group)
> Product: Redstor
> Imported content type: kb_article
> Source folder: Guides
> Modified: Modified on Tue, 5 Aug, 2025 at 1:10 PM

### **How to add a Group**

1\. In the Storage Platform Console, open the **Account Management** view in the left-hand pane and expand the Storage Platform node.

2\. Right-click the name of the Collection to which you want to add a Group and choose **Add Group or Collection.**

![addcollection.PNG](/docs-test/imported-assets/redstor/4000219747/c9867079f513.jpg)

_**Note:** You can add a Group a Collection but you cannot add a Group to another Group._

3\. In the dialog box that appears, select **Backup Group**.

![newgroupdialog.PNG](/docs-test/imported-assets/redstor/4000219747/027ca5eaf403.jpg)

4\. Specify the details of your Group:

![createnewgroup.PNG](/docs-test/imported-assets/redstor/4000219747/55d102c23ca1.jpg)

-   Create a name for the Group. (Note that most special characters are not supported.)
-   Enter a create key of 50 characters or less. This will be used during Agent deployment and prevents the unauthorised creation of Accounts.
-   Enter a storage limit for the Group, or set the amount to 0 to use the maximum storage available in the parent Collection.

_**Note:** The sum of the storage limits of Groups in a Collection cannot exceed that Collection’s own storage limit. More information here._

-   Specify the **Default Account Size** and **Location for New Accounts**.

When you are ready to continue, click **Finish**.

4\. To allow users to add Accounts to a new Group, the Group needs licences. To do this, double-click the Group’s name (or **right-click > Configure**).

5\. In the **Configure Group** dialog box that appears, click the **Licences** tab.

6\. Click on the type of licence you want to add to the Group (e.g. Enterprise Server Edition) and add a number to the field at the bottom. Click **Add**. (If the **Add** button is disabled, the Collection to which this Group belongs does not sufficient licences assigned to it. To purchase additional licences, please contact your serviceprovider.)

_**Note:** Even if unlimited licences are available for the Collection to which a Group belongs, backup account creation may fail if the Group itself does not have enough of the required licences assigned. Be sure to check your Group configuration before attempting to create new accounts._

7\. Make sure the **InstantData** box is ticked and click **OK**.

![demogroup.PNG](/docs-test/imported-assets/redstor/4000219747/6f6946cd96b2.jpg)

_**Note:** To view the number of licences a specific Group has assigned to it, click the Group name in the Account Management tree and then the Licencing tab in the workspace to the right. The **Remaining** column shows the number of licences that are still available._

 ![licensingtab.PNG](/docs-test/imported-assets/redstor/4000219747/9e635692b81e.jpg)

### **How to delete a Group**

1.  In the Storage Platform Console, open the Account Management view in the left-hand pane.
2.  Right-click the name of the Group you want to delete and go to **Delete Group**. You can also highlight the Group name and click the **Delete** button on the main toolbar at the top.

![deletegroup.PNG](/docs-test/imported-assets/redstor/4000219747/fe2752db6048.jpg)

_**Note:** A Group can only be deleted if it no longer contains any Accounts._
