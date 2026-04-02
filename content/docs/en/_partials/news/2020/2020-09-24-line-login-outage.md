---
title: '[Resolved] Notice about service outage for LINE Login'
navigation: true
description: >-
  We'd like to inform you about a service outage regarding the LINE Login. We've
  released a version of LINE that resolved the issue.
meta: >-
  {"date":"2020-09-24 00:00 UTC","tags":"Outage report, LINE
  Login","locale":"en"}
path: /en/_partials/news/2020/2020-09-24-line-login-outage
__hash__: DzGPPvfBE5EfimWmNTZ5G_D97suigC0U94ce0Rv9O5Q
seo:
  title: '[Resolved] Notice about service outage for LINE Login'
  description: >-
    We'd like to inform you about a service outage regarding the LINE Login.
    We've released a version of LINE that resolved the issue.
---

We'd like to inform you about a service outage regarding the LINE Login. We've released a version of LINE that resolved the issue.

We sincerely apologize for any inconvenience that this may have caused.

### Date and time of outage

August 20, 2020 - September, 21, 2020

### Cause

Issue with LINE for iOS and iPadOS.

### Details

When LINE Login was integrated into an iOS app with LINE SDK for iOS, some LINE Login processes didn't work properly.

Normally, in iOS apps with the LINE Login feature, these processes launch LINE.

1. A user presses the LINE Login button on the iOS app.
2. LINE is launched with a universal link.
3. If step 2 fails, LINE is launched with a custom URL scheme.

Although LINE supports universal links, LINE may not be able to be launched with some universal links on certain devices or operating systems.

If you proceeded to step 3 in the above situation, LINE Login didn't work properly on some versions of LINE, and an alert saying `Unable to connect. Update to the latest version of LINE or recheck the URL.` was displayed on LINE.

### Affected services

If all of these conditions are met, the LINE Login process didn't work properly and an error message was displayed.

- A user uses LINE for iOS or iPadOS.
- A user uses LINE version `10.14.0` or `10.14.1`.
- LINE isn't launched with a universal link on a user's environment.
- LINE Login was integrated into an iOS app with the LINE SDK for iOS Swift or LINE SDK for iOS Objective-C 5.0.0 or later.

If all of the above conditions are met, updating user's LINE version to `10.15.0` or later will resolve the issue.

LINE will continue to improve the quality of its services to prevent future outages. Thank you for your understanding.
