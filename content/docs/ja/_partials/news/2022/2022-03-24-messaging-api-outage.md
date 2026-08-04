---
title: 【復旧済み】「分析」の一部APIにおける集計不具合のお知らせ
navigation: true
description: Messaging APIにおいて以下の障害が発生しておりましたが、すべて復旧いたしました。お客様には多大なご迷惑をお掛けし、誠に申し訳ございません。
meta: >-
  {"date":"2022-03-24 00:00 UTC","tags":"outage-report, messaging-api,
  options-for-corporate-customers","locale":"ja"}
path: /ja/_partials/news/2022/2022-03-24-messaging-api-outage
__hash__: 3jf7ZYmHYLUi1d-pu8DjBl7bne8bBWnAg4yOyE7pgxU
seo:
  title: 【復旧済み】「分析」の一部APIにおける集計不具合のお知らせ
  description: Messaging APIにおいて以下の障害が発生しておりましたが、すべて復旧いたしました。お客様には多大なご迷惑をお掛けし、誠に申し訳ございません。
---

Messaging APIにおいて以下の障害が発生しておりましたが、すべて復旧いたしました。お客様には多大なご迷惑をお掛けし、誠に申し訳ございません。

### 発生日時

2022年3月23日 3:17頃 ～ 18:31頃（UTC+9）

### 原因

サーバー障害

### 影響範囲

- [送信済みの応答メッセージの数を取得する](/reference/messaging-api/#get-number-of-reply-messages)
- [送信済みのプッシュメッセージの数を取得する](/reference/messaging-api/#get-number-of-push-messages)
- [送信済みのマルチキャストメッセージの数を取得する](/reference/messaging-api/#get-number-of-multicast-messages)
- [送信済みのブロードキャストメッセージの数を取得する](/reference/messaging-api/#get-number-of-broadcast-messages)
- [メッセージの送信数を取得する](/reference/messaging-api/#get-number-of-delivery-messages)
- [電話番号を利用したメッセージ配信の結果を取得する](/reference/partner-docs/#get-phone-audience-match)（法人ユーザー向けオプション）

### 状況

APIで取得した2022年3月22日の送信済みメッセージの数に誤りがありました。

LINEは今後もお客様への一層のサービス向上に取り組んでまいります。何卒ご理解を賜りますよう、よろしくお願い申し上げます。
