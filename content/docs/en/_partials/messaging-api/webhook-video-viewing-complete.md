---
title: Webhook Video Viewing Complete
navigation: true
description: ''
meta: '{}'
path: /en/_partials/messaging-api/webhook-video-viewing-complete
__hash__: rdEGTbawVW578zzIRBz4sL_WdOKDs6O8nWcbPuVXQUI
seo:
  description: ''
---

### Video viewing complete event

::reference-with-code
  :::reference-content
  Event for when a user finishes viewing a video at least once with the specified `trackingId` sent by the LINE Official Account.

    ::::admonition{title="The number of video views" type="note"}
    A video viewing complete event doesn't necessarily indicate the number of times a user has watched a video.

    Watching a video multiple times in a single session in a chat room doesn't result in a duplicate event. However, if you close the chat room and reopen it to watch the video again, the event may reoccur.
    ::::

    ::::admonition
    ---
    title: >-
      Video in imagemap messages and flex messages is not supported by the video
      viewing complete event
    type: note
    ---
    The `trackingId` can't be specified for a video in [imagemap messages](#imagemap-message) and [flex messages](#flex-message).
    ::::

    ::::parameter-table
      :::::parameter-table-entry
      #undefined
      timestamp, source, etc.

      See [Common Properties](#common-properties).
      :::::

      :::::parameter-table-entry
      #undefined
      type

      #undefined
      String

      `videoPlayComplete`
      :::::

      :::::parameter-table-entry
      #undefined
      replyToken

      #undefined
      String

      Reply token used to [send reply message](#send-reply-message) to this event
      :::::

      :::::parameter-table-entry
      #undefined
      videoPlayComplete.trackingId

      #undefined
      String

      ID used to identify a video. Returns the same value as the `trackingId` assigned to the [video message](#video-message).
      :::::
    ::::
  :::

  :::reference-code
  *Video viewing complete event example*

    ::::code-tabs
      :::::tab{lang="json"}
      ```json
      {
        "destination": "xxxxxxxxxx",
        "events": [
          {
            "replyToken": "nHuyWiB7yP5Zw52FIkcQobQuGDXCTA",
            "type": "videoPlayComplete",
            "mode": "active",
            "timestamp": 1462629479859,
            "source": {
              "type": "user",
              "userId": "U4af4980629..."
            },
            "webhookEventId": "01FZ74A0TDDPYRVKNK77XKC3ZR",
            "deliveryContext": {
              "isRedelivery": false
            },
            "videoPlayComplete": {
              "trackingId": "track-id"
            }
          }
        ]
      }
      ```
      :::::
    ::::
  :::
::
