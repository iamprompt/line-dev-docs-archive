---
title: Template
navigation: true
description: ''
meta: '{}'
path: /en/_partials/partner-docs/template
__hash__: HJ02EDwA_nmFXEj_JzQTAWv064Ju4yKwWYpGdiUJ_VY
seo:
  description: ''
---

## LINE notification messages (template)

- [Send a LINE notification message (template)](#send-line-notification-message-template)
- [Get number of sent LINE notification messages (template)](#get-number-of-sent-line-notification-messages-template)

### Send a LINE notification message (template)

::reference-with-code
  :::reference-content
  API for sending a LINE notification message (template) by specifying the user's phone number.

  For more information, see [LINE notification messages (template)](/docs/partner-docs/line-notification-messages/template/) in the LINE notification messages documentation.

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
      curl -v -X POST https://api.line.me/v2/bot/message/pnp/templated/push \
      -H 'Authorization: Bearer {channel_access_token}' \
      -H 'Content-Type:application/json' \
      -H 'X-Line-Delivery-Tag:15034552939884E28681A7D668CEA94C147C716C0EC9DFE8B80B44EF3B57F6BD0602366BC3menu01' \
      -d '{
          "to": "c9fb9ae95bff879cbcdfc9edf6716640bc40841f3b7352140daa1431af4c319e",
          "templateKey": "shipment_completed_ja",
          "body": {
              "emphasizedItem": {
                  "itemKey": "date_002_ja",
                  "content": "Saturday, August 10, 2024"
              },
              "items": [
                  {
                      "itemKey": "time_range_001_ja",
                      "content": "A.M."
                  },
                  {
                      "itemKey": "number_001_ja",
                      "content": "1234567"
                  },
                  {
                      "itemKey": "price_001_ja",
                      "content": "120 USD"
                  },
                  {
                      "itemKey": "name_010_ja",
                      "content": "Frozen Soup Set"
                  }
              ],
              "buttons": [
                  {
                      "buttonKey": "check_delivery_status_ja",
                      "url": "https://example.com/CheckDeliveryStatus/"
                  },
                  {
                      "buttonKey": "contact_ja",
                      "url": "https://example.com/ContactUs/"
                  }
              ]
          }
      }'
      ```
      :::::
    ::::
  :::
::

#### HTTP request

`POST https://api.line.me/v2/bot/message/pnp/templated/push`

#### Rate limit

2,000 requests per second

#### Request headers

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

      String returned in the `delivery.data` property of the [delivery completion event](/docs/partner-docs/line-notification-messages/message-sending-complete-webhook-event/#receive-delivery-event) via webhook. For more information, see [Get message delivery notifications](/docs/partner-docs/line-notification-messages/technical-specs/#receive-delivery-event).  

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
    - You can't specify [group chats or multi-person chats](/docs/messaging-api/group-chats/#group-chat-types).
    - You can't specify multiple phone numbers as the transmission target.
    ::::
  :::

  :::parameter-table-entry{required="true"}
  #undefined
  templateKey

  #undefined
  String

  Specify the `Key` of the template you want to send.

  See [Templates](/docs/partner-docs/line-notification-messages/template/#templates) for available `Key`.
  :::

  :::parameter-table-entry{optional=""}
  #undefined
  body

  #undefined
  Object

  The body object of the template you want to send. Specify the content of the message with three objects. You can't specify the same item more than once in a single message.

  - `emphasizedItem`: The [item](#send-line-notification-message-template-items) to emphasize.
  - `items`: The array of [items](#send-line-notification-message-template-items).
  - `buttons`: The array of [buttons](#send-line-notification-message-template-buttons).
  :::

  :::parameter-table-entry{optional=""}
  #undefined
  body.emphasizedItem

  #undefined
  Object

  Specify the [item](#send-line-notification-message-template-items) you want to emphasize in the message.  

  Max number of objects: 1
  :::

  :::parameter-table-entry{optional=""}
  #undefined
  body.items

  #undefined
  Array of objects

  Specify the array of [items](#send-line-notification-message-template-items) you want to include in the message.   

  Min number of objects: 0  

  Max number of objects: 15
  :::

  :::parameter-table-entry{optional=""}
  #undefined
  body.buttons

  #undefined
  Array of objects

  Specify the array of [buttons](#send-line-notification-message-template-buttons) you want to include in the message.   

  Min number of objects: 0  

  Max number of objects: 2
  :::
::

##### Items

::reference-with-code
  :::reference-content
    ::::parameter-table
      :::::parameter-table-entry{required="true"}
      #undefined
      itemKey

      #undefined
      String

      Specify the `Key` of the item you want to include.

      See [Items](/docs/partner-docs/line-notification-messages/template/#items) for available `Key`.
      :::::

      :::::parameter-table-entry{required="true"}
      #undefined
      content

      #undefined
      String

      Specify the string to be displayed as the value of the item.  

      Max number of characters: 15 for `body.emphasizedItem`, 300 for `body.items`
      :::::
    ::::
  :::

  :::reference-code
  *Example item*

    ::::code-tabs
      :::::tab{lang="json"}
      ```json
      {
        "itemKey": "time_range_001_ja",
        "content": "A.M."
      }
      ```
      :::::
    ::::
  :::
::

##### Buttons

::reference-with-code
  :::reference-content
    ::::parameter-table
      :::::parameter-table-entry{required="true"}
      #undefined
      buttonKey

      #undefined
      String

      Specify the `Key` of the button you want to include.

      See [Buttons](/docs/partner-docs/line-notification-messages/template/#buttons) for available `Key`.
      :::::

      :::::parameter-table-entry{required="true"}
      #undefined
      url

      #undefined
      String

      Specify the URL of the page to be opened when the user presses the button.  

      Max number of characters: 1000
      :::::
    ::::
  :::

  :::reference-code
  *Example button*

    ::::code-tabs
      :::::tab{lang="json"}
      ```json
      {
        "buttonKey": "contact_ja",
        "url": "https://example.com/ContactUs/"
      }
      ```
      :::::
    ::::
  :::
::

#### Response

::reference-with-code
  :::reference-content
  Returns status code `202` and an empty JSON object.
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
  | `400` | Problem with the request. Consider these reasons:- An invalid message destination is specified. - An invalid message object is specified. - Your LINE Official Account can't use the specified template.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
  | `403` | Not authorized to use this endpoint.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
  | `422` | Failed to send a LINE notification message using the LINE notification messages API. Consider these reasons:- There is no LINE user associated with the phone number specified as the target for sending messages. - The phone number specified as the message sending target wasn't issued in LINE notification message service target country. For more information, see [Conditions for sending LINE notification messages](/docs/partner-docs/line-notification-messages/technical-specs/#conditions-for-sending-line-notification-messages). - The LINE user associated with the phone number specified as the message sending target has [refused to receive LINE notification messages](/docs/partner-docs/line-notification-messages/technical-specs/#how-to-consent-for-line-notification-messages). - The LINE user associated with the phone number specified as the message sending target hasn't agreed to LINE's Privacy Policy (revised in March 2022 or later). |

  For more information, see [Status codes](/reference/messaging-api/#status-codes) and [Error responses](/reference/messaging-api/#error-responses) in the Messaging API reference.
  :::

  :::reference-code
  *Example error response*

    ::::code-tabs
      :::::tab{lang="json"}
      ```json
      // If you specify a template that doesn't exist or that you aren't authorized to use (400 Bad Request)
      {
        "message": "Invalid templateKey: reserve_004",
        "details": [
          {
            "message": "The specified template doesn't exist, or you don't have the permission",
            "property": "templateKey"
          }
        ]
      }

      // If you specify a non-existent item (400 Bad Request)
      {
        "message": "The request body has 1 invalid key(s).",
        "details": [
          {
            "message": "The specified item key does not exist: datetime_000",
            "property": "body.items[0].itemKey"
          }
        ]
      }

      // If you specify the duplicate items (400 Bad Request)
      {
        "message": "The request body has 1 error(s)",
        "details": [
          {
            "message": "Duplicate itemKey in items or between emphasizedItem and items are not allowed: date_002_ja",
            "property": "body.emphasizedItem.itemKey"
          }
        ]
      }

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

      // If you don't have permission to send LINE notification messages (template) (403 Forbidden)
      {
        "message": "Access to this API is not available for your account"
      }

      // If sending a LINE notification message fails (422 Unprocessable Entity)
      {
        "message": "Failed to send messages"
      }
      ```
      :::::
    ::::
  :::
::

### Get number of sent LINE notification messages (template)

::reference-with-code
  :::reference-content
  Gets the number of LINE notification messages (template) sent using the [Send a LINE notification message (template)](/reference/line-notification-messages/#send-line-notification-message-template) endpoint.

  For more information, see [Get the number of sent LINE notification messages](/docs/partner-docs/line-notification-messages/technical-specs/#get-number-of-sent-line-notification-messages) in the LINE notification messages documentation.
  :::

  :::reference-code
  *Example request*

    ::::code-tabs
      :::::tab{lang="shell"}
      ```sh
      curl -v -X GET 'https://api.line.me/v2/bot/message/delivery/pnp/templated?date=20240916' \
      -H 'Authorization: Bearer {channel_access_token}'
      ```
      :::::
    ::::
  :::
::

#### HTTP request

`GET https://api.line.me/v2/bot/message/delivery/pnp/templated`

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

  - Format: `yyyyMMdd` (Example:`20240916`)
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
