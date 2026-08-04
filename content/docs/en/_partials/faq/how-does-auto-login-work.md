---
title: How does auto login work?
navigation: true
description: >-
  Auto login can be used in these situations. You don't need to perform any
  special configurations when implementing LINE Login into your web app to use
  Auto login.
meta: >-
  {"date":"2017-11-08 00:00
  UTC","tags":"line-login","priority":1000,"locale":"en"}
path: /en/_partials/faq/how-does-auto-login-work
__hash__: Bw0Fj338gJn1vCozxJN0FpOE8lbDDW72y31Dc0I7czQ
seo:
  title: How does auto login work?
  description: >-
    Auto login can be used in these situations. You don't need to perform any
    special configurations when implementing LINE Login into your web app to use
    Auto login.
---

Auto login can be used in these situations. You don't need to perform any special configurations when implementing LINE Login into your web app to use Auto login.

- iOS
  - Auto login can be used when accessing a web app where LINE Login v2.0 or v2.1 is implemented using LINE's in-app browser or the Safari browser.
- Android
  - Auto login can be used when accessing a web app where LINE Login v2.0 or v2.1 is implemented using LINE's in-app browser or external browsers such as Chrome.

Auto login isn't supported for devices other than iOS and Android devices, devices where LINE isn't installed, and in browsers other than the Safari browser for iOS.

Also, we use iOS's [Universal links](https://developer.apple.com/documentation/xcode/allowing-apps-and-websites-to-link-to-your-content/){rel="[\"nofollow\"]"} and Android's [App Links](https://developer.android.com/training/app-links){rel="[\"nofollow\"]"} features to perform auto login on external browsers. Check the official documentation for each OS for information on concepts such as how the dialog is displayed when using these features, the OS requirements for using these features, and how to disable these features.

For more information, see [Auto login](/docs/line-login/integrate-line-login/#line-auto-login) in the LINE Login documentation.

::admonition
---
title: About automatic login from the Yahoo! JAPAN app
type: tip
---
Auto login is enabled when accessing a web app that incorporates LINE Login with PKCE implementation from the Yahoo! Japan app. For more information on PKCE support for LINE Login, see [PKCE support for LINE Login](/docs/line-login/integrate-pkce/) in the LINE Login documentation.
::
