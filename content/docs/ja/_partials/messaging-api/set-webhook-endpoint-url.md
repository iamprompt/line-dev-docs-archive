---
title: Set Webhook Endpoint Url
navigation: true
description: ''
meta: '{}'
path: /ja/_partials/messaging-api/set-webhook-endpoint-url
__hash__: oTbmDcM5WcMxMLhUdrAJ7YeRVbSf37Q8wx9fNOPTutQ
seo:
  description: ''
---

### WebhookエンドポイントのURLを設定する

:api-endpoint{protocol="put" endpoint="https://api.line.me/v2/bot/channel/webhook/endpoint"}::reference-with-code
  :::reference-content
  WebhookエンドポイントのURLを設定します。キャッシュデータの影響により、URLの更新に1分ほどかかる場合があります。

    ::::admonition{title="Webhook URLの検証ルール" type="note"}
    以下のWebhook URLの検証ルールをすべて満たしていることを確認してください。

    - 有効なHTTPS URLである。
    - URLの長さが500文字以内である。
    ::::
  :::

  :::reference-code
  *リクエスト例*

    ::::code-tabs
      :::::tab{lang="shell"}
      ```sh
      curl -X PUT \
      -H 'Authorization: Bearer {CHANNEL_ACCESS_TOKEN}' \
      -H 'Content-Type:application/json' \
      -d '{"endpoint":"https://example.com/hoge"}' \
      https://api.line.me/v2/bot/channel/webhook/endpoint
      ```
      :::::
    ::::
  :::
::

#### レート制限

1,000リクエスト/分

レート制限について詳しくは、「[レート制限](#rate-limits)」を参照してください。

#### リクエストヘッダー

::parameter-table
  :::parameter-table-entry{required="true"}
  #undefined
  Authorization

  Bearer `{channel access token}`
  :::

  :::parameter-table-entry{required="true"}
  #undefined
  Content-Type

  `application/json`
  :::
::

#### リクエストボディ

::parameter-table
  :::parameter-table-entry{required="true"}
  #undefined
  endpoint

  #undefined
  String

  有効なWebhook URL
  :::
::

#### レスポンス

::reference-with-code
  :::reference-content
  ステータスコード`200`と空のJSONオブジェクトを返します。
  :::

  :::reference-code
  *レスポンス例*

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

  | コード   | 説明                       |
  | ----- | ------------------------ |
  | `400` | 無効なWebhook URLが指定されています。 |

  詳しくは、[共通仕様](#common-specifications)の「[ステータスコード](#status-codes)」および「[エラーレスポンス](#error-responses)」を参照してください。
  :::

  :::reference-code
  *エラーレスポンスの例*

    ::::code-tabs
      :::::tab{lang="json"}
      ```json
      // 無効なWebhook URLが指定された場合（400 Bad Request）
      {
        "message": "Invalid webhook endpoint URL"
      }
      ```
      :::::
    ::::
  :::
::
