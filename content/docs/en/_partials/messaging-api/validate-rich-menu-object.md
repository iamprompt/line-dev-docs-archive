---
title: Validate Rich Menu Object
navigation: true
description: ''
meta: '{}'
path: /en/_partials/messaging-api/validate-rich-menu-object
__hash__: QOwX5QP8ejGG40yYpHyJMfyL8kOtlDH-BkFyZvC4IY8
seo:
  description: ''
---

### Validate rich menu object

:api-endpoint{protocol="post" endpoint="https://api.line.me/v2/bot/richmenu/validate"}::reference-with-code
  :::reference-content
  Validate a rich menu object.

  You can verify that a [rich menu object](#rich-menu-object) is valid as a request body for [creating rich menu](#create-rich-menu).
  :::

  :::reference-code
  *Request example*

    ::::code-tabs
      :::::tab{lang="shell"}
      ```sh
      curl -v -X POST https://api.line.me/v2/bot/richmenu/validate \
      -H 'Authorization: Bearer {channel access token}' \
      -H 'Content-Type: application/json' \
      -d \
      '{
          "size": {
            "width": 2500,
            "height": 1686
          },
          "selected": false,
          "name": "Nice rich menu",
          "chatBarText": "Tap to open",
          "areas": [
            {
              "bounds": {
                "x": 0,
                "y": 0,
                "width": 2500,
                "height": 1686
              },
              "action": {
                "type": "postback",
                "data": "action=buy&itemid=123"
              }
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

#### Request header

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

Specify a [rich menu object](#rich-menu-object) you want to validate.

#### Response

::reference-with-code
  :::reference-content
  If the request body is valid as a rich menu object, returns the `200` HTTP status code and an empty JSON object.
  :::

  :::reference-code
  *Response example*

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
  | `400` | An invalid rich menu object is specified. |

  For more information, see [Status codes](#status-codes) and [Error responses](#error-responses) in the [Common specifications](#common-specifications) section.
  :::

  :::reference-code
  *Example error response*

    ::::code-tabs
      :::::tab{lang="json"}
      ```json
      // If you specify a rich menu object that doesn't have a required JSON key for the rich menu object (400 Bad Request)
      {
        "message": "The request body has 1 error(s)",
        "details": [
          {
            "message": "must be specified",
            "property": "name"
          }
        ]
      }

      // If you specify an invalid scheme for a URI action (400 Bad Request)
      {
        "message": "The request body has 1 error(s)",
        "details": [
          {
            "message": "invalid uri",
            "property": "areas[0].action.uri"
          }
        ]
      }
      ```
      :::::
    ::::
  :::
::
