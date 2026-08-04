---
title: Messaging APIで取得できる友だちの統計情報において、50歳から70歳までの割合を取得できるようになりました
navigation: true
description: >-
  Messaging
  APIにおいて、「友だちの属性情報に基づく統計情報を取得する」エンドポイントで取得できるLINE公式アカウントの友だちの年齢ごとの割合に、以下の値を追加しました。
meta: '{"date":"2024-09-05 00:00 UTC","tags":"messaging-api","locale":"ja"}'
path: /ja/_partials/news/2024/2024-09-05-age-percentage-subdivision
__hash__: WuzbEa_nfXrVQo1_1MVdzNBLxHmsOO6lzM7gikYDa5c
seo:
  title: Messaging APIで取得できる友だちの統計情報において、50歳から70歳までの割合を取得できるようになりました
  description: >-
    Messaging
    APIにおいて、「友だちの属性情報に基づく統計情報を取得する」エンドポイントで取得できるLINE公式アカウントの友だちの年齢ごとの割合に、以下の値を追加しました。
---

Messaging APIにおいて、「[友だちの属性情報に基づく統計情報を取得する](/reference/messaging-api/#get-demographic)」エンドポイントで取得できるLINE公式アカウントの友だちの年齢ごとの割合に、以下の値を追加しました。

- `from50to54`
- `from55to59`
- `from60to64`
- `from65to69`
- `from70`

これまで、50歳以上の友だちの割合は`from50`として1つの値で集計していました。この変更により、50歳から70歳までの友だちの割合を統計情報として取得できるようになりました。

なお、`from50`は50歳以上の友だちの割合を集計した値として、これまでどおりレスポンスに含まれます。

### LINE Messaging API SDKの更新について

上記に伴う[LINE Messaging API SDK](/docs/messaging-api/line-bot-sdk/)の更新状況については、それぞれのSDKのリリースノートを参照してください。
