---
title: Get Os
navigation: true
description: ''
meta: '{}'
path: /en/_partials/liff-v2/get-os
__hash__: pM01-Rnmol3vcYHPIW4F2_J8tWV3Jf0L3ahBroRVAKI
seo:
  description: ''
---

### liff.getOS()

::reference-with-code
  :::reference-content
  Gets the environment in which the user is running the LIFF app.

    ::::admonition
    ---
    title: This method can be used before the LIFF app is initialized
    type: tip
    ---
    You can use this method even before the initialization of the LIFF app by `liff.init()` has finished.
    ::::
  :::
::

#### Syntax

```javascript
liff.getOS();
```

#### Arguments

None

#### Return value

The environment in which the user is running the LIFF app is returned as a string. Since the return value is based on the name of the OS in the user agent string, the return value is independent of the browser type (:glossary-tooltip[[LIFF browser](/glossary/#liff-browser)]{glossary-id="liff-browser"}, :glossary-tooltip[[LINE's in-app browser](/glossary/#line-iab)]{glossary-id="line-iab"}, :glossary-tooltip[[external browser](/glossary/#external-browser)]{glossary-id="external-browser"}).

For example, if the user is using iOS, `ios` will be returned, regardless of whether the user is using LIFF browser or Safari.

| Return value | Description          |
| ------------ | -------------------- |
| ios          | iOS or iPadOS        |
| android      | Android              |
| web          | Other than the above |

For more information about LIFF app supported operating systems and browsers, see [Operating environment](/docs/liff/overview/#operating-environment).
