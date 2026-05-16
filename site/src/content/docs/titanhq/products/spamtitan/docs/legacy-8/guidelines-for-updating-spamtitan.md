---
title: "Guidelines for Updating SpamTitan"
description: "Imported from docs.titanhq.com"
---

> Source: [docs.titanhq.com](https://docs.titanhq.com/en/10542-guidelines-for-updating-spamtitan.html)
> Product: SpamTitan
> Imported content type: docs_page
> Product stream: legacy

#### Guidelines for Updating SpamTitan

Please read the guidelines below before updating your SpamTitan Gateway or SpamTitan Private Cloud. If you are on our shared cloud, your SpamTitan updates are managed automatically.

-   Go to **System Setup** > **System Updates** and click **Start** opposite Check for Updates Now: to download the latest updates.

-   As a precaution before updating, take a snapshot of your virtual machine. If you are running a clustered environment, take a snapshot of each node in the cluster.

-   Go to **Settings** > **Backup** > **Export Backup** and click **Start** to make a backup of your configuration settings. If you are running a clustered environment, do this for each node.

-   While updates can be run at once, it is recommended to run them sequentially. For example, if you are currently running SpamTitan 7.04, firstly install 7.05, then 7.06, etc. up to the current version.

    Each node on a cluster should be on the same version. In a cluster, run an update on the master node _first_, then the child node. For example, if updating from 7.01 to 7.03, run the 7.02 update on the master node first, then on the child node. After, run the 7.03 update on the master node and then on the child node.

-   Do not cancel an update - allow it to finish. If an update is canceled in error, please contact Support if you experience any issues. Take particular note of any errors that appear in the update pop up window and take a screenshot to assist with troubleshooting.

    ### Caution

    While an update is running a pop-up window shows the status of the update. DO NOT CLOSE this pop-up window until the update completes, or the update stops running.

-   Each update takes approximately five minutes to complete, with no requirement to restart.
