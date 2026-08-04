---
title: Messaging APIの仕様が変更されました
navigation: true
description: ''
meta: '{"date":"2018-11-08 00:00 UTC","tags":"Messaging API","locale":"ja"}'
path: /ja/_partials/news/2018/2018-11-08-video-play-on-imagemap
__hash__: iYRRVZWJxPl2zhKV-ORONjkmt8XCaAufIITg-1pZ8jE
seo:
  title: Messaging APIの仕様が変更されました
  description: ''
---

### イメージマップメッセージで動画を再生できます

イメージマップメッセージで動画を再生できるようになりました。

詳しくは、「[イメージマップメッセージ](/reference/messaging-api/#imagemap-message)」を参照してください。

10月24日にお知らせしたイメージマップメッセージのアクション領域に対する検証は、今回の変更には含まれません。リリース予定が定まり次第、改めてお知らせします。

### Webhookイベントに新しいプロパティが追加されました

- Webhookイベントのボディに、Webhookイベントを受信すべきボットのユーザーID（`destination`）が含まれるようになりました。詳しくは、「[リクエストボディ](/reference/messaging-api/#request-body)」を参照してください。
- 画像メッセージ、動画メッセージ、音声メッセージの各メッセージオブジェクトに、新しい情報が追加されました。詳しくは、「[画像](/reference/messaging-api/#wh-image)」、「[動画](/reference/messaging-api/#wh-video)」、「[音声](/reference/messaging-api/#wh-audio)」を参照してください。

2018年11月9日訂正：MID -> userId

### Flex Messageをマルチキャストで送信できるようになりました

[Flex Message](/docs/messaging-api/using-flex-messages/)を`/v2/bot/message/multicast`エンドポイントを使って送信できるようになりました。

`/v2/bot/message/multicast`エンドポイントについては、『Messaging APIリファレンス』の「[複数のユーザーにメッセージを送る](/reference/messaging-api/#send-multicast-message)」を参照してください。
