---
title: Action Object Location
navigation: true
description: ''
meta: '{}'
path: /ja/_partials/messaging-api/action-object-location
__hash__: aWL9tYVp_x7f8t8RIC4mZDbHgN-WMepnkYtUysQ_fL4
seo:
  description: ''
---

### 位置情報アクション

::reference-with-code
  :::reference-content
  クイックリプライボタンにのみ設定できるアクションです。このアクションが関連づけられたボタンがタップされると、LINEの位置情報画面が開きます。

    ::::parameter-table
      :::::parameter-table-entry{required="true"}
      #undefined
      type

      #undefined
      String

      `location`
      :::::

      :::::parameter-table-entry{required="true"}
      #undefined
      label

      #undefined
      String

      アクションのラベル  

      最大文字数：20
      :::::
    ::::
  :::

  :::reference-code
  *位置情報アクションオブジェクトの例*

    ::::code-tabs
      :::::tab{lang="json"}
      ```json
      {
        "type": "location",
        "label": "Location"
      }
      ```
      :::::
    ::::
  :::
::
