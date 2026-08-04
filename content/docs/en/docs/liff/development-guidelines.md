---
title: LIFF app development guidelines
navigation: true
description: null
meta: '{"tags":null,"author":null,"last_updated":null,"source_language":"en"}'
path: /en/docs/liff/development-guidelines
__hash__: I8Lewwm5YTu3KioVLDCbb-eMWj28jKzxbQzFGzh1nI0
seo:
  title: LIFF app development guidelines
  description: null
---

# :page-title

:markdown-controlsWhen developing web apps using LIFF, follow these development guidelines.

- [Be sure to securely handle user data](#liff-development-rules1)
- [Cautions for initializing LIFF apps](#liff-development-rules2)
- [LIFF app development rules](#liff-development-rules3)
- [Prohibiting mass requests to the LINE Platform](#prohibiting-mass-requests-to-line-platform)
- [Deauthorize your app when a user unregisters from your app](#deauthorize)

LIFF uses a system provided by LINE Login. Therefore, abide by the [LINE Login development guidelines](/docs/line-login/development-guidelines/) in the LINE Login documentation.

::admonition{title="Note" type="note"}
The basic rules for LIFF development are based on the content described in [Terms and Policies](/terms-and-policies/).
::

## Be sure to securely handle user data

- When using user data in LIFF apps and servers, the LIFF app will be vulnerable to spoofing and other types of attacks if it doesn't properly handle the user data. For more information on how LIFF apps and servers can securely use user data obtained from LIFF apps, see [Using user data in LIFF apps and servers](/docs/liff/using-user-profile/).
- LIFF endpoint URLs and URL fragments of LIFF URLs contain sensitive information such as access tokens and user IDs, so be careful of data leakage.

## Cautions for initializing LIFF apps

See [Important points to consider when initializing the LIFF app](/docs/liff/developing-liff-apps/#initializing-liff-app-notes).

## LIFF app development rules

- To build a LIFF app as an SPA (single page application), use the [History API](https://html.spec.whatwg.org/multipage/nav-history-apis.html#the-history-interface){rel="[\"nofollow\"]"}. LIFF has limited compatibility with routing using fragments.
- When you implement an API that uses any of the device or OS functions listed below, implement the API so that user actions trigger API calls.

  - Getting location information
  - Accessing the camera
  - Accessing the microphone
- Do not track a user with cookies, localStorage, or sessionStorage or link LINE user data with external session information without getting the user's consent.
- During your application's test phase, limit access privileges for the LIFF app through your web app.
- The URL scheme of the LIFF app and any content that is opened in the LIFF app must be **https**. If the URL scheme is http, the content is displayed in ::glossary-tooltip{glossary-id="line-iab"}
[LINE's in-app browser](/glossary/#line-iab)
::

. In this case, even if the web app has been registered as a LIFF app, it does not function as a LIFF app.

::admonition
---
title: Use of cookies, localStorage, or sessionStorage in your LIFF app
type: note
---
You can use cookies, localStorage, or sessionStorage in your LIFF app. However, changes in OS may restrict their use in the future.
::

## Prohibiting mass requests to the LINE Platform

Do not access the LIFF app via the [LIFF scheme](/docs/line-login/using-line-url-scheme/#opening-a-liff-app) (`https://liff.line.me/{liffId}`) or request a large amount of [LIFF API](/reference/liff/) for load testing purposes. For load testing LIFF apps, prepare a test environment that doesn't generate a large number of requests to the LINE Platform.

::admonition{title="Note" type="note"}
If the rate limit is exceeded, `429 Too Many Requests` will be returned and an error will occur.
::

## Deauthorize your app when a user unregisters from your app

When a user unregisters from your LIFF app, or when a user terminates the link between your app and the LINE app, you must do the following:

:partial{content="common/deauthorize/"}
