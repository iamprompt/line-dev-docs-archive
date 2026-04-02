---
title: Set Default Rich Menu
navigation: true
description: ''
meta: '{}'
path: /en/_partials/messaging-api/set-default-rich-menu
__hash__: bQhu2G1xxd2aYFSLQGwSc04g5CVZ5Ka3QqdODV0Kg3g
seo:
  description: ''
---

### Set default rich menu

:api-endpoint{protocol="post" endpoint="https://api.line.me/v2/bot/user/all/richmenu/{richMenuId}"}::reference-with-code
  :::reference-content
  Sets the default rich menu. The default rich menu is displayed to all users who open the chat screen of the LINE Official Account. If a default rich menu has already been set, calling this endpoint replaces the current default rich menu with the one specified in your request.

  The rich menu is displayed in the following order of priority (highest to lowest):

  1. [The per-user rich menu set with the Messaging API](#link-rich-menu-to-user)
  2. The default rich menu set with the Messaging API
  3. The [default rich menu set with LINE Official Account Manager](/docs/messaging-api/rich-menus-overview/#creating-a-rich-menu-with-the-line-manager)
  :::

  :::reference-code
  *Example request*

    ::::code-tabs
      :::::tab{lang="shell"}
      ```sh
      curl -v -X POST https://api.line.me/v2/bot/user/all/richmenu/{richMenuId} \
      -H "Authorization: Bearer {channel access token}"
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

#### Error Response

::reference-with-code
  :::reference-content
  Returns the following HTTP status code and an error response:

  | Code  | Description                             |
  | ----- | --------------------------------------- |
  | `400` | There is no image set to the rich menu. |
  | `404` | A non-existent rich menu is specified.  |

  For more information, see [Status codes](#status-codes) and [Error responses](#error-responses) in the [Common specifications](#common-specifications) section.
  :::

  :::reference-code
  *Example error response*

    ::::code-tabs
      :::::tab{lang="json"}
      ```json
      // If there is no image set to the rich menu (400 Bad Request)
      {
        "message": "must upload richmenu image before applying it to user",
        "details": []
      }

      // If you specify a non-existent rich menu (404 Not Found)
      {
        "message": "Not found"
      }
      ```
      :::::
    ::::
  :::
::
