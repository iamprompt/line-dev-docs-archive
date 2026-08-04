---
title: パフォーマンスガイドライン
navigation: true
description: null
meta: '{"tags":null,"author":null,"last_updated":null,"source_language":"ja"}'
path: /ja/docs/line-mini-app/develop/performance-guidelines
__hash__: z9qaOzIyc-1HvHbffcS-8NB_uFlrN6YTuPiHoBlhgHU
seo:
  title: パフォーマンスガイドライン
  description: null
---

# :page-title

:markdown-controlsLINEミニアプリのユーザーがサービスを快適に利用できるように、LINEミニアプリのパフォーマンスも十分に考慮してください。

HTML5のパフォーマンスの重要性については、web.devの「[速度が重要な理由](https://web.dev/learn/performance/why-speed-matters?hl=ja){rel="[\"nofollow\"]"}」が参考になります。

なお、パフォーマンスを計測する場合は、Googleが提供する[Lighthouse](https://developer.chrome.com/docs/lighthouse/overview/){rel="[\"nofollow\"]"}や[PageSpeed Insights](https://pagespeed.web.dev/){rel="[\"nofollow\"]"}などのパフォーマンス計測ツールを利用することをお勧めします。

LINEヤフー株式会社では、以下のスコアを満たすことを推奨しています。

| パフォーマンス計測ツール                                                                               | スコア               |
| ------------------------------------------------------------------------------------------ | ----------------- |
| [Lighthouse](https://developer.chrome.com/docs/lighthouse/overview/){rel="[\"nofollow\"]"} | Performance: 50以上 |

::admonition{title="注意" type="note"}
- LINEログインが実行されない状態で計測してください。LINEログインが実行されると、LINEログインのページのパフォーマンスが計測され、LINEミニアプリのパフォーマンスは計測されません。
- プロダクション環境（本番環境）で計測してください。スコアは、ネットワーク環境などの影響を受ける場合があります。
::
