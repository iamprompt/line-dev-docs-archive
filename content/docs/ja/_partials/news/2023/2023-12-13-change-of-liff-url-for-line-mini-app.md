---
title: LINEミニアプリのLIFF URLが変更されました
navigation: true
description: LINEミニアプリのLIFF URLが、新しいドメイン名のhttps://miniapp.line.me/{liffId}に変更されました。
meta: '{"date":"2023-12-13 01:00 UTC","tags":"line-mini-app, console","locale":"ja"}'
path: /ja/_partials/news/2023/2023-12-13-change-of-liff-url-for-line-mini-app
__hash__: 3NcVMttwR0XYpHPTlBY4Vn3a5jWLwigHbnRuMOH8a4w
seo:
  title: LINEミニアプリのLIFF URLが変更されました
  description: LINEミニアプリのLIFF URLが、新しいドメイン名のhttps://miniapp.line.me/{liffId}に変更されました。
---

LINEミニアプリの:glossary-tooltip[[LIFF URL](/glossary/#liff-url)]{glossary-id="liff-url"}が、新しいドメイン名の`https://miniapp.line.me/{liffId}`に変更されました。

この変更により、LINEミニアプリの:glossary-tooltip[[パーマネントリンク](/glossary/#permanent-link-liff)]{glossary-id="permanent-link-liff"}を共有する際に、そのURLがLINEミニアプリのものであることをユーザーに明示的に伝えることができます。

新しいドメイン名はLINEプラットフォーム側で自動的に適用されるため、開発者側で必要な作業はありません。

また、変更前に作成したLINEミニアプリのLIFF URLにアクセスした場合も、当該のLINEミニアプリが開きます。そのため、発行済みのQRコードも引き続き利用可能です。

### 変更日

2023年12月13日

### 変更点

LINEミニアプリにおいて、LIFF URLのドメイン名が変更されました。LINEミニアプリのLIFF URLは、[LINE Developersコンソール](/console/)でLINEミニアプリチャネルを選択し、［**LIFF**］タブを開くと確認できます。

| 変更前                             | 変更後（現在）                            |
| ------------------------------- | ---------------------------------- |
| `https://liff.line.me/{liffId}` | `https://miniapp.line.me/{liffId}` |

LINEミニアプリのLIFF URLについて詳しくは、『LINEミニアプリドキュメント』の「[パーマネントリンクを作成する](/docs/line-mini-app/develop/permanent-links/)」を参照してください。
