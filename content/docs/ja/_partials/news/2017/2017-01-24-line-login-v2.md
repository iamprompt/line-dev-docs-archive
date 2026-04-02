---
title: New versions of Web Login and the LINE SDK released
navigation: true
description: >-
  New versions of Web Login, LINE SDK for Android, and LINE SDK for iOS have
  been released. Details of each release are outlined below.
meta: '{"date":"2017-01-24 00:00 UTC","tags":"iOS, Android, LINE Login, LINE SDK"}'
path: /ja/_partials/news/2017/2017-01-24-line-login-v2
__hash__: 6-BIfQF66enc_yLmvRrm7vhjNQLwsBl2vDMyWQ6gMgc
seo:
  title: New versions of Web Login and the LINE SDK released
  description: >-
    New versions of Web Login, LINE SDK for Android, and LINE SDK for iOS have
    been released. Details of each release are outlined below.
---

New versions of Web Login, LINE SDK for Android, and LINE SDK for iOS have been released. Details of each release are outlined below.

##### Web Login v2

Key changes:

- Endpoint URLs contain "v2" instead of "v1"
- *userId* is returned in get user profile requests. *mid* is no longer returned in the response.
- *scope* is returned with the default value of *p* for permission to get user profile information
- *error* and *state* parameters are returned in error responses for authorization

For more information, see the updated documentation below.

- [Integration guide](/docs/line-login/integrate-line-login/)
- [API reference](/reference/social-api/)

You can also use the LINE Login starter application to help you get started with Web Login.

- [LINE Login starter application](https://github.com/line/line-login-starter){rel="[\"nofollow\"]"}

**Note:** Web Login v1 will be discontinued in January 2018. If you are using Web Login v1, please migrate to the Web Login v2 before that time.

##### LINE SDK for Android 4.0.0

Key changes:

- Implements the Auto Login feature using Chrome custom tabs, instead of app-to-app authorization
- Automatically gets user profile information at login
- Has a method to verify the access token
- Has a method to refresh the access token
- Has a method to log the user out

For more detailed information on how to use the LINE SDK for Android, see the updated documentation below.

- [Using the LINE SDK for Android](/docs/android-sdk/deprecated/integrate-line-login/)
- [API reference](/en/reference/android-sdk-v4/)

Download the LINE SDK for Android

- [Download LINE SDK](/docs/downloads/)

##### LINE SDK for iOS 4.0.0

Key changes:

- Automatically gets user profile information at login
- Has a method to verify the access token
- Has a method to refresh the access token
- Has a method to log the user out

For more detailed information on how to use the LINE SDK for iOS, see the updated documentation below.

- [Using the LINE SDK for iOS](/docs/ios-sdk/objective-c/integrate-line-login/)
- [API reference](/reference/ios-sdk-v4/)

Download the LINE SDK for iOS

- [Download LINE SDK](/docs/downloads/)

**Note:** The reference documentation for the LINE SDK for Android and iOS are currently only available in English.

We will continue to provide improvements so that developers can code more easily.
