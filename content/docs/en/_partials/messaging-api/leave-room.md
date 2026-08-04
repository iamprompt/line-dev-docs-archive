---
title: Leave Room
navigation: true
description: ''
meta: '{}'
path: /en/_partials/messaging-api/leave-room
__hash__: '-PIO5bNRle2bL7wYWy7XVTvn6qNx5LN--K9-eNlsHkQ'
seo:
  description: ''
---

### Leave multi-person chat

:api-endpoint{protocol="post" endpoint="https://api.line.me/v2/bot/room/{roomId}/leave"}::reference-with-code
  :::reference-content
  Leaves a [multi-person chat](/docs/messaging-api/group-chats/#room).
  :::

  :::reference-code
  *Example request*

    ::::code-tabs
      :::::tab{lang="shell"}
      ```sh
      curl -v -X POST https://api.line.me/v2/bot/room/{roomId}/leave \
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

#### Path parameters

::parameter-table
  :::parameter-table-entry{required="true"}
  #undefined
  roomId

  Room ID. Found in the `source` object of [webhook event objects](#webhook-event-objects).
  :::
::

#### Response

::reference-with-code
  :::reference-content
  Returns status code `200` and an empty JSON object.

  If you specify a multi-person chat that your LINE Official Account doesn't participate in, the status code `200` will also be returned.
  :::

  :::reference-code
  *Example response*

    ::::code-tabs
      :::::tab{lang="json"}
      ```json
      {}
      ```
      :::::
    ::::
  :::
::

#### Error Response

::reference-with-code
  :::reference-content
  Returns the following HTTP status code and an error response:

  | Code  | Description                                    |
  | ----- | ---------------------------------------------- |
  | `400` | An invalid room ID is specified.               |
  | `404` | A non-existent multi-person chat is specified. |

  For more information, see [Status codes](#status-codes) and [Error responses](#error-responses) in the [Common specifications](#common-specifications) section.
  :::

  :::reference-code
  *Example error response*

    ::::code-tabs
      :::::tab{lang="json"}
      ```json
      // If you specify an invalid room ID (400 Bad Request)
      {
        "message": "The value for the 'roomId' parameter is invalid"
      }

      // If you specify a non-existent multi-person chat (404 Not Found)
      {
        "message": "Not found"
      }
      ```
      :::::
    ::::
  :::
::
