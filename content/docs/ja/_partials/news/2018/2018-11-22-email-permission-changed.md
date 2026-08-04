---
title: LINEログインの権限付与への同意画面の動作が変わりました
navigation: true
description: LINEログインでユーザーのメールアドレスの取得権限を要求する場合、ログイン時にユーザーに表示される、アプリへの権限付与に同意する画面の動作が変わりました。
meta: '{"date":"2018-11-22 00:00 UTC","tags":"LINE Login","locale":"ja"}'
path: /ja/_partials/news/2018/2018-11-22-email-permission-changed
__hash__: eqRupE47Fabh8coupIWa1gaTJQXIj823wC95LrgSxag
seo:
  title: LINEログインの権限付与への同意画面の動作が変わりました
  description: >-
    LINEログインでユーザーのメールアドレスの取得権限を要求する場合、ログイン時にユーザーに表示される、アプリへの権限付与に同意する画面の動作が変わりました。
---

LINEログインでユーザーのメールアドレスの取得権限を要求する場合、ログイン時にユーザーに表示される、アプリへの権限付与に同意する画面の動作が変わりました。

以前は、ユーザーがログインすると、`prompt`パラメータの指定の有無にかかわらず、ログインするたびに同意画面が表示されました。現在は、ユーザーのメールアドレスが変わらない限り、ユーザーが同意してから一定の期間は同意画面が表示されなくなりました。

詳しくは、「[認証のプロセス](/docs/line-login/integrate-line-login/#authentication-process)」を参照してください。
