---
title: Clear Default Rich Menu
navigation: true
description: ''
meta: '{}'
path: /ja/_partials/messaging-api/clear-default-rich-menu
__hash__: oTM31De09jlG0cZ1OHdkesUhR2RYkEs3J0_rsjtKJtc
seo:
  description: ''
---

### デフォルトのリッチメニューを解除する

:api-endpoint{protocol="delete" endpoint="https://api.line.me/v2/bot/user/all/richmenu"}::reference-with-code
  :::reference-content
  Messaging APIで設定したデフォルトのリッチメニューを解除するAPIです。
  :::

  :::reference-code
  *リクエストの例*

    ::::code-tabs
      :::::tab{lang="shell"}
      ```sh
      curl -v -X DELETE https://api.line.me/v2/bot/user/all/richmenu \
      -H 'Authorization: Bearer {channel access token}'
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
  Authorization

  Bearer `{channel access token}`
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

詳しくは、[共通仕様](#common-specifications)の「[ステータスコード](#status-codes)」および「[エラーレスポンス](#error-responses)」を参照してください。
