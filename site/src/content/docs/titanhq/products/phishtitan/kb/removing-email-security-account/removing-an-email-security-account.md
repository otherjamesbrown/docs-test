---
title: "Removing an Email Security Account"
description: "Imported from helpdesk.phishtitan.com"
---

> Source: [helpdesk.phishtitan.com](https://helpdesk.phishtitan.com/support/solutions/articles/4000210000-removing-an-email-security-account)
> Product: PhishTitan
> Imported content type: kb_article
> Source folder: Removing an Email Security Account
> Modified: Thu, 5 Dec, 2024 at 5:43 PM

The steps below explain how to remove an email security account using the Microsoft Compliance Portal.

1.  Remove the journal rule that you set up when you were onboarded.

    1.  Go to [https://purview.microsoft.com/datalifecyclemanagement/exchange](https://purview.microsoft.com/datalifecyclemanagement/exchange) and in the left menu, select **Exchange (legacy)** > **Journal Rules**.

        ![Plat-Remove-Journal-Rule-Compliance-Portal-Version.jpg](/docs-test/imported-assets/phishtitan-kb/4000210000/aa2316bad82b.jpg)

    2.  Select the checkbox beside the journal rule and then **Delete**.

2.  Change the NDR email address.

    1.  Go to [https://purview.microsoft.com/settings/application-settings/datalifecyclemanagement](https://purview.microsoft.com/settings/application-settings/datalifecyclemanagement) and select **Exchange (legacy)** > **Settings**.

        ![Plat-Change-NDR-email-address-Compliance-Portal-Version.jpg](/docs-test/imported-assets/phishtitan-kb/4000210000/221f9895cd2b.jpg)

    2.  Remove the NDR email provided by TitanHQ and replace it with a new email address managed by you.

3.  Remove the Outlook Add-in for all users.

    1.  Go to [https://admin.microsoft.com/Adminportal/Home#/Settings/IntegratedApps](https://admin.microsoft.com/Adminportal/Home#/Settings/IntegratedApps) > **Deployed Apps**.

    2.  Select **THQ for Outlook** > **Actions** > **Remove App**. This will remove the Outlook Add-in for all end users.

        ![Plat-Remove-Outlook-Addin.jpg](/docs-test/imported-assets/phishtitan-kb/4000210000/90b0bc8fb5b9.jpg)

4.  Lastly, delete the Email Security Enterprise App, using either the [Azure portal](https://portal.azure.com/#view/Microsoft_AAD_IAM/StartboardApplicationsMenuBlade/~/AppAppsPreview/menuId~/null) or [Entra Admin Center](https://entra.microsoft.com/#view/Microsoft_AAD_IAM/StartboardApplicationsMenuBlade/~/AppAppsPreview).

    1.  Log in to your preferred portal, and go to **Applications** > **Enterprise applications** > **All Applications**.

    2.  Select the Email Security Enterprise App > the **Properties** tab > **Delete**.
