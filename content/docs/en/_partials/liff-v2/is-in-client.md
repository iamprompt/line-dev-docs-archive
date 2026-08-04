---
title: Is In Client
navigation: true
description: ''
meta: '{}'
path: /en/_partials/liff-v2/is-in-client
__hash__: 1xhXKCeE4hB-KWKD1aq9B7pNu-YtZMvpsrPWgObtEB4
seo:
  description: ''
---

### liff.isInClient()

::reference-with-code
  :::reference-content
  Determines whether the LIFF app is running in a LIFF browser.

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
liff.isInClient();
```

#### Arguments

None

#### Return value

- `true`: Running in ::glossary-tooltip{glossary-id="liff-browser"}
[LIFF browser](/glossary/#liff-browser)
::
- `false`: Running in ::glossary-tooltip{glossary-id="external-browser"}
[external browser](/glossary/#external-browser)
::

 or ::glossary-tooltip{glossary-id="line-iab"}
[LINE's in-app browser](/glossary/#line-iab)
::
