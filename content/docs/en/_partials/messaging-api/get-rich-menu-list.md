---
title: Get Rich Menu List
navigation: true
description: ''
meta: '{}'
path: /en/_partials/messaging-api/get-rich-menu-list
__hash__: n3hxtwW65iX6LTTrTTvJyNBTGhVSp6bFmWDmrGF_EeA
seo:
  description: ''
---

### Get rich menu list

:api-endpoint{protocol="get" endpoint="https://api.line.me/v2/bot/richmenu/list"}::reference-with-code
  :::reference-content
  Gets a list of the rich menu response object of all rich menus created by [Create a rich menu](#create-rich-menu).

    ::::admonition{title="Note" type="note"}
    You can't retrieve rich menus created with LINE Official Account Manager.
    ::::
  :::

  :::reference-code
  *Example request*

    ::::code-tabs
      :::::tab{lang="shell"}
      ```sh
      curl -v -X GET https://api.line.me/v2/bot/richmenu/list \
      -H 'Authorization: Bearer {channel access token}'
      ```
      :::::
    ::::
  :::
::

#### Rate limit

10 requests per second

For more information on rate limits, see [Rate limits](#rate-limits).

#### Request headers

::parameter-table
  :::parameter-table-entry{required="true"}
  #undefined
  Authorization

  Bearer `{channel access token}`
  :::
::

#### Response

::reference-with-code
  :::reference-content
  Returns status code `200` and a JSON object with the following information.

    ::::parameter-table
      :::::parameter-table-entry
      #undefined
      richmenus

      #undefined
      Array

      Array of [rich menu response objects](#rich-menu-response-object)
      :::::
    ::::
  :::

  :::reference-code
  *Example response*

    ::::code-tabs
      :::::tab{lang="json"}
      ```json
      {
        "richmenus": [
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
        ]
      }
      ```
      :::::
    ::::
  :::
::

#### Error response

For more information, see [Status codes](#status-codes) and [Error responses](#error-responses) in the [Common specifications](#common-specifications) section.
