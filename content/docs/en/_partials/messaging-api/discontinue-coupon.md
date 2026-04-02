---
title: Discontinue Coupon
navigation: true
description: ''
meta: '{}'
path: /en/_partials/messaging-api/discontinue-coupon
__hash__: '-e7bNNFwPCG-BsMT22TQMDTX2TvncoOvRfJN74d7VqQ'
seo:
  description: ''
---

### Discontinue a coupon

:api-endpoint{protocol="put" endpoint="https://api.line.me/v2/bot/coupon/{couponId}/close"}::reference-with-code
  :::reference-content
  Discontinues the specified coupon.

  Once a coupon is discontinued, users who have already received it as a message will no longer be able to get it, and users who have already obtained it will no longer be able to use it.

  Discontinued coupons can't be reactivated.
  :::

  :::reference-code
  *Example request*

    ::::code-tabs
      :::::tab{lang="shell"}
      ```sh
      curl -v -X PUT https://api.line.me/v2/bot/coupon/01JYNW8JMQVFBNWF1APF8Z3FS7/close \
      -H 'Authorization: Bearer {channel access token}' \
      -H 'Content-Type: application/json'
      ```
      :::::
    ::::
  :::
::

#### Rate limit

200 requests per second

Discontinuing coupons using :glossary-tooltip[[LINE Official Account Manager](/glossary/#line-oa-manager)]{glossary-id="line-oa-manager"} isn't subject to this restriction.

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

#### Path parameters

::parameter-table
  :::parameter-table-entry{required="true"}
  #undefined
  couponId

  #undefined
  String

  The coupon ID of the coupon to discontinue.
  :::
::

#### Response

::reference-with-code
  :::reference-content
  Returns the `200` HTTP status code and an empty JSON object.
  :::

  :::reference-code
  *Response example*

    ::::code-tabs
      :::::tab{lang="json"}
      ```json
      {}
      ```
      :::::
    ::::
  :::
::

#### Error response

::reference-with-code
  :::reference-content
  Returns the following HTTP status code and an error response:

  | Code  | Description                                                 |
  | ----- | ----------------------------------------------------------- |
  | `410` | The coupon ID for a discontinued coupon has been specified. |
  | `404` | The specified coupon doesn't exist.                         |

  For more information, see [Status codes](#status-codes) and [Error responses](#error-responses) in the [Common specifications](#common-specifications) section.
  :::

  :::reference-code
  *Example error response*

    ::::code-tabs
      :::::tab{lang="json"}
      ```json
      // If the specified coupon is already discontinued (410 Gone)
      {
        "message": "The request body has 1 error(s)",
        "details": [
          {
            "message": "The coupon has already been closed.",
            "property": ""
          }
        ]
      }

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
