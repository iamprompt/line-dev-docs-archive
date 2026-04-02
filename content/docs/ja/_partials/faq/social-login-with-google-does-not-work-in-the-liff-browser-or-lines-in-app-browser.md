---
title: >-
  LIFFブラウザやLINE内ブラウザで、Googleアカウントによるソーシャルログインを行おうとすると、ステータスコードが403、エラーコードがdisallowed_useragentのエラーが表示されます。
navigation: true
description: >-
  LIFFブラウザやLINE内ブラウザでは、Googleアカウントによるソーシャルログインができません。これは、GoogleのOAuth 2.0
  Policiesにおいて、WebViewからGoogleへの認可リクエストが禁止されているためです。
meta: >-
  {"date":"2022-09-15 00:00 UTC","tags":"liff, line-mini-app,
  line-app","priority":1000,"locale":"ja"}
path: >-
  /ja/_partials/faq/social-login-with-google-does-not-work-in-the-liff-browser-or-lines-in-app-browser
__hash__: zXMlkrLgHC3aLs3c7rpYGwI8cvkEYXtWB9FgZdnihQk
seo:
  title: >-
    LIFFブラウザやLINE内ブラウザで、Googleアカウントによるソーシャルログインを行おうとすると、ステータスコードが403、エラーコードがdisallowed_useragentのエラーが表示されます。
  description: >-
    LIFFブラウザやLINE内ブラウザでは、Googleアカウントによるソーシャルログインができません。これは、GoogleのOAuth 2.0
    Policiesにおいて、WebViewからGoogleへの認可リクエストが禁止されているためです。
---

:glossary-tooltip[[LIFFブラウザ](/glossary/#liff-browser)]{glossary-id="liff-browser"}や:glossary-tooltip[[LINE内ブラウザ](/glossary/#line-iab)]{glossary-id="line-iab"}では、Googleアカウントによるソーシャルログインができません。これは、Googleの[OAuth 2.0 Policies](https://developers.google.com/identity/protocols/oauth2/policies#browsers){rel="[\"nofollow\"]"}において、WebViewからGoogleへの認可リクエストが禁止されているためです。

そのため、LIFFブラウザやLINE内ブラウザで、Googleアカウントによるソーシャルログインを行おうとすると、ステータスコードが`403`、エラーコードが[`disallowed_useragent`](https://developers.google.com/identity/protocols/oauth2/web-server#authorization-errors-disallowed-useragent){rel="[\"nofollow\"]"}のエラーが表示されます。
