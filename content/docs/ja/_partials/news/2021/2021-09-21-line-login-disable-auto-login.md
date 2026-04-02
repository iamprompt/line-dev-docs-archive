---
title: LINEログインで自動ログインを無効にするパラメータが追加されました
navigation: true
description: >-
  2021年7月12日にお知らせしたとおり、LINEログインにおいて、自動ログインとシングルサインオン（SSO）によるログインが両方利用できる環境では、自動ログインが優先して動作します。
meta: '{"date":"2021-09-21 00:00 UTC","tags":"LINE Login","locale":"ja"}'
path: /ja/_partials/news/2021/2021-09-21-line-login-disable-auto-login
__hash__: giE7jwkYLqstGyevZGqr4927NM8ksty3Jk4iYyw7MH4
seo:
  title: LINEログインで自動ログインを無効にするパラメータが追加されました
  description: >-
    2021年7月12日にお知らせしたとおり、LINEログインにおいて、自動ログインとシングルサインオン（SSO）によるログインが両方利用できる環境では、自動ログインが優先して動作します。
---

[2021年7月12日](/news/2021/07/12/auto-login-takes-precedence-over-sso/)にお知らせしたとおり、LINEログインにおいて、自動ログインとシングルサインオン（SSO）によるログインが両方利用できる環境では、自動ログインが優先して動作します。

2021年9月21日より、自動ログインではなく、SSOによるログインを動作させたい場合は、[ユーザーに認証と認可を要求する](/docs/line-login/integrate-line-login/#making-an-authorization-request)際、認可URLにクエリパラメータ`disable_auto_login=true`を付与することで自動ログインを無効にできます。

### 仕様

`disable_auto_login`パラメータを使用することで、自動ログインとSSOによるログインが両方利用できる環境であっても、ログインするユーザーに対して明示的にSSOによるログインを提供できます。

![明示的にSSOによるログインが提供可能](/media/line-login/integrate-login-web/sso.png){className="[\"w-fix-360\"]"}

これまでも、iOSであれば認可URLに`disable_ios_auto_login`パラメータを付与することで自動ログインを無効にできましたが、今後はiOS、Androidの両OSで`disable_auto_login`パラメータを使用できます。

詳しくは、『LINEログインドキュメント』の「[ユーザーに認証と認可を要求する](/docs/line-login/integrate-line-login/#making-an-authorization-request)」を参照してください。

::admonition{title=""disable_auto_login"パラメータの使用を推奨します" type="tip"}
`disable_ios_auto_login`パラメータは引き続き使用できますが、OSの区別なく動作する`disable_auto_login`パラメータの使用を推奨します。
::

### `disable_auto_login`パラメータの使用事例

LINEログインを組み込んだウェブアプリにおいて、プライベートブラウジングが有効な場合には自動ログインに失敗することがあります。

このような自動ログインに失敗する環境において、LINEログインに失敗したユーザーに、自動ログインが有効な認可URLで再ログインを促してしまうと、繰り返しログインに失敗し続けることになります。一度自動ログインに失敗したら、`disable_auto_login`パラメータを使用し、自動ログインを無効にした認可URLで再ログインを促すことで、ログインの連続失敗を避けることができます。

![自動ログインに失敗した時の簡易フロー図](/media/news/disable-auto-login-parameter-ja.png){className="[\"w-fix-720\",\"border\"]"}

詳しくは、『LINEログインドキュメント』の「[自動ログインに失敗した時の対応方法](/docs/line-login/how-to-handle-auto-login-failure/)」を参照してください。
