---
title: 【復旧済み】LINEログインおよびLIFF障害のお知らせ
navigation: true
description: >-
  LINEログインおよびLIFFにおいて以下の障害が発生しておりましたが、すべて復旧いたしました。お客様には多大なご迷惑をお掛けし、誠に申し訳ございませんでした。
meta: >-
  {"date":"2021-09-02 00:00 UTC","tags":"Outage report, line-login,
  LIFF","locale":"ja"}
path: /ja/_partials/news/2021/2021-09-02-line-login-outage
__hash__: rAwnTOge7OMm6evIXIxSwaJN5TMuNWcxVxxCURS0bx8
seo:
  title: 【復旧済み】LINEログインおよびLIFF障害のお知らせ
  description: >-
    LINEログインおよびLIFFにおいて以下の障害が発生しておりましたが、すべて復旧いたしました。お客様には多大なご迷惑をお掛けし、誠に申し訳ございませんでした。
---

LINEログインおよびLIFFにおいて以下の障害が発生しておりましたが、すべて復旧いたしました。お客様には多大なご迷惑をお掛けし、誠に申し訳ございませんでした。

### 発生日時

- 2021年9月1日 20:05頃 〜 20:18頃（UTC+9）
- 2021年9月1日 20:42頃 〜 20:45頃（UTC+9）
- 2021年9月1日 21:19頃 〜 21:20頃（UTC+9）

### 原因

サーバー障害

### 影響範囲

#### LINEログイン

- [LINEログインしたときにLINE公式アカウントを友だち追加する（ボットリンク）](/docs/line-login/link-a-bot/)
- [LINE公式アカウントとの友だち関係を取得する](/reference/line-login/#get-friendship-status)

#### LIFF

- [liff.getFriendship()](/reference/liff/#get-friendship)

### 状況

一部のLINE公式アカウントにおいて、[ボットリンク](/docs/line-login/link-a-bot/)機能を利用した友だち追加や、ブロックの解除の処理が正常に行われない場合がありました。

またLINE公式アカウントとの友だち関係を取得するリクエストを一部正常に処理できず、ステータスコード500番台のエラーが発生していました。

  
LINEは今後もお客様への一層のサービス向上に取組んでまいります。何卒ご理解を賜りますよう、よろしくお願い申し上げます。
