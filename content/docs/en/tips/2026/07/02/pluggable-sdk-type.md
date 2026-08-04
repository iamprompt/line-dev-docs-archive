---
title: A small type trick implemented in the LIFF SDK's Pluggable SDK
navigation: true
description: >-
  Hello! I'm odan, and I'm in charge of developing the LIFF SDK. In this
  article, I'll introduce a small type trick implemented in the LIFF SDK's
  Pluggable SDK.
meta: '{"date":"2026-07-02 00:00 UTC","tags":"liff","locale":"en","sidebar":false}'
path: /en/tips/2026/07/02/pluggable-sdk-type
__hash__: HEdfMo4NHi4wRKQI43TiCSb1k8YPErFvkHQQ5qJA8rQ
seo:
  title: A small type trick implemented in the LIFF SDK's Pluggable SDK
  description: >-
    Hello! I'm odan, and I'm in charge of developing the LIFF SDK. In this
    article, I'll introduce a small type trick implemented in the LIFF SDK's
    Pluggable SDK.
---

::Tips
# :page-title

  :::display-date{date="2026/07/02" .!mb-20}

  :::

Hello! I'm odan, and I'm in charge of developing the LIFF SDK. In this article, I'll introduce a small type trick implemented in the LIFF SDK's Pluggable SDK.

## What is the Pluggable SDK?

The standard LIFF SDK is imported as `import liff from "@line/liff"`.

In this case, the `liff` object includes methods such as `liff.requestFriendship` and objects such as `liff.permission`. These methods and objects aren't necessarily required by every LIFF app. Objects that aren't used cause an unnecessary increase in bundle size.

The [Pluggable SDK](/docs/liff/pluggable-sdk/) solves this problem. The Pluggable SDK provides a `liff` object (hereafter, the LIFF Core object) that has only the minimum required methods.

Here's an example of how to use it:

```javascript
import liff from "@line/liff/core"; // Import @line/liff/core instead of @line/liff
liff.init({ liffId: "" }); // Available because it's one of the minimum required methods
liff.requestFriendship(); // Not available because it isn't one of the minimum required methods (causes a runtime error)
```

Example of using a method not included in the minimum required set:

```javascript
import liff from "@line/liff/core";
import RequestFriendship from "@line/liff/request-friendship";

liff.use(new RequestFriendship());

liff.init({ liffId: "" });
liff.requestFriendship(); // Now available because the method was added with liff.use
```

By using the Pluggable SDK, you can reduce the bundle size of your LIFF app.

## Extending the type of the LIFF Core object

As mentioned earlier, in the world of JavaScript, calling the `liff.requestFriendship` method on the LIFF Core object causes a runtime error.

So that developers can notice this problem early, only the minimum required methods are defined on the LIFF Core object in the world of types as well.

```ts
import liff from "@line/liff/core";

liff.requestFriendship(); // Causes a type error
```

To extend the minimum required types, you need to import the package for each module.

```ts
import liff from "@line/liff/core";
import RequestFriendship from "@line/liff/request-friendship";

liff.use(new RequestFriendship());
liff.requestFriendship(); // No type error because @line/liff/request-friendship is imported
```

## Extending types with Declaration Merging

So how is this mechanism—where simply importing a package resolves the type error—achieved?

TypeScript has a technique called [Declaration Merging](https://www.typescriptlang.org/docs/handbook/declaration-merging.html){rel="[\"nofollow\"]"}, which is what's used here. To put it simply, the members of interfaces defined with the same name are merged and can be treated as one.

The documentation above introduces the following sample code:

```ts
interface Box {
  height: number;
  width: number;
}
interface Box {
  scale: number;
}
let box: Box = { height: 5, width: 6, scale: 10 };
```

This technique is used to extend the type of the LIFF Core object. Let's take a look at the actual contents of `@line/liff/request-friendship`.

```ts
// Contents of @line/liff/request-friendship in LIFF SDK v2.29.0
import { RequestFriendshipModule } from '@liff/request-friendship';
export default RequestFriendshipModule;
declare module '@liff/core' {
    interface LiffCore {
        requestFriendship: ReturnType<typeof RequestFriendshipModule.prototype.install>;
    }
}
```

The interface declaration starting on line 5 is the key point. Writing the declaration of `LiffCore` causes the type information to be merged. This lets you immediately notice careless mistakes, such as forgetting to add the object, when using the LIFF Core object.

Incidentally, Vue.js plugins use a similar mechanism.

## Wrap-up

I introduced a small type trick implemented in the Pluggable SDK.

Thanks to Declaration Merging, you can use types with confidence, so please consider the Pluggable SDK when you want to improve your bundle size.

  :::style
  html pre.shiki code .suJrU, html code.shiki .suJrU{--shiki-default:#FF7B72}html pre.shiki code .sZEs4, html code.shiki .sZEs4{--shiki-default:#E6EDF3}html pre.shiki code .s9uIt, html code.shiki .s9uIt{--shiki-default:#A5D6FF}html pre.shiki code .sH3jZ, html code.shiki .sH3jZ{--shiki-default:#8B949E}html pre.shiki code .sc3cj, html code.shiki .sc3cj{--shiki-default:#D2A8FF}html .default .shiki span {color: var(--shiki-default);background: var(--shiki-default-bg);font-style: var(--shiki-default-font-style);font-weight: var(--shiki-default-font-weight);text-decoration: var(--shiki-default-text-decoration);}html .shiki span {color: var(--shiki-default);background: var(--shiki-default-bg);font-style: var(--shiki-default-font-style);font-weight: var(--shiki-default-font-weight);text-decoration: var(--shiki-default-text-decoration);}html pre.shiki code .sQhOw, html code.shiki .sQhOw{--shiki-default:#FFA657}html pre.shiki code .sFSAA, html code.shiki .sFSAA{--shiki-default:#79C0FF}
  :::

  :::tags{tags="liff" lang="en" section="tips"}

  :::
::
