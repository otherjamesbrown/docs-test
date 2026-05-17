---
title: "Two-Factor Authentication"
description: "Imported from docs.titanhq.com"
---

> Source: [docs.titanhq.com](https://docs.titanhq.com/en/10744-two-factor-authentication.html)
> Product: SpamTitan
> Imported content type: docs_page
> Product stream: legacy

#### Two-Factor Authentication

Two-factor authentication (2FA) is an additional layer of security used to protect your SpamTitan account from unauthorized access. If 2FA is enabled, a user provides their username and password on login and then must also provide an additional piece of information known only to them. This additional piece of information is a one-time password, regenerated every thirty seconds.

Go to **Settings** > **User Management** > **Two-Factor Authentication (2FA)** to manage 2FA settings.

![STG-2FA.jpg](/docs-test/imported-assets/spamtitan-legacy/10744-two-factor-authentication/b66140667ec3.jpg)

:::danger[Warning]
If you are a SpamTitan Gateway customer using 2FA, it is recommended you use NTP (Network Time Protocol) synchronization to ensure your system clock is in sync. It is not possible to login using your 2FA device if your system clock drifts out of sync. However, your backup codes will still work.

Go to **System Setup** > **Time** > **NTP** to enable NTP.
:::

Follow the steps below to set up two-factor authentication:

1.  Before continuing, you must download and install an authenticator phone app, e.g. Google Authenticator or FreeOTP.

2.  Scan the QR code using the authenticator app installed in step 1.

    ![STG-2FA-QR-code.jpg](/docs-test/imported-assets/spamtitan-legacy/10744-two-factor-authentication/e040f6d17890.jpg)

    If you are unable to scan the QR code, manually enter the OTP (One Time Password) secret provided in the OTP Secret: field.

3.  In the Code: field, enter the code generated from the authenticator phone app.

4.  Click **Register**.

Recovery Codes

A set of recovery codes are generated when 2FA is enabled. Store these codes carefully as they are the only way to access your SpamTitan account if the device you registered 2FA on is lost.

The recovery codes are one-time use and they must be used in sequential order.

![ST-2FA-enabled\_censored.jpg](/docs-test/imported-assets/spamtitan-legacy/10744-two-factor-authentication/dfca1312dbfb.jpg)
