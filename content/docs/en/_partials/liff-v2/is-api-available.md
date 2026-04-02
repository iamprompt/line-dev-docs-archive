---
title: Is Api Available
navigation: true
description: ''
meta: '{}'
path: /en/_partials/liff-v2/is-api-available
__hash__: 7BRRLAPmZ6fETSOETdqaXRrjyEIFnq7dCXD2Cdooh0A
seo:
  description: ''
---

### liff.isApiAvailable()

::reference-with-code
  :::reference-content
  Checks whether the specified API or feature is available in the environment where you started the LIFF app. Specifically, it verifies whether the current LINE version supports the API and whether the terms and conditions for the API have been accepted.
  :::

  :::reference-code
  *Example*

    ::::code-tabs
      :::::tab{lang="javascript"}
      ```javascript
      // Check if shareTargetPicker is available
      if (liff.isApiAvailable('shareTargetPicker')) {
        liff.shareTargetPicker([
          {
            type: "text",
            text: "Hello, World!"
          }
        ])
          .then(
            console.log("ShareTargetPicker was launched")
          ).catch(function(res) {
            console.log("Failed to launch ShareTargetPicker")
          })
      }

      // Check if the LIFF-to-LIFF transition is available
      if (liff.isApiAvailable('multipleLiffTransition')) {
        window.location.href = "https://line.me/{liffId}", // URL for another LIFF app
      }
      ```
      :::::
    ::::
  :::
::

#### Syntax

```javascript
liff.isApiAvailable(apiName);
```

#### Arguments

::parameter-table
  :::parameter-table-entry{required="true"}
  #undefined
  apiName

  #undefined
  String

  The name of the LIFF client API or feature. You can specify one of the following:

  - `createShortcutOnHomeScreen`: Whether the [`liff.createShortcutOnHomeScreen()`](#create-shortcut-on-home-screen) method is available
  - `scanCodeV2`: Whether the [`liff.scanCodeV2()`](#scan-code-v2) method is available
  - `scanCode`: Whether the [`liff.scanCode()`](#scan-code) method is available
  - `shareTargetPicker`: Whether the [`liff.shareTargetPicker()`](#share-target-picker) method is available
  - `iap`: Whether the [in-app purchase](/docs/line-mini-app/in-app-purchase/overview/) feature for the LINE MINI App is available
  - `multipleLiffTransition`: Whether the [LIFF-to-LIFF transition](/docs/liff/opening-liff-app/#move-liff-to-liff) is available
  - `skipChannelVerificationScreen`: Whether the [channel consent simplification](/docs/line-mini-app/develop/channel-consent-simplification/#what-is-channel-consent-simplification) feature for the LINE MINI App is available
  :::
::

#### Return value

Returns whether the specified API or feature is available in the current environment. If available, `true` is returned. If not, `false` is returned. Examples of `false` returned are as follows:

- If the LIFF app was launched with a LINE version that doesn't support the API
- If the LIFF app was launched in an external browser, even though the API isn't available in an external browser
- If the terms and conditions haven't been accepted, even though you must accept them to use the API
- If the user isn't logged in, even though the user must be logged in to use the API
- If the access token is expired, even though the access token must be valid to use the API
