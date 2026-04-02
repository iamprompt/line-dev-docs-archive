---
title: 【復旧済み】LINEログイン障害のお知らせ
navigation: true
description: |-
  LINEログインにおいて以下の障害が発生しておりましたが、すべて復旧いたしました。
  お客様には多大なご迷惑をお掛けし、誠に申し訳ございませんでした。
meta: >-
  {"date":"2021-04-07 01:00 UTC","tags":"Outage report, LINE
  Login","locale":"ja"}
path: /ja/_partials/news/2021/2021-04-07-line-login-outage
__hash__: 9DT2VUFRgFqnttuEt46bSogLFaLLW5Y2et6YfORW2v8
seo:
  title: 【復旧済み】LINEログイン障害のお知らせ
  description: |-
    LINEログインにおいて以下の障害が発生しておりましたが、すべて復旧いたしました。
    お客様には多大なご迷惑をお掛けし、誠に申し訳ございませんでした。
---

LINEログインにおいて以下の障害が発生しておりましたが、すべて復旧いたしました。
お客様には多大なご迷惑をお掛けし、誠に申し訳ございませんでした。

### 発生日時

2021年4月3日 10:00頃 〜 2021年4月6日 12:05頃（UTC+9）

### 原因

サーバー障害

### 影響範囲

- LINEログイン v2.1の以下のエンドポイント（`https://api.line.me/oauth2/v2.1/token`）

  - [アクセストークンを発行する](/reference/line-login/#issue-access-token)

### 状況

一部のリクエストにおいて、リクエスト内容が適切であるにも関わらず、HTTPステータスコード400のエラーが発生し、リクエストが正常に処理されない場合がありました。

LINEは今後もお客様への一層のサービス向上に取組んでまいります。何卒ご理解を賜りますよう、よろしくお願い申し上げます。
