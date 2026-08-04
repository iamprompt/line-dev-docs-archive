---
title: Pluggable SDK
navigation: true
description: null
meta: '{"tags":null,"author":null,"last_updated":null,"source_language":"en"}'
path: /en/docs/liff/pluggable-sdk
__hash__: wtkmFtnfAqN5XuNipGLV84X-XX2ggTzBX0YVYoCHddI
seo:
  title: Pluggable SDK
  description: null
---

# :page-title

:markdown-controls:toc## What is the pluggable SDK

The pluggable SDK is a feature that allows you to choose which LIFF APIs to include in the LIFF SDK.

By including only the LIFF APIs used by your LIFF app, you can reduce the LIFF SDK file size by up to about 34%. As a result, you can improve the display speed of your LIFF app.

## Use conditions of the pluggable SDK

The pluggable SDK is only available in the npm version of LIFF v2.22.0 or later. It's not available in the CDN version. For more information about using the npm package, see [Use the npm package](/docs/liff/developing-liff-apps/#use-npm-package).

## How to use the pluggable SDK

The pluggable SDK can be used as follows:

- [Import the liff object](#import-liff-object)
- [Activate the LIFF APIs](#activate-liff-api)

### Import the liff object

First, import the `liff` object from `@line/liff/core`.

```js
import liff from "@line/liff/core";
```

This `liff` object includes only the following properties and methods:

- [`liff.id`](/reference/liff/#id) property
- [`liff.ready`](/reference/liff/#ready) property
- [`liff.init()`](/reference/liff/#initialize-liff-app) method
- [`liff.getVersion()`](/reference/liff/#get-version) method
- [`liff.use()`](/reference/liff/#use) method

To use LIFF APIs other than those listed above, import the corresponding modules. In the following example, the corresponding modules are imported for the [`liff.getOS()`](/reference/liff/#get-os) method and the [`liff.getAppLanguage()`](/reference/liff/#get-app-language) method:

```js
import liff from "@line/liff/core";
import GetOS from "@line/liff/get-os";
import GetAppLanguage from "@line/liff/get-app-language";
```

For more information on the modules corresponding to each LIFF API, see [LIFF API and the corresponding module list](#liff-api-and-module-list).

### Activate the LIFF APIs

Next, pass the imported LIFF API modules to the `liff.use()` method to activate the LIFF APIs. Since the LIFF API modules are defined as classes, you must pass the instances to the `liff.use()` method.

```js
import liff from "@line/liff/core";
import GetOS from "@line/liff/get-os";
import GetAppLanguage from "@line/liff/get-app-language";

liff.use(new GetOS());
liff.use(new GetAppLanguage());
```

Once the LIFF APIs are activated, you can use the LIFF APIs.

In the example below, the activated `liff.getOS()` method and the `liff.getAppLanguage()` method are available, but the unactivated `liff.login()` method isn't available:

```js
import liff from "@line/liff/core";
import GetOS from "@line/liff/get-os";
import GetAppLanguage from "@line/liff/get-app-language";

liff.use(new GetOS());
liff.use(new GetAppLanguage());

liff.init({
  liffId: "123456-abcedfg",
});

liff.getOS(); // Available
liff.getAppLanguage(); // Available
liff.login(); // Not available
```

## Important points about the pluggable SDK

Due to technical limitations, the `liff.use()` method should be executed before the `liff.init()` method. The execution of the `liff.use()` method after the `liff.init()` method isn't guaranteed to work.

### Example of correct execution of the liff.use() method

```js
import liff from "@line/liff/core";
import GetOS from "@line/liff/get-os";

// The liff.use() method is executed before the liff.init() method
liff.use(new GetOS());

liff.init({
  liffId: "123456-abcedfg",
});
```

### Example of wrong execution of the liff.use() method

```js
import liff from "@line/liff/core";
import GetOS from "@line/liff/get-os";

liff.init({
  liffId: "123456-abcedfg",
});

// The liff.use() method is executed after the liff.init() method
liff.use(new GetOS());
```

## LIFF API and the corresponding module list

| LIFF API                                                                                                                                                                                                                                                                         | Module                                      |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------- |
| [`liff.getOS()`](/reference/liff/#get-os)                                                                                                                                                                                                                                        | `@line/liff/get-os`                         |
| [`liff.getAppLanguage()`](/reference/liff/#get-app-language)                                                                                                                                                                                                                     | `@line/liff/get-app-language`               |
| [`liff.getLanguage()`](/reference/liff/#get-language) (deprecated)                                                                                                                                                                                                               | `@line/liff/get-language`                   |
| [`liff.getLineVersion()`](/reference/liff/#get-line-version)                                                                                                                                                                                                                     | `@line/liff/get-line-version`               |
| [`liff.getContext()`](/reference/liff/#get-context)                                                                                                                                                                                                                              | `@line/liff/get-context`                    |
| [`liff.isInClient()`](/reference/liff/#is-in-client)                                                                                                                                                                                                                             | `@line/liff/is-in-client`                   |
| [`liff.isLoggedIn()`](/reference/liff/#is-logged-in)                                                                                                                                                                                                                             | `@line/liff/is-logged-in`                   |
| [`liff.isApiAvailable()`](/reference/liff/#is-api-available)                                                                                                                                                                                                                     | `@line/liff/is-api-available`               |
| [`liff.login()`](/reference/liff/#login)                                                                                                                                                                                                                                         | `@line/liff/login`                          |
| [`liff.logout()`](/reference/liff/#logout)                                                                                                                                                                                                                                       | `@line/liff/logout`                         |
| [`liff.getAccessToken()`](/reference/liff/#get-access-token)                                                                                                                                                                                                                     | `@line/liff/get-access-token`               |
| [`liff.getIDToken()`](/reference/liff/#get-id-token)                                                                                                                                                                                                                             | `@line/liff/get-id-token`                   |
| [`liff.getDecodedIDToken()`](/reference/liff/#get-decoded-id-token)                                                                                                                                                                                                              | `@line/liff/get-decoded-id-token`           |
| [`liff.permission.getGrantedAll()`](/reference/liff/#permission-get-granted-all)      [`liff.permission.query()`](/reference/liff/#permission-query)      [`liff.permission.requestAll()`](/reference/liff/#permission-request-all)                                              | `@line/liff/permission`                     |
| [`liff.getProfile()`](/reference/liff/#get-profile)                                                                                                                                                                                                                              | `@line/liff/get-profile`                    |
| [`liff.getFriendship()`](/reference/liff/#get-friendship)                                                                                                                                                                                                                        | `@line/liff/get-friendship`                 |
| [`liff.openWindow()`](/reference/liff/#open-window)                                                                                                                                                                                                                              | `@line/liff/open-window`                    |
| [`liff.closeWindow()`](/reference/liff/#close-window)                                                                                                                                                                                                                            | `@line/liff/close-window`                   |
| [`liff.sendMessages()`](/reference/liff/#send-messages)                                                                                                                                                                                                                          | `@line/liff/send-messages`                  |
| [`liff.shareTargetPicker()`](/reference/liff/#share-target-picker)                                                                                                                                                                                                               | `@line/liff/share-target-picker`            |
| [`liff.scanCodeV2()`](/reference/liff/#scan-code-v2)                                                                                                                                                                                                                             | `@line/liff/scan-code-v2`                   |
| [`liff.scanCode()`](/reference/liff/#scan-code) (deprecated)                                                                                                                                                                                                                     | `@line/liff/scan-code`                      |
| [`liff.permanentLink.createUrlBy()`](/reference/liff/#permanent-link-create-url-by)      [`liff.permanentLink.createUrl()`](/reference/liff/#permanent-link-create-url)      [`liff.permanentLink.setExtraQueryParam()`](/reference/liff/#permanent-linke-set-extra-query-param) | `@line/liff/permanent-link`                 |
| [`liff.i18n.setLang()`](/reference/liff/#i18n-set-lang)                                                                                                                                                                                                                          | `@line/liff/i18n`                           |
| [`liff.createShortcutOnHomeScreen()`](/reference/liff/#create-shortcut-on-home-screen)                                                                                                                                                                                           | `@line/liff/create-shortcut-on-home-screen` |
