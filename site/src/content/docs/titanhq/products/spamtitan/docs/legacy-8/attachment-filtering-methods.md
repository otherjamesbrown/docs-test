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

<table><colgroup><col><col><col></colgroup><thead><tr><th><p>Category</p></th><th><p>Extension</p></th><th><p>Description</p></th></tr></thead><tbody><tr><td><p>Miscellaneous</p></td><td><p>txt</p></td><td><p>Ascii Text file</p></td></tr><tr><td><p></p></td><td><p>pgp</p></td><td><p>PGP file</p></td></tr><tr><td><p></p></td><td><p>swf</p></td><td><p>Macromedia Flash file</p></td></tr><tr><td><p></p></td><td><p>uue</p></td><td><p>uuencoded file</p></td></tr><tr><td><p></p></td><td><p>hqx</p></td><td><p>binhex file</p></td></tr><tr><td><p></p></td><td><p>asc</p></td><td><p>ASCII file</p></td></tr><tr><td><p>Image Files</p></td><td><p>jpg</p></td><td><p>JPEG image file</p></td></tr><tr><td><p></p></td><td><p>gif</p></td><td><p>GIF image file</p></td></tr><tr><td><p></p></td><td><p>png</p></td><td><p>PNG image file</p></td></tr><tr><td><p></p></td><td><p>tiff</p></td><td><p>TIFF image file</p></td></tr><tr><td><p></p></td><td><p>pcx</p></td><td><p>PCX image file</p></td></tr><tr><td><p></p></td><td><p>bmp</p></td><td><p>PC bitmap file</p></td></tr><tr><td><p>Audio Files</p></td><td><p>mp2</p></td><td><p>MP2 file</p></td></tr><tr><td><p></p></td><td><p>mp3</p></td><td><p>MP3, MPEG ADTS, layer III file</p></td></tr><tr><td><p></p></td><td><p>m4a/m4b</p></td><td><p>ISO Media, MPEG v4 system</p></td></tr><tr><td><p></p></td><td><p>flac</p></td><td><p>FLAC audio bitstream data</p></td></tr><tr><td><p></p></td><td><p>oga/ogg</p></td><td><p>Ogg data, FLAC audio</p></td></tr><tr><td><p></p></td><td><p>wav</p></td><td><p>WAVE audio</p></td></tr><tr><td><p>Movie Files</p></td><td><p>mpv</p></td><td><p>MPEG video stream data</p></td></tr><tr><td><p></p></td><td><p>mpg</p></td><td><p>MPEG system stream data</p></td></tr><tr><td><p></p></td><td><p>mkv</p></td><td><p>Matroska data</p></td></tr><tr><td><p></p></td><td><p>wmv</p></td><td><p>Microsoft ASF</p></td></tr><tr><td><p></p></td><td><p>avi</p></td><td><p>AVI file</p></td></tr><tr><td><p></p></td><td><p>ani</p></td><td><p>Animated cursor</p></td></tr><tr><td><p>Document Files</p></td><td><p>html</p></td><td><p>HTML document</p></td></tr><tr><td><p></p></td><td><p>xml</p></td><td><p>XML document</p></td></tr><tr><td><p></p></td><td><p>sgml</p></td><td><p>exported SGML document</p></td></tr><tr><td><p></p></td><td><p>ps</p></td><td><p>PostScript document</p></td></tr><tr><td><p></p></td><td><p>pdf</p></td><td><p>PDF document</p></td></tr><tr><td><p></p></td><td><p>rtf</p></td><td><p>Rich Text Format document</p></td></tr><tr><td><p></p></td><td><p>doc</p></td><td><p>Microsoft Office file</p></td></tr><tr><td><p></p></td><td><p>lat</p></td><td><p>LaTeX file file</p></td></tr><tr><td><p></p></td><td><p>dvi</p></td><td><p>TeX DVI file</p></td></tr><tr><td><p></p></td><td><p>java</p></td><td><p>Compiled Java class file</p></td></tr><tr><td><p>Compressed Archive Files</p></td><td><p>gz</p></td><td><p>gzip compressed file</p></td></tr><tr><td><p></p></td><td><p>bz</p></td><td><p>bzip compressed file</p></td></tr><tr><td><p></p></td><td><p>bz2</p></td><td><p>bzip2 compressed file</p></td></tr><tr><td><p></p></td><td><p>xz</p></td><td><p>xz compressed file</p></td></tr><tr><td><p></p></td><td><p>lzma</p></td><td><p>lzma compressed file</p></td></tr><tr><td><p></p></td><td><p>lzo</p></td><td><p>lzop compressed file</p></td></tr><tr><td><p></p></td><td><p>Z</p></td><td><p>compressed file</p></td></tr><tr><td><p></p></td><td><p>zip</p></td><td><p>Zip archive</p></td></tr><tr><td><p></p></td><td><p>7z</p></td><td><p>7-zip archive</p></td></tr><tr><td><p></p></td><td><p>rar</p></td><td><p>RAR archive</p></td></tr><tr><td><p></p></td><td><p>lha</p></td><td><p>LHa archive</p></td></tr><tr><td><p></p></td><td><p>arc</p></td><td><p>ARC archive</p></td></tr><tr><td><p></p></td><td><p>arj</p></td><td><p>ARJ archive</p></td></tr><tr><td><p></p></td><td><p>zoo</p></td><td><p>Zoo archive</p></td></tr><tr><td><p></p></td><td><p>tar</p></td><td><p>GNU/POSIX tar archive</p></td></tr><tr><td><p></p></td><td><p>cpio</p></td><td><p>ASCII cpio archive</p></td></tr><tr><td><p></p></td><td><p>sit</p></td><td><p>StuffIt archive</p></td></tr><tr><td><p></p></td><td><p>deb</p></td><td><p>Debian binary package</p></td></tr><tr><td><p></p></td><td><p>a</p></td><td><p>current ar archive</p></td></tr><tr><td><p></p></td><td><p>rpm</p></td><td><p>RPM file</p></td></tr><tr><td><p></p></td><td><p>tnef</p></td><td><p>Transport Neutral Encapsulation Format (TNEF) file</p></td></tr><tr><td><p></p></td><td><p>cab</p></td><td><p>Microsoft cabinet file</p></td></tr><tr><td><p></p></td><td><p>installshield</p></td><td><p>InstallShield Cabinet file</p></td></tr><tr><td><p>Executables</p></td><td><p>exe-ms</p></td><td><p>MS-DOS or MS Windows executable</p></td></tr><tr><td><p></p></td><td><p>exe-unix</p></td><td><p>Unix (RISC, ELF, COFF) executable</p></td></tr><tr><td><p></p></td><td><p>exe-vms</p></td><td><p>VMS executable</p></td></tr><tr><td><p></p></td><td><p>exe</p></td><td><p>MS-DOS, MS Windows, VMS, or Unix executable</p></td></tr></tbody></table>

## In this Section

-   [Configuring Attachment Filters](/docs-test/titanhq/products/spamtitan/docs/legacy-8/configuring-attachment-filters/)
