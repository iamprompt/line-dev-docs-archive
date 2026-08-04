---
title: Message Object Template
navigation: true
description: ''
meta: '{}'
path: /en/_partials/messaging-api/message-object-template
__hash__: _Zeqc-AfnmP2hL0mHVBkxepHcW1CxnMr2GjKoAwd4ZY
seo:
  description: ''
---

### Template messages

Template messages are messages with predefined layouts which you can customize. For more information, see [Template messages](/docs/messaging-api/message-types/#template-messages).

The following template types are available:

- [Buttons](#buttons)
- [Confirm](#confirm)
- [Carousel](#carousel)
- [Image carousel](#image-carousel)

If you want to send messages with more flexible layouts, use [Flex Message](#flex-message).

#### Common properties of template message objects

The following properties are common to all template message objects.

::parameter-table
  :::parameter-table-entry{required="true"}
  #undefined
  type

  #undefined
  String

  `template`
  :::

  :::parameter-table-entry{required="true"}
  #undefined
  altText

  #undefined
  String

  Alternative text. When a user receives a message, it will appear in the device's notifications, chat list, and [quote messages](/docs/messaging-api/sending-messages/#send-quote-messages) as an alternative to the template message.  

  You can include Unicode emojis.  

  Max character limit: 1500
  :::

  :::parameter-table-entry{required="true"}
  #undefined
  template

  #undefined
  Object

  A [Buttons](#buttons), [Confirm](#confirm), [Carousel](#carousel), or [Image Carousel](#image-carousel) object.
  :::
::

#### Buttons template

::reference-with-code
  :::reference-content
  Template with an image, title, text, and multiple action buttons.

    ::::parameter-table
      :::::parameter-table-entry{required="true"}
      #undefined
      type

      #undefined
      String

      `buttons`
      :::::

      :::::parameter-table-entry{optional=""}
      #undefined
      thumbnailImageUrl

      #undefined
      String

      Image URL (Max character limit: 2000)  

      Protocol: HTTPS (TLS 1.2 or later)  

      Image format: JPEG or PNG  

      Max width: 1024px  

      Max file size: 10 MB

      The URL should be percent-encoded using UTF-8. For more information, see [About the encoding of a URL specified in a request body property](#url-encoding).

        ::::::admonition{title="Recommended file size" type="tip"}
        To avoid delays in displaying messages, keep the size of individual image files small (1 MB or less recommended).
        ::::::
      :::::

      :::::parameter-table-entry{optional=""}
      #undefined
      imageAspectRatio

      #undefined
      String

      Aspect ratio of the image. One of:

      - `rectangle`: 1.51:1
      - `square`: 1:1

      Default: `rectangle`
      :::::

      :::::parameter-table-entry{optional=""}
      #undefined
      imageSize

      #undefined
      String

      Size of the image. One of:

      - `cover`: The image fills the entire image area. Parts of the image that do not fit in the area are not displayed.
      - `contain`: The entire image is displayed in the image area. A background is displayed in the unused areas to the left and right of vertical images and in the areas above and below horizontal images.

      Default: `cover`
      :::::

      :::::parameter-table-entry{optional=""}
      #undefined
      imageBackgroundColor

      #undefined
      String

      Background color of the image. Specify a RGB color value. Default: `#FFFFFF` (white)
      :::::

      :::::parameter-table-entry{optional=""}
      #undefined
      title

      #undefined
      String

      Title  

      Max character limit: 40
      :::::

      :::::parameter-table-entry{required="true"}
      #undefined
      text

      #undefined
      String

      Message text  

      Max character limit: 160 (no image or title)  

      Max character limit: 60 (message with an image or title)
      :::::

      :::::parameter-table-entry{optional=""}
      #undefined
      defaultAction

      #undefined
      [Action object](#action-objects)

      Action when image, title or text area is tapped.
      :::::

      :::::parameter-table-entry{required="true"}
      #undefined
      actions

      #undefined
      Array of [action objects](#action-objects)

      Action when tapped  

      Max objects: 4
      :::::
    ::::
  :::

  :::reference-code
  *Buttons template message example*

    ::::code-tabs
      :::::tab{lang="json"}
      ```json
      {
        "type": "template",
        "altText": "This is a buttons template",
        "template": {
          "type": "buttons",
          "thumbnailImageUrl": "https://example.com/bot/images/image.jpg",
          "imageAspectRatio": "rectangle",
          "imageSize": "cover",
          "imageBackgroundColor": "#FFFFFF",
          "title": "Menu",
          "text": "Please select",
          "defaultAction": {
            "type": "uri",
            "label": "View detail",
            "uri": "http://example.com/page/123"
          },
          "actions": [
            {
              "type": "postback",
              "label": "Buy",
              "data": "action=buy&itemid=123"
            },
            {
              "type": "postback",
              "label": "Add to cart",
              "data": "action=add&itemid=123"
            },
            {
              "type": "uri",
              "label": "View detail",
              "uri": "http://example.com/page/123"
            }
          ]
        }
      }
      ```
      :::::
    ::::
  :::
::

#### Confirm template

::reference-with-code
  :::reference-content
  Template with two action buttons.

    ::::parameter-table
      :::::parameter-table-entry{required="true"}
      #undefined
      type

      #undefined
      String

      `confirm`
      :::::

      :::::parameter-table-entry{required="true"}
      #undefined
      text

      #undefined
      String

      Message text  

      Max character limit: 240
      :::::

      :::::parameter-table-entry{required="true"}
      #undefined
      actions

      #undefined
      Array of [action objects](#action-objects)

      Action when tapped  

      Set 2 actions for the 2 buttons
      :::::
    ::::
  :::

  :::reference-code
  *Confirm template message example*

    ::::code-tabs
      :::::tab{lang="json"}
      ```json
      {
        "type": "template",
        "altText": "this is a confirm template",
        "template": {
          "type": "confirm",
          "text": "Are you sure?",
          "actions": [
            {
              "type": "message",
              "label": "Yes",
              "text": "yes"
            },
            {
              "type": "message",
              "label": "No",
              "text": "no"
            }
          ]
        }
      }
      ```
      :::::
    ::::
  :::
::

#### Carousel template

::reference-with-code
  :::reference-content
  Template with multiple columns which can be cycled like a carousel. The columns are shown in order when scrolling horizontally.

    ::::parameter-table
      :::::parameter-table-entry{required="true"}
      #undefined
      type

      #undefined
      String

      `carousel`
      :::::

      :::::parameter-table-entry{required="true"}
      #undefined
      columns

      #undefined
      Array of [column objects](#column-object-for-carousel)

      Array of columns  

      Max columns: 10
      :::::

      :::::parameter-table-entry{optional=""}
      #undefined
      imageAspectRatio

      #undefined
      String

      Aspect ratio of the image. One of:

      - `rectangle`: 1.51:1
      - `square`: 1:1

      Applies to all columns. Default: `rectangle`
      :::::

      :::::parameter-table-entry{optional=""}
      #undefined
      imageSize

      #undefined
      String

      Size of the image. One of:

      - `cover`: The image fills the entire image area. Parts of the image that do not fit in the area are not displayed.
      - `contain`: The entire image is displayed in the image area. A background is displayed in the unused areas to the left and right of vertical images and in the areas above and below horizontal images.

      Applies to all columns. Default: `cover`.
      :::::
    ::::
  :::

  :::reference-code
  *Carousel template message example*

    ::::code-tabs
      :::::tab{lang="json"}
      ```json
      {
        "type": "template",
        "altText": "this is a carousel template",
        "template": {
          "type": "carousel",
          "columns": [
            {
              "thumbnailImageUrl": "https://example.com/bot/images/item1.jpg",
              "imageBackgroundColor": "#FFFFFF",
              "title": "this is menu",
              "text": "description",
              "defaultAction": {
                "type": "uri",
                "label": "View detail",
                "uri": "http://example.com/page/123"
              },
              "actions": [
                {
                  "type": "postback",
                  "label": "Buy",
                  "data": "action=buy&itemid=111"
                },
                {
                  "type": "postback",
                  "label": "Add to cart",
                  "data": "action=add&itemid=111"
                },
                {
                  "type": "uri",
                  "label": "View detail",
                  "uri": "http://example.com/page/111"
                }
              ]
            },
            {
              "thumbnailImageUrl": "https://example.com/bot/images/item2.jpg",
              "imageBackgroundColor": "#000000",
              "title": "this is menu",
              "text": "description",
              "defaultAction": {
                "type": "uri",
                "label": "View detail",
                "uri": "http://example.com/page/222"
              },
              "actions": [
                {
                  "type": "postback",
                  "label": "Buy",
                  "data": "action=buy&itemid=222"
                },
                {
                  "type": "postback",
                  "label": "Add to cart",
                  "data": "action=add&itemid=222"
                },
                {
                  "type": "uri",
                  "label": "View detail",
                  "uri": "http://example.com/page/222"
                }
              ]
            }
          ],
          "imageAspectRatio": "rectangle",
          "imageSize": "cover"
        }
      }
      ```
      :::::
    ::::
  :::
::

##### Column object for carousel

::parameter-table
  :::parameter-table-entry{optional=""}
  #undefined
  thumbnailImageUrl

  #undefined
  String

  Image URL (Max character limit: 2000)  

  Protocol: HTTPS (TLS 1.2 or later)  

  Image format: JPEG or PNG  

  Aspect ratio: 1.51:1 (width : height)  

  Max width: 1024px  

  Max file size: 10 MB

  The URL should be percent-encoded using UTF-8. For more information, see [About the encoding of a URL specified in a request body property](#url-encoding).

    ::::admonition{title="Recommended file size" type="tip"}
    To avoid delays in displaying messages, keep the size of individual image files small (1 MB or less recommended).
    ::::
  :::

  :::parameter-table-entry{optional=""}
  #undefined
  imageBackgroundColor

  #undefined
  String

  Background color of the image. Specify a RGB color value. The default value is `#FFFFFF` (white).
  :::

  :::parameter-table-entry{optional=""}
  #undefined
  title

  #undefined
  String

  Title  

  Max character limit: 40
  :::

  :::parameter-table-entry{required="true"}
  #undefined
  text

  #undefined
  String

  Message text  

  Max character limit: 120 (no image or title)  

  Max character limit: 60 (message with an image or title)
  :::

  :::parameter-table-entry{optional=""}
  #undefined
  defaultAction

  #undefined
  [Action object](#action-objects)

  Action when image, title or text area is tapped.
  :::

  :::parameter-table-entry{required="true"}
  #undefined
  actions

  #undefined
  Array of [action objects](#action-objects)

  Action when tapped  

  Max objects: 3
  :::
::

::admonition{title="Note" type="note"}
Keep the number of actions consistent for all columns. If you use an image or title for a column, make sure to do the same for all other columns.
::

#### Image carousel template

::reference-with-code
  :::reference-content
  Template with multiple images which can be cycled like a carousel. The images are shown in order when scrolling horizontally.

    ::::parameter-table
      :::::parameter-table-entry{required="true"}
      #undefined
      type

      #undefined
      String

      `image_carousel`
      :::::

      :::::parameter-table-entry{required="true"}
      #undefined
      columns

      #undefined
      Array of [column objects](#column-object-for-image-carousel)

      Array of columns  

      Max columns: 10
      :::::
    ::::
  :::

  :::reference-code
  *Image carousel template message example*

    ::::code-tabs
      :::::tab{lang="json"}
      ```json
      {
        "type": "template",
        "altText": "this is a image carousel template",
        "template": {
          "type": "image_carousel",
          "columns": [
            {
              "imageUrl": "https://example.com/bot/images/item1.jpg",
              "action": {
                "type": "postback",
                "label": "Buy",
                "data": "action=buy&itemid=111"
              }
            },
            {
              "imageUrl": "https://example.com/bot/images/item2.jpg",
              "action": {
                "type": "message",
                "label": "Yes",
                "text": "yes"
              }
            },
            {
              "imageUrl": "https://example.com/bot/images/item3.jpg",
              "action": {
                "type": "uri",
                "label": "View detail",
                "uri": "http://example.com/page/222"
              }
            }
          ]
        }
      }
      ```
      :::::
    ::::
  :::
::

##### Column object for image carousel

::parameter-table
  :::parameter-table-entry{required="true"}
  #undefined
  imageUrl

  #undefined
  String

  Image URL (Max character limit: 2000)  

  Protocol: HTTPS (TLS 1.2 or later)  

  Image format: JPEG or PNG  

  Aspect ratio: 1:1 (width : height)  

  Max width: 1024px  

  Max file size: 10 MB

  The URL should be percent-encoded using UTF-8. For more information, see [About the encoding of a URL specified in a request body property](#url-encoding).

    ::::admonition{title="Recommended file size" type="tip"}
    To avoid delays in displaying messages, keep the size of individual image files small (1 MB or less recommended).
    ::::
  :::

  :::parameter-table-entry{required="true"}
  #undefined
  action

  #undefined
  [Action object](#action-objects)

  Action when image is tapped
  :::
::
