---
title: >-
  On LINE version 15.20.0 or later, the behavior of the liff.openWindow() method
  will change
navigation: true
description: >-
  On LINE version 15.20.0 or later, the behavior of the liff.openWindow() method
  will change when opening URLs that support Universal Links or App Links.
meta: '{"date":"2025-11-04 00:00 UTC","tags":"liff, line-mini-app","locale":"en"}'
path: /en/_partials/news/2025/2025-11-04-liff-openwindow
__hash__: tR1npxGA-wRE4x32uwA6ucYLVwgePXcMmYjbJkjk8s0
seo:
  title: >-
    On LINE version 15.20.0 or later, the behavior of the liff.openWindow()
    method will change
  description: >-
    On LINE version 15.20.0 or later, the behavior of the liff.openWindow()
    method will change when opening URLs that support Universal Links or App
    Links.
---

On LINE version 15.20.0 or later, the behavior of the [`liff.openWindow()`](/reference/liff/#open-window) method will change when opening URLs that support [Universal Links](https://developer.apple.com/documentation/xcode/allowing-apps-and-websites-to-link-to-your-content/){rel="[\"nofollow\"]"} or [App Links](https://developer.android.com/training/app-links){rel="[\"nofollow\"]"}.

### Target version

LINE version 15.20.0 (scheduled for release in early December 2025)

The content and date of this specification change are subject to change.

### Changes

On LINE version 14.20.0 or later, which has already been released, the `liff.openWindow()` method always transitions to the corresponding app when opening a URL that supports Universal Links or App Links.

Starting with LINE version 15.20.0, this behavior will change. Whether to transition to the corresponding app or open the URL in LINE's in-app browser will be determined by the value of the `params.external` parameter (*).

* The `params.external` parameter is an option to specify whether to open the URL in an external browser.

#### Behavioral differences by LINE version

The behavior of the `liff.openWindow()` method when opening URLs that support Universal Links or App Links varies depending on the LINE version and the `params.external` setting. The differences in behavior are as follows:

|                                                  | `params.external = false`   (default)                                                         | `params.external = true`                                                                    |
| ------------------------------------------------ | --------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| LINE earlier than 14.20.0 (*)                    | - iOS: Opens the URL in LINE's in-app browser - Android: Transitions to the corresponding app | - iOS: Transitions to the corresponding app - Android: Opens the URL in the default browser |
| LINE 14.20.0 or later,   or earlier than 15.20.0 | Transitions to the corresponding app                                                          | Transitions to the corresponding app                                                        |
| LINE 15.20.0 or later                            | Opens the URL in LINE's in-app browser                                                        | Transitions to the corresponding app                                                        |

* On LINE version 14.20.0 or later, behavior no longer differs by OS.

### Important points on this specification change

As indicated in [Changes](#changes-20251104), the behavior of the `liff.openWindow()` method may differ depending on the user’s OS and LINE version. If you use the `liff.openWindow()` method to open external apps from your LIFF app, implement appropriate handling based on the [LIFF environment](/reference/liff/#getting-environment).

We'll continue to work to further improve its service to our customers. Thank you for your understanding.
