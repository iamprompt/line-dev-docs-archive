---
title: Mark As Read
navigation: true
description: ''
meta: '{}'
path: /en/_partials/messaging-api/mark-as-read
__hash__: 125R01a0E2ckd8mjLUw4pijbJ1xeRg3zrsRQJe3UyuI
seo:
  description: ''
---

### Mark messages as read

:api-endpoint{protocol="post" endpoint="https://api.line.me/v2/bot/chat/markAsRead"}::reference-with-code
  :::reference-content
  Mark all messages sent before the specified message as read. For more information, see [Mark messages as read](/docs/messaging-api/mark-as-read/) in the Messaging API documentation.
  :::

  :::reference-code
  *Example request*

    ::::code-tabs
      :::::tab{lang="shell"}
      ```sh
      curl -v -X POST https://api.line.me/v2/bot/chat/markAsRead \
      -H 'Content-Type: application/json' \
      -H 'Authorization: Bearer {channel access token}' \
      -d '{
        "markAsReadToken": "{mark as read token}"
      }'
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
  Content-Type

  application/json
  :::

  :::parameter-table-entry{required="true"}
  #undefined
  Authorization

  Bearer `{channel access token}`
  :::
::

#### Request body

::parameter-table
  :::parameter-table-entry{required="true"}
  #undefined
  markAsReadToken

  #undefined
  String

  Read token. Contained in the `markAsReadToken` property of the [message event object](#message-event) in the webhook.
  :::
::

#### Response

::reference-with-code
  :::reference-content
  Returns status code `200` and an empty JSON object.
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

#### Error response

::reference-with-code
  :::reference-content
  Returns the following HTTP status code and an error response:

  | Code  | Description                               |
  | ----- | ----------------------------------------- |
  | `400` | An invalid read token has been specified. |

  For more information, see [Status codes](#status-codes) and [Error responses](#error-responses) in the [Common specifications](#common-specifications) section.
  :::

  :::reference-code
  *Example error response*

    ::::code-tabs
      :::::tab{lang="json"}
      ```json
      // If an invalid read token is specified (400 Bad Request)
      {
        "message": "Invalid markAsReadToken. Tokens must be used by the bot that received them via Webhook."
      }
      ```
      :::::
    ::::
  :::
::
