---
title: Link Rich Menu
navigation: true
description: ''
meta: '{}'
path: /en/_partials/messaging-api/link-rich-menu
__hash__: 18y0cUsXSdTmrrgsby9tN-0QSTbSucJKCyFazBMtNhs
seo:
  description: ''
---

### Link rich menu to user

:api-endpoint{protocol="post" endpoint="https://api.line.me/v2/bot/user/{userId}/richmenu/{richMenuId}"}::reference-with-code
  :::reference-content
  Links a rich menu to a user. Only one rich menu can be linked to a user at one time. If a user already has a rich menu linked, calling this endpoint replaces the existing rich menu with the one specified in your request.

  The rich menu is displayed in the following order of priority (highest to lowest):

  1. The per-user rich menu set with the Messaging API
  2. The [default rich menu set with the Messaging API](#set-default-rich-menu)
  3. The [default rich menu set with LINE Official Account Manager](/docs/messaging-api/rich-menus-overview/#creating-a-rich-menu-with-the-line-manager)

  #### Conditions for linking rich menu

  You can link a rich menu to users who have added your LINE Official Account as a friend.

  If you try to link a rich menu to the following users, status code `200` will be returned, but the rich menu won't be linked to the user:

  - Users who deleted their LINE accounts
  - Users who blocked your LINE Official Account
  - Users who haven't added your LINE Official Account as a friend
  - User IDs that don't exist in the channel such as those that were taken from another channel under a different provider
  :::

  :::reference-code
  *Example request*

    ::::code-tabs
      :::::tab{lang="shell"}
      ```sh
      curl -v -X POST https://api.line.me/v2/bot/user/{userId}/richmenu/{richMenuId} \
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

  :::parameter-table-entry{required="true"}
  #undefined
  userId

  User ID. Found in the `source` object of [webhook event objects](#webhook-event-objects). Do not use the LINE ID used in LINE.
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

  | Code  | Description                                                                                                                      |
  | ----- | -------------------------------------------------------------------------------------------------------------------------------- |
  | `400` | Couldn't link the rich menu. Consider these reasons:- An invalid user ID is specified. - There is no image set to the rich menu. |
  | `404` | A non-existent rich menu is specified.                                                                                           |

  For more information, see [Status codes](#status-codes) and [Error responses](#error-responses) in the [Common specifications](#common-specifications) section.

  The rich menu isn't unlinked if an error is returned.
  :::

  :::reference-code
  *Example error response*

    ::::code-tabs
      :::::tab{lang="json"}
      ```json
      // If you specify an invalid user ID (400 Bad Request)
      {
        "message": "The value for the 'userId' parameter is invalid"
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
