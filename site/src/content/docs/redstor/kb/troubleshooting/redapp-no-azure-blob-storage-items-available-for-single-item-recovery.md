---
title: "1568 - RedApp: No Azure Blob Storage items available for single item recovery"
description: "Imported from helpdesk.redstor.com"
---

> Source: [helpdesk.redstor.com](https://helpdesk.redstor.com/support/solutions/articles/4000219756-1568-redapp-no-azure-blob-storage-items-available-for-single-item-recovery)
> Product: Redstor
> Imported content type: kb_article
> Source folder: Troubleshooting
> Modified: Modified on Mon, 21 Jul, 2025 at 12:48 PM

### **Symptom**

When attempting single item recovery from your Azure Blob Storage snapshots list in the RedApp, no blobs (objects) are visible.

![browse\_snapshots.png](/docs-test/imported-assets/redstor/4000219756/c4ddc3a383b7.jpg)

### **Solution**

To confirm if the relevant Azure storage account contains snapshots that can be restored from, follow the steps below.

1\. Confirm the backup date for the snapshot you wish to restore from.

![snapshot\_date.png](/docs-test/imported-assets/redstor/4000219756/c6806891a4b0.jpg)

2\. Log into the Microsoft Azure Portal and go to the specific storage account.

4\. Open the storage browser and click on **Blob containers**.

6\. Navigate to one of the blobs (objects) in the account and go to **View snapshots**.

![view\_snapshots.png](/docs-test/imported-assets/redstor/4000219756/2a793dc6c3e3.jpg)

7\. Check if the snapshot data is present.

If the data is not present, enable **Show deleted snapshots** to check those as well.

![deleted.png](/docs-test/imported-assets/redstor/4000219756/1bd0721edc15.jpg)

If the snapshot is still not visible, or is marked as deleted, you will not be able to restore from this Azure snapshot.

-   If snapshots other than your target date are present, look for a date where a snapshot is available and try restoring from that.
-   If Redstor Backup (formerly Redstor Protect) was enabled in the RedApp, try restoring the data from the backups list instead of from the snapshots list.

![backups.png](/docs-test/imported-assets/redstor/4000219756/5c92a7d20db0.jpg)
