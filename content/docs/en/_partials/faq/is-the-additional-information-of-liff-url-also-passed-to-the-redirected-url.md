---
title: >-
  Is the additional information (path, query parameters, URL fragments) included
  in the LIFF URL accessed by the user also passed to the redirected URL?
navigation: true
description: >-
  If additional information such as paths, query parameters, or URL fragments
  are provided to the LIFF URL accessed by the user, all additional information
  is passed to the redirected URL.
meta: >-
  {"date":"2024-10-21 0:00 UTC","tags":"liff,
  line-mini-app","priority":1000,"locale":"en"}
path: >-
  /en/_partials/faq/is-the-additional-information-of-liff-url-also-passed-to-the-redirected-url
__hash__: vgbfUsBgGgPoJfW791ZNTL4nh0hO1dXaeUjHmVFu1mU
seo:
  title: >-
    Is the additional information (path, query parameters, URL fragments)
    included in the LIFF URL accessed by the user also passed to the redirected
    URL?
  description: >-
    If additional information such as paths, query parameters, or URL fragments
    are provided to the LIFF URL accessed by the user, all additional
    information is passed to the redirected URL.
---

If additional information such as paths, query parameters, or URL fragments are provided to the LIFF URL accessed by the user, all additional information is passed to the redirected URL.

The following is an example when the endpoint URL is `https://example.com/` and the LIFF URL has `/path1/?campaign=campaign1#section-2` as additional information:

| LIFF URL accessed by users from QR codes, etc                       | Redirect URL                                              |
| ------------------------------------------------------------------- | --------------------------------------------------------- |
| `https://liff.line.me/{liffId}/path1/?campaign=campaign1#section-2` | `https://example.com/path1/?campaign=campaign1#section-2` |

For more information, see [Behaviors from accessing the LIFF URL to opening the LIFF app](/docs/liff/opening-liff-app/#redirect-flow).
