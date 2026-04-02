---
title: Message Object Imagemap
navigation: true
description: ''
meta: '{}'
path: /en/_partials/messaging-api/message-object-imagemap
__hash__: Jhbxpgao0qlR7RpPCL9j5OoNsGucRemZN1GO4b9oLDY
seo:
  description: ''
---

### Imagemap message

::reference-with-code
  :::reference-content
  Imagemap messages are messages configured with an image that has multiple tappable areas. You can assign one tappable area for the entire image or different tappable areas on divided areas of the image.

  You can also play a video on the image and display a label with a hyperlink after the video is finished.

    ::::admonition{title="If the video doesn't play properly" type="note"}
    Even if a message that contains a video is successfully sent, the video may not play properly on the user's device. For more information, see [Why can't I play a video that I sent as a message?](/faq/#why-cant-i-play-a-video-i-sent) in the FAQ.
    ::::

    ::::admonition{title="Video aspect ratio" type="note"}
    The aspect ratio of the video specified in `originalContentUrl` and the preview image specified in `previewImageUrl` should be the same. If the aspect ratio is different, a preview image will appear behind the video.

    ![A video message in the LINE chat room. A preview image with a 1:1 aspect ratio is displayed behind the video that has an aspect ratio of 16:9.](/media/messaging-api/messages/image-overlapping-en.png){className="[\"w-fix-440\"]"}
    ::::

    ::::parameter-table
      :::::parameter-table-entry{required="true"}
      #undefined
      type

      #undefined
      String

      `imagemap`
      :::::

      :::::parameter-table-entry{required="true"}
      #undefined
      baseUrl

      #undefined
      String

      Image base URL (Max character limit: 2000)  

      Protocol: HTTPS (TLS 1.2 or later)  

      For more information about supported images in imagemap messages, see [How to configure an image](#base-url).

      The URL should be percent-encoded using UTF-8. For more information, see [About the encoding of a URL specified in a request body property](#url-encoding).
      :::::

      :::::parameter-table-entry{required="true"}
      #undefined
      altText

      #undefined
      String

      Alternative text. When a user receives a message, it will appear as an alternative to the image in the notification or chat list of their device.  

      You can include Unicode emojis.  

      Max character limit: 1500
      :::::

      :::::parameter-table-entry{required="true"}
      #undefined
      baseSize.width

      #undefined
      Number

      Width of base image in pixels. Set to 1040.
      :::::

      :::::parameter-table-entry{required="true"}
      #undefined
      baseSize.height

      #undefined
      Number

      Height of base image. Set to the height that corresponds to a width of 1040 pixels.
      :::::

      :::::parameter-table-entry{annotation="*1"}
      #undefined
      video.originalContentUrl

      #undefined
      String

      Video file URL (Max character limit: 2000)  

      Protocol: HTTPS (TLS 1.2 or later)  

      Video format: mp4  

      Max file size: 200 MB

      The URL should be percent-encoded using UTF-8. For more information, see [About the encoding of a URL specified in a request body property](#url-encoding).

        ::::::admonition{title="Note" type="note"}
        A very wide or tall video may be cropped when played in some environments.
        ::::::
      :::::

      :::::parameter-table-entry{annotation="*1"}
      #undefined
      video.previewImageUrl

      #undefined
      String

      Preview image URL (Max character limit: 2000)  

      Protocol: HTTPS (TLS 1.2 or later)  

      Image format: JPEG or PNG  

      Max file size: 1 MB

      The URL should be percent-encoded using UTF-8. For more information, see [About the encoding of a URL specified in a request body property](#url-encoding).
      :::::

      :::::parameter-table-entry{annotation="*1"}
      #undefined
      video.area.x

      #undefined
      Number

      Horizontal position of the video area relative to the left edge of the imagemap area. Value must be `0` or higher.
      :::::

      :::::parameter-table-entry{annotation="*1"}
      #undefined
      video.area.y

      #undefined
      Number

      Vertical position of the video area relative to the top of the imagemap area. Value must be `0` or higher.
      :::::

      :::::parameter-table-entry{annotation="*1"}
      #undefined
      video.area.width

      #undefined
      Number

      Width of the video area
      :::::

      :::::parameter-table-entry{annotation="*1"}
      #undefined
      video.area.height

      #undefined
      Number

      Height of the video area
      :::::

      :::::parameter-table-entry{annotation="*2"}
      #undefined
      video.externalLink.linkUri

      #undefined
      String

      Webpage URL. Called when the label displayed after the video is tapped.  

      Max character limit: 1000  

      The available schemes are `http`, `https`, `line`, and `tel`. For more information about the LINE URL scheme, see [Use LINE features with the LINE URL scheme](/docs/messaging-api/using-line-url-scheme/).

      The URL should be percent-encoded using UTF-8. For more information, see [About the encoding of a URL specified in a request body property](#url-encoding).
      :::::

      :::::parameter-table-entry{annotation="*2"}
      #undefined
      video.externalLink.label

      #undefined
      String

      Label. Displayed after the video is finished.  

      Max character limit: 30
      :::::

      :::::parameter-table-entry{required="true"}
      #undefined
      actions

      #undefined
      Array of [imagemap action objects](#imagemap-action-objects)

      Action when tapped  

      Max: 50
      :::::
    ::::

  *1 This property is required if you set a video to play on the imagemap.  

  *2 This property is required if you set a video to play and a label to display after the video on the imagemap.
  :::

  :::reference-code
  *Imagemap message example with two tappable areas*

    ::::code-tabs
      :::::tab{lang="json"}
      ```json
      {
        "type": "imagemap",
        "baseUrl": "https://example.com/bot/images/rm001",
        "altText": "This is an imagemap",
        "baseSize": {
          "width": 1040,
          "height": 1040
        },
        "video": {
          "originalContentUrl": "https://example.com/video.mp4",
          "previewImageUrl": "https://example.com/video_preview.jpg",
          "area": {
            "x": 0,
            "y": 0,
            "width": 1040,
            "height": 585
          },
          "externalLink": {
            "linkUri": "https://example.com/see_more.html",
            "label": "See More"
          }
        },
        "actions": [
          {
            "type": "uri",
            "linkUri": "https://example.com/",
            "area": {
              "x": 0,
              "y": 586,
              "width": 520,
              "height": 454
            }
          },
          {
            "type": "message",
            "text": "Hello",
            "area": {
              "x": 520,
              "y": 586,
              "width": 520,
              "height": 454
            }
          }
        ]
      }
      ```
      :::::
    ::::
  :::
::

#### How to configure an image

Images used in imagemap messages must meet the following requirements:

- Image format: JPEG or PNG
- Image width: 240px, 300px, 460px, 700px, 1040px
- Max file size: 10 MB

::admonition{title="Using transparent PNG" type="tip"}
It is possible to use transparent PNG in your imagemap messages.
::

Make it possible to access images of 5 different sizes using the `baseUrl/{image width}` URL format. LINE will then download an image at the appropriate resolution based on the device.

For example, if we had a base URL of `https://example.com/images/cats`, the URL for the image with a width of 700px would be `https://example.com/images/cats/700`. To confirm all images display properly, access the image URLs.

| Image width | Example URL                                 |
| ----------- | ------------------------------------------- |
| 240px       | `https://example.com/bot/images/rm001/240`  |
| 300px       | `https://example.com/bot/images/rm001/300`  |
| 460px       | `https://example.com/bot/images/rm001/460`  |
| 700px       | `https://example.com/bot/images/rm001/700`  |
| 1040px      | `https://example.com/bot/images/rm001/1040` |

::admonition{title="Exclude image extension from URL" type="note"}
Don't include the extension in the image filename. The image will not display in the imagemap message if the URL contains the image file extension (e.g. `https://example.com/bot/images/rm001/700.png`).
::

#### Imagemap action objects

Object which specifies the actions and tappable areas of an imagemap. When an area is tapped, the following actions are triggered for each type of action:

- `uri`: The user is redirected to the specified URI.
- `message`: The specified message is sent.
- `clipboard`: The specified string is copied to the user's device clipboard.

##### Imagemap URI action object

::reference-with-code
  :::reference-content
    ::::parameter-table
      :::::parameter-table-entry{required="true"}
      #undefined
      type

      #undefined
      String

      `uri`
      :::::

      :::::parameter-table-entry{optional=""}
      #undefined
      label

      #undefined
      String

      Label for the action. Spoken when the accessibility feature is enabled on the client device.  

      Max character limit: 100
      :::::

      :::::parameter-table-entry{required="true"}
      #undefined
      linkUri

      #undefined
      String

      Webpage URL  

      Max character limit: 1000  

      The available schemes are `http`, `https`, `line`, and `tel`. For more information about the LINE URL scheme, see [Use LINE features with the LINE URL scheme](/docs/messaging-api/using-line-url-scheme/).

      The URL should be percent-encoded using UTF-8. For more information, see [About the encoding of a URL specified in a request body property](#url-encoding).
      :::::

      :::::parameter-table-entry{required="true"}
      #undefined
      area

      #undefined
      [Imagemap area object](#imagemap-area-object)

      Defined tappable area
      :::::
    ::::
  :::

  :::reference-code
  *Example imagemap URI action object*

    ::::code-tabs
      :::::tab{lang="json"}
      ```json
      {
        "type": "uri",
        "label": "https://example.com/",
        "linkUri": "https://example.com/",
        "area": {
          "x": 0,
          "y": 0,
          "width": 520,
          "height": 1040
        }
      }
      ```
      :::::
    ::::
  :::
::

##### Imagemap message action object

::reference-with-code
  :::reference-content
    ::::parameter-table
      :::::parameter-table-entry{required="true"}
      #undefined
      type

      #undefined
      String

      `message`
      :::::

      :::::parameter-table-entry{optional=""}
      #undefined
      label

      #undefined
      String

      Label for the action. Spoken when the accessibility feature is enabled on the client device.  

      Max character limit: 100
      :::::

      :::::parameter-table-entry{required="true"}
      #undefined
      text

      #undefined
      String

      Message to send  

      Max character limit: 400
      :::::

      :::::parameter-table-entry{required="true"}
      #undefined
      area

      #undefined
      [Imagemap area object](#imagemap-area-object)

      Defined tappable area
      :::::
    ::::
  :::

  :::reference-code
  *Example imagemap message action object*

    ::::code-tabs
      :::::tab{lang="json"}
      ```json
      {
        "type": "message",
        "label": "hello",
        "text": "hello",
        "area": {
          "x": 520,
          "y": 0,
          "width": 520,
          "height": 1040
        }
      }
      ```
      :::::
    ::::
  :::
::

##### Imagemap clipboard action object

::reference-with-code
  :::reference-content
  This feature is available on LINE version `14.0.0` or later for iOS or Android.

    ::::parameter-table
      :::::parameter-table-entry{required="true"}
      #undefined
      type

      #undefined
      String

      `clipboard`
      :::::

      :::::parameter-table-entry{optional=""}
      #undefined
      label

      #undefined
      String

      Label for the action. Spoken when the accessibility feature is enabled on the client device.   

      Max character limit: 100
      :::::

      :::::parameter-table-entry{required="true"}
      #undefined
      clipboardText

      #undefined
      String

      Text that is copied to the clipboard

      - Max character limit: 1000
      :::::

      :::::parameter-table-entry{required="true"}
      #undefined
      area

      #undefined
      [Imagemap area object](#imagemap-area-object)

      Defined tappable area
      :::::
    ::::
  :::

  :::reference-code
  *Example imagemap clipboard action object*

    ::::code-tabs
      :::::tab{lang="json"}
      ```json
      {
        "type": "clipboard",
        "label": "Copy",
        "clipboardText": "3B48740B",
        "area": {
          "x": 520,
          "y": 0,
          "width": 520,
          "height": 1040
        }
      }
      ```
      :::::
    ::::
  :::
::

###### Imagemap area object

::reference-with-code
  :::reference-content
  Defines the size of a tappable area. The top left is used as the origin of the area. Set these properties based on the `baseSize.width` property and the `baseSize.height` property.

    ::::parameter-table
      :::::parameter-table-entry{required="true"}
      #undefined
      x

      #undefined
      Number

      Horizontal position relative to the left edge of the area. Value must be `0` or higher.
      :::::

      :::::parameter-table-entry{required="true"}
      #undefined
      y

      #undefined
      Number

      Vertical position relative to the top of the area. Value must be `0` or higher.
      :::::

      :::::parameter-table-entry{required="true"}
      #undefined
      width

      #undefined
      Number

      Width of the tappable area
      :::::

      :::::parameter-table-entry{required="true"}
      #undefined
      height

      #undefined
      Number

      Height of the tappable area
      :::::
    ::::
  :::

  :::reference-code
  *Example imagemap area object*

    ::::code-tabs
      :::::tab{lang="json"}
      ```json
      {
        "x": 520,
        "y": 0,
        "width": 520,
        "height": 1040
      }
      ```
      :::::
    ::::
  :::
::
