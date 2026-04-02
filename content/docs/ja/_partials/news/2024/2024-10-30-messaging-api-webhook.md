---
title: Messaging APIにおいて、ユーザーからボットへのメンションが判別できるようになりました
navigation: true
description: >-
  2024年9月30日のニュースでお知らせしたとおり、LINEアプリのグループトークにおいて、ユーザーがボットをメンションできる機能が提供されました。これに伴い、Messaging
  APIにおいて、ユーザーがメンションを含むメッセージを送信した際の、ボットサーバーへ送信されるWebhookイベントオブジェクトにプロパティが追加されましたのでお知らせします。
meta: '{"date":"2024-10-30 01:00 UTC","tags":"messaging-api","locale":"ja"}'
path: /ja/_partials/news/2024/2024-10-30-messaging-api-webhook
__hash__: gPnDyygx83vhm8nR7ufrXyL49F9JWjRsaHbqTxmPqxs
seo:
  title: Messaging APIにおいて、ユーザーからボットへのメンションが判別できるようになりました
  description: >-
    2024年9月30日のニュースでお知らせしたとおり、LINEアプリのグループトークにおいて、ユーザーがボットをメンションできる機能が提供されました。これに伴い、Messaging
    APIにおいて、ユーザーがメンションを含むメッセージを送信した際の、ボットサーバーへ送信されるWebhookイベントオブジェクトにプロパティが追加されましたのでお知らせします。
---

[2024年9月30日のニュース](/news/2024/09/30/messaging-api-webhook/)でお知らせしたとおり、LINEアプリのグループトークにおいて、ユーザーがボットをメンションできる機能が提供されました。これに伴い、Messaging APIにおいて、ユーザーがメンションを含むメッセージを送信した際の、ボットサーバーへ送信されるWebhookイベントオブジェクトにプロパティが追加されましたのでお知らせします。

これにより、ボットはグループトーク上でユーザーからメンションされたことが分かるようになりました。既にボットへのメンションを判別する処理を独自に実装していた場合や、今後ボットサーバー上でユーザーからのメンションに応じた処理をおこなう場合は、今回追加された仕様をもとに判別することを検討してください。

### 対象バージョン

iOS版LINEまたはAndroid版LINEのバージョン14.17.0以降

### 追加された仕様

今回のリリースにより、以下の2点の仕様が追加されました。

#### 1. mention.mentionees[].isSelfの追加

ユーザーがメンションを含むメッセージを送信した場合、ボットサーバーに送信されるWebhookイベント内の[テキストメッセージオブジェクト](/reference/messaging-api/#wh-text)には、従来より`mention`プロパティが含まれていました。今回の仕様追加に伴い、ユーザーまたはボットに対するメンションがあった場合、この`mention`プロパティにおける`mentionees[]`に`isSelf`プロパティが追加されます。

::parameter-table
  :::parameter-table-entry{annotation="含まれないことがあります"}
  #undefined
  mention.mentionees[].isSelf

  #undefined
  Boolean

  Webhookイベントを受信したボット（`destination`）に対するメンションかどうか。`mention.mentionees[].type`プロパティの値が`user`のときのみ含まれます。

  - `true`：Webhookイベントを受信したボットに対するメンションである。
  - `false`：他のユーザーに対するメンションである。
  :::
::

#### 2. ボットへのメンションがあったときのWebhookイベントオブジェクトへの値の設定

ユーザーが送信したメッセージに自分のボットへのメンションがあった場合、ボットサーバーに送信されるWebhookイベント内のテキストメッセージオブジェクトにおいて、次の値が設定されます。

- `mention.mentionees[].type`に`user`が設定される。
- `mention.mentionees[].userId`にボットのユーザーIDが設定される。
- `mention.mentionees[].isSelf`に`true`が設定される。

なお、ボットのユーザーIDは、[Webhookのリクエストボディ](/reference/messaging-api/#request-body)にある`destination`プロパティや、「[ボットの情報を取得する](/reference/messaging-api/#get-bot-info)」エンドポイントで取得できる`userId`プロパティで確認できます。

### 具体例

ユーザーがメンションを含むメッセージを送信した場合の挙動について、仕様追加の前後における例を示します。

#### 仕様追加前

以前より、ユーザーはトークルーム内の別のユーザーへのメンションが可能でした。ユーザーがメンションを含むメッセージを送信した場合、次のようなメッセージイベントを含むWebhookイベントオブジェクトがボットサーバーに送信されていました。

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

#### 仕様追加後（現在）

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

### LINE Messaging API SDKの更新について

上記に伴う[LINE Messaging API SDK](/docs/messaging-api/line-bot-sdk/)の更新状況については、それぞれのSDKのリリースノートを参照してください。
