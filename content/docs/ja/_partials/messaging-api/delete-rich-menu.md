---
title: Delete Rich Menu
navigation: true
description: ''
meta: '{}'
path: /ja/_partials/messaging-api/delete-rich-menu
__hash__: 1reSSQe0IdOhPSml6rfBQMlLVb37ofbCpRfGrcmjhfY
seo:
  description: ''
---

### リッチメニューを削除する

:api-endpoint{protocol="delete" endpoint="https://api.line.me/v2/bot/richmenu/{richMenuId}"}::reference-with-code
  :::reference-content
  リッチメニューを削除します。

    ::::admonition{title="リッチメニュー数の上限について" type="note"}
    Messaging APIで作成できるリッチメニューの数の上限は、LINE公式アカウントあたり1,000件です。この上限を超過した場合は、新しいリッチメニューを作成する前に既存のリッチメニューを削除する必要があります。
    ::::
  :::

  :::reference-code
  *リクエストの例*

    ::::code-tabs
      :::::tab{lang="shell"}
      ```sh
      curl -v -X DELETE https://api.line.me/v2/bot/richmenu/{richMenuId} \
      -H 'Authorization: Bearer {channel access token}'
      ```
      :::::
    ::::
  :::
::

#### レート制限

100リクエスト/時

:glossary-tooltip[[LINE Official Account Manager](/glossary/#line-oa-manager)]{glossary-id="line-oa-manager"}を使ってリッチメニューを作成・削除する場合は制限の対象外です。

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
  richMenuId

  リッチメニューのID
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

  | コード   | 説明                     |
  | ----- | ---------------------- |
  | `404` | 存在しないリッチメニューが指定されています。 |

  詳しくは、[共通仕様](#common-specifications)の「[ステータスコード](#status-codes)」および「[エラーレスポンス](#error-responses)」を参照してください。
  :::

  :::reference-code
  *エラーレスポンスの例*

    ::::code-tabs
      :::::tab{lang="json"}
      ```json
      // 存在しないリッチメニューを指定した場合（404 Not Found）
      {
        "message": "Not found"
      }
      ```
      :::::
    ::::
  :::
::
