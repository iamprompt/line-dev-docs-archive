---
title: Get Audience Group
navigation: true
description: ''
meta: '{}'
path: /ja/_partials/messaging-api/get-audience-group
__hash__: 0XE1GUmMDZTpFL24toGqMlO6T4o1-3zxiQC14OltJWw
seo:
  description: ''
---

### オーディエンスの情報を取得する

:api-endpoint{protocol="get" endpoint="https://api.line.me/v2/bot/audienceGroup/{audienceGroupId}"}::reference-with-code
  :::reference-content
  オーディエンスの情報を取得します。
  :::

  :::reference-code
  *リクエストの例*

    ::::code-tabs
      :::::tab{lang="shell"}
      ```sh
      curl -v -X GET https://api.line.me/v2/bot/audienceGroup/{audienceGroupId} \
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

  オーディエンスID
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
      - `READY`：配信に利用可能。
      - `FAILED`：作成時にエラーが発生。
      - `EXPIRED`：有効期限切れ。有効期限切れ後、1か月後に自動で削除されます。
      - `INACTIVE`：オーディエンスが無効です。
      - `ACTIVATING`：オーディエンスを有効化しています。
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
      :::::

      :::::parameter-table-entry{annotation="含まれないことがあります"}
      #undefined
      adaccount

      #undefined
      Object

      広告アカウントオブジェクト。[LINE広告](https://admanager.line.biz/){rel="[\"nofollow\"]"}や[LINEポイントAD](https://www.lycbiz.com/jp/service/line-point-ad/){rel="[\"nofollow\"]"}で作成したオーディエンスの場合のみ含まれます。
      :::::

      :::::parameter-table-entry
      #undefined
      adaccount[].name

      #undefined
      String

      オーディエンスグループを作成した広告アカウント名
      :::::
    ::::
  :::

  :::reference-code
  *レスポンスの例*

    ::::code-tabs
      :::::tab{lang="json"}
      ```json
      // ユーザーIDアップロード用のオーディエンスの例
      {
          "audienceGroup": {
              "audienceGroupId": 1234567890123,
              "createRoute": "OA_MANAGER",
              "type": "UPLOAD",
              "description": "audienceGroupName_01",
              "status": "READY",
              "audienceCount": 1887,
              "created": 1608617466,
              "permission": "READ",
              "isIfaAudience": false,
              "expireTimestamp": 1624342266
          },
          "jobs": [
              {
                  "audienceGroupJobId": 12345678,
                  "audienceGroupId": 1234567890123,
                  "description": "audience_list.txt",
                  "type": "DIFF_ADD",
                  "status": "FINISHED",
                  "failedType": null,
                  "audienceCount": 0,
                  "created": 1608617472,
                  "jobStatus": "FINISHED"
              }
          ]
      }

      // メッセージクリックオーディエンスの例
      {
          "audienceGroup": {
              "audienceGroupId": 1234567890987,
              "createRoute": "OA_MANAGER",
              "type": "CLICK",
              "description": "audienceGroupName_02",
              "status": "IN_PROGRESS",
              "audienceCount": 8619,
              "created": 1611114828,
              "permission": "READ",
              "isIfaAudience": false,
              "expireTimestamp": 1626753228,
              "requestId": "c10c3d86-f565-...",
              "clickUrl": "https://example.com/"
          },
          "jobs": []
      }

      // アプリイベント用のオーディエンスの例
      {
          "audienceGroup": {
              "audienceGroupId": 2345678909876,
              "createRoute": "AD_MANAGER",
              "type": "APP_EVENT",
              "description": "audienceGroupName_03",
              "status": "READY",
              "audienceCount": 8619,
              "created": 1608619802,
              "permission": "READ",
              "activated": 1610068515,
              "inactiveTimestamp": 1625620516,
              "isIfaAudience": false
          },
          "jobs": [],
          "adaccount": {
              "name": "Ad Account Name"
          }
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
