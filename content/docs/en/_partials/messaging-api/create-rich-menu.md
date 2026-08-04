---
title: Create Rich Menu
navigation: true
description: ''
meta: '{}'
path: /en/_partials/messaging-api/create-rich-menu
__hash__: SdPSay2Sq_bbza8sTqQWAfKFvyZ2Tb2Se4NkSU2tBzA
seo:
  description: ''
---

### Create rich menu

:api-endpoint{protocol="post" endpoint="https://api.line.me/v2/bot/richmenu"}::reference-with-code
  :::reference-content
  Creates a rich menu.

  You must [upload a rich menu image](#upload-rich-menu-image), and [set the rich menu as the default rich menu](#set-default-rich-menu) or [link the rich menu to a user](#link-rich-menu-to-user) for the rich menu to be displayed. You can create up to 1000 rich menus for one LINE Official Account with the Messaging API.

    ::::admonition{title="Before creating a rich menu" type="tip"}
    There is also an endpoint for [validating rich menu object](#validate-rich-menu-object).
    ::::
  :::

  :::reference-code
  *Example request*

    ::::code-tabs
      :::::tab{lang="shell"}
      ```sh
      curl -v -X POST https://api.line.me/v2/bot/richmenu \
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

100 requests per hour

Creating and deleting rich menus using the :glossary-tooltip[[LINE Official Account Manager](/glossary/#line-oa-manager)]{glossary-id="line-oa-manager"} isn't subject to this restriction.

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

Specify a [rich menu object](#rich-menu-object) to be displayed as a rich menu.

#### Response

::reference-with-code
  :::reference-content
  Returns status code `200` and a JSON object with the following information.

    ::::parameter-table
      :::::parameter-table-entry
      #undefined
      richMenuId

      #undefined
      String

      ID of a rich menu. Used when [uploading a rich menu image](#upload-rich-menu-image).
      :::::
    ::::
  :::

  :::reference-code
  *Example response*

    ::::code-tabs
      :::::tab{lang="json"}
      ```json
      {
        "richMenuId": "{richMenuId}"
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

  | Code  | Description                                                                                                                                                                           |
  | ----- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
  | `400` | Couldn't create a rich menu. Consider these reasons:- An invalid rich menu object is specified. - The maximum number of rich menus that can be created has been reached (up to 1000). |

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
