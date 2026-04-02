---
title: Performance guidelines
navigation: true
description: null
meta: '{"tags":null,"author":null,"last_updated":null,"source_language":"en"}'
path: /en/docs/line-mini-app/develop/performance-guidelines
__hash__: rLzmi4OztDz8QF9puGvlJNkpxOEKjdF8_aI1t-RsNFU
seo:
  title: Performance guidelines
  description: null
---

# :page-title

:markdown-controlsTo provide the best possible LINE MINI App experience to your users, take the performance of LINE MINI App into consideration.

A good reference regarding the importance of HTML5 performance, [Why does speed matter?](https://web.dev/learn/performance/why-speed-matters){rel="[\"nofollow\"]"}, can be found on web.dev.

For measuring performance, we recommend using performance measurement tools such as [Lighthouse](https://developer.chrome.com/docs/lighthouse/overview/){rel="[\"nofollow\"]"} and [PageSpeed Insights](https://pagespeed.web.dev/){rel="[\"nofollow\"]"}, provided by Google.

LY Corporation recommends the following score.

| Performance measurement tool                                                               | Score                     |
| ------------------------------------------------------------------------------------------ | ------------------------- |
| [Lighthouse](https://developer.chrome.com/docs/lighthouse/overview/){rel="[\"nofollow\"]"} | Performance: 50 and above |

::admonition{title="Note" type="note"}
- Measure without executing LINE Login. When LINE Login is executed simultaneously, the performance of the LINE Login page is measured, preventing LINE MINI App's performance from being measured.
- Be sure to measure in the production environment (real environment). Note that the network environment can affect the performance score.
::
