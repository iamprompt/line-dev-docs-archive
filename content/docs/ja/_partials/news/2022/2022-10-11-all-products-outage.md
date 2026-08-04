---
title: 【復旧済み】LINEプラットフォーム障害のお知らせ
navigation: true
description: LINEプラットフォームにおいて以下の障害が発生しておりましたが、すべて復旧いたしました。お客様には多大なご迷惑をお掛けし、誠に申し訳ございませんでした。
meta: >-
  {"date":"2022-10-11 01:00 UTC","tags":"Outage report, LINE Platform, Messaging
  API, LINE Login, LIFF, LINE MINI App","locale":"ja"}
path: /ja/_partials/news/2022/2022-10-11-all-products-outage
__hash__: VU9zGJN3YNIy2nCtSbZpLAlYAQxwFBxSIhbXnLSk3Uk
seo:
  title: 【復旧済み】LINEプラットフォーム障害のお知らせ
  description: >-
    LINEプラットフォームにおいて以下の障害が発生しておりましたが、すべて復旧いたしました。お客様には多大なご迷惑をお掛けし、誠に申し訳ございませんでした。
---

LINEプラットフォームにおいて以下の障害が発生しておりましたが、すべて復旧いたしました。お客様には多大なご迷惑をお掛けし、誠に申し訳ございませんでした。

### 発生日時

2022年10月8日 5:51頃 〜 6:45頃（UTC+9）

### 原因

サーバー障害

### 影響範囲

- Messaging API
- LINEログイン
- LIFF/LINEミニアプリ
- LINE Developersコンソール

### 状況

各プロダクトへの主な影響は以下のとおりです。

- [Messaging API](#state-20221011-01)
- [LINEログイン](#state-20221011-02)
- [LIFF/LINEミニアプリ](#state-20221011-03)
- [LINE Developersコンソール](#state-20221011-04)

#### Messaging API

- 一部のリクエストを正常に処理できず、ステータスコード500番台のエラーが発生していました。
- Webhookイベントの送信が遅延したり、正常に行われない場合がありました。
- 以下のエンドポイントへのリクエスト時に、エンドポイントへのリクエストが成功してステータスコード202が返ったにもかかわらず、実際はリッチメニューとユーザーのリンクまたはリンク解除が行われていない場合がありました。

  - [リッチメニューと複数のユーザーをリンクする](/reference/messaging-api/#link-rich-menu-to-users)
  - [複数のユーザーのリッチメニューのリンクを解除する](/reference/messaging-api/#unlink-rich-menu-from-users)
- 以下のエンドポイントへのリクエスト時に、エンドポイントへのリクエストが成功してステータスコード200が返ったにもかかわらず、実際はメッセージが送信されていない場合がありました。

  - [プッシュメッセージを送る](/reference/messaging-api/#send-push-message)
  - [応答メッセージを送る](/reference/messaging-api/#send-reply-message)

なお本障害の影響で、APIリクエストは成功したが実際に送信されなかったメッセージについては、LINE公式アカウントのご利用料金、および[送信済みのプッシュメッセージの数を取得する](/reference/messaging-api/#get-number-of-push-messages)エンドポイント等で確認可能な「送信済みメッセージの数」にはカウントされません。

#### LINEログイン

- LINEログインを正常に行うことができない場合がありました。

#### LIFF/LINEミニアプリ

- LIFF/LINEミニアプリを正常に利用できない場合がありました。

#### LINE Developersコンソール

- LINE Developersコンソールの一部機能が正常に利用できない場合がありました。

  
なお障害発生時は、LINE API Statusにて速報をお知らせしております。詳しくは、2021年4月5日のニュース、「[サービスの稼働状況を確認できるLINE API Statusを公開しました](/news/2021/04/05/line-api-status/)」を参照してください。

LINEは今後もお客様への一層のサービス向上に取組んでまいります。何卒ご理解を賜りますよう、よろしくお願い申し上げます。
