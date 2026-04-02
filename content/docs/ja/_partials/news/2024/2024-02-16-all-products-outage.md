---
title: 【復旧済み】LINEプラットフォーム障害のお知らせ
navigation: true
description: LINEプラットフォームにおいて以下の障害が発生しておりましたが、すべて復旧いたしました。お客様には多大なご迷惑をお掛けし、誠に申し訳ございませんでした。
meta: >-
  {"date":"2024-02-16 00:00 UTC","tags":"outage-report, line-platform,
  line-login, liff, line-mini-app, messaging-api","locale":"ja"}
path: /ja/_partials/news/2024/2024-02-16-all-products-outage
__hash__: 1bQk0QXRQJ_TolReULr-pwQQ1hEhyNj73164QbSwmEQ
seo:
  title: 【復旧済み】LINEプラットフォーム障害のお知らせ
  description: >-
    LINEプラットフォームにおいて以下の障害が発生しておりましたが、すべて復旧いたしました。お客様には多大なご迷惑をお掛けし、誠に申し訳ございませんでした。
---

LINEプラットフォームにおいて以下の障害が発生しておりましたが、すべて復旧いたしました。お客様には多大なご迷惑をお掛けし、誠に申し訳ございませんでした。

### 発生日時

2024年2月14日 17:00頃 〜 17:10頃（UTC+9）

### 原因

サーバー障害

### 影響範囲

- Messaging API
- LINEログイン
- LIFF/LINEミニアプリ
- LINE Developersコンソール
- その他、以下のドメイン名に該当するLINEプラットフォームのサービス

  - api.line.me
  - access.line.me

### 状況

各プロダクトへの主な影響は以下のとおりです。

- [Messaging API](#state-20240216-01)
- [LINEログイン](#state-20240216-02)
- [LIFF/LINEミニアプリ](#state-20240216-03)
- [LINE Developersコンソール](#state-20240216-04)

#### Messaging API

リクエストを正常に処理できない場合がありました。

なお本障害の影響で、APIリクエストは成功したが実際に送信されなかったメッセージについては、LINE公式アカウントのご利用料金、および[送信済みのプッシュメッセージの数を取得する](/reference/messaging-api/#get-number-of-push-messages)エンドポイント等で確認可能な「送信済みメッセージの数」にはカウントされません。

#### LINEログイン

LINEログインを正常に行うことができない場合がありました。

#### LIFF/LINEミニアプリ

LIFF/LINEミニアプリを正常に利用できない場合がありました。

#### LINE Developersコンソール

LINE Developersコンソールの一部機能が正常に利用できない場合がありました。

  
なお障害発生時は、LINE API Statusにて速報をお知らせしております。詳しくは、2021年4月5日のニュース、「[サービスの稼働状況を確認できるLINE API Statusを公開しました](/news/2021/04/05/line-api-status/)」を参照してください。

LINEヤフー株式会社は今後もお客様への一層のサービス向上に取組んでまいります。何卒ご理解を賜りますよう、よろしくお願い申し上げます。
