---
title: "Insights"
description: "Imported from helpdesk.phishtitan.com"
---

> Source: [helpdesk.phishtitan.com](https://helpdesk.phishtitan.com/support/solutions/articles/4000203329-insights)
> Product: PhishTitan
> Imported content type: kb_article
> Source folder: Reports and Insights (Customer)
> Modified: Tue, 8 Oct, 2024 at 3:14 PM

Go to **Insights** where you can view targeted users and incident sources for the last seven days in the Threat Surface Report.

![PT-Customer-Threat-Surface-Report.jpg](/docs-test/imported-assets/phishtitan-kb/4000203329/2732fda99d24.jpg)

You can select targeted users and drill down to the sources of the attack, which can help you identify patterns in malicious attacks. For example, you can see if a phishing email has been sent to all users or if it has been sent to a particular group, such as C-Suite executives. You can also determine if only one user has been targeted in what might be a spear phishing attack.

The following definitions are useful as you consider the data:

-   _Targeted Users_: Email addresses of users who have received one or more phishing emails.

-   _Incidents_: Total number of phishing emails received over the last seven days.

-   _Incident Sources_: Email addresses of the phishing emails.

For a more high-level view of phishing activity, see the [Summary Report](/docs-test/titanhq/products/phishtitan/kb/reports-insights-customer/summary-report/ "Summary Report"), which provides a list of the top targeted users and incident sources.

-   **Date Range**

    The default date range for report data is seven days, but you can select a shorter time span in the Select Date Range section.

    ![PT-Threat-Surfact-Select-Date-Range.jpg](/docs-test/imported-assets/phishtitan-kb/4000203329/c96542d3b2aa.jpg)

-   **Targeted Users Table**

    Users who have received phishing emails are shown in the Targeted Users table. Those in receipt of the most phishing emails are at the top.

    ![PT-Threat-Surfact-Select-Receiver.jpg](/docs-test/imported-assets/phishtitan-kb/4000203329/0e1489f48ad6.jpg)

    -   _Targeted Users_: Email address of users who have received phishing email(s).

    -   _Incidents_: Number of phishing emails received by a user. You can change the order to list those with the least number of incidents at the top by selecting the arrow below **Incidents**.

    If you want to select specific targeted users, you can search for and select one or more email addresses in the **Select Targeted Users** dropdown menu.

    ![PT-Threat-Surfact-Select-Receiver1.jpg](/docs-test/imported-assets/phishtitan-kb/4000203329/09ad49be0bc2.jpg)

    You can do the same by selecting email address(es) in the **Targeted Users** table. To display the results of two or more targeted users, select those email addresses while pressing the **Control** key.

    The **Who Attacked Who?** table automatically update with the results.

-   **Who Attacked Who? Table**

    The **Who Attacked Who?** table helps you to identify the relationship between who received a phishing email and the source of the attack.

    ![PT-Threat-Surfact-Who-Attacked-Who.jpg](/docs-test/imported-assets/phishtitan-kb/4000203329/b6272220071d.jpg)

    -   _Incident Sources_: The email address of the source of the phishing email. If you select the expand icon beside it, the email addresses of those who received the phishing emails are displayed.

        ![PT-Reporting-Expand-Icon-Example.jpg](/docs-test/imported-assets/phishtitan-kb/4000203329/5237e694375e.jpg)

    -   _Targeted Users_: The number of users in receipt of phishing emails.

    -   _Incidents_: Number of phishing emails sent by the attacker. If you selected the expand icon, you can see the list of targeted users with the number of attacks per receiver. You can change the order of the list by selecting the arrow below Incidents, which will show the least number of phishing attacks at the top.
