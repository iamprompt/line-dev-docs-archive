---
title: Create Imp Audience Group
navigation: true
description: ''
meta: '{}'
path: /en/_partials/messaging-api/create-imp-audience-group
__hash__: Oo-KEhRLP0-ZWxkbttLJtfjc4jhVUpYEj972ZTAtnC4
seo:
  description: ''
---

### Create message impression audience

:api-endpoint{protocol="post" endpoint="https://api.line.me/v2/bot/audienceGroup/imp"}::reference-with-code
  :::reference-content
  Creates a message impression audience.

  A message impression audience is a collection of users who have viewed a broadcast or narrowcast message. The audience will include any user who has viewed at least one message bubble.

  Use a request ID to specify the message.

    ::::admonition{title="Message impression audience" type="tip"}
    Audience's specifications are as follows:

    | Item                                                                                       | Limit                                       |
    | ------------------------------------------------------------------------------------------ | ------------------------------------------- |
    | The number of audiences per channel                                                        | Max limit: 1,000                            |
    | Retention period of an audience                                                            | Up to 180 days (15,552,000 seconds)         |
    | The number of users per audience                                                           | Minimum: 50 per message impression audience |
    | The period during which the retargeting audience* can be created after the message is sent | Max limit: 60 days (5,184,000 seconds)      |

    * Message click audience and message impression audience.

    Learn more from [Restrictions on sending messages using attributes and audiences](#send-narrowcast-message-restrictions).
    ::::
  :::

  :::reference-code
  *Example request*

    ::::code-tabs
      :::::tab{lang="shell"}
      ```sh
      curl -v -X POST https://api.line.me/v2/bot/audienceGroup/imp \
      -H 'Authorization: Bearer {channel access token}' \
      -H 'Content-Type: application/json' \
      -d '{
          "description": "audienceGroupName_01",
          "requestId": "bb9744f9-47fa-4a29-941e-1234567890ab"
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
  description

  #undefined
  String

  The audience's name. This is case-insensitive, meaning `AUDIENCE` and `audience` are considered identical.   

  Max character limit: 120
  :::

  :::parameter-table-entry{required="true"}
  #undefined
  requestId

  #undefined
  String

  The request ID of a broadcast or narrowcast message sent in the past 60 days. Each Messaging API request has a request ID. Find it in the [response headers](#response-headers).
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

      - `MESSAGING_API`: Audiences created with Messaging API.
      :::::

      :::::parameter-table-entry
      #undefined
      type

      #undefined
      String

      The audience type.

      - `IMP`: Message impression audience.
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

      :::::parameter-table-entry
      #undefined
      requestId

      #undefined
      String

      The request ID that was specified when the audience was created.
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
        "type": "IMP",
        "description": "audienceGroupName_01",
        "created": 1613707097,
        "permission": "READ_WRITE",
        "expireTimestamp": 1629259095,
        "isIfaAudience": false,
        "requestId": "bb9744f9-47fa-4a29-941e-1234567890ab"
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

  | Code  | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
  | ----- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
  | `400` | Problem with the request. Consider these reasons:- You have already created the maximum number of audiences (1,000). - A name longer than the maximum number of characters (120) is specified in the `description` property. - An invalid character (such as `\n` or some other control character) is specified in the `description` property. - There is already an audience with the specified request ID. - The time limit for creating an audience has expired. - A non-existent request ID is specified. - The LINE Platform isn't ready to create an audience with the specified request ID. |

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
