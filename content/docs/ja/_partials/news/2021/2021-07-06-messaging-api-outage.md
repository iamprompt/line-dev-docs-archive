---
title: 【復旧済み】Messaging API障害のお知らせ
navigation: true
description: Messaging APIにおいて以下の障害が発生しておりましたが、すべて復旧いたしました。
meta: >-
  {"date":"2021-07-06 00:00 UTC","tags":"Outage report, Messaging
  API","locale":"ja"}
path: /ja/_partials/news/2021/2021-07-06-messaging-api-outage
__hash__: JmV2vusyaBNdUfZ6L6GQLkOGOO0jIGatGs0B6rfPOgs
seo:
  title: 【復旧済み】Messaging API障害のお知らせ
  description: Messaging APIにおいて以下の障害が発生しておりましたが、すべて復旧いたしました。
---

Messaging APIにおいて以下の障害が発生しておりましたが、すべて復旧いたしました。

お客様には多大なご迷惑をお掛けし、誠に申し訳ございません。

### 発生日時

2021年6月30日 12:00頃 〜 12:12頃（UTC+9）

### 原因

サーバー障害およびソフトウェア不具合に起因する障害

### 影響範囲

- [プッシュメッセージを送る](/reference/messaging-api/#send-push-message)
- [マルチキャストメッセージを送る](/reference/messaging-api/#send-multicast-message)
- [応答メッセージを送る](/reference/messaging-api/#send-reply-message)

### 状況

上記の時間帯に、一部のリクエストにおいて、エンドポイントへのリクエストが成功してステータスコード`200`が返ったにもかかわらず、実際はメッセージが送信されていない場合がありました。

なお本障害の影響で、APIリクエストは成功したが実際に送信されなかったメッセージについては、LINE公式アカウントのご利用料金、および[送信済みのプッシュメッセージの数を取得する](/reference/messaging-api/#get-number-of-push-messages)エンドポイント等で確認可能な「送信済みメッセージの数」にはカウントされません。

LINEは今後もお客様への一層のサービス向上に取組んでまいります。何卒ご理解を賜りますよう、よろしくお願い申し上げます。
