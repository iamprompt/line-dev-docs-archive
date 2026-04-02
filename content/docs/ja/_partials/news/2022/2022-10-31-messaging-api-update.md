---
title: 2022年12月5日から、Messaging APIのリクエストにおいて、JSONオブジェクトのプロパティが重複している場合はエラーを返します
navigation: true
description: >-
  2022年12月5日に、Messaging
  APIにおいて、リクエストボディに指定するJSONオブジェクトのプロパティが重複している場合に、リクエストがエラーとなる仕様変更を行う予定です。
meta: '{"date":"2022-10-31 00:00 UTC","tags":"Messaging API","locale":"ja"}'
path: /ja/_partials/news/2022/2022-10-31-messaging-api-update
__hash__: 3djOPhEvH-g-ZOc2UGn4v82FaCllMrixhfnkdTJHk48
seo:
  title: 2022年12月5日から、Messaging APIのリクエストにおいて、JSONオブジェクトのプロパティが重複している場合はエラーを返します
  description: >-
    2022年12月5日に、Messaging
    APIにおいて、リクエストボディに指定するJSONオブジェクトのプロパティが重複している場合に、リクエストがエラーとなる仕様変更を行う予定です。
---

2022年12月5日に、Messaging APIにおいて、リクエストボディに指定するJSONオブジェクトのプロパティが重複している場合に、リクエストがエラーとなる仕様変更を行う予定です。

### 仕様変更予定日

2022年12月5日

なお、この仕様変更の内容および日時は、予告なく変更される可能性があります。

### 変更点

現在、Messaging APIでは、リクエストボディに指定するJSONオブジェクトのプロパティが重複している場合でも、リクエストはエラーとならず成功することがあります。仕様変更後は、JSONオブジェクトのプロパティが重複している場合は、HTTPステータスコード`400`とエラーレスポンスが返ります。

以下は、[プッシュメッセージを送る](/reference/messaging-api/#send-push-message)場合に、プロパティが重複しているときのエラーレスポンスの例です。

```json
// toプロパティが重複しているとき
{
  "message": "The request body could not be parsed as JSON (line: 3, column: 7)",
  "details": [
    {
      "message": "Duplicate field 'to'"
    }
  ]
}

// messages[1]内の、typeプロパティが重複しているとき
{
  "message": "The property, 'messages[1]', in the request body is invalid (line: 11, column: 13)",
  "details": [
    {
      "message": "Duplicate field 'type'"
    }
  ]
}
```

### 仕様変更に伴う注意点

仕様変更後は、これまで成功していたリクエストと同じ内容のリクエストボディを指定したとしても、JSONオブジェクトのプロパティが重複している場合はエラーとなります。仕様変更までに、利用中のエンドポイントのリクエストボディにおいて、プロパティが重複していないことを確認してください。

#### LINE Messaging API SDK for Javaのアップデートについて

[LINE Messaging API SDK for Java](https://github.com/line/line-bot-sdk-java){rel="[\"nofollow\"]"}において、JSONオブジェクトのプロパティを重複して送信するバージョンが存在します。この問題は、バージョン[`5.0.3`](https://github.com/line/line-bot-sdk-java/releases/tag/5.0.3){rel="[\"nofollow\"]"}で修正されています。

Java版のSDKを利用している場合は、仕様変更までに`5.0.3`以降のバージョンへの更新をお願いいたします。

### 仕様変更の背景

今回の仕様変更は、プロパティが重複していることにより、意図しない挙動となることを防ぐことを目的としています。

LINEは今後もお客様への一層のサービス向上に取組んでまいります。何卒ご理解を賜りますよう、よろしくお願い申し上げます。
