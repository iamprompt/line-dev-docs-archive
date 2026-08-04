---
title: Get Insight Message Delivery
navigation: true
description: ''
meta: '{}'
path: /ja/_partials/messaging-api/get-insight-message-delivery
__hash__: nlVt4FEjUJAhvkolYAe-kFpyJLveweBRC-5pN_9g2Qs
seo:
  description: ''
---

### メッセージの送信数を取得する

:api-endpoint{protocol="get" endpoint="https://api.line.me/v2/bot/insight/message/delivery?date={date}"}::reference-with-code
  :::reference-content
  `date`に指定した日に、LINE公式アカウントから送信したメッセージの数を確認できます。
  :::

  :::reference-code
  *リクエストの例*

    ::::code-tabs
      :::::tab{lang="shell"}
      ```sh
      curl -v -X GET 'https://api.line.me/v2/bot/insight/message/delivery?date=20190418' \
      -H 'Authorization: Bearer {channel access token}'
      ```
      :::::
    ::::
  :::
::

#### レート制限

60リクエスト/時

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
  date

  メッセージの送信数を確認する日付

  - フォーマット：`yyyyMMdd`（例：`20191231`）
  - タイムゾーン：UTC+9
  :::
::

#### レスポンス

::reference-with-code
  :::reference-content
  ステータスコード`200`と以下の情報を含むJSONオブジェクトを返します。

    ::::parameter-table
      :::::parameter-table-entry
      #undefined
      status

      #undefined
      String

      集計処理の状態。以下のいずれかの値です。

      - `ready`：メッセージ数を取得できます。
      - `unready`：`date`に指定した日付のメッセージ数の集計がまだ完了していません。しばらくしてからリクエストを再実行してください。通常、集計処理は翌日中に完了します。
      - `out_of_service`：`date`に指定した日付が、集計システムの稼働開始日（2017年3月1日）より前です。

      `broadcast`以降のプロパティは、`status`プロパティの値が`ready`の場合にのみレスポンスに含まれます。
      :::::

      :::::parameter-table-entry{annotation="含まれないことがあります"}
      #undefined
      broadcast

      #undefined
      Number

      LINE Official Account Managerで配信先を［**すべての友だち**］にして送信したメッセージの数。
      :::::

      :::::parameter-table-entry{annotation="含まれないことがあります"}
      #undefined
      targeting

      #undefined
      Number

      LINE Official Account Managerで配信先を［**絞り込み**］にして送信したメッセージの数。
      :::::

      :::::parameter-table-entry{annotation="含まれないことがあります"}
      #undefined
      stepMessage

      #undefined
      Number

      LINE Official Account Managerでステップ配信を使って送信されたメッセージの数。

      詳しくは、『LINEヤフー for Business』の「[ステップ配信](https://www.lycbiz.com/jp/manual/OfficialAccountManager/step-message/){rel="[\"nofollow\"]"}」を参照してください。
      :::::

      :::::parameter-table-entry{annotation="含まれないことがあります"}
      #undefined
      autoResponse

      #undefined
      Number

      ユーザーからメッセージを受信した際に、自動的に送信された応答メッセージの数。

      詳しくは、『LINEヤフー for Business』の「[応答メッセージ](https://www.lycbiz.com/jp/manual/OfficialAccountManager/Auto-response-messages/){rel="[\"nofollow\"]"}」を参照してください。
      :::::

      :::::parameter-table-entry{annotation="含まれないことがあります"}
      #undefined
      welcomeResponse

      #undefined
      Number

      ユーザーがLINE公式アカウントを友だち追加した際に、自動的に送信されたあいさつメッセージの数。

      詳しくは、『LINEヤフー for Business』の「[あいさつメッセージを設定する](https://www.lycbiz.com/jp/manual/OfficialAccountManager/greeting-message/){rel="[\"nofollow\"]"}」を参照してください。
      :::::

      :::::parameter-table-entry{annotation="含まれないことがあります"}
      #undefined
      chat

      #undefined
      Number

      LINE Official Account Managerの「[チャット基本画面](https://www.lycbiz.com/jp/manual/OfficialAccountManager/chats/){rel="[\"nofollow\"]"}」から送信されたメッセージの数。
      :::::

      :::::parameter-table-entry{annotation="含まれないことがあります"}
      #undefined
      apiBroadcast

      #undefined
      Number

      「[ブロードキャストメッセージを送る](#send-broadcast-message)」エンドポイントを使って送信されたメッセージの数。
      :::::

      :::::parameter-table-entry{annotation="含まれないことがあります"}
      #undefined
      apiPush

      #undefined
      Number

      「[プッシュメッセージを送る](#send-push-message)」エンドポイントを使って送信されたメッセージの数。
      :::::

      :::::parameter-table-entry{annotation="含まれないことがあります"}
      #undefined
      apiMulticast

      #undefined
      Number

      「[マルチキャストメッセージを送る](#send-multicast-message)」エンドポイントを使って送信されたメッセージの数。
      :::::

      :::::parameter-table-entry{annotation="含まれないことがあります"}
      #undefined
      apiNarrowcast

      #undefined
      Number

      「[ナローキャストメッセージを送る](#send-narrowcast-message)」エンドポイントを使って送信されたメッセージの数。
      :::::

      :::::parameter-table-entry{annotation="含まれないことがあります"}
      #undefined
      apiReply

      #undefined
      Number

      「[応答メッセージを送る](#send-reply-message)」エンドポイントを使って送信されたメッセージの数。
      :::::

      :::::parameter-table-entry{annotation="含まれないことがあります"}
      #undefined
      ccAutoReply

      #undefined
      Number

      LINEチャットPlusの自動応答で送信されたメッセージの数。
      :::::

      :::::parameter-table-entry{annotation="含まれないことがあります"}
      #undefined
      ccManualReply

      #undefined
      Number

      LINEチャットPlusの有人でのチャット対応で送信されたメッセージの数。
      :::::

      :::::parameter-table-entry{annotation="含まれないことがあります"}
      #undefined
      pnpNoticeMessage

      #undefined
      Number

      法人ユーザー向けオプションの「[LINE通知メッセージ](/docs/partner-docs/line-notification-messages/overview/)」を使って送信されたメッセージの数。
      :::::

      :::::parameter-table-entry{annotation="含まれないことがあります"}
      #undefined
      pnpCallToLine

      #undefined
      Number

      Call to LINE（※）で送信されたメッセージの数。

      ※ Call to LINEの新規利用受付は終了しています。
      :::::

      :::::parameter-table-entry{annotation="含まれないことがあります"}
      #undefined
      thirdPartyChatTool

      #undefined
      Number

      外部チャットツールから送信されたメッセージの数。
      :::::
    ::::
  :::

  :::reference-code
  *レスポンスの例*

    ::::code-tabs
      :::::tab{lang="json"}
      ```json
      // 集計が完了していた場合
      {
        "status": "ready",
        "broadcast": 5385,
        "targeting": 522
      }

      // まだ集計が完了していなかった場合
      {
        "status": "unready"
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

  | コード   | 説明              |
  | ----- | --------------- |
  | `400` | 無効な日付が指定されています。 |

  詳しくは、[共通仕様](#common-specifications)の「[ステータスコード](#status-codes)」および「[エラーレスポンス](#error-responses)」を参照してください。
  :::

  :::reference-code
  *エラーレスポンスの例*

    ::::code-tabs
      :::::tab{lang="json"}
      ```json
      // 無効な日付を指定した場合（400 Bad Request）
      {
        "message": "Bad Request"
      }
      ```
      :::::
    ::::
  :::
::
