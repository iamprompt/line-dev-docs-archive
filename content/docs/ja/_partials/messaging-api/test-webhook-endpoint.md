---
title: Test Webhook Endpoint
navigation: true
description: ''
meta: '{}'
path: /ja/_partials/messaging-api/test-webhook-endpoint
__hash__: rzGwLAlRdYPdH_VdefpyWHDoGDgzE70SUPNtJkkVUPA
seo:
  description: ''
---

### Webhookエンドポイントを検証する

:api-endpoint{protocol="post" endpoint="https://api.line.me/v2/bot/channel/webhook/test"}::reference-with-code
  :::reference-content
  設定したWebhookエンドポイントがWebhookの検証イベントを受信できるかを確認します。

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
      # URLを指定して検証したい場合
      curl -X POST \
      -H 'Authorization: Bearer {CHANNEL_ACCESS_TOKEN}' \
      -H 'Content-Type:application/json' \
      -d '{"endpoint":"https://example.com/webhook"}' \
      https://api.line.me/v2/bot/channel/webhook/test

      # LINE Developersコンソールの「Webhook URL」で設定したURLを検証したい場合
      curl -X POST \
      -H 'Authorization: Bearer {CHANNEL_ACCESS_TOKEN}' \
      -H 'Content-Type:application/json' \
      -d '{}' \
      https://api.line.me/v2/bot/channel/webhook/test
      ```
      :::::
    ::::
  :::
::

#### レート制限

60リクエスト/時

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
  :::parameter-table-entry{optional=""}
  #undefined
  endpoint

  #undefined
  String

  検証したいWebhook URL

    ::::admonition{title="endpointパラメータ有無による動作の違い" type="note"}
    このエンドポイントは、**Request body**に`endpoint`パラメータが含まれるかどうかで動作が変わります。

    **endpointパラメータがある場合**

    `endpoint`パラメータに指定したエンドポイントURLが有効か検証し、有効であれば指定されたエンドポイントURLにWebhook検証イベントを送信します。

    **endpointパラメータがない場合**

    チャネルに設定されているWebhookエンドポイントに、Webhook検証イベントを送信します。チャネルにWebhookエンドポイントが設定されていない場合は `404`が返ります。
    ::::
  :::
::

#### レスポンス

::reference-with-code
  :::reference-content
  ステータスコード`200`とおよび以下の情報を含むJSONオブジェクトを返す。

    ::::admonition{title="疎通確認のリクエストにはステータスコード200を返してください" type="note"}
    - 疎通確認の際は、LINEプラットフォームからWebhook URL（ボットサーバー）へ、Webhookイベントが含まれないHTTP POSTリクエストが送信されます。ステータスコード`200`を返すようにボットサーバーを設計してください。  
    Webhookイベントが含まれないHTTP POSTリクエストの例：```json
    {
      "destination": "xxxxxxxxxx",
      "events": []
    }
    ```
    ::::

    ::::parameter-table
      :::::parameter-table-entry
      #undefined
      success

      #undefined
      Boolean

      LINEプラットフォームからWebhook URLへの疎通結果

      - `true`：成功
      - `false`：失敗

      `false`の場合は、『Messaging APIドキュメント』の「[エラーが発生した原因を確認する](/docs/messaging-api/check-webhook-error-statistics/#check-error-reason)」を参照してください。
      :::::

      :::::parameter-table-entry
      #undefined
      timestamp

      #undefined
      String

      「[共通プロパティ](/reference/messaging-api/#common-properties)」を参照してください。
      :::::

      :::::parameter-table-entry
      #undefined
      statusCode

      #undefined
      Number

      HTTPステータスコード。Webhookのレスポンスを受信しなかった場合、ステータスコードは0か負の数になります。
      :::::

      :::::parameter-table-entry
      #undefined
      reason

      #undefined
      String

      レスポンスの原因を表します。詳細は下表を参照してください。
      :::::

      :::::parameter-table-entry
      #undefined
      detail

      #undefined
      String

      レスポンスの詳細を表します。詳細は下表を参照してください。
      :::::
    ::::

  | `reason`（原因）                                                                                      | `detail`（詳細）          | 内容                                                                                                                                                                         |
  | ------------------------------------------------------------------------------------------------- | --------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
  | OK                                                                                                | HTTPステータスコード（例：`200`） | Webhookの送信に成功しました。                                                                                                                                                         |
  | [COULD_NOT_CONNECT](/docs/messaging-api/check-webhook-error-statistics/#reason-could-not-connect) | 接続失敗                  | Webhookエンドポイントに接続できませんでした。詳しくは、『Messaging APIドキュメント』の「[原因が「could_not_connect」の場合](/docs/messaging-api/check-webhook-error-statistics/#reason-could-not-connect)」を参照してください。 |
  | [REQUEST_TIMEOUT](/docs/messaging-api/check-webhook-error-statistics/#reason-request-timeout)     | Request timeout       | リクエストがタイムアウトしました。詳しくは、『Messaging APIドキュメント』の「[原因が「request_timeout」の場合](/docs/messaging-api/check-webhook-error-statistics/#reason-request-timeout)」を参照してください。              |
  | [ERROR_STATUS_CODE](/docs/messaging-api/check-webhook-error-statistics/#reason-status-code)       | HTTPステータスコード（例：`400`） | エラーレスポンスのステータスコードが返ります。詳しくは、『Messaging APIドキュメント』の「[原因が「error_status_code」の場合](/docs/messaging-api/check-webhook-error-statistics/#reason-status-code)」を参照してください。          |
  | [UNCLASSIFIED](/docs/messaging-api/check-webhook-error-statistics/#reason-unclassified)           | N/A                   | 不明なエラーです。詳しくは、『Messaging APIドキュメント』の「[原因が「unclassified」の場合](/docs/messaging-api/check-webhook-error-statistics/#reason-unclassified)」を参照してください。                            |
  :::

  :::reference-code
  *レスポンスの例（Webhookの送信に成功した場合）*

    ::::code-tabs
      :::::tab{lang="json"}
      ```json
      {
        "success": true,
        "timestamp": "2020-09-30T05:38:20.031Z",
        "statusCode": 200,
        "reason": "OK",
        "detail": "200"
      }
      ```
      :::::
    ::::

  *レスポンスの例（ボットサーバーのSSL/TLS設定が原因でWebhook URLへの疎通に失敗した場合）*

    ::::code-tabs
      :::::tab{lang="json"}
      ```json
      {
        "success": false,
        "timestamp": "2023-07-07T04:29:51.043124Z",
        "statusCode": 0,
        "reason": "COULD_NOT_CONNECT",
        "detail": "TLS handshake failure: https://example.com/webhook"
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

  | コード   | 説明                          |
  | ----- | --------------------------- |
  | `400` | 無効なWebhook URLが指定されています。    |
  | `404` | チャネルにWebhook URLが設定されていません。 |

  詳しくは、[共通仕様](#common-specifications)の「[ステータスコード](#status-codes)」および「[エラーレスポンス](#error-responses)」を参照してください。
  :::

  :::reference-code
  *エラーレスポンスの例*

    ::::code-tabs
      :::::tab{lang="json"}
      ```json
      // Webhook URLで指定したドメイン名が名前解決できなかった場合（400 Bad Request）
      {
        "message": "Invalid webhook endpoint URL"
      }

      // Webhook URLが設定されていない場合（404 Not Found）
      {
        "message": "Webhook endpoint not found"
      }
      ```
      :::::
    ::::
  :::
::
