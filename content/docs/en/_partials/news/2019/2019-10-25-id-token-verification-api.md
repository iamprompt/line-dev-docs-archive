---
title: New ID token verification endpoint released
navigation: true
description: >-
  When your back-end server receives an ID token originating from LINE Login
  v2.1 or the LINE SDK, you should verify that the ID token is authentic.
meta: >-
  {"date":"2019-10-25 00:00 UTC","tags":"LINE Login, Social API, LINE SDK, iOS,
  Android","locale":"en"}
path: /en/_partials/news/2019/2019-10-25-id-token-verification-api
__hash__: T50odEBGPsff0PeTjvpxOUVdCjYYTNl4eZrJpBVZycY
seo:
  title: New ID token verification endpoint released
  description: >-
    When your back-end server receives an ID token originating from LINE Login
    v2.1 or the LINE SDK, you should verify that the ID token is authentic.
---

When your back-end server receives an ID token originating from LINE Login v2.1 or the LINE SDK, you should verify that the ID token is authentic.

Previously, you had to use a [JWT library](https://www.jwt.io/libraries){rel="[\"nofollow\"]"} or write your own decoding and verification code.

After this release, you merely have to send an HTTP request to the verification endpoint to determine if an ID token is authentic.

For instructions on verifying ID tokens, read [Transfer ID token to back-end server](/docs/line-login/take-over-session/#transfer-id-token).
