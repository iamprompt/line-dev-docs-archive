---
title: Initialize Liff App
navigation: true
description: ''
meta: '{}'
path: /en/_partials/liff-v2/initialize-liff-app
__hash__: X_3p6St-r-b_wTsSY4gQEotYgH6EXDc4E2jWkJhsm30
seo:
  description: ''
---

### liff.init()

::reference-with-code
  :::reference-content
  Initializes a LIFF app.

  You can only call other LIFF SDK methods after executing the `liff.init()` method. LIFF apps must be initialized each time a page is opened. Even if the transition is within the same LIFF app, you should execute the `liff.init()` method when you open a new page.

  If you use LIFF features without properly initializing the LIFF app, we don't guarantee that the features will work.

  The LIFF SDK obtains the access token and ID token of the user from the LINE Platform when you execute the `liff.init()` method.

  - To use the access token obtained by the LIFF SDK, call [liff.getAccessToken()](#get-access-token).
  - To use the ID token payload obtained by the LIFF SDK, call [liff.getDecodedIDToken()](#get-decoded-id-token).
  :::

  :::reference-code
  *Example*

    ::::code-tabs
      :::::tab{lang="javascript"}
      ```javascript
      // Using a Promise object
      liff
        .init({
          liffId: "123456-abcedfg", // Use own liffId
        })
        .then(() => {
          // Start to use liff's api
        })
        .catch((err) => {
          // Error happens during initialization
          console.log(err.code, err.message);
        });

      // Using a callback
      liff.init({ liffId: "123456-abcedfg" }, successCallback, errorCallback);
      ```
      :::::
    ::::
  :::
::

#### Important points to consider when initializing the LIFF app

The following are important points to consider when initializing your LIFF app. Read and understand these points before you start developing your LIFF app.

- [Execute `liff.init()` at the endpoint URL or at a lower level](#initializing-liff-app-notes-1)
- [Execute `liff.init()` once for the primary redirect URL and once for the secondary redirect URL](#initializing-liff-app-notes-2)
- [Process URL changes after `liff.init()` completes](#initializing-liff-app-notes-3)
- [Use caution when handling the primary redirect URL](#initializing-liff-app-notes-4)

##### Execute `liff.init()` at the endpoint URL or at a lower level

The `liff.init()` method will only work on URLs that are exactly the same as the endpoint URL, or on URLs that are at a lower level than the endpoint URL. If the LIFF app transitions to a URL other than these, the `liff.init()` method isn't guaranteed to work.

The following example shows whether the behavior is guaranteed for the URL that executes the `liff.init()` method when the endpoint URL is `https://example.com/path1/`. Some LIFF app features, such as the [multi-tab view](/docs/liff/overview/#multi-tab-view), may not work properly on URLs where the behavior isn't guaranteed.

| URL to execute `liff.init()`          | Guaranteed to work |
| ------------------------------------- | ------------------ |
| `https://example.com/`                | ❌                  |
| `https://example.com/path1/`          | ✅                  |
| `https://example.com/path1/language/` | ✅                  |
| `https://example.com/path2/`          | ❌                  |

::admonition
---
title: >-
  When executing the liff.init() method, the warning message "liff.init() was
  called with a current URL that is not related to the endpoint URL." appears in
  a console
type: note
---
In LIFF v2.27.2 or later, a warning message will appear when the `liff.init()` method is executed on a URL where the behavior isn't guaranteed.

For example, if the endpoint URL of a LIFF app is `https://example.com/path1/path2/` and the URL where the `liff.init()` method is executed is `https://example.com/path1/`, the following warning message will appear:

```text
liff.init() was called with a current URL that is not related to the endpoint URL.
https://example.com/path1/ is not under https://example.com/path1/path2/
```

If you see the warning message above, consider changing the endpoint URL to `https://example.com/` or `https://example.com/path1/`. Changing to these URLs guarantees the `liff.init()` method works correctly.
::

##### Execute `liff.init()` once for the primary redirect URL and once for the secondary redirect URL

The `liff.init()` method performs initialization processing based on information such as `liff.state` and `access_token=xxx` given to the primary redirect URL. If your endpoint URL includes a query parameter or path, to properly initialize the LIFF app, execute the `liff.init()` method once for both the primary redirect URL and the secondary redirect URL. For more information, see [Behaviors from accessing the LIFF URL to opening the LIFF app](/docs/liff/opening-liff-app/#redirect-flow) in the LIFF documentation.

##### Process URL changes after `liff.init()` completes

Execute processes that change URLs after the `Promise` object returned by the `liff.init()` method is resolved.

```javascript
// Example using window.location.replace()
liff
  .init({
    liffId: "1234567890-AbcdEfgh", // Use own liffId
  })
  .then(() => {
    // Redirect to another page after the returned Promise object has been resolved
    window.location.replace(location.href + "/entry/");
  });
```

If you execute any of the following URL manipulations before the `Promise` object resolves, the LIFF app may not open properly:

- Change the URL using the [`Document.location`](https://developer.mozilla.org/en-US/docs/Web/API/Document/location){rel="[\"nofollow\"]"} property or the [`Window.location`](https://developer.mozilla.org/en-US/docs/Web/API/Window/location){rel="[\"nofollow\"]"} property
- Change the URL using the [`history.pushState()`](https://developer.mozilla.org/en-US/docs/Web/API/History/pushState){rel="[\"nofollow\"]"} method or the [`history.replaceState()`](https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState){rel="[\"nofollow\"]"} method of the [History API](https://developer.mozilla.org/en-US/docs/Web/API/History_API){rel="[\"nofollow\"]"}
- Return status code `301` or `302` on the server-side and redirect to another URL

##### Use caution when handling the primary redirect URL

The `access_token=xxx` automatically granted to the primary redirect URL is the user's access token (confidential information). Don't send the primary redirect URL to an external logging tool such as Google Analytics.

Note that in LIFF v2.11.0 or later, credential information is excluded from URLs when the `liff.init()` method is resolved. Therefore, you can prevent leaking credential information by sending the page view in the `then()` method as follows. If you want to use logging tools, we recommend that you upgrade your LIFF app to v2.11.0 or later. For more information about the updates in LIFF v2.11.0, see [Release Notes](/docs/liff/release-notes/#liff-v2-11-0) in the LIFF documentation.

```javascript
liff
  .init({
    liffId: "1234567890-AbcdEfgh", // Use own liffId
  })
  .then(() => {
    ga("send", "pageview");
  });
```

::admonition{title="LIFF app's query parameters" type="note"}
When you access a LIFF URL or perform a LIFF-to-LIFF transition, the following query parameters may be added to the URL:

- `liff.state`: Indicates additional information specified in the LIFF URL.
- `liff.referrer`: Indicates the URL before a LIFF-to-LIFF transition. For more information, see [Get URL from before LIFF-to-LIFF transition](/docs/liff/opening-liff-app/#using-liff-referrer) in the LIFF documentation.
- `lineAppVersion`: May be included when a LIFF app is opened in LINE for Android.

The above query parameters are added by the LIFF SDK so that LIFF apps can function properly. When you perform custom processing on the LIFF app's URL, don't modify the query parameters given by the LIFF SDK until the `liff.init()` method is resolved, to ensure that LIFF apps function properly, such as when opening or during LIFF-to-LIFF transitions.

Other query parameters may also be added. For this reason, design your app so that query parameters added when accessing a LIFF URL or performing a LIFF-to-LIFF transition aren't modified.
::

::admonition
---
title: Functions that can be executed even before the LIFF app is initialized
type: tip
---
This property or methods are available even before the `liff.init()` method is executed. You can get the environment in which the LIFF app is running before initializing the LIFF app, or close the LIFF app when the LIFF app initialization fails.

- [liff.ready](/reference/liff/#ready)
- [liff.getOS()](/reference/liff/#get-os)
- [liff.getAppLanguage()](/reference/liff/#get-app-language)
- [liff.getLanguage()](/reference/liff/#get-language) (deprecated)
- [liff.getVersion()](/reference/liff/#get-version)
- [liff.getLineVersion()](/reference/liff/#get-line-version)
- [liff.isInClient()](/reference/liff/#is-in-client)
- [liff.closeWindow()](/reference/liff/#close-window)
- [liff.use()](/reference/liff/#use)
- [liff.i18n.setLang()](/reference/liff/#i18n-set-lang)

To use the `liff.closeWindow()` method before the initialization of the LIFF app by `liff.init()` has finished, your LIFF SDK version must be v2.4.0 or later.
::

#### Syntax

```javascript
liff.init(config, successCallback, errorCallback);
```

#### Arguments

::parameter-table
  :::parameter-table-entry{required="true"}
  #undefined
  config

  #undefined
  Object

  LIFF app configurations
  :::

  :::parameter-table-entry{required="true"}
  #undefined
  config.liffId

  #undefined
  String

  LIFF app ID. Can be obtained when you add the LIFF app to your channel. For more information, see [Adding a LIFF app to your channel](/docs/liff/registering-liff-apps/).  

  The LIFF app ID specified here can be obtained with [`liff.id`](#id).
  :::

  :::parameter-table-entry{optional=""}
  #undefined
  config.withLoginOnExternalBrowser

  #undefined
  Boolean

  Using either of the following values, specify whether or not to automatically execute the `liff.login()` method when initializing a LIFF app in an external browser. The default value is `false`.

  - `true`: Automatically execute the `liff.login()` method in external browsers.
  - `false`: Don't automatically execute the `liff.login()` method in external browsers.
  :::

  :::parameter-table-entry{optional=""}
  #undefined
  successCallback

  #undefined
  Function

  Callback to return a data object upon successful initialization of the LIFF app.

    ::::admonition{title="Note" type="note"}
    successCallback is processed at the same time that the `Promise` object of the return value is resolved. However, there is no set order to which is processed first.
    ::::
  :::

  :::parameter-table-entry{optional=""}
  #undefined
  errorCallback

  #undefined
  Function

  Callback to return an error object upon failure to initialize the LIFF app.

    ::::admonition{title="Note" type="note"}
    errorCallback is processed at the same time that the `Promise` object of the return value is rejected. However, there is no set order to which is processed first.
    ::::
  :::
::

#### Return value

Returns a `Promise` object.

##### Error response

When the `Promise` is rejected, [`LiffError`](#liff-errors) is passed.
