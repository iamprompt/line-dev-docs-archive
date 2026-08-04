---
title: >-
  We made a temporary fix for a bug which prevented content from being displayed
  correctly when returning to the previous page after a transition between LIFF
  apps
navigation: true
description: >-
  In LINE or Safari on iOS 14.5.x or Safari 14.x on macOS, when users click the
  back button or return to the previous page after a transition between LIFF
  apps, the URL returned to the LIFF URL before the transition, but the screen
  remained the same or was blank.
meta: '{"date":"2021-05-31 01:00 UTC","tags":"LIFF, LINE MINI app","locale":"en"}'
path: /en/_partials/news/2021/2021-05-31-liff-workaround-for-webkit-bug
__hash__: '-Uhdb_LCn-nb9bgpXpe9x7O3cH5V78Gzfj1wC7p3FII'
seo:
  title: >-
    We made a temporary fix for a bug which prevented content from being
    displayed correctly when returning to the previous page after a transition
    between LIFF apps
  description: >-
    In LINE or Safari on iOS 14.5.x or Safari 14.x on macOS, when users click
    the back button or return to the previous page after a transition between
    LIFF apps, the URL returned to the LIFF URL before the transition, but the
    screen remained the same or was blank.
---

In LINE or Safari on iOS 14.5.x or Safari 14.x on macOS, when users click the back button or return to the previous page after a transition between LIFF apps, the URL returned to the LIFF URL before the transition, but the screen remained the same or was blank.

**The screen becoming blank when returning to the LIFF app before the transition between LIFF apps**

![Diagram of a blank screen when returning to the LIFF app before the transition between LIFF apps.](/media/news/content-vanish-bug-en.png){className="[\"w-fix-680\"]"}

### Environment where the problem occurred

- LINE and Safari on iOS 14.5.x
- Safari 14.x on macOS

### Cause of the problem

The cause of this problem is a bug in [Apple WebKit](https://developer.apple.com/documentation/webkit){rel="[\"nofollow\"]"}.

We have already reported the issue to [WebKit Bugzilla](https://bugs.webkit.org/show_bug.cgi?id=226323){rel="[\"nofollow\"]"} and requested them to investigate it, but as a temporary measure, we have fixed the problem by changing the way the LIFF server handles additional information in LIFF URLs.

### Temporary support

In response to this, we have changed the way the LIFF server handles additional information about LIFF URLs to avoid the problem.

Previously, all additional information in LIFF URLs, such as the path (`/path`), query parameters (`?key=value`), and URL fragment (`#URL-fragment`), were concatenated with the endpoint URL and redirected to the secondary redirect URL. As a result of this temporary fix, URL fragments among additional information in LIFF URLs will be excluded during redirects, only when the LIFF app is running on iOS 14.5 and Safari 14.x.

For environments other than iOS 14.5 and Safari 14.x, there is no change from the previous method of handling additional information in LIFF URLs.

::admonition{title="No action is required on the LIFF app side" type="tip"}
The temporary support is completed only on the LIFF server side, so there is no need to upgrade the LIFF SDK or modify the code in your LIFF apps.
::

**Comparison of processing methods for additional information:**

| Comparison     | LIFF URL                                                                                                                               | Endpoint URL          | Secondary redirect URL                                                                                                       |
| -------------- | -------------------------------------------------------------------------------------------------------------------------------------- | --------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| Before bug fix | https://[liff.line.me/{liffId}   :b[/path]{style="color:red"}:b[?key=value]{style="color:green"}:b[#URL-fragment]{style="color:blue"}] | https://[example.com] | https://[example.com   :b[/path]{style="color:red"}:b[?key=value]{style="color:green"}:b[#URL-fragment]{style="color:blue"}] |
| After bug fix  | https://[liff.line.me/{liffId}   :b[/path]{style="color:red"}:b[?key=value]{style="color:green"}:b[#URL-fragment]{style="color:blue"}] | https://[example.com] | https://[example.com   :b[/path]{style="color:red"}:b[?key=value]{style="color:green"}]                                      |

::admonition{title="If you want to include a URL fragment" type="note"}
Due to this temporary support, URL fragments included in the additional information in LIFF URLs will be excluded during redirects. However, if you directly access the endpoint URL that contains a URL fragment, the URL fragment will still be loaded as before.

If you want to use URL fragments during transitions between LIFF apps, configure your app so that end users will access the endpoint URL (e.g. `https://example.com#URL-fragment`) instead of the LIFF URL (e.g. `https://liff.line.me/{liffId}#URL-fragment`).

URL fragments can't be specified in **Endpoint URL** of the [LINE Developers Console](/console/) as before.
::

For more information about transitions between LIFF apps, see [Opening a LIFF app from another LIFF app](/docs/liff/opening-liff-app/#move-liff-to-liff) in the LIFF documentation.
