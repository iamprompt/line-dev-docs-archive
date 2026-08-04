---
title: Unlink Rich Menu
navigation: true
description: ''
meta: '{}'
path: /en/_partials/messaging-api/unlink-rich-menu
__hash__: akZ4Yt8EgcMFZffa-9hq6yN9Iz3wmTpgEj5zjyN-1n4
seo:
  description: ''
---

### Unlink rich menu from user

:api-endpoint{protocol="delete" endpoint="https://api.line.me/v2/bot/user/{userId}/richmenu"}::reference-with-code
  :::reference-content
  API that removes the per-user rich menu linked to a specified user.

  #### Conditions for unlinking rich menu

  You can unlink a rich menu from users who have added your LINE Official Account as a friend.

  If you try to unlink a rich menu from the following users, status code `200` will be returned, but the rich menu won't be unlinked from the user:

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
      curl -v -X DELETE https://api.line.me/v2/bot/user/{userId}/richmenu \
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

  | Code  | Description                      |
  | ----- | -------------------------------- |
  | `400` | An invalid user ID is specified. |

  For more information, see [Status codes](#status-codes) and [Error responses](#error-responses) in the [Common specifications](#common-specifications) section.
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
      ```
      :::::
    ::::
  :::
::
