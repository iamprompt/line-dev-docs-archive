---
title: >-
  We've fixed a bug in LINE version 12.13.0 or later where liff.referrer wasn't
  added after a LIFF-to-LIFF transition
navigation: true
description: >-
  In LINE version 12.13.0 or later, there was a bug where the LIFF browser
  didn't send the Referer request header during a LIFF-to-LIFF transition, and
  the liff.referrer query parameter wasn't added to the LIFF app URL after the
  transition.
meta: '{"date":"2023-11-30 01:00 UTC","tags":"liff, line-mini-app","locale":"en"}'
path: /en/_partials/news/2023/2023-11-30-liff-update-line-13-20-0
__hash__: p9pllnI7kSErl47PU98xH7ZaDeg5uYdU0_VAVTLpZKM
seo:
  title: >-
    We've fixed a bug in LINE version 12.13.0 or later where liff.referrer
    wasn't added after a LIFF-to-LIFF transition
  description: >-
    In LINE version 12.13.0 or later, there was a bug where the LIFF browser
    didn't send the Referer request header during a LIFF-to-LIFF transition, and
    the liff.referrer query parameter wasn't added to the LIFF app URL after the
    transition.
---

In LINE version 12.13.0 or later, there was a bug where the :glossary-tooltip[[LIFF browser](/glossary/#liff-browser)]{glossary-id="liff-browser"} didn't send the `Referer` request header during a [LIFF-to-LIFF transition](/docs/liff/opening-liff-app/#move-liff-to-liff), and the `liff.referrer` query parameter wasn't added to the LIFF app URL after the transition.

We've fixed the bug in LINE version 13.20.0 so that the `liff.referrer` query parameter would be added to the LIFF app URL after the transition.
