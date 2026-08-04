---
title: Scan Code
navigation: true
description: ''
meta: '{}'
path: /en/_partials/liff-v2/scan-code
__hash__: CK0tNnBcXzCP9CeW3bM2aBPUQ4KsPMdCgHUBImi8aUc
seo:
  description: ''
---

### liff.scanCode()

::reference-with-code
  :::reference-content
    ::::admonition{title="liff.scanCode() method deprecated" type="note"}
    The traditional `liff.scanCode()` method has been :glossary-tooltip[[deprecated](/glossary/#deprecated)]{glossary-id="deprecated"}. We recommend using the [`liff.scanCodeV2()`](#scan-code-v2) method for implementing a 2D code reader.
    ::::

    
  Starts a 2D code reader and gets the string read by the user. To start the 2D code reader, turn on `ScanQR` on the [LINE Developers Console](/console/).

    ::::admonition{title="Not available on LINE for iOS" type="note"}
    `liff.scanCode()` works in these environments.

    | OS      | Version      | LIFF browser | External browser |
    | ------- | ------------ | ------------ | ---------------- |
    | iOS     | All versions | ❌            | ❌                |
    | Android | All versions | ✅            | ❌                |
    | PC      | All versions | ❌            | ❌                |

    Due to technical issues, `liff.scanCode` is `undefined` in LINE for iOS. Use it after confirming that the function exists, as shown in the sample code. To use the 2D code reader with LINE for iOS or external browsers, see [`liff.scanCodeV2()`](/reference/liff/#scan-code-v2).
    ::::

    ::::admonition
    ---
    title: Turn [Scan QR] on to launch the 2D code reader
    type: note
    ---
    - When [Adding a LIFF app to your channel](/docs/liff/registering-liff-apps/), turn on **Scan QR**. The **Scan QR** setting can be updated from the LIFF tab on the [LINE Developers Console](/console/), even after adding a LIFF app to your channel.
    - You can't use `liff.scanCode()` in an external browser.
    ::::
  :::

  :::reference-code
  *Example*

    ::::code-tabs
      :::::tab{lang="javascript"}
      ```javascript
      if (liff.scanCode) {
        liff.scanCode().then((result) => {
          // result = { value: "" }
        });
      }
      ```
      :::::
    ::::
  :::
::

#### Syntax

```javascript
liff.scanCode();
```

#### Arguments

None

#### Return value

Returns a `Promise` object.

When reading a string by a 2D code reader, the `Promise` is resolved and the object containing the string read is passed.

::parameter-table
  :::parameter-table-entry
  #undefined
  value

  #undefined
  String

  String read by the 2D code reader
  :::
::
