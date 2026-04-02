---
title: Create Rich Menu Alias
navigation: true
description: ''
meta: '{}'
path: /en/_partials/messaging-api/create-rich-menu-alias
__hash__: DjLTJM88Wb14P-6pETvjXIE1n4cvah7ySjF7vxTcKN4
seo:
  description: ''
---

### Create rich menu alias

:api-endpoint{protocol="post" endpoint="https://api.line.me/v2/bot/richmenu/alias"}::reference-with-code
  :::reference-content
  Creates a rich menu alias.

  To create a rich menu alias, make sure to finish these tasks in advance. For more information, see [Switch between tabs on rich menus](/docs/messaging-api/switch-rich-menus/) in the Messaging API documentation.

  - [Create a rich menu](#create-rich-menu)
  - [Upload a rich menu image](#upload-rich-menu-image)

  Using the Messaging API, you can create up to 1000 rich menu aliases per one LINE Official Account.
  :::

  :::reference-code
  *Request example*

    ::::code-tabs
      :::::tab{lang="shell"}
      ```sh
      # Example of creating rich menu alias A
      curl -v -X POST https://api.line.me/v2/bot/richmenu/alias \
      -H 'Authorization: Bearer {channel access token}' \
      -H 'Content-Type: application/json' \
      -d \
      '{
          "richMenuAliasId": "richmenu-alias-a",
          "richMenuId": "richmenu-862e6ad6c267d2ddf3f42bc78554f6a4"
      }'

      # Example of creating rich menu alias B
      curl -v -X POST https://api.line.me/v2/bot/richmenu/alias \
      -H 'Authorization: Bearer {channel access token}' \
      -H 'Content-Type: application/json' \
      -d \
      '{
          "richMenuAliasId":"richmenu-alias-b",
          "richMenuId":"richmenu-88c05ef6921ae53f8b58a25f3a65faf7"
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

::parameter-table
  :::parameter-table-entry{required="true"}
  #undefined
  richMenuAliasId

  #undefined
  String

  Rich menu alias ID, which can be any ID, unique for each channel.

  - Max character limit: 32
  - Supported character types: Half-width alphanumeric characters (`a-z`, `0-9`), underscore (`_`), and hyphen (`-`)
  :::

  :::parameter-table-entry{required="true"}
  #undefined
  richMenuId

  #undefined
  String

  The rich menu ID to be associated with the rich menu alias.

    ::::admonition{title="About rich menus that can be associated" type="note"}
    Rich menu aliases can only be associated with rich menus created in the same channel.
    ::::
  :::
::

#### Response

::reference-with-code
  :::reference-content
  Returns the `200` HTTP status code and an empty JSON object.
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

  | Code  | Description                                                                                                                                                                                                                                                                                                                                                              |
  | ----- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
  | `400` | Couldn't create the rich menu alias. Consider these reasons:- A rich menu that doesn't exist or a rich menu without a set image is specified. - An invalid rich menu alias ID is specified. - An invalid rich menu ID is specified. - Reached the maximum number of rich menu aliases you can create. - The same ID as an already existing rich menu alias is specified. |

  For more information, see [Status codes](#status-codes) and [Error responses](#error-responses) in the [Common specifications](#common-specifications) section.
  :::

  :::reference-code
  *Error response example*

    ::::code-tabs
      :::::tab{lang="json"}
      ```json
      // If you specify a rich menu that doesn't exist or a rich menu ID without a set image (400 Bad Request)
      {
          "message": "richmenu not found",
          "details": []
      }

      // If you specify an invalid rich menu ID (400 Bad Request)
      {
          "message": "The request body has 1 error(s)",
          "details": [
              {
                  "message": "invalid richMenuId",
                  "property": "richMenuId"
              }
          ]
      }

      // If you specify the same rich menu alias ID as an existing rich menu alias (400 Bad Request)
      {
          "message": "conflict richmenu alias id",
          "details": []
      }
      ```
      :::::
    ::::
  :::
::
