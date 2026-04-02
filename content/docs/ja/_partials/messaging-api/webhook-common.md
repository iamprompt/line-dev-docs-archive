---
title: Webhook Common
navigation: true
description: ''
meta: '{}'
path: /ja/_partials/messaging-api/webhook-common
__hash__: PNdTnBqYAm_EbICOaiAK1-lBTwNpGPPzEJEEr-MXGBk
seo:
  description: ''
---

### 共通プロパティ

以下のプロパティはWebhookイベントオブジェクトの共通プロパティです。

::parameter-table
  :::parameter-table-entry
  #undefined
  type

  #undefined
  String

  イベントのタイプを表す識別子
  :::

  :::parameter-table-entry
  #undefined
  mode

  #undefined
  String

  チャネルの状態。

  - `active`：チャネルがアクティブです。このWebhookイベントを受信したボットサーバーから、応答メッセージやプッシュメッセージなどを送信できます。
  - `standby`：チャネルが待機状態です。チャネルの状態が`standby`のときは、Webhookに[応答メッセージを送る](#send-reply-message)ための応答トークンは含まれません。チャネルの状態が`standby`になるタイミングについて詳しくは、『モジュールドキュメント』の「[Webhookイベントの受信](/docs/partner-docs/module/#bot-module-channel-receive-webhook)」を参照してください。

    ::::admonition{title="チャネルの状態がstandbyのときは、メッセージの送信を控えてください" type="note"}
    チャネルの状態が`standby`のときは、受信したWebhookイベントに対して[モジュール](/docs/partner-docs/module/)がメッセージなどで応答している可能性があります。ユーザーとモジュールがやりとりをしている最中に、ボットからもメッセージが送信されるとユーザーの混乱を招きます。そのため、`mode`プロパティが`standby`のWebhookイベントを受信したボットサーバーはメッセージの送信を控えてください。
    ::::
  :::

  :::parameter-table-entry
  #undefined
  timestamp

  #undefined
  Number

  イベントの発生時刻。UNIX時間（ミリ秒）で返されます。再送されたWebhookの場合でも、再送された時刻ではなく、イベントの発生時刻を表します。

    ::::admonition{title="Webhookの再送が有効な場合はtimestampを確認してください" type="note"}
    [Webhookの再送](/docs/messaging-api/receiving-messages/#webhook-redelivery)が有効である場合、Webhookイベントの発生順序と、ボットサーバーに到達する順序が大きく崩れる可能性があります。これが問題になる場合は、`timestamp`を確認することによって、前後関係を確認してください。
    ::::
  :::

  :::parameter-table-entry{annotation="含まれないことがあります"}
  #undefined
  source

  #undefined
  Object

  イベントの送信元情報を含む[ユーザー](#source-user)、[グループトーク](#source-group)、または[複数人トーク](#source-room)オブジェクト。

  このプロパティは、アカウントの連携に失敗した場合、[アカウント連携イベント](#account-link-event)には含まれません。
  :::

  :::parameter-table-entry
  #undefined
  webhookEventId

  #undefined
  String

  WebhookイベントID。Webhookイベントを一意に識別するためのID。ULID形式の文字列になります。
  :::

  :::parameter-table-entry
  #undefined
  deliveryContext.isRedelivery

  #undefined
  Boolean

  Webhookイベントが再送されたものかどうか。詳しくは、「[再送されるWebhook](/docs/messaging-api/receiving-messages/#redelivered-webhooks)」を参照してください。

  - `true`：再送されたWebhookイベントです。
  - `false`：初めて送られたWebhookイベントです。
  :::
::

#### 送信元ユーザー

::reference-with-code
  :::reference-content
    ::::parameter-table
      :::::parameter-table-entry
      #undefined
      type

      #undefined
      String

      `user`
      :::::

      :::::parameter-table-entry
      #undefined
      userId

      #undefined
      String

      送信元ユーザーのID
      :::::
    ::::
  :::

  :::reference-code
  *送信元ユーザーの例*

    ::::code-tabs
      :::::tab{lang="json"}
      ```json
      "source": {
          "type": "user",
          "userId": "U4af4980629..."
        }
      ```
      :::::
    ::::
  :::
::

#### 送信元グループトーク

::reference-with-code
  :::reference-content
    ::::parameter-table
      :::::parameter-table-entry
      #undefined
      type

      #undefined
      String

      `group`
      :::::

      :::::parameter-table-entry
      #undefined
      groupId

      #undefined
      String

      送信元グループトークのグループID
      :::::

      :::::parameter-table-entry{annotation="含まれないことがあります"}
      #undefined
      userId

      #undefined
      String

      送信元ユーザーのID。[メッセージイベント](#message-event)にのみ含まれます。iOS版LINEまたはAndroid版LINEを使用しているユーザーのみ`userId`に含まれます。詳しくは、「[ユーザーのプロフィール情報取得の同意](/docs/messaging-api/user-consent/)」を参照してください。
      :::::
    ::::
  :::

  :::reference-code
  *送信元グループトークの例*

    ::::code-tabs
      :::::tab{lang="json"}
      ```json
      "source": {
          "type": "group",
          "groupId": "Ca56f94637c...",
          "userId": "U4af4980629..."
        }
      ```
      :::::
    ::::
  :::
::

#### 送信元複数人トーク

::reference-with-code
  :::reference-content
    ::::parameter-table
      :::::parameter-table-entry
      #undefined
      type

      #undefined
      String

      `room`
      :::::

      :::::parameter-table-entry
      #undefined
      roomId

      #undefined
      String

      送信元複数人トークのトークルームID
      :::::

      :::::parameter-table-entry{annotation="含まれないことがあります"}
      #undefined
      userId

      #undefined
      String

      送信元ユーザーのID。[メッセージイベント](#message-event)にのみ含まれます。iOS版LINEまたはAndroid版LINEを使用しているユーザーのみ`userId`に含まれます。詳しくは、「[ユーザーのプロフィール情報取得の同意](/docs/messaging-api/user-consent/)」を参照してください。
      :::::
    ::::
  :::

  :::reference-code
  *送信元複数人トークの例*

    ::::code-tabs
      :::::tab{lang="json"}
      ```json
      "source": {
          "type": "room",
          "roomId": "Ra8dbf4673c...",
          "userId": "U4af4980629..."
        }
      ```
      :::::
    ::::
  :::
::
