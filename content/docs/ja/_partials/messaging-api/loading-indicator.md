---
title: Loading Indicator
navigation: true
description: ''
meta: '{}'
path: /ja/_partials/messaging-api/loading-indicator
__hash__: BG_Jag7pDemYXxmJDaL5jg8_glFI-D0M7_-6hc6FT-w
seo:
  description: ''
---

### ローディングのアニメーションを表示する

:api-endpoint{protocol="post" endpoint="https://api.line.me/v2/bot/chat/loading/start"}::reference-with-code
  :::reference-content
  ユーザーとLINE公式アカウントの1対1のトークにおいて、ローディングのアニメーションを表示します。

  ローディングのアニメーションは指定した秒数（5秒〜60秒）が経過するか、表示中にLINE公式アカウントからメッセージが届くと自動的に消えます。

  ローディングのアニメーションは、ユーザーが対象のLINE公式アカウントとのトーク画面を表示しているときのみ表示されます。ユーザーがトーク画面を表示していないときに、ローディングのアニメーションを表示するリクエストを行っても、通知は行われません。また、その後にユーザーがトーク画面を開いてもアニメーションは表示されません。

  ローディングのアニメーションが表示されている間に再び表示のリクエストを行うと、アニメーションはそのまま表示され続け、表示が消えるまでの時間は2回目のリクエストで指定した秒数に上書きされます。

  ローディングのアニメーションが表示されるLINEのバージョンは以下のとおりです。

  - iOS版またはAndroid版のLINE：13.16.0以降

  詳しくは、『Messaging APIドキュメント』の「[ローディングのアニメーションを表示する](/docs/messaging-api/use-loading-indicator/)」を参照してください。
  :::

  :::reference-code
  *リクエストの例*

    ::::code-tabs
      :::::tab{lang="shell"}
      ```sh
      curl -v -X POST https://api.line.me/v2/bot/chat/loading/start \
      -H 'Content-Type: application/json' \
      -H 'Authorization: Bearer {channel access token}' \
      -d '{
          "chatId": "U4af4980629...",
          "loadingSeconds": 5
      }'
      ```
      :::::
    ::::
  :::
::

#### レート制限

100リクエスト/秒

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
  chatId

  #undefined
  String

  ローディングのアニメーションを表示する対象ユーザーのユーザーID。

  ユーザーIDの取得方法については、『Messaging APIドキュメント』の「[ユーザーIDを取得する](/docs/messaging-api/getting-user-ids/)」を参照してください。
  :::

  :::parameter-table-entry{optional=""}
  #undefined
  loadingSeconds

  #undefined
  Number

  ローディングのアニメーションを表示する秒数。`5`、`10`、`15`、`20`、`25`、`30`、`35`、`40`、`45`、`50`、`55`、`60`のいずれかの値を指定できます。

  デフォルト値は`20`です。
  :::
::

#### レスポンス

::reference-with-code
  :::reference-content
  ステータスコード`202`と空のJSONオブジェクトを返します。

  なお、以下のユーザーを表示先に指定してリクエストを行った場合、ステータスコード`202`が返りますが、実際にはローディングのアニメーションは表示されません。

  - LINE公式アカウントとのトーク画面を開いていないユーザー
  - LINE公式アカウントを友だち追加していないユーザー
  - LINE公式アカウントをブロックしているユーザー
  - LINEアカウントを削除したユーザー
  :::

  :::reference-code
  *レスポンスの例*

    ::::code-tabs
      :::::tab{lang="json"}
      ```json
      {}
      ```
      :::::
    ::::
  :::
::

#### エラーレスポンス

::reference-with-code
  :::reference-content
  以下のHTTPステータスコードと、エラーレスポンスを返します。

  | コード   | 説明                                                                                                            |
  | ----- | ------------------------------------------------------------------------------------------------------------- |
  | `400` | ローディングのアニメーションを表示できませんでした。次のような理由が考えられます。- 無効な秒数が指定されています。 - 無効なユーザーIDが指定されています。 - グループトークまたは複数人トークが指定されています。 |

  詳しくは、[共通仕様](#common-specifications)の「[ステータスコード](#status-codes)」および「[エラーレスポンス](#error-responses)」を参照してください。

  エラーが返された場合、ローディングのアニメーションは表示されません。
  :::

  :::reference-code
  *エラーレスポンスの例*

    ::::code-tabs
      :::::tab{lang="json"}
      ```json
      // 無効な秒数を指定した場合（400 Bad Request）
      {
        "message": "The request body has 2 error(s)",
        "details": [
          {
            "message": "Must be between 5 and 60",
            "property": "loadingSeconds"
          },
          {
            "message": "must be a multiple of five",
            "property": "loadingSeconds"
          }
        ]
      }

      // 表示先にグループトークや複数人トークを指定した場合（400 Bad Request）
      {
        "message": "The request body has 1 error(s)",
        "details": [
          {
            "message": "Only user id is acceptable, please confirm if there are any group/room ids or illegal ids.",
            "property": "chatId"
          }
        ]
      }
      ```
      :::::
    ::::
  :::
::
