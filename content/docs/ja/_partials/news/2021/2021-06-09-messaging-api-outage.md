---
title: 【復旧済み】Messaging API障害のお知らせ
navigation: true
description: Messaging APIにおいて以下の障害が発生しておりましたが、すべて復旧いたしました。
meta: >-
  {"date":"2021-06-09 01:00 UTC","tags":"Outage report, Messaging
  API","locale":"ja"}
path: /ja/_partials/news/2021/2021-06-09-messaging-api-outage
__hash__: GeMfgIaqQrwxsq8O45sCqXRlbiYBQeque9XhETKT8ZM
seo:
  title: 【復旧済み】Messaging API障害のお知らせ
  description: Messaging APIにおいて以下の障害が発生しておりましたが、すべて復旧いたしました。
---

Messaging APIにおいて以下の障害が発生しておりましたが、すべて復旧いたしました。

お客様には多大なご迷惑をお掛けし、誠に申し訳ございません。

### 発生日時

2021年6月9日 16:05頃 〜 16:55頃（UTC+9）

### 原因

サーバー障害

### 影響範囲

LINE絵文字（`emojis`プロパティ）を含むテキストメッセージの送信

### 状況

上記の時間帯において、LINE絵文字（`emojis`プロパティ）を含む[テキストメッセージ](/reference/messaging-api/#text-message)の送信リクエストを正常に処理できず、ステータスコード400番台のエラーが発生していました。

LINEは今後もお客様への一層のサービス向上に取組んでまいります。何卒ご理解を賜りますよう、よろしくお願い申し上げます。
