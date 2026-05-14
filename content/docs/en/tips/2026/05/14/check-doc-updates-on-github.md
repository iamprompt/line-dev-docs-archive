---
title: Think the documentation has changed? Check GitHub
navigation: true
description: >-
  Hi! I’m Okajima, a technical writer in charge of documentation for the LINE
  Developers site.
meta: >-
  {"date":"2026-05-14 00:00 UTC","tags":"docs,
  line-developers-site","locale":"en","sidebar":false}
path: /en/tips/2026/05/14/check-doc-updates-on-github
__hash__: OQdrnVl8niuTw5H8MRuC-unB-ClI5H65-r03vskXu8o
seo:
  title: Think the documentation has changed? Check GitHub
  description: >-
    Hi! I’m Okajima, a technical writer in charge of documentation for the LINE
    Developers site.
---

::Tips
# :page-title

  :::display-date{date="2026/05/14" .!mb-20}

  :::

Hi! I’m Okajima, a technical writer in charge of documentation for the LINE Developers site.

Have you ever read the LINE Developers documentation and thought, "Wait, did something change"? You can actually check the change history of the LINE Developers site documentation on GitHub. For more information, see the news from [April 8, 2026](/news/2026/04/08/line-developers-docs-source/).

[LINE Developers Documentation Source Files](https://github.com/line/line-developers-docs-source){rel="[\"nofollow\"]"}

## Repository structure

The Markdown files for the LINE Developers site documentation are stored under the [`docs`](https://github.com/line/line-developers-docs-source/tree/main/docs){rel="[\"nofollow\"]"} directory, organized by language.

```bash
.
├── en # English
└── ja # Japanese
```

For example, the structure of the [`docs/en`](https://github.com/line/line-developers-docs-source/tree/main/docs/en){rel="[\"nofollow\"]"} directory is as follows:

```bash
.
├── docs # documentation
│   ├── basics # LINE Platform basics
│   ├── liff # LIFF
│   ├── line-ads-api # LINE Ads API
│   ├── line-conversion-api # LINE Conversion API
│   ├── line-developers-console # LINE Developers Console
│   ├── line-login # LINE Login
│   ├── line-login-sdks # LINE Login SDKs
│   ├── line-mini-app # LINE MINI App
│   ├── messaging-api # Messaging API
│   └── partner-docs # Options for corporate customers
└── reference # API reference
    ├── liff # LIFF (client)
    ├── liff-server # LIFF (server)
    ├── line-login # LINE Login (v2.1)
    ├── line-login-v2 # LINE Login (v2.0)
    ├── line-mini-app # LINE MINI App
    ├── line-notification-messages # LINE notification messages
    ├── messaging-api # Messaging API
    └── partner-docs # Options for corporate customers
```

## Check the change history of the LINE Developers site

To check the change history of the LINE Developers site documentation, open the corresponding Markdown file on GitHub and click the **History** button. You can view changes made since March 30, 2026.

![](/media/tips/2026/channel-access-token-on-github-en.png){className="[\"border\"]"}

You can also open the Markdown file for any page directly by clicking the **View on GitHub** button under the page title on the LINE Developers site.

![](/media/news/2026/view-on-github-en.png){className="[\"border\"]"}

## Wrap-up

Previously, even when you noticed that the LINE Developers site documentation had changed, it wasn't always easy to see what exactly had been updated. Now that you can check the change history on GitHub, you can stay up to date more easily.

I hope this makes your documentation experience even a little better.

  :::style
  html pre.shiki code .sFSAA, html code.shiki .sFSAA{--shiki-default:#79C0FF}html pre.shiki code .sQhOw, html code.shiki .sQhOw{--shiki-default:#FFA657}html pre.shiki code .s9uIt, html code.shiki .s9uIt{--shiki-default:#A5D6FF}html pre.shiki code .sH3jZ, html code.shiki .sH3jZ{--shiki-default:#8B949E}html .default .shiki span {color: var(--shiki-default);background: var(--shiki-default-bg);font-style: var(--shiki-default-font-style);font-weight: var(--shiki-default-font-weight);text-decoration: var(--shiki-default-text-decoration);}html .shiki span {color: var(--shiki-default);background: var(--shiki-default-bg);font-style: var(--shiki-default-font-style);font-weight: var(--shiki-default-font-weight);text-decoration: var(--shiki-default-text-decoration);}
  :::

  :::tags{tags="docs, line-developers-site" lang="en" section="tips"}

  :::
::
