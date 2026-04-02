---
title: Batch Control Rich Menus Of Users
navigation: true
description: ''
meta: '{}'
path: /ja/_partials/messaging-api/batch-control-rich-menus-of-users
__hash__: KEkeIFxYzM7XiYsh-nk8lOC2pYGlU4cwuxc-ZpEbw2Q
seo:
  description: ''
---

### リンク済みのリッチメニューを一括で置き換え・解除する

:api-endpoint{protocol="post" endpoint="https://api.line.me/v2/bot/richmenu/batch"}::reference-with-code
  :::reference-content
  [リッチメニューとユーザーをリンクする](#link-rich-menu-to-user)エンドポイントなどを利用して、ユーザーにリンクしたリッチメニューを一括操作するエンドポイントです。このエンドポイントでは、以下のような操作が可能です。

  1. 特定のリッチメニューをリンク済みのすべてのユーザーを対象に、リッチメニューを別のリッチメニューに置き換える。
  2. 特定のリッチメニューをリンク済みのすべてのユーザーを対象に、リッチメニューのリンクを解除する。
  3. リッチメニューをリンク済みのすべてのユーザーを対象に、リッチメニューのリンクを解除する。

  また、[リクエストボディ](#batch-control-rich-menus-of-users-request-body)の`operations`プロパティには、リッチメニューの一括操作を複数指定できます。リッチメニューの一括操作を複数指定した場合、それぞれの操作は独立に並行してユーザーごとに処理されます。指定した操作は互いに影響しません。

  たとえば、`operations`プロパティに以下の配列を指定した場合、リクエスト前にリッチメニューAをリンク済みのユーザーのリッチメニューはBに、リクエスト前にリッチメニューBをリンク済みのユーザーのリッチメニューはCに置き換わります。操作は互いに影響しないため、リクエスト前にリッチメニューAをリンク済みのユーザーのリッチメニューはCには置き換わりません。

  ```json
  [
    {
      "type": "link",
      "from": "{リッチメニューAのID}",
      "to": "{リッチメニューBのID}"
    },
    {
      "type": "link",
      "from": "{リッチメニューBのID}",
      "to": "{リッチメニューCのID}"
    }
  ]
  ```

  リッチメニューの一括操作は、バックグラウンドで非同期に処理されます。処理の進行状況は、[リッチメニューの一括操作の進行状況を取得する](#get-batch-control-rich-menus-progress-status)エンドポイントで確認できます。

  #### リトライ時に意図しない操作を避けるための方法

  `resumeRequestKey`プロパティを使用することで、安全にリトライすることができます。

  以下のような場合に、`resumeRequestKey`プロパティを使用せずにリトライをすると、意図しない内容でリッチメニューが置き換わってしまう可能性があります。

  - タイムアウトやLINEプラットフォームの内部サーバーのエラーなどにより、リクエストが受理されたかどうかがわからない場合
  - [リッチメニューの一括操作の進行状況を取得](#get-batch-control-rich-menus-progress-status)した結果、レスポンスの`phase`プロパティが`failed`の場合

  このような状況でも、初回のリクエストで`resumeRequestKey`プロパティに任意のキーを指定していた場合、同じキーを指定して再度リクエストを送ることで、処理が完了していないユーザーに対してのみ再度処理が行われます。

  `resumeRequestKey`プロパティの有効期間は14日間（336時間）です。有効期限が切れた場合、新しいリクエストとして扱われます。
  :::

  :::reference-code
  *リッチメニューの置き換えと、リッチメニューのリンクを解除するリクエストの例*

    ::::code-tabs
      :::::tab{lang="shell"}
      ```sh
      curl -v -X POST https://api.line.me/v2/bot/richmenu/batch \
      -H "Authorization: Bearer {channel access token}" \
      -H "Content-Type: application/json" \
      -d '{
        "operations": [
          {
            "type": "link",
            "from": "{置き換える前のリッチメニューのID}",
            "to": "{置き換え先のリッチメニューのID}"
          },
          {
            "type": "unlink",
            "from": "{リンクを解除するリッチメニューのID}"
          }
        ],
        "resumeRequestKey": "{[0-9a-zA-Z\-_]{1,100}の正規表現にマッチする任意の文字列}"
      }'
      ```
      :::::
    ::::

  *リンク済みのリッチメニューを、すべてのユーザーから解除するリクエストの例*

    ::::code-tabs
      :::::tab{lang="shell"}
      ```sh
      curl -v -X POST https://api.line.me/v2/bot/richmenu/batch \
      -H "Authorization: Bearer {channel access token}" \
      -H "Content-Type: application/json" \
      -d '{
        "operations": [
          {
            "type": "unlinkAll"
          }
        ],
        "resumeRequestKey": "{[0-9a-zA-Z\-_]{1,100}の正規表現にマッチする任意の文字列}"
      }'
      ```
      :::::
    ::::
  :::
::

#### レート制限

3リクエスト/時

レート制限について詳しくは、「[レート制限](#rate-limits)」を参照してください。

::admonition{title="事前にリクエストボディが有効かを検証できます" type="tip"}
事前にリクエストボディが有効かを検証できる、[リッチメニューの一括操作のリクエストを検証する](#validate-batch-control-rich-menus-request)エンドポイントもあります。

検証用のエンドポイントを使うことで、このエンドポイントのレート制限に適用されることなく、リクエストがエラーにならないことを事前に確認できます。
::

#### リクエストヘッダー

::parameter-table
  :::parameter-table-entry{required="true"}
  #undefined
  Authorization

  Bearer `{channel access token}`
  :::
::

#### リクエストボディ

::parameter-table
  :::parameter-table-entry{required="true"}
  #undefined
  operations

  #undefined
  [リッチメニュー操作オブジェクト](#batch-control-rich-menus-of-users-operations)の配列

  リッチメニューの一括操作を指定します。  

  最大件数：1,000件
  :::

  :::parameter-table-entry{optional=""}
  #undefined
  resumeRequestKey

  #undefined
  String

  リトライ用のキー。`[0-9a-zA-Z\-_]{1,100}`の正規表現にマッチする文字列。
  :::
::

##### リッチメニュー操作オブジェクト

リッチメニュー操作オブジェクトは、ユーザーにリンク済みのリッチメニューへの一括操作を表すオブジェクトです。

::parameter-table
  :::parameter-table-entry{required="true"}
  #undefined
  type

  #undefined
  String

  ユーザーにリンク済みのリッチメニューへの操作内容。以下のいずれかの値を指定します。

  - `link`：`from`プロパティで指定されたリッチメニューがリンク済みのすべてのユーザーを対象に、リッチメニューを`to`プロパティで指定されたリッチメニューに置き換える。
  - `unlink`：`from`プロパティで指定されたリッチメニューがリンク済みのすべてのユーザーを対象に、リッチメニューのリンクを解除する。
  - `unlinkAll`：リッチメニューがリンクされている、すべてのユーザーとリッチメニューのリンクを解除する。

  `unlinkAll`を指定した場合、`unlinkAll`以外の`type`を`operations`プロパティに含めることはできません。
  :::

  :::parameter-table-entry{annotation="typeがlinkまたはunlinkの場合必須"}
  #undefined
  from

  #undefined
  String

  リッチメニューのID。

  置き換える前のリッチメニューのID、またはリンクを解除するリッチメニューのIDを指定します。

  `operations`プロパティに複数の操作を指定する際に、同じリッチメニューのIDを複数の`from`プロパティに指定することはできません。
  :::

  :::parameter-table-entry{annotation="typeがlinkの場合必須"}
  #undefined
  to

  #undefined
  String

  リッチメニューのID。

  置き換え先のリッチメニューのIDを指定します。
  :::
::

#### レスポンス

::reference-with-code
  :::reference-content
  ステータスコード`202`と空のJSONオブジェクトを返します。

  リッチメニューの一括操作は、バックグラウンドで非同期に処理されます。処理の進行状況は、[リッチメニューの一括操作の進行状況を取得する](#get-batch-control-rich-menus-progress-status)エンドポイントで確認できます。
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

  | コード   | 説明                                                                                                                                                                                                                    |
  | ----- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
  | `400` | リッチメニューを操作できませんでした。次のような理由が考えられます。- 無効なリッチメニューのIDが指定されている。 - 置き換え先のリッチメニューに画像が設定されていない。 - `operations`プロパティに1000件を超える操作が指定されている。 - `type`プロパティに`unlinkAll`と、それ以外の値が同時に指定されている。 - 同じリッチメニューのIDが複数の`from`プロパティに指定されている。 |
  | `404` | 存在しないリッチメニューが指定されています。                                                                                                                                                                                                |

  詳しくは、[共通仕様](#common-specifications)の「[ステータスコード](#status-codes)」および「[エラーレスポンス](#error-responses)」を参照してください。

  エラーが返された場合、リッチメニューは操作されません。
  :::

  :::reference-code
  *エラーレスポンスの例*

    ::::code-tabs
      :::::tab{lang="json"}
      ```json
      // 無効なリッチメニューのIDを指定した場合（400 Bad Request）
      {
        "message": "The request body has 1 error(s)",
        "details": [
          {
            "message": "invalid richMenuId",
            "property": "operations[0].from"
          }
        ]
      }

      // 同じリッチメニューのIDを複数のfromプロパティに指定した場合（400 Bad Request）
      {
        "message": "The request body has 1 error(s)",
        "details": [
          {
            "message": "from richmenu (richmenu-6fc298...) is duplicated",
            "property": "operations[].from"
          }
        ]
      }

      // リクエストのtypeプロパティにunlinkAllと、それ以外のtypeを同時に指定した場合（400 Bad Request）
      {
        "message": "The request body has 1 error(s)",
        "details": [
          {
            "message": "'unlinkAll' type can't be combined with other type",
            "property": "operations[].type"
          }
        ]
      }
      ```
      :::::
    ::::
  :::
::
