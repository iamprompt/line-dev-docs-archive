---
title: Get Rich Menu List
navigation: true
description: ''
meta: '{}'
path: /ja/_partials/messaging-api/get-rich-menu-list
__hash__: R4tHJoYE1zKRiMGyZFIpT6yH2ZCrXvDMUd8ySGnIcnk
seo:
  description: ''
---

### リッチメニューの配列を取得する

:api-endpoint{protocol="get" endpoint="https://api.line.me/v2/bot/richmenu/list"}::reference-with-code
  :::reference-content
  「[リッチメニューを作成する](#create-rich-menu)」で作成したすべてのリッチメニューのリッチメニューレスポンスオブジェクトを取得します。

    ::::admonition{title="注意" type="note"}
    LINE Official Account Managerで作成したリッチメニューは取得できません。
    ::::
  :::

  :::reference-code
  *リクエストの例*

    ::::code-tabs
      :::::tab{lang="shell"}
      ```sh
      curl -v -X GET https://api.line.me/v2/bot/richmenu/list \
      -H 'Authorization: Bearer {channel access token}'
      ```
      :::::
    ::::
  :::
::

#### レート制限

10リクエスト/秒

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
  ステータスコード`200`と以下のプロパティを含むJSONオブジェクトを返します。

    ::::parameter-table
      :::::parameter-table-entry
      #undefined
      richmenus

      #undefined
      Array

      [リッチメニューレスポンスオブジェクト](#rich-menu-response-object)の配列
      :::::
    ::::
  :::

  :::reference-code
  *レスポンスの例*

    ::::code-tabs
      :::::tab{lang="json"}
      ```json
      {
        "richmenus": [
          {
            "richMenuId": "{richMenuId}",
            "name": "Nice rich menu",
            "size": {
              "width": 2500,
              "height": 1686
            },
            "chatBarText": "Tap to open",
            "selected": false,
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
          }
        ]
      }
      ```
      :::::
    ::::
  :::
::

#### エラーレスポンス

詳しくは、[共通仕様](#common-specifications)の「[ステータスコード](#status-codes)」および「[エラーレスポンス](#error-responses)」を参照してください。
