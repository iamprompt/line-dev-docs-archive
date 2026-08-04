---
title: Rich Menu Response Object
navigation: true
description: ''
meta: '{}'
path: /ja/_partials/messaging-api/rich-menu-response-object
__hash__: hh_nmcIiqdDuu9VR6bIFousNjPY5F51Hyj_Gk8_cJHs
seo:
  description: ''
---

### リッチメニューレスポンスオブジェクト

::reference-with-code
  :::reference-content
    ::::parameter-table
      :::::parameter-table-entry
      #undefined
      richMenuId

      #undefined
      String

      リッチメニューのID
      :::::

      :::::parameter-table-entry
      #undefined
      size

      #undefined
      Object

      [`size`オブジェクト](#size-object)。トークルームに表示されるリッチメニューの幅と高さを表します。使用できるリッチメニューの画像の幅サイズは800px以上2500px以下で、高さサイズは250px以上です。ただし、アスペクト比（幅÷高さ）が1.45以上になるようにします。
      :::::

      :::::parameter-table-entry
      #undefined
      selected

      #undefined
      Boolean

      デフォルトでリッチメニューを表示する場合は`true`です。それ以外は`false`です。
      :::::

      :::::parameter-table-entry
      #undefined
      name

      #undefined
      String

      リッチメニューの名前。リッチメニューの管理に役立ちます。ユーザーには表示されません。  

      最大文字数：300
      :::::

      :::::parameter-table-entry
      #undefined
      chatBarText

      #undefined
      String

      トークルームメニューに表示されるテキストです。  

      最大文字数：14
      :::::

      :::::parameter-table-entry
      #undefined
      areas

      #undefined
      Array

      タップ領域の座標とサイズを定義する、[領域オブジェクト](#area-object)の配列。  

      最大領域オブジェクト数：20
      :::::
    ::::
  :::

  :::reference-code
  *リッチメニューレスポンスオブジェクトの例*

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

#### `size`オブジェクト

::reference-with-code
  :::reference-content
    ::::parameter-table
      :::::parameter-table-entry{required="true"}
      #undefined
      width

      #undefined
      Number

      リッチメニューの幅。`800`以上、`2500`以下の値を指定します。ただし、アスペクト比（幅÷高さ）が1.45以上になるようにします。
      :::::

      :::::parameter-table-entry{required="true"}
      #undefined
      height

      #undefined
      Number

      リッチメニューの高さ。`250`以上の値を指定します。ただし、アスペクト比（幅÷高さ）が1.45以上になるようにします。
      :::::
    ::::
  :::

  :::reference-code
  *sizeオブジェクトの例*

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

#### 領域オブジェクト

::reference-with-code
  :::reference-content
    ::::parameter-table
      :::::parameter-table-entry{required="true"}
      #undefined
      bounds

      #undefined
      Object

      領域の境界をピクセルで表すオブジェクト。「[`bounds`オブジェクト](#bounds-object)」を参照してください。
      :::::

      :::::parameter-table-entry{required="true"}
      #undefined
      action

      #undefined
      Object

      領域がタップされたときに実行されるアクション。「[アクションオブジェクト](#action-objects)」を参照してください。
      :::::
    ::::
  :::

  :::reference-code
  *領域オブジェクトの例*

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

##### `bounds`オブジェクト

::reference-with-code
  :::reference-content
    ::::parameter-table
      :::::parameter-table-entry{required="true"}
      #undefined
      x

      #undefined
      Number

      画像の左端を基準としたタップ領域の位置（横方向の相対位置）。`0`以上の値を設定してください。
      :::::

      :::::parameter-table-entry{required="true"}
      #undefined
      y

      #undefined
      Number

      画像の上端を基準としたタップ領域の位置（縦方向の相対位置）。`0`以上の値を設定してください。
      :::::

      :::::parameter-table-entry{required="true"}
      #undefined
      width

      #undefined
      Number

      タップ領域の幅
      :::::

      :::::parameter-table-entry{required="true"}
      #undefined
      height

      #undefined
      Number

      タップ領域の高さ
      :::::
    ::::
  :::

  :::reference-code
  *boundsオブジェクトの例*

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
