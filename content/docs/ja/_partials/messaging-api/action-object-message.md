---
title: Action Object Message
navigation: true
description: ''
meta: '{}'
path: /ja/_partials/messaging-api/action-object-message
__hash__: iu6AtIPPKZX__c4x1M48VERsAF-mwu0a-W21HMtI9EM
seo:
  description: ''
---

### メッセージアクション

::reference-with-code
  :::reference-content
  このアクションが関連づけられたコントロールがタップされると、`text`プロパティの文字列がユーザーからのメッセージとして送信されます。

    ::::parameter-table
      :::::parameter-table-entry{required="true"}
      #undefined
      type

      #undefined
      String

      `message`
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
      text

      #undefined
      String

      アクションの実行時に送信されるテキスト  

      最大文字数：300
      :::::
    ::::
  :::

  :::reference-code
  *メッセージアクションオブジェクトの例*

    ::::code-tabs
      :::::tab{lang="json"}
      ```json
      {
        "type": "message",
        "label": "Yes",
        "text": "Yes"
      }
      ```
      :::::
    ::::
  :::
::
