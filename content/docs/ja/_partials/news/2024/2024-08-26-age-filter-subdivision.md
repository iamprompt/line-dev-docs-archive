---
title: Messaging APIにおいて、ナローキャストメッセージで50歳から70歳までを詳細にフィルタリングできるようになりました
navigation: true
description: >-
  Messaging
  APIにおいて、ナローキャストメッセージのデモグラフィックフィルターオブジェクトで送信対象を年齢でフィルタリングする際の条件として、以下の値が追加されました。
meta: '{"date":"2024-08-26 00:00 UTC","tags":"messaging-api","locale":"ja"}'
path: /ja/_partials/news/2024/2024-08-26-age-filter-subdivision
__hash__: luzNunZ1NzQnzMkDlVg3_aQDYHvrIo5dVBIMl1x__PU
seo:
  title: Messaging APIにおいて、ナローキャストメッセージで50歳から70歳までを詳細にフィルタリングできるようになりました
  description: >-
    Messaging
    APIにおいて、ナローキャストメッセージのデモグラフィックフィルターオブジェクトで送信対象を年齢でフィルタリングする際の条件として、以下の値が追加されました。
---

Messaging APIにおいて、[ナローキャストメッセージ](/reference/messaging-api/#send-narrowcast-message)の[デモグラフィックフィルターオブジェクト](/reference/messaging-api/#narrowcast-demographic-filter)で送信対象を年齢でフィルタリングする際の条件として、以下の値が追加されました。

- `age_55`
- `age_60`
- `age_65`
- `age_70`

これまでは、`age_50`が上限であったため、50歳以上の年齢を細かくフィルタリングできませんでした。今回追加された年齢を指定することで、送信対象をこれまでより柔軟にフィルタリングできます。

たとえば、50歳以上60歳未満の年齢でフィルタリングするデモグラフィックフィルターオブジェクトは次のとおりです。

```json
{
  "type": "age",
  "gte": "age_50",
  "lt": "age_60"
}
```

### LINE Messaging API SDKの更新について

上記に伴う[LINE Messaging API SDK](/docs/messaging-api/line-bot-sdk/)の更新状況については、それぞれのSDKのリリースノートを参照してください。
