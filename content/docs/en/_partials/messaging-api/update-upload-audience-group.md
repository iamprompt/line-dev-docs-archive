---
title: Update Upload Audience Group
navigation: true
description: ''
meta: '{}'
path: /en/_partials/messaging-api/update-upload-audience-group
__hash__: neszHULyH5SKk0yu2vTwlw1L7wWk-OeAZ6R46vLbA8c
seo:
  description: ''
---

### Add user IDs or Identifiers for Advertisers (IFAs) to an audience for uploading user IDs (by JSON)

:api-endpoint{protocol="put" endpoint="https://api.line.me/v2/bot/audienceGroup/upload"}::reference-with-code
  :::reference-content
  Adds new user IDs or IFAs to an audience for uploading user IDs.

  For this endpoint, use JSON to specify recipients. You can also use [Endpoint that specifies recipients with text file](#update-upload-audience-group-by-file).

  #### Conditions for users that can be added to the audience

  You can add users who are friends with your LINE Official Account to an audience for uploading user IDs. Even if status code `202` is returned, these users are added to the audience.

  - Users who deleted their LINE accounts
  - Users who blocked your LINE Official Account that created the audience
  - Users who haven't added your LINE Official Account that created the audience as a friend

  If you send a message using the created audience, the message won't be sent to the users listed above.

    ::::admonition
    ---
    title: We have set a limit on the number of concurrent endpoint operations
    type: note
    ---
    We have set a limit on the number of concurrent endpoint operations per audience ID (`audienceGroupId`), for creating an audience for uploading user IDs and adding user IDs to an audience. For more information, see [Limit on the number of concurrent operations](#limit-on-the-number-of-concurrent-operations).
    ::::

    ::::admonition{title="Request timeout values" type="note"}
    We strongly recommend using request timeout values of 30 seconds or more.
    ::::

    ::::admonition{title="Verifying a valid user ID" type="note"}
    If an invalid user ID is specified in the `audiences` property of JSON, the error response (`details[].message`: `UPLOAD_AUDIENCE_GROUP_INVALID_AUDIENCE_ID_FORMAT`) will be returned, and audience creation will fail. Before you execute this endpoint, check whether all the user IDs specified in the `audiences` property of JSON are valid.

    To confirm whether a user ID is valid, use the [Get profile information](#get-profile) endpoint. If the user ID is valid, HTTP status code `200` will be returned. If a value other than `200` is returned, the user ID is invalid and should not be included in the `audiences` property.
    ::::

    ::::admonition{title="You can't switch between user IDs and IFAs" type="note"}
    Add the same type of data (user IDs or IFAs) to an audience for uploading user IDs as you originally specified when creating that audience. For example, you can't add user IDs to an audience that originally used IFAs when it was created.

    You can use an audience's `isIfaAudience` property to determine which type of recipient (user IDs or IFAs) was specified when the audience was created. For more details, see [Get audience data](#get-audience-group).
    ::::

    ::::admonition{title="You can't delete user IDs or IFAs" type="note"}
    You cannot delete a user ID or IFA after adding it.
    ::::

    ::::admonition
    ---
    title: >-
      Only users who have agreed to the LY Corporation Privacy Policy (revised March
      2022) will be added
    type: note
    ---
    When adding user IDs to an audience for uploading user IDs, if the user IDs include those of users who haven't agreed to [the privacy policy (revised March 2022)](https://guide.line.me/privacy-policy_update/2022/0001/?lang=en-jp){rel="[\"nofollow\"]"}, users who haven't agreed will be ignored and only users who have agreed will be added.

    Therefore, the number of valid recipients of the audience may be less than that of user IDs specified.
    ::::
  :::

  :::reference-code
  *Example request*

    ::::code-tabs
      :::::tab{lang="shell"}
      ```sh
      curl -v -X PUT https://api.line.me/v2/bot/audienceGroup/upload \
      -H 'Authorization: Bearer {channel access token}' \
      -H 'Content-Type: application/json' \
      -d '{
          "audienceGroupId": 4389303728991,
          "uploadDescription": "fileName",
          "audiences": [
              {
                  "id": "U4af4980627..."
              },
              {
                  "id": "U4af4980628..."
              }
          ]
      }'
      ```
      :::::
    ::::
  :::
::

#### Rate limit

60 requests per minute

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

  `application/json`
  :::
::

#### Request body

::parameter-table
  :::parameter-table-entry{required="true"}
  #undefined
  audienceGroupId

  #undefined
  Number

  The audience ID
  :::

  :::parameter-table-entry{optional=""}
  #undefined
  uploadDescription

  #undefined
  String

  The description to register with the job (in `jobs[].description`).  

  Max character limit: 300
  :::

  :::parameter-table-entry{required="true"}
  #undefined
  audiences

  #undefined
  Array

  An array of user IDs or IFAs  

  Max number: 10,000
  :::

  :::parameter-table-entry{required="true"}
  #undefined
  audiences[].id

  #undefined
  String

  A user ID or IFA
  :::
::

#### Response

::reference-with-code
  :::reference-content
  Returns status code `202` and an empty JSON object.

    ::::admonition{title="Audience is created asynchronously" type="note"}
    Before using an audience, [confirm that the audience can be used for delivery](/docs/messaging-api/sending-messages/#get-audience-status).
    ::::
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

  | Code  | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
  | ----- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
  | `400` | Problem with the request. Consider these reasons:- An invalid user ID or IFA is specified in the `audiences[].id` property. - More user IDs or IFAs than the maximum number (10,000) are specified in the `audiences` property. - A invalid user ID or IFA isn't specified in the `audiences[].id` property. - The audience that has exceeded the retention period is specified. - A non-existent audience is specified. - A string longer than the maximum number of characters (300) is specified in the `uploadDescription` property. |
  | `429` | The limit on the number of concurrent operations has exceeded. For more information, see [Limit on the number of concurrent operations](#limit-on-the-number-of-concurrent-operations).                                                                                                                                                                                                                                                                                                                                                  |

  For more information, see [Status codes](#status-codes) and [Error responses](#error-responses) in the [Common specifications](#common-specifications) section.
  :::

  :::reference-code
  *Example error response*

    ::::code-tabs
      :::::tab{lang="json"}
      ```json
      // If you specify an invalid user ID in the audiences[].id property (400 Bad Request)
      {
        "message": "Invalid audience id format",
        "details": [
          {
            "message": "UPLOAD_AUDIENCE_GROUP_INVALID_AUDIENCE_ID_FORMAT",
            "property": "audiences"
          }
        ]
      }
      ```
      :::::
    ::::
  :::
::
