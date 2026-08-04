---
title: Rich Menu Object
navigation: true
description: ''
meta: '{}'
path: /ja/_partials/messaging-api/rich-menu-object
__hash__: GNKOJmWYR-bnBK5NEaT6Yeigc1uI4KoPhdU9xnapqZc
seo:
  description: ''
---

### リッチメニューオブジェクト

::admonition{title="リッチメニューオブジェクトが有効か確認したい場合" type="tip"}
リッチメニューオブジェクトが有効かを確認したい場合、[リッチメニューオブジェクトを検証する](#validate-rich-menu-object)エンドポイントで検証できます。
::

::reference-with-code
  :::reference-content
    ::::parameter-table
      :::::parameter-table-entry{required="true"}
      #undefined
      size

      #undefined
      Object

      [`size`オブジェクト](#size-object)。トークルームに表示されるリッチメニューの幅と高さを表します。使用できるリッチメニューの画像の幅サイズは800px以上2500px以下で、高さサイズは250px以上です。ただし、アスペクト比（幅÷高さ）が1.45以上になるようにします。
      :::::

      :::::parameter-table-entry{required="true"}
      #undefined
      selected

      #undefined
      Boolean

      デフォルトでリッチメニューを表示する場合は`true`です。それ以外は`false`です。
      :::::

      :::::parameter-table-entry{required="true"}
      #undefined
      name

      #undefined
      String

      リッチメニューの名前。リッチメニューの管理に役立ちます。ユーザーには表示されません。  

      最大文字数：300
      :::::

      :::::parameter-table-entry{required="true"}
      #undefined
      chatBarText

      #undefined
      String

      トークルームメニューに表示されるテキストです。  

      最大文字数：14
      :::::

      :::::parameter-table-entry{required="true"}
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
  *リッチメニューオブジェクトの例*

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
