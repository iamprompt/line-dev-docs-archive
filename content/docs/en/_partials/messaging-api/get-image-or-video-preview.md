---
title: Get Image Or Video Preview
navigation: true
description: ''
meta: '{}'
path: /en/_partials/messaging-api/get-image-or-video-preview
__hash__: ZXypy2r1Cym2EhJoj34yIROkj29yTzj5b5fYuD4R6ew
seo:
  description: ''
---

### Get a preview image of the image or video

:api-endpoint{protocol="get" endpoint="https://api-data.line.me/v2/bot/message/{messageId}/content/preview"}::reference-with-code
  :::reference-content
    ::::admonition
    ---
    title: This domain name is different from that of other endpoints
    type: note
    ---
    The domain name (`api-data.line.me`) of this endpoint is for sending and receiving large amounts of data in the LINE Platform for Messaging API. This domain name differs from that of other endpoints (`api.line.me`).
    ::::

  Gets a preview image of the [image](/reference/messaging-api/#wh-image) or [video](/reference/messaging-api/#wh-video) sent by users using message IDs received via the webhook. The preview image is image data converted to a smaller data size than the original content.

  This endpoint is only available if the `contentProvider.type` property of [webhook event objects](#webhook-event-objects) is `line`.
  :::

  :::reference-code
  *Example request*

    ::::code-tabs
      :::::tab{lang="shell"}
      ```sh
      curl -v -X GET https://api-data.line.me/v2/bot/message/{messageId}/content/preview \
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

  Message ID of [image](/reference/messaging-api/#wh-image) or [video](/reference/messaging-api/#wh-video)
  :::
::

#### Response

Returns status code `200` and the preview image in binary.

Preview image is automatically deleted after a certain period from when the message was sent. There is no guarantee for how long preview image is stored.

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
      // If you specify a message ID other than image or video (400 Bad Request)
      {
        "message": "The content can not be previewed"
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
