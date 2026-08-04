---
title: 【復旧済み】LINEプラットフォーム障害のお知らせ
navigation: true
description: LINEプラットフォームにおいて以下の障害が発生しておりましたが、すべて復旧いたしております。
meta: >-
  {"date":"2021-12-20 00:00 UTC","tags":"Outage report, LINE Platform, Messaging
  API, LINE Login, LIFF, LINE MINI App","locale":"ja"}
path: /ja/_partials/news/2021/2021-12-20-line-platform-outage
__hash__: CUbW-_QlXLu_fzB_Tcqjs9Hzk4bDyPPJnweEGKo_4yY
seo:
  title: 【復旧済み】LINEプラットフォーム障害のお知らせ
  description: LINEプラットフォームにおいて以下の障害が発生しておりましたが、すべて復旧いたしております。
---

LINEプラットフォームにおいて以下の障害が発生しておりましたが、すべて復旧いたしております。

お客様には多大なご迷惑をお掛けし、誠に申し訳ございませんでした。

### 発生日時

1. 2021年12月19日 18:00頃 〜 18:46頃（UTC+9）
2. 2021年12月19日 21:20頃 〜 22:26頃（UTC+9）

### 原因

サーバー障害

### 影響範囲

- Messaging API
- LINEログイン
- LIFF/LINEミニアプリ

### 状況

一部のLINE公式アカウントにおいて、[ボットリンク](/docs/line-login/link-a-bot/)機能を利用した友だち追加や、ブロックの解除の処理が正常に行われない場合がありました。

またLINE公式アカウントとの友だち関係を取得するリクエストを一部正常に処理できず、ステータスコード500番台のエラーが発生していました。

各プロダクトへの主な影響は以下のとおりです。

- [Messaging API](#state-20211220-01)
- [LINEログイン](#state-20211220-02)
- [LIFF/LINEミニアプリ](#state-20211220-03)

#### Messaging API

- 一部のリクエストを正常に処理できず、ステータスコード500番台のエラーが発生していました。

#### LINEログイン

- [LINEログインしたときにLINE公式アカウントを友だち追加する（ボットリンク）](/docs/line-login/link-a-bot/)
- [LINE公式アカウントとの友だち関係を取得する](/reference/line-login/#get-friendship-status)

#### LIFF/LINEミニアプリ

- [liff.getFriendship()](/reference/liff/#get-friendship)

  
LINEは今後もお客様への一層のサービス向上に取組んでまいります。
何卒ご理解を賜りますよう、よろしくお願い申し上げます。
