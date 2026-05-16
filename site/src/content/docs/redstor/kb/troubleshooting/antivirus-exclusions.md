---
title: "008 - Antivirus exclusions"
description: "Imported from helpdesk.redstor.com"
---

> Source: [helpdesk.redstor.com](https://helpdesk.redstor.com/support/solutions/articles/4000219749-008-antivirus-exclusions)
> Product: Redstor
> Imported content type: kb_article
> Source folder: Troubleshooting
> Modified: Modified on Tue, 5 Aug, 2025 at 1:16 PM

Antivirus software, while performing its intended defence operations, can severely limit backup service performance and even corrupt backup processes. For this reason, **Redstor does not recommend allowing antivirus to run without exclusions in place** for the backup data storage paths on StorageServers and MirrorServers, as listed below.

Data stored by Redstor is kept in an encrypted state at rest, and is effectively inert from a malware perspective, i.e. any malware that a customer backs up will be encrypted, and unable to execute on a StorageServer or MirrorServer. It is therefore not necessary to scan for malware.

Additionally, and more importantly, malware scanning has been observed to interfere with file access to critical storage processes running to these volumes. **Running antivirus without the recommended exclusions in place is highly likely to result in data corruption**, which can lead to significant data resends at best, and outright data loss at worst.

Below is a list of the folders recommended to be excluded, and their default locations.

_**Note:** As a guideline, exclusions on Windows systems can be set by going to **Windows Security > Virus & threat protection > Virus & threat protection settings > Exclusions**._

* * *

### **Exclusions**

1.
    1.  [Recommended exclusions based on defaults for ESE](#1)
    2.  [Recommended exclusions based on defaults for the Storage Platform Console](#2)
    3.  [Recommended exclusions based on defaults for InstantData](#3)
    4.  [Recommended exclusions based on defaults for SE](#4)
    5.  [Recommended exclusions based on defaults for DL](#5)

* * *

### **1\. Recommended exclusions based on defaults for ESE**

**Installation**

-   C:\\Program Files\\Redstor Pro\\Backup Client ESE\\ and all subfolders
-   C:\\ProgramData\\Redstor Pro\\ and subfolders

**Processes**

-   C:\\Program Files\\Redstor Pro\\Backup Client ESE\\a5backup64.exe
-   C:\\Program Files\\Redstor Pro\\Backup Client ESE\\a5Loader.exe
-   C:\\Program Files\\Redstor Pro\\Backup Client ESE\\backupprocli.exe
-   C:\\Program Files\\Redstor Pro\\Backup Client ESE\\tray.exe

**TCP ports**

The other ports used by the Agent are randomly selected, but can be manually specified in the a5backup.properties file:

-   service.rpc-server.localhost.port=_port number 1-65535_
-   service.rmi.port=_port number 1-65535_
-   service.port=_port number 1-65535_

The ports must be unique, and must not clash with any existing services. Ensure the GUI is closed and that the service is stopped when editing the file.

* * *

### **2\. Recommended exclusions based on defaults for the Storage Platform Console**

**Installation**

-   C:\\Program Files (x86)\\Redstor Pro\\Console and subfolders
-   C:\\Users\\(Username)\\AppData\\Roaming\\Redstor Backup Pro and subfolders

 **Processes**

-   C:\\Program Files (x86)\\Redstor Pro\\Console\\SPConsole.exe
-   C:\\Program Files (x86)\\Redstor Pro\\Console\\Deploy\\DeploymentWizard.exe

**TCP ports**

The client port selected by the Storage Platform Console and Deployment Wizard are done so at random. The applications need to be allowed to connect to the service ports on the Storage Platform, which is typically port 443. See [note](#note) below on connectivity.

* * *

### **3\. Recommended exclusions based on defaults for InstantData**

**Installation**

-   C:\\Program Files\\Redstor Backup Pro\\InstantDataService\\
-   C:\\ProgramData\\Redstor Backup Pro\\InstantDataService\\
-   C:\\ProgramData\\Redstor Pro\\ and subfolders
-   C:\\Users\\(Username)\\AppData\\Roaming\\Redstor Backup Pro and subfolders

 **Processes**

-   C:\\Program Files\\Redstor Backup Pro\\InstantDataService\\InstantDataService.exe
-   C:\\Users\\(Username)\\AppData\\Roaming\\Redstor Backup Pro\\InstantDataFSR\\(Latest version number)\\InstantDataFSR.exe
-   C:\\Users\\(Username)\\AppData\\Roaming\\Redstor Backup Pro\\InstantDataPermanent\\(Latest version number)\\InstantDataPermanent.exe
-   C:\\Users\\(Username)\\AppData\\Roaming\\Redstor Backup Pro\\InstantDataTemporary\\(Latest version number)\\InstantDataTemporary.exe

* * *

### **4\. Recommended exclusions based on defaults for SE**

**Installation**

-   C:\\Program Files\\Redstor Backup Pro\\Backup Client SE\\ and all subfolders
-   System State Folders for Windows 2008 (assuming C: is used by system state)
-   C:\\VHDTemp\\
-   C:\\WindowsImageBackup\\
-   \\\\.\\GLOBALROOT\\Device\\ (especially important when doing system state backups)

If any working folders or plugin “dump” locations are moved, ensure that these are also excluded.

**Processes**

-   C:\\Program Files\\Redstor Backup Pro\\Backup Client SE\\a5backup.exe (or a5backup64.exe on 64-bit systems)
-   C:\\Program Files\\Redstor Backup Pro\\Backup Client SE\\SERunner.exe
-   C:\\Program Files\\Redstor Backup Pro\\Backup Client SE\\SplitVHD.exe and SplitVHDX.exe
-   Javaw.exe (Launched by SERunner.exe process)

**TCP ports**

-   9091 for Remote Management
-   8011 for Exchange Agent Service for SIR Plus
-   The other ports used by the Agent are randomly selected, but can be manually specified in the a5backup.properties file:
    -   service.rpc-server.localhost.port=_port number 1-65535_
    -   service.rmi.port=_port number 1-65535_
    -   service.port=_port number 1-65535_

The ports must be unique, and must not clash with any existing services. Ensure the GUI is closed and that the service is stopped when editing the file.

* * *

### **5\. Recommended exclusions based on defaults for DL**

**Installation**

-   C:\\Program Files\\Redstor Backup Pro\\Backup Client\\

If any working folder locations are moved, ensure that these are also excluded.

**Processes**

-   C:\\Program Files\\Redstor Backup Pro\\Backup Client\\a5backup.exe (or a5backup64.exe on 64-bit systems)
-   C:\\Program Files\\Redstor Backup Pro\\Backup Client\\A5Loader.exe
-   Javaw.exe (launched by A5Loader.exe process)

**TCP ports**

-   9091 for Remote Management
-   The other ports used by the Agent are randomly selected, but can be manually specified in the a5backup.properties file:
    -   service.rpc-server.localhost.port=_port number 1-65535_
    -   service.rmi.port=_port number 1-65535_
    -   service.port=_port number 1-65535_

The ports must be unique, and must not clash with any existing services. Ensure the GUI is closed and that the service is stopped when editing the file.

* * *

_**Note:** Antivirus, malware prevention or instrusion prevention software and network-based systems can sometimes intercept and/or block connections between the client software and the Redstor Platform. This includes all of the software listed above. This can even manifest as a "failed to establish SSL/TLS trust relationship" error._

_To avoid this, it is recommended to apply the exclusions and also to whitelist the IP addresses used by the service you are connecting to. Details of the Redstor Platform can be found [here](https://helpdesk.redstor.com/support/solutions/articles/4000219785)._

_Please also note that cipher and protocol security is enforced on the Redstor Platform, which may cause connectivity issues. Further details can be found [here](https://helpdesk.redstor.com/support/solutions/articles/4000220477)._
