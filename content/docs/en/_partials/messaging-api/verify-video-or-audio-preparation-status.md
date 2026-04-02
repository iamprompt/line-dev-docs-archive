---
title: Verify Video Or Audio Preparation Status
navigation: true
description: ''
meta: '{}'
path: /en/_partials/messaging-api/verify-video-or-audio-preparation-status
__hash__: QOyjxeS-MbRkYplHDmQQj4S2Yn8LzU5L9PMOXajmazU
seo:
  description: ''
---

### Verify the preparation status of a video or audio for getting

:api-endpoint{protocol="get" endpoint="https://api-data.line.me/v2/bot/message/{messageId}/content/transcoding"}::reference-with-code
  :::reference-content
    ::::admonition
    ---
    title: This domain name is different from that of other endpoints
    type: note
    ---
    The domain name (`api-data.line.me`) of this endpoint is for sending and receiving large amounts of data in the LINE Platform for Messaging API. This domain name differs from that of other endpoints (`api.line.me`).
    ::::

  Gets the preparation status to get the [video](/reference/messaging-api/#wh-video) or [audio](/reference/messaging-api/#wh-audio) sent by users using message IDs received via the webhook.

  This endpoint is only available if the `contentProvider.type` property of [webhook event objects](#webhook-event-objects) is `line`.
  :::

  :::reference-code
  *Example request*

    ::::code-tabs
      :::::tab{lang="shell"}
      ```sh
      curl -v -X GET https://api-data.line.me/v2/bot/message/{messageId}/content/transcoding \
      -H 'Authorization: Bearer {channel access token}'
      ```
      :::::
    ::::
  :::
::

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
  messageId

  Message ID of [video](/reference/messaging-api/#wh-video) or [audio](/reference/messaging-api/#wh-audio)
  :::
::

#### Response

Returns status code `200` and a JSON object with the following information.

::parameter-table
  :::parameter-table-entry
  #undefined
  status

  #undefined
  String

  The preparation status. One of:

  - `processing`: Preparing to get content.
  - `succeeded`: Ready to get the content. You can [get the content](#get-content) sent by users.
  - `failed`: Failed to prepare to get the content.
  :::
::

#### Error response

::reference-with-code
  :::reference-content
  Returns the following HTTP status code and an error response:

  - `400 Bad Request`
  - `404 Not Found`
  - `410 Gone`

  For more information, see [Status codes](/reference/messaging-api/#status-codes) and [Error responses](/reference/messaging-api/#error-responses) in [Common specifications](/reference/messaging-api/#common-specifications) section.
  :::

  :::reference-code
  *Example error response*

    ::::code-tabs
      :::::tab{lang="json"}
      ```json
      // If you specify a message ID other than video or audio (400 Bad Request)
      {
        "message": "Transcoding status doesn't support this type of content"
      }

      // If you specify a non-existent message ID (404 Not Found)
      {
        "message": "not found"
      }

      // If the user unsends a message (410 Gone)
      {
        "message": "The content is gone"
      }
      ```
      :::::
    ::::
  :::
::
