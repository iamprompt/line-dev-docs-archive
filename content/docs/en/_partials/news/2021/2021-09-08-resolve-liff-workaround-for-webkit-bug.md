---
title: >-
  We fixed the bug that caused content to be displayed incorrectly when
  returning to the LIFF app before transitioning between LIFFs
navigation: true
description: >-
  As announced in the news on May 31, 2021, when users click the back button or
  return to the previous page after a transition between LIFF apps, the URL
  returned to the LIFF URL before the transition, but the screen remained the
  same or was blank. This issue has been fixed in LINE or Safari on iOS 14.7 and
  Safari 14.1.2 on macOS.
meta: '{"date":"2021-09-08 00:00 UTC","tags":"LIFF, LINE MINI app","locale":"en"}'
path: /en/_partials/news/2021/2021-09-08-resolve-liff-workaround-for-webkit-bug
__hash__: xe-tpXVbBG1XnSGgRFTqerKReq6Of0IBkuapQyPqCOE
seo:
  title: >-
    We fixed the bug that caused content to be displayed incorrectly when
    returning to the LIFF app before transitioning between LIFFs
  description: >-
    As announced in the news on May 31, 2021, when users click the back button
    or return to the previous page after a transition between LIFF apps, the URL
    returned to the LIFF URL before the transition, but the screen remained the
    same or was blank. This issue has been fixed in LINE or Safari on iOS 14.7
    and Safari 14.1.2 on macOS.
---

As announced in the news on [May 31, 2021](/news/2021/05/31/liff-workaround-for-webkit-bug/), when users click the back button or return to the previous page after a transition between LIFF apps, the URL returned to the LIFF URL before the transition, but the screen remained the same or was blank. This issue has been fixed in LINE or Safari on iOS 14.7 and Safari 14.1.2 on macOS.

### Temporary support taken in response to this issue

Prior to May 31, 2021, the following issues occured with LINE or Safari on iOS 14.5.x or Safari 14.x on macOS.

![Diagram of a blank screen when returning to the LIFF app before the transition between LIFF apps](/media/news/content-vanish-bug-en.png){className="[\"w-fix-680\"]"}

We used a [temporary fix](/news/2021/05/31/liff-workaround-for-webkit-bug/#temporary-support) by excluding only the URL fragment from the additional information in the LIFF URL during the redirection.

However, in iOS 14.7 or later and Safari 14.1.2 or later, the issue in [Apple WebKit](https://developer.apple.com/documentation/webkit){rel="[\"nofollow\"]"} has been fixed so that secondary redirects containing URL fragments are now redirected correctly.

### Continuation of the temporary support

These versions still have the bug, so the temporary support will continue for these versions:

- iOS: 14.5 - 14.6
- Safari on macOS: 14.0 - 14.1.1

**Redirect behavior for each version:**

| Environment                                     | Behavior              | LIFF URL                                                                                                                               | Endpoint URL          | Secondary redirect URL                                                                                                       |
| ----------------------------------------------- | --------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | --------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| - iOS: 14.7 or later - Safari: 14.1.2 or later  | ✅ Normal              | https://[liff.line.me/{liffId}   :b[/path]{style="color:red"}:b[?key=value]{style="color:green"}:b[#URL-fragment]{style="color:blue"}] | https://[example.com] | https://[example.com   :b[/path]{style="color:red"}:b[?key=value]{style="color:green"}:b[#URL-fragment]{style="color:blue"}] |
| - iOS: 14.5 - 14.6 - Safari: 14.0 - 14.1.1      | ❌ Temporary   support | https://[liff.line.me/{liffId}   :b[/path]{style="color:red"}:b[?key=value]{style="color:green"}:b[#URL-fragment]{style="color:blue"}] | https://[example.com] | https://[example.com   :b[/path]{style="color:red"}:b[?key=value]{style="color:green"}]                                      |
| - iOS: 14.4 or ealier - Safari: 13.x or earlier | ✅ Normal              | https://[liff.line.me/{liffId}   :b[/path]{style="color:red"}:b[?key=value]{style="color:green"}:b[#URL-fragment]{style="color:blue"}] | https://[example.com] | https://[example.com   :b[/path]{style="color:red"}:b[?key=value]{style="color:green"}:b[#URL-fragment]{style="color:blue"}] |

::admonition{title="On URL fragments in LIFF URLs" type="tip"}
If you have temporarily excluded URL fragments from your LIFF URLs due to the impact of the issue, we recommend that you include URL fragments in your LIFF URLs again.
::

For more information, see [Opening a LIFF app from another LIFF app (LIFF-to-LIFF transition)](/docs/liff/opening-liff-app/#move-liff-to-liff) in the LIFF documentation.
