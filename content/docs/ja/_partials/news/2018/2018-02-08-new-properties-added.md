---
title: テンプレートメッセージとポストバックアクションにプロパティが追加されました
navigation: true
description: ''
meta: >-
  {"date":"2018-02-08 00:00 UTC","tags":"Messaging API, Template
  messages","locale":"ja"}
path: /ja/_partials/news/2018/2018-02-08-new-properties-added
__hash__: x9exbV_wJIV2BBh5A3i962n2XrLl9YMWtWnw4eVJt0c
seo:
  title: テンプレートメッセージとポストバックアクションにプロパティが追加されました
  description: ''
---

### テンプレートメッセージにデフォルトアクションを設定できるようになりました

[ボタン](/docs/messaging-api/message-types/#buttons-template)テンプレートメッセージと[カルーセル](/reference/messaging-api/#carousel)テンプレートメッセージのカラムオブジェクトに、`defaultAction`プロパティが追加されました。これにより、画像、タイトル、テキストの領域全体に対して、ユーザーがタップすると実行されるアクションを1つ指定できるようになりました。

詳しくは、以下のリファレンスを参照してください。

- [ボタン](/reference/messaging-api/#buttons)
- [カルーセル](/reference/messaging-api/#carousel)

### ポストバックアクションに`displayText`プロパティが追加されました

ポストバックアクションに`displayText`プロパティを追加しました。`text`プロパティは廃止される予定です。`text`プロパティの代わりに`displayText`プロパティを使用することをお勧めします。`displayText`プロパティと`text`プロパティは同時に使用できないことにご注意ください。詳しくは、以下のリファレンスを参照してください。

- [ポストバックアクション](/reference/messaging-api/#postback-action)
