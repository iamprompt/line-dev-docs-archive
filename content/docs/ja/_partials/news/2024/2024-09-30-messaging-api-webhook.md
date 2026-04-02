---
title: 2024年10月下旬より、Messaging APIにおいてユーザーからボットへのメンションが判別できるようになります
navigation: true
description: >-
  2024年10月下旬に、LINEアプリのグループトークにおいてユーザーがボットをメンションできる機能を提供する予定です。これに伴い、Messaging
  APIにおいて、ユーザーがメンションを含むメッセージを送信した際の、ボットサーバーへ送信されるWebhookイベントオブジェクトにプロパティが追加されますのでお知らせします。
meta: '{"date":"2024-09-30 00:00 UTC","tags":"messaging-api","locale":"ja"}'
path: /ja/_partials/news/2024/2024-09-30-messaging-api-webhook
__hash__: uYDtHZDFld7s46KlKLy3iN01DLEEJkUXmvX-MI0jUjI
seo:
  title: 2024年10月下旬より、Messaging APIにおいてユーザーからボットへのメンションが判別できるようになります
  description: >-
    2024年10月下旬に、LINEアプリのグループトークにおいてユーザーがボットをメンションできる機能を提供する予定です。これに伴い、Messaging
    APIにおいて、ユーザーがメンションを含むメッセージを送信した際の、ボットサーバーへ送信されるWebhookイベントオブジェクトにプロパティが追加されますのでお知らせします。
---

2024年10月下旬に、LINEアプリのグループトークにおいてユーザーがボットをメンションできる機能を提供する予定です。これに伴い、Messaging APIにおいて、ユーザーがメンションを含むメッセージを送信した際の、ボットサーバーへ送信されるWebhookイベントオブジェクトにプロパティが追加されますのでお知らせします。

これにより、ボットはグループトーク上でユーザーからメンションされたことが分かるようになります。既にボットへのメンションを判別する処理を独自に実装していた場合や、今後ボットサーバー上でユーザーからのメンションに応じた処理をおこなう場合は、今回追加される仕様をもとに判別することを検討してください。

### 仕様追加予定日

2024年10月下旬

なお、この仕様追加の内容および日時は、予告なく変更される可能性があります。

### 追加される仕様

今回のリリースにより、以下の2点の仕様が追加されます。

#### 1. mention.mentionees[].isSelfの追加

ユーザーがメンションを含むメッセージを送信した場合、ボットサーバーに送信されるWebhookイベント内の[テキストメッセージオブジェクト](/reference/messaging-api/#wh-text)には、従来より`mention`プロパティが含まれていました。今回の仕様追加に伴い、ユーザーまたはボットに対するメンションがあった場合、この`mention`プロパティにおける`mentionees[]`に`isSelf`プロパティが追加されます。

::parameter-table
  :::parameter-table-entry{annotation="含まれないことがあります"}
  #undefined
  mention.mentionees[].isSelf

  #undefined
  Boolean

  Webhookイベントを受信したボット（`destination`）に対するメンションか。`type`プロパティの値が`user`のときのみ含まれます。

  - `true`：Webhookイベントを受信したボット（`destination`）に対するメンションである。
  - `false`：他のユーザーに対するメンションである。
  :::
::

#### 2. ボットへのメンションがあったときのWebhookイベントオブジェクトへの値の設定

ユーザーが送信したメッセージにボットへのメンションがあった場合、ボットサーバーに送信されるWebhookイベント内のテキストメッセージオブジェクトにおいて、次の値が設定されるようになります。

- `mention.mentionees[].type`に`user`が設定される
- `mention.mentionees[].userId`にボットのユーザーIDが設定される
- `mention.mentionees[].isSelf`に`true`が設定される

なお、ボットのユーザーIDは、[Webhookのリクエストボディ](/reference/messaging-api/#request-body)にある`destination`プロパティや、「[ボットの情報を取得する](/reference/messaging-api/#get-bot-info)」エンドポイントで取得できる`userId`プロパティで確認できます。

### 具体例

ユーザーがメンションを含むメッセージを送信した場合の挙動について、仕様追加の前後における例を示します。

#### 仕様追加前（現在）

以前より、ユーザーはトークルーム内の別のユーザーへのメンションが可能でした。ユーザーがメンションを含むメッセージを送信した場合、次のようなメッセージイベントを含むWebhookイベントオブジェクトがボットサーバーに送信されます。

```json
"message": {
  "id": "444573844083572737",
  "type": "text",
  "quoteToken": "q3Plxr4AgKd...",
  "text": "@example Good Morning!!",
  "mention": {
    "mentionees": [
      {
        "index": 0,
        "length": 8,
        "userId": "U49585cd0d5...",
        "type": "user"
      }
    ]
  }
}
```

#### 仕様追加後

仕様追加後は、ユーザーが送信したメッセージにボットへのメンションがあった場合、次のようなメッセージイベントを含むWebhookイベントオブジェクトがボットサーバーに送信されます。このように、`isSelf`プロパティに`true`が設定されます。

```json
"message": {
  "id": "444573844083572737",
  "type": "text",
  "quoteToken": "q3Plxr4AgKd...",
  "text": "@example_bot Good Morning!!",
  "mention": {
    "mentionees": [
      {
        "index": 0,
        "length": 12,
        "userId": "{ボットのユーザーID}",
        "type": "user",
        "isSelf": true
      }
    ]
  }
}
```

ユーザーが送信したメッセージに別のユーザーへのメンションがあった場合は、次のように`isSelf`プロパティに`false`が設定されます。

```json
"message": {
  "id": "444573844083572737",
  "type": "text",
  "quoteToken": "q3Plxr4AgKd...",
  "text": "@example Good Morning!!",
  "mention": {
    "mentionees": [
      {
        "index": 0,
        "length": 8,
        "userId": "U49585cd0d5...",
        "type": "user",
        "isSelf": false
      }
    ]
  }
}
```

なお、今回の仕様追加のように、Webhookイベントオブジェクトの構造が変わることがあります。ボットサーバーは、従来と異なる構造のオブジェクトを受信しても、不具合が発生しないように実装してください。詳しくは、『Messaging APIドキュメント』の「[非破壊的な変更を想定した実装の推奨](/docs/messaging-api/development-guidelines/#assume-non-breaking-changes)」を参照してください。
