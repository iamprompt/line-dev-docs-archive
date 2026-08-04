---
title: LIFF v2.9.1 released
navigation: true
description: >-
  In LIFF v2.9.1, these bugs have been fixed, but there are no changes to the
  features.
meta: '{"date":"2021-04-27 00:00 UTC","tags":"LIFF","locale":"en"}'
path: /en/_partials/news/2021/2021-04-27-liff-v2-9-1-release
__hash__: slRR7CF52qUq-rAtB68-npBe4gAo0tGo8QyvlPykdgo
seo:
  title: LIFF v2.9.1 released
  description: >-
    In LIFF v2.9.1, these bugs have been fixed, but there are no changes to the
    features.
---

In LIFF v2.9.1, these bugs have been fixed, but there are no changes to the features.

### We fixed the bug that occurs when using the npm package of the LIFF SDK

When attempting to use the npm package of the LIFF SDK on TypeScript, an error had occured during compilation, but this bug has been fixed. In LIFF v2.9.1, there is no issue with compilation, even when using TypeScript.

This fix applies to both the npm version and the CDN version of the LIFF SDK.

For more information on the npm package of the LIFF SDK, see [Use the npm package](/docs/liff/developing-liff-apps/#use-npm-package).

::admonition{title="How to handle compilation errors" type="tip"}
We recommend upgrading to LIFF v2.9.1 as a workaround for compilation errors when using TypeScript, but if you can't, use this method to resolve the compilation errors:

If you enable the [`skipLibCheck`](https://www.typescriptlang.org/ja/tsconfig#skipLibCheck){rel="[\"nofollow\"]"} option using TypeScript setting files such as `tsconfig.json`, compilation errors won't occur.
::

  
If you're using the CDN edge path(`https://static.line-scdn.net/liff/edge/2/sdk.js`), your LIFF will be automatically upgraded to v2.9.1.

If you're using the npm package, your LIFF will be upgraded to v2.9.1 if you execute either `npm install @line/liff@2.9.1` or `yarn add @line/liff@2.9.1`.

For more information on how to integrate the LIFF SDK, see [Integrating the LIFF SDK with the LIFF app](/docs/liff/developing-liff-apps/#integrating-sdk).
