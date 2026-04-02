---
title: Send Reply Message
navigation: true
description: ''
meta: '{}'
path: /en/_partials/messaging-api/send-reply-message
__hash__: PgIJeTX57V_d8xaFRUL4f5wGGEgMSrTj8qqq95FPGuA
seo:
  description: ''
---

### Send reply message

:api-endpoint{protocol="post" endpoint="https://api.line.me/v2/bot/message/reply"}::reference-with-code
  :::reference-content
  Sends a reply message in response to an event from a user, group chat, or multi-person chat. To send reply messages, you need a reply token which is included in the webhook event object.

  When an event occurs, you'll be notified by a [webhook](#webhooks). If the event can be responded to, the reply token is issued.

    ::::admonition
    ---
    title: You can display loading animations while preparing a reply message
    type: tip
    ---
    After your LINE Official Account receives a message from a user, the response may takes some time due to message preparation or reservation processing. In such cases, you can visually tell the user that you want them to wait by displaying a loading animation. For more information, see [Display a loading animation](/docs/messaging-api/use-loading-indicator/) in the Messaging API documentation.
    ::::

  #### Reply token

  When using reply tokens, check the following:

  - Reply tokens can only be used once.
  - Reply tokens must be used within one minute after receiving the webhook. Use beyond one minute isn't guaranteed to work.
  - Reply tokens included in redelivered webhooks can also be used within one minute after receiving the redelivered webhook. However, the reply token can't be used in the following cases:

    - The reply token included in the original webhook has already been used.
    - 20 minutes have passed since the event occurred.

    ::::admonition
    ---
    title: Reply tokens should be used as soon as possible
    type: note
    ---
    The time limit for reply tokens is subject to change without notice. In addition, the actual duration of use may vary due to network delays and other factors.

    For this reason, don't rely on the time limit for implementation. Also, use reply tokens as soon as possible.
    ::::
  :::

  :::reference-code
  *Example request*

    ::::code-tabs
      :::::tab{lang="shell"}
      ```sh
      curl -v -X POST https://api.line.me/v2/bot/message/reply \
      -H 'Content-Type: application/json' \
      -H 'Authorization: Bearer {channel access token}' \
      -d '{
          "replyToken":"nHuyWiB7yP5Zw52FIkcQobQuGDXCTA",
          "messages":[
              {
                  "type":"text",
                  "text":"Hello, user"
              },
              {
                  "type":"text",
                  "text":"May I help you?"
              }
          ]
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
  replyToken

  #undefined
  String

  Reply token received via webhook
  :::

  :::parameter-table-entry{required="true"}
  #undefined
  messages

  #undefined
  Array of [message objects](#message-objects)

  Messages to send  

  Max: 5

  By using the [Validate message objects of a reply message](#validate-message-objects-of-reply-message) endpoint, you can validate the message objects.
  :::

  :::parameter-table-entry{optional=""}
  #undefined
  notificationDisabled

  #undefined
  Boolean

  - `true`: The user doesn't receive a push notification when the message is sent.
  - `false`: The user receives a push notification when the message is sent (unless they have disabled push notifications in LINE and/or their device).

  Default: `false`
  :::
::

#### Response

::reference-with-code
  :::reference-content
  Returns status code `200` and a JSON object with the following information.

    ::::parameter-table
      :::::parameter-table-entry
      #undefined
      sentMessages

      #undefined
      Array

      Array of sent messages.  
      Max: 5
      :::::

      :::::parameter-table-entry
      #undefined
      sentMessages.id

      #undefined
      Number

      ID of the sent message.
      :::::

      :::::parameter-table-entry{annotation="Not always included"}
      #undefined
      sentMessages.quoteToken

      #undefined
      String

      Quote token of the message. Only included when a message object that can be specified as a quote target was sent as a reply message. For more information, see [Get quote tokens](/docs/messaging-api/get-quote-tokens/) in the Messaging API documentation.
      :::::
    ::::
  :::

  :::reference-code
  *Example response*

    ::::code-tabs
      :::::tab{lang="json"}
      ```json
      {
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

#### Error response

::reference-with-code
  :::reference-content
  Returns the following HTTP status code and an error response:

  | Code  | Description                                                                                                                        |
  | ----- | ---------------------------------------------------------------------------------------------------------------------------------- |
  | `400` | Couldn't send the message. Consider these reasons:- An invalid reply token is specified. - An invalid message object is specified. |

  For more information, see [Status codes](#status-codes) and [Error responses](#error-responses) in [Common specifications](#common-specifications) section.

  The messages aren't sent if an error is returned.
  :::

  :::reference-code
  *Example error response*

    ::::code-tabs
      :::::tab{lang="json"}
      ```json
      // If you specify an invalid reply token such as expired or used (400 Bad Request)
      {
        "message": "Invalid reply token"
      }
      ```
      :::::
    ::::
  :::
::
