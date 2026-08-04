---
title: Loading Indicator
navigation: true
description: ''
meta: '{}'
path: /en/_partials/messaging-api/loading-indicator
__hash__: LwutXPiLt2JDgp9SIiR5p8TbpyTOtO6HbdaO_WuobI8
seo:
  description: ''
---

### Display a loading animation

:api-endpoint{protocol="post" endpoint="https://api.line.me/v2/bot/chat/loading/start"}::reference-with-code
  :::reference-content
  Display a loading animation in one-on-one chats between users and LINE Official Accounts.

  The loading animation will automatically disappear after the specified number of seconds (5 to 60 seconds) has elapsed or when a new message arrives from your LINE Official Account.

  The loading animation is only displayed when the user is viewing the chat screen with your LINE Official Account. If you request to display the loading animation when the user isn't viewing the chat screen, no notification will be displayed. Even if the user opens the chat screen later, the animation won't be displayed.

  If you request to display the loading animation again while it is still visible, the animation will continue to be displayed and the time until it disappears will be overridden by the number of seconds specified in the second request.

  A loading animation will be displayed on the following versions of LINE:

  - LINE for iOS or Android: 13.16.0 or later

  For more information, see [Display a loading animation](/docs/messaging-api/use-loading-indicator/) in the Messaging API documentation.
  :::

  :::reference-code
  *Example request*

    ::::code-tabs
      :::::tab{lang="shell"}
      ```sh
      curl -v -X POST https://api.line.me/v2/bot/chat/loading/start \
      -H 'Content-Type: application/json' \
      -H 'Authorization: Bearer {channel access token}' \
      -d '{
          "chatId": "U4af4980629...",
          "loadingSeconds": 5
      }'
      ```
      :::::
    ::::
  :::
::

#### Rate limit

100 requests per second

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
  chatId

  #undefined
  String

  User ID of the target user for whom the loading animation is to be displayed.

  For more information on how to get user IDs, see [Get user IDs](/docs/messaging-api/getting-user-ids/) in the Messaging API documentation.
  :::

  :::parameter-table-entry{optional=""}
  #undefined
  loadingSeconds

  #undefined
  Number

  Number of seconds to display a loading animation. You can specify a any one of `5`, `10`, `15`, `20`, `25`, `30`, `35`, `40`, `45`, `50`, `55`, or `60`.

  The default value is `20`.
  :::
::

#### Response

::reference-with-code
  :::reference-content
  Returns status code `202` and an empty JSON object.

  If you request to display a loading animation to the following user, the status code `202` will be returned, but the loading animation won't be displayed:

  - Users who aren't opening a chat screen with your LINE Official Account
  - Users who haven't added your LINE Official Account as a friend
  - Users who have blocked your LINE Official Account
  - Users who deleted their LINE accounts
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

  | Code  | Description                                                                                                                                                                                        |
  | ----- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
  | `400` | Couldn't display the loading animation. Consider these reasons:- An invalid number of seconds is specified. - An invalid user ID is specified. - A group chat or a multi-person chat is specified. |

  For more information, see [Status codes](#status-codes) and [Error responses](#error-responses) in the [Common specifications](#common-specifications) section.

  No loading animation is displayed if an error is returned.
  :::

  :::reference-code
  *Example error response*

    ::::code-tabs
      :::::tab{lang="json"}
      ```json
      // If you specify an invalid number of seconds (400 Bad Request)
      {
        "message": "The request body has 2 error(s)",
        "details": [
          {
            "message": "Must be between 5 and 60",
            "property": "loadingSeconds"
          },
          {
            "message": "must be a multiple of five",
            "property": "loadingSeconds"
          }
        ]
      }

      // If you specify a group chat or a multi-person chat as the destination (400 Bad Request)
      {
        "message": "The request body has 1 error(s)",
        "details": [
          {
            "message": "Only user id is acceptable, please confirm if there are any group/room ids or illegal ids.",
            "property": "chatId"
          }
        ]
      }
      ```
      :::::
    ::::
  :::
::
