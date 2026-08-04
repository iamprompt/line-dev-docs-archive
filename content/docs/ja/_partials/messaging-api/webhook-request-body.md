---
title: Webhook Request Body
navigation: true
description: ''
meta: '{}'
path: /ja/_partials/messaging-api/webhook-request-body
__hash__: KhU41NXAk5vxWBcXM9_lVbcvSRZ3u1SBT_xBzoJH9Ts
seo:
  description: ''
---

### リクエストボディ

リクエストボディは、Webhookイベントを受信すべきボットのユーザーIDと[Webhookイベントオブジェクト](#webhook-event-objects)の配列を含むJSONオブジェクトです。

::parameter-table
  :::parameter-table-entry
  #undefined
  destination

  #undefined
  String

  Webhookイベントを受信すべきボットのユーザーID。ユーザーIDの値は、`U[0-9a-f]{32}`の正規表現にマッチする文字列です。
  :::

  :::parameter-table-entry
  #undefined
  events

  #undefined
  Array

  [Webhookイベントオブジェクト](#webhook-event-objects)の配列。LINEプラットフォームからの疎通確認のために、Webhookイベントオブジェクトを含まない空配列が送信される場合があります。
  :::
::
