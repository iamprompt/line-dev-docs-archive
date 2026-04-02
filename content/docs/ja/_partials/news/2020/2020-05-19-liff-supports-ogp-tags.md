---
title: LIFFアプリでOGPタグを利用できるようになりました
navigation: true
description: >-
  LIFFアプリの各ページにOGPタグを設定すると、たとえばLINEのトークルームでLIFFアプリのURL（https://liff.line.me/{liffId}）をシェアしたときに、任意のタイトルや説明文、サムネイル画像を表示できるようになりました。
meta: '{"date":"2020-05-19 00:00 UTC","tags":"LIFF","locale":"ja"}'
path: /ja/_partials/news/2020/2020-05-19-liff-supports-ogp-tags
__hash__: Wqs9uMqvolhUwaeBDir2F_qV_WAOLgafho3O1WxBdIk
seo:
  title: LIFFアプリでOGPタグを利用できるようになりました
  description: >-
    LIFFアプリの各ページにOGPタグを設定すると、たとえばLINEのトークルームでLIFFアプリのURL（https://liff.line.me/{liffId}）をシェアしたときに、任意のタイトルや説明文、サムネイル画像を表示できるようになりました。
---

LIFFアプリの各ページにOGPタグを設定すると、たとえばLINEのトークルームでLIFFアプリのURL（`https://liff.line.me/{liffId}`）をシェアしたときに、任意のタイトルや説明文、サムネイル画像を表示できるようになりました。

LIFFで対応しているOGPタグは以下のとおりです。
OGPタグについて詳しくは、「[The Open Graph protocol](https://ogp.me/){rel="[\"nofollow\"]"}」を参照してください。

```html
<html lang="ja" prefix="og: http://ogp.me/ns#">
<meta property="og:title" content="タイトル">
<meta property="og:type" content="`website`、`blog`、または`article`">
<meta property="og:description" content="ページの簡単な説明">
<meta property="og:url" content="ページのURL">
<meta property="og:site_name" content="サイト全体を表す名前">
<meta property="og:image" content="サムネイル画像のURL">
```

::admonition{title="注意" type="note"}
LIFFアプリのURLを、`line://app/{liffId}`（非推奨）の形式でシェアしたときは、OGPタグは無視されます。
::
