---
title: 【復旧済み】Messaging API障害のお知らせ
navigation: true
description: Messaging APIにおいて以下の障害が発生しておりましたが、すべて復旧いたしました。
meta: >-
  {"date":"2021-04-23 01:00 UTC","tags":"Outage report, Messaging
  API","locale":"ja"}
path: /ja/_partials/news/2021/2021-04-23-messaging-api-outage
__hash__: 0_uzeJr1bbEsxjROJlkcjYCLueVSVpBD9GQP3-yIDvs
seo:
  title: 【復旧済み】Messaging API障害のお知らせ
  description: Messaging APIにおいて以下の障害が発生しておりましたが、すべて復旧いたしました。
---

Messaging APIにおいて以下の障害が発生しておりましたが、すべて復旧いたしました。

お客様には多大なご迷惑をお掛けし、誠に申し訳ございません。

### 発生日時

2021年4月22日 17:01頃 〜 17:51頃（UTC+9）

### 原因

サーバー障害

### 影響範囲

- [送信済みの応答メッセージの数を取得する](/reference/messaging-api/#get-number-of-reply-messages)
- [送信済みのプッシュメッセージの数を取得する](/reference/messaging-api/#get-number-of-push-messages)
- [送信済みのマルチキャストメッセージの数を取得する](/reference/messaging-api/#get-number-of-multicast-messages)
- [送信済みのブロードキャストメッセージの数を取得する](/reference/messaging-api/#get-number-of-broadcast-messages)
- [メッセージの送信数を取得する](/reference/messaging-api/#get-number-of-delivery-messages)

### 状況

上記の時間帯において、一部のリクエストを正常に処理できず、ステータスコード500のエラーが発生していた可能性があります。

LINEは今後もお客様への一層のサービス向上に取組んでまいります。何卒ご理解を賜りますよう、よろしくお願い申し上げます。
