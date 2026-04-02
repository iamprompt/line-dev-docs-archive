---
title: Delete Audience Group
navigation: true
description: ''
meta: '{}'
path: /ja/_partials/messaging-api/delete-audience-group
__hash__: o0B3KR_8RTsg2hOpbfzGsVO5ve1H68huftyx-anrC9g
seo:
  description: ''
---

### オーディエンスを削除する

:api-endpoint{protocol="delete" endpoint="https://api.line.me/v2/bot/audienceGroup/{audienceGroupId}"}::reference-with-code
  :::reference-content
  オーディエンスを削除します。

    ::::admonition{title="削除したオーディエンスは元に戻せません" type="warning"}
    削除する前に、オーディエンスが使用されていないことを確認してください。
    ::::
  :::

  :::reference-code
  *リクエストの例*

    ::::code-tabs
      :::::tab{lang="shell"}
      ```sh
      curl -v -X DELETE https://api.line.me/v2/bot/audienceGroup/{audienceGroupId} \
      -H 'Authorization: Bearer {channel access token}'
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
::

#### パスパラメータ

::parameter-table
  :::parameter-table-entry{required="true"}
  #undefined
  audienceGroupId

  オーディエンスID
  :::
::

#### レスポンス

HTTPステータスコード`202`と空のJSONオブジェクトを返します。

#### エラーレスポンス

::reference-with-code
  :::reference-content
  以下のHTTPステータスコードと、エラーレスポンスを返します。

  | コード   | 説明                     |
  | ----- | ---------------------- |
  | `400` | 存在しないオーディエンスが指定されています。 |

  詳しくは、[共通仕様](#common-specifications)の「[ステータスコード](#status-codes)」および「[エラーレスポンス](#error-responses)」を参照してください。
  :::

  :::reference-code
  *エラーレスポンスの例*

    ::::code-tabs
      :::::tab{lang="json"}
      ```json
      // 存在しないオーディエンスを指定した場合（400 Bad Request）
      {
        "message": "audience group not found",
        "details": [
          {
            "message": "AUDIENCE_GROUP_NOT_FOUND"
          }
        ]
      }
      ```
      :::::
    ::::
  :::
::
