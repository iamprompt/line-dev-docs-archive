---
title: Get Follower Ids
navigation: true
description: ''
meta: '{}'
path: /en/_partials/messaging-api/get-follower-ids
__hash__: uhYY4wcjRUR_CGEh3h2HojVRnOH_w_HaJ1nnYghc9Gg
seo:
  description: ''
---

### Get a list of users who added your LINE Official Account as a friend

:api-endpoint{protocol="get" endpoint="https://api.line.me/v2/bot/followers/ids"}::reference-with-code
  :::reference-content
    ::::admonition{title="Note" type="note"}
    This feature is available only for verified or :glossary-tooltip[[premium accounts](/glossary/#premium-account)]{glossary-id="premium-account"}. For more information about account types, see the [Account Types of LINE Official Account](https://www.linebiz.com/jp-en/service/line-official-account/account-type/){rel="[\"nofollow\"]"} page on LINE for Business.
    ::::

  Gets the list of :glossary-tooltip[[User IDs](/glossary/#user-id)]{glossary-id="user-id"} of users who have added your LINE Official Account as a friend.

  To get all the user IDs, you need to repeat the request until the `next` property is no longer included in the [response](#get-follower-ids-response). Repeat the request by specifying the `next` property included in the response as `start` of the next request.

  #### Restrictions on user IDs that can be obtained

  These users' IDs won't be included in the obtained list of user IDs:

  - Users who deleted their LINE accounts.
  - Users who blocked your LINE Official Account after adding it as a friend.
  - Users who haven't consented to their profile information being obtained. For more information, see [Consent on getting user profile information](/docs/messaging-api/user-consent/) in the Messaging API documentation.

  Therefore, the actual number of user IDs obtained with this endpoint may not be consistent with the number of friends displayed on your LINE Official Account business profile or [LINE Official Account Manager](https://manager.line.biz/){rel="[\"nofollow\"]"}.

    ::::admonition
    ---
    title: You may not be able to use the user IDs obtained
    type: note
    ---
    Even if you send messages to the user IDs obtained with this endpoint, delivery may fail depending on user action. These are the main reasons for failure:

    - User blocked the target LINE Official Account between the time the user ID was obtained and the time you attempted to send a message.
    - User [deleted LINE account](https://guide.line.me/ja/account-and-settings/account-and-profile/line-account-delete.html){rel="[\"nofollow\"]"} after adding the target LINE Official Account as a friend.
    ::::
  :::

  :::reference-code
  *Example request*

    ::::code-tabs
      :::::tab{lang="shell"}
      ```sh
      curl -v -X GET https://api.line.me/v2/bot/followers/ids \
      -H 'Authorization: Bearer {channel access token}' \
      -d 'limit=1000' \
      -d 'start=yANU9IA...' \
      -G
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

#### Query parameters

::parameter-table
  :::parameter-table-entry{optional=""}
  #undefined
  limit

  #undefined
  Number

  The maximum number of user IDs to retrieve in a single request. The default value is `300`.  

  Max value: `1000`
  :::

  :::parameter-table-entry{optional=""}
  #undefined
  start

  #undefined
  String

  Value of the continuation token found in the `next` property of the JSON object returned in the [response](#get-follower-ids-response). Include this parameter to get the next array of user IDs. If you can't get all the user IDs in a single request, specify this parameter to get the remaining user IDs.
  :::
::

#### Response

::reference-with-code
  :::reference-content
  Returns status code `200` and a JSON object with the following properties.

    ::::parameter-table
      :::::parameter-table-entry
      #undefined
      userIds

      #undefined
      Array of strings

      An array of strings indicating user IDs of users that have added the LINE Official Account as a friend. Due to the [restrictions on user IDs that can be obtained](#get-follower-ids-obtainable-ids), the number of user IDs in the `userIds` property may not reach the maximum number specified by `limit`, even if the `next` property is returned.  

      Max: The number specified by `limit`
      :::::

      :::::parameter-table-entry{annotation="Not always included"}
      #undefined
      next

      #undefined
      String

      A continuation token to get the next user IDs. Returned only when there are remaining user IDs that weren't returned in the `userIds` property in the previous request.

      The continuation token expires in 24 hours (86,400 seconds).
      :::::
    ::::
  :::

  :::reference-code
  *Example response*

    ::::code-tabs
      :::::tab{lang="json"}
      ```json
      {
        "userIds": ["U4af4980629...", "U0c229f96c4...", "U95afb1d4df..."],
        "next": "yANU9IA..."
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

  | Code  | Description                                                                                                                                                                    |
  | ----- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
  | `400` | An invalid continuation token is specified.                                                                                                                                    |
  | `403` | Not authorized to use this endpoint. Only available for verified accounts or :glossary-tooltip[[premium accounts](/glossary/#premium-account)]{glossary-id="premium-account"}. |

  For more information, see [Status codes](#status-codes) and [Error responses](#error-responses) in [Common specifications](#common-specifications) section.
  :::

  :::reference-code
  *Error response example*

    ::::code-tabs
      :::::tab{lang="json"}
      ```json
      // If you specify an invalid continuation token, such as expired (400 Bad Request)
      {
        "message": "Invalid start param"
      }
      ```
      :::::
    ::::
  :::
::
