---
title: LIFF v2.1.14, v2.2.1, v2.3.2 released
navigation: true
description: 'LIFF v2.1.14, v2.2.1, v2.3.2 were released. The changes are as follows:'
meta: '{"date":"2020-09-14 00:00 UTC","tags":"LIFF","locale":"en"}'
path: /en/_partials/news/2020/2020-09-14-release-liff-versions
__hash__: eLMCIPziiOCeFNh1uwcFM7apiSyN8OIyZOB7dkaGyMc
seo:
  title: LIFF v2.1.14, v2.2.1, v2.3.2 released
  description: 'LIFF v2.1.14, v2.2.1, v2.3.2 were released. The changes are as follows:'
---

LIFF v2.1.14, v2.2.1, v2.3.2 were released. The changes are as follows:

- [Fixed error in which the URL fragment entered in the LIFF endpoint URL was not correctly handled by liff.permanentLink.createUrl() (v2.3.2)](#liff-create-url-error-fix-endpoint-v-2-3-2)
- [Fixed error in which the query parameter entered in the LIFF endpoint URL was not correctly handled by liff.permanentLink.createUrl() (v2.3.2)](#liff-create-url-error-fix-query-parameter-v-2-3-2)
- [Fixed error in which the path entered in the LIFF endpoint URL was not correctly handled by liff.permanentLink.createUrl() (v2.3.2)](#liff-create-url-redirect-url-fix-2-3-2)
- [Fixed error in which fragment was not included in the secondary redirect URL (v2.3.2)](#liff-url-fragment-error-fix-v-2-3-2)
- [Fixed bug in which LIFF URLs were redirected to unintended URLs (v2.1.14, v2.2.1, v2.3.2)](#bug-fix-redirect-2-3-2)

### Fixed error in which the URL fragment entered in the LIFF endpoint URL was not correctly handled by liff.permanentLink.createUrl()

  
**Affected version**

- LIFF v2.3.2

**Changes**

When the LIFF endpoint URL contained a URL fragment (`#URL-fragment`), despite the **Methods for converting additional information in the LIFF URL** being set to **Replace (Backward compatibility mode)**, the URL fragment was included in the permanent link returned after executing [`liff.permanentLink.createUrl()`](/reference/liff/#permanent-link-create-url).

::admonition{title="Conditions under which this problem occurs" type="tip"}
- A URL fragment is included in the LIFF endpoint URL
- **Methods for converting additional information in the LIFF URL** is set to **Replace (Backward compatibility mode)**
::

For example, when the **Endpoint URL** is set to `https://example.com/path#section` and `liff.permanentLink.createUrl()` is executed, `https://liff.line.me/{liffId}/path?liff.state=#section` would be returned as the permanent link. In LIFF v.2.3.2, the bug is fixed so that `https://liff.line.me/{liffId}` would be correctly returned.

### Fixed error in which the query parameter entered in the LIFF endpoint URL was not correctly handled by liff.permanentLink.createUrl()

  
**Affected version**

- LIFF v2.3.2

**Changes**

When the LIFF endpoint URL contained a query parameter (`?key=value`), the query parameter would infinitely multiply in the permanent link returned after executing `liff.permanentLink.createUrl()`.

::admonition{title="Conditions under which this problem occurs" type="tip"}
- The query parameter in the LIFF endpoint URL matches the query parameter in the LIFF URL when executing `liff.permanentLink.createUrl()`.
- **Methods for converting additional information in the LIFF URL** is set to **Concatenate**
::

For example, when the **Endpoint URL** is set to `https://example.com/path1/?q1=v1&q2=v2` and `liff.permanentLink.createUrl()` is executed in `https://liff.line.me/{liffid}/?q1=v1&q2=v2`, a permanent link with the query parameter infinitely multiplied such as `https://liff.line.me/{liffid}/?q1=v1&q1=v1&q2=v2&q2=v2` would be returned.

In LIFF v.2.3.2, the bug is fixed so that `https://liff.line.me/{liffid}/?q1=v1&q2=v2` would be correctly returned.

### Fixed error in which the path entered in the LIFF Endpoint URL was not correctly handled by liff.permanentLink.createUrl()

  
**Affected versions**

- LIFF v2.3.2

**Changes**

When path is included in the LIFF endpoint URL and a slash (`/`) is used at the end of the path, the permanent link obtained by executing `liff.permanentLink.createUrl()` would redirect you to URL without the ending slash as shown below.

::admonition{title="Conditions under which this problem occurs" type="tip"}
- Path (`/path/`) is included in the LIFF endpoint URL, and a slash (`/`) is used at the end of the path
- Query parameter (`?key=value`) or URL fragment (`#URL-fragment`) is included in the LIFF endpoint URL
- **Methods for converting additional information in the LIFF URL** is set to **Concatenate**
::

For example, if **Endpoint URL** is set to`https://example.com/path/?id=xxxxxxx`, accessing a permanent link obtained by executing `liff.permanentLink.createUrl()` would redirect you to a URL without the ending slash, such as `https://example.com/path?id=xxxxxxx`.

In LIFF v2.3.2, the error has been fixed so that you are correctly redirected to `https://example.com/path/?id=xxxxxxx`.

::admonition{title="LIFF v2.4.0 has already been fixed" type="note"}
As announced on [August 31, 2020](/news/2020/08/31/release-liff-2-4-0/#liff-create-url-error-fix), this bug fix has already been reflected in LIFF v2.4.0.
::

### Fixed error in which fragment was not included in the secondary redirect URL

  
**Affected version**

- LIFF v2.3.2

**Changes**

When a fragment was included in the LIFF endpoint URL or LIFF URL, regardless of settings based on **Methods for converting additional information in the LIFF URL**, the secondary redirect URL would not include a fragment. This error has been fixed.

For more details on the secondary redirect URL or how it is affected by settings based on **Methods for converting additional information in the LIFF URL**, see the LIFF document [Operation from accessing LIFF URL to opening LIFF App](/docs/liff/opening-liff-app/#redirect-flow).

### Fixed bug in which LIFF URLs were redirected to unintended URLs

  
**Affected versions**

- LIFF v2.1.14
- LIFF v2.2.1
- LIFF v2.3.2

**Changes**

In the primary redirect destination URL, additional information specified in the LIFF URL (e.g. `path/?key=value`) is included in the `liff.state` query parameter. When additional information was included in the `liff.state` query parameter, there was bug in which you were redirected to unintended URLs as shown below.

::admonition{title="Conditions under which this problem occurs" type="tip"}
- There is no `/` at the beginning of the `liff.state` query parameter
- **Methods for converting additional information in the LIFF URL** is set to **Replace (Backward compatibility mode)**
::

For example, when **Endpoint URL** is set to `https://example.com`, and the `liff.state` query parameter was `path`, the domain name and path would not be separated by `/`, resulting in being redirected to `https://example.compath`.
In LIFF v2.1.14, v2.2.1, v2.3.2, the bug has been fixed so that you are correctly redirected to `https://example.com/path`.

::admonition
---
title: Regarding vulnerability caused by unintended redirects
type: note
---
There is a possibility that users are redirected to malicious websites due to this bug. If you are using a LIFF SDK version before v2.4.0, we recommend that you update it.
::

For more information on what happens when accessing LIFF URLs, see the LIFF document [Operation from accessing LIFF URL to opening LIFF App](/docs/liff/opening-liff-app/#redirect-flow).
