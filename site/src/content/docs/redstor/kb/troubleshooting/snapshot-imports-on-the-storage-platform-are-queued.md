---
title: "582 - Snapshot imports on the Storage Platform are queued"
description: "Imported from helpdesk.redstor.com"
---

> Source: [helpdesk.redstor.com](https://helpdesk.redstor.com/support/solutions/articles/4000219768-582-snapshot-imports-on-the-storage-platform-are-queued)
> Product: Redstor
> Imported content type: kb_article
> Source folder: Troubleshooting
> Modified: Modified on Mon, 21 Jul, 2025 at 12:48 PM

### **Background**

Often, due to bandwidth constraints, it may be desirable to run a backup as a snapshot backup, where data is written to a removable disk and conveyed to the Storage Platform for import.

### **Symptom**

When initiating a Snapshot import using the Storage Platform Console, sometimes the import will start immediately. However, other times it may be queued until the next backup is received. For example:

`08:33:15.761 (00000000.69) Info: SPXmlRpcService: MARTY\ZEBRA_SERVER - Backup Snapshot task has been queued and will be done once the Backup Client backs up.`

`08:33:15.761 (00000000.69) Info: SPXmlRpcService: MARTY\ZEBRA_SERVER - The account has been enabled.`

### **Cause**

The import process is dependent on encryption key hash values being present in memory on the StorageServer. If backups have been received before, the import should begin immediately. If the account is new, or has recently been moved from one StorageServer to another, the backup will be queued.

### **Solution**

Whether the import is queued or not, simply backup manually or as scheduled, and backups will run using the network connection.
