---
title: 【復旧済み／更新】LINEプラットフォーム障害のお知らせ
navigation: true
description: ''
meta: >-
  {"date":"2021-04-12 00:00 UTC","tags":"Outage report, LINE
  Platform","locale":"ja"}
path: /ja/_partials/news/2021/2021-04-12-all-products-outage
__hash__: Rwdplov1jZYaMlh1jVu9M7VMhTmLOrM3Q_PjHkh9JDQ
seo:
  title: 【復旧済み／更新】LINEプラットフォーム障害のお知らせ
  description: ''
---

::admonition{title="2021年4月13日追記" type="note"}
「[状況](#state)」に各プロダクトへの主な影響を追記しました。
::

LINEプラットフォームおいて以下の障害が発生しておりましたが、すべて復旧いたしました。 お客様には多大なご迷惑をお掛けし、誠に申し訳ございませんでした。

### 発生日時

2021年4月12日 15:10頃 〜 16:01頃（UTC+9）

### 原因

設備障害

### 影響範囲

- Messaging API全般
- LINEログイン全般
- LIFF全般
- その他LINEプラットフォームで提供する機能全般

### 状況

設備障害の影響により、LINE Developersで提供するプロダクト全般が正常に利用できない場合がありました。

各プロダクトへの主な影響は以下のとおりです。

- [Messaging API](#state-01)
- [LINEログイン](#state-02)
- [LIFF/LINEミニアプリ](#state-03)
- [LINE Developersコンソール](#state-04)

#### Messaging API

- APIリクエストは成功した（HTTPステータスコード200でレスポンスされている）が、Messaging APIによるメッセージ送信が大幅に遅延したり、正常に行われない場合がありました。
- Webhookイベントの送信が大幅に遅延したり、正常に行われない場合がありました。

なお本障害の影響で、APIリクエストは成功したが実際に送信されなかったメッセージについては、LINE公式アカウントのご利用料金、および[送信済みのプッシュメッセージの数を取得する](/reference/messaging-api/#get-number-of-push-messages)エンドポイント等で確認可能な「送信済みメッセージの数」にはカウントされません。

#### LINEログイン

- LINEログインを正常に行うことができない場合がありました。

#### LIFF/LINEミニアプリ

- LIFF/LINEミニアプリを正常に利用できない場合がありました。
- `liff.shareTargetPicker()`が正常に利用できない場合がありました。
- サービスメッセージが正常に送信されない場合がありました。

#### LINE Developersコンソール

- Messaging APIチャネルの作成ができない場合がありました。

  
LINEは今後もお客様への一層のサービス向上に取組んでまいります。何卒ご理解を賜りますよう、よろしくお願い申し上げます。
