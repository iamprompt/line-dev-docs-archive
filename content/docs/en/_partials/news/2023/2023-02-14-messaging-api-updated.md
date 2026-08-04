---
title: >-
  In the Messaging API, you can now get the preparation status for getting and a
  preview image of the content sent by users
navigation: true
description: >-
  In the Messaging API, we've added endpoints related to getting the content
  sent by users. The added endpoints are as follows:
meta: '{"date":"2023-02-14 00:00 UTC","tags":"Messaging API","locale":"en"}'
path: /en/_partials/news/2023/2023-02-14-messaging-api-updated
__hash__: UYvWbPgje3f3yhRq9j6lote1wYnriJwysKv1MLo274o
seo:
  title: >-
    In the Messaging API, you can now get the preparation status for getting and
    a preview image of the content sent by users
  description: >-
    In the Messaging API, we've added endpoints related to getting the content
    sent by users. The added endpoints are as follows:
---

In the Messaging API, we've added endpoints related to getting the content sent by users. The added endpoints are as follows:

- [Endpoint to verify the preparation status of a video or audio for getting](#preparation-status-20230214)
- [Endpoint to get a preview image of an image or video](#preview-20230214)

### Endpoint to verify the preparation status of a video or audio for getting

You can get the preparation status to get the content from this endpoint if users have sent a video or audio file.

With the Messaging API, you can get the content that a user has sent to your LINE Official Account by using the message IDs received via the [webhook](/reference/messaging-api/#webhooks). However, if you try to [get content](/reference/messaging-api/#get-content) before the content is ready, the status code `202` will be returned and you won't be able to get the binary data of the content.

When a user sends a large video or audio file, it may take some time until the preparation to get the binary data of the content is completed. You can use this endpoint to verify that you are ready to get in advance.

For more information, see [Verify the preparation status of a video or audio for getting](/reference/messaging-api/#verify-video-or-audio-preparation-status) in the Messaging API reference.

### Endpoint to get a preview image of an image or video

You can get a preview image of an image or video from this endpoint when users have sent an image or video file.

The preview image is image data converted to a smaller data size than the original content, so you can use it for thumbnails, etc.

For more information, see [Get a preview image of the image or video](/reference/messaging-api/#get-image-or-video-preview) in the Messaging API reference.
