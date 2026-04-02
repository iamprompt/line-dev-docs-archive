---
title: 【復旧済み】Messaging API障害のお知らせ
navigation: true
description: Messaging APIにおいて以下の障害が発生しておりましたが、すべて復旧いたしました。
meta: >-
  {"date":"2024-02-27 00:00 UTC","tags":"outage-report,
  messaging-api","locale":"ja"}
path: /ja/_partials/news/2024/2024-02-27-messaging-api-outage
__hash__: YMeY5_JVW9_VnrcWgg6EeRxNxjk0tX33ivbcwrdHtGk
seo:
  title: 【復旧済み】Messaging API障害のお知らせ
  description: Messaging APIにおいて以下の障害が発生しておりましたが、すべて復旧いたしました。
---

Messaging APIにおいて以下の障害が発生しておりましたが、すべて復旧いたしました。

お客様には多大なご迷惑をお掛けし、誠に申し訳ございません。

### 発生日時

2024年2月27日 12:37頃 〜 13:17頃（UTC+9）

### 原因

サーバー障害

### 影響範囲

- [応答メッセージを送る](/reference/messaging-api/#send-reply-message)
- [プッシュメッセージを送る](/reference/messaging-api/#send-push-message)
- [マルチキャストメッセージを送る](/reference/messaging-api/#send-multicast-message)
- [ブロードキャストメッセージを送る](/reference/messaging-api/#send-broadcast-message)
- [プッシュメッセージのメッセージオブジェクトを検証する](/reference/messaging-api/#validate-message-objects-of-push-message)
- [ブロードキャストメッセージのメッセージオブジェクトを検証する](/reference/messaging-api/#validate-message-objects-of-broadcast-message)

### 状況

上記の時間帯において、スタンプまたはLINE絵文字を含むメッセージの一部のリクエストを正常に処理できず、ステータスコード500番台のエラーが発生していました。

LINEヤフー株式会社は今後もお客様への一層のサービス向上に取り組んでまいります。何卒ご理解を賜りますよう、よろしくお願い申し上げます。
