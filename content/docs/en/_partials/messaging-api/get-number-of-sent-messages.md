---
title: Get Number Of Sent Messages
navigation: true
description: ''
meta: '{}'
path: /en/_partials/messaging-api/get-number-of-sent-messages
__hash__: vqDLH8YZd27QSyXRz1VSVTDSuYv3njMbsbWZaIPe_dY
seo:
  description: ''
---

### Get number of messages sent this month

:api-endpoint{protocol="get" endpoint="https://api.line.me/v2/bot/message/quota/consumption"}::reference-with-code
  :::reference-content
  Gets the number of messages sent in the current month.

  The number of messages retrieved by this operation includes the number of messages sent from LINE Official Account Manager.

  The number of messages retrieved by this operation is approximate. To get the correct number of sent messages, use LINE Official Account Manager or execute API operations for getting the number of sent messages.
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

      The number of sent messages in the current month
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
