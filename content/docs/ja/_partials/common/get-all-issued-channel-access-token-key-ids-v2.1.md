---
title: Get All Issued Channel Access Token Key Ids V21
navigation: true
description: ''
meta: '{}'
path: /ja/_partials/common/get-all-issued-channel-access-token-key-ids-v2.1
__hash__: oPorGC1W_8n0AHPCnRca1gcs0ub0zfw3fwbNqaFBaZw
seo:
  description: ''
---

### すべての有効なチャネルアクセストークンv2.1のキーIDを取得する

:api-endpoint{protocol="get" endpoint="https://api.line.me/oauth2/v2.1/tokens/kid"}::reference-with-code
  :::reference-content
  すべての有効なチャネルアクセストークンのキーIDを取得します。
  :::

  :::reference-code
  *リクエストの例*

    ::::code-tabs
      :::::tab{lang="shell"}
      ```sh
      curl -X GET https://api.line.me/oauth2/v2.1/tokens/kid \
      --data-urlencode 'client_assertion_type=urn:ietf:params:oauth:client-assertion-type:jwt-bearer' \
      --data-urlencode 'client_assertion={JWT}' \
      -G
      ```
      :::::
    ::::
  :::
::

#### クエリパラメータ

::parameter-table
  :::parameter-table-entry{required="true"}
  #undefined
  client_assertion_type

  #undefined
  String

  `urn:ietf:params:oauth:client-assertion-type:jwt-bearer`をURLエンコードした値
  :::

  :::parameter-table-entry{required="true"}
  #undefined
  client_assertion

  #undefined
  String

  クライアントが作成し、秘密鍵で署名する必要がある[JSON Web Token (JWT)](https://datatracker.ietf.org/doc/html/rfc7519){rel="[\"nofollow\"]"}です。
  :::
::

#### レスポンス

::reference-with-code
  :::reference-content
  ステータスコード`200`と以下の情報を含むJSONオブジェクトを返します。

    ::::parameter-table
      :::::parameter-table-entry
      #undefined
      kids

      #undefined
      Array of strings

      チャネルアクセストークンのキーIDの配列
      :::::
    ::::
  :::

  :::reference-code
  *レスポンスの例*

    ::::code-tabs
      :::::tab{lang="json"}
      ```json
      {
        "kids": [
          "U_gdnFYKTWRxxxxDVZexGg",
          "sDTOzw5wIfWxxxxzcmeQA",
          "73hDyp3PxGfxxxxD6U5qYA",
          "FHGanaP79smDxxxxyPrVw",
          "CguB-0kxxxxdSM3A5Q_UtQ",
          "G82YP96jhHwyKSxxxx7IFA"
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

  | コード   | 説明                                                                        |
  | ----- | ------------------------------------------------------------------------- |
  | `400` | リクエストに問題があります。次のような理由が考えられます。- JWTアサーションの検証に失敗した。 - JWTアサーションの有効期限が切れている。 |
  | `404` | JWTアサーションと紐づく署名キーがチャネルに登録されていません。                                         |
  :::

  :::reference-code
  *エラーレスポンスの例*

    ::::code-tabs
      :::::tab{lang="json"}
      ```json
      // JWTアサーションの有効期限が切れている場合（400 Bad Request）
      {
        "error": "invalid_client",
        "error_description": "Invalid exp"
      }

      // JWTアサーションと紐づく署名キーがチャネルに登録されていない場合（404 Not Found）
      {
        "message": "Cannot find channel key that satisfies the conditions"
      }
      ```
      :::::
    ::::
  :::
::
