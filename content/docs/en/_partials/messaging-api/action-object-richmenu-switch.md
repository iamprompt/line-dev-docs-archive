---
title: Action Object Richmenu Switch
navigation: true
description: ''
meta: '{}'
path: /en/_partials/messaging-api/action-object-richmenu-switch
__hash__: tT3ZmVo7WD5oIj8oSxiznKMjMgMxmHEF6kWAdpH7iSE
seo:
  description: ''
---

### Rich menu switch action

::reference-with-code
  :::reference-content
  This action can be configured only with rich menus. It can't be used for Flex Messages or quick replies. When you tap a rich menu associated with this action, you can switch between rich menus, and a [postback event](#postback-event) including the rich menu alias ID selected by the user is returned via a webhook. For more information, see [Switch between tabs on rich menus](/docs/messaging-api/switch-rich-menus/) in the Messaging API documentation.

    ::::parameter-table
      :::::parameter-table-entry{required="true"}
      #undefined
      type

      #undefined
      String

      `richmenuswitch`
      :::::

      :::::parameter-table-entry{optional=""}
      #undefined
      label

      #undefined
      String

      Action label. Optional for rich menus. Read when the user's device accessibility feature is enabled.

      - Max character limit: 20
      :::::

      :::::parameter-table-entry{required="true"}
      #undefined
      richMenuAliasId

      #undefined
      String

      Rich menu alias ID to switch to.
      :::::

      :::::parameter-table-entry{required="true"}
      #undefined
      data

      #undefined
      String

      String returned by the `postback.data` property of the [postback event](#postback-event) via a webhook

      - Max character limit: 300
      :::::
    ::::
  :::

  :::reference-code
  *Rich menu switch action object example*

    ::::code-tabs
      :::::tab{lang="json"}
      ```json
      {
        "type": "richmenuswitch",
        "richMenuAliasId": "richmenu-alias-b",
        "data": "richmenu-changed-to-b"
      }
      ```
      :::::
    ::::
  :::
::
