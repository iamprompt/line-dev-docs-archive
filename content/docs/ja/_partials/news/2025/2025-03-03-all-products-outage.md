---
title: 【復旧済み】LINEプラットフォーム障害のお知らせ
navigation: true
description: LINEプラットフォームにおいて以下の障害が発生しておりましたが、すべて復旧いたしました。お客様には多大なご迷惑をお掛けし、誠に申し訳ございませんでした。
meta: >-
  {"date":"2025-03-03 00:00 UTC","tags":"outage-report, line-platform,
  line-login, liff, line-mini-app, messaging-api, console","locale":"ja"}
path: /ja/_partials/news/2025/2025-03-03-all-products-outage
__hash__: V55503-EuIkw7FKZhaMrIt8DBl9JKmib2TcrPXV7_RQ
seo:
  title: 【復旧済み】LINEプラットフォーム障害のお知らせ
  description: >-
    LINEプラットフォームにおいて以下の障害が発生しておりましたが、すべて復旧いたしました。お客様には多大なご迷惑をお掛けし、誠に申し訳ございませんでした。
---

LINEプラットフォームにおいて以下の障害が発生しておりましたが、すべて復旧いたしました。お客様には多大なご迷惑をお掛けし、誠に申し訳ございませんでした。

### 発生日時

2025年2月28日 18:20頃 〜 19:24頃（UTC+9）

### 原因

サーバー障害

### 影響範囲

- Messaging API
- LINEログイン
- LIFF/LINEミニアプリ
- LINE Developersコンソール

### 状況

各プロダクトへの主な影響は以下のとおりです。

- [Messaging API](#state-20250303-01)
- [LINEログイン](#state-20250303-02)
- [LIFF/LINEミニアプリ](#state-20250303-03)
- [LINE Developersコンソール](#state-20250303-04)

#### Messaging API

- Webhookイベントの送信が遅延、もしくは正常に行われない場合がありました。
- 一部のリクエストを正常に処理できず、ステータスコード500番台のエラーが発生していました。

なお本障害の影響で、APIリクエストは成功したが実際に送信されなかったメッセージについては、LINE公式アカウントのご利用料金、および[送信済みのプッシュメッセージの数を取得する](/reference/messaging-api/#get-number-of-push-messages)エンドポイント等で確認可能な「送信済みメッセージの数」にはカウントされません。

#### LINEログイン

- LINEログインを正常に行うことができない場合がありました。
- 一部のリクエストを正常に処理できず、ステータスコード500番台のエラーが発生していました。

#### LIFF/LINEミニアプリ

- LIFF/LINEミニアプリを正常に利用できない場合がありました。
- 一部のリクエストを正常に処理できず、ステータスコード500番台のエラーが発生していました。

#### LINE Developersコンソール

LINE Developersコンソールの一部機能が正常に利用できない場合がありました。

  
なお障害発生時は、LINE API Statusにて速報をお知らせしております。詳しくは、『LINEプラットフォームの基礎知識』の「[LINEプラットフォームの稼働状況を確認する（LINE API Status）](/docs/basics/line-api-status/)」を参照してください。

LINEヤフー株式会社は今後もお客様への一層のサービス向上に取組んでまいります。何卒ご理解を賜りますよう、よろしくお願い申し上げます。
