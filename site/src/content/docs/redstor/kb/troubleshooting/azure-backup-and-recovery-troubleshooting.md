---
title: "1473 - Azure backup and recovery troubleshooting"
description: "Imported from helpdesk.redstor.com"
---

> Source: [helpdesk.redstor.com](https://helpdesk.redstor.com/support/solutions/articles/4000219754-1473-azure-backup-and-recovery-troubleshooting)
> Product: Redstor
> Imported content type: kb_article
> Source folder: Troubleshooting
> Modified: Modified on Thu, 12 Mar at 1:32 PM

This article contains a collection of errors that are commonly encountered in backing up and recovering Azure Virtual Machines and Azure Blob Storage. Use the Suggested action column to assist in troubleshooting.

_**Note:** If you are looking for information about the known issue where Azure VM files are not available for recovery with InstantData, see [Article 1557](https://helpdesk.redstor.com/support/solutions/articles/4000220035)._

-   For a guide to backing up and recovering Azure VMs, see [Article 1372](https://helpdesk.redstor.com/support/solutions/articles/4000219779).
-   For a guide to backing up and recovering Azure Blob Storage, see [Article 1470](https://helpdesk.redstor.com/support/solutions/articles/4000219819).
-   For more general information, see [Article 1526 - Azure backup and recovery: frequently asked questions](https://helpdesk.redstor.com/support/solutions/articles/4000219820).

### **Common Azure errors**

**Error description**

**Error message example**

**Suggested action**

Adding a VM or storage account resource fails with error "**Could not deploy appliance**"

`Could not deploy appliance Code: Authorization_RequestDenied Message: insufficient privileges to complete the operation.`

Check the Azure subscription permissions on the Azure user account. In your Azure subscription, your account must have Microsoft.Authorization/\*/Write access to assign a role to an Active Directory app. This action is granted through either the Owner role or the User Access Administrator role. See [Article 1412](https://helpdesk.redstor.com/support/solutions/articles/4000220178) for help with assigning roles in Azure.

Adding a VM fails with error "**group capacity limit reached**"

`400 BadRequest – {“Limit”[Cannot create Backup Account ‘x’: group capacity limit reached”]}`

Request a capacity increase from your service provider.

Adding a VM fails with error "**does not have authorization to perform action**"

 `Exception while executing function: AddMachines The client 'x' with object id 'y' does not have authorization to perform action 'Microsoft.Compute/virtualMachines/ read' over scope '/subscriptions/z' or the scope is invalid. If access was recently granted, please refresh your credentials.`

Ensure that your Azure service principal has all three of the following roles: Disk Snapshot Contributor, Network Contributor and Virtual Machine Contributor. See [Article 1412](https://helpdesk.redstor.com/support/solutions/articles/4000220178) for help with assigning roles in Azure.

Restoring (reverting) a VM fails with error "**does not have permission to perform action on the linked scope(s)**"

`The client 'x' with object id 'y' has permission to perform action 'Microsoft.Compute/virtualMachines/write' on scope 'z'; however, it does not have permission to perform action 'read' on the linked scope(s) or the linked scope(s) are invalid.`

This happens when the VM you are attempting to restore (revert) has a golden image or any form of disk attached to it that is located in a different resource group than the VM (the "scope") itself. To resolve this, detach the disk from the VM and retry the recovery. Ensure the target resource group has no disks that will conflict with the names of the restored disks (i.e. have the same names as the source VM disks). Ensure the user running the restore has access to the source VM's subscription.

VM backup shows error "**Payload stream retry limit reached**"

`{"Duration":x,"TransferSize":y,"Issues": ["Payload stream retry limit reached"]}?`

No user action is required. This happens when the backup times out on a payload request to the Storage Platform. If the maximum number of retry attempts is reached, this error is shown. However, the connection is then rebuilt after a few minutes and the backup proceeds.

Attempting to recover with InstantData leads to error "**Response status code does not indicate success**"

`Could not start InstantDataTemporary: Response status code does not indicate success: 404 (WebLaunch session``xxxx-xxxxxxx is invalid or has timed``out.).`

See [Article 1581](https://helpdesk.redstor.com/support/solutions/articles/4000220355).

VM backup shows error "**Could not detect file-system on volume**"

`Could not detect file-system on volume 'xxx-xxxxx-xxxxxxxxxxxxxx'`

This error is shown when the file-system that is being backed up forms part of a disk configuration that we do not support and therefore cannot detect. Systems that are not natively supported include unmanaged disks (such as Azure Blob Storage, Azure Files, and Azure Queue Storage), as well as Azure Virtual Desktop (AVD). Read more in [Article 1372](https://helpdesk.redstor.com/support/solutions/articles/4000219779-1372-how-to-manage-your-azure-vm-backups#What-is-supported?).
