---
title: Webhook Postback
navigation: true
description: ''
meta: '{}'
path: /ja/_partials/messaging-api/webhook-postback
__hash__: aOxUEBOvfj24n-XzPjsTm2PhmySWz16qjVCcLJGGPzI
seo:
  description: ''
---

### ポストバックイベント

::reference-with-code
  :::reference-content
  ユーザーが、[ポストバックアクション](#postback-action)を実行したことを示すイベントオブジェクトです。ポストバックイベントには応答できます。

    ::::parameter-table
      :::::parameter-table-entry
      #undefined
      timestamp、sourceなど

      「[共通プロパティ](#common-properties)」を参照してください。
      :::::

      :::::parameter-table-entry
      #undefined
      type

      #undefined
      String

      `postback`
      :::::

      :::::parameter-table-entry
      #undefined
      replyToken

      #undefined
      String

      このイベントに対して[応答メッセージを送る](#send-reply-message)際に使用する応答トークン
      :::::

      :::::parameter-table-entry
      #undefined
      postback.data

      #undefined
      String

      ポストバックデータ
      :::::

      :::::parameter-table-entry
      #undefined
      [postback.params](#postback-params-object)

      #undefined
      Object

      以下のいずれかのJSONオブジェクト

      - [日時選択アクションの`postback.params`オブジェクト](#postback-params-object)。

        - [日時選択アクション](#datetime-picker-action)を介してユーザーが選択した日時を含むJSONオブジェクト。
        - [日時選択アクション](#datetime-picker-action)によるポストバックアクションの場合にのみ返されます。
      - [リッチメニュー切替アクションの`postback.params`オブジェクト](#postback-params-object-for-richmenu-switch-action)。

        - [リッチメニュー切替アクション](#richmenu-switch-action)を介してユーザーが選択したリッチメニューエイリアスIDを含むJSONオブジェクト。
        - [リッチメニュー切替アクション](#richmenu-switch-action)によるポストバックアクションの場合にのみ返されます。
      :::::
    ::::
  :::

  :::reference-code
  *ポストバックイベントの例*

    ::::code-tabs
      :::::tab{lang="json"}
      ```json
      // 日時選択アクションのポストバックイベントの場合
      {
          "destination": "xxxxxxxxxx",
          "events": [
              {
                  "replyToken": "b60d432864f44d079f6d8efe86cf404b",
                  "type": "postback",
                  "mode": "active",
                  "source": {
                      "userId": "U91eeaf62d...",
                      "type": "user"
                  },
                  "timestamp": 1513669370317,
                  "webhookEventId": "01FZ74A0TDDPYRVKNK77XKC3ZR",
                  "deliveryContext": {
                      "isRedelivery": false
                  },
                  "postback": {
                      "data": "storeId=12345",
                      "params": {
                          "datetime": "2017-12-25T01:00"
                      }
                  }
              }
          ]
      }

      // リッチメニュー切替アクションのポストバックイベントの場合
      {
          "destination": "xxxxxxxxxx",
          "events": [
              {
                  "replyToken": "b60d432864f44d079f6d8efe86cf404b",
                  "type": "postback",
                  "mode": "active",
                  "source": {
                      "userId": "U91eeaf62d...",
                      "type": "user"
                  },
                  "timestamp": 1619754620404,
                  "webhookEventId": "01FZ74A0TDDPYRVKNK77XKC3ZR",
                  "deliveryContext": {
                      "isRedelivery": false
                  },
                  "postback": {
                      "data": "richmenu-changed-to-b",
                      "params": {
                          "newRichMenuAliasId": "richmenu-alias-b",
                          "status": "SUCCESS"
                      }
                  }
              }
          ]
      }
      ```
      :::::
    ::::
  :::
::

#### 日時選択アクションの`postback.params`オブジェクト

::reference-with-code
  :::reference-content
  [日時選択アクション](#datetime-picker-action)を介してユーザーが選択した日時を含むオブジェクトです。`full-date`、`time-hour`、および`time-minute`の形式は、[RFC3339プロトコル](https://www.rfc-editor.org/rfc/rfc3339.txt){rel="[\"nofollow\"]"}で定義されています。

  | プロパティ    | 形式                                      | 説明                                       |
  | -------- | --------------------------------------- | ---------------------------------------- |
  | date     | full-date                               | ユーザーが選択した日付。`date`モードの場合にのみ含まれます。        |
  | time     | time-hour ":" time-minute               | ユーザーが選択した時刻。`time`モードの場合にのみ含まれます。        |
  | datetime | full-date "T" time-hour ":" time-minute | ユーザーが選択した日付と時刻。`datetime`モードの場合にのみ含まれます。 |
  :::

  :::reference-code
  *日時選択アクションのpostback.paramsオブジェクトの例*

    ::::code-tabs
      :::::tab{lang="json"}
      ```json
      {
        "datetime": "2017-12-25T01:00"
      }
      ```
      :::::
    ::::
  :::
::

#### リッチメニュー切替アクションの`postback.params`オブジェクト

::reference-with-code
  :::reference-content
  [リッチメニュー切替アクション](#richmenu-switch-action)を介してユーザーが選択したリッチメニューエイリアスIDを含むオブジェクトです。

  | プロパティ                                                                             | 形式     | 説明                                                                                                                                                                                            |
  | --------------------------------------------------------------------------------- | ------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
  | newRichMenuAliasId :div[含まれないことがあります]{className="[\"parameter-label\",\"gray\"]"} | String | 切替先のリッチメニューエイリアスID。リッチメニューの切替に失敗した場合は含まれません。                                                                                                                                                  |
  | status                                                                            | String | `SUCCESS`：リッチメニューが正常に変更されました。   `RICHMENU_ALIAS_ID_NOTFOUND`：指定されたリッチメニューエイリアスIDが見つかりませんでした。   `RICHMENU_NOTFOUND`：指定されたリッチメニューエイリアスIDに紐づくリッチメニューIDが見つかりませんでした。   `FAILED`：リッチメニューの切替に失敗しました。 |
  :::

  :::reference-code
  *リッチメニュー切替アクションのpostback.paramsオブジェクトの例*

    ::::code-tabs
      :::::tab{lang="json"}
      ```json
      {
        "newRichMenuAliasId": "richmenu-alias-b",
        "status": "SUCCESS"
      }
      ```
      :::::
    ::::
  :::
::
