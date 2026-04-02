---
title: Bulk Link Rich Menu
navigation: true
description: ''
meta: '{}'
path: /en/_partials/messaging-api/bulk-link-rich-menu
__hash__: q9S4hgTTEP_3QMtuDn7nlaDH-76wAoIH4adHySDqu6A
seo:
  description: ''
---

### Link rich menu to multiple users

:api-endpoint{protocol="post" endpoint="https://api.line.me/v2/bot/richmenu/bulk/link"}::reference-with-code
  :::reference-content
  Links a rich menu to multiple users.

  The rich menu is displayed in the following order of priority (highest to lowest):

  1. The per-user rich menu set with the Messaging API
  2. The [default rich menu set with the Messaging API](#set-default-rich-menu)
  3. The [default rich menu set with LINE Official Account Manager](/docs/messaging-api/rich-menus-overview/#creating-a-rich-menu-with-the-line-manager)

  Unlike [linking a rich menu to a user](#link-rich-menu-to-user), this request is processed asynchronously in the background. Normally, the process is completed within a few seconds.

  Even if the status code `202` is returned, the rich menu may not be linked. To verify whether the request was processed successfully, [get the rich menu ID linked to the users](/reference/messaging-api/#get-rich-menu-id-of-user) and check if the rich menu is actually linked to the users.

  The rich menu isn't linked to any user if an [error response](#bulk-link-rich-menu-error-response) is returned.

  #### Conditions for linking rich menu

  You can link a rich menu to users who have added your LINE Official Account as a friend. If status code `202` is returned, the rich menu is linked to the users specified in the request.

  Even if status code `202` is returned, the following users may not be linked to the rich menu because they aren't friends with your LINE Official Account:

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
      curl -v -X POST https://api.line.me/v2/bot/richmenu/bulk/link \
      -H "Authorization: Bearer {channel access token}" \
      -H "Content-Type: application/json" \
      -d '{
        "richMenuId":"{richMenuId}",
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
  richMenuId

  #undefined
  String

  ID of a rich menu
  :::

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

  | Code  | Description                                                                                                                                                              |
  | ----- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
  | `400` | Couldn't link the rich menu. Consider these reasons:- An invalid user ID is specified. - An invalid rich menu ID is specified. - There is no image set to the rich menu. |
  | `404` | A non-existent rich menu is specified.                                                                                                                                   |

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

      // If you specify a non-existent rich menu (404 Not Found)
      {
          "message": "richmenu not found",
          "details": []
      }
      ```
      :::::
    ::::
  :::
::
