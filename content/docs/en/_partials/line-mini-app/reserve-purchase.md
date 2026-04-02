---
title: Reserve Purchase
navigation: true
description: ''
meta: '{}'
path: /en/_partials/line-mini-app/reserve-purchase
__hash__: pbz9GgnlHCAXYbMeYDoMZvls2knciAs70F3l-peQe9w
seo:
  description: ''
---

### Reserve purchase

::reference-with-code
  :::reference-content
  Reserve the purchase before starting the app store payment.

  The order ID (`orderId`) included in the [response](#reserve-purchase-response) is also included in the [purchase complete event](#purchase-complete-event). The order ID is required for inquiries and investigations to LY Corporation, so be sure to save it.

  Also, a successful reservation does not guarantee purchase completion, so grant items based on the purchase complete event.
  :::

  :::reference-code
  *Request example*

    ::::code-tabs
      :::::tab{lang="shell"}
      ```sh
      curl -X POST https://api.line.me/iap/v1/product/reserve \
      -H "Authorization: Bearer {UserAccessToken}" \
      -H "Content-Type: application/json" \
      -d '{
      "clientIp": "192.168.1.1",
      "clientOs": "android",
      "productId": "iap_ln_002",
      "shopProductName": "Premium Package"
      }'
      ```
      :::::
    ::::
  :::
::

#### HTTP request

`POST https://api.line.me/iap/v1/product/reserve`

#### Request headers

::parameter-table
  :::parameter-table-entry{required="true"}
  #undefined
  Authorization

  Bearer `{user access token}`

  The current user's access token. Can be obtained with the [`liff.getAccessToken()`](/reference/liff/#get-access-token) method.
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
  clientIp

  #undefined
  String

  The IP address of the user's device obtained from the server. Specify in IPv4 or IPv6 format.
  :::

  :::parameter-table-entry{required="true"}
  #undefined
  clientOs

  #undefined
  String

  The value obtained from the [`liff.getOS()`](/reference/liff/#get-os) method. Either `ios` or `android`.
  :::

  :::parameter-table-entry{required="true"}
  #undefined
  productId

  #undefined
  String

  The [product ID](/docs/line-mini-app/in-app-purchase/iap-product-id/) of the item to be purchased.
  :::

  :::parameter-table-entry{required="true"}
  #undefined
  shopProductName

  #undefined
  String

  The item name displayed in the purchase history.

  Emojis and symbols can't be used. Set an appropriate value so that users can recognize the item they purchased.

  Maximum characters: 20 (UTF-16)
  :::
::

#### Response

::reference-with-code
  :::reference-content
  Returns a JSON object containing the status code `200` and the following information:

    ::::parameter-table
      :::::parameter-table-entry
      #undefined
      orderId

      #undefined
      String

      Order ID.
      :::::
    ::::
  :::

  :::reference-code
  *Response example*

    ::::code-tabs
      :::::tab{lang="json"}
      ```json
      { "orderId": "T2025020710000002126002" }
      ```
      :::::
    ::::
  :::
::

#### Error response

::reference-with-code
  :::reference-content
  For more information on error response format, see [Error response](#iap-error-responses).

  Errors that may occur in addition to general ones include the following:

  | Error code             | Description                                                                                                                                                                                                       |
  | ---------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
  | VALIDATION_ERROR       | Request constraints are not met. For example, a value other than `ios` or `android` is passed to `clientOs`.                                                                                                      |
  | WEBHOOK_URL_IS_NOT_SET | The webhook URL to receive payment completion notifications is not set.                                                                                                                                           |
  | PRODUCT_ID_NOT_FOUND   | The requested [product ID](/docs/line-mini-app/in-app-purchase/iap-product-id/) does not exist.                                                                                                                   |
  | BLOCKED_USER           | This user has been determined to be a fraudulent user by the LINE Platform. Requests related to this user can't be processed.                                                                                     |
  | INTERNAL_SERVER_ERROR  | A temporary issue has occurred on the LINE Platform. For endpoints where retries are possible, retry using exponential backoff or similar methods.                                                                |
  | TERMS_AGREEMENT_ERROR  | Occurs when the latest terms and conditions have not been agreed to by this user in "[Obtain user consent for in-app purchase](/docs/line-mini-app/in-app-purchase/implement-in-app-purchase/#get-user-consent)". |
  :::

  :::reference-code
  *Error response example*

    ::::code-tabs
      :::::tab{lang="json"}
      ```json
      {
        "errorCode": "VALIDATION_ERROR",
        "message": "Request validation failed.",
        "details": [
          {
            "message": "'clientOs' must be 'android' or 'ios'. Actually received: 'INVALID'",
            "property": "clientOs"
          }
        ]
      }
      ```
      :::::
    ::::
  :::
::
