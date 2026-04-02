---
title: Retry Api Request
navigation: true
description: ''
meta: '{}'
path: /en/_partials/messaging-api/retry-api-request
__hash__: OZHVuDp5L1Y3GK6F0vULs33T9myM8Ciy3aJjbMmJirs
seo:
  description: ''
---

### Retrying an API request

::reference-with-code
  :::reference-content
  By including a retry key (`X-Line-Retry-Key`) in the HTTP header of a push message, multicast message, narrowcast message, or broadcast message, the same API request can be reattempted to prevent duplicate processing.

  The retry key management period on the LINE Platform side is 24 hours. If you use the same retry key for more than 24 hours, the request will be treated as a new API request.

  For more information on retrying an API request, see [Retry failed API requests](/docs/messaging-api/retrying-api-request/) in the Messaging API documentation.

    ::::admonition
    ---
    title: Don't use the same retry key for more than 24 hours
    type: note
    ---
    If you use the same retry key for more than 24 hours, the request will succeed as a new API request even if an API request containing the same retry key has already succeeded. As a result, duplicate messages will be sent.
    ::::
  :::

  :::reference-code
  *Example request*

    ::::code-tabs
      :::::tab{lang="shell"}
      ```sh
      curl -v -X POST https://api.line.me/v2/bot/message/push \
      -H 'Content-Type: application/json' \
      -H 'Authorization: Bearer {CHANNEL_ACCESS_TOKEN}' \
      -H 'X-Line-Retry-Key: {UUID}' \
      -d '{
          "messages": [
              {
                  "type": "text",
                  "text": "Hello, user"
              }
          ]
      }'
      ```
      :::::
    ::::
  :::
::

#### Request headers

::parameter-table
  :::parameter-table-entry{annotation="Optional*"}
  #undefined
  X-Line-Retry-Key

  Arbitrarily generated UUID in hexadecimal notation (e.g. 123e4567-e89b-12d3-a456-426614174000)
  :::
::

* Required when retrying API requests.

#### Response if the request has already been accepted

::reference-with-code
  :::reference-content
  If a request containing the same retry key has already been accepted, returns the `409` status code, the `x-line-accepted-request-id` header indicating the request ID of the request already accepted, and a JSON object containing this information.

    ::::parameter-table
      :::::parameter-table-entry
      #undefined
      message

      #undefined
      String

      A message informing the same request has already been accepted
      :::::

      :::::parameter-table-entry{annotation="Not always included"}
      #undefined
      sentMessages

      #undefined
      Array

      Array of sent messages. The response has this property only when a push message was sent.  
      Max: 5
      :::::

      :::::parameter-table-entry{annotation="Not always included"}
      #undefined
      sentMessages.id

      #undefined
      Number

      ID of the sent message. The response has this property only when a push message was sent.
      :::::

      :::::parameter-table-entry{annotation="Not always included"}
      #undefined
      sentMessages.quoteToken

      #undefined
      String

      Quote token of the message. Only included when a message object that can be specified as a quote target was sent as a push message. For more information, see [Get quote tokens](/docs/messaging-api/get-quote-tokens/) in the Messaging API documentation.
      :::::
    ::::
  :::

  :::reference-code
  *Example response*

    ::::code-tabs
      :::::tab{lang="json"}
      ```json
      HTTP/1.1 409 Conflict
      x-line-request-id: 123e4567-e89b-12d3-a456-426655440002
      x-line-accepted-request-id: 123e4567-e89b-12d3-a456-426655440001

      {
        "message": "The retry key is already accepted",
        "sentMessages": [
          {
            "id": "461230966842064897",
            "quoteToken": "IStG5h1Tz7b..."
          }
        ]
      }
      ```
      :::::
    ::::
  :::
::
