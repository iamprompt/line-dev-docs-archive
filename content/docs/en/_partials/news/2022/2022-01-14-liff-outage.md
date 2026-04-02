---
title: '[Resolved] Notice about service outage for the LIFF/LINE MINI App'
navigation: true
description: ''
meta: >-
  {"date":"2022-01-14 00:00 UTC","tags":"outage-report, liff,
  line-mini-app","locale":"en"}
path: /en/_partials/news/2022/2022-01-14-liff-outage
__hash__: 60XRcEIGAtznaUmhDKTjpmPcedyscNOWcHjLT2_OG4Q
seo:
  title: '[Resolved] Notice about service outage for the LIFF/LINE MINI App'
  description: ''
---

::admonition{title="Updated on January 17, 2022" type="note"}
We've updated the [Date and time of outage](#date-20220114) and [Impact](#impact-20220114).
::

We'd like to inform you about a service outage regarding the LIFF/LINE MINI App. We've released the fix version of LINE.

We sincerely apologize for any inconvenience that this may have caused.

### Date and time of outage

January 12, 2022 - January 16, 2022

### Cause of the outage

Issue with LINE version 12.0.0 for iOS and iPadOS.

### Details

These issue were observed when opening the LIFF app or LINE MINI App under certain conditions:

- [`liff.sendMessages()`](/reference/liff/#send-messages) didn't work properly and returned an error message `user doesn't grant required permissions yet` with status code `403`.
- When executing [`liff.getContext()`](/reference/liff/#get-context), `none` was returned as the `type` of the return value, regardless of the screen type on which the LIFF app launched.

### Impact

If all of these conditions are met, there was a problem with `liff.sendMessages()` and `liff.getContext()`.

- A user uses LINE for iOS or iPadOS.
- A user uses LINE version `12.0.0`.
- A user opens the LIFF app or LINE MINI App in one of these ways:

  - [Rich menu](/docs/messaging-api/using-rich-menus/)
  - [Rich Message](https://www.linebiz.com/jp/manual/OfficialAccountManager/rich-messages/){rel="[\"nofollow\"]"} sent from [LINE Official Account Manager](https://manager.line.biz/){rel="[\"nofollow\"]"}

If all of the above conditions are met, updating the user's LINE version to `12.0.1` or later will resolve the issue.

LINE will continue to improve the quality of its services to prevent future outages. Thank you for your understanding.
