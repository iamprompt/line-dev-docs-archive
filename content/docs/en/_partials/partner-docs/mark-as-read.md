---
title: Mark As Read
navigation: true
description: ''
meta: '{}'
path: /en/_partials/partner-docs/mark-as-read
__hash__: CUaqN2R5EJT-FCX-TeOb7ooRGO7ZCDWzXmsax7SO8sE
seo:
  description: ''
---

## Mark as read API (old)

### Mark messages from users as read

::reference-with-code
  :::reference-content
  All messages sent from a specific user can display "Read".

    ::::admonition{title="Use the new endpoint to mark as read" type="tip"}
    The Mark as read API (old) remains available for use. However, if you're implementing functionality to mark messages as read from users going forward, use the Messaging API's [Mark messages as read](/reference/messaging-api/#mark-as-read) endpoint. The "Mark messages as read" endpoint requires no application and can be used in conjunction with chat feature.
    ::::
  :::

  :::reference-code
  *Example request*

    ::::code-tabs
      :::::tab{lang="shell"}
      ```sh
      curl -v -X POST https://api.line.me/v2/bot/message/markAsRead \
      -H 'Content-Type: application/json' \
      -H 'Authorization: Bearer {channel_access_token}' \
      -d '{
          "chat": {
              "userId": "Uxxxxxxxxxxxxxxxxxx"
          }
      }'
      ```
      :::::
    ::::
  :::
::

#### HTTP request

`POST https://api.line.me/v2/bot/message/markAsRead`

#### Rate limit

2,000 requests per second

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
  chat.userId

  #undefined
  String

  The target user ID
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

  | Code  | Description                      |
  | ----- | -------------------------------- |
  | `400` | An invalid user ID is specified. |

  For more information, see [Status codes](/reference/messaging-api/#status-codes) and [Error responses](/reference/messaging-api/#error-responses) in the Messaging API reference.
  :::

  :::reference-code
  *Example error response*

    ::::code-tabs
      :::::tab{lang="json"}
      ```json
      // If you specify an invalid user ID (400 Bad Request)
      {
        "message": "The property, 'chat.chatId', in the request body is invalid (line: -, column: -)"
      }
      ```
      :::::
    ::::
  :::
::
