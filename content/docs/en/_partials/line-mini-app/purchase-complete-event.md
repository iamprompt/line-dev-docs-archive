---
title: Purchase Complete Event
navigation: true
description: ''
meta: '{}'
path: /en/_partials/line-mini-app/purchase-complete-event
__hash__: zEnZ35WtDxBJB6JqLvsmgvs83WGXLDHHovBEFUlSe5U
seo:
  description: ''
---

### Purchase complete event

This event occurs when a user purchases a reserved item at an app store (App Store, Google Play) and the payment is settled by LY Corporation. The webhook payload contains information about the purchased item.

#### Webhook payload

::reference-with-code
  :::reference-content
    ::::parameter-table
      :::::parameter-table-entry
      #undefined
      type

      #undefined
      String

      The type of webhook event.   
      `purchaseComplete` is specified.
      :::::

      :::::parameter-table-entry
      #undefined
      orderId

      #undefined
      String

      The ID of the order purchased by the user. Included in the response of the "[Reserve purchase](#reserve-purchase)" endpoint.
      :::::

      :::::parameter-table-entry
      #undefined
      productId

      #undefined
      String

      The product ID ([`productId`](/docs/line-mini-app/in-app-purchase/iap-product-id/)) of the item purchased by the user.
      :::::

      :::::parameter-table-entry
      #undefined
      userId

      #undefined
      String

      The user ID of the user who made the purchase.
      :::::

      :::::parameter-table-entry
      #undefined
      purchaseTimestamp

      #undefined
      number

      The time when the payment was completed on the LINE Platform. The unit is UNIX time (in seconds).

      This time is not the time when the user actually completed the payment.
      :::::

      :::::parameter-table-entry
      #undefined
      channelId

      #undefined
      String

      The channel ID of the LINE MINI App channel.
      :::::
    ::::
  :::

  :::reference-code
  *Example*

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
