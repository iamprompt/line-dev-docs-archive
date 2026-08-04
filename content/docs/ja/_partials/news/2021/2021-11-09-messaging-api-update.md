---
title: Messaging APIアップデート（2021年11月）
navigation: true
description: Messaging APIに新たな機能が追加されました。今回のアップデートで追加、更新された機能は以下のとおりです。
meta: '{"date":"2021-11-09 00:00 UTC","tags":"Messaging API","locale":"ja"}'
path: /ja/_partials/news/2021/2021-11-09-messaging-api-update
__hash__: wqFyzF4r_UwRyqUbxi3EHXNflV1Wsq3YlV9PO39IiF4
seo:
  title: Messaging APIアップデート（2021年11月）
  description: Messaging APIに新たな機能が追加されました。今回のアップデートで追加、更新された機能は以下のとおりです。
---

Messaging APIに新たな機能が追加されました。今回のアップデートで追加、更新された機能は以下のとおりです。

- [メッセージスタンプでユーザーが入力したテキストを取得できるようになりました](#messaging-api-202111-01)
- [友だちのユーザーIDを一度に最大1000件取得できるようになりました](#messaging-api-202111-02)

### メッセージスタンプでユーザーが入力したテキストを取得できるようになりました

![メッセージスタンプ](/media/news/message-sticker-sample.png){className="[\"w-fix-320\"]"}

:glossary-tooltip[[メッセージスタンプ](/glossary/#message-sticker)]{glossary-id="message-sticker"}で、ユーザーが入力した任意のテキストを取得できるようになりました。

Messaging APIでは、ユーザーがLINE公式アカウントにスタンプを送信すると、LINEプラットフォームからボットサーバーにWebhookイベントが送られます。メッセージスタンプの場合、このWebhookに含まれるスタンプのメッセージオブジェクトに`text`フィールドが追加され、ユーザーが入力した任意のテキストを取得できるようになりました。

```json
"message": {
    "type": "sticker",
    "id": "123456789012345678",
    "stickerId": "738839",
    "packageId": "12287",
    "stickerResourceType": "MESSAGE",
    "keywords": [
        "Anticipation",
        "Sparkle",
        "Straight face",
        "Staring",
        "Thinking"
    ],
    "text": "今週末\n一緒に\n遊ぼうよ！"
}
```

この変更に伴い、スタンプのリソースタイプを表す`stickerResourceType`フィールドの値も、以下のように変更されました。

| リソースタイプ                                                                                          | 変更前                | 変更後（現在）   |
| ------------------------------------------------------------------------------------------------ | ------------------ | --------- |
| ::glossary-tooltip{glossary-id="message-sticker"}   [メッセージスタンプ](/glossary/#message-sticker)   :: | `PER_STICKER_TEXT` | `MESSAGE` |
| ::glossary-tooltip{glossary-id="custom-sticker"}   [カスタムスタンプ](/glossary/#custom-sticker)   ::    | `NAME_TEXT`        | `CUSTOM`  |

詳しくは、『Messaging APIリファレンス』の「[スタンプ](/reference/messaging-api/#wh-sticker)」を参照してください。

### 友だちのユーザーIDを一度に最大1000件取得できるようになりました

[LINE公式アカウントを友だち追加したユーザーのリストを取得する](/reference/messaging-api/#get-follower-ids)際、従来はユーザーIDを最大300件ずつしか取得できませんでした。今回のアップデートにより、取得する件数を`limit`プロパティで指定することで、一度に最大1000件ずつ取得できるようになりました。

|                    | 変更前  | 変更後（現在） |
| ------------------ | ---- | ------- |
| 一度に取得できるユーザーIDの最大数 | 300件 | 1000件   |

詳しくは、『Messaging APIリファレンス』の「[LINE公式アカウントを友だち追加したユーザーのリストを取得する](/reference/messaging-api/#get-follower-ids)」を参照してください。
