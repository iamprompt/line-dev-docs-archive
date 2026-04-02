---
title: Messaging APIで「任意の集計単位で統計情報を取得する機能」が利用できるようになりました
navigation: true
description: >-
  これまで法人ユーザー向けにオプションとして提供していた「任意の集計単位で統計情報を取得する機能」が、Messaging
  APIの機能となり、どなたでも利用できるようになりました。
meta: '{"date":"2022-09-28 01:00 UTC","tags":"Messaging API","locale":"ja"}'
path: /ja/_partials/news/2022/2022-09-28-messaging-api-updated
__hash__: Yt8mbtdTpdis_FR-Nwl6MV5vYFN2TKjoSxMFnu7IOKY
seo:
  title: Messaging APIで「任意の集計単位で統計情報を取得する機能」が利用できるようになりました
  description: >-
    これまで法人ユーザー向けにオプションとして提供していた「任意の集計単位で統計情報を取得する機能」が、Messaging
    APIの機能となり、どなたでも利用できるようになりました。
---

これまで法人ユーザー向けにオプションとして提供していた「任意の集計単位で統計情報を取得する機能」が、Messaging APIの機能となり、どなたでも利用できるようになりました。

### 機能の概要

本機能は多くのエンドユーザーにプッシュメッセージやマルチキャストメッセージを送信する場合に、統計情報を集計できる機能です。

これまでブロードキャストメッセージとナローキャストメッセージでは、リクエストIDごとの「[ユーザーの操作に基づく統計情報](/reference/messaging-api/#get-message-event)」を取得できましたが、プッシュメッセージとマルチキャストメッセージでは統計情報を取得できませんでした。今後はプッシュメッセージとマルチキャストメッセージでメッセージ送信する際に、`customAggregationUnits`プロパティにユニット名を付与することでユニットごとの統計情報を取得できます。

![ユニットごとの統計情報集計](/media/news/new_statistics_ja.png){className="[\"w-fix-440\"]"}

詳しくは、『Messaging APIドキュメント』の「[任意の集計単位で統計情報を取得する](/docs/messaging-api/unit-based-statistics-aggregation/)」を参照してください。

### 利用可能となったエンドポイント

Messaging APIで利用可能なエンドポイントは以下のとおりです。

- [ユニットごとの統計情報を取得する](/reference/messaging-api/#get-statistics-per-unit)
- [当月に利用したユニットの数を取得する](/reference/messaging-api/#get-the-number-of-unit-name-types-assigned-during-this-month)
- [当月に利用したユニット名のリストを取得する](/reference/messaging-api/#get-a-list-of-unit-names-assigned-during-this-month)
