---
title: LIFF v1 is deprecated
navigation: true
description: >-
  We announced on October 16, 2019 that LIFF v1 will be deprecated. As of April
  1, 2021, LIFF v1 is deprecated.
meta: >-
  {"date":"2021-04-05 00:00 UTC","tags":"LIFF, Deprecated, Life
  cycle","locale":"en"}
path: /en/_partials/news/2021/2021-04-05-liff-v1-deprecated
__hash__: DN4jfsa5jEQY3KzLEizIYCJ76Is9gR92AOaWkseESEM
seo:
  title: LIFF v1 is deprecated
  description: >-
    We announced on October 16, 2019 that LIFF v1 will be deprecated. As of
    April 1, 2021, LIFF v1 is deprecated.
---

We [announced on October 16, 2019](/news/2019/10/16/liff-v2-released/) that LIFF v1 will be deprecated. As of April 1, 2021, LIFF v1 is deprecated.

::admonition{type="tip" title="What does "deprecated" mean?"}
"Deprecated" means that the feature or capability will be removed in a future MAJOR release. During the deprecation period, we don't provide bug fixes or security improvements to maintain the existing functionality that we provide during the maintenance window. For example, if there's a bug or security issue in LIFF v1, the SDK and API won't be updated. The deprecation period is intended to give developers time to plan and update the SDK before LIFF v1 reaches end-of-life. For more information about LIFF's MAJOR release schedule, see [The LIFF MAJOR version status](/docs/liff/versioning-policy/#version-support-status) in the LIFF documentation.
::

### Impact

LIFF v1 features will continue to work until they are discontinued, but we recommend migrating to LIFF v2.

### Required action

#### If you're currently using LIFF v1

You must migrate to LIFF v2 before LIFF v1 is deprecated. For more information on LIFF migration, see [Migrate to LIFF v2](#migrate-to-v2).

#### If you're not using LIFF v1

No action is required, but new use of LIFF v1 isn't recommended.

### Migrate to LIFF v2

The LIFF version is determined by the LIFF SDK version. If the existing LIFF app uses LIFF v1, you can move to LIFF v2 by changing the SDK loaded by the LIFF app and verifying that it works correctly.

#### Difference between LIFF v1 and LIFF v2

LIFF v1 and LIFF v2 have different initialization methods and specs for LIFF apps.

- [Minimum operating environment difference](#minimum-operating-environment-difference)
- [Installation method difference](#installation-difference)
- [Initialization method difference](#initialization-difference)
- [Functionality difference](#functionality-difference)

##### Minimum operating environment difference

The minimum operating environment for opening the LIFF app in the LIFF browser is different between LIFF v2 and LIFF v1. See this table for details:

| LIFF SDK version | Minimum operating environment                                             | Details                                                                                                   |
| ---------------- | ------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| LIFF v1          | - iOS: iOS 8 or later - Android: 4.2 or later - LINE: v7.14 or later      | [Operating environment](/reference/liff-v1/#operating-environment) in the LIFF API reference              |
| LIFF v2          | - iOS: iOS 12.0 or later - Android: 5.0 or later - LINE: v9.14.0 or later | [Recommended operating environment](/docs/liff/overview/#operating-environment) in the LIFF documentation |

::admonition{type="note"}
Even if you're using a version later than the minimum operating requirements, it may not work or the screen may not be displayed properly depending on the functions and settings.
::

##### Installation method difference

LIFF v1 was installed by CDN, but LIFF v2 can be installed by npm or CDN. See this table for details:

| LIFF SDK version | LIFF SDK installation method             | Details                                                                                                                  |
| ---------------- | ---------------------------------------- | ------------------------------------------------------------------------------------------------------------------------ |
| LIFF v1          | Specify CDN path                         | [Integrating the LIFF SDK](/docs/liff/developing-liff-apps-v1/#integrating-sdk) in the LIFF documentation                |
| LIFF v2          | - Specify CDN path - Use the npm package | [Integrating the LIFF SDK with the LIFF app](/docs/liff/developing-liff-apps/#integrating-sdk) in the LIFF documentation |

##### Initialization method difference

LIFF v1 calls `liff.init()` without arguments, but LIFF v2 must pass the `liffId` property and the LIFF ID of the LIFF app as its value when calling `liff.init()`.

How to initialize LIFF v1:

```javascript
liff.init(
  data => {
    // Now you can call LIFF API
    const userId = data.context.userId;
  },
  err => {
    // LIFF initialization failed
  }
);
```

How to initialize LIFF v2:

```javascript
// Using a Promise object
liff
  .init({
    liffId: "123456-abcedfg" // Use own liffId
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

  
See this table for different initialization methods and related documentation:

| LIFF SDK version | How to initialize the LIFF app                                                                     | Details and code examples                                                          |
| ---------------- | -------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| LIFF v1          | Call `liff.init()`                                                                                 | [`liff.init()`](/reference/liff-v1/#initialize-liff-app) in the LIFF API reference |
| LIFF v2          | Pass the `liffId` property and the LIFF ID of the LIFF app as its value when calling `liff.init()` | [`liff.init()`](/reference/liff/#initialize-liff-app) in the LIFF v2 API reference |

##### Functionality difference

LIFF v2 has more features than LIFF v1.

1. **The LIFF app can run in an external browser**

In LIFF v1, the LIFF app only worked in the LIFF browser. With LIFF v2, it also works with external browsers. Therefore, you can develop LIFF apps in the same development environment as general web apps.

1. **Available LIFF methods**

LIFF v2 provides more LIFF methods than LIFF v1. This list shows the available LIFF v2 methods:

- [Gets the environment in which the user is running the LIFF app](/reference/liff/#get-os)
- [Gets the language settings of the environment in which the LIFF app is running](/reference/liff/#get-language)
- [Gets the version of the LIFF SDK](/reference/liff/#get-version)
- [Gets the user's LINE version](/reference/liff/#get-line-version)
- [Determines whether the LIFF app is running in a LIFF browser](/reference/liff/#is-in-client)
- [Checks whether the user is logged in](/reference/liff/#is-logged-in)
- [Checks whether the specified API is available in the environment where you started the LIFF app](/reference/liff/#is-api-available)
- [Performs the LINE Login process (web login)](/reference/liff/#login)
- [Logs out](/reference/liff/#logout)
- [Get the raw ID token of the current user obtained by the LIFF SDK](/reference/liff/#get-id-token)
- [Gets the payload of the ID token that's acquired by the LIFF SDK](/reference/liff/#get-decoded-id-token)
- [Gets the screen type from which the LIFF app is launched](/reference/liff/#get-context)
- [Gets the friendship status between a user and a LINE Official Account](/reference/liff/#get-friendship)
- [Gets the permanent link for the current page](/reference/liff/#permanent-link-create-url)
- [Add any query parameter to a permanent link on the current page](/reference/liff/#permanent-linke-set-extra-query-param)
- [Displays the target picker and sends the message created by the developer to the selected target](/reference/liff/#share-target-picker)
- [Starts LINE's QR code reader and gets the string read by the user](/reference/liff/#scan-code)

For code examples and details of each method, see [LIFF v2 API reference](/reference/liff/).

### Resources to help with migration

The [LIFF starter application](https://github.com/line/line-liff-v2-starter){rel="[\"nofollow\"]"} is useful for checking the specs and development methods of LIFF v2. For more information, see [Trying the LIFF starter app](/docs/liff/trying-liff-app/) in the LIFF documentation.
