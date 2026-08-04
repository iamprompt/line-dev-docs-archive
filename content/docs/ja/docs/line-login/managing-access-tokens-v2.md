---
title: アクセストークンを管理する（LINEログイン v2.0）
navigation: true
description: null
meta: '{"tags":null,"author":null,"last_updated":null,"source_language":null}'
path: /ja/docs/line-login/managing-access-tokens-v2
__hash__: REVsikZhkqqTMWfI3yD2N64E37__6Zp-izwq9CqVeJU
seo:
  title: アクセストークンを管理する（LINEログイン v2.0）
  description: null
---

# :page-title

:markdown-controls:partial{content="documentation-partials/line-login/line-login-v2-is-deprecated/"}LINEログインAPIで管理するアクセストークンは、LINEプラットフォームに保存されているユーザー情報（例：ユーザーID、表示名、プロフィール画像、およびステータスメッセージ）を利用することを、アプリが許可されていることを示します。

ここでは、[LINEログイン v2.0](/docs/line-login/overview/#versions)のエンドポイントを使ってアクセストークンを管理する方法について説明します。

## ユーザーのアクセストークンを取得する

ユーザーの認証が終わると、LINEプラットフォームからアクセストークンが返されます。

この時点で、ユーザー情報を利用することを、アプリが許可されていると考えることができます。

詳しくは、以下の記事を参照してください。

**LINEログイン：**

- [ウェブアプリにLINEログインを組み込む（LINEログイン v2.0）](/docs/line-login/integrate-line-login-v2/)

::admonition{title="アクセストークンの有効期間" type="note"}
アクセストークンは発行後30日間有効です。アクセストークンを含むレスポンスの`expires_in`プロパティに、有効期間（秒）が含まれます。
::

### リフレッシュトークン

ユーザーの認証が終わったときに、アクセストークンと共にリフレッシュトークンが返されます。

アクセストークンの有効期限が切れたときは、リフレッシュトークンを使用して新しいアクセストークンを取​得できます。詳しくは、『LINEログイン v2.0 APIリファレンス』の「[アクセストークンを更新する](/reference/line-login-v2/#refresh-access-token)」を参照してください。

::admonition{title="リフレッシュトークンの有効期間" type="note"}
リフレッシュトークンは、アクセストークンが発行されてから最長90日間有効です。リフレッシュトークンの有効期限が切れた場合は、ユーザーに再度ログインを要求して新しいアクセストークンを生成する必要があります。
::

## アクセストークンを検証する

アプリやほかのサーバーから受信したアクセストークンをサーバーで使用する場合は、アクセストークンを検証してください。

アクセストークンの検証方法は、『LINEログイン v2.0 APIリファレンス』の「[アクセストークンを検証する](/reference/line-login-v2/#verify-access-token)」を参照してください。

::admonition{title="アクセストークンの検証後、さらに確認が必要です" type="note"}
LINEログインAPIによるアクセストークンの検証に成功すると、レスポンスには`client_id`プロパティ（チャネルID）と`expires_in`プロパティ（アクセストークンの有効期間）が含まれます。アクセストークンを使用する前に、各プロパティが以下の条件を満たすことを確認してください。

| プロパティ        | 条件                                 |
| ------------ | ---------------------------------- |
| `client_id`  | アプリにリンクされているLINEログインチャネルのチャネルIDと同じ |
| `expires_in` | 正の値                                |
::
