---
title: Get Profile
navigation: true
description: ''
meta: '{}'
path: /ja/_partials/messaging-api/get-profile
__hash__: A65NCa9WqqU93ugim_wDn0JWicVl7l0nUdT8oaw-lOY
seo:
  description: ''
---

### プロフィール情報を取得する

:api-endpoint{protocol="get" endpoint="https://api.line.me/v2/bot/profile/{userId}"}::reference-with-code
  :::reference-content
  以下のいずれかの条件を満たすユーザーのプロフィール情報を取得できます。

  - LINE公式アカウントを友だち追加しているユーザー
  - LINE公式アカウントを友だち追加したことはないが、LINE公式アカウントにメッセージを送信したことがあるユーザー（LINE公式アカウントをブロックしているユーザーを除く）

  なお取得できる情報はメインプロフィールのみです。ユーザーの:glossary-tooltip[[サブプロフィール](/glossary/#subprofile)]{glossary-id="subprofile"}は取得できません。

    ::::admonition{title="注意" type="note"}
    LINE公式アカウントをブロックしているユーザーのプロフィール情報は取得できません。
    ::::

    ::::admonition{title="グループトークや複数人トークのメンバーのプロフィール情報" type="tip"}
    グループトークや複数人トークのメンバーのプロフィール情報を取得するには、以下のエンドポイントを利用できます。

    - [グループトークのメンバーのプロフィール情報を取得する](#get-group-member-profile)
    - [複数人トークのメンバーのプロフィールを取得する](#get-room-member-profile)
    ::::
  :::

  :::reference-code
  *リクエストの例*

    ::::code-tabs
      :::::tab{lang="shell"}
      ```sh
      curl -v -X GET https://api.line.me/v2/bot/profile/{userId} \
      -H 'Authorization: Bearer {channel access token}'
      ```
      :::::
    ::::
  :::
::

#### APIプレイグラウンド

:api-playground{endpoint="/bot/profile/{userId}"}#### レート制限

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

#### パスパラメータ

::parameter-table
  :::parameter-table-entry{required="true"}
  #undefined
  userId

  [Webhookイベントオブジェクト](#webhook-event-objects)で返されるユーザーID。LINEに表示されるLINE IDは使用しないでください。
  :::
::

#### レスポンス

::reference-with-code
  :::reference-content
  ユーザーIDが有効な場合、ステータスコード`200`と以下の情報を含むJSONオブジェクトを返します。

    ::::parameter-table
      :::::parameter-table-entry
      #undefined
      displayName

      #undefined
      String

      ユーザーの表示名
      :::::

      :::::parameter-table-entry
      #undefined
      userId

      #undefined
      String

      ユーザーID
      :::::

      :::::parameter-table-entry{annotation="含まれないことがあります"}
      #undefined
      language

      #undefined
      String

      ユーザーの言語。[BCP 47](https://www.rfc-editor.org/info/bcp47/){rel="[\"nofollow\"]"}言語タグに従った文字列が返されます。ユーザーがLINEのプライバシーポリシーに未同意の場合はレスポンスに含まれません。  

      例：`en`（英語）。
      :::::

      :::::parameter-table-entry{annotation="含まれないことがあります"}
      #undefined
      pictureUrl

      #undefined
      String

      プロフィール画像のURL。スキームはhttpsです。ユーザーがプロフィール画像を設定していない場合はレスポンスに含まれません。
      :::::

      :::::parameter-table-entry{annotation="含まれないことがあります"}
      #undefined
      statusMessage

      #undefined
      String

      ユーザーのステータスメッセージ。ユーザーがステータスメッセージを設定していない場合はレスポンスに含まれません。
      :::::
    ::::
  :::

  :::reference-code
  *レスポンスの例*

    ::::code-tabs
      :::::tab{lang="json"}
      ```json
      {
        "displayName": "LINE taro",
        "userId": "U4af4980629...",
        "language": "en",
        "pictureUrl": "https://profile.line-scdn.net/ch/v2/p/uf9da5ee2b...",
        "statusMessage": "Hello, LINE!"
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

  | コード   | 説明                                                                                                                                                                                                                                                           |
  | ----- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
  | `400` | 無効なユーザーIDが指定されています。                                                                                                                                                                                                                                          |
  | `404` | プロフィール情報を取得できませんでした。次のような理由が考えられます。- 対象のユーザーIDが存在していない。 - ユーザーがプロフィール情報の取得に同意していない。 - ユーザーが対象のLINE公式アカウントを友だち追加していない。 - ユーザーが対象のLINE公式アカウントを友だち追加した後にブロックした。  詳しくは、『Messaging APIドキュメント』の「[ユーザーのプロフィール情報取得の同意](/docs/messaging-api/user-consent/)」を参照してください。 |

  詳しくは、[共通仕様](#common-specifications)の「[ステータスコード](#status-codes)」および「[エラーレスポンス](#error-responses)」を参照してください。
  :::

  :::reference-code
  *エラーレスポンスの例*

    ::::code-tabs
      :::::tab{lang="json"}
      ```json
      // プロフィール情報を取得できなかった場合（404 Not Found）
      {
        "message": "Not found"
      }
      ```
      :::::
    ::::
  :::
::
