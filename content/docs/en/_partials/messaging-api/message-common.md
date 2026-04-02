---
title: Message Common
navigation: true
description: ''
meta: '{}'
path: /en/_partials/messaging-api/message-common
__hash__: mv9vrGdll58wqwLD2qGLv5kwXg0qP4XFc-CIQtKX9eY
seo:
  description: ''
---

### Common properties for messages

The following properties can be specified in all the message objects.

#### Quick reply

These properties are used for the quick reply feature. For more information, see [Use quick replies](/docs/messaging-api/using-quick-reply/).

::parameter-table
  :::parameter-table-entry{optional=""}
  #undefined
  quickReply

  #undefined
  Object

  [items object](#items-object)
  :::
::

If the user receives multiple [message objects](#message-objects), the `quickReply` property of the last message object is displayed.

##### items object

::reference-with-code
  :::reference-content
  This is a container that contains [quick reply buttons](#quick-reply-button-object).

    ::::parameter-table
      :::::parameter-table-entry{required="true"}
      #undefined
      items

      #undefined
      Array of objects

      [Quick reply button objects](#quick-reply-button-object).  

      Max: 13 objects
      :::::
    ::::
  :::

  :::reference-code
  *Example items object*

    ::::code-tabs
      :::::tab{lang="json"}
      ```json
      "quickReply": {
        "items": [
          {
            "type": "action",
            "action": {
              "type": "cameraRoll",
              "label": "Send photo"
            }
          },
          {
            "type": "action",
            "action": {
              "type": "camera",
              "label": "Open camera"
            }
          }
        ]
      }
      ```
      :::::
    ::::
  :::
::

##### Quick reply button object

This is a quick reply option that is displayed as a button.

::parameter-table
  :::parameter-table-entry{required="true"}
  #undefined
  type

  #undefined
  String

  `action`
  :::

  :::parameter-table-entry{optional=""}
  #undefined
  imageUrl

  #undefined
  String

  URL of the icon that is displayed at the beginning of the button (Max character limit: 2000)  

  Protocol: HTTPS (TLS 1.2 or later)  

  Image format: PNG  

  Aspect ratio: 1:1 (width : height)  

  Max file size: 1 MB

  There is no limit on the image size.  

  If the `action` property has a [camera action](#camera-action), [camera roll action](#camera-roll-action), or [location action](#location-action), and the `imageUrl` property is not set, the default icon is displayed.

  The URL should be percent-encoded using UTF-8. For more information, see [About the encoding of a URL specified in a request body property](#url-encoding).
  :::

  :::parameter-table-entry{required="true"}
  #undefined
  action

  #undefined
  Object

  Action performed when this button is tapped. Specify an [action object](#action-objects). The following is a list of the available actions:

  - [Postback action](#postback-action)
  - [Message action](#message-action)
  - [URI action](#uri-action)
  - [Datetime picker action](#datetime-picker-action)
  - [Camera action](#camera-action)
  - [Camera roll action](#camera-roll-action)
  - [Location action](#location-action)
  - [Clipboard action](#clipboard-action)
  :::
::

If a version of LINE that doesn't support the quick reply feature receives a message that contains quick reply buttons, only the message is displayed.

#### Customize icon and display name

::reference-with-code
  :::reference-content
  When sending a message from the LINE Official Account, you can specify the `sender.name` and the `sender.iconUrl` properties in [Message objects](/reference/messaging-api/#message-objects).

    ::::parameter-table
      :::::parameter-table-entry{optional=""}
      #undefined
      sender.name

      #undefined
      String

      Display name. Certain words such as `LINE` may not be used.  

      Max character limit: 20
      :::::

      :::::parameter-table-entry{optional=""}
      #undefined
      sender.iconUrl

      #undefined
      String

      URL of the image to display as an icon when sending a message (Max character limit: 2000)  

      Protocol: HTTPS (TLS 1.2 or later)  

      Image format: PNG  

      Aspect ratio: 1:1 (width : height)  

      Max file size: 1 MB

      The URL should be percent-encoded using UTF-8. For more information, see [About the encoding of a URL specified in a request body property](#url-encoding).
      :::::
    ::::
  :::

  :::reference-code
  *Text message example of customized icon and display name*

    ::::code-tabs
      :::::tab{lang="json"}
      ```json
      {
        "type": "text",
        "text": "Hello, I am Cony!!",
        "sender": {
          "name": "Cony",
          "iconUrl": "https://line.me/conyprof"
        }
      }
      ```
      :::::
    ::::
  :::
::
