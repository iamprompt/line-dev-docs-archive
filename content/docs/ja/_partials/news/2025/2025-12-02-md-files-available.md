---
title: LINE Developersサイトにおいて、ドキュメントのMarkdown形式での提供およびllms.txtの提供を開始しました
navigation: true
description: >-
  LINE
  Developersサイトで提供しているドキュメントおよびリファレンスの一部が、Markdown形式での表示に対応しました。また、ドキュメントの一覧をLLM向けに案内するllms.txtの提供も開始しました。
meta: >-
  {"date":"2025-12-02 00:00 UTC","tags":"line-developers-site,
  docs","locale":"ja"}
path: /ja/_partials/news/2025/2025-12-02-md-files-available
__hash__: EP9uimEZxXhMMS3H4PF-0umdRmWqpbABoYN6_kWqUNo
seo:
  title: LINE Developersサイトにおいて、ドキュメントのMarkdown形式での提供およびllms.txtの提供を開始しました
  description: >-
    LINE
    Developersサイトで提供しているドキュメントおよびリファレンスの一部が、Markdown形式での表示に対応しました。また、ドキュメントの一覧をLLM向けに案内するllms.txtの提供も開始しました。
---

LINE Developersサイトで提供しているドキュメントおよびリファレンスの一部が、Markdown形式での表示に対応しました。また、ドキュメントの一覧をLLM向けに案内する:file-link[`llms.txt`]{file="/llms.txt"}の提供も開始しました。

これにより、開発者のみなさまが利用する生成AIやAIエージェントから、ドキュメントをより簡単に参照できるようになります。

![](/media/news/2025/md-files-ui-ja.png){className="[\"border\",\"w-fix-480\"]"}

### リリース日

2025年12月2日

### リリース内容

以下の内容をリリースしました。

- [ドキュメントおよびリファレンスをMarkdown形式で提供](#release-md-20251202)
- [llms.txtの提供](#release-llmstxt-20251202)

### ドキュメントおよびリファレンスをMarkdown形式で提供

以下のカテゴリ配下のドキュメントおよびリファレンスを、Markdown形式で取得および表示できるようになりました。

- [LINEプラットフォームの基礎知識](/docs/basics/)
- [LINE Developersコンソール](/docs/line-developers-console/)
- [Messaging API](/docs/messaging-api/)（※）
- [LINEログイン](/docs/line-login/)
- [LINE Front-end Framework (LIFF)](/docs/liff/)
- [LINEミニアプリ](/docs/line-mini-app/)
- [法人ユーザー向けオプション](/docs/partner-docs/)

※ 「[スタンプ](/docs/messaging-api/sticker-list/)」と「[LINE絵文字](/docs/messaging-api/emoji-list/)」は対象外です。

対応するカテゴリでは、ページタイトル付近に以下のボタンが表示されます。ボタンを押すことで、そのページの内容をMarkdown形式で取得または表示できます。

| ボタン               | 説明                                                                                                   |
| ----------------- | ---------------------------------------------------------------------------------------------------- |
| ［**LLM用にコピー**］    | 現在表示しているページの内容をMarkdown形式でクリップボードにコピーします。                                                            |
| ［**Markdownで表示**］ | 現在表示しているページのMarkdownファイルを別タブで開きます。なお、MarkdownファイルのURLは、ページURLの末尾に `index.html.md` を付与することで開くことができます。 |

### llms.txtの提供

LINE Developersサイトのルートディレクトリに:file-link[`llms.txt`]{file="/llms.txt"}を追加しました。このファイルには、主要なドキュメントページのURLが一覧で記載されています。

`llms.txt`は、LLMがドキュメントを効率的に参照、処理できるようにするための構造化テキストファイルです。詳しくは、「[https://llmstxt.org/](https://llmstxt.org/){rel="[\"nofollow\"]"}」を参照してください。

```text
// llms.txtの抜粋

## LINE Platform basics

The LINE Platform basics documentation provides an introduction to the core features of the LINE Platform.

- [Channel access token](https://developers.line.biz/en/docs/basics/channel-access-token/index.html.md): Describes how to issue and use channel access tokens for LINE API authentication.
- [Get user profile information](https://developers.line.biz/en/docs/basics/user-profile/index.html.md): Explains how to retrieve user profile information using the LINE API.
- [Check the availability of the LINE Platform (LINE API Status)](https://developers.line.biz/en/docs/basics/line-api-status/index.html.md): Provides the current status and availability information for the LINE API and platform services.
```

開発者のみなさまが当社サービスを利用したアプリ開発をさらに円滑に進められるように、今後も引き続き、LINE Developersサイトと開発者向けドキュメントの品質向上に努めて参ります。
