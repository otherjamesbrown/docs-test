---
title: "1093 - How to move an Account from one Group to another"
description: "Imported from helpdesk.redstor.com"
---

> Source: [helpdesk.redstor.com](https://helpdesk.redstor.com/support/solutions/articles/4000219755-1093-how-to-move-an-account-from-one-group-to-another)
> Product: Redstor
> Imported content type: kb_article
> Source folder: Guides
> Modified: Modified on Tue, 5 Aug, 2025 at 1:10 PM

This article describes how to move a Backup Account from one Group on the Storage Platform to another.

1.  In the **Account Management** view in the Storage Platform Console, select the name of the Group to which the Account belongs.   
      
    ![group.png](/docs-test/imported-assets/redstor/4000219755/278a38f1a75d.jpg)   
      
    
2.  In the workspace to the right, in the **Accounts** tab, right-click the name of the Account you wish to move and click **Change Group**.  
      
    ![change\_group.png](/docs-test/imported-assets/redstor/4000219755/a983da593dee.jpg)   
      
    
3.  In the dialog box that appears, choose a new Group for the Account from the **Select Target Group** drop-down menu. You can also select **Move** the allocated licences, which means any licences allocated to the account will now be taken from the new Group. Then click **OK**.  
      
    ![select\_target\_group.png](/docs-test/imported-assets/redstor/4000219755/2d1e388a155a.jpg)   
      
    The Account will now be listed under the new Group in the Account Management view.

**_Notes:_**

-   _An Account cannot be moved into a Group if doing so will cause that Group's storage limit to be exceeded. See [Article 1025](https://helpdesk.redstor.com/support/solutions/articles/4000219787) for more on Group storage limits._
-   _If you move an Account from a Group that is configured for mirroring to a Group that is not configured for mirroring, the Account will be deleted from the MirrorServer after the retention period has elapsed (default: 24 hours)._
-   _If you move an Account from a Group on a StorageServer that is configured for mirroring to a Group on another StorageServer that is configured for mirroring, the Account will be moved between MirrorServers automatically. No manual MirrorServer configuration is necessary._
