---
title: Get Rich Menu
navigation: true
description: ''
meta: '{}'
path: /en/_partials/messaging-api/get-rich-menu
__hash__: MC4diB6e1Oy9AmI_0vgO7xAFUIEZgbkZj5xpwoTNIbc
seo:
  description: ''
---

### Get rich menu

:api-endpoint{protocol="get" endpoint="https://api.line.me/v2/bot/richmenu/{richMenuId}"}::reference-with-code
  :::reference-content
  Gets a rich menu via a rich menu ID.
  :::

  :::reference-code
  *Example request*

    ::::code-tabs
      :::::tab{lang="shell"}
      ```sh
      curl -v -X GET https://api.line.me/v2/bot/richmenu/{richMenuId} \
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
  richMenuId

  ID of a rich menu
  :::
::

#### Response

::reference-with-code
  :::reference-content
  Returns status code `200` and a [rich menu response object](#rich-menu-response-object).
  :::

  :::reference-code
  *Example response*

    ::::code-tabs
      :::::tab{lang="json"}
      ```json
      {
        "richMenuId": "{richMenuId}",
        "name": "Nice rich menu",
        "size": {
          "width": 2500,
          "height": 1686
        },
        "chatBarText": "Tap to open",
        "selected": false,
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

  | Code  | Description                            |
  | ----- | -------------------------------------- |
  | `404` | A non-existent rich menu is specified. |

  For more information, see [Status codes](#status-codes) and [Error responses](#error-responses) in the [Common specifications](#common-specifications) section.
  :::

  :::reference-code
  *Example error response*

    ::::code-tabs
      :::::tab{lang="json"}
      ```json
      // If you specify a non-existent rich menu (404 Not Found)
      {
        "message": "Not found"
      }
      ```
      :::::
    ::::
  :::
::
