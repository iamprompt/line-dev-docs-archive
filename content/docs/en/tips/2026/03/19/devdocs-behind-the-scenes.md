---
title: LINE Developers site - behind the scenes
navigation: true
description: >-
  Hi there! I'm Roman, lead engineer of this very LINE Developers site. In
  today's tip, I want to give you some insight into recent developments on the
  LINE Developers site.
meta: >-
  {"date":"2026-03-19 00:00
  UTC","tags":"line-developers-site","locale":"en","sidebar":false}
path: /en/tips/2026/03/19/devdocs-behind-the-scenes
__hash__: SJvHG_2A9eUqJ7VzS56OXVIZHC7-9vTL-YRxWknAC4w
seo:
  title: LINE Developers site - behind the scenes
  description: >-
    Hi there! I'm Roman, lead engineer of this very LINE Developers site. In
    today's tip, I want to give you some insight into recent developments on the
    LINE Developers site.
---

::Tips
# :page-title

  :::display-date{date="2026/03/19" .!mb-20}

  :::

Hi there! I'm Roman, lead engineer of this very LINE Developers site. In today's tip, I want to give you some insight into recent developments on the LINE Developers site.

This article doesn't provide concrete tips for developers, but since many developers read this site, I'd like to share how it works under the hood and what's changed recently.

## LINE Developers vs. VuePress

For several years, LINE Developers site has been developed using [VuePress v1](https://v1.vuepress.vuejs.org/){rel="[\"nofollow\"]"}. VuePress is a fantastic framework that provides native rendering of Markdown contents and the core functionality needed to build a documentation site out of the box.

However, after a while we ran into several issues.

First, performance started to decline. Booting up the local development server could easily exceed one minute. Building and deploying the site easily exceeded 10 minutes. One reason for the degraded performance was simply the size of our site, which contains more than 1,000 pages of content per language (English, Japanese).

Another reason was that our tech stack was getting old. VuePress was still using the JavaScript framework Vue on version 2, while Vue v3 was already released. Yes, there was a VuePress version 2 using Vue v3 in development. However, at the time of choosing the next tech stack for LINE Developers the future of VuePress looked uncertain, with development possibly being discontinued in favor of [VitePress](https://vitepress.dev/){rel="[\"nofollow\"]"}. Also, the latter was still in its early stages and was less focused on customization compared to VuePress, making either VuePress v2 or VitePress a risky choice.

## Transition to Nuxt

To address the issues above, a new tech stack needed to be chosen. As you may have guessed from the title of this section, we chose [Nuxt](https://nuxt.com/){rel="[\"nofollow\"]"}. Sure, there are other great tools out there suitable for our goal - for example React frameworks such as [Next.js](https://nextjs.org/){rel="[\"nofollow\"]"} or [Markdoc](https://markdoc.dev/){rel="[\"nofollow\"]"}, just to name a few. Since our codebase was already on Vue.js, transitioning to another Vue.js-based framework was the obvious choice.

Choosing Nuxt brought many benefits: First, the aforementioned performance issues, such as having a slow local development server boot or a slow site build, could be addressed. The local dev server now boots up in seconds, and a site build takes around 7 minutes. Furthermore, we could simplify the build pipeline along the way, making the site easier to maintain in the process. A big reason for this is the use of [Vite](https://vite.dev/){rel="[\"nofollow\"]"} under the hood (for Nuxt) instead of [Webpack](https://webpack.js.org/){rel="[\"nofollow\"]"} (for VuePress v1).

Next, having a more modern framework also brings a more modern tech stack, leveraging the benefits of the latest [Vue v3](https://vuejs.org/){rel="[\"nofollow\"]"} and [Tailwind v4](https://tailwindcss.com/){rel="[\"nofollow\"]"}, which greatly speeds up development and makes it much more comfortable.

But there were also challenges: The public release of LINE Developers was in September 2025, roughly 6 months ago. Work on transitioning to Nuxt actually began around two years before that. Most of the work was carried out within the year leading up to the public release.

With limited resources available and a huge amount of content on the site, moving the tech stack to a new framework took time. But for the benefits mentioned above, it was absolutely worth it. Personally, working on the site is now much more enjoyable than before.

## Changes

Did you notice the switch to Nuxt in September 2025? Did you notice any changes?

Yes? - That's fantastic! You have an eye for detail. Nothing can be hidden from you.

No? - That's also fantastic, because we intended to keep the design, the functionality and the content of the site as is for the most part. So if you didn't notice the switch, that means we did a good job.

So what did actually change?

One major change is the search feature. On VuePress, we had a header-based quick search feature provided by VuePress out of the box, as well as a full-text search powered by [OpenSearch](https://opensearch.org/){rel="[\"nofollow\"]"}. The quick search feature was implemented with a suggestion dropdown displayed under the header, while the full-text search led to a separate search results page. Now with Nuxt, the search UI has been consolidated into a modal that always uses full-text search.

Pro tip: if you want to share your search with somebody else, you can still do so by adding `kw={search keyword}` to the end of the URL.

Example: [https://developers.line.biz/en/?kw=test](https://developers.line.biz/en/?kw=test){rel="[\"nofollow\"]"}

![Screenshot of search modal](/media/tips/2026/search-share-url-en.webp)

Another change is the discontinuation of Chinese content. Since it was no longer being updated, we stopped providing it to avoid offering outdated information.

And that was basically it at the time of public release!

A big change since then was obviously the addition of this very [Tips for Developers](/tips/) section.

## What does that mean for you?

The simple answer is: nothing!

But upgrading the site's tech stack has helped us improve our operational efficiency. This eventually helps you - the dear user - to continuously get the latest information about LINE developer platforms.

We're looking forward to keeping this site fresh and performant for you for years to come!

  :::tags{tags="line-developers-site" lang="en" section="tips"}

  :::
::
