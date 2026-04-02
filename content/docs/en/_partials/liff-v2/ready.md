---
title: Ready
navigation: true
description: ''
meta: '{}'
path: /en/_partials/liff-v2/ready
__hash__: 0fnYuH0lDuVyAcJAirdocIvTcqbdWZTAsFYjhGzcZXs
seo:
  description: ''
---

### liff.ready

::reference-with-code
  :::reference-content
  A property holding the `Promise` object that resolves when you run [`liff.init()`](#initialize-liff-app) for the first time after starting the LIFF app.

  If you use `liff.ready`, you can execute any process after the completion of `liff.init()`.

    ::::admonition
    ---
    title: This property can be used before the LIFF app is initialized
    type: tip
    ---
    You can use `liff.ready` even before the initialization of the LIFF app by `liff.init()` has finished.
    ::::
  :::

  :::reference-code
  *Example*

    ::::code-tabs
      :::::tab{lang="javascript"}
      ```javascript
      liff.ready.then(() => {
        // do something you want when liff.init finishes
      });
      ```
      :::::
    ::::
  :::
::

::admonition{title="Note" type="note"}
If `liff.init()` fails, `liff.ready` will not be rejected. Also, it doesn't return a `LiffError` object.
::
