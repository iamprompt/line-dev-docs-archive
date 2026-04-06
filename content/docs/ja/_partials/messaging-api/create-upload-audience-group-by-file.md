---
title: Create Upload Audience Group By File
navigation: true
description: ''
meta: '{}'
path: /ja/_partials/messaging-api/create-upload-audience-group-by-file
__hash__: Ct4kSK7ttAqQWyCl8VaIrjBOVLOFZaGu6z-6lLMnAAk
seo:
  description: ''
---

### ユーザーIDアップロード用のオーディエンスを作成する（ファイル指定）

:api-endpoint{protocol="post" endpoint="https://api-data.line.me/v2/bot/audienceGroup/upload/byFile"}::reference-with-code
  :::reference-content
    ::::admonition{title="他のエンドポイントとドメイン名が異なります" type="note"}
    このエンドポイントは、Messaging APIにおけるLINEプラットフォームへの大容量データ送受信用のドメイン名（`api-data.line.me`）です。他のエンドポイントのドメイン名（`api.line.me`）とは異なるため、利用時は注意してください。
    ::::

  ユーザーIDアップロード用のオーディエンスを作成します。

  このエンドポイントでは、送信対象アカウントをテキストファイルで指定します。[送信対象アカウントをJSONで指定するエンドポイント](#create-upload-audience-group)も利用できます。

  ユーザーIDの取得方法については、『Messaging APIドキュメント』の「[ユーザーIDを取得する](/docs/messaging-api/getting-user-ids/)」を参照してください。

  #### オーディエンスに追加できるユーザーの条件

  ユーザーIDアップロード用のオーディエンスには、LINE公式アカウントと友だちになっているユーザーを追加できます。ただし、以下のユーザーをオーディエンスに追加した場合も、ステータスコード`202`が返され、オーディエンスに追加されます。

  - LINEアカウントを削除したユーザー
  - オーディエンスを作成したLINE公式アカウントをブロックしているユーザー
  - オーディエンスを作成したLINE公式アカウントを友だち追加していないユーザー

  なお、作成したオーディエンスを使ってメッセージを送信した場合、上記のユーザーにはメッセージは送信されません。

    ::::admonition{title="同時処理数の制限があります" type="note"}
    ユーザーIDアップロード用のオーディエンス作成およびオーディエンスへのユーザーID追加のエンドポイントでは、オーディエンスID（`audienceGroupId`）単位での同時処理数の制限があります。詳しくは、「[同時処理数の制限](#limit-on-the-number-of-concurrent-operations)」を参照してください。
    ::::

    ::::admonition
    ---
    title: 送信対象アカウントをIFA（Identifier For Advertisers）で指定するには手続きが必要です
    type: note
    ---
    送信対象アカウントをIFAで指定することもできますが、この機能は、所定の申請等を行った法人ユーザーのみがご利用いただけます。自社のLINE公式アカウントでご利用になりたいお客様は、担当営業までご連絡いただくか、[弊社パートナー](https://www.lycbiz.com/jp/partner/sales/){rel="[\"nofollow\"]"}にお問い合わせください。
    ::::

    ::::admonition{title="ユーザーIDアップロード用のオーディエンスの仕様" type="tip"}
    オーディエンスの仕様は以下のとおりです。

    | 項目                                      | 条件                                               |
    | --------------------------------------- | ------------------------------------------------ |
    | チャネルあたりのオーディエンス数                        | 最大1,000件                                         |
    | オーディエンスの保存期間                            | 最大180日間（15,552,000秒間）                            |
    | オーディエンスに、1リクエストでアップロードできるユーザーIDまたはIFAの数 | JSONを使用する場合：最大10,000件   ファイルを使用する場合：最大1,500,000件 |
    | オーディエンスあたりのユーザー数                        | ユーザーIDアップロード用のオーディエンス：制限なし                       |

    ナローキャストメッセージの使用制限については、「[属性情報やオーディエンスを利用したメッセージ送信の制限事項](#send-narrowcast-message-restrictions)」を参照してください。
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
      curl -v -X POST https://api-data.line.me/v2/bot/audienceGroup/upload/byFile \
      -H 'Authorization: Bearer {channel access token}' \
      -F 'description=audienceGroupName_01' \
      -F 'file=@audiences.txt;type=text/plain'
      ```
      :::::
    ::::

  *テキストファイルの例*

    ::::code-tabs
      :::::tab{lang="File"}
      ```text
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
  description

  #undefined
  String

  オーディエンスの名前。なお、大文字と小文字は区別されないため、`AUDIENCE`と`audience`は同じ名前と判定されます。  

  最大文字数：120
  :::

  :::parameter-table-entry{optional=""}
  #undefined
  isIfaAudience

  #undefined
  Boolean

  - 送信対象アカウントをIFAで指定する場合は、`true`を指定します。
  - 送信対象アカウントをユーザーIDで指定する場合は、`false`を指定するか、`isIfaAudience`プロパティを省略します。
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
  ステータスコード`202`と以下の情報を含むJSONオブジェクトを返します。

    ::::admonition{title="オーディエンスの作成は非同期に行われます" type="note"}
    オーディエンスを利用する前に、[オーディエンスが配信に利用できることを確認](/docs/messaging-api/sending-messages/#get-audience-status)してください。
    ::::

    ::::parameter-table
      :::::parameter-table-entry
      #undefined
      audienceGroupId

      #undefined
      Number

      オーディエンスID
      :::::

      :::::parameter-table-entry
      #undefined
      createRoute

      #undefined
      String

      オーディエンスの作成方法。

      - `MESSAGING_API`：Messaging APIで作成したオーディエンス
      :::::

      :::::parameter-table-entry
      #undefined
      type

      #undefined
      String

      オーディエンスのタイプ。

      - `UPLOAD`：ユーザーIDアップロード用のオーディエンス
      :::::

      :::::parameter-table-entry
      #undefined
      description

      #undefined
      String

      オーディエンスの名前
      :::::

      :::::parameter-table-entry
      #undefined
      created

      #undefined
      Number

      オーディエンスが作成された時刻。UNIX時間（秒）で返されます。
      :::::

      :::::parameter-table-entry
      #undefined
      permission

      #undefined
      String

      作成したオーディエンスに対する更新権限。

      - `READ_WRITE`：オーディエンスを利用、更新できます。
      :::::

      :::::parameter-table-entry
      #undefined
      expireTimestamp

      #undefined
      Number

      オーディエンスの有効期限。UNIX時間（秒）で返されます。
      :::::

      :::::parameter-table-entry
      #undefined
      isIfaAudience

      #undefined
      Boolean

      ユーザーIDアップロード用のオーディエンスを作成したときに指定した、送信対象アカウントの種類を示す値。以下のいずれかの値です。

      - `true`：IFAで指定する
      - `false`：ユーザーIDで指定する（デフォルト）
      :::::
    ::::
  :::

  :::reference-code
  *レスポンスの例*

    ::::code-tabs
      :::::tab{lang="json"}
      ```json
      {
        "audienceGroupId": 1234567890123,
        "createRoute": "MESSAGING_API",
        "type": "UPLOAD",
        "description": "audienceGroupName_01",
        "created": 1613700237,
        "permission": "READ_WRITE",
        "expireTimestamp": 1629252237,
        "isIfaAudience": false
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

  | コード   | 説明                                                                                                                                                                                                                                                                                                                                                                                                                                           |
  | ----- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
  | `400` | リクエストに問題があります。次のような理由が考えられます。- `file`プロパティに指定したファイルに、無効なユーザーIDまたはIFAが入力されている。 - `file`プロパティに最大件数（1,500,000件）より多いユーザーIDまたはIFAを入力したファイルが指定されている。 - `file`プロパティに指定したファイルに、有効なユーザーIDまたはIFAが指定されていない。 - 作成できるオーディエンス数の上限（合計1,000件）に達している。 - `description`プロパティに最大文字数（120文字）より長い名前が指定されている。 - `description`プロパティに無効な文字（例：`\n`などの制御コード）が指定されている。 - `description`プロパティが空であるか、空白文字のみが指定されている。 - `uploadDescription`プロパティに最大文字数（300文字）より長い文字列が指定されている。 |
  | `415` | `file`プロパティに、サポートされていないメディア形式のファイルが指定されている。                                                                                                                                                                                                                                                                                                                                                                                                  |
  | `429` | 同時処理数の上限を超えています。詳しくは、「[同時処理数の制限](#limit-on-the-number-of-concurrent-operations)」を参照してください。                                                                                                                                                                                                                                                                                                                                                   |

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
