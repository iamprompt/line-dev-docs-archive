---
title: Send Mission Sticker
navigation: true
description: ''
meta: '{}'
path: /ja/_partials/partner-docs/send-mission-sticker
__hash__: j_CV6olsn4dlJyMPsYkTG7jsBpxm3TyoKgIBruACeS8
seo:
  description: ''
---

## ミッションスタンプAPI

ミッションスタンプは、ミッションの達成を条件としてユーザーに提供するスタンプです。スタンプをインセンティブに、ユーザーに「ID情報の連携」や「会員登録」、「アンケート回答」などを促すことができます。

### ユーザーにミッションスタンプを提供する

::reference-with-code
  :::reference-content
  ミッションを達成したユーザーに、ミッションスタンプのダウンロード権限を付与します。
  :::

  :::reference-code
  *リクエストの例*

    ::::code-tabs
      :::::tab{lang="shell"}
      ```sh
      curl -X POST https://api.line.me/shop/v3/mission \
      -H "Content-Type: application/json" \
      -H "Authorization: Bearer {channel access token}" \
      -d '{
          "to": "U4af4980629...",
          "productType": "STICKER",
          "productId": "0000",
          "sendPresentMessage": false
      }'
      ```
      :::::
    ::::
  :::
::

#### HTTPリクエスト

`POST https://api.line.me/shop/v3/mission`

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
  :::
::

#### リクエストボディ

::parameter-table
  :::parameter-table-entry{required="true"}
  #undefined
  to

  #undefined
  String

  ダウンロード権限を付与するユーザーのユーザーID
  :::

  :::parameter-table-entry{required="true"}
  #undefined
  productType

  #undefined
  String

  `STICKER`
  :::

  :::parameter-table-entry{required="true"}
  #undefined
  productId

  #undefined
  String

  スタンプセットのパッケージID
  :::

  :::parameter-table-entry{required="true"}
  #undefined
  sendPresentMessage

  #undefined
  Boolean

  `false`
  :::
::

#### レスポンス

ステータスコード`200`と空のレスポンスボディを返します。

#### エラーレスポンス

::reference-with-code
  :::reference-content
  エラー発生時は、エラーに応じたHTTPステータスコードと、以下のJSONデータを含むレスポンスボディが返されます。

    ::::parameter-table
      :::::parameter-table-entry
      #undefined
      message

      #undefined
      String

      エラー情報を含むメッセージ。詳しくは、以下の「[エラーメッセージ](#send-mission-stickers-v3-error-messages)」を参照してください。
      :::::
    ::::
  :::

  :::reference-code
  *エラーレスポンスの例*

    ::::code-tabs
      :::::tab{lang="json"}
      ```json
      // 無効なユーザーIDを指定した場合（400 Bad Request）
      {
        "message": "invalid request"
      }
      ```
      :::::
    ::::
  :::
::

##### エラーメッセージ

主なエラーのHTTPステータスコードと、JSONデータの`message`プロパティに含まれるエラーメッセージは以下のとおりです。

| コード   | メッセージ                                 | 説明                                                                                                                                                                                                                                                    |
| ----- | ------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `400` | invalid request                       | `to`に指定した送信先のユーザーIDが無効です。                                                                                                                                                                                                                             |
| `400` | illegal argument                      | `productId`に指定したスタンプセットがミッションスタンプとして設定されていません。                                                                                                                                                                                                        |
| `400` | not in sales period                   | `productId`に指定したスタンプセットが有効期間外です。                                                                                                                                                                                                                      |
| `400` | sticker set not available for channel | チャネルに`productId`で指定したスタンプセットを利用するための権限がありません。                                                                                                                                                                                                         |
| `400` | not available                         | 次のいずれかの理由により`to`に指定したユーザーにはミッションスタンプを付与できません。- `to`に指定した送信先のユーザーの国または地域では、`productId`に指定したスタンプセットが利用できません。 - `to`に指定した送信先のユーザーが利用している端末は、`productId`に指定したスタンプセットに対応していません。 - `to`に指定した送信先のユーザーが利用しているLINEアプリのバージョンは、`productId`に指定したスタンプセットに対応していません。 |
| `403` | not allowed to use the API            | チャネルに、ミッションスタンプAPIの利用権限が付与されていません。                                                                                                                                                                                                                    |
| `404` | not found                             | `productId`に指定したスタンプセットが存在しません。                                                                                                                                                                                                                       |
| `500` | internal error                        | 内部サーバーのエラーです。しばらく待ってからリクエストを再試行してください。                                                                                                                                                                                                                |
| `502` | upstream error                        | 内部ネットワークのエラーです。しばらく待ってからリクエストを再試行してください。                                                                                                                                                                                                              |
