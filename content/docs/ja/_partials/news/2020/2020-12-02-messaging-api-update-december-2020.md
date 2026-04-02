---
title: Messaging APIアップデート（2020年12月）
navigation: true
description: Messaging APIのメッセージWebhookイベントオブジェクトのスタンプのメッセージタイプに、新たにプロパティが追加されました。
meta: '{"date":"2020-12-02 00:00 UTC","tags":"Messaging API","locale":"ja"}'
path: /ja/_partials/news/2020/2020-12-02-messaging-api-update-december-2020
__hash__: rIKCnucnyGfp90Cepq-I1p2cm5WAkH4gGzhDk89QozU
seo:
  title: Messaging APIアップデート（2020年12月）
  description: Messaging APIのメッセージWebhookイベントオブジェクトのスタンプのメッセージタイプに、新たにプロパティが追加されました。
---

Messaging APIの[メッセージWebhookイベントオブジェクト](/reference/messaging-api/#message-event)の[スタンプ](/reference/messaging-api/#wh-sticker)のメッセージタイプに、新たにプロパティが追加されました。

- [keywordsプロパティ](#keywords-news)

### keywordsプロパティ

今まで開発者は、Webhookイベントオブジェクトを見ただけでは、実際に送られたスタンプが「どんな気持ちを表現しているスタンプなのか」を把握することはできませんでした。今回追加された`keywords`プロパティで、スタンプが表現しているキーワードを確認できるようになりました。

```json
{
  "destination": "xxxxxxxxxx",
  "events": [
    {
      "replyToken": "nHuyWiB7yP5Zw52FIkcQobQuGDXCTA",
      "type": "message",
      "mode": "active",
      "timestamp": 1462629479859,
      "source": {
        "type": "user",
        "userId": "U4af4980629..."
      },
      "message": {
        "type": "sticker",
        "id": "1501597916",
        "stickerId": "52002738",
        "packageId": "11537",
        "stickerResourceType": "ANIMATION",
        "keywords": ["cony","sally","Staring","hi","whatsup","line","howdy","HEY","Peeking","wave","peek","Hello","yo","greetings"]
      }
    }
  ]
}
```

::admonition{title="keywordsプロパティは試験的な段階です" type="note"}
`keywords`プロパティは、現在試験的に提供しています。そのため、今後予告なく仕様が変更されたり、提供を終了する可能性があります。
::

詳しくは、『Messaging APIリファレンス』の「[スタンプ](/reference/messaging-api/#wh-sticker)」のメッセージタイプを参照してください。
