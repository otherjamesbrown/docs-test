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

<table><colgroup><col><col><col></colgroup><thead><tr><th><p>Category</p></th><th><p>Extension</p></th><th><p>Description</p></th></tr></thead><tbody><tr><td><p>Miscellaneous</p></td><td><p>txt</p></td><td><p>Ascii Text file</p></td></tr><tr><td><p></p></td><td><p>pgp</p></td><td><p>PGP file</p></td></tr><tr><td><p></p></td><td><p>swf</p></td><td><p>Macromedia Flash file</p></td></tr><tr><td><p></p></td><td><p>uue</p></td><td><p>uuencoded file</p></td></tr><tr><td><p></p></td><td><p>hqx</p></td><td><p>binhex file</p></td></tr><tr><td><p></p></td><td><p>asc</p></td><td><p>ASCII file</p></td></tr><tr><td><p>Image Files</p></td><td><p>jpg</p></td><td><p>JPEG image file</p></td></tr><tr><td><p></p></td><td><p>gif</p></td><td><p>GIF image file</p></td></tr><tr><td><p></p></td><td><p>png</p></td><td><p>PNG image file</p></td></tr><tr><td><p></p></td><td><p>tiff</p></td><td><p>TIFF image file</p></td></tr><tr><td><p></p></td><td><p>pcx</p></td><td><p>PCX image file</p></td></tr><tr><td><p></p></td><td><p>bmp</p></td><td><p>PC bitmap file</p></td></tr><tr><td><p>Audio Files</p></td><td><p>mp2</p></td><td><p>MP2 file</p></td></tr><tr><td><p></p></td><td><p>mp3</p></td><td><p>MP3, MPEG ADTS, layer III file</p></td></tr><tr><td><p></p></td><td><p>m4a/m4b</p></td><td><p>ISO Media, MPEG v4 system</p></td></tr><tr><td><p></p></td><td><p>flac</p></td><td><p>FLAC audio bitstream data</p></td></tr><tr><td><p></p></td><td><p>oga/ogg</p></td><td><p>Ogg data, FLAC audio</p></td></tr><tr><td><p></p></td><td><p>wav</p></td><td><p>WAVE audio</p></td></tr><tr><td><p>Movie Files</p></td><td><p>mpv</p></td><td><p>MPEG video stream data</p></td></tr><tr><td><p></p></td><td><p>mpg</p></td><td><p>MPEG system stream data</p></td></tr><tr><td><p></p></td><td><p>mkv</p></td><td><p>Matroska data</p></td></tr><tr><td><p></p></td><td><p>wmv</p></td><td><p>Microsoft ASF</p></td></tr><tr><td><p></p></td><td><p>avi</p></td><td><p>AVI file</p></td></tr><tr><td><p></p></td><td><p>ani</p></td><td><p>Animated cursor</p></td></tr><tr><td><p>Document Files</p></td><td><p>html</p></td><td><p>HTML document</p></td></tr><tr><td><p></p></td><td><p>xml</p></td><td><p>XML document</p></td></tr><tr><td><p></p></td><td><p>sgml</p></td><td><p>exported SGML document</p></td></tr><tr><td><p></p></td><td><p>ps</p></td><td><p>PostScript document</p></td></tr><tr><td><p></p></td><td><p>pdf</p></td><td><p>PDF document</p></td></tr><tr><td><p></p></td><td><p>rtf</p></td><td><p>Rich Text Format document</p></td></tr><tr><td><p></p></td><td><p>doc</p></td><td><p>Microsoft Office file</p></td></tr><tr><td><p></p></td><td><p>lat</p></td><td><p>LaTeX file file</p></td></tr><tr><td><p></p></td><td><p>dvi</p></td><td><p>TeX DVI file</p></td></tr><tr><td><p></p></td><td><p>java</p></td><td><p>Compiled Java class file</p></td></tr><tr><td><p>Compressed Archive Files</p></td><td><p>gz</p></td><td><p>gzip compressed file</p></td></tr><tr><td><p></p></td><td><p>bz</p></td><td><p>bzip compressed file</p></td></tr><tr><td><p></p></td><td><p>bz2</p></td><td><p>bzip2 compressed file</p></td></tr><tr><td><p></p></td><td><p>xz</p></td><td><p>xz compressed file</p></td></tr><tr><td><p></p></td><td><p>lzma</p></td><td><p>lzma compressed file</p></td></tr><tr><td><p></p></td><td><p>lzo</p></td><td><p>lzop compressed file</p></td></tr><tr><td><p></p></td><td><p>Z</p></td><td><p>compressed file</p></td></tr><tr><td><p></p></td><td><p>zip</p></td><td><p>Zip archive</p></td></tr><tr><td><p></p></td><td><p>7z</p></td><td><p>7-zip archive</p></td></tr><tr><td><p></p></td><td><p>rar</p></td><td><p>RAR archive</p></td></tr><tr><td><p></p></td><td><p>lha</p></td><td><p>LHa archive</p></td></tr><tr><td><p></p></td><td><p>arc</p></td><td><p>ARC archive</p></td></tr><tr><td><p></p></td><td><p>arj</p></td><td><p>ARJ archive</p></td></tr><tr><td><p></p></td><td><p>zoo</p></td><td><p>Zoo archive</p></td></tr><tr><td><p></p></td><td><p>tar</p></td><td><p>GNU/POSIX tar archive</p></td></tr><tr><td><p></p></td><td><p>cpio</p></td><td><p>ASCII cpio archive</p></td></tr><tr><td><p></p></td><td><p>sit</p></td><td><p>StuffIt archive</p></td></tr><tr><td><p></p></td><td><p>deb</p></td><td><p>Debian binary package</p></td></tr><tr><td><p></p></td><td><p>a</p></td><td><p>current ar archive</p></td></tr><tr><td><p></p></td><td><p>rpm</p></td><td><p>RPM file</p></td></tr><tr><td><p></p></td><td><p>tnef</p></td><td><p>Transport Neutral Encapsulation Format (TNEF) file</p></td></tr><tr><td><p></p></td><td><p>cab</p></td><td><p>Microsoft cabinet file</p></td></tr><tr><td><p></p></td><td><p>installshield</p></td><td><p>InstallShield Cabinet file</p></td></tr><tr><td><p>Executables</p></td><td><p>exe-ms</p></td><td><p>MS-DOS or MS Windows executable</p></td></tr><tr><td><p></p></td><td><p>exe-unix</p></td><td><p>Unix (RISC, ELF, COFF) executable</p></td></tr><tr><td><p></p></td><td><p>exe-vms</p></td><td><p>VMS executable</p></td></tr><tr><td><p></p></td><td><p>exe</p></td><td><p>MS-DOS, MS Windows, VMS, or Unix executable</p></td></tr></tbody></table>

## In this Section

-   [Creating a File Type Filter](/docs-test/titanhq/products/spamtitan/docs/skellig-9/file-type-filters/)
