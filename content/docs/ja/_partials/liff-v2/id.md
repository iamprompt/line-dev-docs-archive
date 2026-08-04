---
title: Id
navigation: true
description: ''
meta: '{}'
path: /ja/_partials/liff-v2/id
__hash__: hDpB51cGXqciA28eVV854xvWTyKseVsHnvnxihIKXmY
seo:
  description: ''
---

### liff.id

::reference-with-code
  :::reference-content
  [`liff.init()`](#initialize-liff-app)に渡したLIFFアプリID（`String`型）を保持するプロパティです。

  `liff.init()`を実行するまでは、`null`です。
  :::

  :::reference-code
  *例*

    ::::code-tabs
      :::::tab{lang="javascript"}
      ```javascript
      const liffId = "my-liff-id";
      liff.init({ liffId });

      // liff.id equals to liffId
      ```
      :::::
    ::::
  :::
::
