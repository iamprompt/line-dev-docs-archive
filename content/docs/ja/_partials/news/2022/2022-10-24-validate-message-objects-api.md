---
title: Messaging APIのメッセージオブジェクトを検証するエンドポイントを追加しました
navigation: true
description: Messaging APIのメッセージオブジェクトが有効かを検証するエンドポイントを追加しました。追加されたエンドポイントは以下のとおりです。
meta: '{"date":"2022-10-24 00:00 UTC","tags":"Messaging API","locale":"ja"}'
path: /ja/_partials/news/2022/2022-10-24-validate-message-objects-api
__hash__: zp3xVmk5LU9Qd6tqEiVI1W9Z-dFA-9hyrk26wVWAQQs
seo:
  title: Messaging APIのメッセージオブジェクトを検証するエンドポイントを追加しました
  description: Messaging APIのメッセージオブジェクトが有効かを検証するエンドポイントを追加しました。追加されたエンドポイントは以下のとおりです。
---

Messaging APIの[メッセージオブジェクト](/reference/messaging-api/#message-objects)が有効かを検証するエンドポイントを追加しました。追加されたエンドポイントは以下のとおりです。

- [応答メッセージのメッセージオブジェクトを検証する](/reference/messaging-api/#validate-message-objects-of-reply-message)
- [プッシュメッセージのメッセージオブジェクトを検証する](/reference/messaging-api/#validate-message-objects-of-push-message)
- [マルチキャストメッセージのメッセージオブジェクトを検証する](/reference/messaging-api/#validate-message-objects-of-multicast-message)
- [ナローキャストメッセージのメッセージオブジェクトを検証する](/reference/messaging-api/#validate-message-objects-of-narrowcast-message)
- [ブロードキャストメッセージのメッセージオブジェクトを検証する](/reference/messaging-api/#validate-message-objects-of-broadcast-message)

これまでは、メッセージオブジェクトが有効かを検証する場合、自分自身にメッセージを送るなど、実際にメッセージを送る必要がありました。しかしこの方法では、送信可能なメッセージ通数を減らしてしまうという問題がありました。

上記のエンドポイントを利用することで、送信可能なメッセージ通数を減らすことなく、メッセージオブジェクトが有効かを検証できるようになりました。
