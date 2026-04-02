---
title: Create Rich Menu
navigation: true
description: ''
meta: '{}'
path: /ja/_partials/messaging-api/create-rich-menu
__hash__: Ir6_0eZnc_Qd--eZVzN0tRw-IhCsTAor5quRQ30Ac-g
seo:
  description: ''
---

### リッチメニューを作成する

:api-endpoint{protocol="post" endpoint="https://api.line.me/v2/bot/richmenu"}::reference-with-code
  :::reference-content
  リッチメニューを作成するAPIです。

  リッチメニューを表示するには、[リッチメニューの画像をアップロード](#upload-rich-menu-image)し、さらに[デフォルトのリッチメニューを設定](#set-default-rich-menu)するか[リッチメニューをユーザーとリンク](#link-rich-menu-to-user)する必要があります。1つのLINE公式アカウントに対して、Messaging APIを使って最大で1000件のリッチメニューを作成できます。

    ::::admonition{title="リッチメニューを作成する前に" type="tip"}
    [リッチメニューオブジェクトを検証する](#validate-rich-menu-object)ためのエンドポイントもあります。
    ::::
  :::

  :::reference-code
  *リクエストの例*

    ::::code-tabs
      :::::tab{lang="shell"}
      ```sh
      curl -v -X POST https://api.line.me/v2/bot/richmenu \
      -H 'Authorization: Bearer {channel access token}' \
      -H 'Content-Type: application/json' \
      -d \
      '{
          "size": {
            "width": 2500,
            "height": 1686
          },
          "selected": false,
          "name": "Nice rich menu",
          "chatBarText": "Tap to open",
          "areas": [
            {
              "bounds": {
                "x": 0,
                "y": 0,
                "width": 2500,
                "height": 1686
              },
              "action": {
                "type": "postback",
                "data": "action=buy&itemid=123"
              }
            }
         ]
      }'
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

  :::parameter-table-entry{required="true"}
  #undefined
  Content-Type

  application/json
  :::
::

#### リクエストボディ

リッチメニューとして表示する[リッチメニューオブジェクト](#rich-menu-object)を指定します。

#### レスポンス

::reference-with-code
  :::reference-content
  ステータスコード`200`と以下のプロパティを含むJSONオブジェクトを返します。

    ::::parameter-table
      :::::parameter-table-entry
      #undefined
      richMenuId

      #undefined
      String

      リッチメニューのID。[リッチメニューの画像をアップロードする](#upload-rich-menu-image)際に使用します。
      :::::
    ::::
  :::

  :::reference-code
  *レスポンスの例*

    ::::code-tabs
      :::::tab{lang="json"}
      ```json
      {
        "richMenuId": "{richMenuId}"
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

  | コード   | 説明                                                                                            |
  | ----- | --------------------------------------------------------------------------------------------- |
  | `400` | リッチメニューを作成できませんでした。次のような理由が考えられます。- 無効なリッチメニューオブジェクトが指定されている。 - 作成できるリッチメニューの上限（最大1000件）に達した。 |

  詳しくは、[共通仕様](#common-specifications)の「[ステータスコード](#status-codes)」および「[エラーレスポンス](#error-responses)」を参照してください。
  :::

  :::reference-code
  *エラーレスポンスの例*

    ::::code-tabs
      :::::tab{lang="json"}
      ```json
      // リッチメニューオブジェクトのJSONで必須のキーが存在しない場合（400 Bad Request）
      {
        "message": "The request body has 1 error(s)",
        "details": [
          {
            "message": "must be specified",
            "property": "name"
          }
        ]
      }

      // URIアクションに無効なスキームを指定した場合（400 Bad Request）
      {
        "message": "The request body has 1 error(s)",
        "details": [
          {
            "message": "invalid uri",
            "property": "areas[0].action.uri"
          }
        ]
      }
      ```
      :::::
    ::::
  :::
::
