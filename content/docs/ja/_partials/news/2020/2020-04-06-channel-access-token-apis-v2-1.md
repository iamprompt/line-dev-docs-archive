---
title: チャネルアクセストークンv2.1をリリースしました
navigation: true
description: >-
  チャネルアクセストークンの最新版をリリースしました。新しいバージョンでは、トークンの有効期限を指定できるようになったほか、チャネルシークレットの代わりにJSON
  Web Token（JWT）を使用するようになったことでセキュリティが強化されています。
meta: '{"date":"2020-04-06 00:00 UTC","tags":"Messaging API","locale":"ja"}'
path: /ja/_partials/news/2020/2020-04-06-channel-access-token-apis-v2-1
__hash__: Pk_TaG7QWtpZoC4K-pkhBFplPkvSq86vSxRosH6tjAE
seo:
  title: チャネルアクセストークンv2.1をリリースしました
  description: >-
    チャネルアクセストークンの最新版をリリースしました。新しいバージョンでは、トークンの有効期限を指定できるようになったほか、チャネルシークレットの代わりにJSON
    Web Token（JWT）を使用するようになったことでセキュリティが強化されています。
---

チャネルアクセストークンの最新版をリリースしました。新しいバージョンでは、トークンの有効期限を指定できるようになったほか、チャネルシークレットの代わりにJSON Web Token（JWT）を使用するようになったことでセキュリティが強化されています。

チャネルアクセストークンの最新版の使用をお勧めします。

::admonition{title="JWTの生成方法" type="note"}
任意の[JWTライブラリ](https://www.jwt.io/ja/libraries){rel="[\"nofollow\"]"}を使用することも、自分でコードを書いて[アサーション署名キーからJWTを生成](/docs/messaging-api/generate-json-web-token/)することもできます。JWTの生成は、チャネルアクセストークンv2.1の発行に必要な手順です。
::

### 新しく追加されたAPI

- [チャネルアクセストークンv2.1を発行する](/reference/messaging-api/#issue-channel-access-token-v2-1)
- すべての有効なチャネルアクセストークンv2.1を取得する（【2020年7月29日更新】このエンドポイントは廃止されました。）
- [チャネルアクセストークンv2.1を取り消す](/reference/messaging-api/#revoke-channel-access-token-v2-1)

現在利用可能なチャネルアクセストークンの種類とその違いについては、『Messaging APIドキュメント』の「[チャネルアクセストークン](/docs/messaging-api/channel-access-tokens/)」を参照してください。
