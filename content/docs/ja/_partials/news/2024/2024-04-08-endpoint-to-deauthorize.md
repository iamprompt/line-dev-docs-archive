---
title: LINEログイン開発ガイドラインに則り、ユーザー退会時の連動アプリに対する権限取消をお願いします
navigation: true
description: LINEログインにおいて、ユーザーが連動アプリに対して認可した権限を、ユーザーの代わりに取り消すためのエンドポイントを追加しました。
meta: >-
  {"date":"2024-04-08 00:00 UTC","tags":"line-login, liff,
  line-mini-app","locale":"ja"}
path: /ja/_partials/news/2024/2024-04-08-endpoint-to-deauthorize
__hash__: kwSUctsmtydnI4BnZjJigpyZSFZa3QUJDvCSbelfjSc
seo:
  title: LINEログイン開発ガイドラインに則り、ユーザー退会時の連動アプリに対する権限取消をお願いします
  description: LINEログインにおいて、ユーザーが連動アプリに対して認可した権限を、ユーザーの代わりに取り消すためのエンドポイントを追加しました。
---

LINEログインにおいて、ユーザーが連動アプリに対して認可した権限を、ユーザーの代わりに取り消すためのエンドポイントを追加しました。

### 追加されたエンドポイント

- [連動アプリに認可した権限を取り消す](/reference/line-login/#deauthorize)

これに伴い、[LINEログイン開発ガイドライン](/docs/line-login/development-guidelines/)に必須事項として「[ユーザー退会時の連動アプリに対する権限取消](/docs/line-login/development-guidelines/#deauthorize)」を追加しました。LINEログインを組み込んだ連動アプリ（ウェブサイトやスマートフォンアプリなど）の開発を行う際は、LINEログイン開発ガイドラインをよく読み、記載の内容に従ってください。

なお連動アプリに対して認可した権限をユーザー自身が取り消す方法については、『LINEログインドキュメント』の「[ユーザーによる連動アプリの管理について](/docs/line-login/managing-authorized-apps/)」を参照してください。
