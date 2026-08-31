---
title: >-
  As of October 7, 2026, the handling of the "?" character in LIFF URL query
  parameter values will change
navigation: true
description: >-
  Starting with LIFF v2.31.1, scheduled for release on October 7, 2026, we will
  change how the ? character is handled in query parameter values included in a
  LIFF URL. As a result, the secondary redirect URL generated when accessing a
  LIFF URL may change.
meta: '{"date":"2026-08-31 00:00 UTC","tags":"liff, line-mini-app","locale":"en"}'
path: /en/_partials/news/2026/2026-08-31-liff-query-parameter-change
__hash__: BX3cpW3Whhi-EulaGgLsbLW3_esLv2TiPS3swFgemto
seo:
  title: >-
    As of October 7, 2026, the handling of the "?" character in LIFF URL query
    parameter values will change
  description: >-
    Starting with LIFF v2.31.1, scheduled for release on October 7, 2026, we
    will change how the ? character is handled in query parameter values
    included in a LIFF URL. As a result, the secondary redirect URL generated
    when accessing a LIFF URL may change.
---

Starting with LIFF v2.31.1, scheduled for release on October 7, 2026, we will change how the `?` character is handled in query parameter values included in a :glossary-tooltip[[LIFF URL](/glossary/#liff-url)]{glossary-id="liff-url"}. As a result, the secondary redirect URL generated when accessing a LIFF URL may change.

### Scheduled date of change

October 7, 2026

### Affected versions

LIFF v2.31.1 or later

### Changes

When a user accesses a LIFF URL, the LIFF app first navigates to the primary redirect URL and then to the [secondary redirect URL](/docs/liff/opening-liff-app/#redirect-flow). Starting with LIFF v2.31.1, we will change part of the implementation used in the :glossary-tooltip[[LIFF browser](/glossary/#liff-browser)]{glossary-id="liff-browser"} to restore query parameter values in the LIFF URL to the secondary redirect URL. As shown in the [examples](#examples-20260831) below, `?` characters in query parameter values will no longer be replaced with `&`.

This change applies when a LIFF app is opened in the LIFF browser. The behavior will not change when a LIFF app is opened in an :glossary-tooltip[[external browser](/glossary/#external-browser)]{glossary-id="external-browser"}.

### Examples

For example, suppose that the LIFF app's endpoint URL is `https://example.com` and a user accesses `https://liff.line.me/{liffId}/?key=foo?bar`. The secondary redirect URL before and after the change will be as follows:

| Before change (current)           | After change (LIFF v2.31.1 or later) |
| --------------------------------- | ------------------------------------ |
| `https://example.com?key=foo&bar` | `https://example.com?key=foo?bar`    |

When accessing a LIFF URL such as `https://liff.line.me/{liffId}/?key=foo%3Fbar` with the `?` character in a query parameter value percent-encoded, the LIFF app may be affected depending on how the URL is accessed. For the behavior before and after the change for each method of opening the LIFF app in the LIFF browser, see the table below:

| Access method                                         | Before change (current)             | After change (LIFF v2.31.1 or later) |
| ----------------------------------------------------- | ----------------------------------- | ------------------------------------ |
| On an iOS device, from an app other than the LINE app | `https://example.com?key=foo&bar`   | `https://example.com?key=foo?bar`    |
| On an iOS device, from the LINE app                   | `https://example.com?key=foo%3Fbar` | No change                            |
| On an Android device                                  | `https://example.com?key=foo%3Fbar` | No change                            |

### Notes on the specification change

If your LIFF app uses query parameters whose values are URLs, it may be affected by this change when opened in the LIFF browser (e.g. if `return_url` contains the URL of the page from which the user navigated). Even if you percent-encode the query parameter values, the LIFF app may be affected depending on how the LIFF URL is accessed.

If your LIFF app relies on the behavior before the change, it may not function correctly after the change is applied. We recommend implementing your LIFF app to ensure it works correctly both before and after the change.

We will continue to work to further improve our services to our customers. Thank you for your understanding.
