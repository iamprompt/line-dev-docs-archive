---
title: 【復旧済み】Messaging API（ボット） 障害のお知らせ
navigation: true
description: >-
  Messaging
  API（ボット）において以下の障害が発生しておりましたが、すべて復旧いたしました。お客様には多大なご迷惑をお掛けし、誠に申し訳ございませんでした。
meta: >-
  {"date":"2018-03-29 00:00 UTC","tags":"Outage report, LINE
  Platform","locale":"ja"}
path: /ja/_partials/news/2018/2018-03-29-server-outage
__hash__: oxCaUwGcISChsLIEpfDbN6i8vyRkEIl3Z1n13XeES_g
seo:
  title: 【復旧済み】Messaging API（ボット） 障害のお知らせ
  description: >-
    Messaging
    API（ボット）において以下の障害が発生しておりましたが、すべて復旧いたしました。お客様には多大なご迷惑をお掛けし、誠に申し訳ございませんでした。
---

Messaging API（ボット）において以下の障害が発生しておりましたが、すべて復旧いたしました。お客様には多大なご迷惑をお掛けし、誠に申し訳ございませんでした。

### 発生日時

2018年3月27日 21:40 〜 23:50（UTC+9）

### 原因

サーバー障害

### 状況

以下のAPIが呼び出される際に、ステータスコード500のエラーが発生する場合がありました。

- ユーザーが送信した画像、動画、音声、およびファイルを取得するAPI：[https://api.line.me/v2/bot/message/{messageId}/content](https://api.line.me/v2/bot/message/%7BmessageId%7D/content){rel="[\"nofollow\"]"}
- リッチメニューAPI：[https://api.line.me/v2/bot/richmenu/](https://api.line.me/v2/bot/richmenu/){rel="[\"nofollow\"]"}*

LINEは今後もお客様への一層のサービス向上に取組んでまいります。何卒ご理解を賜りますよう、よろしくお願い申し上げます。
