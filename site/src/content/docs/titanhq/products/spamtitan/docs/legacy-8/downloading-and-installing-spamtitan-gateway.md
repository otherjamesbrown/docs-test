---
title: "Downloading and Installing SpamTitan Gateway"
description: "Imported from docs.titanhq.com"
---

> Source: [docs.titanhq.com](https://docs.titanhq.com/en/8863-downloading-and-installing-spamtitan-gateway.html)
> Product: SpamTitan
> Imported content type: docs_page
> Product stream: legacy

#### Downloading and Installing SpamTitan Gateway

Abstract

Learn how to download and install SpamTitan Gateway using this simple, step-by-step guide.

Read [Before Installing SpamTitan Gateway](/docs-test/titanhq/products/spamtitan/docs/legacy-8/before-installing-spamtitan-gateway/ "Before Installing SpamTitan Gateway") and [System Requirements](/docs-test/titanhq/products/spamtitan/docs/legacy-8/system-requirements/ "System Requirements") to understand important prerequisites before following the steps below to download and install SpamTitan Gateway.

If you would like to follow a video overview of the installation process outlined below, see here:

Follow the steps below to download and install SpamTitan Gateway. This process is the same if you are installing on a virtual machine or on your own hardware (the process below uses a virtual machine).

:::note
The current version of SpamTitan Gateway is 8.00 . If you are using SpamTitan Gateway 7.13 or earlier and want to upgrade to version 8.00, please see [SpamTitan Gateway 7.13 to 8.00 Upgrade Path](/docs-test/titanhq/products/spamtitan/docs/legacy-8/spamtitan-gateway-7-13-to-8-00-upgrade-path/ "SpamTitan Gateway 7.13 to 8.00 Upgrade Path").
:::

1.  If you did not download SpamTitan Gateway as part of a trial setup, contact Customer Support to receive an ISO download link.

    :::note[Important]
    Before installing the ISO, you must ensure you have access to http://pkg-repo-1.titanhq.com
    :::

    Once installed, all hotfixes made available since the ISO release will be picked up by the system within one hour.

    :::tip
    If you experience any issues downloading an install file, please try a different browser.
    :::

2.  Launch your preferred VM software and run the ISO install file. Allow the welcome screen timer to count down and run until the following welcome screen displays. Press Enter to choose **OK**.

    ![ST-8\_0-ISO-welcome.jpg](/docs-test/imported-assets/spamtitan-legacy/8863-downloading-and-installing-spamtitan-gateway/d362625ebf7b.jpg)

3.  From the Keymap Selection window, select your keyboard map (default: US) and press Enter to **Select**.

    ![2\_keymap\_selection.jpg](/docs-test/imported-assets/spamtitan-legacy/8863-downloading-and-installing-spamtitan-gateway/442dcc7e04cf.jpg)

4.  Enter the hostname for your SpamTitan Gateway machine - this must be a fully qualified domain name (FQDN). This server will also be used as the server's SMTP banner.

    ![3\_set\_hostname.jpg](/docs-test/imported-assets/spamtitan-legacy/8863-downloading-and-installing-spamtitan-gateway/a69a840e9569.jpg)

5.  Press Enter to select **Yes** in the Confirmation window to confirm that the disk will be erased.

    The disk is then automatically partitioned. In the Partitioning window, press Enter to select **Commit**.

    ![4\_partitioning.jpg](/docs-test/imported-assets/spamtitan-legacy/8863-downloading-and-installing-spamtitan-gateway/8b5f56ce49b6.jpg)

6.  Allow the installer to run:

    ![5\_installing.jpg](/docs-test/imported-assets/spamtitan-legacy/8863-downloading-and-installing-spamtitan-gateway/aa5ad8bca0d7.jpg)

7.  A list of all network interfaces found on the computer is shown in the Network Configuration window. Select one to be configured and press Enter to select **OK**. Additional network cards can be configured after the install process is complete.

    ![6\_network\_configuration.jpg](/docs-test/imported-assets/spamtitan-legacy/8863-downloading-and-installing-spamtitan-gateway/5746b65666f4.jpg)

8.  Configure the IP address, subnet mask and default router for your SpamTitan Gateway machine. Press Enter to select **OK**.

    :::note[Important]
    IP address, subnet mask and default router are mandatory fields for installation.
    :::

9.  Enter the DNS servers you want to use and press Enter to select **OK**.

10.  From the _Time Zone Selector_ window, press Enter to select **Yes** if your machine is currently on UTC or **No** to select a custom time zone.

11.  Allow the installer to install packages and reboot.

Your SpamTitan Gateway web interface is accessible after the machine has fully rebooted. To access, open a web browser and enter the IP address you configured for your SpamTitan server in Step 8 above.
