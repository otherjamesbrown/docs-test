---
title: "1329 - How to use Azure Mobility to do Full System Recovery"
description: "Imported from helpdesk.redstor.com"
---

> Source: [helpdesk.redstor.com](https://helpdesk.redstor.com/support/solutions/articles/4000219763-1329-how-to-use-azure-mobility-to-do-full-system-recovery)
> Product: Redstor
> Imported content type: kb_article
> Source folder: Guides
> Modified: Modified on Wed, 27 Aug, 2025 at 1:03 PM

Our Azure Mobility service automatically creates a virtual machine in Azure and recovers your backed-up machine there.

**PAGE CONTENTS**

-   [Requirements](#Requirements)
    -   [Redstor requirements](#Redstor-requirements)
    -   [Azure requirements](#Azure-requirements)
-   [How to recover to Azure from the RedApp](#How-to-recover-to-Azure-from-the-RedApp)
-   [Post-recovery Windows RDP](#Post-recovery-Windows-RDP)

## Requirements

### **Redstor requirements**

Before you can do can recover to Azure, you will need an Azure Mobility licence.

To recover a machine, you will need to have done at least one Full System Backup (FSB) of the machine.

-   If you are using the RedApp, follow [these steps](https://helpdesk.redstor.com/support/solutions/articles/4000219860) to deploy an agent for the machine you want to back up. Ensure that **Full System Backup** is switched on. Run a backup as soon as the agent has been installed.
-   If you already have a desktop ESE Agent on the machine, switch on **Full System Backup** above the file explorer, then click **Backup**.
    _**Note:** When enabling FSB on an Azure Virtual Machine with a temporary disk, we recommend excluding the temporary disk from the backup selection. Read more [here](https://docs.microsoft.com/en-gb/azure/virtual-machines/managed-disks-overview?toc=%2Fazure%2Fvirtual-machines%2Flinux%2Ftoc.json#temporary-disk)._

### **Azure requirements**

You will need the following:

-   An **Azure [account](https://docs.microsoft.com/en-us/learn/modules/create-an-azure-account/)** with access to an **Azure [subscription](https://docs.microsoft.com/en-us/azure/active-directory/fundamentals/active-directory-how-subscriptions-associated-directory)** (the user is required to authenticate with credentials that have permission to create resources in this subscription)
-   A **[resource group](https://docs.microsoft.com/en-us/azure/azure-resource-manager/management/manage-resources-portal)** for the virtual machine to recover into
-   A **[storage account](https://docs.microsoft.com/en-us/azure/storage/common/storage-account-create?tabs=azure-portal)** in the subscription - this is needed for the following purposes:
    -   As a target for uploading the recovery agent and for configuration into Azure. The resulting blob is then converted into a Managed Disk, which is used for starting the recovery.
    -   As temporary storage for the WinPE bootstrapper image. This is because we need to copy the image into the correct Azure region before we can convert it into a Managed Disk.
    -   We also use the Storage Account's Azure region and resource group for creating the new VM.
-   A **[virtual network](https://docs.microsoft.com/en-us/azure/virtual-network/virtual-networks-overview)** for the machine to run on (which can connect to the internet), and a **virtual network [subnet](https://docs.microsoft.com/en-us/azure/virtual-network/virtual-network-manage-subnet)** - these are needed to connect out to the Storage Platform during the recovery, and for virtual machine connectivity when the recovery is completed

For guidance on how to set these up, see [Article 1508](https://helpdesk.redstor.com/support/solutions/articles/4000220026).

## How to recover to Azure from the RedApp

Watch our video or follow the steps below.

1.  Go to the **Machines** section in the sidebar.

2.  Drill down to the machine you want to recover.

3.  On the machine's main page, click on the menu icon and go to **Recover > Recover full system**.

4.  Provide the encryption key for the account and click **Next**.

5.  Select the backup you want to recover from the drop-down menu. Click **Next** to continue, or open **Advanced settings** to configure the disk volumes first.
    **_Note_**_: Tick **Disable backup service** if the original machine is still running an active backup account._

6.  If desired, configure the disk volume sizes and selection. Click **Next**.

7.  To allow the recovery to proceed, sign into your Microsoft Azure account and accept the permissions.

    _**Note:** If you get a warning "This app may be risky", follow the workaround steps [here](https://helpdesk.redstor.com/support/solutions/articles/4000220168)._

8.  Provide the specifications for the virtual machine that will be created, then click **Next**.

    _**Note:** If you see an error "This field must be a valid DNS name" when entering the storage container name, this is because the container name must be lower case or number characters only (e.g. "test1", not "Test1" or "test 1").
    _
9.  Confirm the VM details and click **Recover**.

10.  Your recovery will now be queued. You can monitor the progress of your recovery from the machine's main page.

11.  When the recovery completes, the newly created virtual machine will be stopped. Restart it from the Azure portal to access your data.

## Post-recovery Windows RDP

_The following only applies to Windows machines._

Because of the number of ways of configuring connectivity to a recovered VM, the VM will initially only be assigned a private IP. There are two options if you want to RDP to the recovered machine (links will take you to the Microsoft knowledge base):

-   [Assign a public IP to the VM](https://docs.microsoft.com/en-us/azure/virtual-network/associate-public-ip-address-vm)
-   [Create a VPN into Azure in order to access the VM](https://docs.microsoft.com/en-us/azure/vpn-gateway/create-routebased-vpn-gateway-portal)

Note that the ability to connect remotely will be affected by the local server configuration, local firewall, and Azure security groups/policies. If in doubt, contact the person responsible for administering Azure in your organisation.
