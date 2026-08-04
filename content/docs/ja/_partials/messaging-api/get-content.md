---
title: Get Content
navigation: true
description: ''
meta: '{}'
path: /ja/_partials/messaging-api/get-content
__hash__: BG2ecM4cePk9DLyJkxykO4ARZ7yoML5GBYjTUG1jXdI
seo:
  description: ''
---

### コンテンツを取得する

:api-endpoint{protocol="get" endpoint="https://api-data.line.me/v2/bot/message/{messageId}/content"}::reference-with-code
  :::reference-content
    ::::admonition{title="他のエンドポイントとドメイン名が異なります" type="note"}
    このエンドポイントは、Messaging APIにおけるLINEプラットフォームへの大容量データ送受信用のドメイン名（`api-data.line.me`）です。他のエンドポイントのドメイン名（`api.line.me`）とは異なるため、利用時は注意してください。
    ::::

  Webhookで受信したメッセージIDを使って、ユーザーが送信した[画像](/reference/messaging-api/#wh-image)、[動画](/reference/messaging-api/#wh-video)、[音声](/reference/messaging-api/#wh-audio)、および[ファイル](/reference/messaging-api/#wh-file)を取得するエンドポイントです。

  このエンドポイントは、[Webhookイベントオブジェクト](#webhook-event-objects)の`contentProvider.type`プロパティが`line`の場合にのみ利用できます。

  ユーザーからデータサイズが大きい動画または音声が送られた場合に、コンテンツのバイナリデータを取得できるようになるまで時間がかかるときがあります。バイナリデータの準備中にコンテンツを取得しようとすると、ステータスコード`202`が返されバイナリデータは取得できません。バイナリデータが取得できるかどうかは、[動画または音声の取得準備の状況を確認する](#verify-video-or-audio-preparation-status)エンドポイントで確認できます。

  なお、ユーザーが送信したコンテンツは、縮小などの変換が内部的に行われる場合があります。

    ::::admonition{title="テキストはAPIでは取得できません" type="note"}
    ユーザーが送信したテキストは、Webhookの[テキスト](/reference/messaging-api/#wh-text)メッセージオブジェクトで受信できます。Webhookを受信した後で、あらためてテキストを取得するためのAPIはありません。
    ::::
  :::

  :::reference-code
  *リクエストの例*

    ::::code-tabs
      :::::tab{lang="shell"}
      ```sh
      curl -v -X GET https://api-data.line.me/v2/bot/message/{messageId}/content \
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

  メッセージID
  :::
::

#### レスポンス

ステータスコード`200`とコンテンツのバイナリデータを返します。バイナリデータのファイル形式は、レスポンスの[`Content-Type`](https://developer.mozilla.org/ja/docs/Web/HTTP/Reference/Headers/Content-Type){rel="[\"nofollow\"]"}ヘッダーで示されます。

メッセージが送信されてから一定期間後に、コンテンツは自動的に削除されます。コンテンツの保存期間は保証されません。

#### エラーレスポンス

::reference-with-code
  :::reference-content
  以下のHTTPステータスコードと、エラーレスポンスを返します。

  - `404 Not Found`
  - `410 Gone`

  詳しくは、[共通仕様](/reference/messaging-api/#common-specifications)の「[ステータスコード](/reference/messaging-api/#status-codes)」および「[エラーレスポンス](/reference/messaging-api/#error-responses)」を参照してください。
  :::

  :::reference-code
  *エラーレスポンスの例*

    ::::code-tabs
      :::::tab{lang="json"}
      ```json
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
