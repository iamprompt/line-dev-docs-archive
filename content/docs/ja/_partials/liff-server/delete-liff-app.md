---
title: Delete Liff App
navigation: true
description: ''
meta: '{}'
path: /ja/_partials/liff-server/delete-liff-app
__hash__: oR_gHhilpeu2CskATsoAh7ZIIPNiUhGA3fqV4P49d70
seo:
  description: ''
---

### LIFFアプリをチャネルから削除する

::reference-with-code
  :::reference-content
  LIFFアプリをチャネルから削除します。
  :::

  :::reference-code
  *例*

    ::::code-tabs
      :::::tab{lang="shell"}
      ```sh
      curl -X DELETE https://api.line.me/liff/v1/apps/{liffId} \
      -H "Authorization: Bearer {channel access token}"
      ```
      :::::
    ::::
  :::
::

#### HTTPリクエスト

`DELETE https://api.line.me/liff/v1/apps/{liffId}`

#### リクエストヘッダー

::parameter-table
  :::parameter-table-entry{required="true"}
  #undefined
  Authorization

  Bearer `{channel access token}`  

  詳しくは、「[チャネルアクセストークンを準備する](#preparing-channel-access-token)」を参照してください。
  :::
::

#### パスパラメータ

::parameter-table
  :::parameter-table-entry{required="true"}
  #undefined
  liffId

  削除するLIFFアプリのID
  :::
::

#### レスポンス

ステータスコード`200`を返します。

#### エラーレスポンス

以下のいずれかのステータスコードを返します。

| ステータスコード | 説明                                                             |
| -------- | -------------------------------------------------------------- |
| 401      | 認証に失敗しました。                                                     |
| 404      | 以下のどちらかです。- 指定したLIFFアプリは存在しません。 - 指定したLIFFアプリは別のチャネルに追加されています。 |
