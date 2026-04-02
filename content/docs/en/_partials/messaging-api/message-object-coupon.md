---
title: Message Object Coupon
navigation: true
description: ''
meta: '{}'
path: /en/_partials/messaging-api/message-object-coupon
__hash__: rTbGtX0GSikVYLMT9nzklDQDxmPB2BAAo3avU204qnM
seo:
  description: ''
---

### Coupon message

::reference-with-code
  :::reference-content
  Coupon messages are messages that send coupons to users by specifying a coupon ID.

    ::::parameter-table
      :::::parameter-table-entry{required="true"}
      #undefined
      type

      #undefined
      String

      `coupon`
      :::::

      :::::parameter-table-entry{required="true"}
      #undefined
      couponId

      #undefined
      String

      Coupon ID.  

      You can obtain the coupon ID (`couponId`) in the [response](#create-coupon-response) when you [create a coupon](#create-coupon). You can also check coupon ID in the endpoint to [get a list of coupons](#get-coupons-list).
      :::::

      :::::parameter-table-entry{optional=""}
      #undefined
      deliveryTag

      #undefined
      String

      Name of the coupon display path.  

      Max character limit: 30  

      Supported character types: Half-width alphanumeric characters (`a-z`, `A-Z`, `0-9`) and underscore (`_`)

      If you don't specify `deliveryTag`, the path will be displayed as `Unknown`. For more information, see [Insight - Coupons](https://www.lycbiz.com/jp/manual/OfficialAccountManager/insight_coupon/){rel="[\"nofollow\"]"} (only available in Japanese) in LINE for Business.
      :::::
    ::::
  :::

  :::reference-code
  *Coupon message example*

    ::::code-tabs
      :::::tab{lang="json"}
      ```json
      {
        "type": "coupon",
        "couponId": "01JYNW8JMQVFBNWF1APF8Z3FS7",
        "deliveryTag": "2025_winter_campaign"
      }
      ```
      :::::
    ::::
  :::
::
