---
title: 【復旧済み／更新】「分析」の一部APIにおける障害のお知らせ
navigation: true
description: ''
meta: >-
  {"date":"2023-09-07 00:00 UTC","tags":"outage-report,
  messaging-api","locale":"ja"}
path: /ja/_partials/news/2023/2023-09-07-messaging-api-outage
__hash__: wEITTpXB89C9LHS9cNqccAl_zMMzec8PRuDWnkbOt2E
seo:
  title: 【復旧済み／更新】「分析」の一部APIにおける障害のお知らせ
  description: ''
---

::admonition{title="2023年9月21日追記" type="note"}
「[発生日時](#date-20230907)」および「[状況](#details-20230907)」を更新しました。
::

Messaging APIにおいて以下の障害が発生しておりましたが、すべて復旧いたしました。お客様には多大なご迷惑をお掛けし、誠に申し訳ございません。

### 発生日時

2023年9月6日 〜 2023年9月21日

### 原因

サーバー障害

### 影響範囲

- [友だち数を取得する](/reference/messaging-api/#get-number-of-followers)

### 状況

一部のLINE公式アカウントにおいて、2023年9月5日時点の友だち数を取得すると、以下のように`followers`、`targetedReaches`、`blocks`がいずれも0になる事象が発生していました。現在は復旧しており、正しい友だち数が取得できます。

```json
{
  "status": "ready",
  "followers": 0,
  "targetedReaches": 0,
  "blocks": 0
}
```

LINEは今後もお客様への一層のサービス向上に取り組んでまいります。何卒ご理解を賜りますよう、よろしくお願い申し上げます。
