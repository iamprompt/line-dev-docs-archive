---
title: 【復旧済み】Messaging API障害のお知らせ
navigation: true
description: Messaging APIにおいて以下の障害が発生しておりましたが、すべて復旧いたしました。お客様には多大なご迷惑をお掛けし、誠に申し訳ございませんでした。
meta: >-
  {"date":"2019-09-12 4:00 UTC","tags":"Outage report, Messaging
  API","locale":"ja"}
path: /ja/_partials/news/2019/2019-09-12-messaging-api-outage
__hash__: 1uY6ELgOxqfKQ36rJJMwG2lNY9lx3vqbwxzxRrdUWa0
seo:
  title: 【復旧済み】Messaging API障害のお知らせ
  description: >-
    Messaging
    APIにおいて以下の障害が発生しておりましたが、すべて復旧いたしました。お客様には多大なご迷惑をお掛けし、誠に申し訳ございませんでした。
---

Messaging APIにおいて以下の障害が発生しておりましたが、すべて復旧いたしました。お客様には多大なご迷惑をお掛けし、誠に申し訳ございませんでした。

### 発生日時

2019年9月11日 17:00頃 ～ 18:30頃（UTC+9）

2019年9月12日 13:30頃 ～ 14:00頃（UTC+9）

### 原因

アクセス増加に起因する弊社サーバー障害

### 影響範囲

すべてのMessaging API（[https://api.line.me/v2/bot/*）](https://api.line.me/v2/bot/*%EF%BC%89){rel="[\"nofollow\"]"}

### 状況

リクエストの一部で、ステータスコード500番台のエラーが発生していました。また、応答メッセージを送るAPI（[https://api.line.me/v2/bot/message/reply）では、リクエスト内容が正しいにもかかわらず、ステータスコード400番台のエラーが発生していました。](https://api.line.me/v2/bot/message/reply%EF%BC%89%E3%81%A7%E3%81%AF%E3%80%81%E3%83%AA%E3%82%AF%E3%82%A8%E3%82%B9%E3%83%88%E5%86%85%E5%AE%B9%E3%81%8C%E6%AD%A3%E3%81%97%E3%81%84%E3%81%AB%E3%82%82%E3%81%8B%E3%81%8B%E3%82%8F%E3%82%89%E3%81%9A%E3%80%81%E3%82%B9%E3%83%86%E3%83%BC%E3%82%BF%E3%82%B9%E3%82%B3%E3%83%BC%E3%83%89400%E7%95%AA%E5%8F%B0%E3%81%AE%E3%82%A8%E3%83%A9%E3%83%BC%E3%81%8C%E7%99%BA%E7%94%9F%E3%81%97%E3%81%A6%E3%81%84%E3%81%BE%E3%81%97%E3%81%9F%E3%80%82){rel="[\"nofollow\"]"}

LINEは今後もお客様への一層のサービス向上に取組んでまいります。何卒ご理解を賜りますよう、よろしくお願い申し上げます。
