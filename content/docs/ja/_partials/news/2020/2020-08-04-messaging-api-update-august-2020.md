---
title: 【更新】Messaging APIアップデート（2020年8月）
navigation: true
description: ''
meta: '{"date":"2020-08-04 00:00 UTC","tags":"Messaging API","locale":"ja"}'
path: /ja/_partials/news/2020/2020-08-04-messaging-api-update-august-2020
__hash__: aicHKPPoGtJo7t7v7SBOiO1iuB2SsQNQUUBDj1sqeq0
seo:
  title: 【更新】Messaging APIアップデート（2020年8月）
  description: ''
---

::admonition{title="2020年8月6日追記" type="note"}
近日公開予定としておりました以下のエンドポイントが、ご利用いただけるようになりました。

- [ユーザーIDアップロード用のオーディエンスを作成する（ファイル指定）](/reference/messaging-api/#create-upload-audience-group-by-file)
- [ユーザーIDアップロード用のオーディエンスにユーザーIDまたはIFAを追加する（ファイル指定）](/reference/messaging-api/#update-upload-audience-group-by-file)
::

Messaging APIに新たなWebhookイベントとエンドポイントが追加されました。
今回のアップデートで追加された機能は以下のとおりです。

- [送信取消イベントが追加されました](#august-unsend-event)
- [動画視聴完了イベントが追加されました](#august-video-viewing-complete)
- [特定のエンドポイントで`audiences`プロパティが必須から任意になりました](#august-audiences)
- [オーディエンスの送信対象アカウントをファイルで指定できるようになりました](#august-by-file)

### 送信取消イベントが追加されました

既存の参加、退出、メッセージ送信といったWebhookイベントに加えて、メッセージの送信を取り消したことを示す「送信取消イベント」が新たに追加されました。

- [送信取消イベント](/reference/messaging-api/#unsend-event)

### 動画視聴完了イベントが追加されました

動画識別用ID`trackingId`プロパティが指定された動画を、ユーザーが最後まで視聴した際に発生する「動画視聴完了イベント」が新たに追加されました。

- [動画視聴完了イベント](/reference/messaging-api/#video-viewing-complete)

### 特定のエンドポイントで`audiences`プロパティが必須から任意になりました

以下のエンドポイントにおいて、`audiences`プロパティが必須から任意に変わりました。

- [ユーザーIDアップロード用のオーディエンスを作成する（JSON指定）](/reference/messaging-api/#create-upload-audience-group)

この変更により、先に「送信対象が空のオーディエンス」を作成しておいて、後からオーディエンスにユーザーIDまたはIFAを追加する、という方法でオーディエンスが用意できるようになりました。

### オーディエンスの送信対象アカウントをファイルで指定できるようになりました

オーディエンスの送信対象アカウントをファイルで指定できるようになりました。

- [ユーザーIDアップロード用のオーディエンスを作成する（ファイル指定）](/reference/messaging-api/#create-upload-audience-group-by-file)
- [ユーザーIDアップロード用のオーディエンスにユーザーIDまたはIFAを追加する（ファイル指定）](/reference/messaging-api/#update-upload-audience-group-by-file)
