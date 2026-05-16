---
title: "1292 - How to backup and recover Google Drive"
description: "Imported from helpdesk.redstor.com"
---

> Source: [helpdesk.redstor.com](https://helpdesk.redstor.com/support/solutions/articles/4000219764-1292-how-to-backup-and-recover-google-drive)
> Product: Redstor
> Imported content type: kb_article
> Source folder: Guides
> Modified: Modified on Tue, 28 Apr at 8:19 AM

:::note
_If you're looking for a [backup solution](https://www.redstor.com/products/google-workspace-backup/) for Google Workspace (GWS), formerly known as G Suite (gsuite), you can find more information on our website, or start a free trial [here](https://app.redstor.com/sign-up)._
:::

**PAGE CONTENTS**

-   [Introduction](#Introduction)
-   [What is supported?](#What-is-supported?)
    -   [What is not supported?](#What-is-not-supported?)
-   [Guides](#Guides)
    -   [How to add a backup set](#How-to-add-a-backup-set)
    -   [How to modify a backup set](#How-to-modify-a-backup-set)
    -   [How to configure the backup schedule for a backup set](#How-to-configure-the-backup-schedule-for-a-backup-set)
    -   [How to recover a backup set](#How-to-recover-a-backup-set)
    -   [How to delete a backup set](#How-to-delete-a-backup-set)
    -   [How to change a backup set's name](#How-to-change-a-backup-set's-name)

## **Introduction**

Backup and recovery of Google Drive forms part of our Google Workspace service offering. We can also protect native Google file formats (Docs, Sheets, etc.) as part of your Drive contents. Watch our video to learn more.

_**Note:**_

-   _To add and recover backup sets, you need to be both a [RedApp company administrator](/docs-test/redstor/kb/guides/redapp-user-roles/), and a Google super administrator for your tenant organisation. Read more about Google Workspace admin roles in [this article](https://support.google.com/a/answer/2405986) on their knowledge base._
-   _Google recommends creating a new super admin email address for this that is not specific to a particular user. Read more [here](https://cloud.google.com/resource-manager/docs/super-admin-best-practices#create_a_super_admin_email_address)._
-   _Shared drives do not have an Owner role, only an optional Manager role (called_ organizer _in the API, as noted in Google's developer documentation [here](https://developers.google.com/workspace/drive/api/guides/ref-roles)). If you see a Redstor account attached to the Members tab of a shared drive, that is because Redstor holds a Manager role for that drive in order to access the data for backup._
-   _**Important:** If a Google Workspace user leaves your organisation, do not delete the user. Redstor has no way of restoring a deleted user's Contacts or Calendar. Gmail can be restored to a different account. If you withdraw the departing user's Google Workspace licence, even if you do not delete the user, Google is under no obligation to retain that user's data. The data may appear to remain present but can be removed by Google at any time as part of cleanup. Consider assigning an archive licence or exporting the data for alternative storage instead._

## **What is supported?**

Redstor currently supports the following:

-   Backup of files and folders
-   Backup of shared drives
    -   Currently, recovery to shared drives is not supported. We recommend restoring the data from a shared drive by using InstantData or restoring to a non‑shared drive location.
-   Backup of trash items
    -   Currently, for InstantData or single-item recovery purposes, trash items are not shown in a Trash folder but in the original folder from which they were deleted.
    -   Similarly, trash files are always recovered to their original location in the Redstor Restores folder structure, i.e. Redstor Restores\\Original Location\\DeletedFile, and not to a Trash folder.
-   Recovery back to a drive (new folder)
-   Recovery using InstantData
-   Single item recovery

Please note:

-   When recovering within Google Drive, files of native Google formats (Sheets, Docs, etc.) are recovered as such.
-   When recovering outside of Google Drive, files of native Google formats are recovered as follows:
    -   App Scripts as .json files
    -   Docs in Microsoft Word (.docx) format
    -   Sheets in Microsoft Excel (.xlsx) format
    -   Slides in Microsoft PowerPoint (.pptx) format
    -   Drawings as SVG
    -   Forms as a zip file containing the form layout and results
    -   Jamboards as PDF files

### **What is not supported?**

-   Recovery to shared drives
-   Backup of Google Forms larger than 10MB
-   Backup of Google Maps files
-   Backup of Google Sites files
-   Backup of Google Photos outside of Google Drive

## **Guides**

Use the guides below to manage your Google Drive backups.

## How to add a backup set

Watch our video or follow the steps below.

1\. In the RedApp, go to the home page for the customer company you want to add backups for. Click on the search icon at the top right to find a specific customer.

![](/docs-test/imported-assets/redstor/4000219764/b0a25315b013.png)

2\. To add a new backup set, go to **Google Workspace** in the sidebar on the left. If you do not see Google Workspace listed, you will need to [add it as a product](https://helpdesk.redstor.com/support/solutions/articles/4000219989).

![](/docs-test/imported-assets/redstor/4000219764/26642177256d.png)

3\. Click **Add** at the top right and go to **Add backup set**.

![](/docs-test/imported-assets/redstor/4000219764/5d229d430f31.png)

4\. Select **Google Drive** and click **Next**.

![](/docs-test/imported-assets/redstor/4000219764/7c92a2f8395b.png)

5\. After logging into Google, you will see the following screen. Click on **Get the Redstor app**.

![](/docs-test/imported-assets/redstor/4000219764/d48a3d4bc4f3.png)

_**Note:** If you are an existing customer, you will see a different screen, requiring to you update your permissions instead._

6\. You will be taken to the Redstor Cloud Backup page on the Google Marketplace. Click on **Domain Install**.

![Screenshot (100).png](/docs-test/imported-assets/redstor/4000219764/3955360ecad3.png)

7\. Click **Continue**.

![Screenshot (101).png](/docs-test/imported-assets/redstor/4000219764/94535f541b40.png)

8\. Agree to the terms and conditions and click **Allow**.

![Screenshot (105).png](/docs-test/imported-assets/redstor/4000219764/4a6ef854ac5f.png)

9\. Click **Done** to exit the installation wizard.

![Screenshot (103).png](/docs-test/imported-assets/redstor/4000219764/84bd43f56d9d.png)

As shown here, you can access the app at any time by going to the App Launcher at the top right of the screen. (Scroll down until you see **Redstor Cloud Backup**.)

![Screenshot (104).png](/docs-test/imported-assets/redstor/4000219764/2b674077e79d.png)

10\. Close the Google Marketplace tab in your browser to return to the RedApp. Our system will have picked up that permissions have been allowed, and you will be taken to the home page for your new backup set.

11\. Go to **Edit** on **the Backup selection card.**

![](/docs-test/imported-assets/redstor/4000219764/acdcb573295a.png)

12. By default, all users will be selected for backup. To retain this selection and proceed, click **Save**. You can also enable **Include new accounts** to ensure that future additions to this tenant are automatically added to the backup selection.

![](/docs-test/imported-assets/redstor/4000219764/2bd028ad5659.png)

To queue a backup immediately, click on the menu icon at the top right and go to **Backup**.

_**Note:** Version history will not be backed up._

![](/docs-test/imported-assets/redstor/4000219764/799d66f57e76.png)

Once your first backup has completed, you can customise which columns you see in the backups table. To do this, click on the columns icon on the right, next to the search bar.

![](/docs-test/imported-assets/redstor/4000219764/c7e566098cca.png)

Select which columns you would like to see, then click **Apply**.

![](/docs-test/imported-assets/redstor/4000219764/5f738da8a60f.png)

To view an audit trail of key actions and which users performed them, click on the inspect icon at the top right of the page.

![](/docs-test/imported-assets/redstor/4000219764/f53449961f20.png)

## How to modify a backup set

1\. On the backup set home page, go to **Edit** on the **Backup selection** card.

![](/docs-test/imported-assets/redstor/4000219764/6f3d6af97408.png)

2\. Select/deselect the user/s you want to add/remove and click **Save** to apply your changes. Click **Go back** or **Cancel** to keep your existing selection.

![](/docs-test/imported-assets/redstor/4000219764/fa3aaac36148.png)

The new number of users selected will show under **Backup selection** on the backup set's home page.

![](/docs-test/imported-assets/redstor/4000219764/908ce6d313dd.png)

_**Note:** Accounts that have been removed from the backup selection are still retained on the Storage Platform until you request that they be permanently deleted. Read more [here](https://helpdesk.redstor.com/support/solutions/articles/4000219881)._

## How to configure the backup schedule for a backup set

1\. On the home page for the backup set, click on **Edit** on the **Backup schedule** card.

![](/docs-test/imported-assets/redstor/4000219764/eb447b2a1890.png)

2\. You can retain the default of a single daily backup (**Daily**), or you can set your backups to run only on specific days (**Custom**). In either case, use the drop-down menu to set the backup time. Set your preferences, then click on the check mark at the top right to apply them.

![](/docs-test/imported-assets/redstor/4000219764/33cb3ee31045.png)

![](/docs-test/imported-assets/redstor/4000219764/9436ca086c4c.png)

The **Backup schedule** card will now show the updated backup time/s.

![](/docs-test/imported-assets/redstor/4000219764/3fe038834d20.png)

## How to recover a backup set

[1\. Select data for recovery](#1.-Select-data-for-recovery)

[2\. Select the recovery method](#2.-Select-the-recovery-method)

[3\. Proceed with recovery](#3.-Proceed-with-recovery)

To do a recovery, you need to be both a [RedApp company administrator](/docs-test/redstor/kb/guides/redapp-user-roles/), and a Google Workspace super administrator for your tenant organisation. Read more about Google Workspace admin roles in [this article](https://support.google.com/a/answer/2405986) on their knowledge base.

**_Note:_**

-   _You will need to authenticate before any recovery._
-   _Original timestamps, metadata and permissions will not be restored._

Follow the steps below to start recovering.

### **1\. Select data for recovery**

In all cases, you will need to select the user/s or item/s you want to recover, as well as the backup (date) you want to recover from.

There are different ways you can select data for recovery.

If you want to recover a specific user, use the **Search** function to find it.

![](/docs-test/imported-assets/redstor/4000219764/e419ea488fb7.png)

Under **Last Backup Date**, select the backup you want to recover from.

![](/docs-test/imported-assets/redstor/4000219764/c0b5948113ec.png)

Click on the user's menu icon on the right and go to **Recover** to see your options.

![](/docs-test/imported-assets/redstor/4000219764/dca76e395d3d.png)

If you want to recover all data for multiple users, select the users and then select a backup date for each. You can select different backup dates for different users.

_**Note:**_ _If you need to recover multiple users, it is advised to recover them in bulk and not in sequence. It is not possible to queue a recovery while another recovery for the same backup set is in progress__._

![](/docs-test/imported-assets/redstor/4000219764/b53c387389fd.jpg)

If you only want to recover one or more individual items from a drive, click on the drive name to expand its contents. Alternatively, click on the menu icon on the right and go to **Open**.

![](/docs-test/imported-assets/redstor/4000219764/44ab40a1df5b.jpg)

Drill down into the drive and select what you want to recover. When you are ready, click **Recover**.

![](/docs-test/imported-assets/redstor/4000219764/6621863d0c01.jpg)

### **2\. Select the recovery method**

Next, you will need to choose how you want to recover your selected data.

![](/docs-test/imported-assets/redstor/4000219764/b79b0a2a3198.jpg)

-   **Different account** recovers the drive's data to a folder named Redstor Restores in another Google Drive. Within this folder will be a folder with the selected backup date's timestamp as its name. This is where the data will be recovered. To proceed with this recovery method, you will need to specify the drive you want to recover to.
    ![](/docs-test/imported-assets/redstor/4000219764/217e2a288056.jpg)
-   **New folder** recovers the drive's data to a new folder named Redstor Restores in the original Google Drive. Within this folder will be a folder with the selected backup date's timestamp as its name. This is where the data will be recovered.
    ![](/docs-test/imported-assets/redstor/4000219764/bba2a1c17448.jpg)

    Watch our video to see this recovery method in action.

-   **Recover using InstantData** generates a shareable link that can be used to recover files manually. Watch our video to see this recovery method in action.

_**Note:** When using InstantData to access Drive data, the files will be prefixed with a unique identifier. This is because Google allows multiple files with the same name to reside in a folder. During recovery or when browsing as part of single-item recovery, the files will display as expected._

### **3\. Proceed with recovery**

After choosing a recovery method, you will need to authenticate with your RedApp user through a one-time pin.

![](/docs-test/imported-assets/redstor/4000219764/af08825ad28b.png)

You will also need to authenticate with an appropriate Google Workspace user (super admin).

![](/docs-test/imported-assets/redstor/4000219764/53b61c86bdc7.png)

For **Different account** and **New folder** restores, you will not need to complete further steps. You will see a series of notifications at the bottom of the page to show that the restore has been initiated. A progress bar will also appear at the top of the page.

For **InstantData** restores, use the **Copy** option to share a link to the InstantData application, or **Download** the application immediately. Each link can only be used to initiate one restore.

![](/docs-test/imported-assets/redstor/4000219764/b12b8d65e086.png)

Run the application on the machine where you want to recover the data. Select between Permanent and Temporary recovery, then simply drag and drop files from the application into your File Explorer to recover them.
![google\_calendar\_instantdata.png](/docs-test/imported-assets/redstor/4000219764/00f9b4000c80.png)

![google\_contacts\_instantdata\_permanent.png](/docs-test/imported-assets/redstor/4000219764/40175b4f1595.png)

## How to delete a backup set

_**Note:** This will delete all backed-up data for this backup set. This can only be [undone](https://helpdesk.redstor.com/support/solutions/articles/4000219880) within the first 336 hours (approximately 14 days) after deletion. To request an undelete, please [log a ticket](https://helpdesk.redstor.com/support/tickets/new) with our support team._

1\. On the home page for the backup set, click on the menu icon at the top right and go to **Remove**._[](https://helpdesk.redstor.com/support/tickets/new)_

![](/docs-test/imported-assets/redstor/4000219764/e0ae36587455.png)

2\. Confirm the deletion by clicking **Remove**. If you need to cancel the deletion, close the dialog box.

![](/docs-test/imported-assets/redstor/4000219764/f0563038a471.png)

3\. Authenticate with your RedApp user to proceed with the deletion.

![](/docs-test/imported-assets/redstor/4000219764/8fb67d9413d8.png)

## How to change a backup set's name

1\. On the home page for the backup set, click on the menu icon at the top right and go to **Rename**.

![](/docs-test/imported-assets/redstor/4000219764/801c33fcbd81.png)

2\. Enter the new name for the backup set and click **Update**. To cancel, close the dialog box.

![](/docs-test/imported-assets/redstor/4000219764/01eea585eaa3.png)
