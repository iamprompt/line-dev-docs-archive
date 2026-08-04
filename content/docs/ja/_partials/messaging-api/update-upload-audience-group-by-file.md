---
title: Update Upload Audience Group By File
navigation: true
description: ''
meta: '{}'
path: /ja/_partials/messaging-api/update-upload-audience-group-by-file
__hash__: t53XI1HOYlvGa0hoB1TIk9Au3KMdCcILZogqj8oUDYA
seo:
  description: ''
---

### ユーザーIDアップロード用のオーディエンスにユーザーIDまたはIFAを追加する（ファイル指定）

:api-endpoint{protocol="put" endpoint="https://api-data.line.me/v2/bot/audienceGroup/upload/byFile"}::reference-with-code
  :::reference-content
    ::::admonition{title="他のエンドポイントとドメイン名が異なります" type="note"}
    このエンドポイントは、Messaging APIにおけるLINEプラットフォームへの大容量データ送受信用のドメイン名（`api-data.line.me`）です。他のエンドポイントのドメイン名（`api.line.me`）とは異なるため、利用時は注意してください。
    ::::

  ユーザーIDアップロード用のオーディエンスに、ユーザーIDまたはIFAを追加します。

  このエンドポイントでは、送信対象アカウントをテキストファイルで指定します。[送信対象アカウントをJSONで指定するエンドポイント](#update-upload-audience-group)も利用できます。

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
      curl -v -X PUT https://api-data.line.me/v2/bot/audienceGroup/upload/byFile \
      -H 'Authorization: Bearer {channel access token}' \
      -F 'audienceGroupId=4389303728991' \
      -F 'uploadDescription=fileName' \
      -F 'file=@audiences.txt;type=text/plain'
      ```
      :::::
    ::::

  *テキストファイルの例*

    ::::code-tabs
      :::::tab{lang="File"}
      ```sh
      U4af4980627...
      U4af4980628...
      U4af4980629...
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

  `multipart/form-data`
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
  file

  #undefined
  File

  ユーザーIDまたはIFAを、1行に1件入力したテキストファイル。Content-Typeは、`text/plain`を指定してください。  

  最大ファイル数：1  

  最大行数：1,500,000
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

  | コード   | 説明                                                                                                                                                                                                                                                                                                          |
  | ----- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
  | `400` | リクエストに問題があります。次のような理由が考えられます。- `file`プロパティに指定したファイルに、無効なユーザーIDまたはIFAが入力されている。 - `file`プロパティに最大件数（1,500,000件）より多いユーザーIDまたはIFAを入力したファイルが指定されている。 - `file`プロパティに指定したファイルに、有効なユーザーIDまたはIFAが指定されていない。 - 保存期間を超えたオーディエンスが指定されている。 - 存在しないオーディエンスが指定されている。 - `uploadDescription`プロパティに最大文字数（300文字）より長い文字列が指定されている。 |
  | `415` | `file`プロパティに、サポートされていないメディア形式のファイルが指定されている。                                                                                                                                                                                                                                                                 |
  | `429` | 同時処理数の上限を超えています。詳しくは、「[同時処理数の制限](#limit-on-the-number-of-concurrent-operations)」を参照してください。                                                                                                                                                                                                                  |

  詳しくは、[共通仕様](#common-specifications)の「[ステータスコード](#status-codes)」および「[エラーレスポンス](#error-responses)」を参照してください。
  :::

  :::reference-code
  *エラーレスポンスの例*

    ::::code-tabs
      :::::tab{lang="json"}
      ```json
      // fileプロパティに無効なユーザーIDが入力されているファイルを指定した場合（400 Bad Request）
      {
        "message": "UPLOAD_AUDIENCE_GROUP_INVALID_AUDIENCE_ID_FORMAT",
        "details": [
          {
            "message": "UPLOAD_AUDIENCE_GROUP_INVALID_AUDIENCE_ID_FORMAT",
            "property": "file"
          }
        ]
      }
      ```
      :::::
    ::::
  :::
::
