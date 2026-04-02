---
title: The differences between the LIFF browser and external browser
navigation: true
description: ''
meta: '{"tags":null,"author":null,"last_updated":null,"source_language":"en"}'
path: /en/docs/liff/differences-between-liff-browser-and-external-browser
__hash__: Tll9wq8NhZ0zN0mr7w5d9gZH0P_Gm2V1CNIa5B1kF4c
seo:
  title: The differences between the LIFF browser and external browser
  description: ''
---

# :page-title

:markdown-controls::admonition{title="LIFF browser specifications" type="tip"}
For more information, see [LIFF browser specifications](/docs/liff/overview/#liff-browser-spec).
::

The :glossary-tooltip[[LIFF browser](/glossary/#liff-browser)]{glossary-id="liff-browser"} doesn't support some of the web technologies supported by :glossary-tooltip[[external browsers](/glossary/#external-browser)]{glossary-id="external-browser"}. The web technologies that aren't supported by the LIFF browser include the following:

| Web technology                                                                             | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| ------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [theme-color Meta Tag](https://caniuse.com/meta-theme-color){rel="[\"nofollow\"]"}         | A feature to specify the color of the user interface                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| [Download attribute](https://caniuse.com/download){rel="[\"nofollow\"]"}                   | A feature to use a hyperlink for downloading the resource, not for navigating to the resource                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| [Add to home screen (A2HS)](https://caniuse.com/sr_web-app-manifest){rel="[\"nofollow\"]"} | A feature that allows the user to add a web application to the home screen on the user's device.  In the LINE MINI App, a shortcut to a LINE MINI App can be added to the home screen on the user's device using **Add to Home** in the [multi-tab view](/docs/line-mini-app/discover/builtin-features/#multi-tab-view) or the [`liff.createShortcutOnHomeScreen()`](/reference/liff/#create-shortcut-on-home-screen) method. For more information, see [Add a shortcut to your LINE MINI App to the home screen of the user's device](/docs/line-mini-app/develop/add-to-home-screen/) in the LINE MINI App documentation. |
| [Service Workers](https://caniuse.com/serviceworkers){rel="[\"nofollow\"]"}                | A feature that enables offline support, background synchronization, push notifications, etc. in a web application                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |

The web technologies listed above may be supported by the LIFF browser in the future.

Whether or not the LIFF browser supports web technologies other than those listed above is in accordance with the specifications of [WKWebView](https://developer.apple.com/documentation/webkit/wkwebview){rel="[\"nofollow\"]"} and [Android WebView](https://developer.android.com/reference/android/webkit/WebView){rel="[\"nofollow\"]"}. For more information, see [Can I use...](https://caniuse.com/){rel="[\"nofollow\"]"}.
