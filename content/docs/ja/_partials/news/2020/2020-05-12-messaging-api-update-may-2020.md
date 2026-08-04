---
title: 【更新】Messaging APIアップデート（2020年5月）
navigation: true
description: ''
meta: '{"date":"2020-05-12 00:00 UTC","tags":"Messaging API","locale":"ja"}'
path: /ja/_partials/news/2020/2020-05-12-messaging-api-update-may-2020
__hash__: nZ3U9HYNo3xt6vWjipczEzv34eco8YXH4lbHbq0tqnY
seo:
  title: 【更新】Messaging APIアップデート（2020年5月）
  description: ''
---

::admonition{title="2020年12月12日追記" type="note"}
「**[リッチメニューオブジェクト（画像）](#rich-menu-object)**」の変更後のファイルサイズに誤記があったため、修正いたしました。お詫びして訂正します。

【誤】
800px以上 × 2500px以下

【正】
幅800px以上 〜 2500px以下、高さ250px以上
::

Messaging APIにおいて、以下の改善を行いました。

### メッセージの文字数制限やメディアファイルの使用条件が変更されました

テキストメッセージの文字数制限や、使用できるメディアファイルの条件が変わりました。変更前と変更後の差異については、以下の表を参照してください。

- **[テキストメッセージ](/reference/messaging-api/#text-message)**| 項目    | 変更前  | 変更後  |
| ----- | ---- | ---- |
| 最大文字数 | 2000 | 5000 |
- **[リッチメニューオブジェクト](/reference/messaging-api/#rich-menu-object)（画像）**{#rich-menu-object}| 項目    | 変更前                                                                                                           | 変更後                              |
| ----- | ------------------------------------------------------------------------------------------------------------- | -------------------------------- |
| 画像サイズ | 2500px × 1686px   2500px × 843px   1200px × 810px   1200px × 405px   800px × 540px   800px × 270px   （幅 x 高さ） | 幅800px以上 〜 2500px以下、高さ250px以上（※） |

  
※ 幅/高さのアスペクト比は1.45以上になるようにします。
- **[画像メッセージ](/reference/messaging-api/#image-message)（画像）**| 項目        | 変更前                        | 変更後      |
| --------- | -------------------------- | -------- |
| ファイル形式    | JPEG                       | JPEG、PNG |
| 最大画像サイズ   | 4096px × 4096px   （幅 x 高さ） | 制限なし     |
| 最大ファイルサイズ | 1MB                        | 10MB     |
- **[動画メッセージ](/reference/messaging-api/#video-message)（動画）**| 項目        | 変更前  | 変更後   |
| --------- | ---- | ----- |
| 最大長       | 1分   | 制限なし  |
| 最大ファイルサイズ | 10MB | 200MB |
- **[音声メッセージ](/reference/messaging-api/#audio-message)（音声）**| 項目        | 変更前  | 変更後   |
| --------- | ---- | ----- |
| 最大長       | 1分   | 制限なし  |
| 最大ファイルサイズ | 10MB | 200MB |
- **[イメージマップメッセージ](/reference/messaging-api/#imagemap-message)（画像）**| 項目        | 変更前 | 変更後  |
| --------- | --- | ---- |
| 最大ファイルサイズ | 1MB | 10MB |
- **[イメージマップメッセージ](/reference/messaging-api/#imagemap-message)（動画）**| 項目        | 変更前  | 変更後   |
| --------- | ---- | ----- |
| 最大長       | 1分   | 制限なし  |
| 最大ファイルサイズ | 10MB | 200MB |
- **[画像メッセージ](/reference/messaging-api/#image-message) / [動画メッセージ](/reference/messaging-api/#video-message) / [イメージマップメッセージ](/reference/messaging-api/#imagemap-message)（プレビュー画像）**| 項目      | 変更前                      | 変更後      |
| ------- | ------------------------ | -------- |
| ファイル形式  | JPEG                     | JPEG、PNG |
| 最大画像サイズ | 240px x 240px   （幅 x 高さ） | 制限なし     |

### WebhookイベントのテキストメッセージオブジェクトからLINE絵文字情報を取得する

ユーザーが送信したテキストにLINE絵文字が含まれる場合にWebhookで届く[テキストメッセージオブジェクト](/reference/messaging-api/#wh-text)の`emojis`プロパティに、使用されているLINE絵文字の情報がLINE絵文字オブジェクトとして格納されます。

LINE絵文字の種類は、`productId`および`emojiId`で取得します。

```json
{
  "replyToken": "nHuyWiB7yP5Zw52FIkcQobQuGDXCTA",
  "type": "message",
  "mode": "active",
  "timestamp": 1462629479859,
  "source": {
    "type": "user",
    "userId": "U4af4980629..."
  },
  "message": {
    "id": "325708",
    "type": "text",
    "text": "Hello, world! (love)",
    "emojis": [
      {
        "index": 14,
        "length": 6,
        "productId": "5ac1bfd5040ab15980c9b435",
        "emojiId": "001"
      }
    ]
  }
}
```

詳しくは、『Messaging APIリファレンス』の「[テキスト](/reference/messaging-api/#wh-text)」を参照してください。

### 失敗したAPIリクエストを安全に再試行する

Messaging APIを使ってメッセージを送信した際に、エラーが発生したり、リクエストがタイムアウトした場合、ユーザーに正しくメッセージが配信されたかわからないことがあります。同じリクエストを実行すると、最初のAPIリクエストが正しく受理されていた場合、ユーザーは同じメッセージを二度も受信することになります。

安全に同じリクエストの再試行ができるように、HTTPリクエストヘッダーにリトライキー（`X-Line-Retry-Key`）を追加できるようになりました。

リトライキーの値には、任意の方法で生成した16進表記のUUID（例：123e4567-e89b-12d3-a456-426614174000）を指定します。同じUUIDのリクエストキーを含んだAPIリクエストを何度実行しても、必ず一度だけ処理されるため、同じ処理の重複を防ぐことができます。リトライキーを使うことで、安全なAPIリクエストの再試行を実現する設計が可能になりました。

```sh
curl -v -X POST https://api.line.me/v2/bot/message/push \
-H 'Content-Type: application/json' \
-H 'Authorization: Bearer {CHANNEL_ACCESS_TOKEN}' \
-H 'X-Line-Retry-Key: {UUID}' \
-d '{
    "messages": [
        {
            "type": "text",
            "text": "Hello, user"
        }
    ]
}'
```

詳しくは、「[失敗したAPIリクエストを再試行する](/docs/messaging-api/retrying-api-request/)」を参照してください。
