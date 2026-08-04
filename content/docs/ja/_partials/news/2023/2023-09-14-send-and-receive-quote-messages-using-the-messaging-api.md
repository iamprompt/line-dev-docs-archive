---
title: Messaging APIで引用メッセージを送受信できるようになりました
navigation: true
description: >-
  Messaging
  APIで、LINE公式アカウントから引用メッセージを送ったり、ユーザーが送った引用メッセージをWebhookで受け取ったりできるようになりました。
meta: '{"date":"2023-09-14 00:00 UTC","tags":"messaging-api","locale":"ja"}'
path: >-
  /ja/_partials/news/2023/2023-09-14-send-and-receive-quote-messages-using-the-messaging-api
__hash__: LXJoahgUnXLye711PALWzvn-Fo7bOxcAOWgYd4SZhio
seo:
  title: Messaging APIで引用メッセージを送受信できるようになりました
  description: >-
    Messaging
    APIで、LINE公式アカウントから引用メッセージを送ったり、ユーザーが送った引用メッセージをWebhookで受け取ったりできるようになりました。
---

Messaging APIで、LINE公式アカウントから引用メッセージを送ったり、ユーザーが送った引用メッセージをWebhookで受け取ったりできるようになりました。

- [LINE公式アカウントから引用メッセージを送る](#update-20230914-01)
- [引用メッセージをWebhookで受け取る](#update-20230914-02)
- [引用トークンを取得する](#update-20230914-03)

### LINE公式アカウントから引用メッセージを送る

応答メッセージやプッシュメッセージを送るとき、過去のメッセージを引用できるようになりました。

![](/media/news/2023/chat-reply-from-bot.png){className="[\"border\",\"w-fix-480\"]"}

過去のメッセージを引用したメッセージを送るには、引用対象となるメッセージの引用トークン（`quoteToken`）を指定します。

**過去のメッセージを引用したプッシュメッセージのリクエストの例**

```sh
curl -v -X POST https://api.line.me/v2/bot/message/push \
-H 'Content-Type: application/json' \
-H 'Authorization: Bearer {channel access token}' \
-d '{
  "to": "U4af4980629...",
  "messages": [
    {
      "type": "text",
      "text": "Yes, you can.",
      "quoteToken": "yHAz4Ua2wx7..." // 引用対象となるメッセージの引用トークンを指定する
    }
  ]
}'
```

詳しくは、『Messaging APIドキュメント』の「[引用メッセージを送信する](/docs/messaging-api/sending-messages/#send-quote-messages)」を参照してください。

### 引用メッセージをWebhookで受け取る

ユーザーが送った引用メッセージをWebhookで受け取ることができるようになりました。

![](/media/messaging-api/receiving-messages/chat-reply.png){className="[\"border\",\"w-fix-480\"]"}

ユーザーが過去のメッセージを引用してメッセージを送った場合、Webhookの`message`プロパティに含まれる`quotedMessageId`プロパティで引用対象となったメッセージのIDを確認できます。

```json
"message": {
  "type": "text",
  "id": "468789577898262530", // 送られてきたメッセージのID
  "quotedMessageId": "468789532432007169", // 引用対象となったメッセージのID
  "quoteToken": "q3Plxr4AgKd...",
  "text": "Chicken, please." // 送られてきたメッセージのテキスト
}
```

詳しくは、『Messaging APIドキュメント』の「[ユーザーが送った引用メッセージをWebhookで受け取る](/docs/messaging-api/receiving-messages/#receive-quote-messages-sent-by-user)」を参照してください。

### 引用トークンを取得する

過去のメッセージを引用してメッセージを送る際に必要となる引用トークン（`quoteToken`）は、Webhookもしくはメッセージ送信時のレスポンスで取得できます。

詳しくは、『Messaging APIドキュメント』の「[引用トークンを取得する](/docs/messaging-api/get-quote-tokens/)」を参照してください。
