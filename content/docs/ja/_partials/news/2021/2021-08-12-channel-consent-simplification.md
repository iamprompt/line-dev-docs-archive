---
title: 同意画面をスキップできる「チャネル同意の簡略化」機能をリリースしました
navigation: true
description: ユーザーが、LINEミニアプリに初めてアクセスする際に表示される同意画面をスキップできる「チャネル同意の簡略化」機能がリリースされました。
meta: '{"date":"2021-08-12 00:00 UTC","tags":"LINE MINI app, console","locale":"ja"}'
path: /ja/_partials/news/2021/2021-08-12-channel-consent-simplification
__hash__: 4RsIYc9CB1Lvs8hC2eJj0N0Jqr_whdYnfiPkq3OB9zg
seo:
  title: 同意画面をスキップできる「チャネル同意の簡略化」機能をリリースしました
  description: ユーザーが、LINEミニアプリに初めてアクセスする際に表示される同意画面をスキップできる「チャネル同意の簡略化」機能がリリースされました。
---

ユーザーが、LINEミニアプリに初めてアクセスする際に表示される[同意画面](/docs/line-mini-app/develop/configure-console/#consent-screen-settings)をスキップできる「チャネル同意の簡略化」機能がリリースされました。

::admonition{title="「チャネル同意の簡略化」機能でスキップされる権限同意" type="note"}
「チャネル同意の簡略化」機能でスキップされる権限同意は、:glossary-tooltip[[ユーザーID](/glossary/#user-id)]{glossary-id="user-id"}（`openid`スコープ）のみです。ユーザーのプロフィール情報取得やメッセージ送信に必要な権限（`profile`スコープまたは`chat_message.write`スコープ）は、「チャネル同意の簡略化」の対象に含まれません。
::

### 「チャネル同意の簡略化」の設定方法

[LINE Developersコンソール](/console/)のLINEミニアプリチャネルで、LIFFタブの**チャネル同意の簡略化**セクションのトグルボタンをオン（右）にすることで、「チャネル同意の簡略化」が有効化されます。

![チャネル同意の簡略化設定のトグルボタン](/media/line-mini-app/simplification-feature-setup-ja.png){className="[\"border\",\"w-fix-760\"]"}

::admonition{title="「チャネル同意の簡略化」設定時の注意点" type="note"}
- 「チャネル同意の簡略化」は、LINEミニアプリチャネルの**地域**の設定が「日本」の場合のみ設定できます。
- 「チャネル同意の簡略化」は、LINEミニアプリチャネルのワークフローが**開発中**の場合にのみ設定できます。
- 「チャネル同意の簡略化」を有効化したチャネルでは、`openid`スコープが自動的に有効化されます。
::

### 「チャネル同意の簡略化」を有効化したLINEミニアプリにアクセスした際の動作

「チャネル同意の簡略化」を有効化したLINEミニアプリに初めてアクセスした場合は、チャネル同意画面が表示され、:glossary-tooltip[[ユーザーID](/glossary/#user-id)]{glossary-id="user-id"}の利用に対する同意を要求されます。

![チャネル同意画面](/media/line-mini-app/simplification-process-01-ja.png){className="[\"border\",\"w-fix-200\"]"}

ユーザーは上記の同意のプロセスを一度行うだけで、別のLINEミニアプリに初めてアクセスした場合は同意プロセスをスキップして、すぐにサービスの利用を開始できるようになります。

![チャネル同意の簡略化設定オンの場合](/media/line-mini-app/channel-consent-simplification-enabled-ja.png){className="[\"w-fix-680\"]"}

詳しくは、『LINEミニアプリドキュメント』の「[同意画面のプロセスをスキップする](/docs/line-mini-app/develop/channel-consent-simplification/)」を参照してください。
