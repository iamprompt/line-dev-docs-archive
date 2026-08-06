---
title: >-
  Where do LIFF apps run? Understanding behavioral differences across execution
  environments
navigation: true
description: >-
  Hello! I’m Oka from the technical support team. In this edition of "Tips,"
  I’ll be introducing the LIFF execution environment.
meta: '{"date":"2026-08-06 00:00 UTC","tags":"liff","locale":"en","sidebar":false}'
path: /en/tips/2026/08/06/between-liff-browser-and-external-browser
__hash__: V2ItAaCxWfpmCtotIgLLVtimFg51UEaZ9XYVmLXGaOs
seo:
  title: >-
    Where do LIFF apps run? Understanding behavioral differences across
    execution environments
  description: >-
    Hello! I’m Oka from the technical support team. In this edition of "Tips,"
    I’ll be introducing the LIFF execution environment.
---

::Tips
# :page-title

  :::display-date{date="2026/08/06" .!mb-20}

  :::

Hello! I’m Oka from the technical support team. In this edition of "Tips," I’ll be introducing the LIFF execution environment.

Have you ever developed a LIFF app and been puzzled because it works in your PC's browser but behaves differently when opened within the LINE app?

Conversely, you might have received reports that an app works fine inside the LINE app but has issues—such as buttons not responding—when opened in an external browser.

Since LIFF apps operate across multiple execution environments, understanding the differences between them is the first step toward stable development.

This article outlines the different execution environments and introduces the conditional logic patterns required during implementation.

## Two execution environments for LIFF apps

LIFF app execution environments are broadly categorized into the following two types:

- LIFF Browser
- Other than the LIFF browser: External browsers such as Chrome or Safari, or the LINE's in-app browser.

People often assume that because an app opens within the LINE app, the environment is the same; however, the :glossary-tooltip[[LIFF browser](/glossary/#liff-browser)]{glossary-id="liff-browser"} and the :glossary-tooltip[[LINE's in-app browser](/glossary/#line-iab)]{glossary-id="line-iab"} are distinct. For more details on the differences between the two, please refer to [The differences between LIFF browser and LINE's in-app browser](/docs/liff/differences-between-liff-browser-and-line-in-app-browser/).

## Determine the current environment using `liff.isInClient()`

You can determine whether the current execution environment is the LIFF browser by using [`liff.isInClient()`](/reference/liff/#is-in-client).

```js
if (liff.isInClient()) {
// Running in the LIFF browser
} else {
// Running in other than the LIFF browser
}
```

## Approach to branching patterns

Let's use the `liff.isInClient()` method introduced earlier as a starting point to construct the branching logic.

### Difference in login flows

In the LIFF browser, users open the LIFF app while already logged into LINE, so no explicit login process is required. On the other hand, in environments other than the LIFF browser, a login process via [`liff.login()`](/reference/liff/#login) is required.

```js
await liff.init({ liffId: "1234567890-abcdefgh" });

if (!liff.isInClient() && !liff.isLoggedIn()) {
liff.login()
}
```

Alternatively, by specifying the `withLoginOnExternalBrowser: true` option in [`liff.init()`](/reference/liff/#initialize-liff-app) as shown below, `liff.login()` is executed automatically during initialization in environments other than the LIFF browser.

```js
await liff.init({
liffId: "1234567890-abcdefgh",
withLoginOnExternalBrowser: true,
});
```

Note that behavior is not guaranteed if an authorization request is made directly within the LIFF browser. Therefore, for the login process, be sure to use `liff.login()` rather than directly implementing a LINE Login authorization request.

### `liff.closeWindow()` behavior is not guaranteed outside the LIFF browser

While implementing a "Close" button to exit the LIFF app is common practice, the behavior of [`liff.closeWindow()`](/reference/liff/#close-window) is not guaranteed outside the LIFF browser. For screens that might be displayed in environments other than the LIFF browser, consider providing an alternative navigation path.

```js
if (liff.isInClient()) {
liff.closeWindow();
} else {
// Alternative path for other than the LIFF browser (e.g., return to the top page)
}
```

### Features that integrate with chat rooms

Features that rely on the chat room where the LIFF app is open—such as [`liff.sendMessages()`](/reference/liff/#send-messages)—can only be used in the LIFF browser.

Since chat room information can be retrieved via [`liff.getContext()`](/reference/liff/#get-context), it is recommended to toggle the display of features based on the presence or absence of the context.

In addition to these points, the available execution environments, operating systems, and required permissions vary in detail for each API. Make it a habit to check the supported environments for specific APIs in the [LIFF API Reference](/reference/liff/) before implementation; this helps prevent issues where you only realize after release that the app doesn't work in a particular environment.

## Summary

- The execution environments for LIFF apps can be broadly categorized into two types: the LIFF browser, and environments other than the LIFF browser (such as external browsers or the LINE's in-app browser).
- Use `liff.isInClient()` to determine the current environment.
- You need to implement environment-specific logic for the login flow, `liff.closeWindow()`, and chat room integration features.
- When in doubt, check the "Supported environments" section of the API reference.

Issues where an app works in a test environment but fails on an actual device are often caused by differences in the execution environment. Understand the characteristics of each browser to build LIFF apps that run smoothly in any environment.

  :::style
  html .default .shiki span {color: var(--shiki-default);background: var(--shiki-default-bg);font-style: var(--shiki-default-font-style);font-weight: var(--shiki-default-font-weight);text-decoration: var(--shiki-default-text-decoration);}html .shiki span {color: var(--shiki-default);background: var(--shiki-default-bg);font-style: var(--shiki-default-font-style);font-weight: var(--shiki-default-font-weight);text-decoration: var(--shiki-default-text-decoration);}
  :::

  :::tags{tags="liff" lang="en" section="tips"}

  :::
::
