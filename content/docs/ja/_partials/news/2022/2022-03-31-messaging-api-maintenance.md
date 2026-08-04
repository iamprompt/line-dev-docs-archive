---
title: Messaging API メンテナンスのお知らせ
navigation: true
description: >-
  Messaging
  APIにおいて、以下のメンテナンスを行います。ご利用のユーザー様にはご不便をおかけいたしますが、何卒ご理解いただきますようお願い申し上げます。
meta: >-
  {"date":"2022-03-31 00:00 UTC","tags":"Maintenance, Messaging API, Options for
  corporate customers","locale":"ja"}
path: /ja/_partials/news/2022/2022-03-31-messaging-api-maintenance
__hash__: zDRS7nbbRzW9On5hfvYcSNq9Ss9Ukse2OoO26w3pytM
seo:
  title: Messaging API メンテナンスのお知らせ
  description: >-
    Messaging
    APIにおいて、以下のメンテナンスを行います。ご利用のユーザー様にはご不便をおかけいたしますが、何卒ご理解いただきますようお願い申し上げます。
---

Messaging APIにおいて、以下のメンテナンスを行います。ご利用のユーザー様にはご不便をおかけいたしますが、何卒ご理解いただきますようお願い申し上げます。

### メンテナンス予定日時

2022年4月7日 21:00 〜 24:00（UTC+9）

なお、メンテナンス終了時刻は予告なく前後する可能性があります。

### 影響範囲

メンテナンス中は、ユーザーの操作に基づく統計情報の更新が遅延します。そのため、次のAPIで直近のユーザー操作が反映されていない統計情報が返ってくることがあります。更新後の統計情報を取得するには、メンテナンス終了後に再度リクエストをしてください。

- [ユーザーの操作に基づく統計情報を取得する](/reference/messaging-api/#get-message-event)
- [ユニットごとの統計情報を取得する](/reference/messaging-api/#get-statistics-per-unit)（法人ユーザー向けオプション）
