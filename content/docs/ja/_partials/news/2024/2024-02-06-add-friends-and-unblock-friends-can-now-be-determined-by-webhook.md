---
title: Messaging APIにおいて、友だち追加とブロック解除がWebhookのフォローイベントで判別できるようになりました
navigation: true
description: >-
  Messaging
  APIにおいて、LINE公式アカウントが友だち追加またはブロック解除されたことを、Webhookのフォローイベントで判別できるようになりました。
meta: '{"date":"2024-02-06 00:00 UTC","tags":"Messaging API","locale":"ja"}'
path: >-
  /ja/_partials/news/2024/2024-02-06-add-friends-and-unblock-friends-can-now-be-determined-by-webhook
__hash__: mb0xhU2ZmmmX8qB6asbWXaLELYXmNTdnrALC7RqgdnE
seo:
  title: Messaging APIにおいて、友だち追加とブロック解除がWebhookのフォローイベントで判別できるようになりました
  description: >-
    Messaging
    APIにおいて、LINE公式アカウントが友だち追加またはブロック解除されたことを、Webhookのフォローイベントで判別できるようになりました。
---

Messaging APIにおいて、LINE公式アカウントが友だち追加またはブロック解除されたことを、Webhookのフォローイベントで判別できるようになりました。

ユーザーがLINE公式アカウントを友だち追加、またはブロック解除すると、Webhookで[フォローイベント](/reference/messaging-api/#follow-event)が届きます。従来は、このフォローイベントだけで友だち追加かブロック解除かを判別することはできませんでした。

今回、フォローイベントに追加された`follow.isUnblocked`プロパティにより、ユーザーがLINE公式アカウントを初めて友だち追加したのか、過去に友だち追加とブロックをしていてブロック解除したのかを判別できるようになりました。

これにより、初めて友だち追加されたときだけ特典のクーポンを送ったり、友だち追加のときとブロック解除のときで[応答メッセージ](/docs/messaging-api/sending-messages/#reply-messages)の内容を変えたり、といった使い方が可能になります。

**ユーザーがLINE公式アカウントをブロック解除した際のフォローイベントの例**

```json
{
  "destination": "xxxxxxxxxx",
  "events": [
    {
      "replyToken": "nHuyWiB7yP5Zw52FIkcQobQuGDXCTA",
      "type": "follow",
      "mode": "active",
      "timestamp": 1462629479859,
      "source": {
        "type": "user",
        "userId": "U4af4980629..."
      },
      "webhookEventId": "01FZ74A0TDDPYRVKNK77XKC3ZR",
      "deliveryContext": {
        "isRedelivery": false
      },
      "follow": {
        "isUnblocked": true // ユーザーがLINE公式アカウントをブロック解除した
      }
    }
  ]
}
```

詳しくは、『Messaging APIリファレンス』の「[フォローイベント](/reference/messaging-api/#follow-event)」を参照してください。

### LINE Messaging API SDKの更新について

上記に伴う[LINE Messaging API SDK](/docs/messaging-api/line-bot-sdk/)の更新状況については、それぞれのSDKのリリースノートを参照してください。
