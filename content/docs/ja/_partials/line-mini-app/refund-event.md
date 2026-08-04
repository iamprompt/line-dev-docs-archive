---
title: Refund Event
navigation: true
description: ''
meta: '{}'
path: /ja/_partials/line-mini-app/refund-event
__hash__: skoiZpBZ4BQPmhpoa3eBdozvi0nL1wN9dLQfvzcF7Uc
seo:
  description: ''
---

### 返金イベント

このイベントは、ユーザーがアプリストア（App Store、Google Play）で購入したアイテムに対して返金が行われた場合に発生します。イベントには返金対象となったアイテムの情報が含まれます。

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
      `refundComplete`が指定されます。
      :::::

      :::::parameter-table-entry
      #undefined
      orderId

      #undefined
      String

      ユーザーが購入後にキャンセルした注文のID。「[購入処理を予約する](#reserve-purchase)」エンドポイントのレスポンスに含まれます。
      :::::

      :::::parameter-table-entry
      #undefined
      productId

      #undefined
      String

      ユーザーが購入後にキャンセルしたアイテムのプロダクトID（[`productId`](/docs/line-mini-app/in-app-purchase/iap-product-id/)）。
      :::::

      :::::parameter-table-entry
      #undefined
      userId

      #undefined
      String

      購入後にキャンセルを行ったユーザーのユーザーID。
      :::::

      :::::parameter-table-entry
      #undefined
      purchaseTimestamp

      #undefined
      number

      キャンセルされたアイテムが購入された際の時間。単位はUNIX時間（秒）です。

      [購入完了イベント](#purchase-complete-event)の`purchaseTimestamp`と一致します。この時間はユーザーが実際に返金を完了した時間ではありません。
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
        "type": "refundComplete",
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
