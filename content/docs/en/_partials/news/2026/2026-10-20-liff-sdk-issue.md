---
title: >-
  Overview of the LIFF SDK vulnerability in LIFF/LINE MINI App and restrictions
  on using older versions
navigation: true
description: >-
  In connection with LIFF v2.31.1 released on September 30, 2026, we would like
  to provide an overview of the resolved security vulnerability in the LIFF/LINE
  MINI App and the accompanying usage restriction for older versions of the LIFF
  SDK.
meta: '{"date":"2026-10-20 00:00 UTC","tags":"liff, line-mini-app","locale":"en"}'
path: /en/_partials/news/2026/2026-10-20-liff-sdk-issue
__hash__: fNwPkZBdk4yaVNNq6_058m-U31w4Fsh07EVI4Sj46qE
seo:
  title: >-
    Overview of the LIFF SDK vulnerability in LIFF/LINE MINI App and
    restrictions on using older versions
  description: >-
    In connection with LIFF v2.31.1 released on September 30, 2026, we would
    like to provide an overview of the resolved security vulnerability in the
    LIFF/LINE MINI App and the accompanying usage restriction for older versions
    of the LIFF SDK.
---

In connection with [LIFF v2.31.1 released](/news/2026/09/30/release-liff-2-31-1/) on September 30, 2026, we would like to provide an overview of the resolved security vulnerability in the LIFF/LINE MINI App and the accompanying usage restriction for older versions of the LIFF SDK.

::admonition
---
title: Update to LIFF v2.31.1 or later immediately
type: warning
---
To ensure user safety, we plan to restrict the use of older versions of the LIFF SDK (v2.20.0 - v2.31.0) around November 24, 2026. If you are using an affected version, update to LIFF v2.31.1 or later immediately.
::

### Overview of the vulnerability

A cross-site scripting (XSS) vulnerability was identified in LIFF v2.20.0 - v2.31.0. This vulnerability was reported by an external security researcher through our vulnerability reporting program.

- CVE: [CVE-2026-112148](https://www.cve.org/CVERecord?id=CVE-2026-112148){rel="[\"nofollow\"]"}
- GitHub Advisory: [CVE-2026-112148](https://github.com/line/liff/security/advisories/GHSA-wppr-qmp4-w627){rel="[\"nofollow\"]"}

Under certain conditions, when a LIFF/LINE MINI App is opened in an :glossary-tooltip[[external browser](/glossary/#external-browser)]{glossary-id="external-browser"} from a malicious URL, arbitrary JavaScript may be executed on the LIFF/LINE MINI App's domain. This could allow an attacker to obtain authentication information, such as access tokens, and information displayed on the screen.

### Impact

The following apps using older versions of the LIFF SDK (v2.20.0 - v2.31.0) are affected:

- LIFF apps
- LINE MINI Apps

### Investigation results regarding this vulnerability

As a result of our investigation, we have not confirmed any successful attacks exploiting this vulnerability, nor any damage such as actual data leaks or unauthorized use at this time.

However, we cannot completely guarantee that there is no impact across all environments. Since the vulnerability information has been disclosed, there is a risk of future exploitation. To prevent any damage, if you are using an affected version, update your app immediately.

### Usage restriction for older versions

To prevent any damage, we plan to restrict the use of older versions of the LIFF SDK (v2.20.0 - v2.31.0) according to the following schedule.

#### Scheduled date

Around November 24, 2026 (Tuesday)

The date of the restriction may be moved forward without prior notice.

#### Impact of the restriction

Once the restriction begins, opening a LIFF/LINE MINI App that uses an affected version in an :glossary-tooltip[[external browser](/glossary/#external-browser)]{glossary-id="external-browser"} may result in the following:

- LINE Login and other LIFF features may become unavailable
- The LIFF/LINE MINI App may not function properly

Usage restrictions alone cannot completely eliminate the vulnerability risk. Do not wait for the restriction date. Update to LIFF v2.31.1 or later immediately.

### How to update to LIFF v2.31.1 or later

The required action depends on how you have integrated the LIFF SDK. The following shows how to update to the current latest version, LIFF v2.31.2.

- [If you are using the CDN edge path](#cdn-edge-path-20261020)
- [If you are using a CDN fixed path](#cdn-fixed-path-20261020)
- [If you are using the npm package](#npm-package-20261020)

#### If you are using the CDN edge path

If you are using the CDN edge path, it has been automatically updated to v2.31.2. No additional action is required.

```html
<script charset="utf-8" src="https://static.line-scdn.net/liff/edge/2/sdk.js"></script>
```

#### If you are using a CDN fixed path

If you are using a CDN fixed path, change the version you load to v2.31.2.

```html
<script charset="utf-8" src="https://static.line-scdn.net/liff/edge/versions/2.31.2/sdk.js"></script>
```

#### If you are using the npm package

If you are using the npm package, update `@line/liff` to v2.31.2.

```sh
npm install @line/liff@2.31.2
```

We will continue to improve the quality of our services. Thank you for your understanding.
