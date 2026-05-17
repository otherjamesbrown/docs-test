---
title: "SpamTitan Release Notes"
description: "Imported from support.titanhq.com"
---

> Source: [support.titanhq.com](https://support.titanhq.com/en/61768-spamtitan-release-notes.html)
> Product: SpamTitan
> Imported content type: docs_page
> Product stream: skellig

### SpamTitan Release Notes

SpamTitan is continually evolving, with each release offering new features and enhancements that provide you with even better spam filtering. Updates are managed automatically, providing you with the very latest updates and fixes.

The release notes below outline the upgrades and improvements in our recent releases.

![spamtitan-logo-small.jpg](/docs-test/imported-assets/spamtitan-skellig/61768-spamtitan-release-notes/ba6cca22d135.jpg)

#### Skellig (9.13)

_Released December 2025_

This release includes comprehensive UI and performance improvements, along with bug fixes and several new features. Admins will notice new status tracking on the MSP, customer and domain levels, as well as additional DMARC IP Bypass Controls. SpamTitan also now supports integration with Microsoft Outlook's Report Phishing/Junk button.

**What's New?**

-   **Domain and Customer Status Tracking**: This release of SpamTitan introduces domain and customer status tracking with MSP, Customer, and Domain tables now displaying comprehensive status metrics:

    -   Domain table displays a new MX Status column indicating whether domain MX records point to this SpamTitan cluster.

        -   _Active_: All MX records point to SpamTitan

        -   _Partial_: Some MX records point to SpamTitan

        -   _Inactive_: No MX records point to SpamTitan

    -   Customer table shows the total domain count with breakdown of active, partial, and inactive domains.

    -   MSP table displays the total customer count with breakdown of active, partial, and inactive customers.

-   **Additional DMARC IP Bypass Controls**: SpamTitan now allows MSPs, Customers and Domain administrators to bypass DMARC checks for specific IP addresses and networks, reducing support overhead and preventing legitimate emails from potentially being quarantined. MSPs can set bypasses that are inherited on the customers and domain level. Customers can set bypasses that are inherited by their domains.

-   **Microsoft Outlook Phishing/Junk Reporting Integration**: SpamTitan now supports integration with Microsoft Outlook's Report Phishing/Junk button. Users can configure their M365 add-in to forward reported messages to a dedicated mailbox (for example, report-email-cybersentriq@yourdomain.com). When messages are sent to this address and routed through SpamTitan, they are automatically captured and archived for further processing. See [Customizing the M365 Outlook Report Add-in](/docs-test/titanhq/products/spamtitan/docs/skellig-9/customizing-the-m365-outlook-report-add-in/ "Customizing the M365 Outlook Report Add-in") for details.

**What Has Been Improved?**

-   History and Quarantine search filters now persist after page navigation.

-   Messaging in marketing emails has been updated to better communicate user actions and outcomes. Link text and confirmation messages now clearly state that settings are being updated to allow future marketing email delivery.

-   Dark mode changed from the existing high contrast dark mode to a pallet that is more appealing to the eye.

-   Anti-spoofing feature improved to recognize email aliases when detecting display name spoofing attempts. SpamTitan now correctly handles scenarios where legitimate users have multiple email addresses (aliases) associated with the same display name, preventing false positives where one alias was incorrectly flagged as spoofing another alias of the same user.

-   Corrected the actions menu in Archive Reports to display all available actions regardless of the number of entries selected. Previously, some action options were hidden when only one entry was selected.

**What Has Been Fixed?**

-   Issues related to Sandboxing have been resolved.

-   Fixed Pattern Filtering And/Or conditions not saving in Meta Pattern Filters despite showing success confirmation.

-   Issue fixed where the verification server port was not displayed in the domain configuration UI when set to port 25. The port number now displays correctly for all port values, including the default SMTP port 25.

-   History search fixed so that it now accepts decimal values in Score filter.

-   Pattern Filter issue resolved regarding multi-pattern modal that was saving unexpectedly when adding condition.

-   Issue fixed with regard to deleting archived HTML reports from Reporting > Archive.

-   Issue resolved with SPF bypass logic.

-   Geoblocking IP exemptions table issue resolved so that it now displays the complete CIDR notation (for example, 10.1.0.0/16) instead of only the IP address.

-   Issue resolved that prevented bulk addition of users with apostrophes in their display names or email addresses to the Display Name Anti-Spoofing feature.

-   Corrected the Email History display to show _Sent to sandbox_ status instead of _Processing_ when emails are sent to the sandbox for analysis.

-   Issue resolved where pagination was not functioning correctly in the customer-level reports data table.

-   Issue fixed where geoblocking rules were not applied to messages sent with an empty envelope sender (mailer daemon/bounce messages). The system now blocks connections from IPs in blocked countries regardless of whether a sender address is present, while still allowing sender-based exceptions to be applied when applicable.

-   Issue resolved where saving LDAP domain configuration with a blank port number would trigger an error. SpamTitan now defaults to the port 389 if field is left blank.

-   Error that occurred when attempting to delete archived HTML reports from the Reporting > Archive section resolved.

-   Fixed archive report output formatting for text and CSV formats to ensure proper readability.

-   **Security Update**: Package updates to upgrade FreeBSD packages with known vulnerabilities.

#### Skellig (9.12)

_Released July 2025_

**What's New?**

-   In this release of Skellig, admins will notice a new style of breadcrumbs in the user interface.

    ![ST-breadcrumbs.jpeg](/docs-test/imported-assets/spamtitan-skellig/61768-spamtitan-release-notes/81cb4c8b9834.jpeg)

**What Has Been Fixed?**

-   Six packages with vulnerabilities were updated.

#### Skellig (9.11)

_Released June 2025_

**What's New?**

-   A new feature in this release of SpamTitan is the ability for admins to perform a "bulk upload" to the Allow & Block List by uploading a csv file. Being able to upload multiple entries at once helps admins manage their allow and block lists more efficiently and easily.

    As before, admins can go to **Filtering** > **Allow & Block List** and select **Add**. The **Add** dropdown menu now displays an option to upload multiple entries. As shown in the following example, **Upload domain(s)** enables admins to upload a csv file containing multiple domains.

    ![ST-Add-dropdown.jpg](/docs-test/imported-assets/spamtitan-skellig/61768-spamtitan-release-notes/c8e093a6166a.jpg)

    The pop-up window provides a sample csv file admins can use for the upload.

    ![ST-dragdropFolderForList.jpg](/docs-test/imported-assets/spamtitan-skellig/61768-spamtitan-release-notes/7d85ff5cc3e0.jpg)

    Once the file is added, the Allow & Block list automatically updates with the newly added entries, which can now also be filtered and ordered.

-   This release of SpamTitan also sees a new feature for end users with the addition of a new Settings menu. From here users can select **Policy Settings** where they can classify marketing emails as spam and manage their quarantine report settings.

    ![ST-User-Policy.jpg](/docs-test/imported-assets/spamtitan-skellig/61768-spamtitan-release-notes/1eb43bb5ce2d.jpg)

    When end users release a message from Quarantine that was classified as marketing, they will also have the option to update their policy to allow all marketing mails in future.

**What Has Been Fixed?**

-   Forwarding a Message no longer marks it as a False Positive.

-   Scheduled reports for Geoblocking are now reporting stats at the Domain Group/Customer and Domain levels correctly.

-   Resolved issue where Display name anti-spoof rules were not always triggering.

-   Fix applied so that Quarantine Report action confirmation page uses MSP logo.

-   DMARC added as message type in quarantine filter.

-   Fix applied for multiple entries in History for same message.

-   Errors in German Language Quarantine Report corrected.

-   Fix applied so that in History and Quarantine when resizing column with ellipses, full content is visible.

#### Skellig (9.10)

_Released May 2025_

Along with several UI enhancements, Skellig 9.10 delivers the ability to lock user-level policies and to edit the subject line when _Pass and Tag_ is selected for spam filtering.

**What's New?**

-   This SpamTitan release adds support for locking user policies. When a user policy is locked, it doesn't inherit settings from the domain policy. Admins can view the Locked status of the user policy in the User Policies table, making it simpler to understand the status of their user policies as a whole.

    ![ST-Skellig-Lock-Pol-RN.jpg](/docs-test/imported-assets/spamtitan-skellig/61768-spamtitan-release-notes/762a80308b50.jpg)

    This change gives admins greater control over how email policies are applied across users. This is especially helpful for high-risk roles or for exceptions that require different treatment than the broader group.

    Locking or unlocking user policies can be done in two ways: from the user's policy page or from the user policy list view.

-   When setting up spam filtering for user policies, It is now possible to modify the subject line of an email when _Pass and Tag_ is selected. Admins can enable _Spam Modifies Subject_ and specify a tag in _Spam Subject Tag_ (default is _\[ \*\* SPAM \*\* \]_).

**What Has Been Improved?**

-   Firstname and Lastname are no longer required settings on user policy page.

-   Geo blocking policy inheritance has been improved.

-   DMARC Quarantine emails are now visible on the Quarantine page.

-   UI enhancement has been added with minor modification to page heading size.

-   The ability to adjust column sizes on the History and Quarantine pages has been added.

-   To make managing quarantine easier, delete/release/allow buttons have been added to the bottom of the screen.

-   Minor enhancement has been made to the Dutch translation of the Quarantine Report.

-   There is now enhanced server side validation of user supplied data to tighten security.

**What Has Been Fixed?**

-   Fixed UI so that attachment type filtering now has a banned subject box.

-   History and Date column is sorted ascending.

-   Linklock inheritance problems have been fixed.

-   UI bug in multi-pattern creation now fixed.

-   Fixed bug so user policy created through API correctly inherits domain policies.

-   NDR can be sent when spam setting is _Pass and Tag_.

-   Custom Linklock logo now displays for MSPs.

-   Quarantine Report Settings are correctly being replicated from domain to user policies.

-   Display Name Anti-Spoof correctly represents its status.

-   Fixed problem where spam was not being discarded despite policy settings indicating.

#### Skellig (9.09)

_Released February 2025_

**What's New?**

MSP and customer admins now have the capability to enforce two-factor authentication (2FA) across all users within their organizations. Mandatory 2FA ensures that all users must authenticate using 2FA when signing in, enhancing protection against unauthorized access. Admins can configure enforcement at multiple levels, including MSP, customer, domain, and user levels. End users can't disable this service on their own—personal choice is removed to maintain security standards.

![ST-2fa-ReleanseNotes.jpg](/docs-test/imported-assets/spamtitan-skellig/61768-spamtitan-release-notes/8ca412d2a454.jpg)

The user interface enables admins to manage the enforcement of 2FA at different levels. A domain/user slideout lets admins drill down to domain and user levels.

![ST-Slideout-Gen.jpg](/docs-test/imported-assets/spamtitan-skellig/61768-spamtitan-release-notes/1ba52a385091.jpg)

#### Skellig (9.08)

_Released February 2025_

In addition to several fixes, Skellig 9.08 introduces Quarantine White Labeling, which gives MSPs the ability to customize their quarantine Reports to match their brand.

![ST-SK-Quarantine-Report-UI-Whitelabelling.jpg](/docs-test/imported-assets/spamtitan-skellig/61768-spamtitan-release-notes/860fc36e20be.jpg)

**What's New?**

-   White Labeling for Quarantine Reports is now available for MSPs in **Settings** > **Quarantine Report**. MSPs can easily modify their quarantine reports to reflect their brand by modifying the From Email Address, Display Name, Report Subject and adding a Contact Email Address. They can also upload their own company logo. Reverting back to the default settings is simple and can be achieved by selecting **Revert**.

**What Has Been Improved?**

-   Global navigation guards for unauthenticated user redirects have been implemented.

**What Has Been Fixed?**

-   9.07 error in maillog: "/etc/aliases.db: Invalid argument" and postfix dependency problem has been resolved.

-   Client authentication problem has been resolved with first boot fix for Laravel initialization.

-   Resolved issue where domains were left in inactive state during quarantine report processing.

-   Resolved issue where bdamserver supervise process was leaving behind defunct process.

-   Missing oauth client record has been fixed.

-   Resolved issue where Antispoof name was not triggering on Skellig problem.

-   Quarantine report generation for MSP bug has been resolved.

-   Copyright year has been updated.

-   Resolved issue to verify SSL/TLS: Renegotiation DoS Vulnerability (CVE-2011-1473, CVE-2011-5094).

-   Velociraptor agent configuration has been updated.

-   Resolved issues where Skellig PDF report was not showing clean message total.

-   Issue resolved where ClamAV 1.4 service was renamed from clamav-clamd to clamav\_clamd in 1.4 package.

-   Resolved postfix warning support for parameter disable\_dns\_lookups that it would be removed.

-   Resolved issue regarding postfix incorrect parameter change.

-   Missing cluster config in quarantine report was fixed.

-   New quarantine report config table was added to backups.

-   Missing migration for recipient verification feature was fixed.

#### Skellig (9.07)

_Released December 2024_

With SpamTitan Skellig 9.07 we've added enhancements to make security stronger and the configuration process more efficient. Email Security features, such as anti-spoofing, have been made easier to configure with the ability for admins to enable anti-spoofing at the customer level. This means that admins don't have to drill down into each domain-level setting.

In addition, Display Name anti-spoofing is no longer tied to user policies. Instead, admins can upload a custom list of Display Name/email pairs for any inbox that needs to be protected. The Quarantine Report process has been upgraded to ensure reports are always delivered on time. Additional security updates and fixes have also been included, which are explained below.

**What's New?**

-   New anti-spoof features have been added with the addition of Display Name anti-spoofing. Admins can now easily upload users' names and email addresses to protect them from display name spoofing. Another new feature is the ability for admins to enable anti-spoofing at the customer level. Moving between domains is easy, with admins being able to use a slideout panel to manage their domains and display name anti-spoofing.

    Admins will notice that anti-spoof settings are no longer located under the Domain overview page.

    ![ST-RelNotes.jpg](/docs-test/imported-assets/spamtitan-skellig/61768-spamtitan-release-notes/9643d7eb5f10.jpg)

-   FreeBSD 13 packages have been updated.

-   OS users can be enumerated using RCPT.

**What Has Been Improved?**

-   QR process improved so that quarantine reports are generated faster and more efficiently.

-   Fix added so that confirmation is required for quarantine report actions.

**What Has Been Fixed?**

-   Fix added so that domains are imported correctly.

-   Console password is now updating on multi-node cluster.

-   Vulnerability and security issues detected by GitLab's security scanners have been fixed.

-   Solution implemented to improve Amavis performance.

-   Internal metrics module disabled to improve st\_milter performance.

-   Bug fixed to enable correct results in Skellig History.

-   Virus Infection field data now populates correctly.

#### Skellig (9.06)

Skellig 9.06 consisted of performance enhancements with the upgrade of PHP to 8.3.

#### Skellig (9.05)

_Released July 2024_

SpamTitan Skellig 9.05 focuses primarily on performance, with improvements implemented at every level, including database requests, API requests, and UI requests. In the UI, admins will notice more efficient navigation in the History and Quarantine pages. With the addition of a slideout panel, admins no longer have to jump between pages to view email details.

**What's New?**

-   The new slideout panel on the History and Quarantine pages help admins to navigate emails more efficiently.

    ![ST-History-Slideout-Main.jpg](/docs-test/imported-assets/spamtitan-skellig/61768-spamtitan-release-notes/88d8dcae5bcf.jpg)

    Admins can move between emails in the list, and as each one is selected, the details are repopulated with the new data. This means that admins stay on the list and don't have to move between pages.

-   Quarantine reports are no longer generated for domains that do not have their MX records pointing to this Skellig cluster.

-   PostgreSQL settings have been tuned so that more frequent auto-vacuuming and auto-analysis is performed.

-   Marketing mails are blocked by default.

-   Admin is now prompted for confirmation when deleting a customer/domain/policy.

-   History and Quarantine tables show the From header address rather than the Envelope address.

-   Apache has been upgraded to 2.4.61.

-   Apache opcache is now enabled to improve performance.

-   Bulgarian language added.

**What Has Been Fixed?**

-   Resolved issue where SPF policy wasn't triggering when the 'From' header was missing.

-   Potential performance issues displaying Allow/Block lists were resolved.

-   Resolved issue where race condition could cause the nightly bulk update to fail, leaving postfix stopped.

-   Issue viewing source of DMARC quarantined mail in History was resolved.

-   Resolved issue where license usage report didn't count clean messages with content type 'M'.

-   Resolved issue where linklock scheduled reports would not get delivered when token was expired.

-   Issue has been fixed where Linklock exemptions at the customer level were not loading.

-   Refactored History/Quarantine queries to improve performance.

-   Issue resolved so that when editing antispoof settings at the domain level, users are not logged out.

-   Resolved issue where allowed IP and DMARC Quarantined emails show as duplicated 'Processing' mails in History.

-   Issue resolved so that Blocked IP emails are available in History.

-   Resolved issue for quarantine report types 'AX'.

-   Filtering by Quarantine on History page now shows correct results.

-   Issue regarding the Date/Range selector on History/Quarantine page now resolved.

-   Resolved issue where 'All MSPs' and 'All Customers' dropdown field only reflected data in the overview table.

-   Resolved issue where user could be logged out when viewing certain messages.

-   Correct SMTP response now being correctly displayed on the message details page.

-   Password validation error message now indicates that a number is required.

-   Resolved issue where message type pills on History/Quarantine pages contained variable names.

-   Sender (From) details now visible on message details page.

#### Skellig (9.04)

_Released March 2024_

New additions in Skellig 9.04 include the ability to multi-select emails that can be allowed or released from quarantine simultaneously, making this task faster and more efficient. There is also a new option for classifying marketing emails as spam when editing either a Domain or User policy.

Enhancements in this release include improved search capabilities in the History and Quarantine pages with search results being remembered across user sessions. Sort results in tables are also remembered, meaning you can leave a page or log out, and when you return, the results are still visible.

**What's New?**

-   On the Quarantine page, with the addition of multi-action functionality, admins can release or allow multiple emails at the same time.

    ![ST-SK-Multi-Select-Allow-Release-Options.jpg](/docs-test/imported-assets/spamtitan-skellig/61768-spamtitan-release-notes/b883bd193196.jpg)

-   When editing domain or user policies, admins can choose to have marketing emails classified as spam. Depending on the values entered in the Spam Filtering section, the marketing emails will then be quarantined, passed, or rejected.

    ![ST-SK-Marketing-Emails-Spam.jpg](/docs-test/imported-assets/spamtitan-skellig/61768-spamtitan-release-notes/0689adca3c1a.jpg)

**What Has Been Improved?**

-   The Search functionality in the History and Quarantine pages has been enhanced so that searches and the criteria used are preserved, even if you leave the page or log out.

-   You can now sort and filter data in tables and the results are remembered across MSP, Customer, Domain and User levels.

**What Has Been Fixed?**

-   An issue has been resolved so that when a Domain admin allows a message, the sender is added to the recipient's allow list.

-   Issue fixed for pattern filters so that they are editable without Apply to Headers selected.

-   When a pattern filter is created and a header is specified, the header is displayed in the edit screen view.

-   UI updated to show inclusion in spam score of two decimal places.

-   Packages updated for security vulnerabilities, including openssl.

-   On-demand report error fixed for user attempting to add an on-demand report.

-   Issued fixed for LinkLock where special characters caused some links to be written incorrectly.

-   Issue fixed so that Searching From Address correctly searches the From Email address.

-   Domain reports issue resolved so that they are now being generated.

-   Requesting a new report via the Link in Existing quarantine report now works.

-   Intermittent issue fixed where enabling LinkLock was failing for some customer accounts.

-   Clean emails no longer appear in quarantine.

-   Allow and Block List tables sort correctly.

-   Spam threshold value is now displayed correctly.

-   Up to 100 emails can be displayed per page on the History and Quarantine pages.

-   The number of users that can be displayed in the License Usage Report has increased from 10 to 1,000.

-   Clam AV upgraded to version 1.2.2.

![spamtitan-logo-small.jpg](/docs-test/imported-assets/spamtitan-skellig/61768-spamtitan-release-notes/ba6cca22d135.jpg)

#### Skellig (9.03)

_Released December 2023_

With Skellig 9.03 we've significantly enhanced our anti-spam processing, resulting in an expected increase in the spam catch rate for customers and providing event better security and protection.

**What's New?**

-   A dark, light and system mode option has been added to the Profile menu to give a logged in user options for their interface appearance. See [Selecting Dark or Light Mode](/docs-test/titanhq/products/spamtitan/docs/skellig-9/selecting-dark-or-light-mode/ "Selecting Dark or Light Mode").

**What Has Been Improved?**

-   Some of the new elements that we expect to improve our spam catch rate include:

    -   A poison detection mechanism to ignore irrelevant text in a mail.

    -   Character visual normalization. For example, including a "0" instead of an "o" won't fool SpamTitan.

    -   Enhanced IP, domain and URL reputation checks.

    -   Enhanced attachment filtering.

    -   Image filtering with Optical Character Recognition (OCR), logo and facial analysis technologies.

    -   Phone number filtering.

    -   Cryptocurrency wallet filtering.

-   The Processed Messages chart legend on the Dashboard has been reversed for clarity.

**What Has Been Fixed?**

-   Default field values are now displaying correctly when quarantine report is enabled in a new user policy.

-   The edit option on archived reports was available but not actionable, so has been removed.

-   Pagination numbers on the Scheduled Reports page are now displaying correctly.

-   Future dates are now greying out as expected on the advanced search filter in History and Quarantine.

-   An issue has been resolved so that the first input field is now the focus across all modals.

-   Emails are now deleting as expected from Quarantine when using the checkbox and Delete button.

![spamtitan-logo-small.jpg](/docs-test/imported-assets/spamtitan-skellig/61768-spamtitan-release-notes/ba6cca22d135.jpg)

#### Skellig (9.02)

_Released November 2023_

SpamTitan Skellig 9.02 sees the addition of IP allow and block list functionality to the MSP level as well as improvements to the navigation and interface.

**What's New?**

-   An MSP Admin can now add allowed or blocked IPs to their Allow & Block List. See [Global Allow & Block List](/docs-test/titanhq/products/spamtitan/docs/skellig-9/global-allow-block-list-57311/).

-   The MSP and Customer Overview pages have been enhanced to include quick actions and a graph detailing mail processing over time.

-   View ![view-icon-small.jpg](/docs-test/imported-assets/spamtitan-skellig/61768-spamtitan-release-notes/4f7d1bd09d2e.jpg)and edit ![edit-icon-small.jpg](/docs-test/imported-assets/spamtitan-skellig/61768-spamtitan-release-notes/61c7eed9145b.jpg) icons have been introduced to tables in a new _Actions_ column across SpamTitan.

    ![ST-SK-all-customers-table-actions-column.jpg](/docs-test/imported-assets/spamtitan-skellig/61768-spamtitan-release-notes/303464c10181.jpg)

    -   In the All Customers and All Domains tables, select the view icon to drill down to the customer or domain level.

    -   In all other tables, select the view icon to see more about a selected item or the edit icon to make changes to an item.

-   Changes have been made to how anti-spoofing is implemented in SpamTitan, with the notable changes summarized below. For more information, see Anti-Spoofing.

    -   An additional test has been introduced for additional spoofing detection, ANTISPOOF\_EMAIL\_ADDRESS.

    -   Anti-spoofing tests now check only local domains to help determine if someone is spoofing your own domain(s).

    -   All five anti-spoofing tests may trigger on a single email.

    -   Spam scores accumulate for each test that triggers on a single email.

    -   The ANTISPOOF\_DOMAIN\_FUZZY test has been renamed to ANTISPOOF\_FUZZY\_DOMAIN and ANTISPOOF\_NAME\_FUZZY has been renamed to ANTISPOOF\_FUZZY\_NAME.

**What Has Been Improved?**

-   A suite of updates has been made across SpamTitan to improve navigation and the availability of information. Some highlights include:

    -   Improvements to padding and spacing on all pages, making pages and tables more information dense.

    -   Navigation between levels using the view icon in the All Customers and All Domains tables.

    -   Column selections made to tables in History and Quarantine using the columns ![column-icon.jpg](/docs-test/imported-assets/spamtitan-skellig/61768-spamtitan-release-notes/264f4fd45b19.jpg) icon are now saved when you leave and return to a page.

-   You can now filter by customer (MSP level) or domain (Customer level) on the Quarantine page using a new collapsible Advanced Search component, which replaces the previous search form. This option is also available at on the History page at the MSP level.

    This component increases usability in both History and Quarantine, as more table space is visible and more information is presented to you.

    ![ST-SK-advanced-search-button.jpg](/docs-test/imported-assets/spamtitan-skellig/61768-spamtitan-release-notes/953866554c41.jpg)

**What Has Been Fixed?**

-   A number of Link Lock issues have been resolved in this release:

    -   An issue causing rewritten links in S/MIME signed emails to break has been fixed.

    -   A Link Lock issue that was leading to broken images in HTML emails has been resolved.

    -   Rewritten links contained in emails from Gmail addresses are no longer breaking.

-   First and last name entries are now saving correctly when edited in the user policy page.

-   Unusually long email addresses are now shortened on the Quarantine and History pages so column widths page layout are not distorted.

-   Account recovery codes are no longer visible in Security Settings after 2FA has been enabled, strengthening the login security.

-   Clean emails are no longer visible in Quarantine when Archive report is on.

-   We have fixed issues that have improved User policy management, providing a better user experience.

![spamtitan-logo-small.jpg](/docs-test/imported-assets/spamtitan-skellig/61768-spamtitan-release-notes/ba6cca22d135.jpg)

#### Skellig (9.01)

_Released July 2023_

We're delighted to announce the release of SpamTitan Skellig 9.01. This release adds functionality into the MSP level that focuses on minimizing effort to action and keeping the administrator's focus in a single location. The release also provides a wide variety of fixes and enhancements that bring stability and usability benefits.

**What's New?**

-   Both History and Quarantine functionality is now available at the MSP level, removing unnecessary navigation and allowing an MSP admin to view and act on all their customer mail without switching levels. See [History](/docs-test/titanhq/products/spamtitan/docs/skellig-9/history-65236/) and [Quarantine](/docs-test/titanhq/products/spamtitan/docs/skellig-9/quarantine-65238/).

-   Pattern Filtering is now available the MSP level, simplifying administration for an MSP admin by allowing them to ensure their customers are secure from one location. See [Pattern Filtering](/docs-test/titanhq/products/spamtitan/docs/skellig-9/pattern-filtering-65243/).

-   Link Lock inheritance behavior has changed with this release. Customers, domains and users now inherit Link Lock settings from their MSP level. This simplifies administration for an MSP admin, as it is no longer necessary to drill down to individual customers and domains to make Link Lock setting changes.

-   The One-Off report has been renamed to the On Demand report.

-   An option to hide message headers in the Quarantine mail view tab is now available.

-   An _Other Products_ page is now available at the MSP level bringing awareness to MSP administrators of the suite of products TitanHQ provide.

-   Performance improvements have been made on table loading times, pagination and filtering across the product.

-   An _Apply Filter_ button has been added to all Attachment Filtering tabs to apply any new and updated filters to mail.

-   Quarantine reports can now be requested through an API call by an administrator on behalf of a user.

**What Has Been Fixed?**

General

-   The Bitdefender software developer kit (SDK) has been upgraded to version 3.2.2.

-   A permissions bug with the Link Lock settings page that caused an issue when editing settings has been fixed.

-   An issue with all data not being included when a user is created has been fixed.

-   Issues with errors in MSP and Customer name entry have been resolved.

-   EncryptTitan allowed URLs that were missing from SpamTitan 9.00 have been re-added.

-   A rate control settings issue causing incorrectly formed “From” addresses in outbound mail has been fixed.

-   Emails with PNG attachments are no longer assumed to be a virus.

-   A permissions bug has been fixed so user level access is now limited to those with appropriate permissions.

-   Field labeling and example text has been improved throughout the UI.

-   SpamTitan passwords now adhere to Open Worldwide Application Security Project (OWASP) rules. New passwords must be a minimum of 12-characters (max. 64) and include one letter, one lower case character, one upper case character, a number and a symbol.

History & Quarantine

-   Quarantine reports can now be requested through API by an admin on behalf of a user.

-   An issue where RBL rejections were no longer appearing in History after removing DQS key is now fixed.

-   A bug causing mail released from quarantine to not display has been fixed.

-   Quarantine report settings page has default values in page drop down menus.

-   History and Quarantine views providing correct information when mail details not present.

-   In Skellig, when a mail is released from Quarantine it no longer remains there. This is now only visible in History.

-   Data is now appearing in the correct location on the History page.

-   Content Classification in email view is now showing the correct detail.

-   A problem when searching using parameter content-filter in Message Type attribute has been fixed.

-   An issue with deleted mail remaining visible in quarantine has been resolved.

-   An issue with some released mail not showing the UI has been fixed.

-   A cache issue where results were being returned when viewing quarantined mails has been solved.

Filtering

-   PPA attachment filter behavior is now consistent across account application levels.

-   An issue causing email containing an attachment that should be blocked with the selected setting, but were not, has been fixed.

Policies

-   The user policy updating process is now saving correctly.

-   First and last name entries are now saving correctly when edited in the user policy page.

-   The display name is now editable in a user policy.

-   A _Digest_ column is available on the User Policies page to show if the quarantine report setting is on or off for a user policy.

-   A number of issues with policy page permissions have been resolved.

-   Issues causing some user policies to not display have been resolved.

Reporting

-   An issue with appropriate download types being visible has been resolved.

-   A number of UI issues have been fixed meaning that the correct reports are now visible at the appropriate level and the report format is saving correctly at the customer and domain levels.

-   The License Usage Report now correctly has a frequency of only _Daily_ available.

Domain Level

-   Issue resolved allowing members of a domain to log in as domain administrator.

-   The left navigation dropdown menu has been updated to more easily navigate from the customer to domain level.

-   Username is no longer visible in left hand navigation dropdown when a user is selected on the domain overview page.

-   An issue preventing the editing of entries in the IP & Hostnames table on the Anti-Spoofing tab when configuring a domain has been resolved.

![spamtitan-logo-small.jpg](/docs-test/imported-assets/spamtitan-skellig/61768-spamtitan-release-notes/ba6cca22d135.jpg)

#### Skellig (9.00) Enhancements

_Released March 2023_

Following on from the launch of the new SpamTitan interface with our initial Skellig (9.0) release, this update brings a number of significant enhancements, including the introduction of pattern filters and the ability to test connectivity to a domain after it has been added.

**What's New?**

-   **Pattern Filtering** is now available at the Customer and Domain levels. You can create single or multi pattern filters, allowing you to block or allow emails based on filter rules. For more information, see [Pattern Filtering](/docs-test/titanhq/products/spamtitan/docs/skellig-9/pattern-filtering/).

-   You now have the ability to test connectivity to a domain you have added by **sending a test email**. This ensures your mail server is accepting email from SpamTitan before continuing with the remaining configuration. See [Test Connectivity to your Mail Server](/docs-test/titanhq/products/spamtitan/docs/skellig-9/test-connectivity-to-your-mail-server/).

-   You can now use the **Message View** tab in Quarantine or History to view an email as it looks in a user's inbox.

![spamtitan-logo-small.jpg](/docs-test/imported-assets/spamtitan-skellig/61768-spamtitan-release-notes/ba6cca22d135.jpg)

#### Skellig (9.00)

_Released December 2022_

![Skellig-small.jpg](/docs-test/imported-assets/spamtitan-skellig/61768-spamtitan-release-notes/0ed95947e2a1.jpg)

Skellig sees the launch of a newly designed, modern user interface for SpamTitan.

## In this Section

-   [Skellig (9.13)](/docs-test/titanhq/products/spamtitan/docs/skellig-9/spamtitan-release-notes-61768/)
-   [Skellig (9.12)](/docs-test/titanhq/products/spamtitan/docs/skellig-9/spamtitan-release-notes-61768/)
-   [Skellig (9.11)](/docs-test/titanhq/products/spamtitan/docs/skellig-9/spamtitan-release-notes-61768/)
-   [Skellig (9.10)](/docs-test/titanhq/products/spamtitan/docs/skellig-9/spamtitan-release-notes-61768/)
-   [Skellig (9.09)](/docs-test/titanhq/products/spamtitan/docs/skellig-9/spamtitan-release-notes-61768/)
-   [Skellig (9.08)](/docs-test/titanhq/products/spamtitan/docs/skellig-9/spamtitan-release-notes-61768/)
-   [Skellig (9.07)](/docs-test/titanhq/products/spamtitan/docs/skellig-9/spamtitan-release-notes-61768/)
-   [Skellig (9.06)](/docs-test/titanhq/products/spamtitan/docs/skellig-9/spamtitan-release-notes-61768/)
-   [Skellig (9.05)](/docs-test/titanhq/products/spamtitan/docs/skellig-9/spamtitan-release-notes-61768/)
-   [Skellig (9.04)](/docs-test/titanhq/products/spamtitan/docs/skellig-9/spamtitan-release-notes-61768/)
-   [Skellig (9.03)](/docs-test/titanhq/products/spamtitan/docs/skellig-9/spamtitan-release-notes-61768/)
-   [Skellig (9.02)](/docs-test/titanhq/products/spamtitan/docs/skellig-9/spamtitan-release-notes-61768/)
-   [Skellig (9.01)](/docs-test/titanhq/products/spamtitan/docs/skellig-9/spamtitan-release-notes-61768/)
-   [Skellig (9.00) Enhancements](/docs-test/titanhq/products/spamtitan/docs/skellig-9/spamtitan-release-notes-61768/)
-   [Skellig (9.00)](/docs-test/titanhq/products/spamtitan/docs/skellig-9/spamtitan-release-notes-61768/)
