---
title: Get Number Of Sent Messages
navigation: true
description: ''
meta: '{}'
path: /ja/_partials/messaging-api/get-number-of-sent-messages
__hash__: PwxnV0dpbEkBpQs-ATMsk90eJB7lSmqHqD5U_oluD8k
seo:
  description: ''
---

### 当月のメッセージ利用状況を取得する

:api-endpoint{protocol="get" endpoint="https://api.line.me/v2/bot/message/quota/consumption"}::reference-with-code
  :::reference-content
  当月に送信されたメッセージの数を取得します。

  この操作により取得されるメッセージ数には、LINE Official Account Managerから送信するメッセージの数も含まれます。

  この操作により取得されるメッセージ数は概算です。正確なメッセージ送信数を取得するには、LINE Official Account Managerを使用するか、送信済みのメッセージ数を取得するAPI操作を実行してください。
  :::

  :::reference-code
  *リクエストの例*

    ::::code-tabs
      :::::tab{lang="shell"}
      ```sh
      curl -v -X GET https://api.line.me/v2/bot/message/quota/consumption \
      -H 'Authorization: Bearer {channel access token}'
      ```
      :::::
    ::::
  :::
::

#### APIプレイグラウンド

:api-playground{endpoint="/bot/message/quota/consumption"}#### レート制限

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
  ステータスコード`200`と以下の情報を含むJSONオブジェクトを返します。

    ::::parameter-table
      :::::parameter-table-entry
      #undefined
      totalUsage

      #undefined
      Number

      当月に送信されたメッセージの数
      :::::
    ::::
  :::

  :::reference-code
  *レスポンスの例*

    ::::code-tabs
      :::::tab{lang="json"}
      ```json
      {
        "totalUsage": 500
      }
      ```
      :::::
    ::::
  :::
::

#### エラーレスポンス

詳しくは、[共通仕様](#common-specifications)の「[ステータスコード](#status-codes)」および「[エラーレスポンス](#error-responses)」を参照してください。
