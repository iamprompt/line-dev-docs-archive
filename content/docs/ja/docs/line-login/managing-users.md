---
title: ユーザーを管理する
navigation: true
description: null
meta: '{"tags":null,"author":null,"last_updated":null,"source_language":null}'
path: /ja/docs/line-login/managing-users
__hash__: ma8n8RBrD_IOGJH3u6g-EJB4Q-bzduhUGebCe60j90Q
seo:
  title: ユーザーを管理する
  description: null
---

# :page-title

:markdown-controlsLINEログインしたユーザーを管理する方法を説明します。

## ユーザープロフィールを取得する

[アクセストークン](/docs/line-login/managing-access-tokens/)で特定されるユーザーのプロフィール情報を取得できます。プロフィール情報には、ユーザーID、表示名、プロフィール画像、およびステータスメッセージが含まれます。

::admonition{title="アクセストークンのスコープを確認してください" type="note"}
ユーザーのプロフィール情報を取得するには、`profile`のスコープを持つアクセストークンが必要です。詳しくは、「[認可を要求する](/docs/line-login/integrate-line-login/#making-an-authorization-request)」と「[スコープ](/docs/line-login/integrate-line-login/#scopes)」を参照してください。
::

リクエストの例：

```sh
curl -v -X GET https://api.line.me/v2/profile \
-H 'Authorization: Bearer {access token}'
```

レスポンスの例：

```json
{
  "userId":"U4af4980629...",
  "displayName":"Brown",
  "pictureUrl":"https://profile.line-scdn.net/abcdefghijklmn",
  "statusMessage":"Hello, LINE!"
}
```

詳しくは、『LINEログイン v2.1 APIリファレンス』の「[ユーザープロフィールを取得する](/reference/line-login/#get-user-profile)」を参照してください。

::admonition{title="サービスでユーザーを識別するには" type="tip"}
ユーザーを識別するには、ユーザーが変更できない:glossary-tooltip[[ユーザーID](/glossary/#user-id)]{glossary-id="user-id"}を使用してください。

ユーザーは、LINEに設定した表示名、プロフィール画像、およびステータスメッセージをいつでも変更できます。
これらの情報はユーザーを識別する目的では、利用できません。
::

::admonition{title="IDトークンを使ってユーザーを識別する" type="tip"}
アクセストークンと一緒に取得したIDトークンを使って、ユーザーのプロフィール情報とメールアドレスを取得できます。
詳しくは、『LINEログイン v2.1 APIリファレンス』の「[IDトークンを検証する](/reference/line-login/#verify-id-token)」を参照してください。
::

## ユーザーをログアウトする

より良いユーザー体験のために、ユーザーがアプリからログアウトする操作を提供することをお勧めします。

ユーザーがアプリからログアウトする操作を行ったときに、ユーザーの[アクセストークン](/docs/line-login/managing-access-tokens/)を取り消し、アプリ内のすべてのユーザーデータを削除してください。

アクセストークンを取り消すリクエストの例：

```sh
curl -v -X POST 'https://api.line.me/oauth2/v2.1/revoke' \
-H "Content-Type:application/x-www-form-urlencoded" \
-d "client_id={channel id}&client_secret={channel secret}&access_token={access token}"
```

詳しくは、『LINEログイン v2.1 APIリファレンス』の「[アクセストークンを取り消す](/reference/line-login/#revoke-access-token)」を参照してください。
