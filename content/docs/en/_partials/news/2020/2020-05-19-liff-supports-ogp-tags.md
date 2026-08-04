---
title: OGP tags are now available in the LIFF app
navigation: true
description: >-
  By setting an OGP tag for each page of your LIFF app, for example, you can
  display any title, description, or thumbnail image when sharing the URL of
  your LIFF app (https://liff.line.me/{liffId}) in the LINE chat room, and so
  on.
meta: '{"date":"2020-05-19 00:00 UTC","tags":"LIFF","locale":"en"}'
path: /en/_partials/news/2020/2020-05-19-liff-supports-ogp-tags
__hash__: oStLES61-MU_RwQlyqrC-jpAr_8mBLKmnYlJzwa5ZeI
seo:
  title: OGP tags are now available in the LIFF app
  description: >-
    By setting an OGP tag for each page of your LIFF app, for example, you can
    display any title, description, or thumbnail image when sharing the URL of
    your LIFF app (https://liff.line.me/{liffId}) in the LINE chat room, and so
    on.
---

By setting an OGP tag for each page of your LIFF app, for example, you can display any title, description, or thumbnail image when sharing the URL of your LIFF app (`https://liff.line.me/{liffId}`) in the LINE chat room, and so on.

These are the OGP tags supported by LIFF.
For more information on OGP tags, see [The Open Graph protocol](https://ogp.me/){rel="[\"nofollow\"]"}.

```html
<html lang="ja" prefix="og: http://ogp.me/ns#">
<meta property="og:title" content="The title">
<meta property="og:type" content="`website`, `blog`, or `article`">
<meta property="og:description" content="A one to two sentence description">
<meta property="og:url" content="The URL">
<meta property="og:site_name" content="The name that represents the overall site">
<meta property="og:image" content="An image URL">
```

::admonition{title="Note" type="note"}
When sharing the URL of the LIFF app in the format of `line://app/{liffId}` (deprecated), the OGP tag will be ignored.
::
