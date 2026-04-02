---
title: 【復旧済み】Messaging API（ボット）とLINEログイン 障害のお知らせ
navigation: true
description: >-
  Messaging
  API（ボット）とLINEログインにおいて以下の障害が発生しておりましたが、すべて復旧いたしました。お客様には多大なご迷惑をお掛けし、誠に申し訳ございませんでした。
meta: >-
  {"date":"2017-12-15 00:00 UTC","tags":"Outage report, LINE
  Platform","locale":"ja"}
path: /ja/_partials/news/2017/2017-12-15-server-outage
__hash__: kAh0JrVAN2Z9BGTkN_c7NwTbXzBivuxnnBvBAqbvvw4
seo:
  title: 【復旧済み】Messaging API（ボット）とLINEログイン 障害のお知らせ
  description: >-
    Messaging
    API（ボット）とLINEログインにおいて以下の障害が発生しておりましたが、すべて復旧いたしました。お客様には多大なご迷惑をお掛けし、誠に申し訳ございませんでした。
---

Messaging API（ボット）とLINEログインにおいて以下の障害が発生しておりましたが、すべて復旧いたしました。お客様には多大なご迷惑をお掛けし、誠に申し訳ございませんでした。

### 発生日時

2017年12月14日 16:40 ～ 17:08（UTC+9）

### 原因

サーバー障害

### 状況

1. Messaging APIとLINEログインとを問わず、リクエスト・レスポンスにユーザーIDを含むすべてのAPIが失敗するか、正しいユーザーIDを応答していなかった。
2. Messaging APIにおけるWebhookに、正しいユーザーIDが設定されていなかった。
3. ユーザーIDを指定したプッシュメッセージが失敗した。

LINEは今後もお客様への一層のサービス向上に取組んでまいります。何卒ご理解を賜りますよう、よろしくお願い申し上げます。
