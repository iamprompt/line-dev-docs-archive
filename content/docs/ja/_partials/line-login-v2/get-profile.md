---
title: Get Profile
navigation: true
description: ''
meta: '{}'
path: /ja/_partials/line-login-v2/get-profile
__hash__: bEMvex_nf7zwD2qW7TX6SXpu_LD8hZqzqwu9a6UKTuQ
seo:
  description: ''
---

### ユーザープロフィールを取得する

::reference-with-code
  :::reference-content
  ユーザーのユーザーID、表示名、プロフィール画像、およびステータスメッセージを取得します。
  :::

  :::reference-code
  *リクエストの例*

    ::::code-tabs
      :::::tab{lang="shell"}
      ```sh
      curl -v -X GET https://api.line.me/v2/profile \
      -H 'Authorization: Bearer {access token}'
      ```
      :::::
    ::::
  :::
::

#### HTTPリクエスト

`GET https://api.line.me/v2/profile`

#### リクエストヘッダー

::parameter-table
  :::parameter-table-entry{required="true"}
  #undefined
  Authorization

  Bearer `{access token}`
  :::
::

#### レスポンス

::reference-with-code
  :::reference-content
    ::::parameter-table
      :::::parameter-table-entry
      #undefined
      userId

      #undefined
      String

      ユーザーID
      :::::

      :::::parameter-table-entry
      #undefined
      displayName

      #undefined
      String

      ユーザーの表示名
      :::::

      :::::parameter-table-entry
      #undefined
      pictureUrl

      #undefined
      String

      プロフィール画像のURL。スキームはhttpsです。ユーザーがプロフィール画像を設定していない場合はレスポンスに含まれません。

      プロフィール画像のサムネイル：

      プロフィール画像のURLに、以下のサフィックスを付加すると、プロフィール画像のサムネイルを取得できます。

      | サフィックス   | サムネイルサイズ  |
      | -------- | --------- |
      | `/large` | 200 x 200 |
      | `/small` | 51 x 51   |

      例：`https://profile.line-scdn.net/abcdefghijklmn/large`
      :::::

      :::::parameter-table-entry
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
        "userId":"U4af4980629...",
        "displayName":"Brown",
        "pictureUrl":"https://profile.line-scdn.net/abcdefghijklmn",
        "statusMessage":"Hello, LINE!"
      }
      ```
      :::::
    ::::
  :::
::
