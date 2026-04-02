---
title: LINE公式アカウントの「分析」の集計ロジックを修正します
navigation: true
description: LINE公式アカウントの分析の集計ロジックを修正します。この修正により、Messaging APIの分析のエンドポイントで取得できる値に影響があります。
meta: >-
  {"date":"2023-06-26 00:00 UTC","tags":"messaging-api,
  line-official-account","locale":"ja"}
path: >-
  /ja/_partials/news/2023/2023-06-26-modification-of-the-aggregation-logic-of-the-line-official-accounts-insight
__hash__: UqSx327ZBoc62DA00SSlN_j2I7DjFPl_HlPM-4iIMK4
seo:
  title: LINE公式アカウントの「分析」の集計ロジックを修正します
  description: LINE公式アカウントの分析の集計ロジックを修正します。この修正により、Messaging APIの分析のエンドポイントで取得できる値に影響があります。
---

LINE公式アカウントの分析の集計ロジックを修正します。この修正により、Messaging APIの[分析](/reference/messaging-api/#get-insight)のエンドポイントで取得できる値に影響があります。

### 修正予定日

2023年7月10日 〜 2023年7月28日

LINE公式アカウント毎に、上記期間のいずれかの日にちにおいて修正が適用されます。なお修正日より前に集計された値については、この修正による影響はありません。

この修正の内容および日時は、変更される可能性があります。

### 影響範囲

集計ロジックの修正によって、次のエンドポイントで取得できる`blocks`（LINE公式アカウントをブロックしているユーザーの数）の値に変化が発生します。

- [友だち数を取得する](/reference/messaging-api/#get-number-of-followers)

詳しくは、『LINE Official Account Manager』の「[【お知らせ】「分析」の集計ロジックの修正について](https://manager.line.biz/announce/20222149?country=JP){rel="[\"nofollow\"]"}」を参照してください。
