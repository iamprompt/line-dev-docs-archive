---
title: 【更新】Messaging API メンテナンスのお知らせ
navigation: true
description: ''
meta: >-
  {"date":"2021-07-20 01:00 UTC","tags":"Maintenance, Messaging API, Options for
  corporate customers","locale":"ja"}
path: /ja/_partials/news/2021/2021-07-20-messaging-api-maintenance
__hash__: 60MSuH853ry8KEohf5ehxpTF2-Cu35DcUnFVQr-rCb0
seo:
  title: 【更新】Messaging API メンテナンスのお知らせ
  description: ''
---

::admonition{title="2021年8月6日追記" type="note"}
「[前日の送信済みのメッセージの数が取得できるタイミングが通常よりも遅くなります](#impact-20210720-2)」に注記を追加しました。
::

Messaging APIにおいて、以下のメンテナンスを行います。ご利用のユーザー様にはご不便をおかけいたしますが、何卒ご理解いただきますようお願い申し上げます。

### メンテナンス予定日時

2021年8月5日 1:00 〜 3:00（UTC+9）

なお、メンテナンス終了時刻は予告なく前後する可能性があります。

### 影響範囲

::admonition{title="2021年7月26日追記" type="note"}
当初、影響範囲の一部としてお伝えしていた以下のエンドポイントについては、メンテナンスの影響対象外となりました。メンテナンス中も、ナローキャストメッセージの進行状況は通常通り取得可能です。

- [ナローキャストメッセージの進行状況を取得する](/reference/messaging-api/#get-narrowcast-progress-status)
::

メンテナンスによる影響は以下のとおりです。

1. ~~メンテナンス中はナローキャストメッセージの進行状況が更新されません~~
2. [前日の送信済みのメッセージの数が取得できるタイミングが通常よりも遅くなります](#impact-20210720-2)

#### 前日の送信済みのメッセージの数が取得できるタイミングが通常よりも遅くなります

::admonition{title="2021年8月6日追記" type="note"}
送信済みメッセージの集計が完了しました。現在は、2021年8月4日および2021年8月5日の送信済みメッセージの数も取得いただけます。
::

::admonition{title="2021年8月5日追記" type="note"}
メンテナンス終了後の集計に時間を要しており、2021年8月5日15時時点で、まだ「前日の送信済みメッセージの数」を取得いただけない状況です。集計完了後、改めてこちらでお知らせをいたします。
::

前日の送信済みメッセージの集計は、メンテナンスの終了後に行われます。そのため、前日の送信済みメッセージの数が取得できるようになるのは、メンテナンス終了から数時間後となります。

取得した集計処理の状態（`status`プロパティ）の値が`unready`だった場合、メッセージの集計がまだ完了していないため、しばらく時間をおいてから再度リクエストをしてください。

- [送信済みの応答メッセージの数を取得する](/reference/messaging-api/#get-number-of-reply-messages)
- [送信済みのプッシュメッセージの数を取得する](/reference/messaging-api/#get-number-of-push-messages)
- [送信済みのマルチキャストメッセージの数を取得する](/reference/messaging-api/#get-number-of-multicast-messages)
- [送信済みのブロードキャストメッセージの数を取得する](/reference/messaging-api/#get-number-of-broadcast-messages)
- [メッセージの送信数を取得する](/reference/messaging-api/#get-number-of-delivery-messages)
- モバイル広告IDを利用したメッセージ配信の結果を取得する（法人ユーザー向けオプション）
- [電話番号を利用したメッセージ配信の結果を取得する](/reference/partner-docs/#get-phone-audience-match)（法人ユーザー向けオプション）
