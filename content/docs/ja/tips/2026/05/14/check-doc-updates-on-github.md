---
title: 「あれ、ドキュメント変わった？」と思ったら、GitHubで確認しよう
navigation: true
description: こんにちは！LINE Developersサイトのドキュメントを担当している、テクニカルライターの岡島です。
meta: >-
  {"date":"2026-05-14 00:00 UTC","tags":"docs,
  line-developers-site","locale":"ja","sidebar":false}
path: /ja/tips/2026/05/14/check-doc-updates-on-github
__hash__: J-ER7f47Px8Wy1trl2fVaDBM7xcZUJnEJA0dB_5V-jU
seo:
  title: 「あれ、ドキュメント変わった？」と思ったら、GitHubで確認しよう
  description: こんにちは！LINE Developersサイトのドキュメントを担当している、テクニカルライターの岡島です。
---

::Tips
# :page-title

  :::display-date{date="2026/05/14" .!mb-20}

  :::

こんにちは！LINE Developersサイトのドキュメントを担当している、テクニカルライターの岡島です。

LINE Developersサイトのドキュメントを読んでいて、「あれ、ドキュメント変わった？」と思ったことはないでしょうか。実は、LINE Developersサイトのドキュメントの変更履歴は、GitHubで確認できるようになっています。詳しくは、[2026年4月8日](/news/2026/04/08/line-developers-docs-source/)のニュースを参照してください。

[LINE Developers Documentation Source Files](https://github.com/line/line-developers-docs-source){rel="[\"nofollow\"]"}

## リポジトリの構成

LINE DevelopersサイトのドキュメントのMarkdownファイルは、[`docs`](https://github.com/line/line-developers-docs-source/tree/main/docs){rel="[\"nofollow\"]"}ディレクトリ配下に、言語ごとに格納されています。

```bash
.
├── en # 英語
└── ja # 日本語
```

たとえば、[`docs/ja`](https://github.com/line/line-developers-docs-source/tree/main/docs/ja){rel="[\"nofollow\"]"}ディレクトリの構成は次のとおりです。

```bash
.
├── docs # ドキュメント
│   ├── basics # LINEプラットフォームの基礎知識
│   ├── liff # LIFF
│   ├── line-ads-api # LINE広告API
│   ├── line-conversion-api # LINE Conversion API
│   ├── line-developers-console # LINE Developersコンソール
│   ├── line-login # LINEログイン
│   ├── line-login-sdks # LINEログインSDK
│   ├── line-mini-app # LINEミニアプリ
│   ├── messaging-api # Messaging API
│   └── partner-docs # 法人ユーザー向けオプション
└── reference # APIリファレンス
    ├── liff # LIFF（クライアント）
    ├── liff-server # LIFF（サーバー）
    ├── line-login # LINEログイン（v2.1）
    ├── line-login-v2 # LINEログイン（v2.0）
    ├── line-mini-app # LINEミニアプリ
    ├── line-notification-messages # LINE通知メッセージ
    ├── messaging-api # Messaging API
    └── partner-docs # 法人ユーザー向けオプション
```

## LINE Developersサイトの変更履歴を確認する

LINE Developersサイトのドキュメントの変更履歴を確認するには、対応するMarkdownファイルをGitHub上で表示し、［**History**］ボタンを押します。GitHubでは、2026年3月30日以降の変更履歴を確認できます。

![](/media/tips/2026/channel-access-token-on-github-ja.webp){className="[\"border\"]"}

なお、LINE Developersサイトの各ページのタイトル下にある［**GitHubで表示**］ボタンを押すことで、そのページのMarkdownファイルを直接開くこともできます。

![](/media/news/2026/view-on-github-ja.png){className="[\"border\"]"}

## 終わりに

これまでは、LINE Developersサイトのドキュメントが変更されたことに気づいても、変更内容を把握するのは簡単ではありませんでした。GitHubで変更履歴を確認できるようになったことで、より効率的にキャッチアップできるようになりました。

開発者のみなさまのドキュメント体験が、少しでもよりよいものとなりましたら幸いです。

  :::style
  html pre.shiki code .sFSAA, html code.shiki .sFSAA{--shiki-default:#79C0FF}html pre.shiki code .sQhOw, html code.shiki .sQhOw{--shiki-default:#FFA657}html pre.shiki code .s9uIt, html code.shiki .s9uIt{--shiki-default:#A5D6FF}html pre.shiki code .sH3jZ, html code.shiki .sH3jZ{--shiki-default:#8B949E}html .default .shiki span {color: var(--shiki-default);background: var(--shiki-default-bg);font-style: var(--shiki-default-font-style);font-weight: var(--shiki-default-font-weight);text-decoration: var(--shiki-default-text-decoration);}html .shiki span {color: var(--shiki-default);background: var(--shiki-default-bg);font-style: var(--shiki-default-font-style);font-weight: var(--shiki-default-font-weight);text-decoration: var(--shiki-default-text-decoration);}
  :::

  :::tags{tags="docs, line-developers-site" lang="en" section="tips"}

  :::
::
