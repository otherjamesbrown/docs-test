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

Port

Protocol

Direction

Description

21

TCP

Out

FTP out for retrieval of system updates.

22

TCP

Out

SSH access - allows SpamTitan to support a secure connection to the appliance for support.

Port 9099 is also required to open a support connection, see description below.

25

TCP

Out

SMTP to send email.

25

TCP

In

SMTP to receive email.

53

TCP & UDP

Out

DNS.

80

TCP

Out

Clam and BitDefender virus definition updates are retrieved via HTTP, as well as FreeBSD packages that are downloaded and installed from pkg-repo-1.titanhq.com and freebsd.org.

123

UDP

Out

NTP - if using time servers outside your firewall.

873

TCP

Out

Used to get 'flag' information on the dashboard for virus and spam relays.

2703

TCP

Out

Razor Checks the checksum or signature of mail messages against the Razor lists.

24441

TCP & UDP

Out

Pyzor Checks the checksum or signature of mail messages against the Pyzor lists.

5432

(Cluster only)

TCP

Used for clustering of history and quarantine data.

9099

TCP

Out

Required when opening a secure connection to the appliance for support. Used to send status information back to the support servers.

Port 22 is also required to establish a support connection, see description above.
