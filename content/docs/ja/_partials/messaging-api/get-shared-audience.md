---
title: Get Shared Audience
navigation: true
description: ''
meta: '{}'
path: /ja/_partials/messaging-api/get-shared-audience
__hash__: bK6ev8rWGRb0XSSvdOq8uKyd_zGKC42af-dAPutpAYc
seo:
  description: ''
---

### ビジネスマネージャーで共有されたオーディエンスの情報を取得する

:api-endpoint{protocol="get" endpoint="https://api.line.me/v2/bot/audienceGroup/shared/{audienceGroupId}"}::reference-with-code
  :::reference-content
  [ビジネスマネージャー](https://www.lycbiz.com/jp/service/business-manager/){rel="[\"nofollow\"]"}で共有されたオーディエンスの情報を取得します。

    ::::admonition{title="ビジネスマネージャーについて" type="tip"}
    ビジネスマネージャーを使うことで、特定のオーディエンスを複数のサービス間で共有できます。ビジネスマネージャーでオーディエンスを横断利用することで、エンドユーザーとのより良いコミュニケーションが実現できます。

    詳しくは、『LINEヤフー for Business』の「[ビジネスマネージャー](https://www.lycbiz.com/jp/service/business-manager/){rel="[\"nofollow\"]"}」を参照してください。
    ::::
  :::

  :::reference-code
  *リクエストの例*

    ::::code-tabs
      :::::tab{lang="shell"}
      ```sh
      curl -v -X GET https://api.line.me/v2/bot/audienceGroup/shared/{audienceGroupId} \
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

#### パスパラメータ

::parameter-table
  :::parameter-table-entry{required="true"}
  #undefined
  audienceGroupId

  情報を取得したいオーディエンスのオーディエンスID。
  :::
::

#### レスポンス

::reference-with-code
  :::reference-content
  HTTPステータスコード`200`と以下の情報を含むJSONオブジェクトを返します。

    ::::parameter-table
      :::::parameter-table-entry
      #undefined
      audienceGroup

      #undefined
      Object

      オーディエンスグループオブジェクト
      :::::

      :::::parameter-table-entry
      #undefined
      audienceGroup.audienceGroupId

      #undefined
      Number

      オーディエンスID
      :::::

      :::::parameter-table-entry
      #undefined
      audienceGroup.createRoute

      #undefined
      String

      オーディエンスの作成方法。以下のいずれかの値です。

      - `OA_MANAGER`：[LINE Official Account Manager](https://manager.line.biz/){rel="[\"nofollow\"]"}で作成したオーディエンス
      - `MESSAGING_API`：Messaging APIで作成したオーディエンス
      - `POINT_AD`：[LINEポイントAD](https://www.lycbiz.com/jp/service/line-point-ad/){rel="[\"nofollow\"]"}で作成したオーディエンス
      - `AD_MANAGER`：[LINE広告](https://admanager.line.biz/){rel="[\"nofollow\"]"}で作成したオーディエンス
      - `BUSINESS_MANAGER`：[ビジネスマネージャー](https://www.lycbiz.com/jp/service/business-manager/){rel="[\"nofollow\"]"}で作成したオーディエンス
      - `YAHOO_DISPLAY_ADS`：[LINEヤフー広告 ディスプレイ広告](https://www.lycbiz.com/jp/service/ly-ads/displayads-auc/){rel="[\"nofollow\"]"}で作成したオーディエンス
      :::::

      :::::parameter-table-entry
      #undefined
      audienceGroup.type

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
      audienceGroup.description

      #undefined
      String

      オーディエンスの名前
      :::::

      :::::parameter-table-entry
      #undefined
      audienceGroup.status

      #undefined
      String

      オーディエンスのステータス。以下のいずれかの値です。

      - `IN_PROGRESS`：準備中。`READY`になるまで数時間かかる場合があります。ユーザー数の規定があるオーディエンスにおいて、オーディエンスに含まれるユーザーの数（最低50件）が不足している場合、ステータスは`IN_PROGRESS`のまま更新されません。
      - `READY`：配信に利用可能（※）。
      - `FAILED`：作成時にエラーが発生。
      - `EXPIRED`：有効期限切れ。有効期限切れ後、1か月後に自動で削除されます。
      - `INACTIVE`：オーディエンスが無効です。
      - `ACTIVATING`：オーディエンスを有効化しています。

      ※ユーザーIDアップロード用のオーディエンスでは、`audienceGroup.status`が`READY`のオーディエンスにユーザーIDまたはIFAを追加した後も、ステータスは`READY`のままです。追加した送信対象アカウントを含むユーザーにメッセージを送信したい場合は、該当するジョブの`jobs[].jobStatus`が`FINISHED`であることを確認してください。
      :::::

      :::::parameter-table-entry
      #undefined
      audienceGroup.audienceCount

      #undefined
      Number

      オーディエンスに含まれるユーザーの数。ユーザーのプライバシーを保護するため、有効な送信対象アカウントの数が20未満の場合は0が返ります。ただし、オーディエンスのタイプが以下の場合を除きます。

      - ユーザーIDアップロード用のオーディエンス（送信対象アカウントをユーザーIDで指定する場合）
      - チャットタグオーディエンス

      オーディエンスには、既にLINE公式アカウントをブロックしたユーザーも含まれる可能性があるため、`audienceGroup.audienceCount`の値と、メッセージの送信対象となるユーザーの数は異なります。
      :::::

      :::::parameter-table-entry
      #undefined
      audienceGroup.created

      #undefined
      Number

      オーディエンスが作成された時刻。UNIX時間（秒）で返されます。
      :::::

      :::::parameter-table-entry
      #undefined
      audienceGroup.permission

      #undefined
      String

      オーディエンスに対する更新権限。現在のMessaging APIチャネルが、対象のオーディエンスを更新できる場合は`READ_WRITE`、更新できない場合は`READ`が返ります。

      - `READ`：オーディエンスを利用できますが、更新はできません。
      - `READ_WRITE`：オーディエンスを利用、更新できます。
      :::::

      :::::parameter-table-entry
      #undefined
      audienceGroup.isIfaAudience

      #undefined
      Boolean

      ユーザーIDアップロード用のオーディエンスを作成したときに指定した、送信対象アカウントの種類を示す値。以下のいずれかの値です。

      - `true`：IFAで指定する
      - `false`：ユーザーIDで指定する（デフォルト）
      :::::

      :::::parameter-table-entry{annotation="含まれないことがあります"}
      #undefined
      audienceGroups[].webtraffic

      #undefined
      Object

      [ウェブトラフィックオブジェクト](#get-shared-audience-response-webtraffic)。`audienceGroups[].type`が`WEBTRAFFIC`または`TRACKINGTAG_WEBTRAFFIC`の場合にのみ含まれます。
      :::::

      :::::parameter-table-entry{annotation="含まれないことがあります"}
      #undefined
      audienceGroup.requestId

      #undefined
      String

      オーディエンスを作成したときに指定したリクエストID。`audienceGroup.type`が`CLICK`または`IMP`の場合にのみ含まれます。
      :::::

      :::::parameter-table-entry{annotation="含まれないことがあります"}
      #undefined
      audienceGroup.clickUrl

      #undefined
      String

      オーディエンスを作成したときに指定したURL。`audienceGroup.type`が`CLICK`で、リンク先URLが指定されている場合にのみ含まれます。
      :::::

      :::::parameter-table-entry{annotation="含まれないことがあります"}
      #undefined
      audienceGroup.failedType

      #undefined
      String

      失敗した原因。`audienceGroup.status`が`FAILED`の場合にのみ含まれます。以下のいずれかの値です。

      - `AUDIENCE_GROUP_AUDIENCE_INSUFFICIENT`：オーディエンスに含まれるユーザーの数（最低50件）が不足しています。
      - `INTERNAL_ERROR`：内部サーバーのエラーです。
      :::::

      :::::parameter-table-entry{annotation="含まれないことがあります"}
      #undefined
      audienceGroup.activated

      #undefined
      Number

      オーディエンスが有効化した時間。[LINE広告](https://admanager.line.biz/){rel="[\"nofollow\"]"}や[LINEポイントAD](https://www.lycbiz.com/jp/service/line-point-ad/){rel="[\"nofollow\"]"}で作成したオーディエンスの場合のみ含まれます。
      :::::

      :::::parameter-table-entry{annotation="含まれないことがあります"}
      #undefined
      audienceGroup.inactivatedTimestamp

      #undefined
      Number

      オーディエンスが無効化した時間。[LINE広告](https://admanager.line.biz/){rel="[\"nofollow\"]"}や[LINEポイントAD](https://www.lycbiz.com/jp/service/line-point-ad/){rel="[\"nofollow\"]"}で作成したオーディエンスの場合のみ含まれます。
      :::::

      :::::parameter-table-entry{annotation="含まれないことがあります"}
      #undefined
      audienceGroup.expireTimestamp

      #undefined
      Number

      オーディエンスの有効期限。UNIX時間（秒）で返されます。特定のオーディエンスの場合のみ含まれます。
      :::::

      :::::parameter-table-entry
      #undefined
      jobs

      #undefined
      Array

      ジョブの配列。ユーザーIDアップロード用のオーディエンスに、ユーザーIDまたはIFAを追加した最新履歴を管理する配列です。それ以外のオーディエンスの場合は空配列が返ります。  
      最大件数：50
      :::::

      :::::parameter-table-entry
      #undefined
      jobs[].audienceGroupJobId

      #undefined
      Number

      ジョブID
      :::::

      :::::parameter-table-entry
      #undefined
      jobs[].audienceGroupId

      #undefined
      Number

      オーディエンスID
      :::::

      :::::parameter-table-entry
      #undefined
      jobs[].description

      #undefined
      String

      ジョブの説明。ユーザーIDまたはIFAを追加する際に`uploadDescription`プロパティに値を指定しなかった場合は`null`が返されます。
      :::::

      :::::parameter-table-entry
      #undefined
      jobs[].type

      #undefined
      String

      ジョブの種類。以下のいずれかの値です。

      - `DIFF_ADD`：Messaging APIでユーザーIDまたはIFAを追加したことを示します。
      :::::

      :::::parameter-table-entry
      #undefined
      jobs[].status

      #undefined
      String

      このプロパティの利用は非推奨です。ジョブのステータスは`jobs[].jobStatus`を参照してください。
      :::::

      :::::parameter-table-entry
      #undefined
      jobs[].failedType

      #undefined
      String

      失敗した原因。`jobs[].jobStatus`が`FAILED`の場合にのみ含まれます。以下のいずれかの値です。

      - `AUDIENCE_GROUP_AUDIENCE_INSUFFICIENT`：オーディエンスに含まれるユーザーの数（最低50件）が不足しています。
      - `INTERNAL_ERROR`：内部サーバーのエラーです。

      `jobs[].jobStatus`が`FAILED`以外の場合は`null`が返されます。
      :::::

      :::::parameter-table-entry
      #undefined
      jobs[].audienceCount

      #undefined
      Number

      追加または削除された送信対象アカウントの数
      :::::

      :::::parameter-table-entry
      #undefined
      jobs[].created

      #undefined
      Number

      ジョブが作成された時刻。UNIX時間（秒）で返されます。
      :::::

      :::::parameter-table-entry
      #undefined
      jobs[].jobStatus

      #undefined
      String

      ジョブのステータス。以下のいずれかの値です。

      - `QUEUED`：待機中
      - `WORKING`：実行中
      - `FINISHED`：成功
      - `FAILED`：失敗

      `QUEUED`または`WORKING`のジョブは、ユーザーIDまたはIFAの追加処理が完了していません。追加した送信対象アカウントを含むユーザーにメッセージを送信したい場合は、該当するジョブの`jobs[].jobStatus`が`FINISHED`であることを確認してください。
      :::::

      :::::parameter-table-entry
      #undefined
      owner.serviceType

      #undefined
      String

      オーディエンスを作成したサービス名称。以下のいずれかの値を返します。

      - `bm`：ビジネスマネージャー
      - `lap`：LINE広告
      - `account`：LINE公式アカウント
      - `yda`：LINEヤフー広告
      :::::

      :::::parameter-table-entry
      #undefined
      owner.id

      #undefined
      String

      オーディエンスを作成したアカウントのID。
      :::::

      :::::parameter-table-entry
      #undefined
      owner.name

      #undefined
      String

      オーディエンスを作成したアカウントの名前。
      :::::
    ::::
  :::

  :::reference-code
  *レスポンスの例*

    ::::code-tabs
      :::::tab{lang="json"}
      ```json
      // ウェブトラフィックオーディエンスの例
      {
        "audienceGroup": {
          "audienceGroupId": 1234567890123,
          "createRoute": "BUSINESS_MANAGER",
          "type": "WEBTRAFFIC",
          "description": "Web traffic audience",
          "status": "READY",
          "audienceCount": 0,
          "created": 1668179144,
          "permission": "READ",
          "isIfaAudience": true,
          "webtraffic": {
            "webtrafficIsMyTag": false,
            "webtrafficBmTagSharingStatus": "SHARED",
            "webtrafficIsTagDeleted": false,
            "webtrafficTagCreateRoute": "OA_MANAGER",
            "webtrafficVisitType": "VISIT_ALL",
            "webtrafficRetentionDays": 30,
            "webtrafficTagId": "01234567-8901-2345-6789-012345678901",
            "webtrafficConditionGroup": [],
            "webtrafficTagOwnerName": "LINE Developers (@linedevelopers)"
          }
        },
        "jobs": [],
        "owner": {
          "serviceType": "bm",
          "id": "0123456789ABCDEFGHIJKLMNOP",
          "name": "LINE Developers"
        }
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
      - `BUSINESS_MANAGER`：[ビジネスマネージャー](https://www.lycbiz.com/jp/service/business-manager/){rel="[\"nofollow\"]"}で作成したオーディエンス
      :::::

      :::::parameter-table-entry
      #undefined
      webtrafficVisitType

      #undefined
      String

      LINE Tagまたは計測タグのマッチング方法。以下のいずれかの値です。

      - `VISIT_ALL`：すべての訪問ユーザー
      - `URL_MATCHING`：URL条件
      - `EVENT_MATCHING`：イベント指定
      :::::

      :::::parameter-table-entry
      #undefined
      webtrafficRetentionDays

      #undefined
      String

      ウェブトラフィックオーディエンスの保有期間
      :::::

      :::::parameter-table-entry{annotation="含まれないことがあります"}
      #undefined
      webtrafficTagEventType

      #undefined
      String

      イベントコードの種類。`webtrafficVisitType`が`EVENT_MATCHING`の場合にのみ含まれます。以下のいずれかの値です。

      - `CONVERSION_EVENT`：コンバージョンコード
      - `CUSTOM_EVENT`：カスタムイベントコード
      :::::

      :::::parameter-table-entry{annotation="含まれないことがあります"}
      #undefined
      webtrafficCustomEventName

      #undefined
      String

      カスタムイベント名。`webtrafficVisitType`が`EVENT_MATCHING`かつ`webtrafficTagEventType`が`CUSTOM_EVENT`の場合にのみ含まれます。
      :::::

      :::::parameter-table-entry{annotation="含まれないことがあります"}
      #undefined
      webtrafficMatchingType

      #undefined
      String

      LINE Tagまたは計測タグのイベント判定方法。`webtrafficVisitType`が`EVENT_MATCHING`または`URL_MATCHING`の場合にのみ含まれます。値は常に`NORMAL`です。
      :::::

      :::::parameter-table-entry
      #undefined
      webtrafficConditionGroup

      #undefined
      Array

      マッチング条件を表す配列。
      :::::

      :::::parameter-table-entry
      #undefined
      webtrafficConditionGroup[].conditionType

      #undefined
      String

      `keywords`配列に含まれるキーワードとのマッチング条件。以下のいずれかの値です。

      - `CONTAIN`：キーワードを含む
      - `NOT_CONTAIN`：キーワードを含まない
      - `EQUAL_TO`：キーワードと一致する
      :::::

      :::::parameter-table-entry
      #undefined
      webtrafficConditionGroup[].keywords[]

      #undefined
      Array of strings

      マッチング条件に使用されるキーワードの配列。
      :::::

      :::::parameter-table-entry
      #undefined
      webtrafficTagId

      #undefined
      String

      LINE Tagまたは計測タグのタグID。
      :::::

      :::::parameter-table-entry{annotation="含まれないことがあります"}
      #undefined
      webtrafficTagOwnerName

      #undefined
      String

      LINE Tagを発行したアカウントの名前。ウェブトラフィックオーディエンスでLINE Tagが使用されている場合にのみ含まれます。
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
        "webtrafficBmTagSharingStatus": "SHARED",
        "webtrafficIsTagDeleted": false,
        "webtrafficTagCreateRoute": "OA_MANAGER",
        "webtrafficVisitType": "VISIT_ALL",
        "webtrafficRetentionDays": 30,
        "webtrafficTagId": "01234567-8901-2345-6789-012345678901",
        "webtrafficConditionGroup": [],
        "webtrafficTagOwnerName": "LINE Developers (@linedevelopers)"
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

  | コード   | 説明                     |
  | ----- | ---------------------- |
  | `400` | 存在しないオーディエンスが指定されています。 |

  詳しくは、[共通仕様](#common-specifications)の「[ステータスコード](#status-codes)」および「[エラーレスポンス](#error-responses)」を参照してください。
  :::

  :::reference-code
  *エラーレスポンスの例*

    ::::code-tabs
      :::::tab{lang="json"}
      ```json
      // 存在しないオーディエンスを指定した場合（400 Bad Request）
      {
        "message": "audience group not found",
        "details": [
          {
            "message": "AUDIENCE_GROUP_NOT_FOUND"
          }
        ]
      }
      ```
      :::::
    ::::
  :::
::
