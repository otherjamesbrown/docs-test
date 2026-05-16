---
title: "1083 - How to import a backup snapshot"
description: "Imported from helpdesk.redstor.com"
---

> Source: [helpdesk.redstor.com](https://helpdesk.redstor.com/support/solutions/articles/4000219767-1083-how-to-import-a-backup-snapshot)
> Product: Redstor
> Imported content type: kb_article
> Source folder: Guides
> Modified: Modified on Tue, 5 Aug, 2025 at 1:10 PM

There are four ways of importing a backup snapshot:

-   [from the Storage Platform Console](#console)
-   [from a task file](#taskfile)
-   [from a UNC path](#uncpath)
-   [from a removable drive](#drive)

### **How to import a snapshot from the Storage Platform Console**

1.  Connect the snapshot disk to a Windows host that has an SP Console installed. You will need to have Collection Admin rights to do this.

2.  Check that you can see the following in the snapshot disk: **E:\\Snapshot\\<GUID>\\Datefolder** (e.g. E:\\Snapshot\\3f0ca8fb-d478-4056-978d-50966eb15538\\20180404090145)

    ![Snap4.jpg](/docs-test/imported-assets/redstor/4000219767/2f0026e482aa.jpg)

3.  Open the Console in the Account Management view and go to **Tools > Snapshots** or click on the **Snapshots** icon in the toolbar.

    ![snapshoticon.PNG](/docs-test/imported-assets/redstor/4000219767/012a86c9a0ac.jpg)

4.  In the **Upload Multiple Snapshots** dialog box, **Browse** to the snapshot disk and select the GUID folder.

    ![snapshots.PNG](/docs-test/imported-assets/redstor/4000219767/2ab8f52c692b.jpg)
5.  Click **Start Upload** to start the import process. The time this takes depends on the size of the snapshot.
    _**Note:** If you see an error "Backup Snapshot task has been queued", please consult [Article 582](/docs-test/redstor/kb/troubleshooting/snapshot-imports-on-the-storage-platform-are-queued/)._

6.  Once completed, the **Result** column in the bottom text field will contain the word "Successful".

7.  At this point, the Account will be automatically re-enabled for backups and normal incremental backups can be resumed.

### **How to import a snapshot from a task file**

It may be desirable to perform a snapshot import using a task file on the StorageServer without using the Console to initiate the import process.

To do this:

1.  Run the snapshot backup as usual.

2.  Copy the snapshot backup folder onto the StorageServer (ideally onto the same volume as the storage volume path)

    _**Note:** Make sure the name of the folder the snapshot is copied to contains the Account GUID, for example E:\\Snap-Import\\1cc4c8cc-1c0f-4158-9bae-bc7aa8e0f52e. The snapshot data should be in a date-named folder within this folder, for example E:\\Snap-Import\\1cc4c8cc-1c0f-4158-9bae-bc7aa8e0f52e\\20150116091610._

3.  Using Notepad, create a file called <AccountGUID>.BackupSnapshotImport, e.g. 1cc4c8cc-1c0f-4158-9bae-bc7aa8e0f52e.BackupSnapshotImport.

4.  Add the following lines to the file:

    SnapshotDir=<Snapshot GUID Folder Location>
    AccountGuid=<Account GUID>

    Example:

    SnapshotDir=F:\\Snap-Import\\1cc4c8cc-1c0f-4158-9bae-bc7aa8e0f52e
    AccountGuid=1cc4c8cc-1c0f-4158-9bae-bc7aa8e0f52e

5.  Save the file and copy it into the StorageServer service's TaskQueue folder. By default, this is **C:\\ProgramData\\Attix5 Pro\\SS\_Service\\TaskQueue**. The import will run immediately (if the encryption key is held in memory) or when the next backup runs. In either case, the StorageServer will signal the AccountServer to re-enable the Account.

6.  Import progress should be observable in the StorageServer logs, for example:

    `09:17:19 Info: LOADTEST\LOADTESTSS\TESTSSACC2 - Starting import. Source directory = E:\Snap-Import\1cc4c8cc-1c0f-4158-9bae-bc7aa8e0f52e\20150116091610`
    `09:17:19 Info: LOADTEST\LOADTESTSS\TESTSSACC2 - Loading and sorting index entries`
    `09:17:20 Info: LOADTEST\LOADTESTSS\TESTSSACC2 - Re-encrypting and importing 4 files (4.21 KB) into storage`
    `09:17:20 Info: LOADTEST\LOADTESTSS\TESTSSACC2 - Adding 160 file references to data index`
    `09:17:20 Info: LOADTEST\LOADTESTSS\TESTSSACC2 - On Disk: 8 backups containing 3.61 GB in 498 unique files`
    `09:17:20 Info: LOADTEST\LOADTESTSS\TESTSSACC2 - Backup Snapshot Import completed successfully`

### **How to import a snapshot from a UNC path**

Importing Agent snapshot data to a UNC path is useful if you are using a virtual machine or cannot connect a USB drive. Depending on the configuration of the systems involved, you may need to configure Snapshot Export, or Snapshot Import, or both.

1.  Before configuring your StorageServer, make sure you can access the UNC path from the StorageServer machine with a user with full read/write permissions.

2.  On your StorageServer, stop the service.

3.  Change the service user to one that has full read/write access to the UNC path, as well as full read/write access to the StorageServer working folders and data root path.

4.  Apply the changes and start the service.

5.  In the Console, right-click the name of the Account that you wish to import a snapshot for, and go to **Advanced > Import Backup Snapshot**.

6.  In the dialog box that appears, change the **Put the Backup Snapshot** in the following location on StorageServer path to the UNC path, including the Account GUID, e.g. \\\\Uncserver\\SnapshotTemp\\0d44b3c4-6fe4-49b3-ab2e. Click **OK**.

    ![importbackupsnapshot.PNG](/docs-test/imported-assets/redstor/4000219767/68b31e9c62ad.jpg)

7.  The normal steps for snapshot import can now be followed. The snapshot import will begin either immediately, or when the next backup is received.

### **How to import a snapshot from a removable drive**

**_Note:_**

-   _When a portable storage device containing a snapshot is sent to Redstor for upload to our data centre, the drive should not contain any data other than the Redstor backup data. Drives containing anything other than Redstor backup data will be returned to the sender._
-   _If you need to make use of a Redstor-owned portable storage device, you will be asked to sign an asset loan agreement._

1.  Attach the USB drive to the server directly or via a network share (UNC path).

2.  Open the ESE Agent and go to **Tools > Snapshot > Import Restore Snapshot**.

3.  Enter the location of the snapshot. You need to point the Agent to the level of the dated folder (YYYYMMDDHHMMSS format).

    ![importrestoresnapshot.png](/docs-test/imported-assets/redstor/4000219767/ff225dda65a1.jpg)

4.  Click **OK**, then click on the **Restore** button in the main view. You should see the relevant date on the drop-down menu at the top right. Click on it to start restoring data.
