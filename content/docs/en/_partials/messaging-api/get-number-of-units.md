---
title: Get Number Of Units
navigation: true
description: ''
meta: '{}'
path: /en/_partials/messaging-api/get-number-of-units
__hash__: QG4HqgLlRPln-_2iOrhN9fjbTOtRSMz89XhyN_toi5s
seo:
  description: ''
---

### Get the number of unit name types assigned during this month

:api-endpoint{protocol="get" endpoint="https://api.line.me/v2/bot/message/aggregation/info"}::reference-with-code
  :::reference-content
  You can get the number of unit name types assigned to push messages, multicast messages, or LINE notification messages during this month. For more information about the limit on unit names assigned when sending messages, see [Maximum number of unit name types](/docs/messaging-api/unit-based-statistics-aggregation/#limit-to-the-number-of-units) in the Messaging API documentation.

    ::::admonition
    ---
    title: When unit names for LINE notification messages are reflected
    type: tip
    ---
    For LINE notification messages, even if the API request is accepted, the specified unit name isn't counted toward the number of unit name types until the message is actually sent. For more information, see [Statistics are updated after the message is actually sent](/docs/partner-docs/line-notification-messages/statistics/#statistics-are-aggregated-when-the-message-is-sent) in the LINE notification messages documentation.
    ::::
  :::

  :::reference-code
  *Example request*

    ::::code-tabs
      :::::tab{lang="shell"}
      ```sh
      curl -v -X GET https://api.line.me/v2/bot/message/aggregation/info \
      -H 'Authorization: Bearer {channel access token}'
      ```
      :::::
    ::::
  :::
::

#### Rate limit

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

#### Response

::reference-with-code
  :::reference-content
  Returns a `200` HTTP status code and a JSON object with this information.

    ::::parameter-table
      :::::parameter-table-entry
      #undefined
      numOfCustomAggregationUnits

      #undefined
      Number

      Number of unit name types assigned to push messages, multicast messages, or LINE notification messages during this month.
      :::::
    ::::
  :::

  :::reference-code
  *Example response*

    ::::code-tabs
      :::::tab{lang="json"}
      ```json
      {
        "numOfCustomAggregationUnits": 22
      }
      ```
      :::::
    ::::
  :::
::

#### Error Response

For more information, see [Status codes](#status-codes) and [Error responses](#error-responses) in the [Common specifications](#common-specifications) section.
