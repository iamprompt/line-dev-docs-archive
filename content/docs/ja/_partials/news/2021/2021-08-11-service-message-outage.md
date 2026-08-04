---
title: 【復旧済み／更新】LINEミニアプリおよびLINEログイン障害のお知らせ
navigation: true
description: ''
meta: >-
  {"date":"2021-08-11 00:00 UTC","tags":"Outage report, LINE MINI App,
  line-login","locale":"ja"}
path: /ja/_partials/news/2021/2021-08-11-service-message-outage
__hash__: rAAa9o68pKcb7T-xDcDdQaZ7VTWR5Xw2gpComF77JUg
seo:
  title: 【復旧済み／更新】LINEミニアプリおよびLINEログイン障害のお知らせ
  description: ''
---

::admonition{title="2021年8月12日追記" type="note"}
調査の結果、LINEログインへの影響も判明したため、記事タイトルおよび [影響範囲](#impact-20210811)、[状況](#details-20210811) を更新しました。
::

LINEミニアプリにおいて以下の障害が発生しておりましたが、すべて復旧いたしました。お客様には多大なご迷惑をお掛けし、誠に申し訳ございませんでした。

### 発生日時

2021年8月10日 16:38頃 〜 16:48頃（UTC+9）

### 原因

サーバー障害

### 影響範囲

- LINEミニアプリの「[サービスメッセージを送る](/reference/line-mini-app/#send-service-message)」エンドポイント
- [LINEログインしたときにLINE公式アカウントを友だち追加する（ボットリンク）](/docs/line-login/link-a-bot/)

### 状況

各プロダクトへの主な影響は以下のとおりです。

#### LINEミニアプリ

一部のLINEミニアプリにおいて、「[サービスメッセージを送る](/reference/line-mini-app/#send-service-message)」エンドポイントへのリクエストが成功してステータスコード200が返ったにもかかわらず、実際はメッセージが送信されていない場合がありました。

#### LINEログイン

一部のLINE公式アカウントにおいて、[ボットリンク](/docs/line-login/link-a-bot/)機能を利用した友だち追加や、ブロックの解除の処理が正常に行われない場合がありました。

  
LINEは今後もお客様への一層のサービス向上に取組んでまいります。何卒ご理解を賜りますよう、よろしくお願い申し上げます。
