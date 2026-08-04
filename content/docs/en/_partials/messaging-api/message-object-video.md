---
title: Message Object Video
navigation: true
description: ''
meta: '{}'
path: /en/_partials/messaging-api/message-object-video
__hash__: LJ4CF6G1h8vMTROVo67OfcRj1S8KFcTEOShkLPERUsY
seo:
  description: ''
---

### Video message

::admonition{title="If the video doesn't play properly" type="note"}
Even if a message that contains a video is successfully sent, the video may not play properly on the user's device. For more information, see [Why can't I play a video that I sent as a message?](/faq/#why-cant-i-play-a-video-i-sent) in the FAQ.
::

::admonition{title="Video aspect ratio" type="note"}
- A very wide or tall video may be cropped when played in some environments.
- The aspect ratio of the video specified in `originalContentUrl` and the preview image specified in `previewImageUrl` should be the same. If the aspect ratio is different, a preview image will appear behind the video.

![A video message in the LINE chat room. A preview image with a 1:1 aspect ratio is displayed behind the video that has an aspect ratio of 16:9.](/media/messaging-api/messages/image-overlapping-en.png){className="[\"w-fix-440\"]"}
::

::reference-with-code
  :::reference-content
    ::::parameter-table
      :::::parameter-table-entry{required="true"}
      #undefined
      type

      #undefined
      String

      `video`
      :::::

      :::::parameter-table-entry{required="true"}
      #undefined
      originalContentUrl

      #undefined
      String

      Video file URL (Max character limit: 2000)  

      Protocol: HTTPS (TLS 1.2 or later)  

      Video format: mp4  

      Max file size: 200 MB

      The URL should be percent-encoded using UTF-8. For more information, see [About the encoding of a URL specified in a request body property](#url-encoding).
      :::::

      :::::parameter-table-entry{required="true"}
      #undefined
      previewImageUrl

      #undefined
      String

      Preview image URL (Max character limit: 2000)  

      Protocol: HTTPS (TLS 1.2 or later)  

      Image format: JPEG or PNG  

      Max file size: 1 MB

      The URL should be percent-encoded using UTF-8. For more information, see [About the encoding of a URL specified in a request body property](#url-encoding).
      :::::

      :::::parameter-table-entry{optional=""}
      #undefined
      trackingId

      #undefined
      String

      ID used to identify the video when [Video viewing complete event](#video-viewing-complete) occurs. If you send a video message with `trackingId` added, the video viewing complete event occurs when the user finishes watching the video.

      You can use the same ID in multiple messages.

      - Max character limit: 100
      - Supported character types: Half-width alphanumeric characters (`a-z`, `A-Z`, `0-9`) and symbols (`-.=,+*()%$&;:@{}!?<>[]`)

        ::::::admonition{title="Note" type="note"}
        You can't use the `trackingId` property in messages addressed to group chats or multi-person chats.
        ::::::
      :::::
    ::::
  :::

  :::reference-code
  *Video message example*

    ::::code-tabs
      :::::tab{lang="json"}
      ```json
      {
        "type": "video",
        "originalContentUrl": "https://example.com/original.mp4",
        "previewImageUrl": "https://example.com/preview.jpg",
        "trackingId": "track-id"
      }
      ```
      :::::
    ::::
  :::
::
