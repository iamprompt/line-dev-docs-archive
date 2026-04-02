---
title: Get Shared Audience List
navigation: true
description: ''
meta: '{}'
path: /ja/_partials/messaging-api/get-shared-audience-list
__hash__: yqc5RWsyqyQLcdBnOLscDU9g45-8MKfwSHyb7D0rL8I
seo:
  description: ''
---

### ビジネスマネージャーで共有されたオーディエンスのリストを取得する

:api-endpoint{protocol="get" endpoint="https://api.line.me/v2/bot/audienceGroup/shared/list"}::reference-with-code
  :::reference-content
  [ビジネスマネージャー](https://data.linebiz.com/solutions/business-manager){rel="[\"nofollow\"]"}で共有されたオーディエンスのリストを取得します。

  「[ビジネスマネージャーで共有されたオーディエンスの情報を取得する](/reference/messaging-api/#get-shared-audience)」エンドポイントを使うことで、それぞれのオーディエンスについて、より詳細な情報を取得できます。

    ::::admonition{title="ビジネスマネージャーについて" type="tip"}
    ビジネスマネージャーを使うことで、特定のオーディエンスを複数のサービス間で共有できます。ビジネスマネージャーでオーディエンスを横断利用することで、エンドユーザーとのより良いコミュニケーションが実現できます。

    詳しくは、『LINE DATA SOLUTION』の「[ビジネスマネージャー](https://data.linebiz.com/solutions/business-manager){rel="[\"nofollow\"]"}」を参照してください。
    ::::
  :::

  :::reference-code
  *リクエストの例*

    ::::code-tabs
      :::::tab{lang="shell"}
      ```sh
      curl -v -X GET https://api.line.me/v2/bot/audienceGroup/shared/list \
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
  :::parameter-table-entry{optional=""}
  #undefined
  page

  取得するページ番号。`1`以上を指定してください。省略した場合は、1ページ目を取得します。

  オーディエンスをすべて取得する場合、レスポンスの`audienceGroups`配列が、1ページごとのオーディエンス数（`size`）未満の件数になるまで、`page`をインクリメントしてリクエストを繰り返します。
  :::

  :::parameter-table-entry{optional=""}
  #undefined
  description

  取得するオーディエンスの名前。部分一致で検索できます。なお、大文字と小文字は区別されないため、`AUDIENCE`と`audience`は同じ名前と判定されます。省略した場合は、オーディエンスの名前を検索条件として使用しません。
  :::

  :::parameter-table-entry{optional=""}
  #undefined
  status

  取得するオーディエンスのステータス。以下のいずれかの値で指定します。省略した場合は、オーディエンスのステータスを検索条件として使用しません。

  - `IN_PROGRESS`：準備中。
  - `READY`：配信に利用可能。
  - `FAILED`：作成時にエラーが発生。
  - `EXPIRED`：有効期限切れ。有効期限切れ後、1か月後に自動で削除されます。
  :::

  :::parameter-table-entry{optional=""}
  #undefined
  size

  1ページごとのオーディエンス数。デフォルト値は`20`です。  

  最大値：`40`
  :::

  :::parameter-table-entry{optional=""}
  #undefined
  createRoute

  オーディエンスの作成方法。省略した場合は、すべてのオーディエンスを取得します。

  - `OA_MANAGER`：[LINE Official Account Manager](https://manager.line.biz/){rel="[\"nofollow\"]"}で作成したオーディエンスのみを取得
  - `MESSAGING_API`：Messaging APIで作成したオーディエンスのみを取得
  - `POINT_AD`：[LINEポイントAD](https://www.lycbiz.com/jp/service/line-point-ad/){rel="[\"nofollow\"]"}で作成したオーディエンスのみを取得
  - `AD_MANAGER`：[LINE広告](https://admanager.line.biz/){rel="[\"nofollow\"]"}で作成したオーディエンスのみを取得
  - `BUSINESS_MANAGER`：[ビジネスマネージャー](https://data.linebiz.com/solutions/business-manager){rel="[\"nofollow\"]"}で作成したオーディエンスのみを取得
  - `YAHOO_DISPLAY_ADS`：[Yahoo!広告 ディスプレイ広告](https://www.lycbiz.com/jp/service/yahoo-ads/displayads-auc/){rel="[\"nofollow\"]"}で作成したオーディエンスのみを取得

  複数のパラメータを指定した場合、OR条件となります。
  :::

  :::parameter-table-entry{optional=""}
  #undefined
  includesOwnedAudienceGroups

  ビジネスマネージャーで共有されたオーディエンスに加えて、LINE公式アカウントで作成したオーディエンスを含めるかどうかの設定。デフォルト値は`false`です。

  - `true`：LINE公式アカウントで作成したオーディエンスを含めて取得
  - `false`：ビジネスマネージャーで共有されたオーディエンスのみを取得
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
      - `BUSINESS_MANAGER`：[ビジネスマネージャー](https://data.linebiz.com/solutions/business-manager){rel="[\"nofollow\"]"}で作成したオーディエンス
      - `YAHOO_DISPLAY_ADS`：[Yahoo!広告 ディスプレイ広告](https://www.lycbiz.com/jp/service/yahoo-ads/displayads-auc/){rel="[\"nofollow\"]"}で作成したオーディエンス
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
      audienceGroups[].webtraffic

      #undefined
      Object

      [ウェブトラフィックオブジェクト](#get-shared-audience-list-response-webtraffic)。`audienceGroups[].type`が`WEBTRAFFIC`または`TRACKINGTAG_WEBTRAFFIC`の場合にのみ含まれます。
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
            "createRoute": "BUSINESS_MANAGER",
            "type": "WEBTRAFFIC",
            "description": "Web traffic audience",
            "status": "READY",
            "audienceCount": 4871,
            "created": 1668179144,
            "permission": "READ",
            "isIfaAudience": true,
            "webtraffic": {
              "webtrafficIsMyTag": false,
              "webtrafficBmTagSharingStatus": "SHARED",
              "webtrafficIsTagDeleted": false,
              "webtrafficTagCreateRoute": "OA_MANAGER"
            }
          },
          {
            "audienceGroupId": 3210987654321,
            "createRoute": "AD_MANAGER",
            "type": "IMAGE_CLICK",
            "description": "Image click audience",
            "status": "IN_PROGRESS",
            "audienceCount": 2234,
            "created": 1718895503,
            "permission": "READ",
            "isIfaAudience": true
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

##### ウェブトラフィックオブジェクト

::reference-with-code
  :::reference-content
  ウェブトラフィックオーディエンスについての情報を表すオブジェクトです。

    ::::parameter-table
      :::::parameter-table-entry
      #undefined
      webtrafficIsMyTag

      #undefined
      Boolean

      - LINE Tagの場合：LINE TagがMessaging APIチャネルと紐づいているLINE公式アカウントで作成されている場合は`true`を返します。
      - 計測タグの場合：常に`false`を返します。
      :::::

      :::::parameter-table-entry
      #undefined
      webtrafficBmTagSharingStatus

      #undefined
      String

      ウェブトラフィックオーディエンスで使用されているLINE Tagまたは計測タグのビジネスマネージャーでの共有状態を表す値。

      LINE Tagの場合、以下の値を返します。

      - `SHARED`：ビジネスマネージャー上で共有されている
      - `UNSHARED`：ビジネスマネージャー上で共有されていない
      - `ERROR`：一時的なエラーのためタグの詳細が取得できない

      計測タグの場合、以下の値を返します。

      - `SHARED`：計測タグを作成したビジネスマネージャーの組織とLINE公式アカウントが連携済み
      - `UNSHARED`：計測タグを作成したビジネスマネージャーの組織とLINE公式アカウントが未連携
      - `ERROR`：一時的なエラーのためタグの詳細が取得できない

      ビジネスマネージャーの組織とLINE公式アカウントの連携方法について詳しくは、『LINE for Business』の「[組織へのLINE公式アカウントの接続方法を教えてください](https://help.linebiz.com/lineadshelp/s/article/L000001362?language=ja){rel="[\"nofollow\"]"}」を参照してください。
      :::::

      :::::parameter-table-entry
      #undefined
      webtrafficIsTagDeleted

      #undefined
      Boolean

      - LINE Tagの場合：このウェブトラフィックオーディエンスで使用されているLINE Tagが既に削除されている場合は`true`を返します。
      - 計測タグの場合：常に`false`を返します。
      :::::

      :::::parameter-table-entry
      #undefined
      webtrafficTagCreateRoute

      #undefined
      String

      ウェブトラフィックオーディエンスの作成方法。以下のいずれかの値です。

      - `OA_MANAGER`：[LINE Official Account Manager](https://manager.line.biz/){rel="[\"nofollow\"]"}で作成したオーディエンス
      - `AD_MANAGER`：[LINE広告](https://admanager.line.biz/){rel="[\"nofollow\"]"}で作成したオーディエンス
      - `BUSINESS_MANAGER`：[ビジネスマネージャー](https://data.linebiz.com/solutions/business-manager){rel="[\"nofollow\"]"}で作成したオーディエンス
      :::::
    ::::
  :::

  :::reference-code
  *例*

    ::::code-tabs
      :::::tab{lang="json"}
      ```json
      {
        "webtrafficIsMyTag": false,
        "webtrafficBmTagSharingStatus": "UNSHARED",
        "webtrafficIsTagDeleted": false,
        "webtrafficTagCreateRoute": "BUSINESS_MANAGER"
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
