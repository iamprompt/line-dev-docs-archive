---
title: Get Number Of Sent Messages
navigation: true
description: ''
meta: '{}'
path: /en/_partials/messaging-api/get-number-of-sent-messages
__hash__: wiV_sWJ0mbG1LhxmeFWNycmCjjdBoabk3tJvLmiuDPk
seo:
  description: ''
---

### Get number of messages sent this month

:api-endpoint{protocol="get" endpoint="https://api.line.me/v2/bot/message/quota/consumption"}::reference-with-code
  :::reference-content
  Gets the number of messages sent in the current month.

  The number of messages retrieved by this operation includes the number of messages sent from LINE Official Account Manager.

  The number of messages retrieved by this operation is approximate. To get the correct number of sent messages, use LINE Official Account Manager or execute API operations for getting the number of sent messages.

  The LINE Platform temporarily reserves the planned number of messages for [narrowcast messages](#send-narrowcast-message-cautions) and targeted broadcasts from LINE Official Account Manager. It includes these reservations in `totalUsage`. After finalizing the actual number of messages sent, the LINE Platform releases the reservations for unsent messages and subtracts the corresponding message count from `totalUsage`.
  :::

  :::reference-code
  *Example request*

    ::::code-tabs
      :::::tab{lang="shell"}
      ```sh
      curl -v -X GET https://api.line.me/v2/bot/message/quota/consumption \
      -H 'Authorization: Bearer {channel access token}'
      ```
      :::::
    ::::
  :::
::

#### API Playground

:api-playground{endpoint="/bot/message/quota/consumption"}#### Rate limit

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
  Returns status code `200` and a JSON object with the following information.

    ::::parameter-table
      :::::parameter-table-entry
      #undefined
      totalUsage

      #undefined
      Number

      The number of messages sent in the current month. This number may include messages temporarily reserved for planned deliveries.
      :::::
    ::::
  :::

  :::reference-code
  *Example response*

    ::::code-tabs
      :::::tab{lang="json"}
      ```json
      {
        "totalUsage": 500
      }
      ```
      :::::
    ::::
  :::
::

#### Error Response

For more information, see [Status codes](#status-codes) and [Error responses](#error-responses) in the [Common specifications](#common-specifications) section.
