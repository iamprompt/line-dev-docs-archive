---
title: Purchase Complete Event
navigation: true
description: ''
meta: '{}'
path: /en/_partials/line-mini-app/purchase-complete-event
__hash__: X0xT7p9cnEtvxEgZsdTHaDXg4wfMCriuNEa5eZxZESs
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

      :::::parameter-table-entry{annotation="Not always included"}
      #undefined
      paymentBenefitProgram

      #undefined
      String

      Indicates the fee reduction program applied to the payment. If the fee was reduced through the [Mini Apps Partner Program](/docs/line-mini-app/in-app-purchase/apple-mini-apps-partner-program/) offered by Apple Inc., `APPLE_MINI_APPS_PARTNER_PROGRAM` is returned.  

      If no fee reduction was applied, this property isn't included.
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
        "channelId": "12345...",
        "paymentBenefitProgram": "APPLE_MINI_APPS_PARTNER_PROGRAM"
      }
      ```
      :::::
    ::::
  :::
::
