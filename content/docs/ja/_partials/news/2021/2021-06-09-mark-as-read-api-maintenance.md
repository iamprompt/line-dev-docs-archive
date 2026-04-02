---
title: Mark-as-Read API メンテナンスのお知らせ
navigation: true
description: >-
  ユーザーからのメッセージに「既読」を付けるMark-as-Read
  APIにおいて、以下のメンテナンスを行います。ご利用のユーザー様にはご不便をおかけいたしますが、何卒ご理解いただきますようお願い申し上げます。
meta: >-
  {"date":"2021-06-09 00:00 UTC","tags":"Maintenance, Options for corporate
  customers, Messaging API","locale":"ja"}
path: /ja/_partials/news/2021/2021-06-09-mark-as-read-api-maintenance
__hash__: SXYO-5ncOmveAhRSOvD_TNQhOPmNhgm5XEkWvKWKZCI
seo:
  title: Mark-as-Read API メンテナンスのお知らせ
  description: >-
    ユーザーからのメッセージに「既読」を付けるMark-as-Read
    APIにおいて、以下のメンテナンスを行います。ご利用のユーザー様にはご不便をおかけいたしますが、何卒ご理解いただきますようお願い申し上げます。
---

ユーザーからのメッセージに「既読」を付ける[Mark-as-Read API](/docs/partner-docs/mark-as-read/)において、以下のメンテナンスを行います。ご利用のユーザー様にはご不便をおかけいたしますが、何卒ご理解いただきますようお願い申し上げます。

::admonition{title="Mark-as-Read APIを利用するには手続きが必要です" type="note"}
Mark-as-Read APIは、所定の申請等を行った法人ユーザーのみがご利用いただけます。法人ユーザー向けオプションについて詳しくは、『法人ユーザー向けオプションドキュメント』の「[概要](/docs/partner-docs/overview/)」を参照してください。
::

### メンテナンス予定日時

2021年6月24日 0:00 ～ 7:00（UTC+9）

なお、メンテナンス終了時刻は予告なく前後する可能性があります。

### 影響範囲

上記の期間は、Mark-as-Read APIを使用しているLINE公式アカウントで、ユーザーからのメッセージに既読を付けられません。

[Mark-as-Read API](/reference/partner-docs/#mark-as-read)に対するリクエストには、ステータスコード503番のエラーが返ります。エラーが発生したリクエストについては、メンテナンス終了後に再試行することで既読が付きます。
