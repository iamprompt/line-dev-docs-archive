---
title: 【更新】Messaging APIアップデート（2020年4月）
navigation: true
description: ''
meta: '{"date":"2020-04-14 00:00 UTC","tags":"Messaging API","locale":"ja"}'
path: /ja/_partials/news/2020/2020-04-14-messaging-api-update-april-2020
__hash__: NMRIO_NBbPkKhWAVNcnevrQ1BF-WqnA8UDKitd15LT4
seo:
  title: 【更新】Messaging APIアップデート（2020年4月）
  description: ''
---

::admonition{title="2020年4月16日更新" type="note"}
2020年4月14日にお知らせしていた以下のプロパティ名を変更しました。

| 変更前               | 変更後              |
| ----------------- | ---------------- |
| `sticon`          | `emojis`         |
| `sticon.sticonId` | `emojis.emojiId` |
::

Messaging APIにおいて、以下の改善を行いました。

## テキストメッセージでLINE絵文字を送信する

Messaging APIで[テキストメッセージ](/reference/messaging-api/#text-message)を送信する際、Unicodeで定義された絵文字、LINEが独自に定義した絵文字（非推奨）を送信できますが、さらに、LINE絵文字を送信できるようになりました。

LINE絵文字は、`productId`および`emojiId`で指定します。

```json
// LINE絵文字を含むテキストメッセージの例
{
    "type": "text",
    "text": "Look at this: $ It's a LINE emoji!",
    "emojis": [
        {
            "index": 14,
            "productId": "5ac1bfd5040ab15980c9b435",
            "emojiId": "001"
        }
    ]
}
```

詳しくは、『Messaging APIリファレンス』の「[テキストメッセージ](/reference/messaging-api/#text-message)」を参照してください。

## ユーザーの言語を取得する

[プロフィールを取得する](/reference/messaging-api/#get-profile)エンドポイントで、既存のユーザープロフィール情報に加えて、`language`プロパティが返されるようになりました。

ただし、`language`プロパティは、以下のいずれかの場合にのみ返されます。

- 日本で作成されたLINEアカウントを使用しているユーザーが、LINEバージョン8.0.0以降で、プライバシーポリシーに同意している場合
- 台湾、タイ、またはインドネシアで作成されたLINEアカウントを使用しているユーザーが、LINEバージョン8.9.0以降で、プライバシーポリシーに同意している場合

## マルチキャストの受信者数制限が削除されました

[マルチキャストメッセージを送る](/reference/messaging-api/#send-multicast-message) エンドポイントは、1分間当たりの受信者数が制限されていました。本日、この制限が削除されました。その他のレート制限は引き続き適用されます。変更前の制限と変更後の差異については、以下の表を参照してください。

| ボットの種類                | 変更前                                               | 変更後                              |
| --------------------- | ------------------------------------------------- | -------------------------------- |
| LINE公式アカウントに紐づけられたボット | 100,000リクエスト/分   1,700リクエスト/秒（※）   2,000,000受信者/分 | 100,000リクエスト/分   1,700リクエスト/秒（※） |
| LINE@アカウントに紐づけられたボット  | 10,000リクエスト/分   170リクエスト/秒（※）   200,000受信者/分      | 10,000リクエスト/分   170リクエスト/秒（※）    |

※秒単位のレート制限は、大量送信時の目安です。

さらに、マルチキャストメッセージを送信するときに、最大500件のユーザーID（150件から増加）を指定できるようになりました。

詳しくは、『Messaging APIリファレンス』の「[レート制限](/reference/messaging-api/#rate-limits)」を参照してください。
