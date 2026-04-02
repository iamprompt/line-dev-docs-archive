---
title: Action Object Postback
navigation: true
description: ''
meta: '{}'
path: /ja/_partials/messaging-api/action-object-postback
__hash__: PA_u_xmMlWr-B4LlSH2RTklzJt7SOiz47djs_B7SMIs
seo:
  description: ''
---

### ポストバックアクション

::reference-with-code
  :::reference-content
  このアクションが関連づけられたコントロールがタップされると、`data`プロパティに指定された文字列を含む[ポストバックイベント](#postback-event)が、Webhookを介して返されます。

    ::::parameter-table
      :::::parameter-table-entry{required="true"}
      #undefined
      type

      #undefined
      String

      `postback`
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
      data

      #undefined
      String

      Webhookを介して、[ポストバックイベント](#postback-event)の`postback.data`プロパティで返される文字列  

      最大文字数：300
      :::::

      :::::parameter-table-entry{optional=""}
      #undefined
      displayText

      #undefined
      String

      アクションの実行時に、ユーザーのメッセージとしてLINEのトーク画面に表示されるテキスト。  

      最大文字数：300  
      `displayText`プロパティと`text`プロパティは、同時に設定できません。
      :::::

      :::::parameter-table-entry{optional=""}
      #undefined
      text

      #undefined
      String

      【廃止予定】アクションの実行時に、ユーザーのメッセージとしてLINEのトーク画面に表示されるテキスト。Webhookを介してサーバーに返されます。クイックリプライボタンでは使用しないでください。  

      最大文字数：300  
      `displayText`プロパティと`text`プロパティは、同時に設定できません。
      :::::

      :::::parameter-table-entry{optional=""}
      #undefined
      inputOption

      #undefined
      String

      アクションに応じた、リッチメニューなどの表示方法。以下のいずれかの値を指定します。

      - `closeRichMenu`：リッチメニューを閉じる
      - `openRichMenu`：リッチメニューを開く
      - `openKeyboard`：キーボードを開く
      - `openVoice`：ボイスメッセージ入力モードを開く

      iOS版LINEまたはAndroid版LINEのバージョン`12.6.0`以降で動作します。
      :::::

      :::::parameter-table-entry{annotation="説明を参照"}
      #undefined
      fillInText

      #undefined
      String

      キーボードを開いたときに、入力欄にあらかじめ入力しておく文字列。`inputOption`が`openKeyboard`の場合にのみ有効です。文字列は、改行文字（`\n`）により改行できます。  

      最大文字数：300

      iOS版LINEまたはAndroid版LINEのバージョン`12.6.0`以降で動作します。
      :::::
    ::::

  #### ラベルの仕様

  以下のアクションにおける`label`プロパティは、アクションを設定するオブジェクトごとに、仕様が異なります。

  - [ポストバックアクション](#postback-action)
  - [メッセージアクション](#message-action)
  - [URIアクション](#uri-action)
  - [日時選択アクション](#datetime-picker-action)
  - [クリップボードアクション](#clipboard-action)

  上記のアクションにおけるラベルの仕様は次のとおりです。なお、上記以外のアクションにおけるラベルの仕様については、各アクションの仕様を参照してください。

  | オブジェクト                                    | 必須      | 最大文字数 |
  | ----------------------------------------- | ------- | ----- |
  | [テンプレートメッセージ](#template-messages)         | 画像カルーセル | 任意    | 12 |
  | 画像カルーセル以外                                 | 必須      | 20    |
  | [リッチメニュー](#rich-menu-object) *1           | 任意      | 20    |
  | [クイックリプライボタン](#quick-reply-button-object) | 必須      | 20    |
  | [Flex Message](#flex-message)             | ボタン     | 必須    | 40 |
  | ボタン以外 *2                                  | 任意      | 40    |

  ※1 ユーザーデバイスのアクセシビリティ機能が有効な場合に読み上げられます。

  ※2 ラベルを指定しても表示されません。
  :::

  :::reference-code
  *ポストバックアクションオブジェクトの例*

    ::::code-tabs
      :::::tab{lang="json"}
      ```json
      {
        "type": "postback",
        "label": "Buy",
        "data": "action=buy&itemid=111",
        "displayText": "Buy",
        "inputOption": "openKeyboard",
        "fillInText": "---\nName: \nPhone: \nBirthday: \n---"
      }
      ```
      :::::
    ::::
  :::
::
