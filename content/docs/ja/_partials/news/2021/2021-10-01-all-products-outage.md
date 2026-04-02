---
title: 【復旧済み】LINEプラットフォーム障害のお知らせ
navigation: true
description: |-
  LINEプラットフォームにおいて以下の障害が発生しておりましたが、すべて復旧いたしました。
  お客様には多大なご迷惑をお掛けし、誠に申し訳ございませんでした。
meta: >-
  {"date":"2021-10-01 01:00 UTC","tags":"Outage report, LINE Platform, Messaging
  API, LINE Login, LIFF, LINE MINI App","locale":"ja"}
path: /ja/_partials/news/2021/2021-10-01-all-products-outage
__hash__: MDBRdzQRjdSeDRR8xIzWTorSPbq6Jc5My6jfgCplU98
seo:
  title: 【復旧済み】LINEプラットフォーム障害のお知らせ
  description: |-
    LINEプラットフォームにおいて以下の障害が発生しておりましたが、すべて復旧いたしました。
    お客様には多大なご迷惑をお掛けし、誠に申し訳ございませんでした。
---

LINEプラットフォームにおいて以下の障害が発生しておりましたが、すべて復旧いたしました。
お客様には多大なご迷惑をお掛けし、誠に申し訳ございませんでした。

### 発生日時

2021年10月1日 9:45頃 〜 9:49頃（UTC+9）

### 原因

ネットワーク障害

### 影響範囲

- Messaging API
- LINEログイン
- LIFF/LINEミニアプリ

### 状況

各プロダクトへの主な影響は以下のとおりです。

- [Messaging API](#state-20211001-01)
- [LINEログイン](#state-20211001-02)
- [LIFF/LINEミニアプリ](#state-20211001-03)

#### Messaging API

- 一部のリクエストを正常に処理できず、ステータスコード500番台のエラーが発生していました。
- Webhookイベントの送信が遅延したり、正常に行われない場合がありました。
- 以下のエンドポイントへのリクエスト時に、エンドポイントへのリクエストが成功してステータスコード200が返ったにもかかわらず、実際はメッセージが送信されていない場合がありました。

  - [プッシュメッセージを送る](/reference/messaging-api/#send-push-message)
  - [応答メッセージを送る](/reference/messaging-api/#send-reply-message)

なお本障害の影響で、APIリクエストは成功したが実際に送信されなかったメッセージについては、LINE公式アカウントのご利用料金、および[送信済みのプッシュメッセージの数を取得する](/reference/messaging-api/#get-number-of-push-messages)エンドポイント等で確認可能な「送信済みメッセージの数」にはカウントされません。

#### LINEログイン

- LINEログインを正常に行うことができない場合がありました。

#### LIFF/LINEミニアプリ

- LIFF/LINEミニアプリを正常に利用できない場合がありました。
- サービスメッセージが正常に送信されない場合がありました。

  
LINEは今後もお客様への一層のサービス向上に取組んでまいります。
何卒ご理解を賜りますよう、よろしくお願い申し上げます。
