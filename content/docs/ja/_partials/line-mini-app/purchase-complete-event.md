---
title: Purchase Complete Event
navigation: true
description: ''
meta: '{}'
path: /ja/_partials/line-mini-app/purchase-complete-event
__hash__: JMXgjHCkydg6ljHDrFBe3_cKA7AfdgYcL8hcvOeOY-E
seo:
  description: ''
---

### 購入完了イベント

このイベントは、ユーザーがアプリストア（App Store、Google Play）で予約アイテムを購入し、弊社が精算したときに発生します。Webhookのペイロードには購入されたアイテムの情報が含まれます。

#### Webhookペイロード

::reference-with-code
  :::reference-content
    ::::parameter-table
      :::::parameter-table-entry
      #undefined
      type

      #undefined
      String

      Webhookイベントのタイプ。  
      `purchaseComplete`が指定されます。
      :::::

      :::::parameter-table-entry
      #undefined
      orderId

      #undefined
      String

      ユーザーが購入した注文のID。「[購入処理を予約する](#reserve-purchase)」エンドポイントのレスポンスに含まれます。
      :::::

      :::::parameter-table-entry
      #undefined
      productId

      #undefined
      String

      ユーザーが購入したアイテムのプロダクトID（[`productId`](/docs/line-mini-app/in-app-purchase/iap-product-id/)）。
      :::::

      :::::parameter-table-entry
      #undefined
      userId

      #undefined
      String

      購入を行ったユーザーのユーザーID。
      :::::

      :::::parameter-table-entry
      #undefined
      purchaseTimestamp

      #undefined
      number

      LINEプラットフォームで決済を完了した時間。単位はUNIX時間（秒）です。

      この時間は購入を行ったユーザーが実際に支払いを完了した時間ではありません。
      :::::

      :::::parameter-table-entry
      #undefined
      channelId

      #undefined
      String

      LINEミニアプリチャネルのチャネルID。
      :::::
    ::::
  :::

  :::reference-code
  *例*

    ::::code-tabs
      :::::tab{lang="json"}
      ```json
      {
        "type": "purchaseComplete",
        "orderId": "T2025020710000002126002",
        "productId": "iap_ln_002",
        "userId": "U91FC5A...",
        "purchaseTimestamp": 1738672496,
        "channelId": "12345..."
      }
      ```
      :::::
    ::::
  :::
::
