---
title: "1403 - Google Drive and Gmail skipping backups with error \"Requested client not authorized\""
description: "Imported from helpdesk.redstor.com"
---

> Source: [helpdesk.redstor.com](https://helpdesk.redstor.com/support/solutions/articles/4000219751-1403-google-drive-and-gmail-skipping-backups-with-error-requested-client-not-authorized-)
> Product: Redstor
> Imported content type: kb_article
> Source folder: Troubleshooting
> Modified: Modified on Fri, 6 Mar at 9:09 AM

### **Symptom**

New Google Drive and Gmail accounts are created but do not back up. An "access denied" error presents with the description "Requested client not authorized".

### **Cause**

This happens because settings in the Google Admin Console have not been set correctly for Redstor Cloud Backup.

### **Solution**

Check the following settings:

  

1\. Under **Google Workspace Marketplace apps > Apps list**, the **Distribution** setting for Redstor Cloud Backup should show as **ON**.

![](/docs-test/imported-assets/redstor/4000219751/79e707f1a720.jpg)

  

2\. Under **Google Workspace Marketplace apps > Redstor Cloud Backup:**

(a) **User Access** should show as **ON** for the correct number of organizational units you want to backup.

To check for which units user access is on, click on **View organizational units and groups**.

![all\_users.png](/docs-test/imported-assets/redstor/4000219751/6ddea091bbe4.jpg)

  

Ensure that the service status shows as **ON for everyone** for all organizational units you want to backup.

![](/docs-test/imported-assets/redstor/4000219751/a9a78b623344.png)

  

(b) **Data Access** should show as **Status: Granted**. If it does not, grant access by using the option on the right.

![](/docs-test/imported-assets/redstor/4000219751/56be4a27b708.png)

  

Once these settings have been updated, you can reattempt the backup.
