---
title: Create Upload Audience Group By File
navigation: true
description: ''
meta: '{}'
path: /en/_partials/messaging-api/create-upload-audience-group-by-file
__hash__: G9TvUtLH8hiiiSrS-x8foMfC8zfMdf4g-fFw88sOtMw
seo:
  description: ''
---

### Create audience for uploading user IDs (by file)

:api-endpoint{protocol="post" endpoint="https://api-data.line.me/v2/bot/audienceGroup/upload/byFile"}::reference-with-code
  :::reference-content
    ::::admonition
    ---
    title: This domain name is different from that of other endpoints
    type: note
    ---
    The domain name (`api-data.line.me`) of this endpoint is for sending and receiving large amounts of data in the LINE Platform for Messaging API. This domain name differs from that of other endpoints (`api.line.me`).
    ::::

  Creates an audience for uploading user IDs.

  For this endpoint, use a text file to specify recipients. You can also use [Endpoint that specifies recipients with JSON](#create-upload-audience-group).

  For more information on how to get user IDs, see [Get user IDs](/docs/messaging-api/getting-user-ids/) in the Messaging API documentation.

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

    ::::admonition
    ---
    title: >-
      You must complete additional application forms to specify recipients using
      Identifiers for Advertisers (IFAs)
    type: note
    ---
    You can use IFAs to specify recipients, but this feature is only available to corporate users who have completed certain applications. To use it with your LINE Official Account, contact your sales representative or contact [our Sales partners](https://www.lycbiz.com/jp/partner/sales/){rel="[\"nofollow\"]"}.
    ::::

    ::::admonition{title="Audience used for uploading user IDs" type="tip"}
    Audience specifications are as follows:

    | Item                                                                     | Limit                                                                      |
    | ------------------------------------------------------------------------ | -------------------------------------------------------------------------- |
    | The number of audiences per channel                                      | Max limit: 1,000                                                           |
    | Retention period of an audience                                          | Up to 180 days (15,552,000 seconds)                                        |
    | The number of user IDs or IFAs you can upload to an audience per request | When using JSON: Max limit: 10,000   When using file: Max limit: 1,500,000 |
    | The number of users per audience                                         | Audience for uploading user IDs: No limit                                  |

    For information on narrowcast message restrictions, see [Restrictions on sending messages using attributes and audiences](#send-narrowcast-message-restrictions).
    ::::

    ::::admonition
    ---
    title: >-
      Only users who have agreed to LINE's Privacy Policy (revised in March 2022 or
      later) will be added
    type: note
    ---
    When you add user IDs to an audience for uploading user IDs, any IDs belonging to users who haven't agreed to LINE's Privacy Policy (revised in March 2022 or later) will be ignored. Only the IDs of users who have agreed will be added.

    Therefore, the number of valid recipients of the audience may be less than that of user IDs specified.
    ::::
  :::

  :::reference-code
  *Example request*

    ::::code-tabs
      :::::tab{lang="shell"}
      ```sh
      curl -v -X POST https://api-data.line.me/v2/bot/audienceGroup/upload/byFile \
      -H 'Authorization: Bearer {channel access token}' \
      -F 'description=audienceGroupName_01' \
      -F 'file=@audiences.txt;type=text/plain'
      ```
      :::::
    ::::

  *Text file example*

    ::::code-tabs
      :::::tab{lang="File"}
      ```text
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
  description

  #undefined
  String

  The audience's name. This is case-insensitive, meaning `AUDIENCE` and `audience` are considered identical.   

  Max character limit: 120
  :::

  :::parameter-table-entry{optional=""}
  #undefined
  isIfaAudience

  #undefined
  Boolean

  - To specify recipients by IFAs: set `true`.
  - To specify recipients by user IDs: set `false` or omit `isIfaAudience` property.
  :::

  :::parameter-table-entry{optional=""}
  #undefined
  uploadDescription

  #undefined
  String

  The description to register for the job (in `jobs[].description`).  

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
  Returns a `202` HTTP status code and a JSON object with the following information.

    ::::admonition{title="Audience is created asynchronously" type="note"}
    Before using an audience, [confirm that the audience can be used for delivery](/docs/messaging-api/sending-messages/#get-audience-status).
    ::::

    ::::parameter-table
      :::::parameter-table-entry
      #undefined
      audienceGroupId

      #undefined
      Number

      The audience ID.
      :::::

      :::::parameter-table-entry
      #undefined
      createRoute

      #undefined
      String

      How the audience was created.

      - `MESSAGING_API`: An audience created with Messaging API.
      :::::

      :::::parameter-table-entry
      #undefined
      type

      #undefined
      String

      The audience type.

      - `UPLOAD`: An audience used for uploading user IDs.
      :::::

      :::::parameter-table-entry
      #undefined
      description

      #undefined
      String

      The audience's name.
      :::::

      :::::parameter-table-entry
      #undefined
      created

      #undefined
      Number

      When the audience was created in UNIX time (in seconds).
      :::::

      :::::parameter-table-entry
      #undefined
      permission

      #undefined
      String

      Update permissions for the created audience.

      - `READ_WRITE`: Can use and update the audience.
      :::::

      :::::parameter-table-entry
      #undefined
      expireTimestamp

      #undefined
      Number

      Audience expiration time in UNIX time (in seconds)
      :::::

      :::::parameter-table-entry
      #undefined
      isIfaAudience

      #undefined
      Boolean

      The value indicating the type of account to be sent, as specified when creating the audience for uploading user IDs. One of:

      - `true`: Accounts are specified with IFAs.
      - `false` (default): Accounts are specified with user IDs.
      :::::
    ::::
  :::

  :::reference-code
  *Example response*

    ::::code-tabs
      :::::tab{lang="json"}
      ```json
      {
        "audienceGroupId": 1234567890123,
        "createRoute": "MESSAGING_API",
        "type": "UPLOAD",
        "description": "audienceGroupName_01",
        "created": 1613700237,
        "permission": "READ_WRITE",
        "expireTimestamp": 1629252237,
        "isIfaAudience": false
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

  | Code  | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
  | ----- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
  | `400` | Problem with the request. Consider these reasons:- The file specified in the `file` property contains an invalid user ID or IFA. - A file with more user IDs or IFAs than the maximum number (1,500,000) is specified in the `file` property. - The file specified in the `file` property doesn't contain a valid user ID or IFA. - You have already created the maximum number of audiences (1,000). - A name longer than the maximum number of characters (120) is specified in the `description` property. - An invalid character (such as `\n` or some other control character) is specified in the `description` property. - The `description` property is empty or contains only spaces. - A string longer than the maximum number of characters (300) is specified in the `uploadDescription` property. |
  | `415` | An unsupported media format file is specified in the `file` property.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
  | `429` | The limit on the number of concurrent operations has exceeded. For more information, see [Limit on the number of concurrent operations](#limit-on-the-number-of-concurrent-operations).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |

  For more information, see [Status codes](#status-codes) and [Error responses](#error-responses) in the [Common specifications](#common-specifications) section.
  :::

  :::reference-code
  *Example error response*

    ::::code-tabs
      :::::tab{lang="json"}
      ```json
      // If you specify a name longer than the maximum number of characters (120) in the description property (400 Bad Request)
      {
        "message": "size over audienceGroupName",
        "details": [
          {
            "message": "AUDIENCE_GROUP_NAME_SIZE_OVER"
          }
        ]
      }
      ```
      :::::
    ::::
  :::
::
