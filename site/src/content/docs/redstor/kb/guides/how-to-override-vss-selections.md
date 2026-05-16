---
title: "1085 - How to override VSS selections"
description: "Imported from helpdesk.redstor.com"
---

> Source: [helpdesk.redstor.com](https://helpdesk.redstor.com/support/solutions/articles/4000219759-1085-how-to-override-vss-selections)
> Product: Redstor
> Imported content type: kb_article
> Source folder: Guides
> Modified: Modified on Fri, 8 Aug, 2025 at 7:02 AM

When Full System Backup is enabled, all critical content is automatically included by VSS. In some cases, this may include content that is excluded from the backup selection, e.g. a folder included in a DFS replicated folder (DFS Replication service writer). Since Full System Backup does not expose a mechanism for writer and component exclusions, and System State does not allow exclusions at component level, the solution is to edit the relevant setting in the ESE installation directory.

### **In v19.5 and newer versions**

From v19.5, you can edit the setting **vss.writer.exclusions** to list the VSS writers and/or components that are to be excluded. To do this:

1.  Retrieve a list of writers by running `vssadmin list writers` from an elevated command prompt. You can obtain a more detailed list of writers and components using:  
      
    
    diskshadow /l c:\\shadowcontents.txt
    DISKSHADOW> list writers detailed
    DISKSHADOW> exit
    
    The output is stored in the **shadowcontents.txt** file (which you can supply to Redstor Support if requested).  
      
    
2.  Stop the ESE service.  
      
    
3.  Navigate to the installation directory and open the **a5backup.properties** file.  
      
    
4.  Add a line following the pattern:  
      
    
    `vss.writer.exclusions="<vss.writer1\\component1>","<vss.writer2>"`
    
      
    where `vss.writer1\\component1` and `vss.writer2` are the writers/components you want to exclude (separated by commas).  
      
    For example:  
      
    
    `vss.writer.exclusions="WMI Writer","System Writer\\Service Files"`
    
      
    Note that the double backslashes are required. The writer name should be exactly as shown in the vssadmin list writers command.  
      
    
5.  Restart the ESE service. ESE will now exclude the specified writers and components.
    

### **In v19.4 and older versions**

In versions older than 19.5, exclusions must be added to the **vss.overriding.exclusions** setting. To do this:

1.  Stop the ESE service.  
      
    
2.  Navigate to the installation directory and edit the **a5backup.properties** file.  
      
    
3.  Add a line following the pattern:  
      
    
    `vss.overriding.exclusions="<path1>","<path2>"`
    
      
    where `<path1>` and `<path2>` are the paths you want to exclude (separated by commas).  
      
    For example, to exclude the iTunes folder in the DFSR folder:  
      
    
    `vss.overriding.exclusions="D:\\AdminData\\Data\\word\\My Music"`
    
      
    Note that the double backslashes are required.  
      
    
4.  Restart the ESE service.  
      
    
5.  Run **Size** from the toolbar in the ESE interface or do a backup to confirm that the folder is excluded.
    

### **Warning**

When excluding items that VSS says must be backed up, you run a high risk of excluding one or more critical files. This may result in a Full System Recovery that will not boot.  
  

The following warning will be logged during a backup or size check to highlight the manual exclusion:  
  

Warning: Overriding VSS inclusion by manually excluding '<path>'
