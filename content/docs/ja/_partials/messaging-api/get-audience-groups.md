---
title: Get Audience Groups
navigation: true
description: ''
meta: '{}'
path: /ja/_partials/messaging-api/get-audience-groups
__hash__: I36Os6tYE1EfZf9Ghe4TasxJnzy4cdHM0NBV_FzfTRk
seo:
  description: ''
---

### 複数のオーディエンスの情報を取得する

:api-endpoint{protocol="get" endpoint="https://api.line.me/v2/bot/audienceGroup/list"}::reference-with-code
  :::reference-content
  複数のオーディエンスの情報を取得します。
  :::

  :::reference-code
  *リクエストの例*

    ::::code-tabs
      :::::tab{lang="shell"}
      ```sh
      curl -v -X GET https://api.line.me/v2/bot/audienceGroup/list \
      --data-urlencode 'page=1' \
      --data-urlencode 'description=audienceGroupName' \
      --data-urlencode 'size=40' \
      --data-urlencode 'createRoute=OA_MANAGER' \
      -G \
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

#### クエリパラメータ

::parameter-table
  :::parameter-table-entry{required="true"}
  #undefined
  page

  取得するページ番号。`1`以上を指定してください。
  :::

  :::parameter-table-entry{optional=""}
  #undefined
  description

  取得するオーディエンスの名前。部分一致で検索できます。なお、大文字と小文字は区別されないため、`AUDIENCE`と`audience`は同じ名前と判定されます。省略した場合は、オーディエンスの名前を検索条件として使用しません。
  :::

  :::parameter-table-entry{optional=""}
  #undefined
  status

  取得するオーディエンスのステータス。省略した場合は、オーディエンスのステータスを検索条件として使用しません。以下のいずれかの値です。

  - `IN_PROGRESS`：準備中。
  - `READY`：配信に利用可能。
  - `FAILED`：作成時にエラーが発生。
  - `EXPIRED`：有効期限切れ。有効期限切れ後、1か月後に自動で削除されます。
  - `INACTIVE`：オーディエンスが無効です。
  - `ACTIVATING`：オーディエンスを有効化しています。
  :::

  :::parameter-table-entry{optional=""}
  #undefined
  size

  1ページごとのオーディエンス数。デフォルト値は`20`です。  

  最大値：`40`
  :::

  :::parameter-table-entry{optional=""}
  #undefined
  includesExternalPublicGroups

  - `true`：同じボットに関連付けられた、すべてのチャネルで作成された公開オーディエンスを取得（デフォルト）
  - `false`：同じチャネルに作成されたオーディエンスのみを取得
  :::

  :::parameter-table-entry{optional=""}
  #undefined
  createRoute

  オーディエンスの作成方法。省略した場合は、すべてのオーディエンスを取得します。

  - `OA_MANAGER`：[LINE Official Account Manager](https://manager.line.biz/){rel="[\"nofollow\"]"}で作成したオーディエンスのみを取得
  - `MESSAGING_API`：Messaging APIで作成したオーディエンスのみを取得
  - `POINT_AD`：[LINEポイントAD](https://www.lycbiz.com/jp/service/line-point-ad/){rel="[\"nofollow\"]"}で作成したオーディエンスのみを取得
  - `AD_MANAGER`：[LINE広告](https://admanager.line.biz/){rel="[\"nofollow\"]"}で作成したオーディエンスのみを取得

  複数のパラメータを指定した場合、OR条件となります。
  :::
::

#### レスポンス

::reference-with-code
  :::reference-content
  HTTPステータスコード`200`と以下の情報を含むJSONオブジェクトを返します。

    ::::parameter-table
      :::::parameter-table-entry
      #undefined
      audienceGroups

      #undefined
      Array

      オーディエンスの情報の配列。指定した条件に該当するオーディエンスが存在しなかった場合は空配列が返ります。
      :::::

      :::::parameter-table-entry
      #undefined
      audienceGroups[].audienceGroupId

      #undefined
      Number

      オーディエンスID
      :::::

      :::::parameter-table-entry
      #undefined
      audienceGroups[].createRoute

      #undefined
      String

      オーディエンスの作成方法。以下のいずれかの値です。

      - `OA_MANAGER`：[LINE Official Account Manager](https://manager.line.biz/){rel="[\"nofollow\"]"}で作成したオーディエンス
      - `MESSAGING_API`：Messaging APIで作成したオーディエンス
      - `POINT_AD`：[LINEポイントAD](https://www.lycbiz.com/jp/service/line-point-ad/){rel="[\"nofollow\"]"}で作成したオーディエンス
      - `AD_MANAGER`：[LINE広告](https://admanager.line.biz/){rel="[\"nofollow\"]"}で作成したオーディエンス
      :::::

      :::::parameter-table-entry
      #undefined
      audienceGroups[].type

      #undefined
      String

      オーディエンスのタイプ。以下のいずれかの値です。

      - `UPLOAD`：ユーザーIDアップロード用のオーディエンス
      - `CLICK`：メッセージクリックオーディエンス
      - `IMP`：メッセージインプレッションオーディエンス
      - `CHAT_TAG`：チャットタグオーディエンス
      - `FRIEND_PATH`：追加経路オーディエンス
      - `RESERVATION`：予約オーディエンス
      - `RICHMENU_IMP`：リッチメニューインプレッションオーディエンス
      - `RICHMENU_CLICK`：リッチメニュークリックオーディエンス
      - `APP_EVENT`：アプリイベントオーディエンス
      - `VIDEO_VIEW`：動画視聴オーディエンス
      - `WEBTRAFFIC`：ウェブトラフィックオーディエンス（LINE Tag）
      - `TRACKINGTAG_WEBTRAFFIC`：ウェブトラフィックオーディエンス（計測タグ）
      - `IMAGE_CLICK`：画像クリックオーディエンス
      - `POP_AD_IMP`：LINE Beacon Networkインプレッションオーディエンス

      詳しくは、『LINEヤフー for Business』の「[オーディエンス](https://www.lycbiz.com/jp/manual/OfficialAccountManager/messages-audience/){rel="[\"nofollow\"]"}」を参照してください。
      :::::

      :::::parameter-table-entry
      #undefined
      audienceGroups[].description

      #undefined
      String

      オーディエンスの名前
      :::::

      :::::parameter-table-entry
      #undefined
      audienceGroups[].status

      #undefined
      String

      オーディエンスのステータス。以下のいずれかの値です。

      - `IN_PROGRESS`：準備中。`READY`になるまで数時間かかる場合があります。ユーザー数の規定があるオーディエンスにおいて、オーディエンスに含まれるユーザーの数（最低50件）が不足している場合、ステータスは`IN_PROGRESS`のまま更新されません。
      - `READY`：配信に利用可能。
      - `FAILED`：作成時にエラーが発生。
      - `EXPIRED`：有効期限切れ。有効期限切れ後、1か月後に自動で削除されます。
      - `INACTIVE`：オーディエンスが無効です。
      - `ACTIVATING`：オーディエンスを有効化しています。
      :::::

      :::::parameter-table-entry
      #undefined
      audienceGroups[].audienceCount

      #undefined
      Number

      オーディエンスに含まれるユーザーの数。ユーザーのプライバシーを保護するため、有効な送信対象アカウントの数が20未満の場合は0が返ります。ただし、オーディエンスのタイプが以下の場合を除きます。

      - ユーザーIDアップロード用のオーディエンス（送信対象アカウントをユーザーIDで指定する場合）
      - チャットタグオーディエンス

      オーディエンスには、既にLINE公式アカウントをブロックしたユーザーも含まれる可能性があるため、`audienceGroups[].audienceCount`の値と、メッセージの送信対象となるユーザーの数は異なります。
      :::::

      :::::parameter-table-entry
      #undefined
      audienceGroups[].created

      #undefined
      Number

      オーディエンスが作成された時刻。UNIX時間（秒）で返されます。
      :::::

      :::::parameter-table-entry
      #undefined
      audienceGroups[].permission

      #undefined
      String

      オーディエンスに対する更新権限。現在のMessaging APIチャネルが、対象のオーディエンスを更新できる場合は`READ_WRITE`、更新できない場合は`READ`が返ります。

      - `READ`：オーディエンスを利用できますが、更新はできません。
      - `READ_WRITE`：オーディエンスを利用、更新できます。
      :::::

      :::::parameter-table-entry
      #undefined
      audienceGroups[].isIfaAudience

      #undefined
      Boolean

      ユーザーIDアップロード用のオーディエンスを作成したときに指定した、送信対象アカウントの種類を示す値。以下のいずれかの値です。

      - `true`：IFAで指定する
      - `false`：ユーザーIDで指定する（デフォルト）
      :::::

      :::::parameter-table-entry{annotation="含まれないことがあります"}
      #undefined
      audienceGroups[].activated

      #undefined
      Number

      オーディエンスが有効化した時間。[LINE広告](https://admanager.line.biz/){rel="[\"nofollow\"]"}や[LINEポイントAD](https://www.lycbiz.com/jp/service/line-point-ad/){rel="[\"nofollow\"]"}で作成したオーディエンスの場合のみ含まれます。
      :::::

      :::::parameter-table-entry{annotation="含まれないことがあります"}
      #undefined
      audienceGroups[].inactivatedTimestamp

      #undefined
      Number

      オーディエンスが無効化した時間。[LINE広告](https://admanager.line.biz/){rel="[\"nofollow\"]"}や[LINEポイントAD](https://www.lycbiz.com/jp/service/line-point-ad/){rel="[\"nofollow\"]"}で作成したオーディエンスの場合のみ含まれます。
      :::::

      :::::parameter-table-entry{annotation="含まれないことがあります"}
      #undefined
      audienceGroups[].expireTimestamp

      #undefined
      Number

      オーディエンスの有効期限。UNIX時間（秒）で返されます。特定のオーディエンスの場合のみ含まれます。
      :::::

      :::::parameter-table-entry{annotation="含まれないことがあります"}
      #undefined
      audienceGroups[].requestId

      #undefined
      String

      オーディエンスを作成したときに指定したリクエストID。`audienceGroups[].type`が`CLICK`または`IMP`の場合にのみ含まれます。
      :::::

      :::::parameter-table-entry{annotation="含まれないことがあります"}
      #undefined
      audienceGroups[].clickUrl

      #undefined
      String

      オーディエンスを作成したときに指定したURL。`audienceGroups[].type`が`CLICK`で、リンク先URLが指定されている場合にのみ含まれます。
      :::::

      :::::parameter-table-entry{annotation="含まれないことがあります"}
      #undefined
      audienceGroups[].failedType

      #undefined
      String

      失敗した原因。`audienceGroups[].status`が`FAILED`または`EXPIRED`の場合にのみ含まれます。以下のいずれかの値です。

      - `AUDIENCE_GROUP_AUDIENCE_INSUFFICIENT`：オーディエンスに含まれるユーザーの数（最低50件）が不足しています。
      - `INTERNAL_ERROR`：内部サーバーのエラーです。
      :::::

      :::::parameter-table-entry
      #undefined
      hasNextPage

      #undefined
      Boolean

      次のページが存在する場合は、`true`
      :::::

      :::::parameter-table-entry
      #undefined
      totalCount

      #undefined
      Number

      指定した条件で取得できるオーディエンスの総数
      :::::

      :::::parameter-table-entry
      #undefined
      readWriteAudienceGroupTotalCount

      #undefined
      Number

      指定した条件で取得できるオーディエンスのうち、更新権限（`audienceGroups[].permission`）が`READ_WRITE`になっているオーディエンスの数
      :::::

      :::::parameter-table-entry
      #undefined
      page

      #undefined
      Number

      現在のページ番号
      :::::

      :::::parameter-table-entry
      #undefined
      size

      #undefined
      Number

      現在のページに含まれる最大のオーディエンス数
      :::::
    ::::
  :::

  :::reference-code
  *レスポンスの例*

    ::::code-tabs
      :::::tab{lang="json"}
      ```json
      // 指定した条件に該当するオーディエンスが2件あった場合の例
      {
          "audienceGroups": [
              {
                  "audienceGroupId": 1234567890123,
                  "createRoute": "OA_MANAGER",
                  "type": "CLICK",
                  "description": "audienceGroupName_01",
                  "status": "IN_PROGRESS",
                  "audienceCount": 8619,
                  "created": 1611114828,
                  "permission": "READ",
                  "isIfaAudience": false,
                  "expireTimestamp": 1626753228,
                  "requestId": "c10c3d86-f565-...",
                  "clickUrl": "https://example.com/"
              },
              {
                  "audienceGroupId": 2345678901234,
                  "createRoute": "AD_MANAGER",
                  "type": "APP_EVENT",
                  "description": "audienceGroupName_02",
                  "status": "READY",
                  "audienceCount": 3368,
                  "created": 1608619802,
                  "permission": "READ",
                  "activated": 1610068515,
                  "inactiveTimestamp": 1625620516,
                  "isIfaAudience": false
              }
          ],
          "hasNextPage": false,
          "totalCount": 2,
          "readWriteAudienceGroupTotalCount": 0,
          "size": 40,
          "page": 1
      }

      // 指定した条件に該当するオーディエンスが存在しなかった場合の例
      {
          "audienceGroups": [],
          "hasNextPage": false,
          "totalCount": 0,
          "readWriteAudienceGroupTotalCount": 0,
          "size": 40,
          "page": 1
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

  | コード   | 説明                      |
  | ----- | ----------------------- |
  | `400` | クエリパラメータに無効な値が指定されています。 |

  詳しくは、[共通仕様](#common-specifications)の「[ステータスコード](#status-codes)」および「[エラーレスポンス](#error-responses)」を参照してください。
  :::

  :::reference-code
  *エラーレスポンスの例*

    ::::code-tabs
      :::::tab{lang="json"}
      ```json
      // クエリパラメータに無効な値を指定した場合（400 Bad Request）
      {
        "message": "size: must be less than or equal to 40",
        "details": [
          {
            "message": "TOO_HIGH"
          }
        ]
      }
      ```
      :::::
    ::::
  :::
::
