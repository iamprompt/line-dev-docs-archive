---
title: Get Coupon
navigation: true
description: ''
meta: '{}'
path: /en/_partials/messaging-api/get-coupon
__hash__: vxfWxGaJpPqNnLHBQNRsYnhfPTnP_bXgJAkJ0tfJ8YQ
seo:
  description: ''
---

### Get details of a coupon

:api-endpoint{protocol="get" endpoint="https://api.line.me/v2/bot/coupon/{couponId}"}::reference-with-code
  :::reference-content
  Retrieves the specified coupon details.
  :::

  :::reference-code
  *Example request*

    ::::code-tabs
      :::::tab{lang="shell"}
      ```sh
      curl -v -X GET https://api.line.me/v2/bot/coupon/01JYNW8JMQVFBNWF1APF8Z3FS7 \
      -H 'Authorization: Bearer {channel access token}'
      ```
      :::::
    ::::
  :::
::

#### Rate limit

200 requests per second

Checking coupon details using :glossary-tooltip[[LINE Official Account Manager](/glossary/#line-oa-manager)]{glossary-id="line-oa-manager"} isn't subject to this restriction.

For more information on rate limits, see [Rate limits](#rate-limits).

#### Request headers

::parameter-table
  :::parameter-table-entry{required="true"}
  #undefined
  Authorization

  Bearer `{channel access token}`
  :::
::

#### Path parameters

::parameter-table
  :::parameter-table-entry{required="true"}
  #undefined
  couponId

  #undefined
  String

  The ID of the coupon to retrieve details.
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

      The coupon ID of the coupon.
      :::::

      :::::parameter-table-entry
      #undefined
      title

      #undefined
      String

      Coupon title.
      :::::

      :::::parameter-table-entry{annotation="Not always included"}
      #undefined
      description

      #undefined
      String

      Coupon usage guide.
      :::::

      :::::parameter-table-entry
      #undefined
      acquisitionCondition

      #undefined
      Object

      Object containing coupon acquisition conditions.
      :::::

      :::::parameter-table-entry
      #undefined
      acquisitionCondition.type

      #undefined
      String

      Coupon acquisition conditions type.  

      One of these values:

      - `normal`: No conditions. All users can acquire.
      - `lottery`: Lottery. Only users who win the lottery can acquire.
      - `referral`: Friend referral. Both the user who referred the coupon and the user who receives the referral can acquire.
      :::::

      :::::parameter-table-entry{annotation="Not always included"}
      #undefined
      acquisitionCondition.lotteryProbability

      #undefined
      Number

      The coupon winning probability (%) as an integer from 1 to 99.  

      Included when `acquisitionCondition.type` is `lottery`.
      :::::

      :::::parameter-table-entry{annotation="Not always included"}
      #undefined
      acquisitionCondition.maxAcquireCount

      #undefined
      Number

      The upper limit for the number of winners as an integer from 1 to 999999.  

      If there is no upper limit, the value is `-1`.  

      Included when `acquisitionCondition.type` is `lottery`.
      :::::

      :::::parameter-table-entry
      #undefined
      maxUseCountPerTicket

      #undefined
      Number

      Number of times the coupon can be used.   

      One of these values:

      - `1`: Only once
      - `-1`: No limit
      :::::

      :::::parameter-table-entry
      #undefined
      maxTicketPerUser

      #undefined
      Number

      Number of coupons each user can acquire.  

      If `acquisitionCondition.type` is `referral`, then the number is an integer from 1 to 30. Otherwise, the value is `1`.
      :::::

      :::::parameter-table-entry
      #undefined
      startTimestamp

      #undefined
      Number

      Start date and time of the coupon validity period in UNIX time (in seconds).
      :::::

      :::::parameter-table-entry
      #undefined
      endTimestamp

      #undefined
      Number

      End date and time of the coupon validity period in UNIX time (in seconds).
      :::::

      :::::parameter-table-entry
      #undefined
      timezone

      #undefined
      String

      The timezone is used as the basis for the validity period.  

      One of these values:

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
      :::::

      :::::parameter-table-entry
      #undefined
      reward

      #undefined
      Object

      [Reward object](#get-coupon-reward-object) containing coupon type information.
      :::::

      :::::parameter-table-entry
      #undefined
      visibility

      #undefined
      String

      Display coupon in LY Corporation services.  

      One of these values:

      - `PUBLIC`: Display.
      - `UNLISTED`: Do not display.

      For more information, see [Display coupon in LY Corporation services](https://www.lycbiz.com/jp/manual/OfficialAccountManager/coupons-service/){rel="[\"nofollow\"]"} (only available in Japanese) in LINE for Business.
      :::::

      :::::parameter-table-entry{annotation="Not always included"}
      #undefined
      imageUrl

      #undefined
      String

      URL of the coupon image.
      :::::

      :::::parameter-table-entry{annotation="Not always included"}
      #undefined
      couponCode

      #undefined
      String

      Coupon code displayed after opening the coupon.
      :::::

      :::::parameter-table-entry{annotation="Not always included"}
      #undefined
      barcodeImageUrl

      #undefined
      String

      URL of the barcode image displayed after opening the coupon.
      :::::

      :::::parameter-table-entry{annotation="Not always included"}
      #undefined
      usageCondition

      #undefined
      String

      Coupon usage conditions.
      :::::

      :::::parameter-table-entry
      #undefined
      status

      The status of the coupon.

      - `DRAFT`: Draft saved coupon.
      - `RUNNING`: Upcoming or valid coupon.
      - `CLOSED`: Expired or discontinued coupon.
      :::::

      :::::parameter-table-entry
      #undefined
      createdTimestamp

      #undefined
      Number

      Creation date and time of the coupon in UNIX time (in seconds).
      :::::
    ::::
  :::

  :::reference-code
  *Example response*

    ::::code-tabs
      :::::tab{lang="json"}
      ```json
      {
        "couponId": "01K0B456W5Y6SBD3YH74YM6QE6",
        "title": "Friends-only coupon",
        "description": "- To redeem your coupon, present this screen at checkout.\n- Redeemable once only, even if previously redeemed only unintentionally by the customer.\n- The validity period of this coupon may change or it may be canceled without notice.",
        "acquisitionCondition": {
          "type": "lottery",
          "lotteryProbability": 50,
          "maxAcquireCount": -1
        },
        "startTimestamp": 1752678000,
        "endTimestamp": 1924959540,
        "timezone": "ASIA_TOKYO",
        "couponCode": "COUPONCODE123456",
        "maxUseCountPerTicket": 1,
        "maxTicketPerUser": 1,
        "visibility": "UNLISTED",
        "reward": {
          "type": "discount",
          "priceInfo": {
            "type": "fixed",
            "fixedAmount": 100,
            "currency": "JPY"
          }
        },
        "imageUrl": "https://oa-coupon.line-scdn-dev.net/0h9gbUqRVkZkhfLHhXMLYZHwdyaCosWGBAPFR7cD5tZidsTnofYDVfezt-ZAR3YER9OzRfK35XZwR6TH5uYDF2TnJ-cBNyfURpPRl2RSFSXQc0TiJhYCFiXiZ8XXk0",
        "usageCondition": "Usable for payments of 1,000 yen or more",
        "status": "RUNNING",
        "createdTimestamp": 1752720120
      }
      ```
      :::::
    ::::
  :::
::

##### Reward object

::reference-with-code
  :::reference-content
    ::::parameter-table
      :::::parameter-table-entry
      #undefined
      type

      #undefined
      String

      Coupon type.  

      One of the following values:

      - `discount`: Discount
      - `free`: Free
      - `gift`: Gift
      - `cashBack`: Cashback
      - `others`: Others
      :::::

      :::::parameter-table-entry{annotation="Not always included"}
      #undefined
      priceInfo

      #undefined
      Object

      Object containing discount or cashback details.  

      Included when `type` is `discount` and `cashBack`.
      :::::

      :::::parameter-table-entry
      #undefined
      priceInfo.type

      #undefined
      String

      Type of coupon discount details.

      When `type` is `discount`, one of the following values:

      - `fixed`: Display discount amount
      - `percentage`: Display discount percentage
      - `explicit`: Cross out original price and display discounted price

      When `type` is `cashBack`, one of the following values:

      - `fixed`: Display cashback amount
      - `percentage`: Display cashback percentage
      :::::

      :::::parameter-table-entry{annotation="Not always included"}
      #undefined
      priceInfo.fixedAmount

      #undefined
      Number

      The discount amount.  

      Included when `priceInfo.type` is `fixed`.
      :::::

      :::::parameter-table-entry{annotation="Not always included"}
      #undefined
      priceInfo.percentage

      #undefined
      Number

      The discount rate (%).  

      Included when `priceInfo.type` is `percentage`.
      :::::

      :::::parameter-table-entry{annotation="Not always included"}
      #undefined
      priceInfo.originalPrice

      #undefined
      Number

      The price before discount.  

      Included when `priceInfo.type` is `explicit`.
      :::::

      :::::parameter-table-entry{annotation="Not always included"}
      #undefined
      priceInfo.priceAfterDiscount

      #undefined
      Number

      The price after discount.  

      Included when `priceInfo.type` is `explicit`.
      :::::

      :::::parameter-table-entry{annotation="Not always included"}
      #undefined
      priceInfo.currency

      #undefined
      Number

      The currency unit. Automatically set according to the country or region of the LINE Official Account.  

      Included when `priceInfo.type` is `fixed` or `explicit`.

      - `TWD`: Taiwan Dollar (Taiwan)
      - `THB`: Thai Baht (Thailand)
      - `JPY`: Japanese Yen (All other countries and regions)
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
          "fixedAmount": 1500,
          "currency": "JPY"
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
          "priceAfterDiscount": 9500,
          "currency": "JPY"
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
          "fixedAmount": 100,
          "currency": "JPY"
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

#### Error response

::reference-with-code
  :::reference-content
  Returns the following HTTP status code and an error response:

  | Code  | Description                                                                                                     |
  | ----- | --------------------------------------------------------------------------------------------------------------- |
  | `404` | The specified coupon does not exist. Consider these reasons:- A coupon created in another channel is specified. |

  For more information, see [Status codes](#status-codes) and [Error responses](#error-responses) in the [Common specifications](#common-specifications) section.
  :::

  :::reference-code
  *Example error response*

    ::::code-tabs
      :::::tab{lang="json"}
      ```json
      // If you specify a non-existent coupon ID (404 Not Found)
      {
        "message": "The request body has 1 error(s)",
        "details": [
          {
            "message": "coupon not found",
            "property": ""
          }
        ]
      }
      ```
      :::::
    ::::
  :::
::
