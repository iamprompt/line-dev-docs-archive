---
title: Create Coupon
navigation: true
description: ''
meta: '{}'
path: /en/_partials/messaging-api/create-coupon
__hash__: aZjS7pfF48m14uMzVvyURXOY0JymtZa4vogr7v7IySU
seo:
  description: ''
---

### Create a coupon

:api-endpoint{protocol="post" endpoint="https://api.line.me/v2/bot/coupon"}::reference-with-code
  :::reference-content
  Creates a coupon.

  Coupons aren't automatically sent to users just by creating them. You need to send the created coupon as a message. For more information, see [Steps to send coupons using the Messaging API](/docs/messaging-api/send-coupons-to-users/#send-coupons-using-messaging-api) in the Messaging API documentation.

  You can create up to 5,000 valid coupons.
  :::

  :::reference-code
  *Example request*

    ::::code-tabs
      :::::tab{lang="shell"}
      ```sh
      curl -v -X POST https://api.line.me/v2/bot/coupon \
      -H 'Authorization: Bearer {channel access token}' \
      -H 'Content-Type: application/json' \
      -d \
      '
      {
        "title": "Friends-only coupon",
        "description": "- To redeem your coupon, present this screen at checkout.\n- Redeemable once only, even if previously redeemed only unintentionally by the customer.\n- The validity period of this coupon may change or it may be canceled without notice.",
        "reward": {
          "type": "discount",
          "priceInfo": {
            "type": "fixed",
            "fixedAmount": 100
          }
        },
        "acquisitionCondition": {
          "type": "normal"
        },
        "startTimestamp": 0,
        "endTimestamp": 1924959599,
        "imageUrl": "https://developers.line.biz/media/messaging-api/coupon/sample-coupon-image-100-yen-off.jpg",
        "timezone": "ASIA_TOKYO",
        "visibility": "UNLISTED",
        "maxUseCountPerTicket": 1
      }'
      ```
      :::::
    ::::
  :::
::

#### Rate limit

200 requests per second

