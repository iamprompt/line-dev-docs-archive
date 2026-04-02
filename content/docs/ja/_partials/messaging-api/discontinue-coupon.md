---
title: Discontinue Coupon
navigation: true
description: ''
meta: '{}'
path: /ja/_partials/messaging-api/discontinue-coupon
__hash__: F23ZnFCdx89LFXRUDsG2E8enjf6FD0Cz2sRITvAJKt4
seo:
  description: ''
---

### クーポンを終了する

:api-endpoint{protocol="put" endpoint="https://api.line.me/v2/bot/coupon/{couponId}/close"}::reference-with-code
  :::reference-content
  指定したクーポンを終了するAPIです。

  クーポンを終了させると、すでにクーポンをメッセージとして受信していたユーザーがクーポンを獲得できなくなると共に、そのクーポンを獲得済みのユーザーも利用できなくなります。

  終了したクーポンを再び有効にすることはできません。
  :::

  :::reference-code
  *リクエストの例*

    ::::code-tabs
      :::::tab{lang="shell"}
      ```sh
      curl -v -X PUT https://api.line.me/v2/bot/coupon/01JYNW8JMQVFBNWF1APF8Z3FS7/close \
      -H 'Authorization: Bearer {channel access token}' \
      -H 'Content-Type: application/json'
      ```
      :::::
    ::::
  :::
::

#### レート制限

200リクエスト/秒

:glossary-tooltip[[LINE Official Account Manager](/glossary/#line-oa-manager)]{glossary-id="line-oa-manager"}を使ってクーポンを終了する場合は制限の対象外です。

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

  application/json
  :::
::

#### パスパラメータ

::parameter-table
  :::parameter-table-entry{required="true"}
  #undefined
  couponId

  #undefined
  String

  終了するクーポンのクーポンID。
  :::
::

#### レスポンス

::reference-with-code
  :::reference-content
  ステータスコード`200`と空のJSONオブジェクトを返します。
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

  | コード   | 説明                             |
  | ----- | ------------------------------ |
  | `410` | すでに終了しているクーポンのクーポンIDが指定されています。 |
  | `404` | 指定したクーポンが存在しません。               |

  詳しくは、[共通仕様](#common-specifications)の「[ステータスコード](#status-codes)」および「[エラーレスポンス](#error-responses)」を参照してください。
  :::

  :::reference-code
  *エラーレスポンスの例*

    ::::code-tabs
      :::::tab{lang="json"}
      ```json
      // すでに終了しているクーポンを指定した場合（410 Gone）
      {
        "message": "The request body has 1 error(s)",
        "details": [
          {
            "message": "The coupon has already been closed.",
            "property": ""
          }
        ]
      }

      // 存在しないクーポンを指定した場合（404 Not Found）
      {
        "message": "The request body has 1 error(s)",
        "details": [
          {
            "message": "coupon not found",
            "property": ""
          }
        ]
      }
      ```
      :::::
    ::::
  :::
::
