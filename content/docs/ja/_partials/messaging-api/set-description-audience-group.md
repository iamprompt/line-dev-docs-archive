---
title: Set Description Audience Group
navigation: true
description: ''
meta: '{}'
path: /ja/_partials/messaging-api/set-description-audience-group
__hash__: a3CTs0Rlaoq71cifijxU4W9ZuYIZr9prbCastK4pmm8
seo:
  description: ''
---

### オーディエンスの名前を更新する

:api-endpoint{protocol="put" endpoint="https://api.line.me/v2/bot/audienceGroup/{audienceGroupId}/updateDescription"}::reference-with-code
  :::reference-content
  既存のオーディエンスの名前を変更します。
  :::

  :::reference-code
  *リクエストの例*

    ::::code-tabs
      :::::tab{lang="shell"}
      ```sh
      curl -v -X PUT https://api.line.me/v2/bot/audienceGroup/{audienceGroupId}/updateDescription \
      -H 'Authorization: Bearer {channel access token}' \
      -H 'Content-Type: application/json' \
      -d '{
          "description": "audienceGroupName"
      }'
      ```
      :::::
    ::::
  :::
::

#### レート制限

60リクエスト/分

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

#### パスパラメータ

::parameter-table
  :::parameter-table-entry{required="true"}
  #undefined
  audienceGroupId

  オーディエンスID
  :::
::

#### リクエストボディ

::parameter-table
  :::parameter-table-entry{required="true"}
  #undefined
  description

  #undefined
  String

  オーディエンスの名前。なお、大文字と小文字は区別されないため、`AUDIENCE`と`audience`は同じ名前と判定されます。  

  最大文字数：120
  :::
::

#### レスポンス

HTTPステータスコード`200`と空のJSONオブジェクトを返します。

#### エラーレスポンス

::reference-with-code
  :::reference-content
  以下のHTTPステータスコードと、エラーレスポンスを返します。

  | コード   | 説明                                                                                                                                                        |
  | ----- | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
  | `400` | リクエストに問題があります。次のような理由が考えられます。- `description`プロパティに最大文字数（120文字）より長い名前が指定されている。 - `description`プロパティに無効な文字（例：`\n`などの制御コード）が指定されている。 - 存在しないオーディエンスが指定されている。 |

  詳しくは、[共通仕様](#common-specifications)の「[ステータスコード](#status-codes)」および「[エラーレスポンス](#error-responses)」を参照してください。
  :::

  :::reference-code
  *エラーレスポンスの例*

    ::::code-tabs
      :::::tab{lang="json"}
      ```json
      // descriptionプロパティに最大文字数（120文字）より長い名前を指定した場合（400 Bad Request）
      {
        "message": "size over audienceGroupName",
        "details": [
          {
            "message": "AUDIENCE_GROUP_NAME_SIZE_OVER"
          }
        ]
      }
      ```
      :::::
    ::::
  :::
::
