---
title: Get Coupons List
navigation: true
description: ''
meta: '{}'
path: /en/_partials/messaging-api/get-coupons-list
__hash__: YkDNWcjKA_QiWSUkQG09EDvQ5rq7CZsCum5mLYYLvwE
seo:
  description: ''
---

### Get a list of coupons

:api-endpoint{protocol="get" endpoint="https://api.line.me/v2/bot/coupon"}::reference-with-code
  :::reference-content
  Get a list of coupons, including the coupon ID and coupon title. You can also get only valid coupons or only discontinued coupons.

  This coupon list includes coupons created using both the Messaging API and [LINE Official Account Manager](https://manager.line.biz/){rel="[\"nofollow\"]"}. You can view the same list in LINE Official Account Manager.
  :::

  :::reference-code
  *Example request*

    ::::code-tabs
      :::::tab{lang="shell"}
      ```sh
      curl -v -X GET https://api.line.me/v2/bot/coupon \
      -H 'Authorization: Bearer {channel access token}'
      -d 'limit=100' \
      -d 'status=DRAFT,RUNNING' \
      -G
      ```
      :::::
    ::::
  :::
::

#### Rate limit

200 requests per second

Checking the list of coupons using :glossary-tooltip[[LINE Official Account Manager](/glossary/#line-oa-manager)]{glossary-id="line-oa-manager"} isn't subject to this restriction.

For more information on rate limits, see [Rate limits](#rate-limits).

#### Request headers

::parameter-table
  :::parameter-table-entry{required="true"}
  #undefined
  Authorization

  Bearer `{channel access token}`
  :::
::

#### Query parameters

::parameter-table
  :::parameter-table-entry{optional=""}
  #undefined
  limit

  #undefined
  Number

  The maximum number of coupons to retrieve in a single request. The default value is `20`.  

  Max value: `100`
  :::

  :::parameter-table-entry{optional=""}
  #undefined
  start

  #undefined
  String

  Value of the continuation token found in the `next` property of the JSON object returned in the [response](#get-coupons-list-response). Include this parameter to get the remaining coupons if you can't get all the coupons in a single request.
  :::

  :::parameter-table-entry{optional=""}
  #undefined
  status

  The status of the coupon(s) to return. If omitted, coupons with all statuses will be included.

  - `DRAFT`: Draft saved coupon.
  - `RUNNING`: Upcoming or valid coupon.
  - `CLOSED`: Expired or discontinued coupon.

  If you specify multiple parameters, the OR condition is used.
  :::
::

#### Response

::reference-with-code
  :::reference-content
  Returns status code `200` and a JSON object with the following properties.

    ::::parameter-table
      :::::parameter-table-entry
      #undefined
      items

      #undefined
      Array of objects

      An array of objects representing the coupons.  

      Max: The number specified by `limit`
      :::::

      :::::parameter-table-entry
      #undefined
      items[].couponId

      #undefined
      String

      The coupon ID.
      :::::

      :::::parameter-table-entry
      #undefined
      items[].title

      #undefined
      String

      Coupon title.
      :::::

      :::::parameter-table-entry{annotation="Not always included"}
      #undefined
      next

      #undefined
      String

      A continuation token to get the next coupons. This property is returned only when there are coupons that couldn't be retrieved in the `items` property of the response.

      The continuation token is valid for 24 hours (86,400 seconds).
      :::::
    ::::
  :::

  :::reference-code
  *Example response*

    ::::code-tabs
      :::::tab{lang="json"}
      ```json
      // When all coupons are retrieved
      {
        "items": [
          {
            "couponId": "01JZMWQ9HMDW9ENJP4C167CXP8",
            "title": "Year-end and New Year coupon"
          },
          {
            "couponId": "01JZA9NPPFDJ3RFG8NA9DJ0NQT",
            "title": "Friends-only coupon"
          }
        ]
      }

      // When there are still coupons that couldn't be retrieved
      {
        "next": "MTAwMDU3MjAxOjE3NTI1Njk5NDU2MjE6WXBPRHo1N3VjL3hPMkcxVEZPVGY1eW9YS3BqL2R2TGVEdit2V3J0ckczVT0=",
        "items": [
          {
            "couponId": "01JZMWQ9HMDW9ENJP4C167CXP8",
            "title": "Year-end and New Year coupon"
          },
          {
            "couponId": "01JZA9NPPFDJ3RFG8NA9DJ0NQT",
            "title": "Friends-only coupon"
          }
        ]
      }

      // When no matching coupons are found
      {
        "items": []
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

  | Code  | Description                                                                                                                                            |
  | ----- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
  | `400` | Could not get the list of coupons. Possible reasons include:- An invalid status is specified. - The maximum number of coupons to retrieve exceeds 100. |

  For more information, see [Status codes](#status-codes) and [Error responses](#error-responses) in the [Common specifications](#common-specifications) section.
  :::

  :::reference-code
  *Example error response*

    ::::code-tabs
      :::::tab{lang="json"}
      ```json
      // When an invalid status is specified (400 Bad Request)
      {
        "message": "The request body has 1 error(s)",
        "details": [
          {
            "message": "Must be one of the following values: [DRAFT,RUNNING,CLOSED]",
            "property": "status"
          }
        ]
      }

      // When the maximum number of coupons to retrieve exceeds 100
      {
        "message": "The request body has 1 error(s)",
        "details": [
          {
            "message": "Must be less than or equal to 100",
            "property": "limit"
          }
        ]
      }
      ```
      :::::
    ::::
  :::
::
