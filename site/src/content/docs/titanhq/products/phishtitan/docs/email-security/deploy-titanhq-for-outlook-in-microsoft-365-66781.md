---
title: "Deploy TitanHQ for Outlook in Microsoft 365"
description: "Imported from support.titanhq.com"
---

> Source: [support.titanhq.com](https://support.titanhq.com/en/66781-deploy-titanhq-for-outlook-in-microsoft-365.html)
> Product: PhishTitan
> Imported content type: docs_page
> Product stream: email-security

##### Deploy TitanHQ for Outlook in Microsoft 365

Follow the steps below to deploy TitanHQ for Outlook.

1.  Go to [https://admin.microsoft.com/Adminportal/Home#/Settings/IntegratedApps](https://admin.microsoft.com/Adminportal/Home#/Settings/IntegratedApps).

2.  Select **Upload custom apps** and the _Deploy New App_ screen displays.

3.  On the _Upload apps to deploy_ form:

    -   From the _App type_ dropdown menu, select **Office Add-In**.

    -   Under _Choose how to upload app_, select **Provide link to manifest file**, and enter `https://protect.titanhq.com/manifest.xml`

    -   Select **Validate** and **Next**.

4.  On the _Add users_ screen:

    -   From _Assign users_, select the person to whom you want to deploy TitanHQ for Outlook. As best practice, it is recommended deploying to a single user first before deploying to the wider organization to confirm successful deployment.

    -   Select **Next**.

5.  Review the information on the _Accept permissions request_ screen, and select **Next**.

6.  Select **Finish Deployment**, and the TitanHQ for Outlook add-in will deploy.

    :::note
    Once successfully deployed, TitanHQ for Outlook is available in the Outlook desktop client, web application, and mobile app. Note that deployment time may vary depending on your environment.
    :::
