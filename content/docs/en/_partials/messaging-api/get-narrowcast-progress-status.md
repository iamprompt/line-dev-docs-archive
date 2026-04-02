---
title: Get Narrowcast Progress Status
navigation: true
description: ''
meta: '{}'
path: /en/_partials/messaging-api/get-narrowcast-progress-status
__hash__: WlhHhQm3tVZkEsvEvwsMP3cGpe8fkImY2vp9sIj4ij8
seo:
  description: ''
---

### Get narrowcast message status

:api-endpoint{protocol="get" endpoint="https://api.line.me/v2/bot/message/progress/narrowcast"}::reference-with-code
  :::reference-content
  Gets the status of a narrowcast message.

    ::::admonition
    ---
    title: >-
      Narrowcast messages can't be sent if the number of recipients is less than the
      required amount
    type: note
    ---
    To prevent someone from guessing the recipients' attributes, narrowcast messages can't be sent when the number of recipients is below the required minimum amount. For more information, see [Restrictions on sending messages using attributes and audiences](#send-narrowcast-message-restrictions).
    ::::

    ::::admonition{title="Window of availability for status requests" type="note"}
    You can't get the status of a narrowcast message anymore after 14 days (336 hours) past the timestamp displayed in `acceptedTime`.
    ::::
  :::

  :::reference-code
  *Example request*

    ::::code-tabs
      :::::tab{lang="shell"}
      ```sh
      curl -v -X GET 'https://api.line.me/v2/bot/message/progress/narrowcast?requestId={request_id}' \
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

#### Query parameters

::parameter-table
  :::parameter-table-entry{required="true"}
  #undefined
  requestId

  The narrowcast message's request ID. Each Messaging API request has a request ID. Find it in the [response headers](#response-headers).
  :::
::

#### Response

Returns a `200` HTTP status code and a JSON object with the following information.

::parameter-table
  :::parameter-table-entry
  #undefined
  phase

  #undefined
  String

  The current status. One of:

  - `waiting`: Messages are not yet ready to be sent. They are currently being filtered or processed in some way.
  - `sending`: Messages are currently being sent.
  - `succeeded`: Messages were sent successfully. This may not mean the messages were successfully received.
  - `failed`: Messages failed to be sent. Use the `failedDescription` property to find the cause of the failure.
  :::

  :::parameter-table-entry{annotation="Not always included"}
  #undefined
  successCount

  #undefined
  Number

  The number of users who successfully received the message. *
  :::

  :::parameter-table-entry{annotation="Not always included"}
  #undefined
  failureCount

  #undefined
  Number

  The number of users who failed to send the message. *   

  Even if the `phase` is `succeeded`, some users may not be able to receive narrowcast messages unless the `failureCount` is 0. For example, if a user blocks the LINE Official Account while sending a narrowcast message, it will be added to the `failureCount`.
  :::

  :::parameter-table-entry{annotation="Not always included"}
  #undefined
  targetCount

  #undefined
  Number

  The number of intended recipients of the message. *
  :::

  :::parameter-table-entry{annotation="Not always included"}
  #undefined
  failedDescription

  #undefined
  String

  The reason the message failed to be sent. This is only included with a `phase` property value of `failed`.
  :::

  :::parameter-table-entry{annotation="Not always included"}
  #undefined
  errorCode

  #undefined
  Number

  Error summary. This is only included with a `phase` property value of `failed`.  

  One of:

  - `1`: An internal error occurred.
  - `2`: An error occurred because there weren't enough recipients.
  - `3`: A conflict error of requests occurs because a request that has already been accepted is retried.
  - `4`: An audience of less than 50 recipients is included as a condition of sending.
  - `5`: To prevent messages from being delivered only to a subset of the target audience, message delivery has been canceled. This error occurs when messages are sent with [`limit.forbidPartialDelivery`](#send-narrowcast-limit) set to `true` and the number of recipients exceeds the maximum number of sending.
  :::

  :::parameter-table-entry
  #undefined
  acceptedTime

  #undefined
  String

  Narrowcast message request accepted time in milliseconds.

  - Format: [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601){rel="[\"nofollow\"]"} (e.g. `2020-12-03T10:15:30.121Z`)
  - Timezone: UTC
  :::

  :::parameter-table-entry{annotation="Not always included"}
  #undefined
  completedTime

  #undefined
  String

  Processing of narrowcast message request completion time in milliseconds. Returned when the `phase` property is `succeeded` or `failed`.

  - Format: [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601){rel="[\"nofollow\"]"} (e.g. `2020-12-03T10:15:30.121Z`)
  - Timezone: UTC
  :::
::

* Not available when the `phase` property is `waiting`.

#### Error response

::reference-with-code
  :::reference-content
  Returns the following HTTP status code and an error response:

  | Code  | Description                                                                                                                                                   |
  | ----- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- |
  | `400` | An invalid request ID is specified.                                                                                                                           |
  | `404` | Unable to get the status. Consider these reasons:- The period of time to get a status has expired. - A request ID other than narrowcast message is specified. |

  For more information, see [Status codes](#status-codes) and [Error responses](#error-responses) in the [Common specifications](#common-specifications) section.
  :::

  :::reference-code
  *Example error response*

    ::::code-tabs
      :::::tab{lang="json"}
      ```json
      // If you couldn't get the status (404 Not Found)
      {
        "message": "Not found"
      }
      ```
      :::::
    ::::
  :::
::
