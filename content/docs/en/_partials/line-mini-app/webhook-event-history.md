---
title: Webhook Event History
navigation: true
description: ''
meta: '{}'
path: /en/_partials/line-mini-app/webhook-event-history
__hash__: iMTfBJHRA8rQM_ql2ZaBuK-HA2wQQy4Z88Pw3emRnpE
seo:
  description: ''
---

### Get webhook event history

::reference-with-code
  :::reference-content
  Gets the history of webhook events sent by the LINE Platform. You can retrieve up to 100 events at a time using cursor-based pagination.

  The sort order is in ascending order of the date and time when the LINE Platform started sending webhook events.

  You can only retrieve webhook events sent in the past 7 days. Currently, only [purchase complete events](#purchase-complete-event) are available, and [refund events](#refund-event) will be supported in the future.
  :::

  :::reference-code
  *Example request*

    ::::code-tabs
      :::::tab{lang="shell"}
      ```sh
      curl "https://api.line.me/iap/v1/webhook/events?startEpochSeconds=1747330438&endEpochSeconds=1747708454&pageSize=10" \
        -H "Authorization: Bearer {ChannelAccessToken}"
      ```
      :::::
    ::::
  :::
::

#### HTTP request

`GET https://api.line.me/iap/v1/webhook/events`

#### Request headers

::parameter-table
  :::parameter-table-entry{required="true"}
  #undefined
  Authorization

  Bearer `{channel access token}`  

  For more information, see [Channel access token](/docs/basics/channel-access-token/) in the LINE Platform Basics.
  :::
::

#### Query parameters

::parameter-table
  :::parameter-table-entry{required="true"}
  #undefined
  startEpochSeconds

  #undefined
  Number

  Specifies the start date and time of the period for which you want to retrieve webhook event history. The specified date and time are included in the retrieval target. Specify a UNIX time (in seconds) within the past 7 days.
  :::

  :::parameter-table-entry{required="true"}
  #undefined
  endEpochSeconds

  #undefined
  Number

  Specifies the end date and time of the period for which you want to retrieve webhook event history. The specified date and time are included in the retrieval target. Specify a UNIX time (in seconds) within the past 7 days.
  :::

  :::parameter-table-entry
  #undefined
  cursor

  #undefined
  String

  Cursor for the webhook event page.  

  Do not specify this in the first request. For the second and subsequent requests, you can retrieve the subsequent webhook events by specifying the `nextCursor` value included in the response from the previous request.
  :::

  :::parameter-table-entry{required="true"}
  #undefined
  pageSize

  #undefined
  Number

  Number of webhook events per page.  
   

  - Minimum value: 1
  - Maximum value: 100
  :::

  :::parameter-table-entry
  #undefined
  status

  #undefined
  String

  Status of the webhook events you want to retrieve. Specify one of the following:

  - `SUCCESS`: Retrieves the history of webhook events received successfully.
  - `FAILED`: Retrieves the history of webhook events that failed to be received.

  If not specified, the history of all webhook events is retrieved regardless of whether the receipt was successful or failed.
  :::
::

::admonition
---
title: Do not change parameters other than cursor during pagination
type: note
---
During pagination, make requests without changing parameters other than `cursor`. If you want to change parameters, start from the first page again.
::

#### Response

::reference-with-code
  :::reference-content
  When successful, returns a JSON object with status code `200` and the information below.

    ::::parameter-table
      :::::parameter-table-entry
      #undefined
      events

      #undefined
      Array

      List of webhook events.
      :::::

      :::::parameter-table-entry
      #undefined
      events[].transactionType

      #undefined
      String

      Always returns `PRODUCT`.
      :::::

      :::::parameter-table-entry
      #undefined
      events[].event

      #undefined
      Object

      [Webhook event object](#purchase-complete-payload).
      :::::

      :::::parameter-table-entry{annotation="Not always included"}
      #undefined
      nextCursor

      #undefined
      String

      Cursor for the next page.  

      If the next page does not exist, the value is `null`.
      :::::
    ::::
  :::

  :::reference-code
  *Example response*

    ::::code-tabs
      :::::tab{lang="json"}
      ```json
      {
        "events": [
          {
            "transactionType": "PRODUCT",
            "event": {
              "type": "purchaseComplete",
              "orderId": "T2025020710000002126002",
              "productId": "iap_ln_002",
              "userId": "U91FC5A...",
              "purchaseTimestamp": 1738672496,
              "channelId": "12345..."
            }
          }
        ],
        "nextCursor": "MTY3NjU0"
      }
      ```
      :::::
    ::::
  :::
::

#### Error responses

For more information on error response format, see [Error response](#iap-error-responses).

Errors that may occur in addition to general ones include the following:

| Error code            | Description                                                                                                                                |
| --------------------- | ------------------------------------------------------------------------------------------------------------------------------------------ |
| VALIDATION_ERROR      | Request constraints are not met. For example, a value other than `SUCCESS` or `FAILED` is passed to `status`.                              |
| INTERNAL_SERVER_ERROR | A temporary issue has occurred on the LINE Platform. For endpoints that allow retries, retry using exponential backoff or similar methods. |
