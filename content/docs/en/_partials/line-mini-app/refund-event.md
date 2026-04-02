---
title: Refund Event
navigation: true
description: ''
meta: '{}'
path: /en/_partials/line-mini-app/refund-event
__hash__: 0p0F9KPuc0fXrvOCgDX-gnHqNJnWmtab38MilOQJMns
seo:
  description: ''
---

### Refund event

This event occurs when a refund was issued for an item purchased by a user at an app store (App Store, Google Play). The event contains information about the item refunded.

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
      `refundComplete` is specified.
      :::::

      :::::parameter-table-entry
      #undefined
      orderId

      #undefined
      String

      The ID of the order that was refunded by the user. Included in the response of the [Reserve purchase](#reserve-purchase) endpoint.
      :::::

      :::::parameter-table-entry
      #undefined
      productId

      #undefined
      String

      The product ID ([`productId`](/docs/line-mini-app/in-app-purchase/iap-product-id/)) of the item that was refunded by the user.
      :::::

      :::::parameter-table-entry
      #undefined
      userId

      #undefined
      String

      The user ID of the user who requested the refund.
      :::::

      :::::parameter-table-entry
      #undefined
      purchaseTimestamp

      #undefined
      number

      The time when the refunded item was purchased. The unit is UNIX time (in seconds).

      Matches the `purchaseTimestamp` of the [purchase complete event](#purchase-complete-event). This time is not when the user actually completed the refund.
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
