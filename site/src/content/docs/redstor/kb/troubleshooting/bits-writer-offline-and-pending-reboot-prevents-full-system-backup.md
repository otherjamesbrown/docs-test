---
title: "1086 - BITS writer offline and pending reboot prevents Full System Backup"
description: "Imported from helpdesk.redstor.com"
---

> Source: [helpdesk.redstor.com](https://helpdesk.redstor.com/support/solutions/articles/4000219758-1086-bits-writer-offline-and-pending-reboot-prevents-full-system-backup)
> Product: Redstor
> Imported content type: kb_article
> Source folder: Troubleshooting
> Modified: Modified on Mon, 21 Jul, 2025 at 12:48 PM

### **Symptom**

Full System Backup will not complete, reporting a problem with BITS VSS writer (Background Intelligent Transfer Service Volume Shadowcopy Service writer):

`Error: Selected writer 'BITS Writer' (48b0be47-4969-d978-e0c1-7af028f300b1) is offline`  
`Error: Backup failed: A selected writer was not found`

### **Cause**

The BITS writer may go offline when Windows updates have a pending reboot.

This offline status then prevents Full System Backup from running.

### **Solution**

It is possible that restarting the BITS service and the Redstor Agent service may resolve this issue temporarily, but this is not always successful.

The recommended solution is to reboot, allowing the updates to be installed. Please note that because of the way Windows updates are queued, more than one reboot may be required if there is a large backlog of updates.
