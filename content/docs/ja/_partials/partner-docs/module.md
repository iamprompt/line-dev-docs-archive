---
title: Module
navigation: true
description: ''
meta: '{}'
path: /ja/_partials/partner-docs/module
__hash__: OKadcmbvJ65TKCAzBvIRSpTtOSXfY5ew9RPJR-E0z2g
seo:
  description: ''
---

## モジュール

### モジュールチャネルの提供者の操作で連携（アタッチ）する

::reference-with-code
  :::reference-content
  モジュールチャネルをLINE公式アカウントにアタッチします。アタッチするためには、LINE公式アカウントの管理者に認可を要求し、認可コードを取得する必要があります。モジュールの認可フローについて詳しくは、『モジュールドキュメント』の「[モジュールチャネルを連携（アタッチ）する](/docs/partner-docs/module-technical-attach-channel/)」を参照してください。

  このAPIを利用する際には、`Authorization`ヘッダーもしくはリクエストボディのどちらかを使って、モジュールチャネルのチャネルIDとチャネルシークレットを指定する必要があります。
  :::

  :::reference-code
  *リクエストの例*

    ::::code-tabs
      :::::tab{lang="shell"}
      ```sh
      curl -v -X POST https://manager.line.biz/module/auth/v1/token \
      -H 'Content-Type: application/x-www-form-urlencoded' \
      -d 'grant_type=authorization_code' \
      -d 'code=1234567890abcde' \
      --data-urlencode 'redirect_uri=https://example.com/auth?key=value' \
      -d 'code_verifier=ayjtZgTunh96nHCvgLEiXzqVQOOC0SwMRs39bh1l5dx' \
      -d 'client_id=1234567890' \
      -d 'client_secret=1234567890abcdefghij1234567890ab' \
      -d 'region=JP' \
      -d 'basic_search_id=@linedevelopers' \
      -d 'scope=message%3Asend%20message%3Areceive' \
      -d 'brand_type=premium'
      ```
      :::::
    ::::
  :::
::

#### HTTPリクエスト

`POST https://manager.line.biz/module/auth/v1/token`

#### リクエストヘッダー

::parameter-table
  :::parameter-table-entry{required="true"}
  #undefined
  Content-Type

  `application/x-www-form-urlencoded`
  :::

  :::parameter-table-entry{optional=""}
  #undefined
  Authorization

  `Basic {base64({Channel ID}:{Channel Secret})}`

  `{base64({Channel ID}:{Channel Secret})}`には、「モジュールチャネルのチャネルID」と「モジュールチャネルのチャネルシークレット」を`:`で連結し、Base64でエンコードした文字列を指定してください。モジュールチャネルのチャネルIDとチャネルシークレットは、[LINE Developersコンソール](/console/)で確認できます。

  リクエストボディ内で`client_id`および`client_secret`を指定する代わりに、このヘッダを使ってモジュールチャネルのチャネルIDとチャネルシークレットを指定できます。
  :::
::

#### リクエストボディ

