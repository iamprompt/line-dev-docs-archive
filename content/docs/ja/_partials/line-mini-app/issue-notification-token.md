---
title: Issue Notification Token
navigation: true
description: ''
meta: '{}'
path: /ja/_partials/line-mini-app/issue-notification-token
__hash__: 6SXNAAseCqhqZ7pzmPoVTIiPjT-KqUv8PLd_MFxQA_Q
seo:
  description: ''
---

### サービス通知トークンを発行する

::reference-with-code
  :::reference-content
  サービス通知トークンを発行します。サービス通知トークンを使用すると、紐づけられたユーザーに対してサービスメッセージを送信できます。

  サービス通知トークンの特徴は以下のとおりです。

  - サービス通知トークンは、発行から1年間（31,536,000秒間）有効です。有効期限が切れるまでに、最大5回サービスメッセージを送信できます。
  - サービス通知トークンを使用すると、有効期限が切れておらず、残りの送信可能回数が0でない場合は、サービス通知トークンの値が更新されます。ユーザーに対して、後続のサービスメッセージを送信する場合は、更新後のサービス通知トークンを保存してください。

    ::::admonition{title="1つのアクセストークンで複数のサービス通知トークンを発行しないでください" type="warning"}
    [`liff.getAccessToken()`](/reference/liff/#get-access-token)で取得したアクセストークン（LIFFのアクセストークン）を再利用して、複数のサービス通知トークンを発行することは許可されていません。

    LIFFのアクセストークン1つにつき、発行できるサービス通知トークンは1つだけです。
    ::::

    ::::admonition{title="注意" type="note"}
    サービス通知トークンは、一人のユーザーに紐づいています。あるユーザーに紐づいたサービス通知トークンを利用して、ほかのユーザーにサービスメッセージを送信することはできません。
    ::::
  :::

  :::reference-code
  *リクエストの例*

    ::::code-tabs
      :::::tab{lang="shell"}
      ```sh
      curl -X POST https://api.line.me/message/v3/notifier/token \
      -H 'Content-Type: application/json' \
      -H 'Authorization: Bearer W1TeHCgfH2Liwa...' \
      -d '{
          "liffAccessToken": "eyJhbGciOiJIUzI1NiJ9..."
      }'
      ```
      :::::
    ::::
  :::
::

#### HTTPリクエスト

`POST https://api.line.me/message/v3/notifier/token`

#### リクエストヘッダー

::parameter-table
  :::parameter-table-entry{required="true"}
  #undefined
  Content-Type

  application/json
  :::

  :::parameter-table-entry{required="true"}
  #undefined
  Authorization

  Bearer `{channel access token}`  

  詳しくは、「[チャネルアクセストークン](/docs/basics/channel-access-token/)」を参照してください。
  :::
::

::admonition{title="ステートレスチャネルアクセストークンの使用を推奨します" type="note"}
LINEミニアプリチャネルでは、[長期のチャネルアクセストークン](/docs/basics/channel-access-token/#long-lived-channel-access-token)および、[任意の有効期間を指定できるチャネルアクセストークン（チャネルアクセストークンv2.1）](/docs/basics/channel-access-token/#user-specified-expiration)は使用できません。

LINEミニアプリの開発では、[ステートレスチャネルアクセストークン](/docs/basics/channel-access-token/#stateless-channel-access-token)または[短期のチャネルアクセストークン](/docs/basics/channel-access-token/#short-lived-channel-access-token)を使用できます。このうち、ステートレスチャネルアクセストークンの使用を推奨します。ステートレスチャネルアクセストークンは、発行数に制限がないため、アプリケーション側でトークンのライフサイクルを管理する必要がありません。
::

#### リクエストボディ

::parameter-table
  :::parameter-table-entry{required="true"}
  #undefined
  liffAccessToken

  #undefined
  String

  [`liff.getAccessToken()`](/reference/liff/#get-access-token)で取得したアクセストークン（LIFFのアクセストークン）
  :::
::

#### レスポンス

::reference-with-code
  :::reference-content
  ステータスコード`200`と以下の情報を含むJSONオブジェクトを返します。

    ::::parameter-table
      :::::parameter-table-entry
      #undefined
      notificationToken

      #undefined
      String

      サービス通知トークン
      :::::

      :::::parameter-table-entry
      #undefined
      expiresIn

      #undefined
      Number

      サービス通知トークンの有効期限が切れるまでの秒数。サービス通知トークンは、発行から1年間（31,536,000秒間）有効です。
      :::::

      :::::parameter-table-entry
      #undefined
      remainingCount

      #undefined
      Number

      発行されたサービス通知トークンで、サービスメッセージを送信できる回数
      :::::

      :::::parameter-table-entry
      #undefined
      sessionId

      #undefined
      String

      セッションID。詳しくは、「[サービスメッセージを送信する](/docs/line-mini-app/develop/service-messages/)」を参照してください。
      :::::
    ::::
  :::

  :::reference-code
  *レスポンスの例*

    ::::code-tabs
      :::::tab{lang="json"}
      ```json
      {
        "notificationToken": "34c11a03-b726-49e3-8ce0-949387a9..",
        "expiresIn": 31536000,
        "remainingCount": 5,
        "sessionId": "xD06...."
      }
      ```
      :::::
    ::::
  :::
::

#### エラーレスポンス

::reference-with-code
  :::reference-content
  以下のいずれかのステータスコードとエラーメッセージを返します。

  | ステータスコード                  | 説明                                                                                                                                                                                                  |
  | ------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
  | 400 Bad request           | 以下のいずれかです。- リクエストボディに問題があります。 - `liffAccessToken`プロパティに指定したLIFFのアクセストークンを使用して、サービス通知トークンの発行が短時間に連続してリクエストされました。                                                                                     |
  | 401 Unauthorized          | 以下のいずれか、または両方です。- 有効なチャネルアクセストークンが指定されていません。 - 有効なLIFFのアクセストークンが指定されていません。    - ユーザーが[LIFFアプリを閉じる](/docs/liff/developing-liff-apps/#behavior-when-closing-liff-app)と、有効期限が切れていなくてもアクセストークンは無効化されます。 |
  | 403 Forbidden             | このチャネルには、サービス通知トークンを発行する許可が与えられていません。                                                                                                                                                               |
  | 500 Internal Server Error | 内部サーバーのエラーです。                                                                                                                                                                                       |
  :::

  :::reference-code
  *LIFFのアクセストークンが空になっている例*

    ::::code-tabs
      :::::tab{lang="json"}
      ```json
      {
        "message": "[liffAccessToken] must not be blank"
      }
      ```
      :::::
    ::::

  *アクセストークンの有効期限が切れている例*

    ::::code-tabs
      :::::tab{lang="json"}
      ```json
      {
        "message": "The access token expired"
      }
      ```
      :::::
    ::::

  *ユーザーがLIFFアプリを閉じたことなどによりアクセストークンが無効化されている例*

    ::::code-tabs
      :::::tab{lang="json"}
      ```json
      {
        "message": "The access token revoked"
      }
      ```
      :::::
    ::::
  :::
::
