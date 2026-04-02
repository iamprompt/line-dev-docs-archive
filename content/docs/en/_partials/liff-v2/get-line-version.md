---
title: Get Line Version
navigation: true
description: ''
meta: '{}'
path: /en/_partials/liff-v2/get-line-version
__hash__: ZYrK50YiBkrkJ0u2ezlXYRLWkm_I4er6P76WGkvDfXc
seo:
  description: ''
---

### liff.getLineVersion()

::reference-with-code
  :::reference-content
  Gets the user's LINE version.

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
liff.getLineVersion();
```

#### Arguments

None

#### Return value

If a user opens the LIFF app using a LIFF browser, the LINE version of the user is returned as a string. If a user opens the LIFF app using an external browser, `null` is returned.
