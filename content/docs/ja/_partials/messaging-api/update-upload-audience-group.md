---
title: Update Upload Audience Group
navigation: true
description: ''
meta: '{}'
path: /ja/_partials/messaging-api/update-upload-audience-group
__hash__: sQb4YfMuQmwh0BePmRFl-_iNwcE_ew3rN1whHA-FR-8
seo:
  description: ''
---

### ユーザーIDアップロード用のオーディエンスにユーザーIDまたはIFAを追加する（JSON指定）

:api-endpoint{protocol="put" endpoint="https://api.line.me/v2/bot/audienceGroup/upload"}::reference-with-code
  :::reference-content
  ユーザーIDアップロード用のオーディエンスに、ユーザーIDまたはIFAを追加します。

  このエンドポイントでは、送信対象アカウントをJSONで指定します。[送信対象アカウントをテキストファイルで指定するエンドポイント](#update-upload-audience-group-by-file)も利用できます。

  #### オーディエンスに追加できるユーザーの条件

  ユーザーIDアップロード用のオーディエンスには、LINE公式アカウントと友だちになっているユーザーを追加できます。ただし、以下のユーザーをオーディエンスに追加した場合も、ステータスコード`202`が返され、オーディエンスに追加されます。

  - LINEアカウントを削除したユーザー
  - オーディエンスを作成したLINE公式アカウントをブロックしているユーザー
  - オーディエンスを作成したLINE公式アカウントを友だち追加していないユーザー

  なお、作成したオーディエンスを使ってメッセージを送信した場合、上記のユーザーにはメッセージは送信されません。

    ::::admonition{title="同時処理数の制限があります" type="note"}
    ユーザーIDアップロード用のオーディエンス作成およびオーディエンスへのユーザーID追加のエンドポイントでは、オーディエンスID（`audienceGroupId`）単位での同時処理数の制限があります。詳しくは、「[同時処理数の制限](#limit-on-the-number-of-concurrent-operations)」を参照してください。
    ::::

    ::::admonition{title="リクエストタイムアウト値について" type="note"}
    リクエストタイムアウトを30秒以上に設定することを強く推奨します。
    ::::

    ::::admonition{title="有効なユーザーIDの確認方法" type="note"}
    JSONの`audiences`プロパティで無効なユーザーIDが指定されていた場合、エラーレスポンス（`details[].message`: `UPLOAD_AUDIENCE_GROUP_INVALID_AUDIENCE_ID_FORMAT`）が返り、ユーザーIDの追加に失敗します。このエンドポイントを実行する前に、`audiences`プロパティに含まれるすべてのユーザーIDが有効であることを確認してください。

    ユーザーIDが有効か確認するには、[プロフィール情報を取得する](#get-profile)エンドポイントを使用してください。ユーザーIDが有効な場合は、HTTPステータスコード`200`が返ります。`200`以外が返ってきた場合、そのユーザーIDは無効のため、`audiences`プロパティには含めないようにしてください。
    ::::

    ::::admonition{title="ユーザーIDまたはIFAの種類は変更できません" type="note"}
    ユーザーIDアップロード用のオーディエンスを作成したときと同じ種類（ユーザーIDまたはIFA）のデータを追加してください。たとえば、初めにIFAを指定して作成したオーディエンスに、ユーザーIDを指定することはできません。

    オーディエンスを作成したときに指定した送信対象アカウントの種類（ユーザーIDまたはIFA）は、オーディエンスの`isIfaAudience`プロパティで確認できます。詳しくは、「[オーディエンスの情報を取得する](#get-audience-group)」を参照してください。
    ::::

    ::::admonition{title="ユーザーIDまたはIFAは削除できません" type="note"}
    一度追加したユーザーIDまたはIFAを削除することはできません。
    ::::

    ::::admonition
    ---
    title: LINEのプライバシーポリシー（2022年3月改定以降のもの）に同意済みのユーザーのみが対象となります
    type: note
    ---
    ユーザーIDアップロード用のオーディエンスにユーザーIDを追加する際に、LINEのプライバシーポリシー（2022年3月改定以降のもの）に同意していないユーザーのユーザーIDが含まれている場合、未同意のユーザーは無視され同意済みのユーザーのみが追加されます。

    そのため、指定したユーザーIDの数よりもオーディエンスの有効な送信対象アカウントの数が少なくなることがあります。
    ::::
  :::

  :::reference-code
  *リクエストの例*

    ::::code-tabs
      :::::tab{lang="shell"}
      ```sh
      curl -v -X PUT https://api.line.me/v2/bot/audienceGroup/upload \
      -H 'Authorization: Bearer {channel access token}' \
      -H 'Content-Type: application/json' \
      -d '{
          "audienceGroupId": 4389303728991,
          "uploadDescription": "fileName",
          "audiences": [
              {
                  "id": "U4af4980627..."
              },
              {
                  "id": "U4af4980628..."
              }
          ]
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

#### リクエストボディ

::parameter-table
  :::parameter-table-entry{required="true"}
  #undefined
  audienceGroupId

  #undefined
  Number

  オーディエンスID
  :::

  :::parameter-table-entry{optional=""}
  #undefined
  uploadDescription

  #undefined
  String

  ジョブ（`jobs[].description`）に登録する説明  

  最大文字数：300
  :::

  :::parameter-table-entry{required="true"}
  #undefined
  audiences

  #undefined
  Array

  ユーザーIDまたはIFAの配列  

  最大件数：10,000
  :::

  :::parameter-table-entry{required="true"}
  #undefined
  audiences[].id

  #undefined
  String

  ユーザーIDまたはIFA
  :::
::

#### レスポンス

::reference-with-code
  :::reference-content
  HTTPステータスコード`202`と空のJSONオブジェクトを返します。

    ::::admonition{title="オーディエンスの作成は非同期に行われます" type="note"}
    オーディエンスを利用する前に、[オーディエンスが配信に利用できることを確認](/docs/messaging-api/sending-messages/#get-audience-status)してください。
    ::::
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

  | コード   | 説明                                                                                                                                                                                                                                                                                                     |
  | ----- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
  | `400` | リクエストに問題があります。次のような理由が考えられます。- `audiences[].id`プロパティに、無効なユーザーIDまたはIFAが指定されている。 - `audiences`プロパティに最大件数（10,000件）より多いユーザーIDまたはIFAが指定されている。 - `audiences[].id`プロパティに、有効なユーザーIDまたはIFAが指定されていない。 - 保存期間を超えたオーディエンスが指定されている。 - 存在しないオーディエンスが指定されている。 - `uploadDescription`プロパティに最大文字数（300文字）より長い文字列が指定されている。 |
  | `429` | 同時処理数の上限を超えています。詳しくは、「[同時処理数の制限](#limit-on-the-number-of-concurrent-operations)」を参照してください。                                                                                                                                                                                                             |

  詳しくは、[共通仕様](#common-specifications)の「[ステータスコード](#status-codes)」および「[エラーレスポンス](#error-responses)」を参照してください。
  :::

  :::reference-code
  *エラーレスポンスの例*

    ::::code-tabs
      :::::tab{lang="json"}
      ```json
      // audiences[].idプロパティに、無効なユーザーIDを指定した場合（400 Bad Request）
      {
        "message": "Invalid audience id format",
        "details": [
          {
            "message": "UPLOAD_AUDIENCE_GROUP_INVALID_AUDIENCE_ID_FORMAT",
            "property": "audiences"
          }
        ]
      }
      ```
      :::::
    ::::
  :::
::
