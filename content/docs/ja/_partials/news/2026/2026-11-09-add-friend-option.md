---
title: LINEミニアプリの友だち追加オプションにおいて、「チャネル同意画面に表示するLINE公式アカウントを切り替える」機能の提供を再開しました
navigation: true
description: >-
  2026年9月15日より一時的に提供を停止しておりました、LINEミニアプリの友だち追加オプションにおける「チャネル同意画面に表示するLINE公式アカウントを切り替える」機能の提供を再開いたしました。
meta: '{"date":"2026-11-09 00:00 UTC","tags":"line-mini-app","locale":"ja"}'
path: /ja/_partials/news/2026/2026-11-09-add-friend-option
__hash__: Wkm4Y7eA8fFcByjmNR5VIQAknAl5d_qvbSWjAn8EBHA
seo:
  title: LINEミニアプリの友だち追加オプションにおいて、「チャネル同意画面に表示するLINE公式アカウントを切り替える」機能の提供を再開しました
  description: >-
    2026年9月15日より一時的に提供を停止しておりました、LINEミニアプリの友だち追加オプションにおける「チャネル同意画面に表示するLINE公式アカウントを切り替える」機能の提供を再開いたしました。
---

[2026年9月15日](/news/2026/09/15/use-multiple-accounts/)より一時的に提供を停止しておりました、LINEミニアプリの友だち追加オプションにおける「チャネル同意画面に表示するLINE公式アカウントを切り替える」機能の提供を再開いたしました。

お客様には多大なご迷惑をお掛けし、誠に申し訳ございませんでした。

### 提供の再開に伴う変更点

提供の再開に伴い、「チャネル同意画面に表示するLINE公式アカウントを切り替える」機能の仕様が一部変更されておりますので、ご注意ください。

| 変更前                                                                             | 変更後（現在）                                                                          |
| ------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| - すべてのLIFF SDKのバージョンで利用可能 - チャネル同意画面に表示するLINE公式アカウントを`prompt_bot_id`クエリパラメータで指定 | - LIFF v2.32.0以上で利用可能 - チャネル同意画面に表示するLINE公式アカウントを`liff_prompt_bot_id`クエリパラメータで指定 |

### チャネル同意画面に表示するLINE公式アカウントを切り替える

チャネル同意画面に表示するLINE公式アカウントを切り替えるには、:glossary-tooltip[[LIFF URL](/glossary/#liff-url)]{glossary-id="liff-url"}または:glossary-tooltip[[パーマネントリンク](/glossary/#permanent-link-liff)]{glossary-id="permanent-link-liff"}に`liff_prompt_bot_id`クエリパラメータを付与します。

`liff_prompt_bot_id`クエリパラメータには、友だち追加を促すLINE公式アカウントのIDを、ベーシックIDまたは:glossary-tooltip[[プレミアムID](/glossary/#premium-id)]{glossary-id="premium-id"}で指定します。

```text
https://miniapp.line.me/123456-abcedfg?liff_prompt_bot_id=@819...
```

```text
https://liff.line.me/123456-abcedfg?liff_prompt_bot_id=@819...
```

詳しくは、『LINEミニアプリドキュメント』の「[チャネル同意画面に表示するLINE公式アカウントを切り替える](/docs/line-mini-app/service/add-friend-option/#channel-consent-screen)」を参照してください。