Creating coupons using :glossary-tooltip[[LINE Official Account Manager](/glossary/#line-oa-manager)]{glossary-id="line-oa-manager"} isn't subject to this restriction.

For more information on rate limits, see [Rate limits](#rate-limits).

#### Request headers

::parameter-table
  :::parameter-table-entry{required="true"}
  #undefined
  Authorization

  Bearer `{channel access token}`
  :::

  :::parameter-table-entry{required="true"}
  #undefined
  Content-Type

  application/json
  :::
::

#### Request body

::parameter-table
  :::parameter-table-entry{required="true"}
  #undefined
  title

  #undefined
  String

  Coupon title.  

  Max length: 60
  :::

  :::parameter-table-entry{optional=""}
  #undefined
  description

  #undefined
  String

  Coupon guidelines. Set usage instructions and precautions for the coupon. Line breaks can be specified with `\n`.  

  Max length: 1,000
  :::

  :::parameter-table-entry{required="true"}
  #undefined
  acquisitionCondition

  #undefined
  Object

  Object containing coupon acquisition conditions.
  :::

  :::parameter-table-entry{required="true"}
  #undefined
  acquisitionCondition.type

  #undefined
  String

  Coupon acquisition conditions type.  

  Specify one of the following values:

  - `normal`: No conditions. All users can acquire.
  - `lottery`: Lottery. Only users who win the lottery can acquire.

  Coupons with "friend referral" acquisition conditions can't be created using the Messaging API. They can only be created from LINE Official Account Manager.
  :::

  :::parameter-table-entry{optional=""}
  #undefined
  acquisitionCondition.lotteryProbability

  #undefined
  Number

  Specify the coupon winning probability (%) as an integer from 1 to 99.  

  For example, if you specify 50, the winning probability will be 50%.
  Required when `acquisitionCondition.type` is `lottery`.
  :::

  :::parameter-table-entry{optional=""}
  #undefined
  acquisitionCondition.maxAcquireCount

  #undefined
  Number

  The upper limit for the number of winners in a lottery. Specify an integer from 1 to 999999.  

  If there is no upper limit, specify `-1`.  

  Required when `acquisitionCondition.type` is `lottery`.
  :::

  :::parameter-table-entry{required="true"}
  #undefined
  maxUseCountPerTicket

  #undefined
  Number

  Number of times the coupon can be used.   

  Specify one of the following values:

  - `1`: Only once
  - `-1`: No limit
  :::

  :::parameter-table-entry{required="true"}
  #undefined
  startTimestamp

  #undefined
  Number

  Start date and time of the coupon validity period.  

  Specify in UNIX time (in seconds).
  :::

  :::parameter-table-entry{required="true"}
  #undefined
  endTimestamp

  #undefined
  Number

  End date and time of the coupon validity period.  

  Specify in UNIX time (in seconds).  

  You cannot specify a date and time before the current date and time or before the start date and time.
  :::

  :::parameter-table-entry{required="true"}
  #undefined
  timezone

  #undefined
  String

  The timezone is used as the basis for the validity period.  

  Specify one of the following values:

  - `ETC_GMT_MINUS_12`: (UTC-12:00) Etc/GMT-12
  - `ETC_GMT_MINUS_11`: (UTC-11:00) Etc/GMT-11
  - `PACIFIC_HONOLULU`: (UTC-10:00) Pacific/Honolulu
  - `AMERICA_ANCHORAGE`: (UTC-09:00) America/Anchorage
  - `AMERICA_LOS_ANGELES`: (UTC-08:00) America/Los_Angeles, Santa_Isabel
  - `AMERICA_PHOENIX`: (UTC-07:00) America/Phoenix, Denver
  - `AMERICA_CHICAGO`: (UTC-06:00) America/Chicago, Guatemala
  - `AMERICA_NEW_YORK`: (UTC-05:00) America/New_York, Indiana/Indianapolis
  - `AMERICA_CARACAS`: (UTC-04:30) America/Caracas
  - `AMERICA_SANTIAGO`: (UTC-04:00) America/Santiago, Cuiaba
  - `AMERICA_ST_JOHNS`: (UTC-03:30) America/St_Johns
  - `AMERICA_SAO_PAULO`: (UTC-03:00) America/Sao_Paulo, Argentina/Buenos_Aires
  - `ETC_GMT_MINUS_2`: (UTC-02:00) Etc/GMT-2
  - `ATLANTIC_CAPE_VERDE`: (UTC-01:00) Atlantic/Cape_Verde, Azores
  - `EUROPE_LONDON`: (UTC+00:00) Europe/London, Etc/GMT
  - `EUROPE_PARIS`: (UTC+01:00) Europe/Paris, Berlin
  - `EUROPE_ISTANBUL`: (UTC+02:00) Europe/Istanbul, Kiev
  - `EUROPE_MOSCOW`: (UTC+03:00) Europe/Moscow, Minsk
  - `ASIA_TEHRAN`: (UTC+03:30) Asia/Tehran
  - `ASIA_TBILISI`: (UTC+04:00) Asia/Tbilisi, Yerevan
  - `ASIA_KABUL`: (UTC+04:30) Asia/Kabul
  - `ASIA_TASHKENT`: (UTC+05:00) Asia/Tashkent, Karachi
  - `ASIA_COLOMBO`: (UTC+05:30) Asia/Colombo, Kolkata
  - `ASIA_KATHMANDU`: (UTC+05:45) Asia/Kathmandu
  - `ASIA_ALMATY`: (UTC+06:00) Asia/Almaty, Dhaka
  - `ASIA_RANGOON`: (UTC+06:30) Asia/Rangoon
  - `ASIA_BANGKOK`: (UTC+07:00) Asia/Bangkok, Jakarta
  - `ASIA_TAIPEI`: (UTC+08:00) Asia/Taipei, Singapore
  - `ASIA_TOKYO`: (UTC+09:00) Asia/Tokyo, Seoul
  - `AUSTRALIA_DARWIN`: (UTC+09:30) Australia/Darwin, Adelaide
  - `AUSTRALIA_SYDNEY`: (UTC+10:00) Australia/Sydney, Brisbane
  - `ASIA_VLADIVOSTOK`: (UTC+11:00) Asia/Vladivostok, Pacific/Guadalcanal
  - `ETC_GMT_PLUS_12`: (UTC+12:00) Etc/GMT+12
  - `PACIFIC_TONGATAPU`: (UTC+13:00) Pacific/Tongatapu, Apia
  :::

  :::parameter-table-entry{required="true"}
  #undefined
  reward

  #undefined
  Object

  [Reward object](#create-coupon-reward-object) containing coupon type information.
  :::

  :::parameter-table-entry{required="true"}
  #undefined
  visibility

  #undefined
  String

  Display coupon in LY Corporation services.  

  One of these values:

  - `PUBLIC`: Display.
  - `UNLISTED`: Do not display.

  For more information, see [Display coupon in LY Corporation services](https://www.lycbiz.com/jp/manual/OfficialAccountManager/coupons-service/){rel="[\"nofollow\"]"} (only available in Japanese) in LINE for Business.
  :::

  :::parameter-table-entry{optional=""}
  #undefined
  imageUrl

  #undefined
  String

  URL of the coupon image.  

  Max character limit: 2000  

  Protocol: HTTPS (TLS 1.2 or later)  

  Image format: JPEG or PNG  

  Max file size: 10MB (1MB or less recommended)

  The URL should be percent-encoded using UTF-8. For more information, see [About the encoding of a URL specified in a request body property](#url-encoding).

    ::::admonition
    ---
    title: Changing the image at the URL later won't update the coupon image
    type: note
    ---
    The image at the URL is retrieved and stored on the LINE Platform when the coupon is created. Changing the image at the URL later won't update the coupon image.
    ::::
  :::

  :::parameter-table-entry{optional=""}
  #undefined
  couponCode

  #undefined
  String

  Coupon code displayed after opening the coupon.  

  Max length: 16
  :::

  :::parameter-table-entry{optional=""}
  #undefined
  barcodeImageUrl

  #undefined
  String

  URL of the barcode image displayed after opening the coupon.  

  Max character limit: 2000  

  Protocol: HTTPS (TLS 1.2 or later)  

  Image format: JPEG or PNG  

  Max file size: 10MB

  The URL should be percent-encoded using UTF-8. For more information, see [About the encoding of a URL specified in a request body property](#url-encoding).

    ::::admonition
    ---
    title: Changing the image at the URL later won't update the coupon image
    type: note
    ---
    The image at the URL is retrieved and stored on the LINE Platform when the coupon is created. Changing the image at the URL later won't update the coupon image.
    ::::
  :::

  :::parameter-table-entry{optional=""}
  #undefined
  usageCondition

  #undefined
  String

  Coupon usage conditions.  

  Max length: 100
  :::
::

##### Reward object

::reference-with-code
  :::reference-content
    ::::parameter-table
      :::::parameter-table-entry{required="true"}
      #undefined
      type

      #undefined
      String

      Coupon type.  

      Specify one of the following values:

      - `discount`: Discount
      - `free`: Free
      - `gift`: Gift
      - `cashBack`: Cashback
      - `others`: Others
      :::::

      :::::parameter-table-entry{optional=""}
      #undefined
      priceInfo

      #undefined
      Object

      Object containing discount or cashback details.  

      Required when `type` is `discount` and `cashBack`.
      :::::

      :::::parameter-table-entry{required="true"}
      #undefined
      priceInfo.type

      #undefined
      String

      Type of coupon discount details.

      When `type` is `discount`, you can specify one of the following values:

      - `fixed`: Display discount amount
      - `percentage`: Display discount percentage
      - `explicit`: Cross out original price and display discounted price

      When `type` is `cashBack`, you can specify one of the following values:

      - `fixed`: Display cashback amount
      - `percentage`: Display cashback percentage
      :::::

      :::::parameter-table-entry{optional=""}
      #undefined
      priceInfo.fixedAmount

      #undefined
      Number

      Specify the discount amount as a positive integer.  

      Required when `priceInfo.type` is `fixed`.  

      The currency unit is automatically set according to the country or region of the LINE Official Account.

      - Taiwan: TWD (Taiwan Dollar)
      - Thailand: THB (Thai Baht)
      - All other countries and regions: JPY (Japanese Yen)
      :::::

      :::::parameter-table-entry{optional=""}
      #undefined
      priceInfo.percentage

      #undefined
      Number

      Specify the discount rate (%) as an integer from 1 to 99.  

      For example, if you specify 50, the discount rate will be 50%.  

      Required when `priceInfo.type` is `percentage`.
      :::::

      :::::parameter-table-entry{optional=""}
      #undefined
      priceInfo.originalPrice

      #undefined
      Number

      Specify the price before discount as a positive integer.  

      Required when `priceInfo.type` is `explicit`.  

      The currency unit is automatically set according to the country or region of the LINE Official Account.

      - Taiwan: TWD (Taiwan Dollar)
      - Thailand: THB (Thai Baht)
      - All other countries and regions: JPY (Japanese Yen)
      :::::

      :::::parameter-table-entry{optional=""}
      #undefined
      priceInfo.priceAfterDiscount

      #undefined
      Number

      Specify the price after discount as a positive integer.  

      Required when `priceInfo.type` is `explicit`.  

      The currency unit is automatically set according to the country or region of the LINE Official Account.

      - Taiwan: TWD (Taiwan Dollar)
      - Thailand: THB (Thai Baht)
      - All other countries and regions: JPY (Japanese Yen)
      :::::
    ::::
  :::

  :::reference-code
  *Reward object examples*

    ::::code-tabs
      :::::tab{lang="json"}
      ```json
      // 1,500 yen discount
      {
        "type": "discount",
        "priceInfo": {
          "type": "fixed",
          "fixedAmount": 1500
        }
      }

      // 25% discount
      {
        "type": "discount",
        "priceInfo": {
          "type": "percentage",
          "percentage": 25
        }
      }

      // Cross out the original price of 12,000 yen and display the discounted price of 9,500 yen
      {
        "type": "discount",
        "priceInfo": {
          "type": "explicit",
          "originalPrice": 12000,
          "priceAfterDiscount": 9500
        }
      }

      // Free
      {
        "type": "free"
      }

      // Gift
      {
        "type": "gift"
      }

      // 100 yen cashback
      {
        "type": "cashBack",
        "priceInfo": {
          "type": "fixed",
          "fixedAmount": 100
        }
      }

      // 30% cashback
      {
        "type": "cashBack",
        "priceInfo": {
          "type": "percentage",
          "percentage": 30
        }
      }

      // Others
      {
        "type": "others"
      }
      ```
      :::::
    ::::
  :::
::

#### Response

::reference-with-code
  :::reference-content
  Returns status code `200` and a JSON object with the following property.

    ::::parameter-table
      :::::parameter-table-entry
      #undefined
      couponId

      #undefined
      String

      The coupon ID. Use this when sending a coupon message, etc.
      :::::
    ::::
  :::

  :::reference-code
  *Example response*

    ::::code-tabs
      :::::tab{lang="json"}
      ```json
      {
        "couponId": "01JYNW8JMQVFBNWF1APF8Z3FS7"
      }
      ```
      :::::
    ::::
  :::
::

#### Error response

::reference-with-code
  :::reference-content
  Returns the following HTTP status code and an error response:

  | Code  | Description                                                                                                                                                                                                                                          |
  | ----- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
  | `400` | Couldn't create a coupon. Consider these reasons:- An invalid coupon type is specified. - The maximum number of valid coupons (maximum 5,000) has been reached. - A property that does not match `priceInfo.type` is specified in the reward object. |

  For more information, see [Status codes](#status-codes) and [Error responses](#error-responses) in the [Common specifications](#common-specifications) section.
  :::

  :::reference-code
  *Example error response*

    ::::code-tabs
      :::::tab{lang="json"}
      ```json
      // When the coupon title exceeds 60 characters
      {
        "message": "The request body has 1 error(s)",
        "details": [
          {
            "message": "Size must be between 1 and 60",
            "property": "title"
          }
        ]
      }

      // When an invalid coupon type is specified
      {
        "message": "The request body has 1 error(s)",
        "details": [
          {
            "message": "Must be one of the following values: [discount,free,gift,cashBack,others]",
            "property": "reward.type"
          }
        ]
      }

      // When the number of valid coupons exceeds the limit
      {
        "message": "The request body has 1 error(s)",
        "details": [
          {
            "message": "You have too many coupons created.",
            "property": ""
          }
        ]
      }

      // When priceInfo.type is percentage in the reward object, but fixedAmount is specified
      {
        "message": "The request body has 1 error(s)",
        "details": [
          {
            "message": "Must not be specified",
            "property": "reward.priceInfo.fixedAmount"
          }
        ]
      }
      ```
      :::::
    ::::
  :::
::
