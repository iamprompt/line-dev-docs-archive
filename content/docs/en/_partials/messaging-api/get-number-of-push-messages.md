---
title: Get Number Of Push Messages
navigation: true
description: ''
meta: '{}'
path: /en/_partials/messaging-api/get-number-of-push-messages
__hash__: 4H7vRP3je0v7hSVbqq3eDMdgckIJEtGVJzpL2BanLgw
seo:
  description: ''
---

### Get number of sent push messages

:api-endpoint{protocol="get" endpoint="https://api.line.me/v2/bot/message/delivery/push"}::reference-with-code
  :::reference-content
  Gets the number of messages sent with the [`/bot/message/push`](#send-push-message) endpoint.

  The number of messages retrieved by this operation does not include the number of messages sent from LINE Official Account Manager.
  :::

  :::reference-code
  *Example request*

    ::::code-tabs
      :::::tab{lang="shell"}
      ```sh
      curl -v -X GET "https://api.line.me/v2/bot/message/delivery/push?date={yyyyMMdd}" \
      -H 'Authorization: Bearer {channel access token}'
      ```
      :::::
    ::::
  :::
::

#### API Playground

:api-playground{endpoint="/bot/message/delivery/push"}#### Rate limit

2,000 requests per second

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
  :::parameter-table-entry{required="true"}
  #undefined
  date

  Date the messages were sent

  - Format: `yyyyMMdd` (e.g. `20191231`)
  - Timezone: UTC+9
  :::
::

#### Response

::reference-with-code
  :::reference-content
  Returns status code `200` and a JSON object with the following information.

    ::::parameter-table
      :::::parameter-table-entry
      #undefined
      status

      #undefined
      String

      Status of the counting process. One of the following values is returned:

      - `ready`: You can get the number of messages.
      - `unready`: The message counting process for the date specified in `date` has not been completed yet. Retry your request later. Normally, the counting process is completed within the next day.
      - `out_of_service`: The date specified in `date` is earlier than March 31, 2018, when the operation of the counting system started.
      :::::

      :::::parameter-table-entry{annotation="Not always included"}
      #undefined
      success

      #undefined
      Number

      The number of messages sent with the Messaging API on the date specified in `date`. The response has this property only when the value of `status` is `ready`.
      :::::
    ::::
  :::

  :::reference-code
  *Example response*

    ::::code-tabs
      :::::tab{lang="json"}
      ```json
      {
        "status": "ready",
        "success": 10000
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

  | Code  | Description                          |
  | ----- | ------------------------------------ |
  | `400` | An invalid date format is specified. |

  For more information, see [Status codes](#status-codes) and [Error responses](#error-responses) in the [Common specifications](#common-specifications) section.
  :::

  :::reference-code
  *Example error response*

    ::::code-tabs
      :::::tab{lang="json"}
      ```json
      // If you specify a date in an invalid format (400 Bad Request)
      {
        "message": "The value for the 'date' parameter is invalid"
      }
      ```
      :::::
    ::::
  :::
::
