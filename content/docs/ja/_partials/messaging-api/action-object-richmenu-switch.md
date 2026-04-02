---
title: Action Object Richmenu Switch
navigation: true
description: ''
meta: '{}'
path: /ja/_partials/messaging-api/action-object-richmenu-switch
__hash__: GcpbTqS_VG5g-HkP5Lx7_itZVk2aTcqQVznkug0eNTE
seo:
  description: ''
---

### リッチメニュー切替アクション

::reference-with-code
  :::reference-content
  リッチメニューにのみ設定できるアクションです。Flex Messageやクイックリプライでは利用できません。このアクションが関連づけられたリッチメニューがタップされると、リッチメニューの切替が行われ、ユーザーが選択したリッチメニューエイリアスIDを含む[ポストバックイベント](#postback-event)が、Webhookを介して返されます。詳しくは、『Messaging APIドキュメント』の「[リッチメニューでタブ切り替えを行う](/docs/messaging-api/switch-rich-menus/)」を参照してください。

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

      アクションのラベル。リッチメニューでは省略可能です。ユーザーデバイスのアクセシビリティ機能が有効な場合に読み上げられます。

      - 最大文字数：20
      :::::

      :::::parameter-table-entry{required="true"}
      #undefined
      richMenuAliasId

      #undefined
      String

      切替先のリッチメニューエイリアスID。
      :::::

      :::::parameter-table-entry{required="true"}
      #undefined
      data

      #undefined
      String

      Webhookを介して、[ポストバックイベント](#postback-event)の`postback.data`プロパティで返される文字列

      - 最大文字数：300
      :::::
    ::::
  :::

  :::reference-code
  *リッチメニュー切替アクションオブジェクトの例*

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
