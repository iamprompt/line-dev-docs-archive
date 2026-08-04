---
title: 【復旧済み／更新】Messaging API障害のお知らせ
navigation: true
description: ''
meta: >-
  {"date":"2024-10-18 00:00 UTC","tags":"outage-report,
  messaging-api","locale":"ja"}
path: /ja/_partials/news/2024/2024-10-18-messaging-api-outage
__hash__: rBh1cc6wij1O5c0zc_KH_Zw5uKzW00QGjo3I0bBBT9g
seo:
  title: 【復旧済み／更新】Messaging API障害のお知らせ
  description: ''
---

::admonition{title="2024年10月28日追記" type="note"}
「[発生日時](#date-20241018)」および「[状況](#details-20241018)」を更新しました。
::

Messaging APIにおいて以下の障害が発生しておりましたが、すべて復旧いたしました。お客様には多大なご迷惑をお掛けし、誠に申し訳ございません。

### 発生日時

2024年10月4日 〜 2024年10月25日

### 原因

サーバー障害

### 影響範囲

- [当月のメッセージ利用状況を取得する](/reference/messaging-api/#get-consumption)
- [送信済みの応答メッセージの数を取得する](/reference/messaging-api/#get-number-of-reply-messages)
- [送信済みのプッシュメッセージの数を取得する](/reference/messaging-api/#get-number-of-push-messages)
- [送信済みのマルチキャストメッセージの数を取得する](/reference/messaging-api/#get-number-of-multicast-messages)
- [送信済みのブロードキャストメッセージの数を取得する](/reference/messaging-api/#get-number-of-broadcast-messages)
- [メッセージの送信数を取得する](/reference/messaging-api/#get-number-of-delivery-messages)
- [送信済みのLINE通知メッセージの数を取得する](/reference/partner-docs/#get-number-of-sent-line-notification-messages)（法人ユーザー向けオプション）

### 状況

上記の影響範囲で示したメッセージ数の取得に関するエンドポイントについて、一部のアカウントにおける一部のメッセージ送信で、2024年10月4日から2024年10月15日までのメッセージ数が実際の数の倍になる不具合が発生していました。データの修正は完了しており、現在は正しいメッセージ数を取得できます。

この不具合が発生したアカウントにおいては、送信されたメッセージ数にも影響していたため、送信できるメッセージの上限に達し、メッセージが送信できない場合がありました。このとき、メッセージ送信時に`429 Too Many Requests`のエラーが発生していました。

なお、この不具合によって、LINE公式アカウントの利用料金が過剰に請求されることはありません。

LINEヤフー株式会社は今後もお客様への一層のサービス向上に取り組んでまいります。何卒ご理解を賜りますよう、よろしくお願い申し上げます。
