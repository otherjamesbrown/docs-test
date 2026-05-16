---
title: "SpamTitan Release Notes"
description: "Imported from docs.titanhq.com"
---

> Source: [docs.titanhq.com](https://docs.titanhq.com/en/13161-spamtitan-release-notes.html)
> Product: SpamTitan
> Imported content type: docs_page
> Product stream: legacy

### SpamTitan Release Notes

Abstract

Read about the latest releases of SpamTitan and the new features and enhancements they provide.

The latest version of SpamTitan contains new features and enhancements that provide you with even better email security. To keep your SpamTitan solution as efficient as possible we recommend you update to the latest version, providing you with the very latest updates and fixes. You can do this for free today!

The release notes below outline the upgrades and improvements for each SpamTitan release.

-   If you are a SpamTitan Cloud customer (our shared cloud), your updates are managed automatically.
    
-   If you are a SpamTitan Gateway or SpamTitan Private Cloud customer, take a look at [Guidelines for Updating SpamTitan](https://docs.titanhq.com/en/10542-guidelines-for-updating-spamtitan.html "Guidelines for Updating SpamTitan") before you update.
    
    When you are ready, go to **System Setup** > **System Updates** to manage updates. See [System Update Settings](https://docs.titanhq.com/en/8939-system-update-settings.html "System Update Settings") for more information.
    

![spamtitan-logo-small.jpg](/docs-test/imported-assets/spamtitan-legacy/13161-spamtitan-release-notes/ba6cca22d135.jpg)

#### SpamTitan 8.03

**Released in April 2026**

**What's new?**

-   REST API: Admins can now generate real‑time quarantine reports for users through the enhanced quarantine report API endpoint. This update provides greater flexibility and control over when reports are created and how frequently they are retrieved—without requiring any action from end users.
    

**What has been improved?**

-   Quarantine report generation has been enhanced for improved performance and reliability.
    
-   Support for creating 4096‑bit DKIM keys has been added, aligning with existing REST API capabilities.
    
-   SMTP timeout thresholds have been reduced to improve handling of slow or degraded connections.
    
-   Anti-spoof detection and filtering logic has been strengthened for better protection.
    
-   Scanning accuracy for malicious PDF attachments has been improved.
    
-   Prometheus metrics collection can now be optionally disabled.
    

**What has been fixed?**

-   Security fixes include:
    
    -   Updated packages to include the latest security patches and enhancements.
        
    -   Implemented application‑level security fixes to strengthen overall system protection.
        
    
-   Bulk delete and block actions in quarantine now function as expected.
    
-   The Top Ten relay list now displays data correctly.
    
-   Resolved an issue that prevented adding multiple pattern filters.
    
-   Pattern filters no longer get reset when a domain is added to a domain group.
    
-   SASL configuration is now getting saved correctly.
    
-   Improved input validation for domain groups to prevent creation of duplicates.
    
-   SafeTitan and EncrypTitan IP addresses have been added to the global allow list.
    
-   Fixed an issue related to CSEUCKR encoding when viewing email content.
    
-   Rate Control policies now cluster correctly across nodes.
    
-   Geoblocking scheduled reports now run correctly.
    
-   Domain Summary report now displays accurate virus statistics.
    
-   Resolved an issue where the ClamAV update status appeared twice in the System Health Check.
    
-   Backups can now be imported without issues.
    
-   Unintended virus alert notifications are no longer sent.
    
-   Edits to outbound disclaimer text footers now save as expected.
    
-   DKIM signing settings now replicate instantly across all cluster nodes.
    
-   Archived reports can now be exported as text without errors.
    
-   Content filter updates now synchronize properly across cluster nodes.
    
-   CSV exports from message history now correctly handle quotation marks in subject lines and other fields.
    
-   Pattern filters now sync correctly across the cluster.
    
-   Multi‑delete actions for Alerts now function correctly.
    
-   Attachment file type filters now work as expected.
    
-   POP3 web authentication server addresses are now properly clustered.
    
-   Resolved an issue where LinkLock pages did not apply the custom colour scheme.
    
-   Missing Norwegian translations for quarantine reports have been added.
    
-   Corrected Dutch and German translations in quarantine reports.
    
-   Added missing French translations in quarantine.
    
-   Fixed message‑header classification to correctly identify whether an allow/block entry originates from global, domain, or user level.
    
-   Fixed outbound TLS client certificate configuration in clustered environments.
    
-   REST API: Added ability to identify false positives via the API.
    
-   REST API: Malformed UTF‑8 characters are now handled correctly in the mail‑queue endpoint.
    

#### SpamTitan 8.02

_Released September 2025_

**What has been improved?**

-   New and improved geoblocking database with optimized accuracy and performance.
    

**What has been fixed?**

-   Security fixes:
    
    -   Packages updated with the latest security fixes.
        
    -   Further application security hardening and security bug fixes.
        
    
-   Delete and block buttons are now working in SpamTitan Quarantine.
    
-   Backup import fixed.
    
-   Viewing enabled of windows-1256 encoded emails.
    
-   Issue fixed where some geoblocking and blocked TLD items were not getting populated in history.
    
-   Sandbox items now have their status updated in History.
    
-   German translation fixed in the Quarantine Report.
    
-   Resolved an issue where GeoBlocking Scheduled Reports were not running for domain groups.
    

#### SpamTitan 8.01

_Released March 2025_

SpamTitan 8.01 increases your organization's security in a number of ways.

**What's new?**

-   Built-in Web Application Firewall to provide additional protection against cross-site scripting and SQL injection amongst other attack vectors.
    
-   Sender Reputation management has been updated to provide a more complete analysis with more accurate detection of spam and clean senders.
    

**What has been improved?**

The following enhancements have been made to SpamTitan 8.01:

-   Display name anti-spoof logic matches that of SpamTitan 9 for consistency in results across SpamTitan implementations.
    
-   Domain anti-spoof logic focusses on local domains to help determine if someone is spoofing domain(s) you own.
    
-   Improved attachment, archive and document scanning.
    
-   Quarantine report links now need user confirmation to prevent automated link analyzers from following them.
    

**What has been fixed?**

-   Security fixes include:
    
    -   Packages updates with the latest security fixes.
        
    -   Backup security has been enhanced and performance improved.
        
    -   Numerous Application security fixes.
        
    
-   Mail no longer marked as 'sent to sandbox' in history when clean.
    
-   Sandboxing now working correctly with DMARC quarantined mail.
    
-   Users no longer receive blank quarantine reports.
    
-   Resolved an issue where Disclaimers may break attachments in emails.
    
-   ClamAV performance improvements when updating definitions has been resolved.
    
-   Issue fixed where geoblocking rules and exemptions were not getting clustered.
    
-   Virus name now getting populated in history.
    
-   Spam NDRs no longer sent for internal email.
    
-   Single Quote problem with Quarantine Reports is resolved.
    
-   Issue fixed where LinkLock scheduled reports were not delivered when a token was expired or invalid.
    
-   An issue causing rewritten links in S/MIME signed emails to break has been fixed.
    
-   REST-API: Dynamic Recipient Verification Server not being replicated to all nodes.
    

![spamtitan-logo-small.jpg](/docs-test/imported-assets/spamtitan-legacy/13161-spamtitan-release-notes/ba6cca22d135.jpg)

#### SpamTitan 8.00 (ISO)

_SpamTitan Gateway 8.00 - Released May, 2023._

SpamTitan 8.00 is now available for Gateway customers, bringing an improvement in the underlying operating system to FreeBSD 13.1 as well as several bug fixes and security upgrades. SpamTitan Gateway 8.00 provides a stronger defense against evolving threats, ensuring the utmost protection for your critical data and communication channels.

For existing SpamTitan Gateway customers, the 8.00 ISO can be used as part of an upgrade strategy. See [SpamTitan Gateway 7.13 to 8.00 Upgrade Path](https://docs.titanhq.com/en/63616-spamtitan-gateway-7-13-to-8-00-upgrade-path.html "SpamTitan Gateway 7.13 to 8.00 Upgrade Path").

![spamtitan-logo-small.jpg](/docs-test/imported-assets/spamtitan-legacy/13161-spamtitan-release-notes/ba6cca22d135.jpg)

#### SpamTitan 8.00

_Hotfix (8.00.46), released September 2023_

This hotfix introduces changes to how the anti-spoofing functionality works in SpamTitan, with the notable changes summarized below. For more information, see [Anti-Spoofing](https://docs.titanhq.com/en/66110-anti-spoofing.html "Anti-Spoofing").

-   An additional test has been introduced for additional spoofing detection, ANTISPOOF\_EMAIL\_ADDRESS.
    
-   Anti-spoofing tests now check local domains _only_ to help determine if someone is spoofing your own domain(s).
    
-   All five anti-spoofing tests may trigger on a single email.
    
-   Spam scores accumulate for each test that triggers on a single email.
    
-   The ANTISPOOF\_DOMAIN\_FUZZY test has been renamed to ANTISPOOF\_FUZZY\_DOMAIN and ANTISPOOF\_NAME\_FUZZY has been renamed to ANTISPOOF\_FUZZY\_NAME.
    

_Released August, 2022._

Our 8.00 release includes some fixes, but it primarily provides internal enhancements to SpamTitan by moving to FreeBSD 13.0.

**What has been fixed?**

-   Top Geoblocked Countries column now appearing in the relevant view, and not independent of context.
    
-   Generated time on SpamTitan reports no longer incorrect.
    
-   Quarantine and History pages loading correctly for multibyte charset corner case.
    
-   Color scheme on the Link Lock services tab is no longer hard coded.
    
-   Sundry security vulnerabilities have been resolved.
    
-   A number of items have been fixed in relation to SpamTitan APIs:
    
    -   Behavior of API for domain management aligned to documentation.
        
    -   Domains getting managed and replicated correctly through API.
        
    -   Modification of allow/block rule by API no longer causes parameter reset.
        
    -   The History API response no longer includes outbound mails.
        
    -   A corner case where User's API was returning a 500 error is resolved.
        
    -   Block list insertion and deletion through API is resolved.
        
    

![spamtitan-logo-small.jpg](/docs-test/imported-assets/spamtitan-legacy/13161-spamtitan-release-notes/ba6cca22d135.jpg)

#### SpamTitan 7.13

_Released April, 2022_

SpamTitan 7.13 increases your organization's security in a number of ways. Our SpamTitan Plus service gets new reporting and block-page features, while you now have the option of additional protection against phishing attacks through URL direction. SpamTitan anti-spoof security has also been enhanced with additional tests to help protect against impersonation. On top of this, we include numerous other improvements and fixes to different areas of the SpamTitan application.

### Note

Link Lock is an enhancement to SpamTitan and is available after the purchase of a SpamTitan Plus license. If you wish to purchase a SpamTitan Plus license, please contact your Account Manager or email [sales@titanhq.com](mailto:sales@titanhq.com).

**What's new?**

-   New reports are now available to provide you with Link Lock data. From these reports, you will be able to understand the volume of links clicked that were assessed as malicious, the people who clicked on the links and the domain(s) that sent them.
    
-   Your Link Lock block page can now be customized to include your own logo, header and messaging.
    
-   Customers can now opt to have Link Lock follow redirected URLs, protecting against the commonly used phishing technique of URL redirection.
    

**What has been improved?**

The following enhancements have been made to SpamTitan Anti-Spoofing:

-   Anti-spoof logic now uses alternative _To_ header when mime encoded _To_ is not populated.
    
-   ANTISPOOF\_NAME now supports UTF8 encoding.
    
-   White space is being correctly handled in the display name for Anti-Spoof.
    
-   Fuzzy matching deals with display names more accurately.
    
-   Display name spoofing applies to more than just the _To_ header attribute.
    
-   Anti-spoof now ensures that the _CC_ header is checked if items are present and fuzzy matching is applied if necessary.
    
-   Variables modified to ensure Anti-spoof attributed values in a fuzzy match are correctly considered during rule assessment logic.
    
-   ANTISPOOF\_NAME triggering correctly for name-spoofed mails.
    
-   Anti-spoof logic is enhanced to achieve some performance benefits.
    
-   Fuzzy matching score increased to ensure the rule has impact.
    

The following improvements have been made to Link Lock:

-   Multiple issues causing broken URLs have been resolved.
    
-   Improved handling of URLs related to certain chars, including '|', space & Unicode.
    
-   Improved how Link Lock aproaches URLs in HTML <a> and <base> tags.
    
-   Enhanced our URL processing to use a more accurate system for parsing URLs.
    
-   Links in inline RTF content types are now being rewritten.
    
-   We now verify that links within the sender field are processed.
    
-   Links in the subject header are now rewritten.
    
-   Multipart emails are now being managed correctly.
    
-   Additional space being consumed in the mailog by Link Lock errors has been freed up.
    
-   Link Lock API improvements:
    
    -   Removed an issue whereby it was possible to add duplicate entries on the Global Allowed URLs table.
        
    -   API documentation correction to include the number of results returned per page.
        
    -   API documentation that referred to the functionality as LinkL ink updated to Link Lock.
        
    

**What has been fixed?**

-   Security fixes:  
    
    -   libSPF2 vulnerability removed: [CVE-2021-33912](https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2021-33912), [CVE-2021-33913](https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2021-33913).
        
    -   Removed potential for CSV injection vulnerability in the History page.
        
    
-   New rules were pushed out to manage spam mails.
    
-   The _impersonate.php_ roletype parameter has been sanitized and now checks and validates for correct input.
    
-   Duplicate domain entries can no longer be created by the API.
    
-   IPv6 default route is now stored so that it's picked up after a restart.
    
-   RAR files with an EXE file extension are now being blocked when set to 'blocked' within archives.
    
-   History page loading correctly as a multibyte character issue is now being more gracefully handled.
    
-   Link Lock is now rewriting links in emails where the original length is greater than the rewritten length.
    
-   Encoded subject lines containing a URL no longer get stuck in the mail queue.
    
-   Scheduled Domain Summary and Group Summary reports in text format are now sending as expected.
    
-   Mail history export is now showing the correct TLS value when both inbound and outbound channels are encrypted.
    

![spamtitan-logo-small.jpg](/docs-test/imported-assets/spamtitan-legacy/13161-spamtitan-release-notes/ba6cca22d135.jpg)

#### SpamTitan 7.12

_Released December 2021_

**What's new?**

-   SpamTitan now includes Link Lock, which provides protection against phishing, business email compromise, and zero day attacks by removing the possibility of a user clicking on a malicious link in an email. SpamTitan does this by rewriting all links in every email. Subsequently, when a link is clicked, SpamTitan can verify if the destination URL is safe or malicious. If the link is malicious, the user is presented with a block page indicating that there is a security risk.
    
    With Link Lock, links always remain rewritten, ensuring that if a malicious email is forwarded to other employees within your company, or to other firms with which you do business, those recipients are also protected. Links are checked in real-time once clicked.
    
    SpamTitan allows you to exclude URLs from Link Lock by adding them to an allowed URLs list, which can be done at the global, domain and user levels. See [Link Lock](https://docs.titanhq.com/en/30209-link-lock.html) for more information.
    
    Link Lock is an enhancement to SpamTitan and is available after the purchase of a SpamTitan Plus license. If you wish to purchase a SpamTitan Plus license, please contact your Account Manager or email [sales@titanhq.com](mailto:sales@titanhq.com).
    

**What has been improved?**

-   Geoblocking enhancement: additional countries added.
    
-   Omission of ‘spam\_tag’ in API documentation corrected.
    
-   Improved API sorting functionality.
    

**What has been fixed?**

-   OVA file configuration issue.
    
-   Typos and similar changes that were reported.
    
-   DKIM signed mails following the correct redirect path.
    
-   Removed quarantine report recipient issues.
    
-   Fixed issue with quarantine report scheduling.
    
-   QR reports broken in nightly tests.
    
-   API vulnerabilities patched.
    
-   Resolved SpamTitan Outlook Add-In allow list error.
    
-   Recipient Verification synchronization across clusters.
    
-   DB housekeeping fixes.
    
-   SpamTitan anti-virus rate limiting issue fixed.
    
-   Quarantine report scheduling issues resolved.
    
-   UI bug on User Policy page, Global Policies page, Allow Lists, solved.
    
-   Potential Mac vulnerability from email attachments mitigated.
    
-   Geoblocking: pagination problems fixed.
    
-   Geoblocking: domain matching bug resolved.
    
-   AV binaries updated to the latest.
    
-   API sorting issue resolved.
    
-   Internal packages updated to the latest versions.
    

![spamtitan-logo-small.jpg](/docs-test/imported-assets/spamtitan-legacy/13161-spamtitan-release-notes/ba6cca22d135.jpg)

#### SpamTitan 7.11

_Released September 2021_

**What's new?**

-   SpamTitan now includes Geoblocking, allowing you to restrict email based on a sender's geographic location. Our Geoblocking functionality enables you to define rules that allow you to restrict email from a selected country. It also allows exemptions to geoblocking rules in order to exclude mail based on a sender's IP, domain, or email address.
    
    Geoblocking can be enabled or disabled at a global level and once enabled, it can be managed at the admin, domain group, domain, and user levels. See [Geoblocking](https://docs.titanhq.com/en/29111-geoblocking.html) for more information.
    

**What has been improved?**

-   The Bitdefender software developer kit (SDK) has been upgraded to version 3.0.1, offering improvements to sandboxing and pre-filtering.
    
-   Country names have been reviewed and updated for user selection options, including geoblocking, top virus category, and spam relays.
    
-   Email rendering in Mail Viewer has been improved to address formatting issues.
    
-   The quarantine report token expiry can now be disabled.
    
-   OCR (Optical Character Recognition) has been removed as an Anti-Spam Engine setting due to the large number of false positives being generated.
    
-   Score filtering support has been added inside History and Quarantine API calls.
    
-   Domain verification is now available for a more secure experience, allowing you to verify domains with either a change to your MX records or by email. See [Domain Verification](https://docs.titanhq.com/en/29261-domain-verification.html) for steps to enable domain verification.
    

**What has been fixed?**

-   An issue with uppercase letters in admin emails that were causing role assignment replication to fail is fixed.
    
-   Users can now release quarantined emails with the _&_ symbol in the sender's email.
    
-   An issue causing some users to be unable to view quarantined emails in a cluster is resolved.
    
-   Mail viewer is now displaying emails with duplicate headers correctly.
    
-   An issue with user role permissions in a cluster environment has been resolved.
    
-   API POST to SASL now updating on cluster peer nodes.
    
-   The API call to update Trusted Network is now replicating to peer cluster nodes correctly.
    
-   Improved security in the UI and API.
    
-   An issue with broken multibyte characters causing problems inside the mail viewer is fixed.
    
-   A 500 Error is no longer been given when trying to delete multiple IP controls.
    
-   RAR5 type attachments are now being unpacked correctly.
    
-   IP Aliases are now being correctly stored in configuration files for all cases.
    
-   A domain administrator can now see outbound email details in the history log.
    
-   Empty _X-Envelope-From_ headers are now displaying correctly.
    
-   Sandbox mail is no longer appearing as undefined.
    
-   Sandbox delivery status no longer displaying _Blocked OTHER_ on a released sandbox mail.
    
-   Email addresses with multiple _@_ symbols are now being handled correctly.
    
-   2FA is now working correctly for some users who were experiencing an issue.
    
-   Blocked mail counting towards deleted mails in the quarantine report _Delete All_ link on a single node instance has been corrected.
    
-   Fixed 500 error when updating domain policy via API.
    
-   Issues with the API Pattern Filter creating filters for Domains and Domain Groups is resolved.
    
-   Updated or deleted user roles are now replicated to all clustered nodes.
    
-   Where an email can not be sent to a license owner, Let's Encrypt is no longer producing a 500 error.
    
-   When an allow list entry is deleted, and that entry had _include\_subdomains_ set, that deletion propagates through a cluster.
    
-   The correct content type is now being returned for emails from other nodes in a cluster.
    
-   Cluster replication of the PUT API call to _restapi/users/policy_ with sandbox param failing is resolved.
    
-   Cluster replication of PUT API call to _restapi/outbound/smarthost/sender/_ not working is resolved.
    
-   Access Control vulnerabilities have been removed from the Domain Admin configuration and the SpamTitan API.
    
-   Cross-site scripting vulnerabilities have been removed.
    
-   Privilege escalation vulnerabilities on User, Domain Admin, and Domain Group Admin account levels have been removed.
    
-   Removed an LDAP Authentication Bypass vulnerability (reported by Cedric Van Bockhaven, Deloitte).
    
-   Removed an SQL injection vulnerability (reported by Cedric Van Bockhaven, Deloitte).
    
-   Removed a code execution vulnerability in the backup process (reported by Cedric Van Bockhaven, Deloitte).
    

![spamtitan-logo-small.jpg](/docs-test/imported-assets/spamtitan-legacy/13161-spamtitan-release-notes/ba6cca22d135.jpg)

#### SpamTitan 7.10

_Released April 2021_

SpamTitan 7.10 includes some new additions and improvements, but it is primarily a security and bug fix release that really strengthens the product, making it even more solid and secure.

**What's new?**

-   You can now view if users have Two-Factor Authentication enabled or not in **Anti-Spam Engine** > **User Policies**. This allows admins to easily view at a glance which users need to enable 2FA. See [Two-Factor Authentication](https://docs.titanhq.com/en/10744-two-factor-authentication.html "Two-Factor Authentication").
    
    ![ST-user-policy-list\_censored.jpg](/docs-test/imported-assets/spamtitan-legacy/13161-spamtitan-release-notes/1dfc84e0c4ca.jpg)
    
-   Older versions of TLS can now be enabled or disabled separately in **Settings** > **TLS**. See [Enabling TLS](https://docs.titanhq.com/en/8986-enabling-tls.html "Enabling TLS").
    
-   Weak TLS ciphers can now be enabled or disabled in **Settings** > **TLS**. See [Enabling TLS](https://docs.titanhq.com/en/8986-enabling-tls.html "Enabling TLS").
    

**What has been improved?**

-   Dashboard and reporting graphs have been enhanced.
    
-   The Mail History log performance has been improved, with now nearly instantaneous updating on servers with high traffic.
    
-   The PHP framework version has been updated to resolve some security vulnerabilities.
    

**What has been fixed?**

Security fixes

-   Security patches have been included for the following packages that address a number of vulnerabilities:
    
    -   OpenSSL: [CVE-2021-23841](https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2021-23841), [CVE-2021-23840](https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2021-23840), [CVE-2020-1971](https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2020-1971)
        
    -   Sudo: [CVE-2021-3156](https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2021-3156), [CVE-2021-23239](https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2021-23239)
        
    -   Python: [CVE-2020-15801](https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2020-15801), [CVE-2020-15523](https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2020-15523), [CVE-2020-14422](https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2020-14422)
        
    -   PHP: [CVE-2021-21702](https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2021-21702), [CVE-2020-7071](https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2020-7071), [CVE-2020-7070](https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2020-7070), [CVE-2020-7069](https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2020-7069)
        
    
-   An SQL injection vulnerability that may have caused the database to come down is resolved.
    
-   A potential Cross-Site Scripting (Reflected) vulnerability when viewing mail is fixed.
    
-   An authenticated SQL injection vulnerability on the Quarantine page is resolved.
    
-   Issues with link management in quarantine reports are fixed.
    
-   Domain group admins being unable to view some mails is now resolved.
    
-   A cross-site scripting (XSS) vulnerability caused by an invalid content-type is fixed.
    
-   An insecure direct object reference (IDOR) vulnerability in Filter Rules is resolved.
    
-   Unauthenticated access to generated graphs is no longer allowed.
    
-   An issue allowing any unauthenticated user to retrieve a list of log files is resolved.
    
-   A command injection vulnerability in the DNS lookup tool is resolved.
    

Fixes

-   Mail previewing in Quarantine and Mail History has been improved.
    
-   An issue with the Lets Encrypt automatic certificate renewal process is resolved.
    
-   The processing of large mail queues in the UI had issues that are now resolved.
    
-   Improved support for Unicode characters inside Outbound Disclaimers editors.
    
-   Missing settings have been added to the backup.
    
-   Can now set a user's first name or last name to an empty string via API after it has been set.
    
-   Issues with the AntiSpoof plugin are resolved.
    
-   Invalid certificate handling is improved.
    
-   An issue deleting a domain that was added by API and could not be deleted in the UI is fixed.
    
-   The correct number of entries now showing in allow list and block list.
    
-   CPU temperature on the dashboard now correctly calculating and displaying.
    
-   Performance is improved when importing a large list to allow lists and block lists that contain existing entries.
    
-   Minor API issues related to caching and incorrect return values are now resolved.
    
-   An issue with generating pattern filter meta-rules is fixed.
    
-   Inconsistent memory usage statistics between the Dashboard and Reporting page are now consistent.
    
-   An issue with some cases of Amazon S3 backups failing has been resolved.
    
-   A system health check issue causing it to fail for slower SMPT servers is fixed.
    
-   An ampersand issue with SASL LDAP queries is now resolved.
    
-   A trusted network sometimes not replicating across a cluster is now working.
    
-   An issue where the removal of LDAP recipient verification for a domain sometimes led to MTA misconfiguration is resolved.
    
-   An issue causing Read Mails permission to not be disabled in some cases has been fixed.
    
-   The anti-spoof settings issue with mass editing and saving not working properly is resolved.
    
-   Relay Denied is now correctly logging in Report History.
    

![spamtitan-logo-small.jpg](/docs-test/imported-assets/spamtitan-legacy/13161-spamtitan-release-notes/ba6cca22d135.jpg)

#### SpamTitan 7.09

_Released: September 2020_

**What's new?**

-   SpamTitan can now generate Let’s Encrypt certificates. This allows customers to deploy free, trusted and secure certificates and will also support automatic renewal.
    

**What has been improved?**

-   The terms Whitelist and Blacklist have been replaced with Allow List and Block List.
    
-   The terms Master/Slave have been replaced with Primary/Secondary.
    
-   Improve performance for large mails in the SpamTitan milter.
    
-   Backups are now encrypted to prevent tampering. Encrypted backups can't be tampered with or deleted.
    
    -   Thank you to Miroslaw Menard and Felipe Molina for reporting the security vulnerability.
        
    

**What has been fixed?**

-   A number of issues with sandboxing have been fixed:
    
    -   Sandboxed mail can now be released, as expected, assuming the user/admin has the rights to release a virus.
        
    -   Sandboxed mail automatically release if they fail to process up to 5 times.
        
    -   Sandboxed mail now scans all attachments in parallel.
        
    
-   Fixed issues with backups.
    
-   Fixed regressions introduced in 7.08.
    

![spamtitan-logo-small.jpg](/docs-test/imported-assets/spamtitan-legacy/13161-spamtitan-release-notes/ba6cca22d135.jpg)

#### SpamTitan 7.08

_Released: May 2020_

**Fixed Vulnerabilities**

-   [CVE-2020-24046](https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2020-24046): Restricted shell escape through a manipulated backup file.
    
-   [CVE-2020-24045](https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2020-24045): Restricted shell escape through a fake VMWare ISO.
    
-   [CVE-2020-11804](https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2020-11804): Improper sanitization of the _quid_ mail queue parameter.
    
-   [CVE-2020-11803](https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2020-11803): Improper sanitization of the _jaction_ mail queue parameter.
    
-   [CVE-2020-11700](https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2020-11700): Improper sanitization of certificates parameter allowing retrieval of arbitrary files.
    
-   [CVE-2020-11699](https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2020-11699): Improper sanitization on certificates page allowing execution of code.
    
-   [CVE-2020-11698](https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2020-11698): Improper sanitization on SNMP page that could allow attacker gain root shell.
    

**What's new?**

-   Two-factor authentication (2FA) is now available in SpamTitan. This adds a layer of protection by denying access with just a password. Go to **Settings** > **User Management** > **Two-Factor Authentication (2FA)** to enable 2FA.
    
-   An option is now available to reject SPF failures when a DMARC policy is set to _none_.
    
-   The following endpoints have been added to the SpamTitan API set:
    
    -   history search/trace
        
    -   support connection management
        
    -   license management.
        
    
    See [api-spamtitan.titanhq.com](https://api-spamtitan.titanhq.com/) for more information on SpamTitan APIs.
    

**What has been improved?**

-   The spam catch rate has improved with an update to the spam rulesets. This also helps reduce false positives.
    
-   Quarantined emails can now be retrieved using SpamTitan APIs.
    

**What has been fixed?**

-   No longer re-enable Spam/Virus/Banned checking when fixing license issues if they were previously disabled.
    
-   Resolved issue where rate controls rules for internal networks may not work correctly.
    
-   Fix regression: updating the admin password now updates the CLI password again.
    
-   Two input sanitization vulnerabilities described above (_reported by Felipe Molina de la Torre_).
    

![spamtitan-logo-small.jpg](/docs-test/imported-assets/spamtitan-legacy/13161-spamtitan-release-notes/ba6cca22d135.jpg)

#### SpamTitan 7.07

_Released: March 2020_

**What's new?**

-   Quarantine reports are now available in Hungarian.
    

**What has been improved?**

-   The SpamTitan Outlook Plugin has been updated to version 3.2.0.
    
-   The minimum password length for new passwords is now 10 characters.
    
-   ClamAV has been updated to 0.102. This resolves a denial-of-service vulnerability ([CVE-2019-15961](https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2019-15961)) which may occur when scanning a specially crafted email file resulting in excessively long scan times.
    
-   Include security patches for packages including OpenSSL ([CVE-2019-1551](https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2019-1551)), PHP, Sudo ([CVE-2019-18634](https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2019-18634)), file ([CVE-2019-18218](https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2019-18218)) and SpamAssassin ([CVE-2020-1931](https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2020-1931)).
    

**What has been fixed?**

-   The correct rule name for pattern filters with headers containing a colon is now being generated.
    
-   API issue where a license report could produce an error.
    
-   LDAP recipient verification ignoring the port being used.
    
-   API issue updating a user role.
    
-   API issue requesting quarantine items from clustered appliances.
    
-   Impersonating doesn't change the active user for API requests, allowing the RestAPI tokens to be visible.
    
-   Resolved issue which prevented the option to mark clean archived messages as spam.
    
-   False positives issues with anti-spoofing.
    
-   Sandboxed messages not being allowed to release from quarantine.
    
-   The output of the tools command was not displayed until the command had completed.
    
-   Resolved issue where the logo may appear twice on quarantine reports.
    
-   Additional cookie security attributes are now applied to prevent session stealing.
    
-   Quarantine API endpoint issue where the start date was being ignored.
    
-   Empty report for a cluster in the Domain Group Summary report.
    
-   Potential persistent XSS vulnerability when uploading a new logo.
    
-   Potential reflected XSS vulnerability with certain cookie values.
    
-   Potential reset of database time zone setting on reboot.
    
-   Issue of adding domains via the API which were specified with round-robin destination servers.
    

![spamtitan-logo-small.jpg](/docs-test/imported-assets/spamtitan-legacy/13161-spamtitan-release-notes/ba6cca22d135.jpg)

#### SpamTitan 7.06

_Released: November 2019_

**What's new?**

-   This release sees the introduction of the new RestAPI for SpamTitan. See [api-spamtitan.titanhq.com](https://api-spamtitan.titanhq.com/) for full details.
    
-   You can now filter email addresses when using list-based recipient verification.
    

**What has been improved?**

-   Included security patches for packages including OpenSSL, OpenSSH, PHP, ClamAV and Sudo.
    
-   Disabled support for SSLv3 and disabled weak ciphers.
    
-   Patches, spam rule updates and hotfixes are now retrieved over HTTPS.
    

**What has been fixed?**

The following issues have been resolved in this release:

-   Rate controls not tracking the correct email address.
    
-   Domain group pattern filters not adding to the correct domain group if the domain group admin is an admin for two or more domain groups.
    
-   From Name impersonation may falsely trigger.
    
-   Issue generating domain summary reports.
    
-   The issue with importing list recipients.
    
-   Issue generating quarantine reports in the correct language.
    
-   Potential issue generating quarantine reports in a clustered environment.
    
-   Issue viewing pattern filters that included meta-rules.
    
-   Rate control notification issues.
    
-   Emails in Russian may be marked as executables and blocked as banned attachments.
    
-   Issue delivering multiple daily scheduled reports.
    
-   A cosmetic issue where UI OLEMacro option would specify 'Nothing' when actually set to 'Send to Sandbox'.
    
-   An issue with allowed IPs when IP is also listed in Trusted networks.
    
-   An issue with per-domain attachment filtering.
    
-   Bitdefender daemon potentially consuming 100% CPU.
    

![spamtitan-logo-small.jpg](/docs-test/imported-assets/spamtitan-legacy/13161-spamtitan-release-notes/ba6cca22d135.jpg)

#### SpamTitan 7.05

_Released: July 2019_

**What's new?**

-   A user's full name can now be added to their policy, allowing for the prevention of impersonation attacks.
    
-   Pass and Tag Banned Attachments can now tag the subject.
    
-   ClamAV Link Detection using Google's Safe Browsing database is now included. This adds a score of 3 to any email with a link on the Safe Browsing database.
    

**What has been improved?**

-   You can now search the trusted networks table by using the comment field.
    
-   Address shortening for Quarantine Reports is now disabled by default and can be enabled by Support.
    
-   Future patches (starting in SpamTitan 7.06) will only be allowed to install if all nodes in a cluster are capable of installing the patch.
    
-   Punycode support to allow and block lists for IDNAs.
    
-   The anti-spoof tool now triggers - with a reduced score - on similar domains that aren't exact matches (fuzzy matching).
    

**What has been fixed?**

-   Rate Controls no longer cause a large spike in CPU usage.
    
-   Display of the anti-spoofing page in French.
    
-   Outbound mail with no envelope from (bounce back mail) will now be DKIM signed.
    
-   Fixed issue where SPF rejection wasn't working if DMARC compliance was disabled.
    
-   Fixed issue where SPF best guess was applying even if DMARC compliance was disabled.
    
-   Quarantine report tokens were being invalidated too early.
    
-   Tagged subjects in non-UTF8-compliant languages such as Japanese, Chinese or Arabic were being rewritten as question marks.
    
-   Performance of domain management.
    
-   Deleting domains via API took a long period of time.
    
-   Clusters with a large number of domains across a large number of nodes were slow to finish licensing.
    
-   Releasing issue on a sandboxed file for multiple recipients.
    
-   Issue when adding an IPv6 address to internal networks.
    
-   The anti-spoof tool occasionally stops triggering.
    
-   Importing a list of aliases by file now converts to lowercase before importing.
    
-   If block list is enabled in the header, the block list button now properly adds to the block list.
    
-   Quarantine report footer text may display twice.
    
-   Filtering history issue with a subject containing an apostrophe.
    

![spamtitan-logo-small.jpg](/docs-test/imported-assets/spamtitan-legacy/13161-spamtitan-release-notes/ba6cca22d135.jpg)

#### SpamTitan 7.04

_Released: March 2019_

**Fixed Vulnerabilities**

-   [CVE-2019-6800](https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2019-6800): the hotfix mechanism using the HTTP protocol rather than HTTPS. _Reporting credit: Patrik Forslind, Sentor SOC_.
    

**What's new?**

-   With this release, we introduced sandboxing. SpamTitan can now detect if an attachment needs to be sandboxed. If it does, SpamTitan will put the mail on hold while it tests each attachment in a sandboxed environment.
    
-   SpamTitan now supports DMARC conformance and reporting. Mail will be DMARC tested and will be quarantined/rejected according to the DMARC policy. Reports will be sent daily.
    
    -   Mail released from DMARC quarantine will then go through the standard anti-spam process and may be returned to quarantine.
        
    -   Mail quarantined by DMARC will not appear in Quarantine Reports by default. This can be enabled under Quarantine > Settings > Advanced.
        
    
-   SpamTitan now supports ARC signing and authentication of inbound mail.
    

**What has been improved?**

-   Spam mail released from Quarantine will be re-scanned for a virus upon release, and thus may be re-quarantined (if containing a virus).
    
-   Future updates (after 7.04) will have a confirmation popup when attempting to install.
    
-   Archive clean mail has been modified to Archive mail; Pass and tagged mail will now be quarantined as well if Archive Mail is enabled, in addition to being delivered.
    
-   Very long email addresses now get shortened in quarantine reports.
    
-   If the Quarantine Report subject contains %u, the %u will be replaced with the recipient's email address.
    

**What has been fixed?**

-   Fixed issue where domains still get a relay denied after adding them to the system.
    
-   CVE-2019-6800: vulnerability with hotfix mechanism using HTTP protocol rather than HTTPS.
    

![spamtitan-logo-small.jpg](/docs-test/imported-assets/spamtitan-legacy/13161-spamtitan-release-notes/ba6cca22d135.jpg)

#### SpamTitan 7.03

_Released: January 2019_

**What's new?**

-   Resetting the password of the system admin account will send the new password to the email address on the license.
    

**What has been improved?**

-   Ignoring a line using a content filter will now be logged.
    
-   The global and domain group interface has been updated to manage antispoof settings.
    
-   If you add an alias entry that does not contain the primary email address as an alias, SpamTitan now automatically adds the primary email address as an alias.
    

**What has been fixed?**

-   Reporting of errors for greylisting Sender Name Exemptions.
    
-   An issue where if a user has a user policy, they can now request a password using the "Forgot my password" feature.
    
-   Fixed issue where adding a top-level administrator failure makes the "Role" dropdown empty.
    
-   Quarantine reports no longer show 'too many items to display' when they do not have too many items to display.
    
-   Email quarantined as spam for one recipient, but marked as clean for another, no longer prevents the message from being released.
    
-   'Include Subdomains' not toggling when editing multiple allow and block list entries.
    
-   LDAP auth settings are now being saved properly.
    
-   Clustering display issue with Internal Networks table.
    
-   Editing a pattern filter causes it to not take effect immediately.
    
-   Reject Unknown Sender Domain not being recorded in statistics.
    
-   Backups missing data.
    
-   LDAP SASL Authentication not using email addresses.
    
-   Editing banned attachment rules.
    
-   Issue disabling banned attachments globally.
    
-   Display issue for banned items in quarantine reports.
    

![spamtitan-logo-small.jpg](/docs-test/imported-assets/spamtitan-legacy/13161-spamtitan-release-notes/ba6cca22d135.jpg)

#### SpamTitan 7.02

_Released: November 2018_

**What's new?**

-   Attachment filters can now be managed on a per domain-group and per-domain basis.
    
-   Pattern Filters have been improved and you can now:
    
    -   manage pattern filters on a per domain-group and per-domain basis.
        
    -   define a score for your pattern filters.
        
    -   create pattern filters without having to use regular expressions.
        
    -   create meta-rule pattern filters which allow you to create a pattern filter that triggers on multiple rules.
        
    
-   You can now restrict roles from reading mail in the History and Quarantine tabs.
    
-   ClamAV has additional features:
    
    -   Third-Party Databases - Allows ClamAV to utilize additional databases such as YARA and Sanesecurity to block viruses.
        
    -   Block OLE Macros - Allows ClamAV to block all .doc and .xls files with OLE macros.
        
    
-   A domain admins can now specify valid locations to receive mail from to prevent From: header spoofing.
    
-   You can now block IPs if they are in the Top 10 Virus or Spam relays.
    
-   Client certificates can be sent to servers that request it from SpamTitan.
    
-   Senders can now be blocked from your quarantine reports. This option needs to be turned on in **Quarantine** > **Settings** > **Advanced**.
    

**What has been improved?**

-   Content Filtering can now be searched.
    
-   Content Filter that triggered on the mail is now displayed on the Mail Details page.
    

**What has been fixed?**

-   You can no longer add an alias IP that is the same as the primary IP.
    
-   Mail marked as "Passed Unchecked" is now archived if archiving is enabled.
    
-   Fixed issues related to reporting of whether messages were delivered or not.
    
-   Archived email deleted from quarantine has a 'blocked' delivery status.
    
-   Quarantine report tokens may be missing in a cluster environment.
    
-   Resolved issue where SpamTitan would respond to SNMP queries from anywhere even when the Allowed hosts' list is empty.
    

![spamtitan-logo-small.jpg](/docs-test/imported-assets/spamtitan-legacy/13161-spamtitan-release-notes/ba6cca22d135.jpg)

#### SpamTitan 7.01

_Released: July 2018_

**Fixed Vulnerabilities**

-   [CVE-2018-15136](https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2018-15136): Possible to disable filtering for specific users.
    

**What's new?**

-   There is a new API for managing domain group allow and block lists.
    
-   Option to use SNMPv3 and disable SNMPv2.
    
-   You are now able to set the port for Remote Syslog.
    
-   A new policy management option to send NDRs if mail is quarantined.
    
-   You can now allow SpamTitan to follow URL Shortener links and detect dangerous links behind them. This option needs to be enabled in **Anti-Spam Engine** > **Settings**.
    
-   You can now export aliases in **Quarantine** > **Aliases**.
    
-   You can now specify the domain group when importing domains.
    
-   Line wrapping in regular expression matching is now optional in content filtering.
    
-   A global administrator can now schedule domain group summary reports.
    
-   Outbound relay can be restricted to domains filtered by SpamTitan.
    
-   Trusted networks can be synchronized in a clustered environment.
    
-   A cluster environment can be set up over NAT.
    

**What has been improved?**

-   The login link in a quarantine report now automatically logs you in.
    
-   Quarantine report links are now tokenized and have a maximum life span (_reported by Pablo Lorenzo_).
    
-   Added missing Amazon S3 bucket locations.
    
-   Added option to set up a cluster environment over NAT.
    

**What has been fixed?**

-   RBL and SPF checks were not being bypassed for allowed IPs.
    
-   Pattern and content filtering issue that removed everything after angle brackets.
    
-   SNMP log is not getting rotated.
    
-   The error generated saving HTTPS settings when using a custom port and updating the SSL certificate.
    
-   Special characters being treated as regular expression functions when content filters were set to 'contains.
    
-   DKIM validation did not follow CNAME records.
    
-   Certain characters were being incorrectly encoded in notification emails.
    
-   Automated backups encoding certain characters in the SFTP password.
    
-   The error generated when manually running SFTP backups from the UI.
    
-   SMTP HELO name reset by a bulk update in cluster environments.
    
-   Quarantine reports being issued if a mail is blocked by a content filter, even though displaying content filters in quarantine reports is disabled.
    
-   Line count display issue in PDF reports.
    
-   Content filters intended to trigger on headers sometimes triggering on attachments.
    
-   API reports on Kaspersky instead of Bitdefender.
    
-   Certain characters being encoded in LDAP Recipient Verification settings.
    
-   History does not load when a user sign-in has capitalization in the username.
    
-   IP delivery pools show as being used by domains, but don't exist on the system.
    
-   'Access denied' message when releasing or deleting mail from history.
    
-   HTTPS not enabling after an attempt to enable is made.
    
-   Empty file downloading when downloading a self-signed certificate's private key.
    
-   SASL authentication not starting when using LDAP authentication.
    

![spamtitan-logo-small.jpg](/docs-test/imported-assets/spamtitan-legacy/13161-spamtitan-release-notes/ba6cca22d135.jpg)

#### SpamTitan 7.00

_Released: March 2018_

**What's new?**

-   Bitdefender is now SpamTitan's primary anti-virus engine.
    

**What has been improved?**

-   ClamAV is updated to version 0.99.3. This is a security release resolving potential denial of service attacks:
    
    -   ClamAV UAF (use-after-free) vulnerabilities ([CVE-2017-12374](https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2017-12374)).
        
    -   ClamAV buffer overflow vulnerability ([CVE-2017-12375](https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2017-12375)).
        
    -   ClamAV buffer overflow in handle\_pdfname vulnerability ([CVE-2017-12376](https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2017-12376)).
        
    -   ClamAV mew packet heap overflow vulnerability ([CVE-2017-12377](https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2017-12377)).
        
    -   ClamAV buffer over-read vulnerability ([CVE-2017-12378](https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2017-12378)).
        
    -   ClamAV buffer overflow in messageAddArgument vulnerability ([CVE-2017-12379](https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2017-12379)).
        
    -   ClamAV null dereference vulnerability ([CVE-2017-12380](https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2017-12380)).
        
    
-   Include security patches for packages including OpenSSL, OpenSSH, PHP, and Wget.
