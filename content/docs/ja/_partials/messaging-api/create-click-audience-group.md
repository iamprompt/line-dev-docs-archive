---
title: Create Click Audience Group
navigation: true
description: ''
meta: '{}'
path: /ja/_partials/messaging-api/create-click-audience-group
__hash__: JN2oo7LeOCKA9ZuBctlYv2gZ2MvWnnoHaswGDBcy_Qo
seo:
  description: ''
---

### メッセージクリックオーディエンスを作成する

:api-endpoint{protocol="post" endpoint="https://api.line.me/v2/bot/audienceGroup/click"}::reference-with-code
  :::reference-content
  メッセージクリックオーディエンスを作成します。

  メッセージクリックオーディエンスは、ブロードキャストメッセージまたはナローキャストメッセージに記載されたURLをクリックしたユーザーを集めたオーディエンスです。少なくとも1つのリンクをクリックしたユーザーが送信対象になります。

  対象のメッセージは、リクエストIDで指定します。

    ::::admonition{title="メッセージクリックオーディエンスの仕様" type="tip"}
    オーディエンスの仕様は以下のとおりです。

    | 項目                                      | 条件                     |
    | --------------------------------------- | ---------------------- |
    | チャネルあたりのオーディエンス数                        | 最大1,000件               |
    | オーディエンスの保存期間                            | 最大180日間（15,552,000秒間）  |
    | オーディエンスあたりのユーザー数                        | メッセージクリックオーディエンス：最小50件 |
    | メッセージを配信してからリターゲティング用オーディエンス（※）を作成できる期間 | 最大60日間（5,184,000秒間）    |

    ※メッセージクリックオーディエンスおよびメッセージインプレッションオーディエンスを指します。

    ナローキャストメッセージの使用制限については、「[属性情報やオーディエンスを利用したメッセージ送信の制限事項](#send-narrowcast-message-restrictions)」を参照してください。
    ::::
  :::

  :::reference-code
  *リクエストの例*

    ::::code-tabs
      :::::tab{lang="shell"}
      ```sh
      curl -v -X POST https://api.line.me/v2/bot/audienceGroup/click \
      -H 'Authorization: Bearer {channel access token}' \
      -H 'Content-Type: application/json' \
      -d '{
          "description": "audienceGroupName_01",
          "requestId": "bb9744f9-47fa-4a29-941e-1234567890ab",
          "clickUrl": "https://developers.line.biz/"
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
  description

  #undefined
  String

  オーディエンスの名前。なお、大文字と小文字は区別されないため、`AUDIENCE`と`audience`は同じ名前と判定されます。  

  最大文字数：120
  :::

  :::parameter-table-entry{required="true"}
  #undefined
  requestId

  #undefined
  String

  配信から60日以内のブロードキャストメッセージまたはナローキャストメッセージのリクエストID。リクエストIDは、Messaging APIのリクエストごとに発行されるIDです。[レスポンスヘッダー](#response-headers)に含まれます。

    ::::admonition{title="注意" type="note"}
    応答メッセージ、プッシュメッセージ、およびマルチキャストメッセージのリクエストIDは、利用できません。
    ::::
  :::

  :::parameter-table-entry{optional=""}
  #undefined
  clickUrl

  #undefined
  String

  ユーザーがクリックしたURL。省略した場合は、メッセージ内の任意のURLをクリックしたユーザーが送信対象になります。  

  最大文字数：2,000
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

      - `CLICK`：メッセージクリックオーディエンス
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

      :::::parameter-table-entry
      #undefined
      requestId

      #undefined
      String

      オーディエンスを作成したときに指定したリクエストID
      :::::

      :::::parameter-table-entry{annotation="含まれないことがあります"}
      #undefined
      clickUrl

      #undefined
      String

      オーディエンスを作成したときに指定したURL。リクエスト時に`clickUrl`プロパティに値を指定した場合にのみ含まれます。
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
        "type": "CLICK",
        "description": "audienceGroupName_01",
        "created": 1613705240,
        "permission": "READ_WRITE",
        "expireTimestamp": 1629257239,
        "isIfaAudience": false,
        "requestId": "bb9744f9-47fa-4a29-941e-1234567890ab",
        "clickUrl": "https://developers.line.biz/"
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

  | コード   | 説明                                                                                                                                                                                                                                                                                                                           |
  | ----- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
  | `400` | リクエストに問題があります。次のような理由が考えられます。- 作成できるオーディエンス数の上限（合計1,000件）に達している。 - `description`プロパティに最大文字数（120文字）より長い名前が指定されている。 - `description`プロパティに無効な文字（例：`\n`などの制御コード）が指定されている。 - `requestID`プロパティと`clickUrl`プロパティに既存のオーディエンスと同じ組み合わせの値が指定されている。 - オーディエンスを作成できる期間を超えている。 - 存在しないリクエストIDが指定されている。 - 指定したリクエストIDでオーディエンスを作成する準備ができていない。 |

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
