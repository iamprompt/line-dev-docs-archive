---
title: Close Window
navigation: true
description: ''
meta: '{}'
path: /en/_partials/liff-v2/close-window
__hash__: AdN4n8l6dBSmudLaR50nxXVbHgQyHG9EFHrpWPl-ChA
seo:
  description: ''
---

### liff.closeWindow()

::reference-with-code
  :::reference-content
  Closes the LIFF app.

  The behavior when closing the LIFF app depends on the LINE app version and the settings of the LIFF app. For more information, see [Behavior when closing the LIFF app](/docs/liff/developing-liff-apps/#behavior-when-closing-liff-app) in the LIFF documentation.

    ::::admonition
    ---
    title: This method can be used before the LIFF app is initialized
    type: tip
    ---
    To use the `liff.closeWindow()` method before the initialization of the LIFF app by `liff.init()` has finished, your LIFF SDK version must be v2.4.0 or later.
    ::::

    ::::admonition{title="Note" type="note"}
    `liff.closeWindow()` isn't guaranteed to work in an external browser.
    ::::
  :::

  :::reference-code
  *Example*

    ::::code-tabs
      :::::tab{lang="javascript"}
      ```javascript
      liff.closeWindow();
      ```
      :::::
    ::::
  :::
::

#### Syntax

```javascript
liff.closeWindow();
```

#### Arguments

None

#### Return value

None
