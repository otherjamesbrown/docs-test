---
title: "File Type Filters"
description: "Imported from support.titanhq.com"
---

> Source: [support.titanhq.com](https://support.titanhq.com/en/61096-file-type-filters.html)
> Product: SpamTitan
> Imported content type: docs_page
> Product stream: skellig

#### File Type Filters

SpamTitan scans each attachment to determine its file type. If the file type matches any of those listed in the table below, then an action is applied to the email based on the file type filter settings.

File type filtering helps detect file extensions being changed to bypass filtering. For example, an executable file (_.exe_) is blocked even if the file has a text file (_.txt_) extension.

Go to **Filtering** > **Attachments** and select the **File Type Filters** tab. Follow the steps below to create a file type filter.

After creating or editing a filter, or number of filters, select **Apply Filters** to apply the filters to your mail. This button is not available for five minutes after selection.

##### Creating a File Type Filter

1.  Go to **Filtering** > **Attachments** and select the **File Type Filters** tab.

2.  Select **Create** and the Create A File Type Filter window displays.

    -   _File Type_:

    -   _Inbound action_: Select the action to take on inbound emails that match this filter:

        -   _Allow_: Allow the email.

        -   _Block_: Block the email.

            :::note[Important]
            The domain or user policy determines if the message is quarantined. Go to **Policies** > **Domain Policy** or **User Policies**.
            :::

        -   _Ignore:_ Take no action.

    -   _Scan Archives_: Select if you want this filter to match files contained within compressed archive files.

    -   _Comments (optional)_: Enter optional comments about this extension filter.

3.  Select **Create** or save this extension filter or **Cancel** to discard changes.

    :::note[Important]
    After creating or editing a filter, or number of filters, select **Apply Filters** to apply the filters to your mail. This button is not available for five minutes after selection.
    :::

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

-   [Creating a File Type Filter](/docs-test/titanhq/products/spamtitan/docs/skellig-9/file-type-filters/)
