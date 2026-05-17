---
title: "Firewall Ports Required by SpamTitan"
description: "Imported from docs.titanhq.com"
---

> Source: [docs.titanhq.com](https://docs.titanhq.com/en/9139-firewall-ports-required-by-spamtitan.html)
> Product: SpamTitan
> Imported content type: docs_page
> Product stream: legacy

#### Firewall Ports Required by SpamTitan

Your firewall needs to allow SpamTitan Gateway access to the following ports:

<table><colgroup><col><col><col><col></colgroup><thead><tr><th><p>Port</p></th><th><p>Protocol</p></th><th><p>Direction</p></th><th><p>Description</p></th></tr></thead><tbody><tr><td><p>21</p></td><td><p>TCP</p></td><td><p>Out</p></td><td><p>FTP out for retrieval of system updates.</p></td></tr><tr><td><p>22</p></td><td><p>TCP</p></td><td><p>Out</p></td><td><p>SSH access - allows SpamTitan to support a secure connection to the appliance for support.</p><p>Port 9099 is also required to open a support connection, see description below.</p></td></tr><tr><td><p>25</p></td><td><p>TCP</p></td><td><p>Out</p></td><td><p>SMTP to send email.</p></td></tr><tr><td><p>25</p></td><td><p>TCP</p></td><td><p>In</p></td><td><p>SMTP to receive email.</p></td></tr><tr><td><p>53</p></td><td><p>TCP &amp; UDP</p></td><td><p>Out</p></td><td><p>DNS.</p></td></tr><tr><td><p>80</p></td><td><p>TCP</p></td><td><p>Out</p></td><td><p>Clam and BitDefender virus definition updates are retrieved via HTTP, as well as FreeBSD packages that are downloaded and installed from pkg-repo-1.titanhq.com and freebsd.org.</p></td></tr><tr><td><p>123</p></td><td><p>UDP</p></td><td><p>Out</p></td><td><p>NTP - if using time servers outside your firewall.</p></td></tr><tr><td><p>873</p></td><td><p>TCP</p></td><td><p>Out</p></td><td><p>Used to get 'flag' information on the dashboard for virus and spam relays.</p></td></tr><tr><td><p>2703</p></td><td><p>TCP</p></td><td><p>Out</p></td><td><p>Razor Checks the checksum or signature of mail messages against the Razor lists.</p></td></tr><tr><td><p>24441</p></td><td><p>TCP &amp; UDP</p></td><td><p>Out</p></td><td><p>Pyzor Checks the checksum or signature of mail messages against the Pyzor lists.</p></td></tr><tr><td><p>5432</p><p>(Cluster only)</p></td><td><p>TCP</p></td><td><p></p></td><td><p>Used for clustering of history and quarantine data.</p></td></tr><tr><td><p>9099</p></td><td><p>TCP</p></td><td><p>Out</p></td><td><p>Required when opening a secure connection to the appliance for support. Used to send status information back to the support servers.</p><p>Port 22 is also required to establish a support connection, see description above.</p></td></tr></tbody></table>
