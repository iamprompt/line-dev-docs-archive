---
title: LIFFアプリおよびサーバーでユーザー情報を使用する
navigation: true
description: ''
meta: '{"tags":null,"author":null,"last_updated":null,"source_language":"ja"}'
path: /ja/docs/liff/using-user-profile
__hash__: pXiCsLiSRhNoRU1HjZ9efeu60UEsMe62m-rc03uB_Yw
seo:
  title: LIFFアプリおよびサーバーでユーザー情報を使用する
  description: ''
---

# :page-title

:markdown-controlsユーザーが、LIFFブラウザでLIFFアプリを起動したり、外部ブラウザでLIFFアプリを起動して`liff.init`メソッドでログイン処理を行ったりすると、LIFFアプリはユーザーのプロフィール（ユーザーID、表示名、プロフィール画像、メールアドレス）を取得できます。

LIFFアプリで、これらのユーザー情報を正しく処理しないと、なりすましやその他の種類の攻撃に対して脆弱になります。

このページでは、LIFFアプリを開いたユーザーのユーザー情報を、LIFFアプリおよびサーバーで安全に使用する方法を説明します。

## ユーザー情報をサーバーで使用する

ユーザー情報をサーバーで使用する場合は、IDトークンまたはアクセストークンを、LIFFアプリからサーバーに送信してください。サーバーは、LIFFアプリが送信したトークンを、さらにLINEプラットフォームに送信することで、ユーザーのプロフィールを安全に取得できます。

- [IDトークンを送信してユーザー情報を取得する](#sending-id-token)
- [アクセストークンを送信してユーザー情報を取得する](#sending-access-token)

::admonition{title="ユーザー情報をサーバーに送信しないでください" type="warning"}
`liff.getDecodedIDToken()`および`liff.getProfile()`で取得したユーザーのプロフィールの詳細を、LIFFアプリからサーバーに送信しないでください。
::

::admonition{title="ヒント" type="tip"}
LIFF SDKは、LINEプラットフォームから取得したIDトークンおよびアクセストークンを検証しています。そのため、`liff.getIDToken()`および`liff.getAccessToken()`で取得したトークンは信用できます。
::

### IDトークンを送信してユーザー情報を取得する

[`liff.getIDToken()`](/reference/liff/#get-id-token)で取得したIDトークンをサーバーに送信した場合は、サーバーでIDトークンを検証する（[POST /oauth2/v2.1/verify](/reference/line-login/#verify-id-token)）ことで、ユーザーのプロフィール情報を安全に取得できます。

:interactive-svg{src="/media/liff/send-user-profile-via-id-token-ja.svg" border}### アクセストークンを送信してユーザー情報を取得する

[`liff.getAccessToken()`](/reference/liff/#get-access-token)で取得したアクセストークンをサーバーに送信した場合は、サーバーでアクセストークンの有効性を検証し（[GET /oauth2/v2.1/verify](/reference/line-login/#verify-access-token)）、さらにチャネルIDとアクセストークンの有効期間を検証することで、ユーザーのプロフィール情報を安全に取得できます（[GET /v2/profile](/reference/line-login/#get-user-profile)）。

なお、ユーザーが[LIFFアプリを閉じる](/docs/liff/developing-liff-apps/#behavior-when-closing-liff-app)と、有効期限が切れていなくてもアクセストークンは無効化されます。

:interactive-svg{src="/media/liff/send-user-profile-via-access-token-ja.svg" border}## ユーザー情報をLIFFアプリで使用する

[`liff.getDecodedIDToken()`](/reference/liff/#get-decoded-id-token)または[`liff.getProfile()`](/reference/liff/#get-profile)で取得したユーザーのプロフィール情報を使用してください。

:interactive-svg{src="/media/liff/use-user-profile-on-liff-app-ja.svg" border}::admonition{title="ユーザー情報をサーバーに送信しないでください" type="warning"}
`liff.getDecodedIDToken()`および`liff.getProfile()`で取得したユーザーのプロフィールの詳細を、LIFFアプリからサーバーに送信しないでください。
::
