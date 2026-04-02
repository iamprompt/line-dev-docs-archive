---
title: Verify Video Or Audio Preparation Status
navigation: true
description: ''
meta: '{}'
path: /ja/_partials/messaging-api/verify-video-or-audio-preparation-status
__hash__: ZKBnHVKmyPyU6c8pgJMXoc9rJmGcYsLYZagEGZ4KwLk
seo:
  description: ''
---

### 動画または音声の取得準備の状況を確認する

:api-endpoint{protocol="get" endpoint="https://api-data.line.me/v2/bot/message/{messageId}/content/transcoding"}::reference-with-code
  :::reference-content
    ::::admonition{title="他のエンドポイントとドメイン名が異なります" type="note"}
    このエンドポイントは、Messaging APIにおけるLINEプラットフォームへの大容量データ送受信用のドメイン名（`api-data.line.me`）です。他のエンドポイントのドメイン名（`api.line.me`）とは異なるため、利用時は注意してください。
    ::::

  Webhookで受信したメッセージIDを使って、ユーザーが送信した[動画](/reference/messaging-api/#wh-video)、[音声](/reference/messaging-api/#wh-audio)の取得準備の状況を取得するエンドポイントです。

  このエンドポイントは、[Webhookイベントオブジェクト](#webhook-event-objects)の`contentProvider.type`プロパティが`line`の場合にのみ利用できます。
  :::

  :::reference-code
  *リクエストの例*

    ::::code-tabs
      :::::tab{lang="shell"}
      ```sh
      curl -v -X GET https://api-data.line.me/v2/bot/message/{messageId}/content/transcoding \
      -H 'Authorization: Bearer {channel access token}'
      ```
      :::::
    ::::
  :::
::

#### リクエストヘッダー

::parameter-table
  :::parameter-table-entry{required="true"}
  #undefined
  Authorization

  Bearer `{channel access token}`
  :::
::

#### パスパラメータ

::parameter-table
  :::parameter-table-entry{required="true"}
  #undefined
  messageId

  [動画](/reference/messaging-api/#wh-video)または[音声](/reference/messaging-api/#wh-audio)のメッセージID
  :::
::

#### レスポンス

ステータスコード`200`と以下の情報を含むJSONオブジェクトを返します。

::parameter-table
  :::parameter-table-entry
  #undefined
  status

  #undefined
  String

  取得準備の状況。以下のいずれかの値です。

  - `processing`：コンテンツの取得準備中です。
  - `succeeded`：コンテンツを取得する準備が完了しました。ユーザーが送信した[コンテンツを取得](#get-content)できます。
  - `failed`：コンテンツの取得準備に失敗しました。
  :::
::

#### エラーレスポンス

::reference-with-code
  :::reference-content
  以下のHTTPステータスコードと、エラーレスポンスを返します。

  - `400 Bad Request`
  - `404 Not Found`
  - `410 Gone`

  詳しくは、[共通仕様](/reference/messaging-api/#common-specifications)の「[ステータスコード](/reference/messaging-api/#status-codes)」および「[エラーレスポンス](/reference/messaging-api/#error-responses)」を参照してください。
  :::

  :::reference-code
  *エラーレスポンスの例*

    ::::code-tabs
      :::::tab{lang="json"}
      ```json
      // 動画、音声以外のメッセージIDを指定した場合（400 Bad Request）
      {
        "message": "Transcoding status doesn't support this type of content"
      }

      // 存在しないメッセージIDを指定した場合（404 Not Found）
      {
        "message": "not found"
      }

      // ユーザーがメッセージの送信を取り消した場合（410 Gone）
      {
        "message": "The content is gone"
      }
      ```
      :::::
    ::::
  :::
::
