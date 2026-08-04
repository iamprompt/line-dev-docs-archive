---
title: Id
navigation: true
description: ''
meta: '{}'
path: /en/_partials/liff-v2/id
__hash__: AoaoIBGpOvkwtIt9K-1y2JtJdJ9erhBvC0zc5Os27Ns
seo:
  description: ''
---

### liff.id

::reference-with-code
  :::reference-content
  The property that holds the LIFF app ID (`String` type) passed to [`liff.init()`](#initialize-liff-app).

  The value of `liff.id` is `null` until you run `liff.init()`.
  :::

  :::reference-code
  *Example*

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
