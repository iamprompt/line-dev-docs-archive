---
title: Create Shortcut On Home Screen
navigation: true
description: ''
meta: '{}'
path: /en/_partials/liff-v2/create-shortcut-on-home-screen
__hash__: HtRveZj9kaoY_NwjfvL9wZ1dT_yXw8P0t0t4Tm5OX1g
seo:
  description: ''
---

### liff.createShortcutOnHomeScreen()

::reference-with-code
  :::reference-content
    ::::admonition
    ---
    title: This feature can only be used for verified MINI Apps
    type: tip
    ---
    This feature is only available for verified MINI Apps. For unverified MINI Apps, you can test the feature on the internal channel for Developing, but you can't use the feature on the internal channel for Published.
    ::::

  Displays a screen for adding a shortcut to your [LINE MINI App](/docs/line-mini-app/) to the home screen of the user's device.

  ![](/media/line-mini-app/develop/add-to-home-screen/add-shortcut-screen-ios-en.png){className="[\"border\",\"w-fix-240\"]"}

  For more information, see [Add a shortcut to your LINE MINI App to the home screen of the user's device](/docs/line-mini-app/develop/add-to-home-screen/) in the LINE MINI App documentation.

    ::::admonition
    ---
    title: When to execute the liff.createShortcutOnHomeScreen() method
    type: note
    ---
    The `liff.createShortcutOnHomeScreen()` method should be executed in response to a user action (e.g. tap) on your LINE MINI App so as not to spoil the user experience.
    ::::
  :::

  :::reference-code
  *Example*

    ::::code-tabs
      :::::tab{lang="javascript"}
      ```javascript
      // If the endpoint URL of the LINE MINI App
      // is https://example.com/path1/path2
      // and its LIFF ID is 1234567890-AbcdEfgh

      // Example of specifying the LIFF URL
      liff
        .createShortcutOnHomeScreen({
          url: "https://miniapp.line.me/1234567890-AbcdEfgh",
        })
        .then(() => { /* ... */ });

      liff
        .createShortcutOnHomeScreen({
          url: "https://liff.line.me/1234567890-AbcdEfgh",
        })
        .then(() => { /* ... */ });

      // Example of specifying a permanent link
      liff
        .createShortcutOnHomeScreen({
          url: "https://liff.line.me/1234567890-AbcdEfgh/path3",
        })
        .then(() => { /* ... */ });

      // Example of specifying the endpoint URL of the LINE MINI App
      liff
        .createShortcutOnHomeScreen({
          url: "https://example.com/path1/path2",
        })
        .then(() => { /* ... */ });

      // Example of specifying a URL that begins with the endpoint URL of the LINE MINI App
      liff
        .createShortcutOnHomeScreen({
          url: "https://example.com/path1/path2/path3",
        })
        .then(() => { /* ... */ });

      // Example of specifying a URL that results in an error
      liff
        .createShortcutOnHomeScreen({
          url: "https://example.com/invalid-path",
        })
        .then(() => { /* ... */ })
        .catch((error) => {
          // invalid URL.
          console.log(error.message);
        });
      ```
      :::::
    ::::
  :::
::

#### Conditions of use

To use the `liff.createShortcutOnHomeScreen()` method, all of the following conditions must be met:

- It's a LINE MINI App.
- The LIFF SDK version of the LINI MINI App is v2.23.0 or later.
- The LINE app version on the user's device is 13.20.0 or later.

#### Operating conditions

If the OS of the user's device is iOS, the conditions for the `liff.createShortcutOnHomeScreen()` method to work are as follows. If this method is executed in a non-working environment, an error page will be displayed.

| Default browser                       | iOS version       | Whether it works or not |
| ------------------------------------- | ----------------- | ----------------------- |
| Safari                                | All versions      | Works                   |
| Chrome                                | 16.4 or later     | Works                   |
| Browsers other than Safari and Chrome | 16.4 or later     | Not guaranteed to work  |
| Browsers other than Safari            | Earlier than 16.4 | Doesn't work            |

For example, if you execute the `liff.createShortcutOnHomeScreen()` method in Chrome on earlier than iOS 16.4, the following error page will be displayed:

![](/media/line-mini-app/develop/add-to-home-screen/add-shortcut-screen-ios-error-en.png){className="[\"border\",\"w-fix-240\"]"}

#### Syntax

```javascript
liff.createShortcutOnHomeScreen(params);
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

  URL. You can specify the following URLs:

  - ::::glossary-tooltip{glossary-id="liff-url"}
  [LIFF URL](/glossary/#liff-url)
  ::::
  - ::::glossary-tooltip{glossary-id="permanent-link-liff"}
  [Permanent link](/glossary/#permanent-link-liff)
  ::::
  - The endpoint URL of the LINE MINI App
  - URL that begins with the endpoint URL of the LINE MINI App
  :::
::

#### Return value

Returns a `Promise` object.

When the Add Shortcut screen is displayed, the `Promise` is resolved. No value is passed.

You can't confirm whether the user has actually added a shortcut to your LINE MINI app to the home screen of the user's device.

##### Error response

When the `Promise` is rejected, [`LiffError`](#liff-errors) is passed.
