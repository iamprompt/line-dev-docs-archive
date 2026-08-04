---
title: Message Object Text V2
navigation: true
description: ''
meta: '{}'
path: /ja/_partials/messaging-api/message-object-text-v2
__hash__: pv5m_87AxWESkZ8wt2czutg2m2OGaTOB6FOeeHrRJ08
seo:
  description: ''
---

### テキストメッセージ（v2）

テキストメッセージ（v2）は、[テキストメッセージ](#text-message)と異なり、`{`と`}`で囲まれた文字列をメンションや絵文字に置き換えることができます。

::reference-with-code
  :::reference-content
    ::::parameter-table
      :::::parameter-table-entry{required="true"}
      #undefined
      type

      #undefined
      String

      `textV2`
      :::::

      :::::parameter-table-entry{required="true"}
      #undefined
      text

      #undefined
      String

      メッセージのテキスト。

      `{`と`}`で囲まれた文字列を、`substitution`プロパティを用いてメンションや絵文字に置き換えることができます。`{`および`}`を文字列として使用する場合は、`{{`および`}}`でエスケープしてください。また、`{`と`}`を使用する際は、以下のことに注意してください。

      - `{`と`}`はペアで使用する必要があります。
      - `{`と`}`で囲まれた文字列は、`substitution`プロパティを用いて置換内容を指定する必要があります。

      最大文字数：5000
      :::::

      :::::parameter-table-entry{optional=""}
      #undefined
      substitution

      #undefined
      Object

      `text`プロパティの`{`と`}`で囲まれた部分の置換内容を指定するオブジェクト。

      オブジェクトのキーに使用できる文字は、半角英数字（`0-9a-zA-Z`）とアンダースコア（`_`）です。また、キーの文字数は、最大で20文字です。

      オブジェクトの値には[メンションオブジェクト](#text-message-v2-mention-object)または[絵文字オブジェクト](#text-message-v2-emoji-object)を指定できます。

      オブジェクトの最大数：100
      :::::

      :::::parameter-table-entry{optional=""}
      #undefined
      quoteToken

      #undefined
      String

      引用したいメッセージの引用トークン。詳しくは、『Messaging APIドキュメント』の「[引用トークンを取得する](/docs/messaging-api/get-quote-tokens/)」を参照してください。
      :::::
    ::::
  :::

  :::reference-code
  *メンションと絵文字を指定したテキストメッセージ（v2）の例*

    ::::code-tabs
      :::::tab{lang="json"}
      ```json
      {
        "type": "textV2",
        "text": "Welcome, {user1}! {laugh}\n{everyone} There is a newcomer!",
        "substitution": {
          "user1": {
            "type": "mention",
            "mentionee": {
              "type": "user",
              "userId": "U49585cd0d5..."
            }
          },
          "laugh": {
            "type": "emoji",
            "productId": "5a8555cfe6256cc92ea23c2a",
            "emojiId": "002"
          },
          "everyone": {
            "type": "mention",
            "mentionee": {
              "type": "all"
            }
          }
        }
      }
      ```
      :::::
    ::::
  :::
::

#### メンションオブジェクト

テキスト内で置き換えるメンションの内容を指定します。メンションオブジェクトを使用する際は、以下のことに注意してください。

1. メンションオブジェクトは、[応答メッセージ](/reference/messaging-api/#send-reply-message)または[プッシュメッセージ](/reference/messaging-api/#send-push-message)でのみ使用できます。
2. メッセージの送信先は、[グループトーク](/docs/messaging-api/group-chats/#group)または[複数人トーク](/docs/messaging-api/group-chats/#room)である必要があります。
3. メッセージを送信するLINE公式アカウントは、送信先であるグループトークまたは複数人トークのメンバーである必要があります。
4. メンションされたすべてのユーザーは、そのメッセージの送信先であるグループトークまたは複数人トークのメンバーである必要があります。
5. ひとつのメッセージで置換可能なメンションは20個までです。

なお、上記の2から4までの項目は、「[応答メッセージのメッセージオブジェクトを検証する](#validate-message-objects-of-reply-message)」または「[プッシュメッセージのメッセージオブジェクトを検証する](#validate-message-objects-of-push-message)」エンドポイントでは検証できません。

::parameter-table
  :::parameter-table-entry{required="true"}
  #undefined
  type

  #undefined
  String

  `mention`
  :::

  :::parameter-table-entry{required="true"}
  #undefined
  mentionee

  #undefined
  Object

  メンション先のオブジェクト。[ユーザーオブジェクト](#text-message-v2-mentionee-user)または[全体メンションオブジェクト](#text-message-v2-mentionee-all)を指定します。
  :::
::

##### ユーザーオブジェクト

::parameter-table
  :::parameter-table-entry{required="true"}
  #undefined
  type

  #undefined
  String

  `user`
  :::

  :::parameter-table-entry{required="true"}
  #undefined
  userId

  #undefined
  String

  メンションするユーザーのユーザーID。なお、LINEボットのユーザーIDは指定できません。
  :::
::

##### 全体メンションオブジェクト

::parameter-table
  :::parameter-table-entry{required="true"}
  #undefined
  type

  #undefined
  String

  `all`
  :::
::

#### 絵文字オブジェクト

テキスト内で置き換える絵文字の内容を指定します。ひとつのメッセージで置換可能な絵文字は20個までです。

::parameter-table
  :::parameter-table-entry{required="true"}
  #undefined
  type

  #undefined
  String

  `emoji`
  :::

  :::parameter-table-entry{required="true"}
  #undefined
  productId

  #undefined
  String

  LINE絵文字の集合を示すプロダクトID。プロダクトIDについて詳しくは、『Messaging APIドキュメント』の「[LINE絵文字](/docs/messaging-api/emoji-list/)」を参照してください。
  :::

  :::parameter-table-entry{required="true"}
  #undefined
  emojiId

  #undefined
  String

  絵文字ID。Messaging APIで送信できるLINE絵文字の絵文字IDについて詳しくは、『Messaging APIドキュメント』の「[LINE絵文字](/docs/messaging-api/emoji-list/)」を参照してください。
  :::
::
