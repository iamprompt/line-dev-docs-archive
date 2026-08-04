---
title: 【復旧済み】Webhookイベント送信障害のお知らせ
navigation: true
description: >-
  LIFF
  SDKのliff.sendMessages()メソッドを使ってメッセージをトークルームに送信した際に、対応するWebhookイベントがボットサーバーに送信されない障害が発生しておりましたが、すべて復旧いたしました。お客様には多大なご迷惑をお掛けし、誠に申し訳ございませんでした。
meta: >-
  {"date":"2021-01-14 00:00 UTC","tags":"Outage report, LIFF, Messaging
  API","locale":"ja"}
path: /ja/_partials/news/2021/2021-01-14-webhook-outage
__hash__: QRm805TOTkj6Krrzg8HKvNAwbJPbyjy8-PrWTYgZo-g
seo:
  title: 【復旧済み】Webhookイベント送信障害のお知らせ
  description: >-
    LIFF
    SDKのliff.sendMessages()メソッドを使ってメッセージをトークルームに送信した際に、対応するWebhookイベントがボットサーバーに送信されない障害が発生しておりましたが、すべて復旧いたしました。お客様には多大なご迷惑をお掛けし、誠に申し訳ございませんでした。
---

LIFF SDKの[`liff.sendMessages()`](/reference/liff/#send-messages)メソッドを使ってメッセージをトークルームに送信した際に、対応する[Webhookイベント](/reference/messaging-api/#message-event)がボットサーバーに送信されない障害が発生しておりましたが、すべて復旧いたしました。お客様には多大なご迷惑をお掛けし、誠に申し訳ございませんでした。

なお、本障害による影響はWebhookイベントの送信にのみ限定されます。`liff.sendMessages()`メソッドで送信したメッセージは、トークルームでは正しく表示されています。

### 発生日時

2021年1月13日 15:30頃 〜 22:19頃（UTC+9）

### 原因

サーバー障害

### 影響範囲

`liff.sendMessages()`メソッドでメッセージ送信した際のWebhookイベントの送信

### 状況

上記の時間帯において、Webhookイベントが送信されない障害が発生しました。現在、障害は復旧されており、Webhookイベントは正しく送信されます。

LINEは今後もお客様への一層のサービス向上に取組んでまいります。何卒ご理解を賜りますよう、よろしくお願い申し上げます。
