---
title: ドキュメント訂正のお知らせ
navigation: true
description: 本日公開された、LIFFアプリを更新するAPIに関するニュース、およびドキュメントの記載に誤記がありました。お詫びして訂正いたします。
meta: '{"date":"2018-11-16 01:00 UTC","tags":"LIFF","locale":"ja"}'
path: /ja/_partials/news/2018/2018-11-16-put-api-about-liff
__hash__: DZMzNWAD-rCU9dnld7Ivch4VmFMJl18O5XAln7QveIQ
seo:
  title: ドキュメント訂正のお知らせ
  description: 本日公開された、LIFFアプリを更新するAPIに関するニュース、およびドキュメントの記載に誤記がありました。お詫びして訂正いたします。
---

本日公開された、LIFFアプリを更新するAPIに関するニュース、およびドキュメントの記載に誤記がありました。お詫びして訂正いたします。

### ニュース

【誤】
LIFFアプリを更新するAPIに対するHTTPリクエストが`PUT`から`PATCH`に変更され、プロパティを部分的に変更できるようになりました。

【正】
LIFFアプリを更新するAPIが変更され、プロパティを部分的に変更できるようになりました。

### ドキュメント

【誤】
`PATCH https://api.line.me/liff/v1/apps/{liffId}`

【正】
`PUT https://api.line.me/liff/v1/apps/{liffId}`

詳しくは、「[LIFFアプリを更新する](/reference/liff-server/#update-liff-app)」を参照してください。
