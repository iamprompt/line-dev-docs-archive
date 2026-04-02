---
title: 【復旧済み】「分析」の一部APIにおける集計遅延のお知らせ
navigation: true
description: ''
meta: >-
  {"date":"2023-09-04 00:00 UTC","tags":"outage-report,
  messaging-api","locale":"ja"}
path: /ja/_partials/news/2023/2023-09-04-messaging-api-outage
__hash__: xrbmif4eF8X7KHjNXoBtPES-SfAORdi8OrYEzIVZeMM
seo:
  title: 【復旧済み】「分析」の一部APIにおける集計遅延のお知らせ
  description: ''
---

::admonition{title="2023年9月5日追記" type="note"}
「[発生日時](#date-20230904)」および「[状況](#details-20230904)」を更新しました。
::

Messaging APIにおいて以下の障害が発生しておりましたが、すべて復旧いたしました。お客様には多大なご迷惑をお掛けし、誠に申し訳ございません。

### 発生日時

2023年9月2日 ～ 2023年9月4日

### 原因

サーバー障害

### 影響範囲

- [友だち数を取得する](/reference/messaging-api/#get-number-of-followers)

### 状況

上記の期間、集計に時間を要しており、2023年9月1日から2023年9月3日までの友だち数を取得できない状況でした。

現在は、2023年9月1日から2023年9月3日までの友だち数を取得できますが、当該期間の友だち数については復旧作業を行った時点の数値となります。詳しくは、『LINE Official Account Manager』の「[【更新あり】【障害・復旧報告】「友だち」の分析データ集計遅延について](https://manager.line.biz/announce/20225718?country=JP){rel="[\"nofollow\"]"}」を参照してください。

LINEは今後もお客様への一層のサービス向上に取り組んでまいります。何卒ご理解を賜りますよう、よろしくお願い申し上げます。
