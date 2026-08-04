---
title: 【復旧済み】Messaging API障害のお知らせ
navigation: true
description: Messaging APIにおいて以下の障害が発生しておりましたが、すべて復旧いたしました。
meta: >-
  {"date":"2020-12-22 00:00 UTC","tags":"Outage report, Messaging
  API","locale":"ja"}
path: /ja/_partials/news/2020/2020-12-22-messaging-api-outage
__hash__: dIFMasc8eGKdpaf6Q5vc8a20bhMAbRN7kLduz-JeDoA
seo:
  title: 【復旧済み】Messaging API障害のお知らせ
  description: Messaging APIにおいて以下の障害が発生しておりましたが、すべて復旧いたしました。
---

Messaging APIにおいて以下の障害が発生しておりましたが、すべて復旧いたしました。

お客様には多大なご迷惑をお掛けし、誠に申し訳ございません。

### 発生日時

2020年12月22日 12:16頃 ～ 13:31頃（UTC+9）

### 原因

サーバー障害

### 状況

一部のMessaging APIリクエストの処理が正常に行われない事象が発生しておりました。

### 影響範囲

[ナローキャストメッセージを送る](/reference/messaging-api/#send-narrowcast-message)の一部（オーディエンスで送信対象を指定したもの）で、送信の処理が正常に行われませんでした。

[ナローキャストメッセージの進行状況を取得する](/reference/messaging-api/#get-narrowcast-progress-status)エンドポイントを使ってナローキャストの進行状況を確認した際に、レスポンスの**phase**プロパティが`failed`、かつ**errorCode**プロパティが`1`の場合は、今回の障害の影響で失敗している可能性があります。

LINEは今後もお客様への一層のサービス向上に取組んでまいります。何卒ご理解を賜りますよう、よろしくお願い申し上げます。
