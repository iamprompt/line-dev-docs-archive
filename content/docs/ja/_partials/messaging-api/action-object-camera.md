---
title: Action Object Camera
navigation: true
description: ''
meta: '{}'
path: /ja/_partials/messaging-api/action-object-camera
__hash__: ncDHeiVEuY6hF8ZvKN7u7HtEs-BHax4MF_oq9U1ff2A
seo:
  description: ''
---

### カメラアクション

::reference-with-code
  :::reference-content
  クイックリプライボタンにのみ設定できるアクションです。このアクションが関連づけられたボタンがタップされると、LINE内のカメラが起動します。

    ::::parameter-table
      :::::parameter-table-entry{required="true"}
      #undefined
      type

      #undefined
      String

      `camera`
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
  *カメラアクションオブジェクトの例*

    ::::code-tabs
      :::::tab{lang="json"}
      ```json
      {
        "type": "camera",
        "label": "Camera"
      }
      ```
      :::::
    ::::
  :::
::
