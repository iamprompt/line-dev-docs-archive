---
title: Flexible
navigation: true
description: ''
meta: '{}'
path: /en/_partials/partner-docs/flexible
__hash__: CFRwEUOwqFDg3nbn8mQLcVY8Q6ZKYGJxgAaBxxm3tH4
seo:
  description: ''
---

## LINE notification messages (flexible)

- [Send a LINE notification message (flexible)](#send-line-notification-message-flexible)
- [Get number of sent LINE notification messages (flexible)](#get-number-of-sent-line-notification-messages-flexible)

### Send a LINE notification message (flexible)

::reference-with-code
  :::reference-content
  API for sending a LINE notification message (flexible) by specifying the user's phone number.

    ::::admonition
    ---
    title: >-
      The name of the existing "LINE notification messages" has been changed to
      "LINE notification messages (flexible)"
    type: tip
    ---
    A new feature called "[LINE notification messages (template)](/docs/partner-docs/line-notification-messages/template/)" has been added, allowing you to easily create messages by combining premade templates, items, etc.

    Consequently, the previous "LINE notification messages" that required UX review have been renamed "LINE notification messages (flexible)".

    For more information, see the notice for corporate customers from June 2, 2025, [LINE notification messages (template) now available](/docs/partner-docs/notice/#partner-news-20250602).
    ::::

    ::::admonition
    ---
    title: Don't restrict the request source IP addresses
    type: warning
    ---
    When sending LINE notification messages, don't register server IP addresses that can call LINE Platform APIs in the [**Security Settings**] tab of the Messaging API channel. Sending a LINE notification message with the source IP addresses restricted may result in sending failure.

    For more information about how to check if you are restricting the requesting IP addresses, see [Restrict who can call the API when using a long-lived channel access token (optional)](/docs/messaging-api/building-bot/#configure-security-settings) in the Messaging API documentation.
    ::::
  :::

  :::reference-code
  *Example request*

    ::::code-tabs
      :::::tab{lang="shell"}
      ```sh
      curl -v -X POST https://api.line.me/bot/pnp/push \
      -H 'Authorization: Bearer {channel_access_token}' \
      -H 'Content-Type:application/json' \
      -d '{
          "to": "{hashed_phone_number}",
          "messages":[
              {
                  "type":"text",
                  "text":"Hello, world1"
              },
              {
                  "type":"text",
                  "text":"Hello, world2"
              }
          ],
          "customAggregationUnits": [
              "shipping"
          ]
      }'

      #Example request (with X-Line-Delivery-Tag)
      curl -v -X POST https://api.line.me/bot/pnp/push \
      -H 'Authorization: Bearer {channel_access_token}' \
      -H 'Content-Type:application/json' \
      -H 'X-Line-Delivery-Tag:{delivery_tag}' \
      -d '{
          "to": "{hashed_phone_number}",
          "messages":[
              {
                  "type":"text",
                  "text":"Hello, world1"
              },
              {
                  "type":"text",
                  "text":"Hello, world2"
              }
          ],
          "customAggregationUnits": [
              "shipping"
          ]
      }'
      ```
      :::::
    ::::
  :::
::

#### HTTP request

`POST https://api.line.me/bot/pnp/push`

#### Rate limit

2,000 requests per second

#### Request header

::admonition{title="Unsupported features" type="note"}
The LINE notification messages API doesn't allow API request retries using [retry keys](/reference/messaging-api/#retry-api-request) (`X-Line-Retry-Key`).
::

::reference-with-code
  :::reference-content
    ::::parameter-table
      :::::parameter-table-entry{required="true"}
      #undefined
      Content-Type

      application/json
      :::::

      :::::parameter-table-entry{required="true"}
      #undefined
      Authorization

      Bearer `{channel access token}`
      :::::

      :::::parameter-table-entry{optional=""}
      #undefined
      X-Line-Delivery-Tag

      String returned in the `delivery.data` property of the [delivery completion event](/docs/partner-docs/line-notification-messages/message-sending-complete-webhook-event/#receive-delivery-event) via Webhook. For more information, see [Get message delivery notifications](/docs/partner-docs/line-notification-messages/technical-specs/#receive-delivery-event).  

      Minimum character count: 16  

      Max character count: 100
      :::::
    ::::
  :::

  :::reference-code
  *Example X-Line-Delivery-Tag*

    ::::code-tabs
      :::::tab{lang="shell"}
      ```sh
      15034552939884E28681A7D668CEA94C147C716C0EC9DFE8B80B44EF3B57F6BD0602366BC3menu01
      ```
      :::::
    ::::
  :::
::

#### Request body

::parameter-table
  :::parameter-table-entry{required="true"}
  #undefined
  to

  #undefined
  String

  Message destination. Specify a phone number that has been normalized to :glossary-tooltip[[E.164](/glossary/#e164)]{glossary-id="e164"} format and [hashed with SHA256](/docs/partner-docs/line-notification-messages/technical-specs/#phone-number-hashed).

  For more information about conditions for sending a message, see [Conditions for sending LINE notification messages](/docs/partner-docs/line-notification-messages/technical-specs/#conditions-for-sending-line-notification-messages).

    ::::admonition{title="Note" type="note"}
    - You can't specify [group chats and chats with multiple users](/docs/messaging-api/group-chats/#group-chat-types).
    - You can't specify multiple phone numbers as the transmission target.
    ::::
  :::

  :::parameter-table-entry{required="true"}
  #undefined
  messages

  #undefined
  Array of [message objects](/reference/messaging-api/#message-objects)

  Message to be sent. Max: 5

  For more information, see [Message types that can be sent in LINE notification messages](/docs/partner-docs/line-notification-messages/technical-specs/#message-types-that-can-be-sent).
  :::

  :::parameter-table-entry{optional=""}
  #undefined
  customAggregationUnits

  #undefined
  Array of strings

  Name of aggregation unit. Case-sensitive. For example, `Promotion_a` and `Promotion_A` are regarded as different unit names.  

  Max unit number: 1  

  Max character limit: 30  

  Supported character types: Half-width alphanumeric characters (`a-z`, `A-Z`, `0-9`) and underscore (`_`)

  For more information about assigning a unit name, see [Assign a unit name](/docs/messaging-api/unit-based-statistics-aggregation/#assign-names-to-units-when-sending-messages) in the Messaging API documentation.

    ::::admonition{title="Unit names may not be assigned" type="note"}
    During the current month (from the 1st to the last day of the month), you can assign up to 1,000 different unit name types to push messages, multicast messages, and LINE notification messages. The number of unit name types is counted across all message types. If you send messages with a 1,001st or subsequent type of unit name, the messages will be sent, but those unit names won't be assigned to the messages.

    If you have many types of unit names, confirm that unit names can be assigned or have been assigned using one of the following methods:

    - Before sending a message, use the [Get the number of unit name types assigned during this month](/reference/messaging-api/#get-the-number-of-unit-name-types-assigned-during-this-month) endpoint to confirm that the number of unit names for the current month has not yet reached 1,000.
    - After sending a message, use the [Get a list of unit names assigned during this month](/reference/messaging-api/#get-a-list-of-unit-names-assigned-during-this-month) endpoint to confirm that the assigned unit name exists.
    ::::
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

  | Code  | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
  | ----- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
  | `400` | Problem with the request. Consider these reasons:- An invalid message destination is specified. - An invalid message object is specified. - A unit name longer than the maximum number of characters (30) is specified in the `customAggregationUnits` property. - A unit name containing an invalid character is specified in the `customAggregationUnits` property.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
  | `422` | Failed to send a LINE notification message using the LINE notification messages API. Consider these reasons:- There is no LINE user associated with the phone number specified as the target for sending messages. - The phone number specified as the message sending target wasn't issued in LINE notification message service target country. For more information, see [Conditions for sending LINE notification messages](/docs/partner-docs/line-notification-messages/technical-specs/#conditions-for-sending-line-notification-messages). - The LINE user associated with the phone number specified as the message sending target has [refused to receive LINE notification messages](/docs/partner-docs/line-notification-messages/technical-specs/#how-to-consent-for-line-notification-messages). - The LINE user associated with the phone number specified as the message sending target hasn't agreed to LINE's Privacy Policy (revised in March 2022 or later). |

  For more information, see [Status codes](/reference/messaging-api/#status-codes) and [Error responses](/reference/messaging-api/#error-responses) in the Messaging API reference.
  :::

  :::reference-code
  *Example error response*

    ::::code-tabs
      :::::tab{lang="json"}
      ```json
      // If you specify an invalid message destination (400 Bad Request)
      {
        "message": "The request body has 1 error(s)",
        "details": [
          {
            "message": "The value must be a valid SHA-256 digest.",
            "property": "to"
          }
        ]
      }

      // If the unit name contains invalid characters (400 Bad Request)
      {
        "message": "The request body has 1 error(s)",
        "details": [
          {
            "message": "Invalid characters are included in custom aggregation unit",
            "property": "customAggregationUnits[0]"
          }
        ]
      }

      // When sending a LINE notification message fails (422 Unprocessable Entity)
      {
        "message": "Failed to send messages"
      }
      ```
      :::::
    ::::
  :::
::

### Get number of sent LINE notification messages (flexible)

::reference-with-code
  :::reference-content
  Gets the number of LINE notification messages (flexible) sent using the [Send a LINE notification message (flexible)](/reference/line-notification-messages/#send-line-notification-message-flexible) endpoint.

  For more information, see [Get the number of sent LINE notification messages](/docs/partner-docs/line-notification-messages/technical-specs/#get-number-of-sent-line-notification-messages) in the LINE notification messages documentation.
  :::

  :::reference-code
  *Example request*

    ::::code-tabs
      :::::tab{lang="shell"}
      ```sh
      curl -v -X GET 'https://api.line.me/v2/bot/message/delivery/pnp?date=20211231' \
      -H 'Authorization: Bearer {channel_access_token}'
      ```
      :::::
    ::::
  :::
::

#### HTTP request

`GET https://api.line.me/v2/bot/message/delivery/pnp`

#### Rate limit

2,000 requests per second

#### Request header

::parameter-table
  :::parameter-table-entry{required="true"}
  #undefined
  Authorization

  Bearer `{channel access token}`
  :::
::

#### Query parameter

::parameter-table
  :::parameter-table-entry{required="true"}
  #undefined
  date

  Date the message was sent

  - Format: `yyyyMMdd` (Example:`20211231`)
  - Time zone: UTC+9
  :::
::

#### Response

::reference-with-code
  :::reference-content
  Returns status code `200` and a JSON object with this information.

    ::::parameter-table
      :::::parameter-table-entry
      #undefined
      status

      #undefined
      String

      Aggregation processing status. One of:

      - `ready`: You can get the number of messages.
      - `unready`: The total number of messages for the date specified in `date` isn't yet complete. Try the request again after a short time. The aggregation process is usually completed within the next day.
      - `out_of_service`: The date specified in `date` is before the aggregation system operation's start date (03/31/2018).
      :::::

      :::::parameter-table-entry{annotation="Not always included"}
      #undefined
      success

      #undefined
      Number

      Number of messages sent using the LINE notification messages API on the date specified in `date`. Only included in the response if the value of `status` is `ready`.
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
        "success": 3
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

  | Code  | Description                                                                                                   |
  | ----- | ------------------------------------------------------------------------------------------------------------- |
  | `400` | Problem with the request. Consider these reasons:- An invalid date is specified. - The date is not specified. |

  For more information, see [Status codes](/reference/messaging-api/#status-codes) and [Error responses](/reference/messaging-api/#error-responses) in the Messaging API reference.
  :::

  :::reference-code
  *Example error response*

    ::::code-tabs
      :::::tab{lang="json"}
      ```json
      // If you specify an invalid date (400 Bad Request)
      {
        "message": "The value for the 'date' parameter is invalid"
      }
      ```
      :::::
    ::::
  :::
::
