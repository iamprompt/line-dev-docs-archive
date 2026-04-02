---
title: 【復旧済み】Messaging API障害のお知らせ
navigation: true
description: Messaging APIにおいて以下の障害が発生しておりましたが、すべて復旧いたしました。お客様には多大なご迷惑をお掛けし、誠に申し訳ございません。
meta: >-
  {"date":"2022-04-01 01:00 UTC","tags":"outage-report,
  messaging-api","locale":"ja"}
path: /ja/_partials/news/2022/2022-04-01-messaging-api-outage
__hash__: 3BnT4sMzEbZ9kqEfdExR10l4SvCavfADsApkMwsjvco
seo:
  title: 【復旧済み】Messaging API障害のお知らせ
  description: Messaging APIにおいて以下の障害が発生しておりましたが、すべて復旧いたしました。お客様には多大なご迷惑をお掛けし、誠に申し訳ございません。
---

Messaging APIにおいて以下の障害が発生しておりましたが、すべて復旧いたしました。お客様には多大なご迷惑をお掛けし、誠に申し訳ございません。

### 発生日時

2022年3月30日 14:47頃 ～ 20:51頃（UTC+9）

### 原因

サーバー障害

### 影響範囲

[ボットの情報を取得する](/reference/messaging-api/#get-bot-info)

### 状況

開発者がボットのプロフィール画像を設定していない場合、対象のエンドポイントでボットの情報を取得したときに、レスポンスにプロフィール画像のURL（`pictureUrl`）は含まれません。

しかし上記の時間帯において、対象のエンドポイントでボットの情報を取得したときに、開発者がボットのプロフィール画像を設定していない場合であっても、レスポンスでプロフィール画像のURL（`pictureUrl`）の値として`https://profile.line-scdn.net`を返していました。

LINEは今後もお客様への一層のサービス向上に取り組んでまいります。何卒ご理解を賜りますよう、よろしくお願い申し上げます。
