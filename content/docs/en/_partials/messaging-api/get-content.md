---
title: Get Content
navigation: true
description: ''
meta: '{}'
path: /en/_partials/messaging-api/get-content
__hash__: to4XfKHNR3zQI9r8rgba76ul3pUwYwlXSxe03fJgZ3A
seo:
  description: ''
---

### Get content

:api-endpoint{protocol="get" endpoint="https://api-data.line.me/v2/bot/message/{messageId}/content"}::reference-with-code
  :::reference-content
    ::::admonition
    ---
    title: This domain name is different from that of other endpoints
    type: note
    ---
    The domain name (`api-data.line.me`) of this endpoint is for sending and receiving large amounts of data in the LINE Platform for Messaging API. This domain name differs from that of other endpoints (`api.line.me`).
    ::::

  Gets [images](/reference/messaging-api/#wh-image), [videos](/reference/messaging-api/#wh-video), [audio](/reference/messaging-api/#wh-audio), and [files](/reference/messaging-api/#wh-file) sent by users using message IDs received via the webhook.

  This endpoint is only available if the `contentProvider.type` property of [webhook event objects](#webhook-event-objects) is `line`.

  When a user sends a large video or audio file, it may take some time until the preparation to get the binary data of the content is completed. If you try to get the content while the binary data is being prepared, the status code `202` will be returned and you can't get the binary data. You can use the [Verify the preparation status of a video or audio for getting](#verify-video-or-audio-preparation-status) endpoint to verify whether or not binary data can be obtained.

  Content sent by users may be transformed internally, such as shrinking.

    ::::admonition{title="No API for retrieving text" type="note"}
    You can get the text sent by the user via the [text](/reference/messaging-api/#wh-text) message object of the webhook. There is no API to get the text sent by users again after receiving the webhook.
    ::::
  :::

  :::reference-code
  *Example request*

    ::::code-tabs
      :::::tab{lang="shell"}
      ```sh
      curl -v -X GET https://api-data.line.me/v2/bot/message/{messageId}/content \
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

  Message ID
  :::
::

#### Response

Returns status code `200` and the content in binary. The file format of the binary data is indicated in the [`Content-Type`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/Content-Type){rel="[\"nofollow\"]"} header of the response.

Content is automatically deleted after a certain period from when the message was sent. There is no guarantee for how long content is stored.

#### Error response

::reference-with-code
  :::reference-content
  Returns the following HTTP status code and an error response:

  - `404 Not Found`
  - `410 Gone`

  For more information, see [Status codes](/reference/messaging-api/#status-codes) and [Error responses](/reference/messaging-api/#error-responses) in [Common specifications](/reference/messaging-api/#common-specifications) section.
  :::

  :::reference-code
  *Example error response*

    ::::code-tabs
      :::::tab{lang="json"}
      ```json
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
