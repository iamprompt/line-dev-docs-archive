---
title: 【復旧済み】Messaging API障害のお知らせ
navigation: true
description: Messaging APIにおいて以下の障害が発生しておりましたが、すべて復旧いたしました。
meta: >-
  {"date":"2022-02-04 00:00 UTC","tags":"outage-report,
  messaging-api","locale":"ja"}
path: /ja/_partials/news/2022/2022-02-04-messaging-api-outage
__hash__: BgqD9Ptydd-2JDF3vvBgDypkMYmEjTpFgFutxm0pRQY
seo:
  title: 【復旧済み】Messaging API障害のお知らせ
  description: Messaging APIにおいて以下の障害が発生しておりましたが、すべて復旧いたしました。
---

Messaging APIにおいて以下の障害が発生しておりましたが、すべて復旧いたしました。

お客様には多大なご迷惑をお掛けし、誠に申し訳ございません。

### 発生日時

2022年2月3日 9:24頃 〜 13:30頃（UTC+9）

### 原因

サーバー障害

### 影響範囲

- [応答メッセージを送る](/reference/messaging-api/#send-reply-message)
- [プッシュメッセージを送る](/reference/messaging-api/#send-push-message)
- [マルチキャストメッセージを送る](/reference/messaging-api/#send-multicast-message)
- [ナローキャストメッセージを送る](/reference/messaging-api/#send-narrowcast-message)
- [ブロードキャストメッセージを送る](/reference/messaging-api/#send-broadcast-message)
- [ユーザーIDアップロード用のオーディエンスを作成する（ファイル指定）](/reference/messaging-api/#create-upload-audience-group-by-file)
- [ユーザーIDアップロード用のオーディエンスにユーザーIDまたはIFAを追加する（ファイル指定）](/reference/messaging-api/#update-upload-audience-group-by-file)

### 状況

上記の時間帯において、以下の問題が発生していました。

- スタンプまたは絵文字が含まれるメッセージが送信された場合、リクエスト内容が適切であるにも関わらず、ステータスコード400番台のエラーが発生していました。

  - [応答メッセージを送る](/reference/messaging-api/#send-reply-message)
  - [プッシュメッセージを送る](/reference/messaging-api/#send-push-message)
  - [マルチキャストメッセージを送る](/reference/messaging-api/#send-multicast-message)
  - [ブロードキャストメッセージを送る](/reference/messaging-api/#send-broadcast-message)
- 一部のリクエストを正常に処理できず、ステータスコード500番台のエラーが発生していました。

  - [ユーザーIDアップロード用のオーディエンスを作成する（ファイル指定）](/reference/messaging-api/#create-upload-audience-group-by-file)
  - [ユーザーIDアップロード用のオーディエンスにユーザーIDまたはIFAを追加する（ファイル指定）](/reference/messaging-api/#update-upload-audience-group-by-file)
- メッセージの送信が遅延する場合がありました。

  - [ナローキャストメッセージを送る](/reference/messaging-api/#send-narrowcast-message)

LINEは今後もお客様への一層のサービス向上に取組んでまいります。何卒ご理解を賜りますよう、よろしくお願い申し上げます。
