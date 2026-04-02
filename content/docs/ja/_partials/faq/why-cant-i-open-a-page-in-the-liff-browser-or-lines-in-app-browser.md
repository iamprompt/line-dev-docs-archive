---
title: LIFFブラウザやLINE内ブラウザでエラーメッセージが表示され、ページが開けないことがあるのはなぜですか？
navigation: true
description: >-
  LIFFブラウザやLINE内ブラウザでは、ネットワーク経路上でSSL/TLS証明書に問題がある場合、エラーとなりページが開けないことがあります。以下は、ページが開けなかった場合に表示されるエラーメッセージの例です。
meta: >-
  {"date":"2023-06-01 00:00 UTC","tags":"liff, line-mini-app,
  line-app","priority":1000,"locale":"ja"}
path: >-
  /ja/_partials/faq/why-cant-i-open-a-page-in-the-liff-browser-or-lines-in-app-browser
__hash__: XrVv9Z5exeOm5duFaxXAdXQ5Z8NCjcQELKFnAhBS77M
seo:
  title: LIFFブラウザやLINE内ブラウザでエラーメッセージが表示され、ページが開けないことがあるのはなぜですか？
  description: >-
    LIFFブラウザやLINE内ブラウザでは、ネットワーク経路上でSSL/TLS証明書に問題がある場合、エラーとなりページが開けないことがあります。以下は、ページが開けなかった場合に表示されるエラーメッセージの例です。
---

:glossary-tooltip[[LIFFブラウザ](/glossary/#liff-browser)]{glossary-id="liff-browser"}や:glossary-tooltip[[LINE内ブラウザ](/glossary/#line-iab)]{glossary-id="line-iab"}では、ネットワーク経路上でSSL/TLS証明書に問題がある場合、エラーとなりページが開けないことがあります。以下は、ページが開けなかった場合に表示されるエラーメッセージの例です。

- このサイトは安全ではありません
- 一時的なエラーによりリクエストが完了しませんでした。もう一度お試しください。
- 正常に処理できませんでした。しばらく経ってからもう一度お試しください。
- ページを開けませんサーバーが見つかりません
- このサイトは安全ではないため閉じてください。

なお、アクセスしたページの証明書に問題がなくても、ページに含まれる外部リソースの読み込みで証明書に問題があった場合、エラーメッセージが表示されることがあるため注意してください。たとえば、以下のように`<script>`要素の`src`属性に、証明書に問題があるサーバー上のパスを指定した場合、エラーメッセージが表示されることがあります。

```html
<script charset="utf-8" src="{証明書に問題があるサーバー上のパス}"></script>
```
