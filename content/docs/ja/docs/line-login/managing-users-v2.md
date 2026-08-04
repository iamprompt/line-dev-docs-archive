---
title: ユーザーを管理する（LINEログイン v2.0）
navigation: true
description: null
meta: '{"tags":null,"author":null,"last_updated":null,"source_language":null}'
path: /ja/docs/line-login/managing-users-v2
__hash__: ZBecuE8byLxTsrG3VcHRKf9w3MrVk6yRj2TgWpQPCGs
seo:
  title: ユーザーを管理する（LINEログイン v2.0）
  description: null
---

# :page-title

:markdown-controls:partial{content="documentation-partials/line-login/line-login-v2-is-deprecated/"}ここでは、[LINEログイン v2.0](/docs/line-login/overview/#versions)のエンドポイントを使って、LINEログインしたユーザーを管理する方法を説明します。

## ユーザープロフィールを取得する

[アクセストークン](/docs/line-login/managing-access-tokens/)で特定されるユーザーのプロフィール情報を取得できます。プロフィール情報には、ユーザーID、表示名、プロフィール画像、およびステータスメッセージが含まれます。

ユーザープロフィールの取得方法は、LINEログイン v2.0とLINEログイン v2.1で共通です。詳しくは、「[ユーザープロフィールを取得する](/docs/line-login/managing-users/#get-profile)」を参照してください。

## ユーザーをログアウトする

::admonition{title="注意" type="note"}
ここでは、LINEログイン v2.0のエンドポイントを使ってユーザーをログアウトする方法について説明します。最新のLINEログイン v2.1を使う方法については、「[ユーザーをログアウトする](/docs/line-login/managing-users/#logout)」を参照してください。
::

より良いユーザー体験のために、ユーザーがアプリからログアウトする操作を提供することをお勧めします。

ユーザーがアプリからログアウトする操作を行ったときに、ユーザーの[アクセストークン](/docs/line-login/managing-access-tokens/)を取り消し、アプリ内のすべてのユーザーデータを削除してください。

アクセストークンを取り消すリクエストの例：

```sh
curl -v -X POST https://api.line.me/v2/oauth/revoke \
-H 'Content-Type: application/x-www-form-urlencoded' \
--data-urlencode 'refresh_token={refresh token}'
```

詳しくは、『LINEログイン v2.0 APIリファレンス』の「[アクセストークンを取り消す](/reference/line-login-v2/#revoke-access-token)」を参照してください。
