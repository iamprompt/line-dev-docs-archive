---
title: 【復旧済み】「分析」の一部APIにおける障害のお知らせ
navigation: true
description: Messaging APIにおいて以下の障害が発生しておりましたが、すべて復旧いたしました。
meta: >-
  {"date":"2023-12-12 01:00 UTC","tags":"outage-report,
  messaging-api","locale":"ja"}
path: /ja/_partials/news/2023/2023-12-12-messaging-api-outage
__hash__: 79Kk0GO3Nryl6jSATgjzWs3AZiPFtoncxtj0q6n6R30
seo:
  title: 【復旧済み】「分析」の一部APIにおける障害のお知らせ
  description: Messaging APIにおいて以下の障害が発生しておりましたが、すべて復旧いたしました。
---

Messaging APIにおいて以下の障害が発生しておりましたが、すべて復旧いたしました。

お客様には多大なご迷惑をお掛けし、誠に申し訳ございません。

### 発生日時

2023年12月12日 17:15頃 〜 18:54頃（UTC+9）

### 原因

サーバー障害

### 影響範囲

- [当月のメッセージ利用状況を取得する](/reference/messaging-api/#get-consumption)
- [送信済みの応答メッセージの数を取得する](/reference/messaging-api/#get-number-of-reply-messages)
- [送信済みのプッシュメッセージの数を取得する](/reference/messaging-api/#get-number-of-push-messages)
- [送信済みのマルチキャストメッセージの数を取得する](/reference/messaging-api/#get-number-of-multicast-messages)
- [送信済みのブロードキャストメッセージの数を取得する](/reference/messaging-api/#get-number-of-broadcast-messages)
- [メッセージの送信数を取得する](/reference/messaging-api/#get-number-of-delivery-messages)
- [友だち数を取得する](/reference/messaging-api/#get-number-of-followers)
- [友だちの属性情報に基づく統計情報を取得する](/reference/messaging-api/#get-demographic)
- [ユーザーの操作に基づく統計情報を取得する](/reference/messaging-api/#get-message-event)
- [ユニットごとの統計情報を取得する](/reference/messaging-api/#get-statistics-per-unit)

### 状況

上記の時間帯において、一部のリクエストを正常に処理できず、ステータスコード500番台のエラーが発生していました。

LINEヤフー株式会社は今後もお客様への一層のサービス向上に取り組んでまいります。何卒ご理解を賜りますよう、よろしくお願い申し上げます。
