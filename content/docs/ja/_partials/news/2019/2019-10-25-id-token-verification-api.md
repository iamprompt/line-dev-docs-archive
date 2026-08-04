---
title: IDトークンを検証するエンドポイントが公開されました
navigation: true
description: >-
  LINEログイン v2.1やLINE
  SDKを使って取得したIDトークンを、ほかのバックエンドサーバーに送信して利用する場合は、バックエンドサーバーで受信したIDトークンをデコードして検証する必要があります。
meta: >-
  {"date":"2019-10-25 00:00 UTC","tags":"LINE Login, Social API, LINE SDK, iOS,
  Android","locale":"ja"}
path: /ja/_partials/news/2019/2019-10-25-id-token-verification-api
__hash__: 7LE_hApit-YDw7N4MB378AJS42wXAxi8akRYIuGuCkQ
seo:
  title: IDトークンを検証するエンドポイントが公開されました
  description: >-
    LINEログイン v2.1やLINE
    SDKを使って取得したIDトークンを、ほかのバックエンドサーバーに送信して利用する場合は、バックエンドサーバーで受信したIDトークンをデコードして検証する必要があります。
---

LINEログイン v2.1やLINE SDKを使って取得したIDトークンを、ほかのバックエンドサーバーに送信して利用する場合は、バックエンドサーバーで受信したIDトークンをデコードして検証する必要があります。

これまでは、任意の[JWTライブラリ](https://www.jwt.io/ja/libraries){rel="[\"nofollow\"]"}を使ったり、独自にデコードして検証するコードを書いたりする必要がありました。

本日リリースされた新しいエンドポイントを利用すると、HTTPリクエストを送信するだけでIDトークンを検証できます。

詳しくは、「[バックエンドサーバーにIDトークンを引き継ぐ](/docs/line-login/take-over-session/#transfer-id-token)」を参照してください。
