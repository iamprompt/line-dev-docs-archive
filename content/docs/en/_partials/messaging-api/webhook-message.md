---
title: Webhook Message
navigation: true
description: ''
meta: '{}'
path: /en/_partials/messaging-api/webhook-message
__hash__: cSySSuWU09AfW1vtK_4QOlafFVjwGkCD9-5WPrGn008
seo:
  description: ''
---

### Message event

Webhook event object which contains the sent message from a user. The `message` property contains a message object which corresponds with the message type. You can reply to message events.

::parameter-table
  :::parameter-table-entry
  #undefined
  timestamp, source, etc.

  See [Common Properties](#common-properties).
  :::

  :::parameter-table-entry
  #undefined
  type

  #undefined
  String

  `message`
  :::

  :::parameter-table-entry
  #undefined
  replyToken

  #undefined
  String

  Reply token used to [send reply message](#send-reply-message) to this event
  :::

  :::parameter-table-entry
  #undefined
  message

  #undefined
  Object

  Object containing the contents of the message. Message types include:

  - [Text](#wh-text)
  - [Image](#wh-image)
  - [Video](#wh-video)
  - [Audio](#wh-audio)
  - [File](#wh-file)
  - [Location](#wh-location)
  - [Sticker](#wh-sticker)
  :::
::

#### Text

::reference-with-code
  :::reference-content
  Message object which contains the text sent from the source.

    ::::parameter-table
      :::::parameter-table-entry
      #undefined
      id

      #undefined
      String

      Message ID
      :::::

      :::::parameter-table-entry
      #undefined
      type

      #undefined
      String

      `text`
      :::::

      :::::parameter-table-entry
      #undefined
      quoteToken

      #undefined
      String

      Quote token of the message. For more information, see [Get quote tokens](/docs/messaging-api/get-quote-tokens/) in the Messaging API documentation.
      :::::

      :::::parameter-table-entry
      #undefined
      markAsReadToken

      #undefined
      String

      Read token. This token allows you to mark messages as read. It has no expiration date. For more information, see [Mark messages as read](/docs/messaging-api/mark-as-read/) in the Messaging API documentation.
      :::::

      :::::parameter-table-entry
      #undefined
      text

      #undefined
      String

      Message text.

      - If the end user sends a LINE emoji, the LINE emoji will be included as a string, like `(hello)` or `(love)`. You can find the LINE emoji details in the `emojis` property.
      - If the end user mentions someone, the display name of the recipient's LINE account will be included as a string, like `@example`. You can find the mention details in the `mention` property.
      :::::

      :::::parameter-table-entry{annotation="Not always included"}
      #undefined
      emojis

      #undefined
      Array

      Array of one or more LINE emoji objects. Only included in the message event when the `text` property contains a LINE emoji.

        ::::::admonition
        ---
        title: Sent LINE emoji may not be included in the emojis property
        type: note
        ---
        - The default LINE emojis sent from LINE for Android won't be included.
        - Unicode-defined emojis and older versions of LINE emojis may not be retrieved correctly.
        ::::::
      :::::

      :::::parameter-table-entry
      #undefined
      emojis[].index

      #undefined
      Number

      Index position for a character in `text`, with the first character being at position `0`.
      :::::

      :::::parameter-table-entry
      #undefined
      emojis[].length

      #undefined
      Number

      The length of the LINE emoji string. For LINE emoji `(hello)`, `7` is the length.
      :::::

      :::::parameter-table-entry
      #undefined
      emojis[].productId

      #undefined
      String

      Product ID for a LINE emoji set. See [LINE emoji](/docs/messaging-api/emoji-list/) for an example of a product ID.
      :::::

      :::::parameter-table-entry
      #undefined
      emojis[].emojiId

      #undefined
      String

      ID for a LINE emoji inside a set. See [LINE emoji](/docs/messaging-api/emoji-list/) for an example of an emoji ID.
      :::::

      :::::parameter-table-entry{annotation="Not always included"}
      #undefined
      mention

      #undefined
      Object

      Object containing the contents of the mentioned user. Only included in the message event when the `text` property contains a mention.
      :::::

      :::::parameter-table-entry
      #undefined
      mention.mentionees[]

      #undefined
      Array of objects

      Array of one or more mention objects.

      Max: 20 mentions
      :::::

      :::::parameter-table-entry
      #undefined
      mention.mentionees[].index

      #undefined
      Number

      Index position of the user mention for a character in `text`, with the first character being at position `0`.
      :::::

      :::::parameter-table-entry
      #undefined
      mention.mentionees[].length

      #undefined
      Number

      The length of the text of the mentioned user. For a mention `@example`, 8 is the length.
      :::::

      :::::parameter-table-entry
      #undefined
      mention.mentionees[].type

      #undefined
      String

      Mentioned target.

      - `user`: User or bot.
      - `all`: Entire group.
      :::::

      :::::parameter-table-entry{annotation="Not always included"}
      #undefined
      mention.mentionees[].userId

      #undefined
      String

      User ID of the mentioned user or bot. Only included if `mention.mentions[].type` is `user`. If the mentionee is a user, only included if the [user consents](/docs/messaging-api/user-consent/) to the LINE Official Account obtaining their user profile information.
      :::::

      :::::parameter-table-entry{annotation="Not always included"}
      #undefined
      mention.mentionees[].isSelf

      #undefined
      Boolean

      Whether the mention is to the bot (`destination`) that received the webhook event. This is only included when the value of the `mention.mentionees[].type` property is `user`.

      - `true`: This is a mention to the bot that received the webhook event.
      - `false`: This is a mention to another user.

      For more information, see [Webhook when a message including a mention to a bot is sent](/docs/messaging-api/receiving-messages/#webhook-message-with-mention-to-bot) in the Messaging API documentation.
      :::::

      :::::parameter-table-entry{annotation="Not always included"}
      #undefined
      quotedMessageId

      #undefined
      String

      Message ID of a quoted message. Only included when the received message quotes a past message.
      :::::
    ::::
  :::

  :::reference-code
  *Text message example*

    ::::code-tabs
      :::::tab{lang="json"}
      ```json
      // When a user sends a text message containing mention and an emoji in a group chat
      {
        "destination": "xxxxxxxxxx",
        "events": [
          {
            "replyToken": "nHuyWiB7yP5Zw52FIkcQobQuGDXCTA",
            "type": "message",
            "mode": "active",
            "timestamp": 1462629479859,
            "source": {
              "type": "group",
              "groupId": "Ca56f94637c...",
              "userId": "U4af4980629..."
            },
            "webhookEventId": "01FZ74A0TDDPYRVKNK77XKC3ZR",
            "deliveryContext": {
              "isRedelivery": false
            },
            "message": {
              "id": "444573844083572737",
              "type": "text",
              "quoteToken": "q3Plxr4AgKd...",
              "markAsReadToken": "30yhdy232...",
              "text": "@All @example Good Morning!! (love)",
              "emojis": [
                {
                  "index": 29,
                  "length": 6,
                  "productId": "5ac1bfd5040ab15980c9b435",
                  "emojiId": "001"
                }
              ],
              "mention": {
                "mentionees": [
                  {
                    "index": 0,
                    "length": 4,
                    "type": "all"
                  },
                  {
                    "index": 5,
                    "length": 8,
                    "userId": "U49585cd0d5...",
                    "type": "user",
                    "isSelf": false
                  }
                ]
              }
            }
          }
        ]
      }
      ```
      :::::
    ::::
  :::
::

#### Image

::reference-with-code
  :::reference-content
  Message object which contains the image content sent from the source.

    ::::parameter-table
      :::::parameter-table-entry
      #undefined
      id

      #undefined
      String

      Message ID
      :::::

      :::::parameter-table-entry
      #undefined
      type

      #undefined
      String

      `image`
      :::::

      :::::parameter-table-entry
      #undefined
      quoteToken

      #undefined
      String

      Quote token of the message. For more information, see [Get quote tokens](/docs/messaging-api/get-quote-tokens/) in the Messaging API documentation.
      :::::

      :::::parameter-table-entry
      #undefined
      markAsReadToken

      #undefined
      String

      Read token. This token allows you to mark messages as read. It has no expiration date. For more information, see [Mark messages as read](/docs/messaging-api/mark-as-read/) in the Messaging API documentation.
      :::::

      :::::parameter-table-entry
      #undefined
      contentProvider.type

      #undefined
      String

      Provider of the image file.

      - `line`: The image was sent by a LINE user. The binary data of the image file can be retrieved by specifying the message ID and calling the [Get content](#get-content) endpoint.
      - `external`: The URL of the image file is included in the `contentProvider.originalContentUrl` property. If the provider of the image file is `external`, the binary data of the image file can't be retrieved by using the [Get content](#get-content) endpoint.
      :::::

      :::::parameter-table-entry{annotation="Not always included"}
      #undefined
      contentProvider.originalContentUrl

      #undefined
      String

      URL of the image file. Only included when `contentProvider.type` is `external`. The server where the image file is located isn't provided by LY Corporation.
      :::::

      :::::parameter-table-entry{annotation="Not always included"}
      #undefined
      contentProvider.previewImageUrl

      #undefined
      String

      URL of the preview image. Only included when `contentProvider.type` is `external`. The server where the preview image file is located isn't provided by LY Corporation.
      :::::

      :::::parameter-table-entry{annotation="Not always included"}
      #undefined
      imageSet.id

      #undefined
      String

      Image set ID. Only included when multiple images are sent simultaneously.
      :::::

      :::::parameter-table-entry{annotation="Not always included"}
      #undefined
      imageSet.index

      #undefined
      Number

      An index starting from `1`, indicating the image number in a set of images sent simultaneously. Only included when multiple images are sent simultaneously. However, it won't be included if the sender is using LINE 11.15 or earlier for Android.

        ::::::admonition
        ---
        title: The order in which webhooks are delivered is undefined
        type: tip
        ---
        If a user simultaneously sends multiple images, multiple webhook events are sent to the bot server from the LINE Platform. The webhooks are delivered in an undefined order, not in the order of the values in `imageSet.index`.
        ::::::
      :::::

      :::::parameter-table-entry{annotation="Not always included"}
      #undefined
      imageSet.total

      #undefined
      Number

      The total number of images sent simultaneously. If two images are sent simultaneously, the number is `2`. Only included when multiple images are sent simultaneously. However, it won't be included if the sender is using LINE 11.15 or earlier for Android.
      :::::
    ::::
  :::

  :::reference-code
  *Image message example*

    ::::code-tabs
      :::::tab{lang="json"}
      ```json
      // When two images are sent simultaneously (First image)
      {
          "destination": "xxxxxxxxxx",
          "events": [
              {
                  "type": "message",
                  "message": {
                      "type": "image",
                      "id": "354718705033693859",
                      "quoteToken": "q3Plxr4AgKd...",
                      "markAsReadToken": "30yhdy232...",
                      "contentProvider": {
                          "type": "line"
                      },
                      "imageSet": {
                          "id": "E005D41A7288F41B65593ED38FF6E9834B046AB36A37921A56BC236F13A91855",
                          "index": 1,
                          "total": 2
                      }
                  },
                  "timestamp": 1627356924513,
                  "source": {
                      "type": "user",
                      "userId": "U4af4980629..."
                  },
                  "webhookEventId": "01FZ74A0TDDPYRVKNK77XKC3ZR",
                  "deliveryContext": {
                      "isRedelivery": false
                  },
                  "replyToken": "7840b71058e24a5d91f9b5726c7512c9",
                  "mode": "active"
              }
          ]
      }

      // When two images are sent simultaneously (Second image)
      {
          "destination": "xxxxxxxxxx",
          "events": [
              {
                  "type": "message",
                  "message": {
                      "type": "image",
                      "id": "354718705033693861",
                      "quoteToken": "yHAz4Ua2wx7...",
                      "markAsReadToken": "30yhdy232...",
                      "contentProvider": {
                          "type": "line"
                      },
                      "imageSet": {
                          "id": "E005D41A7288F41B65593ED38FF6E9834B046AB36A37921A56BC236F13A91855",
                          "index": 2,
                          "total": 2
                      }
                  },
                  "timestamp": 1627356924722,
                  "source": {
                      "type": "user",
                      "userId": "U4af4980629..."
                  },
                  "webhookEventId": "01FZ74A0TDDPYRVKNK77XKC3ZR",
                  "deliveryContext": {
                      "isRedelivery": false
                  },
                  "replyToken": "fbf94e269485410da6b7e3a5e33283e8",
                  "mode": "active"
              }
          ]
      }
      ```
      :::::
    ::::
  :::
::

#### Video

::reference-with-code
  :::reference-content
  Message object which contains the video content sent from the source. The preview image is displayed in the chat and the video is played when the image is tapped.

    ::::parameter-table
      :::::parameter-table-entry
      #undefined
      id

      #undefined
      String

      Message ID
      :::::

      :::::parameter-table-entry
      #undefined
      type

      #undefined
      String

      `video`
      :::::

      :::::parameter-table-entry
      #undefined
      quoteToken

      #undefined
      String

      Quote token of the message. For more information, see [Get quote tokens](/docs/messaging-api/get-quote-tokens/) in the Messaging API documentation.
      :::::

      :::::parameter-table-entry
      #undefined
      markAsReadToken

      #undefined
      String

      Read token. This token allows you to mark messages as read. It has no expiration date. For more information, see [Mark messages as read](/docs/messaging-api/mark-as-read/) in the Messaging API documentation.
      :::::

      :::::parameter-table-entry{annotation="Not always included"}
      #undefined
      duration

      #undefined
      Number

      Length of video file (milliseconds)
      :::::

      :::::parameter-table-entry
      #undefined
      contentProvider.type

      #undefined
      String

      Provider of the video file.

      - `line`: The video was sent by a LINE user. The binary data of the video file can be retrieved by specifying the message ID and calling the [Get content](#get-content) endpoint.
      - `external`: The URL of the video file is included in the `contentProvider.originalContentUrl` property. If the provider of the video file is `external`, the binary data of the video file can't be retrieved by using the [Get content](#get-content) endpoint.
      :::::

      :::::parameter-table-entry{annotation="Not always included"}
      #undefined
      contentProvider.originalContentUrl

      #undefined
      String

      URL of the video file. Only included when `contentProvider.type` is `external`. The server where the video file is located isn't provided by LY Corporation.
      :::::

      :::::parameter-table-entry{annotation="Not always included"}
      #undefined
      contentProvider.previewImageUrl

      #undefined
      String

      URL of the preview image. Only included when `contentProvider.type` is `external`. The server where the preview image file is located isn't provided by LY Corporation.
      :::::
    ::::
  :::

  :::reference-code
  *Video message example*

    ::::code-tabs
      :::::tab{lang="json"}
      ```json
      {
        "destination": "xxxxxxxxxx",
        "events": [
          {
            "replyToken": "nHuyWiB7yP5Zw52FIkcQobQuGDXCTA",
            "type": "message",
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
            "message": {
              "id": "325708",
              "type": "video",
              "quoteToken": "q3Plxr4AgKd...",
              "markAsReadToken": "30yhdy232...",
              "duration": 60000,
              "contentProvider": {
                "type": "external",
                "originalContentUrl": "https://example.com/original.mp4",
                "previewImageUrl": "https://example.com/preview.jpg"
              }
            }
          }
        ]
      }
      ```
      :::::
    ::::
  :::
::

#### Audio

::reference-with-code
  :::reference-content
  Message object which contains the audio content sent from the source.

    ::::parameter-table
      :::::parameter-table-entry
      #undefined
      id

      #undefined
      String

      Message ID
      :::::

      :::::parameter-table-entry
      #undefined
      type

      #undefined
      String

      `audio`
      :::::

      :::::parameter-table-entry
      #undefined
      markAsReadToken

      #undefined
      String

      Read token. This token allows you to mark messages as read. It has no expiration date. For more information, see [Mark messages as read](/docs/messaging-api/mark-as-read/) in the Messaging API documentation.
      :::::

      :::::parameter-table-entry{annotation="Not always included"}
      #undefined
      duration

      #undefined
      Number

      Length of audio file (milliseconds)
      :::::

      :::::parameter-table-entry
      #undefined
      contentProvider.type

      #undefined
      String

      Provider of the audio file:

      - `line`: The audio was sent by a LINE user. The binary data of the audio file can be retrieved by specifying the message ID and calling the [Get content](#get-content) endpoint.
      - `external`: The URL of the audio file is included in the `contentProvider.originalContentUrl` property. If the provider of the audio file is `external`, the binary data of the audio file can't be retrieved by using the [Get content](#get-content) endpoint.
      :::::

      :::::parameter-table-entry{annotation="Not always included"}
      #undefined
      contentProvider.originalContentUrl

      #undefined
      String

      URL of the audio file. Only included when `contentProvider.type` is `external`. The server where the audio file is located isn't provided by LY Corporation.
      :::::
    ::::
  :::

  :::reference-code
  *Audio message example*

    ::::code-tabs
      :::::tab{lang="json"}
      ```json
      {
        "destination": "xxxxxxxxxx",
        "events": [
          {
            "replyToken": "nHuyWiB7yP5Zw52FIkcQobQuGDXCTA",
            "type": "message",
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
            "message": {
              "id": "325708",
              "type": "audio",
              "markAsReadToken": "30yhdy232...",
              "duration": 60000,
              "contentProvider": {
                "type": "line"
              }
            }
          }
        ]
      }
      ```
      :::::
    ::::
  :::
::

#### File

::reference-with-code
  :::reference-content
  Message object which contains the file sent from the source. The binary data of the file can be retrieved by specifying the message ID and calling the API. For more information, see [Get content](#get-content).

    ::::parameter-table
      :::::parameter-table-entry
      #undefined
      id

      #undefined
      String

      Message ID
      :::::

      :::::parameter-table-entry
      #undefined
      type

      #undefined
      String

      `file`
      :::::

      :::::parameter-table-entry
      #undefined
      markAsReadToken

      #undefined
      String

      Read token. This token allows you to mark messages as read. It has no expiration date. For more information, see [Mark messages as read](/docs/messaging-api/mark-as-read/) in the Messaging API documentation.
      :::::

      :::::parameter-table-entry
      #undefined
      fileName

      #undefined
      String

      File name
      :::::

      :::::parameter-table-entry
      #undefined
      fileSize

      #undefined
      Number

      File size in bytes
      :::::
    ::::
  :::

  :::reference-code
  *File message example*

    ::::code-tabs
      :::::tab{lang="json"}
      ```json
      {
        "destination": "xxxxxxxxxx",
        "events": [
          {
            "replyToken": "nHuyWiB7yP5Zw52FIkcQobQuGDXCTA",
            "type": "message",
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
            "message": {
              "id": "325708",
              "type": "file",
              "markAsReadToken": "30yhdy232...",
              "fileName": "file.txt",
              "fileSize": 2138
            }
          }
        ]
      }
      ```
      :::::
    ::::
  :::
::

#### Location

::reference-with-code
  :::reference-content
  Message object which contains the location data sent from the source.

    ::::parameter-table
      :::::parameter-table-entry
      #undefined
      id

      #undefined
      String

      Message ID
      :::::

      :::::parameter-table-entry
      #undefined
      type

      #undefined
      String

      `location`
      :::::

      :::::parameter-table-entry
      #undefined
      markAsReadToken

      #undefined
      String

      Read token. This token allows you to mark messages as read. It has no expiration date. For more information, see [Mark messages as read](/docs/messaging-api/mark-as-read/) in the Messaging API documentation.
      :::::

      :::::parameter-table-entry{annotation="Not always included"}
      #undefined
      title

      #undefined
      String

      Title
      :::::

      :::::parameter-table-entry{annotation="Not always included"}
      #undefined
      address

      #undefined
      String

      Address
      :::::

      :::::parameter-table-entry
      #undefined
      latitude

      #undefined
      Decimal

      Latitude
      :::::

      :::::parameter-table-entry
      #undefined
      longitude

      #undefined
      Decimal

      Longitude
      :::::
    ::::
  :::

  :::reference-code
  *Location message example*

    ::::code-tabs
      :::::tab{lang="json"}
      ```json
      {
        "destination": "xxxxxxxxxx",
        "events": [
          {
            "replyToken": "nHuyWiB7yP5Zw52FIkcQobQuGDXCTA",
            "type": "message",
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
            "message": {
              "id": "325708",
              "type": "location",
              "markAsReadToken": "30yhdy232...",
              "title": "my location",
              "address": "1-3 Kioicho, Chiyoda-ku, Tokyo, 102-8282 Japan",
              "latitude": 35.67966,
              "longitude": 139.73669
            }
          }
        ]
      }
      ```
      :::::
    ::::
  :::
::

#### Sticker

::reference-with-code
  :::reference-content
  Message object which contains the sticker data sent from the source. For a list of basic LINE stickers and sticker IDs, see [Stickers](/docs/messaging-api/sticker-list/).

    ::::admonition{title="You can't retrieve the sticker image" type="tip"}
    The package ID and sticker ID of the sticker sent by the user can be retrieved by webhook, but the sticker image itself can't be retrieved.
    ::::

    ::::admonition
    ---
    title: The Sticker Arranging feature isn't supported
    type: tip
    ---
    The Messaging API doesn't currently support the Sticker Arranging feature, so you can't get information about what kind of stickers are being combined. When a user sends a sticker message using the Sticker Arranging feature, the following sticker information is always received by the webhook.

    - Package ID: `30563`
    - Sticker ID: `651698630`
    - Sticker resource type: `STATIC`
    ::::

    ::::parameter-table
      :::::parameter-table-entry
      #undefined
      id

      #undefined
      String

      Message ID
      :::::

      :::::parameter-table-entry
      #undefined
      type

      #undefined
      String

      `sticker`
      :::::

      :::::parameter-table-entry
      #undefined
      quoteToken

      #undefined
      String

      Quote token of the message. For more information, see [Get quote tokens](/docs/messaging-api/get-quote-tokens/) in the Messaging API documentation.
      :::::

      :::::parameter-table-entry
      #undefined
      markAsReadToken

      #undefined
      String

      Read token. This token allows you to mark messages as read. It has no expiration date. For more information, see [Mark messages as read](/docs/messaging-api/mark-as-read/) in the Messaging API documentation.
      :::::

      :::::parameter-table-entry
      #undefined
      packageId

      #undefined
      String

      Package ID
      :::::

      :::::parameter-table-entry
      #undefined
      stickerId

      #undefined
      String

      Sticker ID
      :::::

      :::::parameter-table-entry
      #undefined
      stickerResourceType

      #undefined
      String

      Sticker resource type. One of:

      - `STATIC`: Still image
      - `ANIMATION`: Animated sticker
      - `SOUND`: Sticker with sound
      - `ANIMATION_SOUND`: Animated sticker with sound
      - `POPUP`: Pop-up sticker or Effect sticker
      - `POPUP_SOUND`: Pop-up sticker with sound or Effect sticker with sound
      - `CUSTOM`: Custom sticker. Text entered by user can't be retrieved.
      - `MESSAGE`: Message sticker
      - `NAME_TEXT`: Custom sticker (discontinued)
      - `PER_STICKER_TEXT`: Message sticker (discontinued)

        ::::::admonition{title="About stickerResourceType" type="note"}
        In the future, we may add new resource types without notice. Make sure your implementation can handle both current and future sticker resource types.
        ::::::
      :::::

      :::::parameter-table-entry{annotation="Not always included"}
      #undefined
      keywords

      #undefined
      Array of strings

      Array of up to 15 keywords describing the sticker. If a sticker has 16 or more keywords, a random selection of 15 keywords will be returned. The keyword selection is random for each event, so different keywords may be returned for the same sticker.

        ::::::admonition{title="About keywords" type="note"}
        The `keywords` property is currently in an experimental phase and discontinuation or spec changes may occur in the future.
        ::::::
      :::::

      :::::parameter-table-entry{annotation="Not always included"}
      #undefined
      text

      #undefined
      String

      Any text entered by the user. This property is only included for message stickers.  

      Max character limit: 100

        ::::::admonition
        ---
        title: You can't retrieve the text of custom stickers
        type: tip
        ---
        In the case of custom stickers, the text entered by the user can't be retrieved.
        ::::::
      :::::

      :::::parameter-table-entry{annotation="Not always included"}
      #undefined
      quotedMessageId

      #undefined
      String

      Message ID of a quoted message. Only included when the received message quotes a past message.
      :::::
    ::::
  :::

  :::reference-code
  *Sticker message example*

    ::::code-tabs
      :::::tab{lang="json"}
      ```json
      // Example of animated sticker
      {
          "destination": "xxxxxxxxxx",
          "events": [
              {
                  "replyToken": "nHuyWiB7yP5Zw52FIkcQobQuGDXCTA",
                  "type": "message",
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
                  "message": {
                      "type": "sticker",
                      "id": "1501597916",
                      "quoteToken": "q3Plxr4AgKd...",
                      "markAsReadToken": "30yhdy232...",
                      "stickerId": "52002738",
                      "packageId": "11537",
                      "stickerResourceType": "ANIMATION",
                      "keywords": [
                          "cony",
                          "sally",
                          "Staring",
                          "hi",
                          "whatsup",
                          "line",
                          "howdy",
                          "HEY",
                          "Peeking",
                          "wave",
                          "peek",
                          "Hello",
                          "yo",
                          "greetings"
                      ]
                  }
              }
          ]
      }

      // Example of message sticker
      {
          "destination": "xxxxxxxxxx",
          "events": [
              {
                  "type": "message",
                  "message": {
                      "type": "sticker",
                      "id": "123456789012345678",
                      "quoteToken": "q3Plxr4AgKd...",
                      "markAsReadToken": "30yhdy232...",
                      "stickerId": "738839",
                      "packageId": "12287",
                      "stickerResourceType": "MESSAGE",
                      "keywords": [
                          "Anticipation",
                          "Sparkle",
                          "Straight face",
                          "Staring",
                          "Thinking"
                      ],
                      "text": "Let's\nhang out\nthis weekend!"
                  },
                  "timestamp": 1635756190879,
                  "source": {
                      "type": "group",
                      "groupId": "C99ae82bcd...",
                      "userId": "Ub82c8fd9b..."
                  },
                  "webhookEventId": "01FZ74A0TDDPYRVKNK77XKC3ZR",
                  "deliveryContext": {
                      "isRedelivery": false
                  },
                  "replyToken": "ce8c57ec18374a4b94f40abab97145f8",
                  "mode": "active"
              }
          ]
      }
      ```
      :::::
    ::::
  :::
::
