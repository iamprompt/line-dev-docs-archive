---
title: Rich Menu Response Object
navigation: true
description: ''
meta: '{}'
path: /en/_partials/messaging-api/rich-menu-response-object
__hash__: eP5bJuK4dOvKpM6Y5kP1DPNei6bXlvzJrLYQkRjG3Sc
seo:
  description: ''
---

### Rich menu response object

::reference-with-code
  :::reference-content
    ::::parameter-table
      :::::parameter-table-entry
      #undefined
      richMenuId

      #undefined
      String

      ID of a rich menu
      :::::

      :::::parameter-table-entry
      #undefined
      size

      #undefined
      Object

      [`size` object](#size-object) which contains the width and height of the rich menu displayed in the chat. The width of the rich menu image must be between 800px and 2500px. The height must be at least 250px. However, the aspect ratio (width / height) must be at least 1.45.
      :::::

      :::::parameter-table-entry
      #undefined
      selected

      #undefined
      Boolean

      `true` to display the rich menu by default. Otherwise, `false`.
      :::::

      :::::parameter-table-entry
      #undefined
      name

      #undefined
      String

      Name of the rich menu. This value can be used to help manage your rich menus and is not displayed to users.  

      Max character limit: 300
      :::::

      :::::parameter-table-entry
      #undefined
      chatBarText

      #undefined
      String

      Text displayed in the chat bar  

      Max character limit: 14
      :::::

      :::::parameter-table-entry
      #undefined
      areas

      #undefined
      Array

      Array of [area objects](#area-object) which define the coordinates and size of tappable areas  

      Max: 20 area objects
      :::::
    ::::
  :::

  :::reference-code
  *Example rich menu response object*

    ::::code-tabs
      :::::tab{lang="json"}
      ```json
      {
        "richMenuId": "{richMenuId}",
        "size": {
          "width": 2500,
          "height": 1686
        },
        "selected": false,
        "name": "Nice rich menu",
        "chatBarText": "Tap to open",
        "areas": [
          {
            "bounds": {
              "x": 0,
              "y": 0,
              "width": 2500,
              "height": 1686
            },
            "action": {
              "type": "postback",
              "label": "Buy",
              "data": "action=buy&itemid=123"
            }
          }
        ]
      }
      ```
      :::::
    ::::
  :::
::

#### `size` object

::reference-with-code
  :::reference-content
    ::::parameter-table
      :::::parameter-table-entry{required="true"}
      #undefined
      width

      #undefined
      Number

      Width of the rich menu. The width of the rich menu image must be between `800` and `2500`. However, the aspect ratio (width / height) must be at least 1.45.
      :::::

      :::::parameter-table-entry{required="true"}
      #undefined
      height

      #undefined
      Number

      Height of the rich menu. The height must be at least `250`. However, the aspect ratio (width / height) must be at least 1.45.
      :::::
    ::::
  :::

  :::reference-code
  *Example size object*

    ::::code-tabs
      :::::tab{lang="json"}
      ```json
      {
        "width": 2500,
        "height": 1686
      }
      ```
      :::::
    ::::
  :::
::

#### Area object

::reference-with-code
  :::reference-content
    ::::parameter-table
      :::::parameter-table-entry{required="true"}
      #undefined
      bounds

      #undefined
      Object

      Object describing the boundaries of the area in pixels. See [`bounds` object](#bounds-object).
      :::::

      :::::parameter-table-entry{required="true"}
      #undefined
      action

      #undefined
      Object

      Action performed when the area is tapped. See [action objects](#action-objects).
      :::::
    ::::
  :::

  :::reference-code
  *Example area object*

    ::::code-tabs
      :::::tab{lang="json"}
      ```json
      {
        "bounds": {
          "x": 0,
          "y": 0,
          "width": 2500,
          "height": 1686
        },
        "action": {
          "type": "postback",
          "label": "Buy",
          "data": "action=buy&itemid=123"
        }
      }
      ```
      :::::
    ::::
  :::
::

##### `bounds` object

::reference-with-code
  :::reference-content
    ::::parameter-table
      :::::parameter-table-entry{required="true"}
      #undefined
      x

      #undefined
      Number

      Horizontal position of the top-left corner of the tappable area relative to the left edge of the image. Value must be `0` or higher.
      :::::

      :::::parameter-table-entry{required="true"}
      #undefined
      y

      #undefined
      Number

      Vertical position of the top-left corner of the tappable area relative to the left edge of the image. Value must be `0` or higher.
      :::::

      :::::parameter-table-entry{required="true"}
      #undefined
      width

      #undefined
      Number

      Width of the tappable area.
      :::::

      :::::parameter-table-entry{required="true"}
      #undefined
      height

      #undefined
      Number

      Height of the tappable area.
      :::::
    ::::
  :::

  :::reference-code
  *Example bounds object*

    ::::code-tabs
      :::::tab{lang="json"}
      ```json
      {
        "x": 0,
        "y": 0,
        "width": 2500,
        "height": 1686
      }
      ```
      :::::
    ::::
  :::
::
