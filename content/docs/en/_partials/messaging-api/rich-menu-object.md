---
title: Rich Menu Object
navigation: true
description: ''
meta: '{}'
path: /en/_partials/messaging-api/rich-menu-object
__hash__: QVzO-ctrpzNDiuvyiAedxTwQHkiO-0ydtgiAm43cTTk
seo:
  description: ''
---

### Rich menu object

::admonition{title="Checking a rich menu object is valid" type="tip"}
If you want to check that a rich menu object is valid, you can use the [Validate rich menu object](#validate-rich-menu-object) endpoint.
::

::reference-with-code
  :::reference-content
    ::::parameter-table
      :::::parameter-table-entry{required="true"}
      #undefined
      size

      #undefined
      Object

      [`size` object](#size-object) which contains the width and height of the rich menu displayed in the chat. The width of the rich menu image must be between 800px and 2500px. The height must be at least 250px. However, the aspect ratio (width / height) must be at least 1.45.
      :::::

      :::::parameter-table-entry{required="true"}
      #undefined
      selected

      #undefined
      Boolean

      `true` to display the rich menu by default. Otherwise, `false`.
      :::::

      :::::parameter-table-entry{required="true"}
      #undefined
      name

      #undefined
      String

      Name of the rich menu. This value can be used to help manage your rich menus and is not displayed to users.  

      Max character limit: 300
      :::::

      :::::parameter-table-entry{required="true"}
      #undefined
      chatBarText

      #undefined
      String

      Text displayed in the chat bar  

      Max character limit: 14
      :::::

      :::::parameter-table-entry{required="true"}
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
  *Example rich menu object*

    ::::code-tabs
      :::::tab{lang="json"}
      ```json
      {
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
