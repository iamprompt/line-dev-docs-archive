---
title: Open Window
navigation: true
description: ''
meta: '{}'
path: /en/_partials/liff-v2/open-window
__hash__: 1dmTwbQGx7qEbhf2IcNDwzIRm-8TV0Xbcj-y-e0bD7E
seo:
  description: ''
---

### liff.openWindow()

::reference-with-code
  :::reference-content
  Opens the specified URL in the LINE's in-app browser or external browser.

    ::::admonition{title="Operating environment of liff.openWindow()" type="note"}
    Use of `liff.openWindow()` in an external browser isn't guaranteed.
    ::::
  :::

  :::reference-code
  *Example*

    ::::code-tabs
      :::::tab{lang="javascript"}
      ```javascript
      liff.openWindow({
        url: "https://line.me",
        external: true,
      });
      ```
      :::::
    ::::
  :::
::

#### Behavioral differences by LINE version

The behavior of the `liff.openWindow()` method when opening URLs that support [Universal Links](https://developer.apple.com/documentation/xcode/allowing-apps-and-websites-to-link-to-your-content/){rel="[\"nofollow\"]"} or [App Links](https://developer.android.com/training/app-links){rel="[\"nofollow\"]"} varies depending on the LINE version and the setting of the [`params.external`](#open-window-arguments) parameter. The differences in behavior are as follows:

|                                                  | `params.external = false`   (default)                                                         | `params.external = true`                                                                    |
| ------------------------------------------------ | --------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| LINE earlier than 14.20.0 (*)                    | - iOS: Opens the URL in LINE's in-app browser - Android: Transitions to the corresponding app | - iOS: Transitions to the corresponding app - Android: Opens the URL in the default browser |
| LINE 14.20.0 or later,   or earlier than 15.20.0 | Transitions to the corresponding app                                                          | Transitions to the corresponding app                                                        |
| LINE 15.20.0 or later                            | Opens the URL in LINE's in-app browser                                                        | Transitions to the corresponding app                                                        |

* On LINE version 14.20.0 or later, behavior no longer differs by OS.

#### Syntax

```javascript
liff.openWindow(params);
```

#### Arguments

::parameter-table
  :::parameter-table-entry{required="true"}
  #undefined
  params

  #undefined
  Object

  Parameter object
  :::

  :::parameter-table-entry{required="true"}
  #undefined
  params.url

  #undefined
  String

  URL. Specify a full URL.
  :::

  :::parameter-table-entry{optional=""}
  #undefined
  params.external

  #undefined
  Boolean

  Whether to open the URL in an external browser. Specify one of the following values. The default value is `false`.

  - `true`: Opens the URL in an external browser.
  - `false`: Opens the URL in the LINE's in-app browser.
  :::
::

#### Return value

None
