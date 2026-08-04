---
title: Get Image Or Video Preview
navigation: true
description: ''
meta: '{}'
path: /ja/_partials/messaging-api/get-image-or-video-preview
__hash__: lMFgdsB9zuPQsaUQ284SAHphyWoFeydBFxfNRUSprs0
seo:
  description: ''
---

### 画像または動画のプレビュー画像を取得する

:api-endpoint{protocol="get" endpoint="https://api-data.line.me/v2/bot/message/{messageId}/content/preview"}::reference-with-code
  :::reference-content
    ::::admonition{title="他のエンドポイントとドメイン名が異なります" type="note"}
    このエンドポイントは、Messaging APIにおけるLINEプラットフォームへの大容量データ送受信用のドメイン名（`api-data.line.me`）です。他のエンドポイントのドメイン名（`api.line.me`）とは異なるため、利用時は注意してください。
    ::::

  Webhookで受信したメッセージIDを使って、ユーザーが送信した[画像](/reference/messaging-api/#wh-image)、[動画](/reference/messaging-api/#wh-video)のプレビュー画像を取得するエンドポイントです。プレビュー画像は、実際のコンテンツよりも軽量なデータサイズに変換した画像データです。

  このエンドポイントは、[Webhookイベントオブジェクト](#webhook-event-objects)の`contentProvider.type`プロパティが`line`の場合にのみ利用できます。
  :::

  :::reference-code
  *リクエストの例*

    ::::code-tabs
      :::::tab{lang="shell"}
      ```sh
      curl -v -X GET https://api-data.line.me/v2/bot/message/{messageId}/content/preview \
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

  [画像](/reference/messaging-api/#wh-image)または[動画](/reference/messaging-api/#wh-video)のメッセージID
  :::
::

#### レスポンス

ステータスコード`200`とプレビュー画像のバイナリデータを返します。

メッセージが送信されてから一定期間後に、プレビュー画像は自動的に削除されます。プレビュー画像の保存期間は保証されません。

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
      // 画像、動画以外のメッセージIDを指定した場合（400 Bad Request）
      {
        "message": "The content can not be previewed"
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
