---
title: 2023年9月上旬よりMessaging APIでメッセージを送信した際のレスポンスが変わります
navigation: true
description: 2023年9月上旬に、Messaging APIで応答メッセージおよびプッシュメッセージを送信した際の、レスポンスの仕様を変更する予定です。
meta: '{"date":"2023-07-31 00:00 UTC","tags":"Messaging API","locale":"ja"}'
path: >-
  /ja/_partials/news/2023/2023-07-31-change-the-response-when-sending-a-message-using-the-messaging-api
__hash__: xy72ApZsZ6PGpRHtC4RqkGdPW4iH_yHb-kFs0aZOzhg
seo:
  title: 2023年9月上旬よりMessaging APIでメッセージを送信した際のレスポンスが変わります
  description: 2023年9月上旬に、Messaging APIで応答メッセージおよびプッシュメッセージを送信した際の、レスポンスの仕様を変更する予定です。
---

2023年9月上旬に、Messaging APIで応答メッセージおよびプッシュメッセージを送信した際の、レスポンスの仕様を変更する予定です。

### 仕様変更予定日

2023年9月上旬

なお、この仕様変更の内容および日時は、予告なく変更される可能性があります。

### 変更点

現在、Messaging APIでは、応答メッセージまたはプッシュメッセージの送信リクエストを行った際に、成功時はレスポンスで空のJSONオブジェクトを返しています。

**変更前（現在）**

```json
{}
```

仕様変更後は、`sentMessages`プロパティを含むJSONオブジェクトを返します。ただし送信したメッセージオブジェクトによって、`sentMessages[].quoteToken`は含まれない場合もあります。

**変更後**

```json
{
  "sentMessages": [
    {
      "id": "461230966842064897",
      "quoteToken": "IStG5h1Tz7bsH6xinEQtKQ9IdtcN5wLE15-LwtIDCEYAqDkV741O-XkOhZo1GYxw2UCURKnpHujpZuZaBaeQZVOVpKiaEeAz1Ye3-3ZYbPQVjuXZ4x8ZpISG7WhJDCE8o-hhHh8uMBRyp3b0L_Cxlg"
    }
  ]
}
```

### 影響範囲

- [応答メッセージを送る](/reference/messaging-api/#send-reply-message)
- [プッシュメッセージを送る](/reference/messaging-api/#send-push-message)

### 仕様変更に伴う注意点

仕様変更後、従来と異なる構造のJSONオブジェクトをレスポンスで受信しても不具合が発生しないように、リクエスト元を実装してください。

なおこの仕様変更のように、今後もMessaging APIの機能に追加または変更があった際には、レスポンスのJSONオブジェクトの構造が変更される可能性があります。この変更には、プロパティの追加、プロパティの順序の変化、データの要素間の空白や改行の有無が含まれます。

LINEは今後もお客様への一層のサービス向上に取組んでまいります。何卒ご理解を賜りますよう、よろしくお願い申し上げます。
