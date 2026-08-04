---
title: >-
  Why can't I open a page and an error message appears in the LIFF browser or
  LINE's in-app browser?
navigation: true
description: >-
  In the LIFF browser and LINE's in-app browser, if there is a problem with the
  SSL/TLS certificate on a network path, an error may occur and you may not be
  able to open the page. The following are examples of the error message that
  appears when the page doesn't open:
meta: >-
  {"date":"2023-06-01 00:00 UTC","tags":"liff, line-mini-app,
  line-app","priority":1000,"locale":"en"}
path: >-
  /en/_partials/faq/why-cant-i-open-a-page-in-the-liff-browser-or-lines-in-app-browser
__hash__: 8UoWgTn2gP_gTGKN-_MZt5YafeYy0pPJIC3xgfk75lQ
seo:
  title: >-
    Why can't I open a page and an error message appears in the LIFF browser or
    LINE's in-app browser?
  description: >-
    In the LIFF browser and LINE's in-app browser, if there is a problem with
    the SSL/TLS certificate on a network path, an error may occur and you may
    not be able to open the page. The following are examples of the error
    message that appears when the page doesn't open:
---

In the :glossary-tooltip[[LIFF browser](/glossary/#liff-browser)]{glossary-id="liff-browser"} and :glossary-tooltip[[LINE's in-app browser](/glossary/#line-iab)]{glossary-id="line-iab"}, if there is a problem with the SSL/TLS certificate on a network path, an error may occur and you may not be able to open the page. The following are examples of the error message that appears when the page doesn't open:

- This connection isn't private
- Unable to process your request due to a temporary error. Please try again.
- An unknown error occurred. Please try again later.
- Unable to open page. Server not found.
- This site is potentially unsafe. Please close this screen.

Note that even if there is no problem with the certificate of an accessed page, you may receive an error message if there is a certificate problem when loading external resources contained on the page. For example, if you specify a path on a server with a certificate problem in the `src` attribute of a `<script>` element as shown below, you may receive an error message.

```html
<script charset="utf-8" src="{A path on a server with a certificate problem}"></script>
```
