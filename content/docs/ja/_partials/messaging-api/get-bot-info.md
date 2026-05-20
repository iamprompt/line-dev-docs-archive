---
title: Get Bot Info
navigation: true
description: ''
meta: '{}'
path: /ja/_partials/messaging-api/get-bot-info
__hash__: MQ7SyehiZ_XRc3clspDffUGkyevrMCbETSap2u40ass
seo:
  description: ''
---

### LINE公式アカウント（ボット）の情報を取得する

:api-endpoint{protocol="get" endpoint="https://api.line.me/v2/bot/info"}::reference-with-code
  :::reference-content
  LINE公式アカウント（ボット）の基本情報を取得します。
  :::

  :::reference-code
  *リクエストの例*

    ::::code-tabs
      :::::tab{lang="shell"}
      ```sh
      curl -X GET \
      -H 'Authorization: Bearer {channel access token}' \
      https://api.line.me/v2/bot/info
      ```
      :::::
    ::::
  :::
::

#### レート制限

2,000リクエスト/秒

レート制限について詳しくは、「[レート制限](#rate-limits)」を参照してください。

#### リクエストヘッダー

::parameter-table
  :::parameter-table-entry{required="true"}
  #undefined
  Authorization

  Bearer `{channel access token}`
  :::
::

#### レスポンス

::reference-with-code
  :::reference-content
  ステータスコード`200`と以下の情報を含むJSONオブジェクトを返します。

    ::::parameter-table
      :::::parameter-table-entry
      #undefined
      userId

      #undefined
      String

      LINE公式アカウント（ボット）のユーザーID
      :::::

      :::::parameter-table-entry
      #undefined
      basicId

      #undefined
      String

      LINE公式アカウント（ボット）のベーシックID
      :::::

      :::::parameter-table-entry{annotation="含まれないことがあります"}
      #undefined
      premiumId

      #undefined
      String

      LINE公式アカウント（ボット）の:glossary-tooltip[[プレミアムID](/glossary/#premium-id)]{glossary-id="premium-id"}。プレミアムIDが未設定の場合、この値は含まれません。
      :::::

      :::::parameter-table-entry
      #undefined
      displayName

      #undefined
      String

      LINE公式アカウント（ボット）の表示名
      :::::

      :::::parameter-table-entry{annotation="含まれないことがあります"}
      #undefined
      pictureUrl

      #undefined
      String

      プロフィール画像のURL。「https://」から始まる画像URLです。LINE公式アカウント（ボット）にプロフィール画像を設定していない場合は、レスポンスに含まれません。
      :::::

      :::::parameter-table-entry
      #undefined
      chatMode

      #undefined
      String

      [LINE Official Account Manager](https://manager.line.biz){rel="[\"nofollow\"]"}のチャットの設定。以下のいずれかの値が返ります。

      - `chat`：チャットがオンに設定されています。
      - `bot`：チャットがオフに設定されています。
      :::::

      :::::parameter-table-entry
      #undefined
      markAsReadMode

      #undefined
      String

      メッセージの自動既読設定。チャットを「オフ」にしていれば`auto`、「オン」にしていれば`manual`が返ります。

      - `auto`：自動既読設定が有効です。
      - `manual`：自動既読設定が無効です。
      :::::
    ::::
  :::

  :::reference-code
  *レスポンスの例*

    ::::code-tabs
      :::::tab{lang="json"}
      ```json
      {
        "userId": "Ub9952f8...",
        "basicId": "@216ru...",
        "displayName": "Example name",
        "pictureUrl": "https://profile.line-scdn.net/0hbGgpkVAb...",
        "chatMode": "chat",
        "markAsReadMode": "manual"
      }
      ```
      :::::
    ::::
  :::
::

#### エラーレスポンス

詳しくは、[共通仕様](#common-specifications)の「[ステータスコード](#status-codes)」および「[エラーレスポンス](#error-responses)」を参照してください。
