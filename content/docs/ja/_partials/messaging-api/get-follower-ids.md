---
title: Get Follower Ids
navigation: true
description: ''
meta: '{}'
path: /ja/_partials/messaging-api/get-follower-ids
__hash__: ObPuxKMvCRm5iFGOZ2mOJ4J-HPMXa9yGqJrAKOz9Ux4
seo:
  description: ''
---

### LINE公式アカウントを友だち追加したユーザーのリストを取得する

:api-endpoint{protocol="get" endpoint="https://api.line.me/v2/bot/followers/ids"}::reference-with-code
  :::reference-content
    ::::admonition{title="注意" type="note"}
    この機能は認証済アカウントまたは:glossary-tooltip[[プレミアムアカウント](/glossary/#premium-account)]{glossary-id="premium-account"}でのみご利用いただけます。アカウント種別について詳しくは、『LINEヤフー for Business』の「[LINE公式アカウント アカウント種別](https://www.lycbiz.com/jp/service/line-official-account/account-type/){rel="[\"nofollow\"]"}」を参照してください。
    ::::

  LINE公式アカウントを友だち追加したユーザーの、:glossary-tooltip[[ユーザーID](/glossary/#user-id)]{glossary-id="user-id"}のリストを取得します。

  すべてのユーザーIDを取得するには、`next`プロパティが[レスポンス](#get-follower-ids-response)に含まれなくなるまでリクエストを繰り返す必要があります。レスポンスに含まれる`next`プロパティの値を次のリクエストの`start`に指定し、リクエストを繰り返してください。

  #### 取得できるユーザーIDの制限について

  取得したユーザーIDのリストに、以下のユーザーのユーザーIDは含まれません。

  - LINEアカウントを削除したユーザー。
  - 対象のLINE公式アカウントを友だち追加した後にブロックしたユーザー。
  - プロフィール情報の取得に同意していないユーザー。詳しくは、『Messaging APIドキュメント』の「[ユーザーのプロフィール情報取得の同意](/docs/messaging-api/user-consent/)」を参照してください。

  そのため、このエンドポイントで取得したユーザーIDの数は、LINE公式アカウントのビジネスプロフィールや[LINE Official Account Manager](https://manager.line.biz/){rel="[\"nofollow\"]"}に表示される友だち数と一致しない場合があります。

    ::::admonition{title="取得したユーザーIDは使用できない場合があります" type="note"}
    このエンドポイントで取得したユーザーIDに対してメッセージを送信しても、ユーザーの操作が原因でメッセージが送信できない場合があります。主な原因は以下のとおりです。

    - ユーザーIDを取得してからメッセージを送信するまでの間に、ユーザーが対象のLINE公式アカウントをブロックした。
    - ユーザーが対象のLINE公式アカウントを友だち追加した後に、[LINEアカウントを削除](https://guide.line.me/ja/account-and-settings/line-account-delete.html){rel="[\"nofollow\"]"}した。
    ::::
  :::

  :::reference-code
  *リクエストの例*

    ::::code-tabs
      :::::tab{lang="shell"}
      ```sh
      curl -v -X GET https://api.line.me/v2/bot/followers/ids \
      -H 'Authorization: Bearer {channel access token}' \
      -d 'limit=1000' \
      -d 'start=yANU9IA...' \
      -G
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

#### クエリパラメータ

::parameter-table
  :::parameter-table-entry{optional=""}
  #undefined
  limit

  #undefined
  Number

  1回のリクエストで取得するユーザーIDの最大数。デフォルト値は`300`です。  

  最大値：`1000`
  :::

  :::parameter-table-entry{optional=""}
  #undefined
  start

  #undefined
  String

  継続トークンの値。[レスポンス](#get-follower-ids-response)で返されるJSONオブジェクトの`next`プロパティに含まれます。1回のリクエストでユーザーIDをすべて取得できない場合は、このパラメータを指定して残りのユーザーIDを取得します。
  :::
::

#### レスポンス

::reference-with-code
  :::reference-content
  ステータスコード`200`と以下のプロパティを含むJSONオブジェクトを返します。

    ::::parameter-table
      :::::parameter-table-entry
      #undefined
      userIds

      #undefined
      Array of strings

      LINE公式アカウントを友だち追加したユーザーのユーザーIDを示す文字列の配列です。[取得できるユーザーIDに制限](#get-follower-ids-obtainable-ids)があるため、`userIds`プロパティに含まれるユーザーIDの数は、`next`プロパティが返される場合でも、必ず`limit`で指定した最大数になるとは限りません。  

      ユーザーIDの最大数：`limit`で指定した数
      :::::

      :::::parameter-table-entry{annotation="含まれないことがあります"}
      #undefined
      next

      #undefined
      String

      継続トークン。次のユーザーIDを取得するために使用します。このプロパティは、前回までのレスポンスの`userIds`プロパティで取得しきれなかったユーザーIDがある場合にのみ返されます。

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
        "userIds": ["U4af4980629...", "U0c229f96c4...", "U95afb1d4df..."],
        "next": "yANU9IA..."
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

  | コード   | 説明                                                                                                                                      |
  | ----- | --------------------------------------------------------------------------------------------------------------------------------------- |
  | `400` | 無効な継続トークンが指定されています。                                                                                                                     |
  | `403` | このエンドポイントを使う権限がありません。認証済アカウントまたは:glossary-tooltip[[プレミアムアカウント](/glossary/#premium-account)]{glossary-id="premium-account"}でのみご利用いただけます。 |

  詳しくは、[共通仕様](#common-specifications)の「[ステータスコード](#status-codes)」および「[エラーレスポンス](#error-responses)」を参照してください。
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
