---
title: LIFF URLにアクセスした際に付与されていた追加情報（パス、クエリパラメータ、URLフラグメント）は、リダイレクト先のURLにも付与されますか？
navigation: true
description: >-
  ユーザーがアクセスしたLIFF
  URLにパス、クエリパラメータ、URLフラグメントといった追加情報が付与されていた場合、それらの情報はリダイレクト先のURLにも付与されます。
meta: >-
  {"date":"2024-10-21 0:00 UTC","tags":"liff,
  line-mini-app","priority":1000,"locale":"ja"}
path: >-
  /ja/_partials/faq/is-the-additional-information-of-liff-url-also-passed-to-the-redirected-url
__hash__: VWEoicQCwK6A_dBOVDvVbAR5wuWcP4qvYglwQFTF_pY
seo:
  title: LIFF URLにアクセスした際に付与されていた追加情報（パス、クエリパラメータ、URLフラグメント）は、リダイレクト先のURLにも付与されますか？
  description: >-
    ユーザーがアクセスしたLIFF
    URLにパス、クエリパラメータ、URLフラグメントといった追加情報が付与されていた場合、それらの情報はリダイレクト先のURLにも付与されます。
---

ユーザーがアクセスしたLIFF URLにパス、クエリパラメータ、URLフラグメントといった追加情報が付与されていた場合、それらの情報はリダイレクト先のURLにも付与されます。

以下は、エンドポイントURLが`https://example.com/`の場合に、LIFF URLに`/path1/?campaign=campaign1#section-2`を追加情報として付与したときの例です。

| QRコードなどからユーザーがアクセスするLIFF URL                                        | リダイレクト先のURL                                               |
| ------------------------------------------------------------------- | --------------------------------------------------------- |
| `https://liff.line.me/{liffId}/path1/?campaign=campaign1#section-2` | `https://example.com/path1/?campaign=campaign1#section-2` |

詳しくは、「[LIFF URLにアクセスしてからLIFFアプリが開くまでの動作について](/docs/liff/opening-liff-app/#redirect-flow)」を参照してください。
