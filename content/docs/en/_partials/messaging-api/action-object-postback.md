---
title: Action Object Postback
navigation: true
description: ''
meta: '{}'
path: /en/_partials/messaging-api/action-object-postback
__hash__: 0UV0KhXVuWvvyV-PTPhFeDjt7NyybhG9RkATfSrNXIo
seo:
  description: ''
---

### Postback action

::reference-with-code
  :::reference-content
  When a control associated with this action is tapped, a [postback event](#postback-event) is returned via webhook with the specified string in the `data` property.

    ::::parameter-table
      :::::parameter-table-entry{required="true"}
      #undefined
      type

      #undefined
      String

      `postback`
      :::::

      :::::parameter-table-entry{annotation="See description"}
      #undefined
      label

      #undefined
      String

      Label for the action. The specification depends on which object the action is set to. For more information, see [Specifications of the label](#action-object-label-spec).
      :::::

      :::::parameter-table-entry{required="true"}
      #undefined
      data

      #undefined
      String

      String returned via webhook in the `postback.data` property of the [postback event](#postback-event)  

      Max character limit: 300
      :::::

      :::::parameter-table-entry{optional=""}
      #undefined
      displayText

      #undefined
      String

      Text displayed on the LINE chat screen as a message sent by the user when the action is performed.  

      Max character limit: 300  

      The `displayText` and `text` properties can't both be used at the same time.
      :::::

      :::::parameter-table-entry{optional=""}
      #undefined
      text

      #undefined
      String

      【Deprecated】 Text displayed on the LINE chat screen as a message sent by the user when the action is performed. Returned from the server through a webhook. This property shouldn't be used with quick reply buttons.  

      Max character limit: 300  

      The `displayText` and `text` properties cannot both be used at the same time.
      :::::

      :::::parameter-table-entry{optional=""}
      #undefined
      inputOption

      #undefined
      String

      The display method of such as rich menu based on user action. Specify one of the following values:

      - `closeRichMenu`: Close rich menu
      - `openRichMenu`: Open rich menu
      - `openKeyboard`: Open keyboard
      - `openVoice`: Open voice message input mode

      This property is available on LINE version `12.6.0` or later for iOS or Android.
      :::::

      :::::parameter-table-entry{annotation="See description"}
      #undefined
      fillInText

      #undefined
      String

      String to be pre-filled in the input field when the keyboard is opened. Valid only when the `inputOption` property is set to `openKeyboard`. The string can be broken by a newline character (`\n`).  

      Max character limit: 300

      This property is available on LINE version `12.6.0` or later for iOS or Android.
      :::::
    ::::

  #### Specifications of the label

  The `label` property of the following actions has different specifications for each object on which the action is set:

  - [Postback action](#postback-action)
  - [Message action](#message-action)
  - [URI action](#uri-action)
  - [Datetime picker action](#datetime-picker-action)
  - [Clipboard action](#clipboard-action)

  The label specifications for the actions listed above are as follows. For label specifications for actions other than those listed above, see the specifications for each action.

  | Object                                           | Required       | Max character limit |
  | ------------------------------------------------ | -------------- | ------------------- |
  | [Template messages](#template-messages)          | Image carousel | Optional            | 12 |
  | Other than image carousel                        | Required       | 20                  |
  | [Rich menu](#rich-menu-object) *1                | Optional       | 20                  |
  | [Quick reply button](#quick-reply-button-object) | Required       | 20                  |
  | [Flex Message](#flex-message)                    | Button         | Required            | 40 |
  | Other than button *2                             | Optional       | 40                  |

  *1 Spoken when the accessibility feature is enabled on the client device.

  *2 The specified label isn't displayed.
  :::

  :::reference-code
  *Example postback action object*

    ::::code-tabs
      :::::tab{lang="json"}
      ```json
      {
        "type": "postback",
        "label": "Buy",
        "data": "action=buy&itemid=111",
        "displayText": "Buy",
        "inputOption": "openKeyboard",
        "fillInText": "---\nName: \nPhone: \nBirthday: \n---"
      }
      ```
      :::::
    ::::
  :::
::
