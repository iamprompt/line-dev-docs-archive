---
title: Update Upload Audience Group By File
navigation: true
description: ''
meta: '{}'
path: /en/_partials/messaging-api/update-upload-audience-group-by-file
__hash__: 5-c_3hpkQijWwnmFtQrQiLnt9bsG-q8ZcgvAtrcBv2A
seo:
  description: ''
---

### Add user IDs or Identifiers for Advertisers (IFAs) to an audience for uploading user IDs (by file)

:api-endpoint{protocol="put" endpoint="https://api-data.line.me/v2/bot/audienceGroup/upload/byFile"}::reference-with-code
  :::reference-content
    ::::admonition
    ---
    title: This domain name is different from that of other endpoints
    type: note
    ---
    The domain name (`api-data.line.me`) of this endpoint is for sending and receiving large amounts of data in the LINE Platform for Messaging API. This domain name differs from that of other endpoints (`api.line.me`).
    ::::

  Adds new user IDs or IFAs to an audience for uploading user IDs.

  For this endpoint, use a text file to specify recipients. You can also use [Endpoint that specifies recipients with JSON](#update-upload-audience-group).

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
      curl -v -X PUT https://api-data.line.me/v2/bot/audienceGroup/upload/byFile \
      -H 'Authorization: Bearer {channel access token}' \
      -F 'audienceGroupId=4389303728991' \
      -F 'uploadDescription=fileName' \
      -F 'file=@audiences.txt;type=text/plain'
      ```
      :::::
    ::::

  *Example text*

    ::::code-tabs
      :::::tab{lang="File"}
      ```sh
      U4af4980627...
      U4af4980628...
      U4af4980629...
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

  `multipart/form-data`
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

  The description to register with the job (in `jobs[].description`)  

  Max character limit: 300
  :::

  :::parameter-table-entry{required="true"}
  #undefined
  file

  #undefined
  File

  A text file with one user ID or IFA entered per line. Specify `text/plain` as Content-Type.  

  Max file number: 1  

  Max number: 1,500,000
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

  | Code  | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
  | ----- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
  | `400` | Problem with the request. Consider these reasons:- The file specified in the `file` property contains an invalid user ID or IFA. - A file with more user IDs or IFAs than the maximum number (1,500,000) is specified in the `file` property. - The file specified in the `file` property doesn't contain a valid user ID or IFA. - The audience that has exceeded the retention period is specified. - A non-existent audience is specified. - A string longer than the maximum number of characters (300) is specified in the `uploadDescription` property. |
  | `415` | An unsupported media format file is specified in the `file` property.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
  | `429` | The limit on the number of concurrent operations has exceeded. For more information, see [Limit on the number of concurrent operations](#limit-on-the-number-of-concurrent-operations).                                                                                                                                                                                                                                                                                                                                                                       |

  For more information, see [Status codes](#status-codes) and [Error responses](#error-responses) in the [Common specifications](#common-specifications) section.
  :::

  :::reference-code
  *Example error response*

    ::::code-tabs
      :::::tab{lang="json"}
      ```json
      // If you specify a file that contains an invalid user ID or IFA (400 Bad Request)
      {
        "message": "UPLOAD_AUDIENCE_GROUP_INVALID_AUDIENCE_ID_FORMAT",
        "details": [
          {
            "message": "UPLOAD_AUDIENCE_GROUP_INVALID_AUDIENCE_ID_FORMAT",
            "property": "file"
          }
        ]
      }
      ```
      :::::
    ::::
  :::
::
