---
title: "1084 - Cleanup options when WIB dump location uses excessive disk space"
description: "Imported from helpdesk.redstor.com"
---

> Source: [helpdesk.redstor.com](https://helpdesk.redstor.com/support/solutions/articles/4000219760-1084-cleanup-options-when-wib-dump-location-uses-excessive-disk-space)
> Product: Redstor
> Imported content type: kb_article
> Source folder: Troubleshooting
> Modified: Modified on Mon, 21 Jul, 2025 at 12:48 PM

_**Note:** This option is available from v18.4_

When enabling Windows Image Backup in ESE, the Agent leverages Windows Server Backup technology in order to perform critical volume backups. When the backup occurs, all files, including non-system files on critical volumes are temporarily stored in consolidated format in a central  "dump" destination, i.e. a WindowsImageBackup folder on the same machine.  
  
By default, Windows Server Backup performs the maintenance of this dump location. In some instances however, multiple backup dates are retained causing excessive disk usage.

It is possible to force the cleanup of this dump location by adding the following to the a5backup.properties file located in the root of the ESE program folder.

`wib.dump.cleanup=true`  
`wib.dump.cleanup.mode=NEVER|BEFORE|AFTER|BOTH`

where

`NEVER` \- only allows Windows Server Backup to perform cleanup

`BEFORE` \- deletes all WIB backups except the one associated with the base backup at the start of the backup (one backup folder retained at the end of backup)

`AFTER` \- deletes all WIB backups except the newly created WIB backup at the end of the backup (there will be two backup folders if WIB doesn't delete the previous base Windows Backup)

`BOTH` \- invokes `BEFORE` and `AFTER` (one backup folder at the end of backup)
