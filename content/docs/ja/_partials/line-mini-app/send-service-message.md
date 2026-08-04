---
title: Send Service Message
navigation: true
description: ''
meta: '{}'
path: /ja/_partials/line-mini-app/send-service-message
__hash__: 9bTlQ1HLXRby2mF3zcEJB2raWClCUCh5reH3DdIyIlc
seo:
  description: ''
---

### サービスメッセージを送る

::reference-with-code
  :::reference-content
  サービス通知トークンで指定されたユーザーに、サービスメッセージを送信します。

  サービスメッセージを送信すると、有効期限が切れておらず、残りの送信可能回数が0でない場合は、サービス通知トークンの値が更新されます。ユーザーに対して、後続のサービスメッセージを送信する予定がある場合は、更新後のサービス通知トークンを保存してください。
  :::

  :::reference-code
  *リクエストの例*

    ::::code-tabs
      :::::tab{lang="shell"}
      ```sh
      curl -X POST https://api.line.me/message/v3/notifier/send?target=service \
      -H 'Authorization: Bearer W1TeHCgfH2Liwa...' \
      -H 'Content-Type: application/json' \
      -d '{
          "templateName": "thankyou_msg_en",
          "params": {
              "date": "2020-04-23",
              "username": "Brown & Cony"
          },
          "notificationToken": "34c11a03-b726-49e3-8ce0-949387a9.."
      }'
      ```
      :::::
    ::::
  :::
::

#### HTTPリクエスト

`POST https://api.line.me/message/v3/notifier/send`

#### リクエストヘッダー

::parameter-table
  :::parameter-table-entry{required="true"}
  #undefined
  Content-Type

  application/json
  :::

  :::parameter-table-entry{required="true"}
  #undefined
  Authorization

  Bearer `{channel access token}`  

  詳しくは、『LINEプラットフォームの基礎知識』の「[チャネルアクセストークン](/docs/basics/channel-access-token/)」を参照してください。
  :::
::

::admonition{title="ステートレスチャネルアクセストークンの使用を推奨します" type="note"}
LINEミニアプリチャネルでは、[長期のチャネルアクセストークン](/docs/basics/channel-access-token/#long-lived-channel-access-token)および、[任意の有効期間を指定できるチャネルアクセストークン（チャネルアクセストークンv2.1）](/docs/basics/channel-access-token/#user-specified-expiration)は使用できません。

LINEミニアプリの開発では、[ステートレスチャネルアクセストークン](/docs/basics/channel-access-token/#stateless-channel-access-token)または[短期のチャネルアクセストークン](/docs/basics/channel-access-token/#short-lived-channel-access-token)を使用できます。このうち、ステートレスチャネルアクセストークンの使用を推奨します。ステートレスチャネルアクセストークンは、発行数に制限がないため、アプリケーション側でトークンのライフサイクルを管理する必要がありません。
::

#### クエリパラメータ

::parameter-table
  :::parameter-table-entry{required="true"}
  #undefined
  target

  `service`
  :::
::

#### リクエストボディ

::parameter-table
  :::parameter-table-entry{required="true"}
  #undefined
  templateName

  #undefined
  String

  サービスメッセージとして利用する、追加済みテンプレートの名前。テンプレートの名前はLINE Developersコンソールで確認できます。詳しくは、「[送信できるサービスメッセージの種類](/docs/line-mini-app/develop/service-messages/#types-of-service-messages-that-can-be-sent)」を参照してください。  

  BCP 47言語タグを末尾に追加してください。  

  フォーマット：`{template name}_{BCP 47 language tag}`  

  最大文字数：30

    ::::admonition{title="注意" type="note"}
    サービスメッセージでサポートしている言語と言語タグは、以下のとおりです。

    - 日本語：`ja`
    - 英語：`en`
    - 中国語（繁体字）：`zh-TW`
    - タイ語：`th`
    - インドネシア語：`id`
    - 韓国語：`ko`
    ::::
  :::

  :::parameter-table-entry{required="true"}
  #undefined
  params

  #undefined
  object

  テンプレート変数と値のペアを指定するJSONオブジェクト。  

  テンプレートにテンプレート変数がない場合は、空のJSONオブジェクト（`{ }`）を指定します。  

  テンプレート変数は、テンプレートごとに定義されています。必須の要素にテンプレート変数が含まれる場合は、必ずテンプレート変数と値のペアを指定してください。  

  詳しくは、「[サービスメッセージのテンプレートをチャネルに追加する](/docs/line-mini-app/develop/service-messages/#service-message-templates)」を参照してください。
  :::

  :::parameter-table-entry{required="true"}
  #undefined
  notificationToken

  #undefined
  String

  サービス通知トークン
  :::
::

#### レスポンス

::reference-with-code
  :::reference-content
  ステータスコード`200`と以下の情報を含むJSONオブジェクトを返します。

    ::::parameter-table
      :::::parameter-table-entry
      #undefined
      notificationToken

      #undefined
      String

      更新後のサービス通知トークン。このサービス通知トークンを使用して、後続のサービスメッセージを送信します。
      :::::

      :::::parameter-table-entry
      #undefined
      expiresIn

      #undefined
      Number

      更新後のサービス通知トークンの有効期限が切れるまでの秒数
      :::::

      :::::parameter-table-entry
      #undefined
      remainingCount

      #undefined
      Number

      更新後のサービス通知トークンで、後続のサービスメッセージを送信できる回数
      :::::

      :::::parameter-table-entry
      #undefined
      sessionId

      #undefined
      String

      セッションID。詳しくは、「[サービスメッセージを送信する](/docs/line-mini-app/develop/service-messages/)」を参照してください。
      :::::
    ::::

    ::::admonition{title="注意" type="note"}
    `expiresIn`および`remainingCount`の値が`0`の場合は、サービスメッセージは送信されたが、サービス通知トークンが更新できなかったことを示します。
    ::::
  :::

  :::reference-code
  *レスポンスの例*

    ::::code-tabs
      :::::tab{lang="json"}
      ```json
      // リクエストは成功し、
      // 新しいサービス通知トークンが
      // 発行されました。
      {
        "notificationToken": "c9884874-bf6a-4241-8999-2767241c...",
        "expiresIn": 31535906,
        "remainingCount": 3,
        "sessionId": "xD06...."
      }

      // リクエストは成功し、
      // サービスメッセージは送信されたが、
      // LINEプラットフォームがサービス
      // 通知トークンを更新できない場合
      {
        "expiresIn": 0,
        "remainingCount": 0
      }
      ```
      :::::
    ::::
  :::
::

#### エラーレスポンス

::reference-with-code
  :::reference-content
  以下のいずれかのステータスコードとエラーメッセージを返します。

  | ステータスコード                  | 説明                                                                      |
  | ------------------------- | ----------------------------------------------------------------------- |
  | 400 Bad request           | 以下のいずれかです。- リクエストボディに問題があります。 - サービスメッセージ送信対象のユーザーが存在しません。              |
  | 401 Unauthorized          | 以下のいずれか、または両方です。- 有効なチャネルアクセストークンが指定されていません。 - 有効なサービス通知トークンが指定されていません。 |
  | 403 Forbidden             | 以下のいずれかです。- このチャネルには、サービスメッセージを送信する許可が与えられていません。 - 指定されたテンプレートが見つかりません。 |
  | 500 Internal Server Error | 内部サーバーのエラーです。                                                           |
  :::

  :::reference-code
  *エラーレスポンスの例*

    ::::code-tabs
      :::::tab{lang="json"}
      ```json
      {
        "message": "Invalid notifier token"
      }
      ```
      :::::
    ::::
  :::
::
