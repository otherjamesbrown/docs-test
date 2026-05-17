---
title: "Attachment Filtering Methods"
description: "Imported from docs.titanhq.com"
---

> Source: [docs.titanhq.com](https://docs.titanhq.com/en/8949-attachment-filtering-methods.html)
> Product: SpamTitan
> Imported content type: docs_page
> Product stream: legacy

#### Attachment Filtering Methods

Attachment filters can identify file attachments using several different methods, each of which is described below. Compressed archive files are automatically scanned.

Go to **Content Filtering** > **Attachments** to manage attachment filters. See [Configuring Attachment Filters](/docs-test/titanhq/products/spamtitan/docs/legacy-8/configuring-attachment-filters/ "Configuring Attachment Filters") for information on configuring and editing attachment filters.

:::note[Important]
Click **Apply** at the bottom of the Attachments page to commit any configuration changes you make.

![STG-apply-button.jpg](/docs-test/imported-assets/spamtitan-legacy/8949-attachment-filtering-methods/2fa8e4495bb4.jpg)
:::

Extension Filters

Using a mail's MIME headers, the attachment filter can extract a file attachment's extension, and apply a filter decision based on the listed extensions. This will not recognize a file correctly if the filename has been modified. For example, if an executable file has been renamed photo.jpg, a .exe extension filter will not detect it. In this situation, would be necessary to also use the File Type Filters and/or MIME Type filters.

You can also use the Scan Double Extensions setting on a filter to identify files that may have been renamed in an attempt to conceal their true identity. Double extensions can be used to trick users into opening malware. Often, mail clients may hide a second extension so filename.gif.exe may appear as an ordinary filename.gif file.

Only alphanumeric characters are allowed for filename extensions.

![STG-extension-filters.jpg](/docs-test/imported-assets/spamtitan-legacy/8949-attachment-filtering-methods/197ba9b6ae7e.jpg)

File Name Filters

Using a mail's MIME headers, the attachment filter can extract a file attachment's filename, and apply a filter decision based on the listed filenames. Use an asterisk (\*) to match zero or more characters and use a question mark (?) to match a single character. For example, to filter all executable attachments that include the word _sample_, create a filter _\*sample\*.exe_.

![STG-file-name-filters.jpg](/docs-test/imported-assets/spamtitan-legacy/8949-attachment-filtering-methods/a1a0615f6dcb.jpg)

Mime Type Filters

Mime Type is the file type that is reported in the MIME Content-Disposition and Content-Type headers. Both are recorded in their raw (encoded) form and rfc2047-decoded form, if applicable. It consists of a general type and a specific type indicator. For example image/png, video/avi or text/html.

![STG-MIME-filter-types.jpg](/docs-test/imported-assets/spamtitan-legacy/8949-attachment-filtering-methods/d5ab1c972c77.jpg)

Compressed Archive File Scanning

The attachment scanner automatically scans files inside of compressed archive files, such as .zip and .gz files. For the Extension, File Name, and File Type filters, you can specify if a filter should apply to files contained in archives or not using the Scan Archive setting.

Password Protected Archives

Password-protected archives are archive files (zip, bz2, tar, etc) that require a password to open them and as such, they cannot be scanned for viruses. You can specify to allow, block or quarantine password-protected archives.

If you choose to allow password-protected archives, you can prepend the email subject line with a tag, for example, `**UNCHECKED**` (default). However, the subject line is only modified if the recipient is local.

![STG-password-protected-archives.jpg](/docs-test/imported-assets/spamtitan-legacy/8949-attachment-filtering-methods/79d46f96be48.jpg)

File Type Filters

SpamTitan Gateway scans each attachment to determine its file type. If an attachment's file type matches any of those listed in the File Type Filters table, the message will be filtered according to the particular filter settings.

![STG-file-type-filters.jpg](/docs-test/imported-assets/spamtitan-legacy/8949-attachment-filtering-methods/c9fc0fa59c5a.jpg)

This helps prevent an attachment's extension from being changed to avoid filters. For example, an executable attachment is blocked even if the file itself has a .txt extension. The following file types are recognized:

Category

Extension

Description

Miscellaneous

txt

Ascii Text file

pgp

PGP file

swf

Macromedia Flash file

uue

uuencoded file

hqx

binhex file

asc

ASCII file

Image Files

jpg

JPEG image file

gif

GIF image file

png

PNG image file

tiff

TIFF image file

pcx

PCX image file

bmp

PC bitmap file

Audio Files

mp2

MP2 file

mp3

MP3, MPEG ADTS, layer III file

m4a/m4b

ISO Media, MPEG v4 system

flac

FLAC audio bitstream data

oga/ogg

Ogg data, FLAC audio

wav

WAVE audio

Movie Files

mpv

MPEG video stream data

mpg

MPEG system stream data

mkv

Matroska data

wmv

Microsoft ASF

avi

AVI file

ani

Animated cursor

Document Files

html

HTML document

xml

XML document

sgml

exported SGML document

ps

PostScript document

pdf

PDF document

rtf

Rich Text Format document

doc

Microsoft Office file

lat

LaTeX file file

dvi

TeX DVI file

java

Compiled Java class file

Compressed Archive Files

gz

gzip compressed file

bz

bzip compressed file

bz2

bzip2 compressed file

xz

xz compressed file

lzma

lzma compressed file

lzo

lzop compressed file

Z

compressed file

zip

Zip archive

7z

7-zip archive

rar

RAR archive

lha

LHa archive

arc

ARC archive

arj

ARJ archive

zoo

Zoo archive

tar

GNU/POSIX tar archive

cpio

ASCII cpio archive

sit

StuffIt archive

deb

Debian binary package

a

current ar archive

rpm

RPM file

tnef

Transport Neutral Encapsulation Format (TNEF) file

cab

Microsoft cabinet file

installshield

InstallShield Cabinet file

Executables

exe-ms

MS-DOS or MS Windows executable

exe-unix

Unix (RISC, ELF, COFF) executable

exe-vms

VMS executable

exe

MS-DOS, MS Windows, VMS, or Unix executable

## In this Section

-   [Configuring Attachment Filters](/docs-test/titanhq/products/spamtitan/docs/legacy-8/configuring-attachment-filters/)
