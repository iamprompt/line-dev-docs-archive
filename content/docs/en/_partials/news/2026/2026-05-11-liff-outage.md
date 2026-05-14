---
title: '[Resolved/Updated] Notice about service outage for LIFF/LINE MINI App'
navigation: true
description: ''
meta: >-
  {"date":"2026-05-11 00:00 UTC","tags":"outage-report, liff,
  line-mini-app","locale":"en"}
path: /en/_partials/news/2026/2026-05-11-liff-outage
__hash__: fn7bOpO-raVRhRG7fVa4Cj410fJ12WnJHJgbOtHZb8U
seo:
  title: '[Resolved/Updated] Notice about service outage for LIFF/LINE MINI App'
  description: ''
---

::admonition{title="Added on May 14, 2026" type="note"}
We've released a fixed version of LINE.
::

::admonition{title="Added on May 12, 2026" type="note"}
We've added a [Workaround](#workaround-20260511) section.
::

The following issues were occurring in the LIFF/LINE MINI App, but we've released an updated version of LINE that resolves them. We sincerely apologize for any inconvenience that this may have caused.

## Date and time of outage

April 27, 2026 - May 14, 2026

## Cause of the outage

Bug in LINE for Android versions 26.6.0 and 26.6.1

## Details

The following issues were occurring in LIFF/LINE MINI Apps under specific conditions:

- User profiles couldn't be retrieved
- The LIFF API wasn't working properly

## Impact

This issue occurred when all of the following conditions were met:

- A user uses LINE for Android.
- The user's LINE version is `26.6.0` or `26.6.1`.
- While the LIFF browser is open, the same or a different LIFF/LINE MINI App is launched using [Intent](https://developer.android.com/guide/components/intents-filters){rel="[\"nofollow\"]"} or [App Links](https://developer.android.com/training/app-links){rel="[\"nofollow\"]"}.

If all of the above conditions are met, updating the user's LINE version to `26.6.2` or later will resolve the issue.

## Workaround

This issue occurred when the LIFF SDK referenced an invalid access token. You can potentially work around the issue by performing the following steps on your LIFF/LINE MINI App, even on devices where LINE hasn't been updated:

- When navigating from a LIFF/LINE MINI App to the same or a different LIFF/LINE MINI App, use `location.href` for the transition.
- If a LIFF SDK error that may be caused by this issue is detected in a LIFF/LINE MINI App (e.g., error code `invalid_request`), call the [`liff.logout()`](/reference/liff/#logout) method and then call the [`liff.login()`](/reference/liff/#login) method as follows:

```javascript
const params = new URLSearchParams(location.search)
const liffState = params.get('liff.state')
const redirectUri = liffState
    ? new URL('.' + liffState, location.href).toString()
    : location.href
liff.login({ redirectUri })
```

We sincerely apologize for any inconvenience.
