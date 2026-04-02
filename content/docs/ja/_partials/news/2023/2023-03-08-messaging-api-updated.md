---
title: Messaging APIで@AllがWebhookのmentionプロパティに含まれるようになりました
navigation: true
description: Messaging APIにおいて、@Allによるグループ全体へのメンションが、Webhookのmentionプロパティに含まれるようになりました。
meta: '{"date":"2023-03-08 00:00 UTC","tags":"Messaging API","locale":"ja"}'
path: /ja/_partials/news/2023/2023-03-08-messaging-api-updated
__hash__: 34zFJ_27TBfjdfh3DXsK2n64_-DAqqe1uJJ6PowuZl4
seo:
  title: Messaging APIで@AllがWebhookのmentionプロパティに含まれるようになりました
  description: Messaging APIにおいて、@Allによるグループ全体へのメンションが、Webhookのmentionプロパティに含まれるようになりました。
---

Messaging APIにおいて、`@All`によるグループ全体へのメンションが、Webhookの`mention`プロパティに含まれるようになりました。

![ユーザーが@Allメンションを送る](/media/news/2023/at-all-mention.png){className="[\"border\",\"w-fix-480\"]"}

LINE公式アカウントが参加しているグループトークや複数人トークにおいて、ユーザーが上記のような`@All`による全体へのメンションを含むメッセージを送ると、ボットサーバーにメンションの情報を含むWebhookイベントが送られるようになりました。

以下は、ユーザーが`@All`による全体へのメンションを含むメッセージを送った際に、ボットサーバーに届くWebhookの例です。

```json
{
  "destination": "xxxxxxxxxx",
  "events": [
    {
      "message": {
        "id": "444562148736892931",
        "type": "text",
        "text": "@All Good morning!!", // ユーザーが@Allによる全体へのメンションを含むテキストメッセージを送る
        "mention": {
          "mentionees": [
            {
              "index": 0,
              "length": 4,
              "type": "all" // mention.mentionees[].typeがallなので全体へのメンションを送ったことが分かる
            }
          ]
        }
      },
      "replyToken": "nHuyWiB7yP5Zw52FIkcQobQuGDXCTA",
      "type": "message",
      "mode": "active",
      "timestamp": 1677837030859,
      "source": {
        "type": "group",
        "groupId": "Ca56f94637c...",
        "userId": "U4af4980629..."
      },
      "webhookEventId": "01FZ74A0TDDPYRVKNK77XKC3ZR",
      "deliveryContext": {
        "isRedelivery": false
      }
    }
  ]
}
```

`mention`プロパティについて詳しくは、『Messaging APIリファレンス』の「[メッセージイベント](/reference/messaging-api/#message-event)」の「[テキスト](/reference/messaging-api/#wh-text)」を参照してください。

グループ全体を指定するAllメンション機能について詳しくは、『LINEみんなの使い方ガイド』の「[トークのメンション機能を利用する](https://guide.line.me/ja/chats-calls-notifications/chats/chat-mention.html){rel="[\"nofollow\"]"}」を参照してください。
