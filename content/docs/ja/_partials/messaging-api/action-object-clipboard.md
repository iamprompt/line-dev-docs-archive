---
title: Action Object Clipboard
navigation: true
description: ''
meta: '{}'
path: /ja/_partials/messaging-api/action-object-clipboard
__hash__: mpWXKMjwD8GM4GiYEZ8wCGQjJO0W4W-_qsl_M7hyZ28
seo:
  description: ''
---

### クリップボードアクション

::reference-with-code
  :::reference-content
  ユーザーがこのアクションが関連づけられたコントロールをタップすると、`clipboardText`プロパティに指定されたテキストが、端末のクリップボードにコピーされます。

  iOS版LINEまたはAndroid版LINEのバージョン`14.0.0`以降で動作します。

    ::::parameter-table
      :::::parameter-table-entry{required="true"}
      #undefined
      type

      #undefined
      String

      `clipboard`
      :::::

      :::::parameter-table-entry{annotation="説明を参照"}
      #undefined
      label

      #undefined
      String

      アクションのラベル。アクションを設定するオブジェクトごとに、仕様が異なります。詳しくは、「[ラベルの仕様](#action-object-label-spec)」を参照してください。
      :::::

      :::::parameter-table-entry{required="true"}
      #undefined
      clipboardText

      #undefined
      String

      クリップボードにコピーされる文字列

      - 最大文字数：1000
      :::::
    ::::
  :::

  :::reference-code
  *クリップボードアクションオブジェクトの例*

    ::::code-tabs
      :::::tab{lang="json"}
      ```json
      {
        "type": "clipboard",
        "label": "Copy",
        "clipboardText": "3B48740B"
      }
      ```
      :::::
    ::::
  :::
::
