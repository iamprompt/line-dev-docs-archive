---
title: >-
  [Updated] For LIFF/LINE MINI App, usage restrictions have been implemented for
  older versions of the LIFF SDK
navigation: true
description: ''
meta: '{"date":"2026-11-24 00:00 UTC","tags":"liff, line-mini-app","locale":"en"}'
path: /en/_partials/news/2026/2026-11-24-liff-sdk-issue
__hash__: mSIIhpczOGJqdXWwlp6IyeTHXQHrCilCQqFGzdOzaao
seo:
  title: >-
    [Updated] For LIFF/LINE MINI App, usage restrictions have been implemented
    for older versions of the LIFF SDK
  description: ''
---

::admonition{title="Updated on November 25, 2026" type="note"}
On November 25, 2026, we implemented usage restrictions on CDN fixed paths for older versions of the LIFF SDK (v2.20.0 - v2.31.0). Depending on the user's environment and cache status, it may take a day or more for the restrictions to take effect.
::

As announced in [[Updated] Overview of the LIFF SDK vulnerability in LIFF/LINE MINI App and restrictions on using older versions](/news/2026/10/20/liff-sdk-issue/) published on October 20, 2026, we have implemented usage restrictions for older versions of the LIFF SDK (v2.20.0 - v2.31.0) with a confirmed vulnerability to ensure user safety.

### Implementation status and schedule of usage restrictions

We have implemented usage restrictions for the affected older versions (v2.20.0 - v2.31.0) according to the following schedule.

#### November 24, 2026 (implemented)

We have restricted [`liff.login()`](/reference/liff/#login) requests from the affected older versions of the LIFF SDK in external browsers and LINE's in-app browser. As a result, the execution of `liff.login()` fails on the affected versions, which may result in your LIFF/LINE MINI App becoming unavailable.

#### November 25, 2026 (implemented)

In external browsers and LINE's in-app browser, accessing the affected older versions of the LIFF SDK using a CDN fixed path now returns an error with status code `403`. As a result, an error occurs when loading the affected LIFF SDK using a `<script>` tag.

### Updating your app is still required

This action aims to encourage the transition to fixed versions and reduce the risk of vulnerability exploitation.

Usage restrictions alone cannot completely eliminate the vulnerability risk. In particular, if you are using the npm package, the restrictions on the CDN do not apply, so updating to LIFF SDK v2.31.1 or later is still required.

If you are using an affected version, update to LIFF v2.31.1 or later immediately.

### How to update to LIFF SDK v2.31.1 or later

The required action depends on how you have integrated the LIFF SDK. The following shows how to update to the current latest version, [LIFF v2.32.0](/news/2026/11/09/release-liff-2-32-0/).

::admonition{title="Check the latest version" type="tip"}
The LIFF SDK version (v2.32.0) provided in this post is current as of the time of publication. For more information on the latest version, see [Current version](/docs/liff/release-notes/#current-version) in the LIFF documentation.
::

- [If you are using the CDN edge path](#cdn-edge-path-20261124)
- [If you are using a CDN fixed path](#cdn-fixed-path-20261124)
- [If you are using the npm package](#npm-package-20261124)

#### If you are using the CDN edge path

If you are using the CDN edge path, the LIFF SDK has been automatically updated to v2.32.0. No additional action is required.

```html
<script charset="utf-8" src="https://static.line-scdn.net/liff/edge/2/sdk.js"></script>
```

#### If you are using a CDN fixed path

If you are using a CDN fixed path, change the version you load to v2.32.0.

```html
<script charset="utf-8" src="https://static.line-scdn.net/liff/edge/versions/2.32.0/sdk.js"></script>
```

#### If you are using the npm package

If you are using the npm package, update `@line/liff` to v2.32.0.

```sh
npm install @line/liff@2.32.0
```

We will continue to improve the quality of our services. Thank you for your understanding.
