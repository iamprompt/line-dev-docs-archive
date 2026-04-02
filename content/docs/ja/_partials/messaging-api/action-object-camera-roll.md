---
title: Action Object Camera Roll
navigation: true
description: ''
meta: '{}'
path: /ja/_partials/messaging-api/action-object-camera-roll
__hash__: KisZ-g-Emz2mWkZfzd7oBq_tf0ton4sYJNBHoKgFEKM
seo:
  description: ''
---

### カメラロールアクション

::reference-with-code
  :::reference-content
  クイックリプライボタンにのみ設定できるアクションです。このアクションが関連づけられたボタンがタップされると、LINEのカメラロール画面が開きます。

    ::::parameter-table
      :::::parameter-table-entry{required="true"}
      #undefined
      type

      #undefined
      String

      `cameraRoll`
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
  *カメラロールアクションオブジェクトの例*

    ::::code-tabs
      :::::tab{lang="json"}
      ```json
      {
        "type": "cameraRoll",
        "label": "Camera roll"
      }
      ```
      :::::
    ::::
  :::
::
