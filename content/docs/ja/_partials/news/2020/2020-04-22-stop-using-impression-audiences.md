---
title: 【復旧済み／更新】「オーディエンス」と「分析」の一部APIの集計不具合のお知らせ
navigation: true
description: ''
meta: >-
  {"date":"2020-04-22 00:00 UTC","tags":"Outage report, Messaging
  API","locale":"ja"}
path: /ja/_partials/news/2020/2020-04-22-stop-using-impression-audiences
__hash__: XYQV6wyBZ8lo1ciGGQQ3Lf5lVO3mi_iO3NXONRKRf5Y
seo:
  title: 【復旧済み／更新】「オーディエンス」と「分析」の一部APIの集計不具合のお知らせ
  description: ''
---

::admonition{title="2021年11月5日更新" type="note"}
2020年5月1日にお知らせしていたAPIの制限について、全て解除されました。制限の解除に伴い、[発生日時](#date-20200422)と[状況](#details-20200422)を更新しました。
::

::admonition{title="2020年5月1日更新" type="note"}
2020年4月22日にお知らせしていたAPIが、制限付きで使用できるようになりました。

詳しくは、以下の項目を参照してください。

- [インプレッションリターゲティング用のオーディエンスを作成する](/reference/messaging-api/#create-imp-audience-group)
- [ユーザーの操作に基づく統計情報を取得する](/reference/messaging-api/#get-message-event)
::

Messaging APIにおいて以下の障害が発生しておりましたが、すべて復旧いたしました。お客様には多大なご迷惑をお掛けし、誠に申し訳ございませんでした。

### 発生日時

2020年4月13日 15:30頃 ～ 2020年5月1日 14:30頃（UTC+9）

### 状況

上記の時間帯において、インプレッションリターゲティング用のオーディエンスで、正しくインプレッションをカウントできなくなった可能性がありました。

そのため、一時的に一部機能の利用を制限していましたが、現在は解除されています。

- [インプレッションリターゲティング用のオーディエンスを作成する](/reference/messaging-api/#create-imp-audience-group)APIの停止（解除済み）
- [ユーザーの操作に基づく統計情報を取得する](/reference/messaging-api/#get-message-event)APIの停止（解除済み）
- 2020年3月30日 00:00 ～ 2020年4月22日 21:30に配信されたメッセージをもとに作成したインプレッションリターゲティング用のオーディエンスの無効化（無効化済み）

LINEは今後もお客様への一層のサービス向上に取組んでまいります。何卒ご理解を賜りますよう、よろしくお願い申し上げます。
