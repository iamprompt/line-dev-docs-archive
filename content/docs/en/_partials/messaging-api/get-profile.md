---
title: Get Profile
navigation: true
description: ''
meta: '{}'
path: /en/_partials/messaging-api/get-profile
__hash__: xH7jfny8ErUdt8m_HNtq8RchC_nsVr5YBCm3jrEoBig
seo:
  description: ''
---

### Get profile

:api-endpoint{protocol="get" endpoint="https://api.line.me/v2/bot/profile/{userId}"}::reference-with-code
  :::reference-content
  You can get the profile information of users who meet one of two conditions:

  - Users who have added your LINE Official Account as a friend
  - Users who haven't added your LINE Official Account as a friend but have sent a message to your LINE Official Account (except users who have blocked your LINE Official Account)

  You can only get the main profile information. You can't get the user's :glossary-tooltip[[subprofile](/glossary/#subprofile)]{glossary-id="subprofile"}.

    ::::admonition{title="Note" type="note"}
    You can't get the profile information of a user who has blocked your LINE Official Account.
    ::::

    ::::admonition
    ---
    title: Profile information of group chat members and multi-person chat members
    type: tip
    ---
    Use these endpoints to get profile information of group chat members or multi-person chat members.

    - [Get group chat member profile](#get-group-member-profile)
    - [Get multi-person chat member profile](#get-room-member-profile)
    ::::
  :::

  :::reference-code
  *Example request*

    ::::code-tabs
      :::::tab{lang="shell"}
      ```sh
      curl -v -X GET https://api.line.me/v2/bot/profile/{userId} \
      -H 'Authorization: Bearer {channel access token}'
      ```
      :::::
    ::::
  :::
::

#### API Playground

:api-playground{endpoint="/bot/profile/{userId}"}#### Rate limit

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

  User ID that is returned in a [webhook event object](#webhook-event-objects). Do not use the LINE ID found on LINE.
  :::
::

#### Response

::reference-with-code
  :::reference-content
  When the specified user ID is valid, status code `200` and a JSON object with the following information will be returned.

    ::::parameter-table
      :::::parameter-table-entry
      #undefined
      displayName

      #undefined
      String

      User's display name
      :::::

      :::::parameter-table-entry
      #undefined
      userId

      #undefined
      String

      User ID
      :::::

      :::::parameter-table-entry{annotation="Not always included"}
      #undefined
      language

      #undefined
      String

      User's language, as a [BCP 47](https://www.rfc-editor.org/info/bcp47/){rel="[\"nofollow\"]"} language tag. Not included in the response if the user hasn't yet consented to the LY Corporation Privacy Policy.  

      e.g. `en` for English.
      :::::

      :::::parameter-table-entry{annotation="Not always included"}
      #undefined
      pictureUrl

      #undefined
      String

      Profile image URL. "https" image URL. Not included in the response if the user doesn't have a profile image.
      :::::

      :::::parameter-table-entry{annotation="Not always included"}
      #undefined
      statusMessage

      #undefined
      String

      User's status message. Not included in the response if the user doesn't have a status message.
      :::::
    ::::
  :::

  :::reference-code
  *Example response*

    ::::code-tabs
      :::::tab{lang="json"}
      ```json
      {
        "displayName": "LINE taro",
        "userId": "U4af4980629...",
        "language": "en",
        "pictureUrl": "https://profile.line-scdn.net/ch/v2/p/uf9da5ee2b...",
        "statusMessage": "Hello, LINE!"
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

  | Code  | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
  | ----- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
  | `400` | An invalid user ID is specified.                                                                                                                                                                                                                                                                                                                                                                                                                                          |
  | `404` | Unable to get profile information. Consider these reasons:- Target user ID doesn't exist. - The user hasn't consented to their profile information being obtained. - The user hasn't added the target LINE Official Account as a friend. - The user blocked the target LINE Official Account after adding it as a friend.  For more information, see [Consent on getting user profile information](/docs/messaging-api/user-consent/) in the Messaging API documentation. |

  For more information, see [Status codes](#status-codes) and [Error responses](#error-responses) in the [Common specifications](#common-specifications) section.
  :::

  :::reference-code
  *Example error response*

    ::::code-tabs
      :::::tab{lang="json"}
      ```json
      // If you couldn't get profile information (404 Not Found)
      {
        "message": "Not found"
      }
      ```
      :::::
    ::::
  :::
::
