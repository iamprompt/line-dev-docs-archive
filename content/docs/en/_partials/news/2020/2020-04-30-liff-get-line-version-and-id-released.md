---
title: liff.getLineVersion() and liff.id added to LIFF v2
navigation: true
description: We added the liff.getLineVersion() method and the liff.id property to LIFF v2.
meta: '{"date":"2020-04-30 00:00 UTC","tags":"LIFF","locale":"en"}'
path: /en/_partials/news/2020/2020-04-30-liff-get-line-version-and-id-released
__hash__: '-RX0Y_cuhq0pJ_juCatg_JoHKwCMM6ID_FR2_dA_yag'
seo:
  title: liff.getLineVersion() and liff.id added to LIFF v2
  description: >-
    We added the liff.getLineVersion() method and the liff.id property to LIFF
    v2.
---

We added the `liff.getLineVersion()` method and the `liff.id` property to LIFF v2.

`liff.getLineVersion()` allows you to get the user's LINE version.

If a user opens the LIFF app using the LIFF browser, the LINE version of the user is returned as a string. If a user opens the LIFF app using an external browser, `null` is returned.

`liff.id` is the property that holds the LIFF app ID (String type) passed to `liff.init()`.

Learn more about [`liff.getLineVersion()`](/reference/liff/#get-line-version) and [`liff.id`](/reference/liff/#id) in the LIFF v2 API reference.
