---
title: Get Group Member Ids
navigation: true
description: ''
meta: '{}'
path: /en/_partials/messaging-api/get-group-member-ids
__hash__: xv39pXeN8bXg3-EvkHJ3gg7VZ5KnX0EKOcscxnwm4F4
seo:
  description: ''
---

### Get group chat member user IDs

:api-endpoint{protocol="get" endpoint="https://api.line.me/v2/bot/group/{groupId}/members/ids"}::reference-with-code
  :::reference-content
    ::::admonition{title="Note" type="note"}
    This feature is available only for verified or :glossary-tooltip[[premium accounts](/glossary/#premium-account)]{glossary-id="premium-account"}. For more information about account types, see the [Account Types of LINE Official Account](https://www.linebiz.com/jp-en/service/line-official-account/account-type/){rel="[\"nofollow\"]"} page on LINE for Business.
    ::::

  Gets the user IDs of the members of a group chat that the LINE Official Account is in. This includes the user IDs of users who have not added the LINE Official Account as a friend or have blocked the LINE Official Account.

    ::::admonition{title="You can also get user IDs from webhooks" type="tip"}
    When a user joins a group chat or sends a message in a group chat, a webhook is sent to the bot server. The webhook includes the user ID, so you can get the user ID without making an API request. For more information, see [Get a user ID from webhook](/docs/messaging-api/getting-user-ids/#get-user-ids-in-webhook) in the Messaging API documentation.
    ::::
  :::

  :::reference-code
  *Example request*

    ::::code-tabs
      :::::tab{lang="shell"}
      ```sh
      curl -v -X GET 'https://api.line.me/v2/bot/group/{groupId}/members/ids?start={continuationToken}' \
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
  groupId

  Group ID. Found in the `source` object of [webhook event objects](#webhook-event-objects).
  :::
::

#### Query parameters

::parameter-table
  :::parameter-table-entry{optional=""}
  #undefined
  start

  Value of the continuation token found in the `next` property of the JSON object returned in the [response](#get-group-member-user-ids-response). Include this parameter to get the next array of user IDs for the members of the group.
  :::
::

#### Response

::reference-with-code
  :::reference-content
  Returns status code `200` and a JSON object with the following properties.

    ::::parameter-table
      :::::parameter-table-entry
      #undefined
      memberIds

      #undefined
      Array of strings

      List of user IDs of members in the group chat. Only users of LINE for iOS and LINE for Android are included in `memberIds`. For more information, see [Consent on getting user profile information](/docs/messaging-api/user-consent/).  

      Max: 100 user IDs
      :::::

      :::::parameter-table-entry{annotation="Not always included"}
      #undefined
      next

      #undefined
      String

      A continuation token to get the next array of user IDs of the members in the group chat. Returned only when there are remaining user IDs that were not returned in `memberIds` in the original request.

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
        "memberIds": ["U4af4980629...", "U0c229f96c4...", "U95afb1d4df..."],
        "next": "jxEWCEEP..."
      }
      ```
      :::::
    ::::
  :::
::

#### Error Response

::reference-with-code
  :::reference-content
  Returns the following HTTP status code and an error response:

  | Code  | Description                                                                                                                                                                    |
  | ----- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
  | `400` | Problem with the request. Consider these reasons:- An invalid group ID is specified. - An invalid continuation token is specified for the `start` property.                    |
  | `403` | Not authorized to use this endpoint. Only available for verified accounts or :glossary-tooltip[[premium accounts](/glossary/#premium-account)]{glossary-id="premium-account"}. |
  | `404` | A non-existent group or a group that your LINE Official Account doesn't participate in is specified.                                                                           |

  For more information, see [Status codes](#status-codes) and [Error responses](#error-responses) in the [Common specifications](#common-specifications) section.
  :::

  :::reference-code
  *Example error response*

    ::::code-tabs
      :::::tab{lang="json"}
      ```json
      // If you specify an invalid group ID (400 Bad Request)
      {
        "message": "The value for the 'groupId' parameter is invalid"
      }

      // If you specify an invalid continuation token, such as expired (400 Bad Request)
      {
        "message": "Invalid start param"
      }

      // If you specify a non-existent group or a group that your LINE Official Account doesn't participate in (404 Not Found)
      {
        "message": "Not found"
      }
      ```
      :::::
    ::::
  :::
::
