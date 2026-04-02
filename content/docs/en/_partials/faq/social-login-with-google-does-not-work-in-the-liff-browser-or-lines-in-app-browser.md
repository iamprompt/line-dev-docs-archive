---
title: >-
  When trying social login with google account in the LIFF browser or LINE's
  in-app browser, an error with a status code 403 and an error code
  disallowed_useragent will be displayed.
navigation: true
description: >-
  In the LIFF browser and LINE's in-app browser, the user's social login with
  google account isn't allowed. This is because Google's OAuth 2.0 Policies
  disallow authorization requests from WebView to Google.
meta: >-
  {"date":"2022-09-15 00:00 UTC","tags":"liff, line-mini-app,
  line-app","priority":1000,"locale":"en"}
path: >-
  /en/_partials/faq/social-login-with-google-does-not-work-in-the-liff-browser-or-lines-in-app-browser
__hash__: kGzMZ5MGwyF_EwHhLa3dCd-tuTi1k7yE_uNkEt76wGE
seo:
  title: >-
    When trying social login with google account in the LIFF browser or LINE's
    in-app browser, an error with a status code 403 and an error code
    disallowed_useragent will be displayed.
  description: >-
    In the LIFF browser and LINE's in-app browser, the user's social login with
    google account isn't allowed. This is because Google's OAuth 2.0 Policies
    disallow authorization requests from WebView to Google.
---

In :glossary-tooltip[[the LIFF browser](/glossary/#liff-browser)]{glossary-id="liff-browser"} and :glossary-tooltip[[LINE's in-app browser](/glossary/#line-iab)]{glossary-id="line-iab"}, the user's social login with google account isn't allowed. This is because Google's [OAuth 2.0 Policies](https://developers.google.com/identity/protocols/oauth2/policies#browsers){rel="[\"nofollow\"]"} disallow authorization requests from WebView to Google.

Therefore, when the user tries social login with google account in the LIFF browser or LINE's in-app browser, an error with a status code `403` and an error code [`disallowed_useragent`](https://developers.google.com/identity/protocols/oauth2/web-server#authorization-errors-disallowed-useragent){rel="[\"nofollow\"]"} will be displayed.
