---
title: "Using Regular Expression"
description: "Imported from docs.titanhq.com"
---

> Source: [docs.titanhq.com](https://docs.titanhq.com/en/8952-using-regular-expression.html)
> Product: SpamTitan
> Imported content type: docs_page
> Product stream: legacy

##### Using Regular Expression

Regular expression, also known as _regex_ or _regexp_, is a standard pattern matching tool used in many scripting languages. It allows you to create filters that can match patterns of text, rather than just single words or phrases.

Content filtering in SpamTitan uses Perl Compatible Regular Expression (PCRE) regular expressions. For more information on regular expression and PCRE see [www.regular-expressions.info](https://www.regular-expressions.info/) ![icons8-external-link-32.png](/docs-test/imported-assets/spamtitan-legacy/8952-using-regular-expression/9407e2037883.png) and [www.pcre.org](https://www.pcre.org/) ![icons8-external-link-32.png](/docs-test/imported-assets/spamtitan-legacy/8952-using-regular-expression/9407e2037883.png).

Always test your regular expressions for matching and false positives using a testing tool like [regexpal.com](http://regexpal.com/) ![icons8-external-link-32.png](/docs-test/imported-assets/spamtitan-legacy/8952-using-regular-expression/9407e2037883.png).

Regular Expression Examples

Example 1: match email from a specific domain

Match criteria:

Match any email address from the domains _example.com_ and _example.net_.

Regular Expression:

(\\W|^)\[\\w.+\\-\]{0,25}@example\\.(com|net)(\\W|$)

Description:

-   \\W matches a non-alphanumeric character. It prevents the regular expression from matching characters before or after the email address.

-   ^ matches the start of a line.

-   $ matches the end of a line.

-   \[\\w.+\\-\] matches any word character (in the range 0-9, A-Z and a-z), a period, a plus sign or a hyphen.

-   \\ escapes the period and the hyphen to indicate that these should not be treated as metacharacters.

-   {2,30} matches when the preceding character occurs at least 2 times but not more than 30 times, for example, fo{1,2}bar will find fobar and foobar but not fooobar.

-   The brackets group com and net, and the | that separates them indicate that they are conditional.

Example 2: match string containing IP addresses in the 192.168.1.0/24 netblock

Matching criteria:

Match any IP address in 192.168.1.0/24 CIDR address (i.e. 192.168.1.0-192.168.1.255).

Regular expression:

(\\W|^)192\\.168\\.1\\.(\[1-9\]|\[1-9\]\[0-9\]|1(\[0-9\]\[0-9\])|2(\[0-4\]\[0-9\]|5\[0-5\]))(\\W|$)

Description:

-   \\W matches a non-alphanumeric character. It prevents the regular expression from matching characters before or after the IP address.

-   ^ matches the start of a line.

-   $ matches the end of a line.

-   \\ before each period escapes the period, indicating that the period is not a regular expression metacharacter.

-   1-255 must be matched for the fourth octet of the IP address. The | character separates the various options:

    -   \[1-9\]

    -   \[1-9\]\[0-9\]

    -   1(\[0-9\]\[0-9\])

    -   2(\[0-4\]\[0-9\]|5\[0-5\])

Wildcards

Wildcards are an important part of regular expressions. These are different from the wildcards used in SQL or file system wildcards. Below are some common ones you may use:

Wildcard

Description

.

matches any character, except a newline (includes spaces, tabs, letters, and numbers).

\\d

matches any digit (0-9).

\\s

matches whitespace (space or tabs).

\\w

matches any word character (a-z and A-Z)

\[ \]

matches any character within the brackets. For example, \[b,t,z\] will match b, t, or z. \[a-z0-9\] will match a to z _or_ 0 to 9.

\\

use as an "escape" to strip special properties of any character. For example, if you want a period, use "\\." instead of ".".

(|)

matches any of the patterns inside the parentheses. For example, (\\.tw|\\.jp) matches ".tw" or ".jp".

\*

matches zero or more of the preceding element or pattern.

+

matches one or more of the preceding element or pattern.

?

matches zero or one of the preceding element or pattern.

{n}

matches exactly "n" number of the previous character or pattern.

{n,m}

matches between "n" and "m" number of the previous character or pattern.

{n,}

matches at least "n" of the previous character or pattern.

^

matches the beginning of a string.

$

matches the end of a string.

\\b

a word break, which matches the beginning {\\&lt;} or end {\\&gt;} of a word. It is NOT a catchall for tabs, spaces, etc. between words.