::parameter-table
  :::parameter-table-entry{required="true"}
  #undefined
  grant_type

  #undefined
  String

  `authorization_code`
  :::

  :::parameter-table-entry{required="true"}
  #undefined
  code

  #undefined
  String

  LINEプラットフォームから渡された[認可コード](/docs/partner-docs/module-technical-attach-channel/#receive-authorization-code)を指定します。
  :::

  :::parameter-table-entry{required="true"}
  #undefined
  redirect_uri

  #undefined
  String

  [認証と認可のためのURL](/docs/partner-docs/module-technical-attach-channel/#request-auth-from-line-oa-admin-query-parameters)で指定した`redirect_uri`を指定します。
  :::

  :::parameter-table-entry{optional=""}
  #undefined
  code_verifier

  #undefined
  String

  認可コード横取り攻撃への対策としてOAuth 2.0の拡張仕様で定義されるPKCE（Proof Key for Code Exchange）を利用した場合に指定します。

  [RFC 7636](https://datatracker.ietf.org/doc/html/rfc7636){rel="[\"nofollow\"]"}に準拠しています。
  :::

  :::parameter-table-entry{optional=""}
  #undefined
  client_id

  #undefined
  String

  `Authorization`ヘッダーを使用する代わりに、このパラメータを使ってモジュールチャネルのチャネルIDを指定できます。 モジュールチャネルのチャネルIDは、[LINE Developersコンソール](/console/)で確認できます。
  :::

  :::parameter-table-entry{optional=""}
  #undefined
  client_secret

  #undefined
  String

  `Authorization`ヘッダーを使用する代わりに、このパラメータを使ってモジュールチャネルのチャネルシークレットを指定できます。モジュールチャネルのチャネルシークレットは、[LINE Developersコンソール](/console/)で確認できます。
  :::

  :::parameter-table-entry{optional=""}
  #undefined
  region

  #undefined
  String

  [認証と認可のためのURL](/docs/partner-docs/module-technical-attach-channel/#request-auth-from-line-oa-admin-query-parameters)で`region`に値を指定した場合、同じ値を指定してください。
  :::

  :::parameter-table-entry{optional=""}
  #undefined
  basic_search_id

  #undefined
  String

  認証と認可のためのURLで`basic_search_id`に値を指定した場合、同じ値を指定してください。
  :::

  :::parameter-table-entry{optional=""}
  #undefined
  scope

  #undefined
  String

  認証と認可のためのURLで`scope`に値を指定した場合、同じ値を指定してください。
  :::

  :::parameter-table-entry{optional=""}
  #undefined
  brand_type

  #undefined
  String

  認証と認可のためのURLで`brand_type`に値を指定した場合、同じ値を指定してください。
  :::
::

#### レスポンス

::reference-with-code
  :::reference-content
  成功時は、ステータスコード`200`と以下の情報を含むJSONオブジェクトを返します。

    ::::parameter-table
      :::::parameter-table-entry
      #undefined
      bot_id

      #undefined
      String

      LINE公式アカウントのボットのユーザーID。

      ボットのユーザーIDは、[Messaging API](/reference/messaging-api/)や[Acquire Control API](/reference/partner-docs/#acquire-control-api)を呼び出す際に利用します。

        ::::::admonition{title="注意" type="note"}
        ボットのユーザーIDは、[LINE Developersコンソール](/console/)で、Messaging APIチャネルの［**チャネル基本設定**］タブに表示される［**あなたのユーザーID**］ではありません。
        ::::::
      :::::

      :::::parameter-table-entry
      #undefined
      scope

      #undefined
      String

      LINE公式アカウントの管理者によって許可された権限（スコープ）。
      :::::
    ::::
  :::

  :::reference-code
  *レスポンスの例*

    ::::code-tabs
      :::::tab{lang="json"}
      ```json
      {
        "bot_id": "U45c5c51f0050ef0f0ee7261d57fd3c56",
        "scopes": [
          "message:send",
          "message:receive"
        ]
      }
      ```
      :::::
    ::::
  :::
::

#### エラーレスポンス

以下のHTTPステータスコードを返します。

- `400 Bad Request`
- `403 Forbidden`

### モジュールチャネルの管理者の操作でモジュールチャネルを連携解除（デタッチ）する

::reference-with-code
  :::reference-content
  LINE公式アカウントからモジュールチャネルをデタッチします。
  :::

  :::reference-code
  *リクエストの例*

    ::::code-tabs
      :::::tab{lang="shell"}
      ```sh
      curl -v -X POST https://api.line.me/v2/bot/channel/detach \
      -H 'Content-Type:application/json' \
      -H 'Authorization: Bearer {channel access token}' \
      -d '{"botId":"U45c5c51f0050ef0f0ee7261d57fd3c56"}'
      ```
      :::::
    ::::
  :::
::

#### HTTPリクエスト

`POST https://api.line.me/v2/bot/channel/detach`

#### レート制限

2,000リクエスト/秒

#### リクエストヘッダー

::parameter-table
  :::parameter-table-entry{required="true"}
  #undefined
  Content-Type

  `application/json`
  :::

  :::parameter-table-entry{required="true"}
  #undefined
  Authorization

  `Bearer {channel access token}`

  `{channel access token}`には、モジュールチャネルのチャネルアクセストークンを指定してください。
  :::
::

#### リクエストボディ

::parameter-table
  :::parameter-table-entry{required="true"}
  #undefined
  botId

  #undefined
  String

  モジュールチャネルにアタッチされたLINE公式アカウントのボットのユーザーID。

  ボットのユーザーIDは、「[モジュールチャネルの提供者の操作で連携（アタッチ）する](#link-attach-by-operation-module-channel-provider)」のレスポンスや[Attachedイベント](#attached-event)で取得できます。
  :::
::

#### レスポンス

成功時は、ステータスコード`200`を返します。

#### エラーレスポンス

::reference-with-code
  :::reference-content
  以下のHTTPステータスコードと、エラーレスポンスを返します。

  | コード   | 説明                                                                                                                                                             |
  | ----- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
  | `400` | モジュールチャネルを連携解除（デタッチ）できませんでした。次のような理由が考えられます。- 無効なボットのユーザーIDが指定されている。 - 存在しないボットが指定されている。 - モジュールチャネルが連携（アタッチ）されていない。 - モジュールチャネルではないチャネルのチャネルアクセストークンが指定されている。 |

  詳しくは、『Messaging APIリファレンス』の「[ステータスコード](/reference/messaging-api/#status-codes)」および「[エラーレスポンス](/reference/messaging-api/#error-responses)」を参照してください。
  :::

  :::reference-code
  *エラーレスポンスの例*

    ::::code-tabs
      :::::tab{lang="json"}
      ```json
      // 無効なボットのユーザーIDを指定した場合（400 Bad Request）
      {
        "message": "user/group/room Id is not available."
      }

      // モジュールチャネルが連携（アタッチ）されていない場合（400 Bad Request）
      {
        "message": "Specified channel is not detachable"
      }
      ```
      :::::
    ::::
  :::
::

### Acquire Control API

::reference-with-code
  :::reference-content
  Standby Channelが主導権（Chat Control）を取得する場合は、Acquire Control APIを呼び出します。

  それまでActive Channelだったチャネルは、自動的にStandby Channelに切り替わります。

    ::::admonition{title="警告" type="warning"}
    現在提供しているモジュールの仕組みにおいては、本APIを呼び出す必要はありません。そのため本APIの実装は任意となります。

    本APIは現状、想定外の問題等によりチャットの主導権が切り替わった際にのみ利用します。
    ::::
  :::

  :::reference-code
  *リクエストの例*

    ::::code-tabs
      :::::tab{lang="shell"}
      ```sh
      curl -v -X POST https://api.line.me/v2/bot/chat/{chatId}/control/acquire \
      -H 'Content-Type:application/json' \
      -H 'Authorization: Bearer {channel access token}' \
      -H 'ボットのユーザーIDを指定するヘッダー:xxxxxx' \
      -d '{"expired":true,"ttl":3600}'
      ```
      :::::
    ::::
  :::
::

#### HTTPリクエスト

`POST https://api.line.me/v2/bot/chat/{chatId}/control/acquire`

#### レート制限

2,000リクエスト/秒

#### リクエストヘッダー

::parameter-table
  :::parameter-table-entry{required="true"}
  #undefined
  Content-Type

  `application/json`
  :::

  :::parameter-table-entry{required="true"}
  #undefined
  Authorization

  `Bearer {channel access token}`

  `{channel access token}`には、モジュールチャネルのチャネルアクセストークンを指定してください。
  :::

  :::parameter-table-entry{required="true"}
  #undefined
  ボットのユーザーIDを指定するヘッダー

  モジュールチャネルにアタッチされたLINE公式アカウントのボットのユーザーID。

  ボットのユーザーIDは、「[モジュールチャネルの提供者の操作で連携（アタッチ）する](#link-attach-by-operation-module-channel-provider)」のレスポンスや[Attachedイベント](#attached-event)で取得できます。

    ::::admonition{title="ヘッダーの詳細については参画される際に別途提供いたします" type="note"}
    本ヘッダーの名前（パラメーター名）は、実際に[LINEマーケットプレイス](https://line-marketplace.com/jp/inquiry){rel="[\"nofollow\"]"}に参画するお客様に限定して公開しています。
    ::::
  :::
::

#### パスパラメータ

::parameter-table
  :::parameter-table-entry{required="true"}
  #undefined
  chatId

  `userId`、`roomId`、または`groupId`
  :::
::

#### リクエストボディ

::parameter-table
  :::parameter-table-entry{optional=""}
  #undefined
  expired

  #undefined
  Boolean

  - `True`：制限時間（ttl）を経過すると、主導権（Chat Control）がPrimary Channelに戻ります。（デフォルト）
  - `False`：制限時間がなく、主導権（Chat Control）は時間経過では変わりません。
  :::

  :::parameter-table-entry{optional=""}
  #undefined
  ttl

  #undefined
  Number

  主導権（Chat Control）がPrimary Channelに戻るまでの時間（モジュールチャネルがActive Channelでいられる時間）。秒で指定します。最大値は1年間（3600 * 24 * 365）。デフォルト値は`3600`（1時間）です。

  ※`expired`の値が`false`の場合は、無視されます。
  :::
::

#### レスポンス

成功時は、ステータスコード`200`を返します。

#### エラーレスポンス

::reference-with-code
  :::reference-content
  以下のHTTPステータスコードと、エラーレスポンスを返します。

  | コード   | 説明                                                                                                                                                                                            |
  | ----- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
  | `400` | `chatId`パラメータに、不正なIDが指定されています。                                                                                                                                                                |
  | `404` | 主導権（Chat Control）を取得できませんでした。次のような理由が考えられます。- モジュールと連携しているLINE公式アカウントを友だち追加していないユーザーが指定されている。 - モジュールと連携しているLINE公式アカウントが参加していないグループが指定されている。 - モジュールと連携しているLINE公式アカウントが参加していない複数人トークが指定されている。 |
  | `423` | 別のチャネルが、一定期間内（数秒程度）に主導権（Chat Control）を取得していた場合。                                                                                                                                               |

  詳しくは、『Messaging APIリファレンス』の「[ステータスコード](/reference/messaging-api/#status-codes)」および「[エラーレスポンス](/reference/messaging-api/#error-responses)」を参照してください。
  :::

  :::reference-code
  *エラーレスポンスの例*

    ::::code-tabs
      :::::tab{lang="json"}
      ```json
      // chatIdパラメータに不正なIDを指定した場合（400 Bad Request）
      {
        "message": "The value for the 'chatId' parameter is invalid"
      }
      ```
      :::::
    ::::
  :::
::

### Release Control API

::reference-with-code
  :::reference-content
  Active Channelが持っている主導権（Chat Control）を、Primary Channelに返却する場合は、Release Control APIを呼び出します。

    ::::admonition{title="警告" type="warning"}
    現在提供しているモジュールの仕組みにおいては、本APIを呼び出す必要はありません。そのため本APIの実装は任意となります。

    本APIは現状、想定外の問題等によりチャットの主導権が切り替わった際にのみ利用します。
    ::::
  :::

  :::reference-code
  *リクエストの例*

    ::::code-tabs
      :::::tab{lang="shell"}
      ```sh
      curl -v -X POST https://api.line.me/v2/bot/chat/{chatId}/control/release \
      -H 'Content-Type:application/json' \
      -H 'Authorization: Bearer {channel access token}' \
      -H 'ボットのユーザーIDを指定するヘッダー:xxxxxx'
      ```
      :::::
    ::::
  :::
::

#### HTTPリクエスト

`POST https://api.line.me/v2/bot/chat/{chatId}/control/release`

#### レート制限

2,000リクエスト/秒

#### リクエストヘッダー

::parameter-table
  :::parameter-table-entry{required="true"}
  #undefined
  Content-Type

  `application/json`
  :::

  :::parameter-table-entry{required="true"}
  #undefined
  Authorization

  `Bearer {channel access token}`

  `{channel access token}`には、モジュールチャネルのチャネルアクセストークンを指定してください。
  :::

  :::parameter-table-entry{required="true"}
  #undefined
  ボットのユーザーIDを指定するヘッダー

  モジュールチャネルにアタッチされたLINE公式アカウントのボットのユーザーID。

  ボットのユーザーIDは、「[モジュールチャネルの提供者の操作で連携（アタッチ）する](#link-attach-by-operation-module-channel-provider)」のレスポンスや[Attachedイベント](#attached-event)で取得できます。

    ::::admonition{title="ヘッダーの詳細については参画される際に別途提供いたします" type="note"}
    本ヘッダーの名前（パラメーター名）は、実際に[LINEマーケットプレイス](https://line-marketplace.com/jp/inquiry){rel="[\"nofollow\"]"}に参画するお客様に限定して公開しています。
    ::::
  :::
::

#### パスパラメータ

::parameter-table
  :::parameter-table-entry{required="true"}
  #undefined
  chatId

  `userId`、`roomId`、または`groupId`
  :::
::

#### レスポンス

成功時は、ステータスコード`200`を返します。

#### エラーレスポンス

::reference-with-code
  :::reference-content
  以下のHTTPステータスコードと、エラーレスポンスを返します。

  | コード   | 説明                             |
  | ----- | ------------------------------ |
  | `400` | `chatId`パラメータに、不正なIDが指定されています。 |

  詳しくは、『Messaging APIリファレンス』の「[ステータスコード](/reference/messaging-api/#status-codes)」および「[エラーレスポンス](/reference/messaging-api/#error-responses)」を参照してください。
  :::

  :::reference-code
  *エラーレスポンスの例*

    ::::code-tabs
      :::::tab{lang="json"}
      ```json
      // chatIdパラメータに不正なIDを指定した場合（400 Bad Request）
      {
        "message": "The value for the 'chatId' parameter is invalid"
      }
      ```
      :::::
    ::::
  :::
::

### モジュールチャネル専用のWebhookイベントオブジェクト

#### Attachedイベント

::reference-with-code
  :::reference-content
  モジュールチャネルが、LINE公式アカウントにアタッチされたことを示すイベントです。モジュールチャネルのWebhook URLサーバーに送信されます。

    ::::parameter-table
      :::::parameter-table-entry
      #undefined
      timestampなど

      「[共通プロパティ](/reference/messaging-api/#common-properties)」を参照してください。

      ただし、`mode`は`active`固定です。
      :::::

      :::::parameter-table-entry
      #undefined
      type

      #undefined
      String

      `module`
      :::::

      :::::parameter-table-entry
      #undefined
      module.type

      #undefined
      String

      `attached`
      :::::

      :::::parameter-table-entry
      #undefined
      module.botId

      #undefined
      String

      アタッチされたLINE公式アカウントのボットのユーザーID
      :::::

      :::::parameter-table-entry
      #undefined
      module.scopes

      #undefined
      Array of strings

      LINE公式アカウントの管理者によって許可されたスコープを示す文字列の配列です。
      :::::
    ::::
  :::

  :::reference-code
  *Attachedイベントの例*

    ::::code-tabs
      :::::tab{lang="json"}
      ```sh
      {
        "destination": "U53387d54817...",
        "events": [
          {
            "type": "module",
            "module": {
              "type": "attached",
              "botId": "U53387d54817...",
              "scopes": [
                "message:send",
                "message:receive"
              ]
            },
            "webhookEventId": "01G3GCEEXNWREGSSFVTPYH8465",
            "deliveryContext": {
              "isRedelivery": false
            },
            "timestamp": 1653038594997,
            "mode": "active"
          }
        ]
      }
      ```
      :::::
    ::::
  :::
::

#### Detachedイベント

::reference-with-code
  :::reference-content
  モジュールチャネルが、LINE公式アカウントからデタッチされたことを示すイベントです。モジュールチャネルのWebhook URLサーバーに送信されます。

    ::::admonition{title="LINE公式アカウントを削除する操作をしたときにはDetachされません" type="note"}
    LINE Official Account ManagerでLINE公式アカウントを削除する操作をしたときは、モジュールチャネルはデタッチされません。

    削除する操作をしてから3か月が経過し、LINE公式アカウントの分析データを含むすべての情報が完全に削除されると、自動的にデタッチされます。
    ::::

    ::::parameter-table
      :::::parameter-table-entry
      #undefined
      timestampなど

      「[共通プロパティ](/reference/messaging-api/#common-properties)」を参照してください。

      ただし、`mode`は`active`固定です。
      :::::

      :::::parameter-table-entry
      #undefined
      type

      #undefined
      String

      `module`
      :::::

      :::::parameter-table-entry
      #undefined
      module.type

      #undefined
      String

      `detached`
      :::::

      :::::parameter-table-entry
      #undefined
      module.botId

      #undefined
      String

      連携解除されたLINE公式アカウントのボットのユーザーID
      :::::

      :::::parameter-table-entry
      #undefined
      module.reason

      #undefined
      String

      連携解除された理由

      `bot_deleted`：LINE公式アカウントの分析データを含むすべての情報が完全に削除されました。
      :::::
    ::::
  :::

  :::reference-code
  *Detachedイベントの例*

    ::::code-tabs
      :::::tab{lang="json"}
      ```sh
      {
        "destination": "U5fac33f633e72c192759f09afc41fa28",
        "events": [
          {
            "type": "module",
            "module": {
              "type": "detached",
              "botId": "U5fac33f633e72c192759f09afc41fa28"
            },
            "webhookEventId": "01G4CPSV08QGNT1DWFC4DSWDNP",
            "deliveryContext": {
              "isRedelivery": false
            },
            "timestamp": 1653988977672,
            "mode": "active"
          }
        ]
      }
      ```
      :::::
    ::::
  :::
::

#### Activatedイベント

::reference-with-code
  :::reference-content
  Acquire Control APIを呼び出して、モジュールチャネルがActive Channelに切り替わったことを示すイベントです。モジュールチャネルのWebhook URLサーバーに送信されます。

    ::::admonition{title="注意" type="note"}
    Acquire Control APIで指定した有効期間が過ぎて、主導権（Chat Control）が切り替わった場合は、Activatedイベントは送信されません。
    ::::

    ::::parameter-table
      :::::parameter-table-entry
      #undefined
      timestamp、sourceなど

      「[共通プロパティ](/reference/messaging-api/#common-properties)」を参照してください。

      ただし、`mode`は`active`固定です。
      :::::

      :::::parameter-table-entry
      #undefined
      type

      #undefined
      String

      `activated`
      :::::

      :::::parameter-table-entry
      #undefined
      chatControl.expireAt

      #undefined
      Number

      “active”が維持される期限。
      :::::
    ::::
  :::

  :::reference-code
  *Activatedイベントの例*

    ::::code-tabs
      :::::tab{lang="json"}
      ```sh
      {
        "destination": "U5fac33f633e72c192759f09afc41fa28",
        "events": [
          {
            "type": "activated",
            "chatControl": {
              "expireAt": 1653994422933
            },
            "webhookEventId": "01G4CRJ54J7TT4WN190KKHBXXT",
            "deliveryContext": {
              "isRedelivery": false
            },
            "timestamp": 1653990823058,
            "source": {
              "type": "user",
              "userId": "LUb577ef3cbe..."
            },
            "mode": "active"
          }
        ]
      }
      ```
      :::::
    ::::
  :::
::

#### Deactivatedイベント

::reference-with-code
  :::reference-content
  Acquire Control APIまたはRelease Control APIを呼び出して、モジュールチャネルがStandby Channelに切り替わったことを示すイベントです。モジュールチャネルのWebhook URLサーバーに送信されます。

    ::::admonition{title="注意" type="note"}
    Acquire Control APIで指定した有効期間が過ぎて、主導権（Chat Control）が切り替わった場合は、Deactivatedイベントは送信されません。
    ::::

    ::::parameter-table
      :::::parameter-table-entry
      #undefined
      timestamp、sourceなど

      「[共通プロパティ](/reference/messaging-api/#common-properties)」を参照してください。

      ただし、`mode`は`active`固定です。
      :::::

      :::::parameter-table-entry
      #undefined
      type

      #undefined
      String

      `deactivated`
      :::::
    ::::
  :::

  :::reference-code
  *Deactivatedイベントの例*

    ::::code-tabs
      :::::tab{lang="json"}
      ```sh
      {
        "destination": "U5fac33f633e72c192759f09afc41fa28",
        "events": [
          {
            "type": "deactivated",
            "webhookEventId": "01G4CRJ51100K1D1791KC9J4G4",
            "deliveryContext": {
              "isRedelivery": false
            },
            "timestamp": 1653990822945,
            "source": {
              "type": "user",
              "userId": "LUb577ef3cbe..."
            },
            "mode": "active"
          }
        ]
      }
      ```
      :::::
    ::::
  :::
::

#### botSuspendイベント

::reference-with-code
  :::reference-content
  LINE公式アカウントが一時停止状態（Suspend）になったことを示すイベントです。モジュールチャネルのWebhook URLサーバーに送信されます。

  このイベントを受信したときは、以下のような処理を行うことを推奨します。

  - モジュールチャネルの管理画面に「LINE公式アカウントが利用できない状態になっているため、この管理画面は利用できません」といったメッセージを表示し、管理画面の利用を停止する。
  - いったん一時停止状態になっても、一時停止状態から復帰する可能性（botResumeイベントを受信する可能性）があります。すべての情報を保持しておくことを推奨します。

    ::::admonition{title="注意" type="note"}
    Primary ChannelにはbotSuspendイベントは送信されません。

    botSuspendイベントを受信したあとでDetachedイベントを受信した場合は、LINE公式アカウントがモジュールチャネルの利用を停止し、契約を解除したことを示します。
    ::::

    ::::parameter-table
      :::::parameter-table-entry
      #undefined
      timestampなど

      「[共通プロパティ](/reference/messaging-api/#common-properties)」を参照してください。

      ただし、`mode`は`active`固定です。
      :::::

      :::::parameter-table-entry
      #undefined
      type

      #undefined
      String

      `botSuspended`
      :::::
    ::::
  :::

  :::reference-code
  *botSuspendイベントの例*

    ::::code-tabs
      :::::tab{lang="json"}
      ```sh
      {
        "destination": "U53387d548170020e6cedef5f41d1e01d",
        "events": [
          {
            "type": "botSuspended",
            "webhookEventId": "01G4CRJ54J7TT4WN190KKHBXXT",
            "deliveryContext": {
              "isRedelivery": false
            },
            "timestamp": 1616390574119,
            "mode": "active"
          }
        ]
      }
      ```
      :::::
    ::::
  :::
::

#### botResumedイベント

::reference-with-code
  :::reference-content
  LINE公式アカウントが一時停止状態から復帰したことを示すイベントです。モジュールチャネルのWebhook URLサーバーに送信されます。

  このイベントを受信したときは、モジュールチャネルの管理画面で「LINE公式アカウントが利用できない状態になっているため、この管理画面は利用できません」といったメッセージを非表示にし、管理画面の利用を再開することを推奨します。

    ::::admonition{title="注意" type="note"}
    Primary ChannelにはbotResumedイベントは送信されません。
    ::::

    ::::parameter-table
      :::::parameter-table-entry
      #undefined
      timestampなど

      「[共通プロパティ](/reference/messaging-api/#common-properties)」を参照してください。

      ただし、`mode`は`active`固定です。
      :::::

      :::::parameter-table-entry
      #undefined
      type

      #undefined
      String

      `botResumed`
      :::::
    ::::
  :::

  :::reference-code
  *botResumedイベントの例*

    ::::code-tabs
      :::::tab{lang="json"}
      ```sh
      {
        "destination": "U5fac33f633e72c192759f09afc41fa28",
        "events": [
          {
            "type": "botResumed",
            "webhookEventId": "01G4CS8T91R1V1JCE0G43DQND8",
            "deliveryContext": {
              "isRedelivery": false
            },
            "timestamp": 1653991565601,
            "mode": "active"
          }
        ]
      }
      ```
      :::::
    ::::
  :::
::

### モジュールをアタッチしたボットのリストを取得する

::reference-with-code
  :::reference-content
  モジュールチャネルをアタッチした、複数のLINE公式アカウントのボットの基本情報をリストで取得します。
  :::

  :::reference-code
  *リクエストの例*

    ::::code-tabs
      :::::tab{lang="shell"}
      ```sh
      curl -v -X GET "https://api.line.me/v2/bot/list?limit={limit}&start={continuationToken}" \
      -H 'Authorization: Bearer {channel access token}'
      ```
      :::::
    ::::
  :::
::

#### HTTPリクエスト

`GET https://api.line.me/v2/bot/list?limit={limit}&start={continuationToken}`

#### レート制限

2,000リクエスト/秒

#### リクエストヘッダー

::parameter-table
  :::parameter-table-entry{required="true"}
  #undefined
  Authorization

  `Bearer {channel access token}`

  `{channel access token}`には、モジュールチャネルのチャネルアクセストークンを指定してください。
  :::
::

#### クエリパラメータ

::parameter-table
  :::parameter-table-entry{optional=""}
  #undefined
  limit

  基本情報を取得するボットの最大個数を指定します。デフォルト値は`100`です。  

  最大値：`100`
  :::

  :::parameter-table-entry{optional=""}
  #undefined
  start

  継続トークンの値。レスポンスで返されるJSONオブジェクトの`next`プロパティに含まれます。1回のリクエストでボットの基本情報をすべて取得できない場合は、このパラメータを指定して残りの配列を取得します。
  :::
::

#### レスポンス

::reference-with-code
  :::reference-content
  成功時は、ステータスコード`200`と以下の情報を含むJSONオブジェクトを返します。

    ::::parameter-table
      :::::parameter-table-entry
      #undefined
      bots

      #undefined
      Array

      ボットの基本情報を表すBot list Item objectの配列。
      :::::

      :::::parameter-table-entry
      #undefined
      bots[].userId

      #undefined
      String

      ボットのユーザーID
      :::::

      :::::parameter-table-entry
      #undefined
      bots[].basicId

      #undefined
      String

      ボットのベーシックID
      :::::

      :::::parameter-table-entry{annotation="含まれないことがあります"}
      #undefined
      bots[].premiumId

      #undefined
      String

      ボットの:glossary-tooltip[[プレミアムID](/glossary/#premium-id)]{glossary-id="premium-id"}。プレミアムIDが未設定の場合、この値は含まれません。
      :::::

      :::::parameter-table-entry
      #undefined
      bots[].displayName

      #undefined
      String

      ボットの表示名
      :::::

      :::::parameter-table-entry{annotation="含まれないことがあります"}
      #undefined
      bots[].pictureUrl

      #undefined
      String

      プロフィール画像のURL。「https://」から始まる画像URLです。ボットにプロフィール画像を設定していない場合は、レスポンスに含まれません。
      :::::

      :::::parameter-table-entry{annotation="含まれないことがあります"}
      #undefined
      next

      #undefined
      String

      継続トークン。ボットの基本情報の、次の配列を取得するために使用します。このプロパティは、取得しきれなかったボットの基本情報が存在する場合にのみ返されます。

      継続トークンの有効期間は24時間（86,400秒間）です。
      :::::
    ::::
  :::

  :::reference-code
  *レスポンスの例*

    ::::code-tabs
      :::::tab{lang="json"}
      ```json
      {
        "bots": [
          {
            "userId": "Uf2dd6e8b081d2ff9c05c98a8a8b269c9",
            "basicId": "@628...",
            "displayName": "Test01",
            "pictureUrl": "https://profile.line-scdn.net/0hyxytJNAlJldEDQzlatVZAHhIKDoz..."
          },
          {
            "userId": "Ua831d37bfe8232808202b85127663f70",
            "basicId": "@076lu...",
            "displayName": "Test02",
            "pictureUrl": "https://profile.line-scdn.net/0hohnizdyzMEdTECbnVo9PEG9VPiok..."
          },
          {
            "userId": "Ub77ea431fba86f7c159a0c0f5be43d9f",
            "basicId": "@290n...",
            "displayName": "Test03"
          },
          {
            "userId": "Ub8ec80a14e879e9c6833fb4cee0e632b",
            "basicId": "@793j...",
            "displayName": "Test04"
          }
        ]
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

  | コード   | 説明                  |
  | ----- | ------------------- |
  | `400` | 無効な継続トークンが指定されています。 |

  詳しくは、『Messaging APIリファレンス』の「[ステータスコード](/reference/messaging-api/#status-codes)」および「[エラーレスポンス](/reference/messaging-api/#error-responses)」を参照してください。
  :::

  :::reference-code
  *エラーレスポンスの例*

    ::::code-tabs
      :::::tab{lang="json"}
      ```json
      // 有効期限切れなどの無効な継続トークンを指定した場合（400 Bad Request）
      {
        "message": "Invalid start param"
      }
      ```
      :::::
    ::::
  :::
::
