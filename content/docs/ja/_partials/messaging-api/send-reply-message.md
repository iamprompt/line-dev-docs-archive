---
title: Send Reply Message
navigation: true
description: ''
meta: '{}'
path: /ja/_partials/messaging-api/send-reply-message
__hash__: L_rK0Dory3sfcOaK3ppAgaieobWsItsMaXV5K0X-trs
seo:
  description: ''
---

### 応答メッセージを送る

:api-endpoint{protocol="post" endpoint="https://api.line.me/v2/bot/message/reply"}::reference-with-code
  :::reference-content
  ユーザー、グループトーク、または複数人トークからのイベントに対して、応答メッセージを送信するAPIです。応答メッセージを送るには、Webhookイベントオブジェクトに含まれる応答トークンが必要です。

  イベントが発生すると、[Webhook](#webhooks)により通知されます。応答できるイベントの場合は、応答トークンが発行されます。

    ::::admonition{title="応答メッセージの準備中にローディングのアニメーションを表示できます" type="tip"}
    LINE公式アカウントがユーザーからのメッセージを受信したあと、メッセージの準備や予約の処理などで返答に少し時間がかかることがあります。そのような場合に、ユーザーにそのまま待機しておいて欲しいことをローディングのアニメーションで視覚的に伝えることができます。詳しくは、『Messaging APIドキュメント』の「[ローディングのアニメーションを表示する](/docs/messaging-api/use-loading-indicator/)」を参照してください。
    ::::

  #### 応答トークン

  応答トークンを使用する際は、以下の点を確認してください。

  - 応答トークンは一度のみ使用できます。
  - 応答トークンは、Webhookを受信してから1分以内に使用する必要があります。1分を超える場合の使用については、動作は保証されません。
  - 再送されたWebhookに含まれる応答トークンも、再送されたWebhookを受信してから1分以内であれば使用できます。ただし、以下の場合は応答トークンを使用できません。

    - 元のWebhookに含まれる応答トークンをすでに使用している場合。
    - イベントの発生から20分が経過している場合。

    ::::admonition{title="応答トークンは可能な限り早く使用してください" type="note"}
    応答トークンの時間制限は、予告なく変更される可能性があります。また、ネットワークの遅延などにより、実際に使用できる期間は変動します。

    このため、時間制限に依存した実装をしないようにしてください。また、応答トークンは可能な限り早く使用してください。
    ::::
  :::

  :::reference-code
  *リクエストの例*

    ::::code-tabs
      :::::tab{lang="shell"}
      ```sh
      curl -v -X POST https://api.line.me/v2/bot/message/reply \
      -H 'Content-Type: application/json' \
      -H 'Authorization: Bearer {channel access token}' \
      -d '{
          "replyToken":"nHuyWiB7yP5Zw52FIkcQobQuGDXCTA",
          "messages":[
              {
                  "type":"text",
                  "text":"Hello, user"
              },
              {
                  "type":"text",
                  "text":"May I help you?"
              }
          ]
      }'
      ```
      :::::
    ::::
  :::
::

#### レート制限

2,000リクエスト/秒

レート制限について詳しくは、「[レート制限](#rate-limits)」を参照してください。

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
  :::
::

#### リクエストボディ

::parameter-table
  :::parameter-table-entry{required="true"}
  #undefined
  replyToken

  #undefined
  String

  Webhookで受信する応答トークン
  :::

  :::parameter-table-entry{required="true"}
  #undefined
  messages

  #undefined
  [メッセージオブジェクト](#message-objects)の配列

  送信するメッセージ  

  最大件数：5

  [応答メッセージのメッセージオブジェクトを検証する](#validate-message-objects-of-reply-message)エンドポイントを使用すると、メッセージオブジェクトが有効かを検証できます。
  :::

  :::parameter-table-entry{optional=""}
  #undefined
  notificationDisabled

  #undefined
  Boolean

  - `true`：メッセージ送信時に、ユーザーに通知されない。
  - `false`：メッセージ送信時に、ユーザーに通知される。ただし、LINEで通知をオフにしている場合は通知されません。

  デフォルト値は`false`です。
  :::
::

#### レスポンス

::reference-with-code
  :::reference-content
  ステータスコード`200`と以下の情報を含むJSONオブジェクトを返します。

    ::::parameter-table
      :::::parameter-table-entry
      #undefined
      sentMessages

      #undefined
      Array

      送信したメッセージの配列。  
      最大件数：5
      :::::

      :::::parameter-table-entry
      #undefined
      sentMessages.id

      #undefined
      Number

      送信したメッセージのID。
      :::::

      :::::parameter-table-entry{annotation="含まれないことがあります"}
      #undefined
      sentMessages.quoteToken

      #undefined
      String

      メッセージの引用トークン。引用対象として指定可能なメッセージオブジェクトを送信した場合のみ、レスポンスに含まれます。詳しくは、『Messaging APIドキュメント』の「[引用トークンを取得する](/docs/messaging-api/get-quote-tokens/)」を参照してください。
      :::::
    ::::
  :::

  :::reference-code
  *レスポンスの例*

    ::::code-tabs
      :::::tab{lang="json"}
      ```json
      {
        "sentMessages": [
          {
            "id": "461230966842064897",
            "quoteToken": "IStG5h1Tz7b..."
          }
        ]
      }
      ```
      :::::
    ::::
  :::
::

#### エラーレスポンス

::reference-with-code
  :::reference-content
  以下のHTTPステータスコードと、エラーレスポンスを返します。

  | コード   | 説明                                                                             |
  | ----- | ------------------------------------------------------------------------------ |
  | `400` | メッセージを送信できませんでした。次のような理由が考えられます。- 無効な応答トークンが指定されている。 - 無効なメッセージオブジェクトが指定されている。 |

  詳しくは、[共通仕様](#common-specifications)の「[ステータスコード](#status-codes)」および「[エラーレスポンス](#error-responses)」を参照してください。

  エラーが返された場合、メッセージは送信されません。
  :::

  :::reference-code
  *エラーレスポンスの例*

    ::::code-tabs
      :::::tab{lang="json"}
      ```json
      // 有効期限切れ、使用済みなどの無効な応答トークンを指定した場合（400 Bad Request）
      {
        "message": "Invalid reply token"
      }
      ```
      :::::
    ::::
  :::
::
