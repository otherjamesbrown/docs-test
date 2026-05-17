---
title: "Generating Certificate Signing Requests"
description: "Imported from docs.titanhq.com"
---

> Source: [docs.titanhq.com](https://docs.titanhq.com/en/8984-generating-certificate-signing-requests.html)
> Product: SpamTitan
> Imported content type: docs_page
> Product stream: legacy

##### Generating Certificate Signing Requests

Go to **Settings** > **SSL** > **Generate Certificate Signing Request (CSR)** and follow the steps below to generate a certificate signing request. This CSR can be used either for submission to a certificate authority who will issue a trusted certificate or to create a self-signed certificate.

To create a self-signed certificate:

1.  Using the Certificate Settings table below as a reference, complete the fields in the Certificate Signing Request (CSR).

2.  Click **Run** opposite _Generate Self Signed Certificate_.

3.  The self-signed certificate will display under Installed Signed Certificates.

If generating the CSR for submission to a certificate authority:

1.  Using the Certificate Settings table below as a reference, complete the fields in the Certificate Signing Request (CSR).

2.  Click **Run** opposite _Generate Certificate Signing Request (CSR)_. The CSR will generate and display as shown:

    ![ST-generate-CSR-results.jpg](/docs-test/imported-assets/spamtitan-legacy/8984-generating-certificate-signing-requests/25c566332c4e.jpg)

3.  Copy the CSR text exactly and submit it to a trusted certificate signing authority for signing.

4.  Once returned by the certificate authority, import the signed certificate into SpamTitan. See _Importing a Signed Certificate_ below.

Table 1. **Certificate Settings**

Field

Description

Common Name:

The fully-qualified domain name that is used to access the SpamTitan UI, e.g. spamtitan.example.com. This must match the server name exactly or a warning dialog will display every time you visit the site.

Organization:

Company or organization name.

Organization Unit:

A specific department within the company or organization (optional).

City:

City/town where the company or organization is located.

State/Province:

Full name of the state or province where the company or organization is located.

Country:

Two-letter country code of the country where the company or organization is located, e.g. US or IE.

###### Importing a Signed Certificate

Follow the steps below to import a signed certificate from a trusted certificate signing authority into SpamTitan Gateway.

1.  Go to **Settings** > **SSL** > **Import Certificates**.

2.  Click **Choose File** beside _Import Certificate from PEM:_ and browse to select the certificate file.

    :::note
    If the certificate you are importing was not created using a certificate signing request from SpamTitan, you will also need to import a Private Key and Intermediate Certificate.
    :::

3.  Click **Import**.

**Generating Let's Encrypt Certificate**

If using Let's Encrypt to generate a Certificate:

-   Enter the same information that you would for a signed certificate, and click **Run** opposite Use Let's Encrypt to generate a Certificate.

    The certificate will be automatically requested and installed. TLS and HTTPS will be set up, and it will be automatically renewed.

    :::note
    One specific route must be accessible over port 80 at all times, specifically for Let's Encrypt servers to renew. Let's Encrypt may not be able to renew if port 80 is blocked on the firewall or HTTP is disabled.
    :::

## In this Section

-   [Importing a Signed Certificate](/docs-test/titanhq/products/spamtitan/docs/legacy-8/generating-certificate-signing-requests/)
