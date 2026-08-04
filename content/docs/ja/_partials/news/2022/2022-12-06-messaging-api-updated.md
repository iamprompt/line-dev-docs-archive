---
title: Messaging APIのリクエストにおいて、JSONオブジェクトのプロパティが重複している場合はエラーとなります
navigation: true
description: >-
  2022年10月31日のニュースでお知らせしたとおり、Messaging
  APIにおいて、リクエストボディに指定するJSONオブジェクトのプロパティが重複している場合に、リクエストがエラーとなる仕様変更を行いました。
meta: '{"date":"2022-12-06 00:00 UTC","tags":"Messaging API","locale":"ja"}'
path: /ja/_partials/news/2022/2022-12-06-messaging-api-updated
__hash__: 7y8zvWhILBbVcftd3648XcOzC2howyrDXbChhX8RRzE
seo:
  title: Messaging APIのリクエストにおいて、JSONオブジェクトのプロパティが重複している場合はエラーとなります
  description: >-
    2022年10月31日のニュースでお知らせしたとおり、Messaging
    APIにおいて、リクエストボディに指定するJSONオブジェクトのプロパティが重複している場合に、リクエストがエラーとなる仕様変更を行いました。
---

[2022年10月31日のニュース](/news/2022/10/31/messaging-api-update/)でお知らせしたとおり、Messaging APIにおいて、リクエストボディに指定するJSONオブジェクトのプロパティが重複している場合に、リクエストがエラーとなる仕様変更を行いました。

### 仕様変更日

2022年12月6日

### 変更点

リクエストボディに指定するJSONオブジェクトのプロパティが重複している場合は、HTTPステータスコード`400`とエラーレスポンスが返ります。

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

今後は、仕様変更前に成功していたリクエストと同じ内容のリクエストボディを指定しても、JSONオブジェクトのプロパティが重複している場合はエラーとなります。利用中のエンドポイントのリクエストボディにおいて、プロパティが重複しないよう注意してください。

なお、以下のエンドポイントで、[メッセージオブジェクト](/reference/messaging-api/#message-objects)および[リッチメニューオブジェクト](/reference/messaging-api/#rich-menu-object)が有効かを検証できます。

- メッセージオブジェクトを検証するエンドポイント

  - [応答メッセージのメッセージオブジェクトを検証する](/reference/messaging-api/#validate-message-objects-of-reply-message)
  - [プッシュメッセージのメッセージオブジェクトを検証する](/reference/messaging-api/#validate-message-objects-of-push-message)
  - [マルチキャストメッセージのメッセージオブジェクトを検証する](/reference/messaging-api/#validate-message-objects-of-multicast-message)
  - [ナローキャストメッセージのメッセージオブジェクトを検証する](/reference/messaging-api/#validate-message-objects-of-narrowcast-message)
  - [ブロードキャストメッセージのメッセージオブジェクトを検証する](/reference/messaging-api/#validate-message-objects-of-broadcast-message)
- リッチメニューオブジェクトを検証するエンドポイント

  - [リッチメニューオブジェクトを検証する](/reference/messaging-api/#validate-rich-menu-object)

#### LINE Messaging API SDK for Javaのアップデートについて

[LINE Messaging API SDK for Java](https://github.com/line/line-bot-sdk-java){rel="[\"nofollow\"]"}において、JSONオブジェクトのプロパティを重複して送信するバージョンが存在します。この問題は、バージョン[`5.0.3`](https://github.com/line/line-bot-sdk-java/releases/tag/5.0.3){rel="[\"nofollow\"]"}で修正されています。

Java版のSDKを利用している場合は、`5.0.3`以降のバージョンへの更新をお願いいたします。

LINEは今後もお客様への一層のサービス向上に取組んでまいります。何卒ご理解を賜りますよう、よろしくお願い申し上げます。
