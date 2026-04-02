---
title: Messaging APIアップデート（2021年1月）
navigation: true
description: >-
  Messaging
  APIのナローキャストメッセージの進行状況を取得するエンドポイント、およびメッセージWebhookイベントオブジェクトのテキストメッセージタイプに、プロパティが追加されました。
meta: '{"date":"2021-01-20 00:00 UTC","tags":"Messaging API","locale":"ja"}'
path: /ja/_partials/news/2021/2021-01-20-messaging-api-update-january-2021
__hash__: wtebyNmYjKEGV0sXyBz2UhGj21A4ucQhXgFO4NvK_AE
seo:
  title: Messaging APIアップデート（2021年1月）
  description: >-
    Messaging
    APIのナローキャストメッセージの進行状況を取得するエンドポイント、およびメッセージWebhookイベントオブジェクトのテキストメッセージタイプに、プロパティが追加されました。
---

Messaging APIの[ナローキャストメッセージの進行状況を取得する](/reference/messaging-api/#get-narrowcast-progress-status)エンドポイント、および[メッセージWebhookイベントオブジェクト](/reference/messaging-api/#message-event)の[テキスト](/reference/messaging-api/#wh-text)メッセージタイプに、プロパティが追加されました。

- [「ナローキャストメッセージの進行状況を取得する」エンドポイントの新プロパティ](#narrowcast-message-status-properties-news)
- [テキストメッセージタイプの新プロパティ](#text-message-type-properties-news)

### 「ナローキャストメッセージの進行状況を取得する」エンドポイントの新プロパティ

「ナローキャストメッセージの進行状況を取得する」エンドポイントに、プロパティが追加されました。以下の新プロパティでは、ナローキャストメッセージ送信のリクエストがいつ受理され、いつ送信が完了したかを確認できます。

- `acceptedTime`：ナローキャストメッセージ送信のリクエストを受け付けた時間をミリ秒で表します。
- `completedTime`：ナローキャストメッセージの送信を完了した時間をミリ秒で表します。`phase`プロパティが`succeeded`または`failed`の場合にのみ返されます。

詳しくは、『Messaging APIリファレンス』の「[ナローキャストメッセージの進行状況を取得する](/reference/messaging-api/#get-narrowcast-progress-status)」を参照してください。

### テキストメッセージタイプの新プロパティ

以前は、グループチャットやトークルーム内のメンションの情報は取得できませんでした。今回、メッセージWebhookイベントオブジェクトのテキストメッセージタイプに追加された新プロパティを利用することで、メンションの情報を取得できるようになりました。

新たに追加されたプロパティは以下のとおりです。

- `mention`：メンションの情報を含むオブジェクト。
- `mention.mentionees[]`：1個以上のメンション。
- `mention.mentionees[].index`：テキストの先頭を`0`とした、`text`プロパティ内のメンションの開始位置。
- `mention.mentionees[].length`：メンションの長さ。`@example`であれば、`8`が長さになります。
- `mention.mentionees[].userId`：メンションされたユーザーのユーザーID。

詳しくは、『Messaging APIリファレンス』の「[テキスト](/reference/messaging-api/#wh-text)」メッセージタイプを参照してください。
