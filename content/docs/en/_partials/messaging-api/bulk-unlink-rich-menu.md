---
title: Bulk Unlink Rich Menu
navigation: true
description: ''
meta: '{}'
path: /en/_partials/messaging-api/bulk-unlink-rich-menu
__hash__: PgLBhSXyksW_pwItEdKp6wALjodHKhR0NNKnrDetMok
seo:
  description: ''
---

### Unlink rich menus from multiple users

:api-endpoint{protocol="post" endpoint="https://api.line.me/v2/bot/richmenu/bulk/unlink"}::reference-with-code
  :::reference-content
  Unlinks rich menus from multiple users.

  Unlike [unlinking a rich menu from a user](#unlink-rich-menu-from-user), this request is processed asynchronously in the background. Normally, the process is completed within a few seconds.

  Even if status code `202` is returned, the rich menu may not be unlinked. To verify whether the request was processed successfully, [get the rich menu ID linked to the users](/reference/messaging-api/#get-rich-menu-id-of-user) and check if the unlinked rich menus are actually not linked to the users.

  The rich menu isn't unlinked from any user if an [error response](#bulk-unlink-rich-menu-error-response) is returned.

  #### Conditions for unlinking rich menu

  You can unlink a rich menu from users who have added your LINE Official Account as a friend. If status code `202` is returned, the rich menu is unlinked from the users specified in the request.

  Even if status code `202` is returned, the following users may not be unlinked from the rich menu because they aren't friends with your LINE Official Account:

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
      curl -v -X POST https://api.line.me/v2/bot/richmenu/bulk/unlink \
      -H "Authorization: Bearer {channel access token}" \
      -H "Content-Type: application/json" \
      -d '{
        "userIds":["{userId1}","{userId2}"]
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
  Content-Type

  application/json
  :::

  :::parameter-table-entry{required="true"}
  #undefined
  Authorization

  Bearer `{channel access token}`
  :::
::

#### Request body

::parameter-table
  :::parameter-table-entry{required="true"}
  #undefined
  userIds

  #undefined
  Array of strings

  Array of user IDs. Found in the `source` object of [webhook event objects](#webhook-event-objects). Do not use the LINE ID used in LINE.  

  Max: 500 user IDs
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
        "message": "The property, 'userIds[0]', in the request body is invalid (line: -, column: -)"
      }
      ```
      :::::
    ::::
  :::
::
