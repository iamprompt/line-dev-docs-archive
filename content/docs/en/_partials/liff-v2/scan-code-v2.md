---
title: Scan Code V2
navigation: true
description: ''
meta: '{}'
path: /en/_partials/liff-v2/scan-code-v2
__hash__: YsPh0u9sSUcB2kPw3XL5nA6o40bLjSeqgng6QfbDnTs
seo:
  description: ''
---

### liff.scanCodeV2()

::reference-with-code
  :::reference-content
  Launch the 2D code reader and obtain string. To activate the 2D code reader, turn on **Scan QR** on the [LINE Developers Console](/console/).

    ::::admonition
    ---
    title: Operating environments of liff.scanCodeV2()
    type: note
    ---
    `liff.scanCodeV2()` works in these environments.

    - iOS: iOS 14.3 or later
    - Android: All versions
    - External browser: Web browsers that support [WebRTC API](https://developer.mozilla.org/en-US/docs/Web/API/WebRTC_API){rel="[\"nofollow\"]"}

    | OS            | Version      | LIFF browser | External browser |
    | ------------- | ------------ | ------------ | ---------------- |
    | iOS           | 11-14.2      | ❌            | ✅ *1             |
    | 14.3 or later | ✅ *2         | ✅ *1         |                  |
    | Android       | All versions | ✅ *2         | ✅ *1             |
    | PC            | All versions | ❌            | ✅ *1             |

    *1 You can only use web browsers that support [WebRTC API](https://developer.mozilla.org/en-US/docs/Web/API/WebRTC_API){rel="[\"nofollow\"]"}.

    *2 Only available when the screen size of the LIFF browser is `Full`. For details, see [Size of the LIFF browser](/docs/liff/overview/#screen-size) in the LIFF documentation.
    ::::

    ::::admonition
    ---
    title: Turn [Scan QR] on to launch the 2D code reader
    type: note
    ---
    When [Adding a LIFF app to your channel](/docs/liff/registering-liff-apps/), turn on **Scan QR**. The **Scan QR** setting can be updated from the LIFF tab on the [LINE Developers Console](/console/), even after adding a LIFF app to your channel.
    ::::

    ::::admonition
    ---
    title: The operation specification of liff.scanCodeV2()
    type: note
    ---
    `liff.scanCodeV2()` internally uses an external library called [jsQR](https://github.com/cozmo/jsQR){rel="[\"nofollow\"]"}. Therefore, the 2D code reader to be launched when the `liff.scanCodeV2()` method is executed depends on the operation specification of [jsQR](https://github.com/cozmo/jsQR){rel="[\"nofollow\"]"}. Libraries used may be updated or changed without notice.
    ::::
  :::

  :::reference-code
  *Example*

    ::::code-tabs
      :::::tab{lang="javascript"}
      ```javascript
      liff
        .scanCodeV2()
        .then((result) => {
          // result = { value: "" }
        })
        .catch((error) => {
          console.log("error", error);
        });
      ```
      :::::
    ::::
  :::
::

#### Syntax

```javascript
liff.scanCodeV2();
```

#### Arguments

None

#### Return value

Returns a `Promise` object.

When the string is read by the 2D code reader, `Promise` is resolved and the object containing the character string is passed.

::parameter-table
  :::parameter-table-entry
  #undefined
  value

  #undefined
  String

  String scanned by the 2D code reader
  :::
::

##### Error response

When the `Promise` is rejected, [`LiffError`](#liff-errors) is passed.
