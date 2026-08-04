---
title: Get Version
navigation: true
description: ''
meta: '{}'
path: /en/_partials/liff-v2/get-version
__hash__: okfpDdaPAlJS8y87ZjZoYryiteyXplf1vZedHCe0hV4
seo:
  description: ''
---

### liff.getVersion()

::reference-with-code
  :::reference-content
  Gets the version of the LIFF SDK.

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
liff.getVersion();
```

#### Arguments

None

#### Return value

The version of the LIFF SDK is returned as a string.
