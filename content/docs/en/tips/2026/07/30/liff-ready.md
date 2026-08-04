---
title: >-
  liff.ready lets you wait for liff.init() completion from anywhere, with one
  caveat
navigation: true
description: >-
  In this article, we'll introduce liff.ready, a modest but handy property, and
  a caveat you should know about when using it.
meta: '{"date":"2026-07-30 00:00 UTC","tags":"liff","locale":"en","sidebar":false}'
path: /en/tips/2026/07/30/liff-ready
__hash__: Xf8dHZHppP-h09YG63cOzuXCBn9xdnEQmYtRtKdr_hg
seo:
  title: >-
    liff.ready lets you wait for liff.init() completion from anywhere, with one
    caveat
  description: >-
    In this article, we'll introduce liff.ready, a modest but handy property,
    and a caveat you should know about when using it.
---

::Tips
# :page-title

  :::display-date{date="2026/07/30" .!mb-20}

  :::

In this article, we'll introduce [`liff.ready`](/reference/liff/#ready), a modest but handy property, and a caveat you should know about when using it.

## Where to wait for `liff.init()` to complete

In a LIFF app, many methods, such as the [`liff.getProfile()`](/reference/liff/#get-profile) method, can only be called after the [`liff.init()`](/reference/liff/#initialize-liff-app) method has finished. While your app is small, you can simply write all your logic inside `liff.init().then(...)`. However, as your code gets split into modules and files, you'll want to guarantee that `liff.init()` has finished in event handlers and utility functions as well.

You can build such a mechanism yourself. For example, you can export and share the Promise returned by `liff.init()`, or manage your own flag that indicates whether initialization has finished. That said, the LIFF SDK also comes with a built-in property for this purpose: [`liff.ready`](/reference/liff/#ready).

## Separate where you call `liff.init()` from where you wait with `liff.ready`

`liff.ready` is a property holding a Promise that resolves when `liff.init()` succeeds. Since you can reference it even before calling `liff.init()`, you can call `liff.init()` only once at the entry point of your app, and `await liff.ready` wherever you want to wait for its completion.

```javascript
// Entry point: call liff.init() only once here, and handle errors here too
liff.init({ liffId: 'YOUR-LIFF-ID' }).catch(handleInitError);
```

```javascript
// Click handler or utility function: only wait for liff.init() to complete
async function loadProfile() {
  await liff.ready;
  const profile = await liff.getProfile();
  showDisplayName(profile.displayName);
}
```

The advantage of `liff.ready` is how effortless it is. You can wait for the completion directly on the imported `liff` object, without wiring up your own Promise or flag. Even if `loadProfile()` is called before `liff.init()` has finished, the subsequent processing runs after `liff.ready` is resolved.

## `liff.ready` only tells you about success

Now for the main topic. The [liff.ready](/reference/liff/#ready) section of the LIFF API reference says the following:

> If `liff.init()` fails, `liff.ready` will not be rejected. Also, it doesn't return a `LiffError` object.

In other words, if `liff.init()` fails due to a misconfigured LIFF ID or a network error, `liff.ready` isn't rejected. Instead, **it remains unresolved forever**. In the earlier `loadProfile()` example, execution never gets past `await liff.ready`. Since no error is delivered to the `liff.ready` side, if you expect error handling from `liff.ready`, you'll end up in a hard-to-diagnose situation where nothing is rendered on the screen, but there is no relevant error in the console either.

`liff.ready` is a simple completion signal that only tells you whether `liff.init()` has finished, and it isn't responsible for error handling. Handle errors on the Promise returned by `liff.init()`. This is why the first code example attaches `.catch(handleInitError)` to `liff.init()` at the entry point. Initialization failures are delivered only to this `catch`. If `handleInitError` switches to an error screen, for example, you can avoid leaving the user with a blank screen even while the code awaiting `liff.ready` stays suspended.

The roles are divided as follows.

| What you want to do                              | What to use                                          |
| ------------------------------------------------ | ---------------------------------------------------- |
| Wait for `liff.init()` to complete from anywhere | `liff.ready`                                         |
| Handle failures of `liff.init()`                 | The `catch` of the Promise returned by `liff.init()` |

If you also want to know about failures where you wait for `liff.init()` to complete, share and await the Promise returned by `liff.init()` instead of `liff.ready`. That Promise is rejected on failure. You can also put the result of the initialization in your app's state management. For apps that need failure handling in many places, sharing the Promise from the start is a better fit. `liff.ready` is a property for casually waiting only for success.

## You can also use it with the pluggable SDK

Since [`liff.ready`](/reference/liff/#ready) is included in the core of the SDK, you can use it as is without any additional modules, even if you use the [pluggable SDK](/docs/liff/pluggable-sdk/) (`@line/liff/core`) to reduce the bundle size.

## Wrap-up

- With `liff.ready`, you can easily wait for `liff.init()` to complete without any wiring of your own.
- However, `liff.ready` doesn't notify you of failures. Handle errors with the `catch` of the Promise returned by `liff.init()`.
- If you also want to know about failures where you wait, consider sharing the Promise returned by `liff.init()` or putting the result in your app's state management.

For more information, see [liff.ready](/reference/liff/#ready) in the LIFF API reference.

  :::style
  html pre.shiki code .sH3jZ, html code.shiki .sH3jZ{--shiki-default:#8B949E}html pre.shiki code .sZEs4, html code.shiki .sZEs4{--shiki-default:#E6EDF3}html pre.shiki code .sc3cj, html code.shiki .sc3cj{--shiki-default:#D2A8FF}html pre.shiki code .s9uIt, html code.shiki .s9uIt{--shiki-default:#A5D6FF}html .default .shiki span {color: var(--shiki-default);background: var(--shiki-default-bg);font-style: var(--shiki-default-font-style);font-weight: var(--shiki-default-font-weight);text-decoration: var(--shiki-default-text-decoration);}html .shiki span {color: var(--shiki-default);background: var(--shiki-default-bg);font-style: var(--shiki-default-font-style);font-weight: var(--shiki-default-font-weight);text-decoration: var(--shiki-default-text-decoration);}html pre.shiki code .suJrU, html code.shiki .suJrU{--shiki-default:#FF7B72}html pre.shiki code .sFSAA, html code.shiki .sFSAA{--shiki-default:#79C0FF}
  :::

  :::tags{tags="liff" lang="en" section="tips"}

  :::
::
