---
title: Parameters added to the LIFF URL should be read after liff.init()
navigation: true
description: >-
  Did you know that you can add query parameters to LIFF URLs? In this article,
  we'll introduce a handy way to use parameters added to a LIFF URL, and a tip
  for reading them.
meta: '{"date":"2026-07-16 00:00 UTC","tags":"liff","locale":"en","sidebar":false}'
path: /en/tips/2026/07/16/liff-url-additional-info
__hash__: idJNu2iZShKGezQjIB8jHl7oxIpfhvdbDtwOy9hnb84
seo:
  title: Parameters added to the LIFF URL should be read after liff.init()
  description: >-
    Did you know that you can add query parameters to LIFF URLs? In this
    article, we'll introduce a handy way to use parameters added to a LIFF URL,
    and a tip for reading them.
---

::Tips
# :page-title

  :::display-date{date="2026/07/16" .!mb-20}

  :::

Did you know that you can add query parameters to LIFF URLs? In this article, we'll introduce a handy way to use parameters added to a LIFF URL, and a tip for reading them.

## You can add additional information to a LIFF URL

You can add additional information such as a path, query parameters, and a URL fragment to a :glossary-tooltip[[LIFF URL](/glossary/#liff-url)]{glossary-id="liff-url"}.

- `https://liff.line.me/{liffId}/?store=shibuya`
- `https://liff.line.me/{liffId}/summer2026/#coupon`

The additional information is carried over to the URL of the page that is ultimately displayed. For example, you can distribute QR codes with a different parameter for each store to switch screens, or distinguish the traffic sources of a campaign.

However, care must be taken regarding the timing of reading additional information, such as parameters.

## Read parameters after `liff.init()` has finished

The additional information added to a LIFF URL is temporarily stored in a query parameter called `liff.state`, and restored to its original form through a redirect that the [`liff.init()`](/reference/liff/#initialize-liff-app) method performs.

For example, when `https://liff.line.me/{liffId}/?store=shibuya` is accessed, the following is a typical mistake:

```javascript
// Bad example: reading the URL without waiting for liff.init() to complete
const params = new URLSearchParams(location.search);
const store = params.get("store"); // May be null

liff.init({ liffId: myLiffId });
```

`store` may be `null` because the additional information is still stored in `liff.state`.

So, read the URL after the `Promise` object returned by the `liff.init()` method is resolved:

```javascript
await liff.init({ liffId: myLiffId });

// You can read the parameters after liff.init() has finished.
const params = new URLSearchParams(location.search);
const store = params.get("store");
```

The same applies to paths and URL fragments: once `liff.init()` has finished, you can read them from `location.pathname` and `location.hash`.

Rewriting the URL is even more serious. If you change the URL or perform a server-side redirect before the `Promise` object is resolved, the LIFF app may not open properly. Libraries that manipulate the URL at load time, such as SPA routers and analytics tags, should also be initialized after `liff.init()` has finished. For more information, see [Process URL changes after `liff.init()` completes](/reference/liff/#initializing-liff-app-notes-3) in the LIFF API reference.

## Don't modify query parameters starting with `liff.`

Query parameters starting with `liff.`, such as `liff.state`, are pieces of information that the LIFF SDK uses for initialization and LIFF-to-LIFF transitions. Changing or deleting them may prevent your LIFF app from working properly, so leave them untouched:sup[[1](#user-content-fn-liff-query-params){ariaDescribedBy="[\"footnote-label\"]" dataFootnoteRef="" #user-content-fnref-liff-query-params}].

## Wrap-up

For more information about the behavior introduced in this article, see the following documentation:

- [Behaviors from accessing the LIFF URL to opening the LIFF app](/docs/liff/opening-liff-app/#redirect-flow) in the LIFF documentation
- [`liff.init()`](/reference/liff/#initialize-liff-app) in the LIFF API reference

  :::section
  ---
  className:
    - footnotes
  dataFootnotes: ''
  ---
  ## Footnotes

  1. For more information, see [Initializing the LIFF app](/docs/liff/developing-liff-apps/#initializing-liff-app) in the LIFF documentation. [↩](#user-content-fnref-liff-query-params){ariaLabel="Back to reference 1" className="[\"data-footnote-backref\"]" dataFootnoteBackref=""}
  :::

  :::style
  html pre.shiki code .sH3jZ, html code.shiki .sH3jZ{--shiki-default:#8B949E}html pre.shiki code .suJrU, html code.shiki .suJrU{--shiki-default:#FF7B72}html pre.shiki code .sFSAA, html code.shiki .sFSAA{--shiki-default:#79C0FF}html pre.shiki code .sc3cj, html code.shiki .sc3cj{--shiki-default:#D2A8FF}html pre.shiki code .sZEs4, html code.shiki .sZEs4{--shiki-default:#E6EDF3}html pre.shiki code .s9uIt, html code.shiki .s9uIt{--shiki-default:#A5D6FF}html .default .shiki span {color: var(--shiki-default);background: var(--shiki-default-bg);font-style: var(--shiki-default-font-style);font-weight: var(--shiki-default-font-weight);text-decoration: var(--shiki-default-text-decoration);}html .shiki span {color: var(--shiki-default);background: var(--shiki-default-bg);font-style: var(--shiki-default-font-style);font-weight: var(--shiki-default-font-weight);text-decoration: var(--shiki-default-text-decoration);}
  :::

  :::tags{tags="liff" lang="en" section="tips"}

  :::
::
