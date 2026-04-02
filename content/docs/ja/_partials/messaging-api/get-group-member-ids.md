---
title: Get Group Member Ids
navigation: true
description: ''
meta: '{}'
path: /ja/_partials/messaging-api/get-group-member-ids
__hash__: py5wW_ga8RYwQy--CNSqFeyRlCAtH89CPPHydmbM0I8
seo:
  description: ''
---

### グループトークのメンバーのユーザーIDを取得する

:api-endpoint{protocol="get" endpoint="https://api.line.me/v2/bot/group/{groupId}/members/ids"}::reference-with-code
  :::reference-content
    ::::admonition{title="注意" type="note"}
    この機能は認証済アカウントまたは:glossary-tooltip[[プレミアムアカウント](/glossary/#premium-account)]{glossary-id="premium-account"}でのみご利用いただけます。アカウント種別について詳しくは、『LINEヤフー for Business』の「[LINE公式アカウント アカウント種別](https://www.lycbiz.com/jp/service/line-official-account/account-type/){rel="[\"nofollow\"]"}」を参照してください。
    ::::

  LINE公式アカウントが参加しているグループトークのメンバーの、ユーザーIDを取得するAPIです。LINE公式アカウントを友だちとして追加していないユーザーや、LINE公式アカウントをブロックしているユーザーのユーザーIDも取得します。

    ::::admonition{title="WebhookからもユーザーIDを取得できます" type="tip"}
    ユーザーがグループトークに参加したり、グループトークでメッセージを送ったりすると、ボットサーバーにWebhookが送信されます。WebhookにはユーザーIDが含まれているため、APIリクエストを実行せずにユーザーIDを取得できます。詳しくは、『Messaging APIドキュメント』の「[WebhookからユーザーIDを取得する](/docs/messaging-api/getting-user-ids/#get-user-ids-in-webhook)」を参照してください。
    ::::
  :::

  :::reference-code
  *リクエストの例*

    ::::code-tabs
      :::::tab{lang="shell"}
      ```sh
      curl -v -X GET 'https://api.line.me/v2/bot/group/{groupId}/members/ids?start={continuationToken}' \
      -H 'Authorization: Bearer {channel access token}'
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

#### パスパラメータ

::parameter-table
  :::parameter-table-entry{required="true"}
  #undefined
  groupId

  グループID。[Webhookイベントオブジェクト](#webhook-event-objects)の`source`オブジェクトで返されます。
  :::
::

#### クエリパラメータ

::parameter-table
  :::parameter-table-entry{optional=""}
  #undefined
  start

  継続トークンの値。[レスポンス](#get-group-member-user-ids-response)で返されるJSONオブジェクトの`next`プロパティに含まれます。1回のリクエストでユーザーIDをすべて取得できない場合は、このパラメータを指定して残りの配列を取得します。
  :::
::

#### レスポンス

::reference-with-code
  :::reference-content
  ステータスコード`200`と以下のプロパティを含むJSONオブジェクトを返します。

    ::::parameter-table
      :::::parameter-table-entry
      #undefined
      memberIds

      #undefined
      Array of strings

      グループトークのメンバーのユーザーIDのリスト。iOS版LINEまたはAndroid版LINEを使用しているユーザーのみ`memberIds`に含まれます。詳しくは、「[ユーザーのプロフィール情報取得の同意](/docs/messaging-api/user-consent/)」を参照してください。  

      最大ユーザー数：100
      :::::

      :::::parameter-table-entry{annotation="含まれないことがあります"}
      #undefined
      next

      #undefined
      String

      継続トークン。グループトークのメンバーのユーザーIDの、次の配列を取得するために使用します。このプロパティは、前回までのレスポンスの`memberIds`で取得しきれなかったユーザーIDがある場合にのみ返されます。

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
        "memberIds": ["U4af4980629...", "U0c229f96c4...", "U95afb1d4df..."],
        "next": "jxEWCEEP..."
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
  | `400` | リクエストに問題があります。次のような理由が考えられます。- 無効なグループIDを指定している。 - `start`プロパティに無効な継続トークンを指定している。                                                       |
  | `403` | このエンドポイントを使う権限がありません。認証済アカウントまたは:glossary-tooltip[[プレミアムアカウント](/glossary/#premium-account)]{glossary-id="premium-account"}でのみご利用いただけます。 |
  | `404` | 存在しないグループやLINE公式アカウントが参加していないグループが指定されています。                                                                                             |

  詳しくは、[共通仕様](#common-specifications)の「[ステータスコード](#status-codes)」および「[エラーレスポンス](#error-responses)」を参照してください。
  :::

  :::reference-code
  *エラーレスポンスの例*

    ::::code-tabs
      :::::tab{lang="json"}
      ```json
      // 無効なグループIDを指定した場合（400 Bad Request）
      {
        "message": "The value for the 'groupId' parameter is invalid"
      }

      // 有効期限切れなどの無効な継続トークンを指定した場合（400 Bad Request）
      {
        "message": "Invalid start param"
      }

      // 存在しないグループやLINE公式アカウントが参加していないグループを指定した場合（404 Not Found）
      {
        "message": "Not found"
      }
      ```
      :::::
    ::::
  :::
::
