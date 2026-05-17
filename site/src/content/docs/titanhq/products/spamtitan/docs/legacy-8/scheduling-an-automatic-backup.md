---
title: "Scheduling an Automatic Backup"
description: "Imported from docs.titanhq.com"
---

> Source: [docs.titanhq.com](https://docs.titanhq.com/en/8994-scheduling-an-automatic-backup.html)
> Product: SpamTitan
> Imported content type: docs_page
> Product stream: legacy

##### Scheduling an Automatic Backup

As an alternative to backup up your SpamTitan Gateway configuration manually, you can schedule an automatic backup to be sent to a remote FTP, SFTP or Amazon S3 server.

Go to **Settings** > **Backup** > **Schedule Backup** and follow the steps below to define a schedule for an automatic backup.

![STG-schedule-backups.jpg](/docs-test/imported-assets/spamtitan-legacy/8994-scheduling-an-automatic-backup/1732f74617b5.jpg)

1.  Click **Enable** to turn Schedule Backup: ON (default: disabled).

2.  From the _Frequency:_ drop-down menu, select the frequency at which the backup is performed: Every day, Every week or Every month.

3.  From the _Time:_ drop-down menus select the hour and minute the backup is performed.

4.  From the _Backup destination type:_ drop-down, select the type of backup from the following options and complete the relevant fields for your chosen type as described in the tables below:

    -   FTP

        Field

        Description

        Server:

        Hostname or IP address for the remote FTP server.

        Login:

        Username of the account on the remote FTP server.

        Password:

        The password for the login user account.

        Location:

        Directory path where you want to save backups.

        Export Backup to FTP Server Now:

        Click **Start** to test that your settings are correct.

    -   SFTP

        Field

        Description

        Server:

        Hostname or IP address for the remote server.

        Path:

        Directory path where you want to save backups.

        Port:

        The port to use to communicate with the remote server (default: port 22).

        User:

        Username of the SSH account on the remote server.

        Authentication Type:

        Select how you wish to authenticate with the remote server. Select key authentication or password authentication.

        Password:

        The password for the account on the remote server if password-based authentication being used.

        Private Key:

        The private key used to authenticate to the remote server if key authentication is being used.

        Export Backup to SFTP Server Now:

        Click **Start** to test that your settings are correct.

    -   Amazon S3

        Field

        Description

        Folder:

        Name of the folder in which to store backups. Ensure the folder is in the bucket specified in the _Bucket:_ field. This setting is optional.

        Bucket:

        Name of the bucket where you want to store your backup. A bucket is a container in which your Amazon S3 folders and files reside. Create buckets in the Amazon S3 management console.

        Access Key ID:

        Access keys consist of an access key ID and secret access key, which are used to sign requests made to AWS. Access keys can be created in the AWS management console.

        The access key is used to authenticate with your S3 account. It is a 20-character, alphanumeric string, for example, AKIAIOSFODNN7EXAMPLE

        Secret Access Key:

        This is a 40-character string, for example, wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY.

        S3 Region:

        Select the region where your S3 bucket resides.

        Export Backup to Amazon S3 Now:

        Click **Start** to test that your settings are correct.
