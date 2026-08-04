---
title: Validate Message Objects Of Push Message
navigation: true
description: ''
meta: '{}'
path: /en/_partials/messaging-api/validate-message-objects-of-push-message
__hash__: SoCwaitXYBMlxH1amEu3HUG_iNIAbnJ9bTnLAsE6o24
seo:
  description: ''
---

### Validate message objects of a push message

:api-endpoint{protocol="post" endpoint="https://api.line.me/v2/bot/message/validate/push"}::reference-with-code
  :::reference-content
  You can validate that an array of [message objects](#message-objects) is valid as a value for the `messages` property of the [request body](#send-push-message-request-body) for the [Send push message](#send-push-message) endpoint. This endpoint doesn't validate the values of the properties other than the `messages` property.
  :::

  :::reference-code
  *Example request*

    ::::code-tabs
      :::::tab{lang="shell"}
      ```sh
      curl -v -X POST https://api.line.me/v2/bot/message/validate/push \
      -H 'Authorization: Bearer {channel access token}' \
      -H 'Content-Type: application/json' \
      -d \
      '{
        "messages": [
          {
            "type": "text",
            "text": "Hello, world"
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
  Authorization

  Bearer `{channel access token}`
  :::

  :::parameter-table-entry{required="true"}
  #undefined
  Content-Type

  application/json
  :::
::

#### Request body

::parameter-table
  :::parameter-table-entry{required="true"}
  #undefined
  messages

  #undefined
  Array of objects

  Array of [message objects](#message-objects) to validate
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

  | Code  | Description                             |
  | ----- | --------------------------------------- |
  | `400` | An invalid message object is specified. |

  For more information, see [Status codes](#status-codes) and [Error responses](#error-responses) in [Common specifications](#common-specifications) section.
  :::

  :::reference-code
  *Error response example (If more message objects are specified than the maximum number)*

    ::::code-tabs
      :::::tab{lang="json"}
      ```json
      {
        "message": "The request body has 1 error(s)",
        "details": [
          {
            "message": "Size must be between 1 and 5",
            "property": "messages"
          }
        ]
      }
      ```
      :::::
    ::::

  *Error response example (If more characters are specified in a text message than the maximum number of characters)*

    ::::code-tabs
      :::::tab{lang="json"}
      ```json
      {
        "message": "The request body has 1 error(s)",
        "details": [
          {
            "message": "Length must be between 0 and 5000",
            "property": "messages[0].text"
          }
        ]
      }
      ```
      :::::
    ::::
  :::
::
