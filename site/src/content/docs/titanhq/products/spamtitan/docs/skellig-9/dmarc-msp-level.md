---
title: "DMARC (MSP Level)"
description: "Imported from support.titanhq.com"
---

> Source: [support.titanhq.com](https://support.titanhq.com/en/77205-dmarc--msp-level-.html)
> Product: SpamTitan
> Imported content type: docs_page
> Product stream: skellig

### DMARC (MSP Level)

DMARC (Domain-based Message Authentication, Reporting, and Conformance) is an email authentication protocol that helps to prevent unauthorized use of your domain. DMARC checks to ensure that the domain in the _From: header_ aligns with the SPF and that the DKIM signature is authenticated to help prevent spoofing.

As an admin, you have the option to exclude IP/Networks from DMARC checks by adding them to the exempt IPs list. This can be useful so that legitimate traffic isn't blocked. This can happen, for example, if a sending domain does not have full DMARC alignment. Many organizations use marketing platforms or SaaS ticketing services to send on their behalf. If those providers don't sign the messages with DKIM aligned to the customer domain, strict DMARC will fail. Likewise, if they send messages using their own envelope domains, DMARC will fail. Similarly, forwarding emails invalidates SPF, and often DKIM, leading to DMARC failures and potential delivery issues.

:::note[Important]
Ensure that that IP/Networks you exempt from DMARC checks are trusted IPs.
:::

IP/Networks that have been excluded from DMARC checks can be found by going to **Filtering** > **DMARC**.

![ST-DMARC-MSP-ListedIPNetworks.jpg](/docs-test/imported-assets/spamtitan-skellig/77205-dmarc--msp-level-/4a93830a1058.jpg)

-   _IP/Network_: Unique address that an email originates from.

-   _Last Modified_: Date and time that the exempted IP/Network was last updated.

-   _Comments_: Optional text for the exempt IP/Network.

-   _Actions_: Select the edit ![edit-icon-small.jpg](/docs-test/imported-assets/spamtitan-skellig/77205-dmarc--msp-level-/61c7eed9145b.jpg) icon to [edit an IP/Network](/docs-test/titanhq/products/spamtitan/docs/skellig-9/dmarc-msp-level/ "Editing IP/Networks").

You can manage how the table is displayed as follows:

-   Use the Search ![Search-box.jpg](/docs-test/imported-assets/spamtitan-skellig/77205-dmarc--msp-level-/6e2d24234734.jpg) box to search IP/Networks and Comments. Select the column icon ![ES-Column-Reorder-icon.jpg](/docs-test/imported-assets/spamtitan-skellig/77205-dmarc--msp-level-/9ff217c6917f.jpg) to manage how table columns are displayed:

    -   Select the toggle beside a column name to show or hide a column.

    -   Use the reordering ![ES-Reordering-icon.jpg](/docs-test/imported-assets/spamtitan-skellig/77205-dmarc--msp-level-/75ef450eda3f.jpg) icon to move columns up and down the list. This changes the left-to-right display. An item at the top of the list, for example, means that it will be the first column on the left. Select **Restore default order** to restore the columns to their default positions.

    -   Resize columns by hovering your cursor over the column boundary you want to adjust until it becomes a resize ![ES-Resize-Cursor.jpg](/docs-test/imported-assets/spamtitan-skellig/77205-dmarc--msp-level-/3b077003c7a7.jpg) cursor. Drag the boundary until the column is the width you want.

-   Select the up/down ![sort-arrows.jpg](/docs-test/imported-assets/spamtitan-skellig/77205-dmarc--msp-level-/b903746dee2c.jpg) arrows in the column headers to sort column content.

#### Adding IP/Networks

To exclude IP/Networks from DMARC checks, you can add them to the exempt IPs list by following the steps below:

1.  Go to **Filtering** > **DMARC**.

2.  You can add an IP/Network individually or upload a list of IPs/Networks in a .csv file.

    -   To add an IP/Network individually:

        1.  Select **Add** and choose **IP/Network**.

        2.  Complete the fields in the pop-up window:

            ![ST-DMARC-MSP.jpg](/docs-test/imported-assets/spamtitan-skellig/77205-dmarc--msp-level-/17a90d4135ab.jpg)

            -   _IP/Network to Allow_: Enter the IP/Network address to be exempt from DMARC checks.

            -   _Netmask_: From the dropdown menu, select the netmask.

            -   _Address Type_: Select the internet protocol version: **IPv4** or **IPv6**.

            -   _Comments (optional)_: You can enter a reason for adding the IP/Network to the exempt IPs list.

        3.  Select **Add**.

    -   To upload a list of IPs/Networks:

        1.  Select **Add** and choose **Multiple IP/Networks**.

        2.  In the pop-up window, drag and drop the csv file to be uploaded.

            :::note
            You can download an example of a csv file, which you can populate with IP/Networks, by selecting **here** in the pop-up window.

            ![ST-DMARC-MSP-DownloadCSV.jpg](/docs-test/imported-assets/spamtitan-skellig/77205-dmarc--msp-level-/0415a635e77c.jpg)
            :::

        3.  Select **Add**.

#### Editing IP/Networks

To edit the IP/Networks, do the following:

1.  Go to **Filtering** > **DMARC**, and select the edit ![edit-icon-small.jpg](/docs-test/imported-assets/spamtitan-skellig/77205-dmarc--msp-level-/61c7eed9145b.jpg) icon for the IP/Network you want to edit.

    ![ST-DMARC-MSP-ListedIPNetworks-editing.jpg](/docs-test/imported-assets/spamtitan-skellig/77205-dmarc--msp-level-/d559d5fa80c6.jpg)

2.  In the pop-up window that opens, you can edit the following:

    -   _IP/Network to Allow_: Enter the IP/Network address to be exempt from DMARC checks.

    -   _Netmask_: From the dropdown menu, select the netmask.

    -   _Address Type_: Select the internet protocol version: **IPv4** or **IPv6**.

    -   _Comments (optional)_: You can enter a reason for adding the IP/Network to the exempt IPs list.

3.  Select **Save Changes**.

#### Deleting IP/Networks

To delete IP/Networks from the list:

1.  Go to **Filtering** > **DMARC** and select the IP/Network(s) that you want to delete.

    ![ST-DMARC-MSP-Delete.jpg](/docs-test/imported-assets/spamtitan-skellig/77205-dmarc--msp-level-/3464d391f04b.jpg)

2.  Select **Delete**. In the pop-up window that appears, select **Delete** again to confirm your decision.

    ![ST-DMARC-MSP-Delete1.jpg](/docs-test/imported-assets/spamtitan-skellig/77205-dmarc--msp-level-/f0f18ccaf0fe.jpg)

## In this Section

-   [Adding IP/Networks](/docs-test/titanhq/products/spamtitan/docs/skellig-9/dmarc-msp-level/)
-   [Editing IP/Networks](/docs-test/titanhq/products/spamtitan/docs/skellig-9/dmarc-msp-level/)
-   [Deleting IP/Networks](/docs-test/titanhq/products/spamtitan/docs/skellig-9/dmarc-msp-level/)
