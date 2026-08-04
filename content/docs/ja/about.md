---
title: LINE Developersサイトとは
navigation: true
description: >-
  LINEヤフー株式会社では、外部の企業や開発者に向けて、LINEヤフー株式会社のサービスとの連携が可能になるAPI（以降、LINE
  APIと呼びます）を提供しています。LINE Developersサイト（https://developers.line.biz/）では、そうしたLINE
  APIの仕様や、開発手順を解説したドキュメントを開発者向けに提供しています。
meta: '{"sidebar":false,"search_index":false,"feedback_form":false}'
path: /ja/about
__hash__: 8krEhfKSdPGY9yGl3iUr6a30bE51P863xKPS70wsw3E
seo:
  title: LINE Developersサイトとは
  description: >-
    LINEヤフー株式会社では、外部の企業や開発者に向けて、LINEヤフー株式会社のサービスとの連携が可能になるAPI（以降、LINE
    APIと呼びます）を提供しています。LINE
    Developersサイト（https://developers.line.biz/）では、そうしたLINE
    APIの仕様や、開発手順を解説したドキュメントを開発者向けに提供しています。
---

# :page-title

LINEヤフー株式会社では、外部の企業や開発者に向けて、LINEヤフー株式会社のサービスとの連携が可能になるAPI（以降、LINE APIと呼びます）を提供しています。LINE Developersサイト（[https://developers.line.biz/](/)）では、そうしたLINE APIの仕様や、開発手順を解説したドキュメントを開発者向けに提供しています。

たとえば、「自社で運営するECサイトに『LINEログイン』のボタンをつけて、エンドユーザーが手軽にLINEアカウントでログインできるようにしたい」と考えた開発者が、「実装方法がわからない」といった技術的な問題につまづかず、スムーズに開発できるよう、LINE DevelopersサイトではドキュメントやAPIリファレンスを公開しています。

| LINE Developersサイトのコンテンツ                                    | 内容                                                                                                                            |
| ----------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| [ニュース](/news/)                                              | LINEプラットフォームの更新情報、障害情報をお知らせします。                                                                                               |
| [プロダクト](/services/)                                         | 各サービスの特徴や概要を簡単に紹介しています。                                                                                                       |
| [ドキュメント](/docs/)                                            | 各サービスの開発手順や仕様を解説しているドキュメントとAPIリファレンスです。                                                                                       |
| [FAQ](/faq/)                                                | LINE APIに関するよくある質問と回答です。                                                                                                      |
| ::glossary-tooltip{glossary-id=""}   [用語集](/glossary/)   :: | LINE APIに関する用語集です。                                                                                                            |
| [LINE Developersコンソール](/console/)                           | 開発者向けの管理画面です。詳しくは、『LINE Developersコンソールドキュメント』の「[LINE Developersコンソールの概要](/docs/line-developers-console/overview/)」を参照してください。 |

## Markdown形式での提供

以下のカテゴリ配下のドキュメントおよびリファレンスを、Markdown形式で取得および表示できます。

- [LINEプラットフォームの基礎知識](/docs/basics/)
- [LINE Developersコンソール](/docs/line-developers-console/)
- [Messaging API](/docs/messaging-api/)（※）
- [LINEログイン](/docs/line-login/)
- [LINE Front-end Framework (LIFF)](/docs/liff/)
- [LINEミニアプリ](/docs/line-mini-app/)
- [法人ユーザー向けオプション](/docs/partner-docs/)

※ 「[スタンプ](/docs/messaging-api/sticker-list/)」と「[LINE絵文字](/docs/messaging-api/emoji-list/)」は対象外です。

対応するカテゴリでは、ページタイトル付近に以下のボタンが表示されます。ボタンを押すことで、そのページの内容をMarkdown形式で取得または表示できます。

| ボタン               | 説明                                                                                                                 |
| ----------------- | ------------------------------------------------------------------------------------------------------------------ |
| ［**LLM用にコピー**］    | 現在表示しているページの内容をMarkdown形式でクリップボードにコピーします。                                                                          |
| ［**Markdownで表示**］ | 現在表示しているページのMarkdownファイルを別タブで開きます。なお、MarkdownファイルのURLは、ページURLの末尾に `index.html.md` を付与することで開くことができます。               |
| ［**GitHubで表示**］   | 現在表示しているページのMarkdownファイルを[GitHub](https://github.com/line/line-developers-docs-source){rel="[\"nofollow\"]"}で開きます。 |

## llms.txtの提供

LINE Developersサイトのルートディレクトリに:file-link[`llms.txt`]{file="/llms.txt"}を配置しています。このファイルには、主要なドキュメントページのURLが一覧で記載されています。

`llms.txt`は、LLMがドキュメントを効率的に参照、処理できるようにするための構造化テキストファイルです。詳しくは、「[https://llmstxt.org/](https://llmstxt.org/){rel="[\"nofollow\"]"}」を参照してください。

## LINE Developersサイトの関連サイト

LINE Developersサイトには、以下のような関連サイトがあります。用途に応じて、併せてご利用ください。

::cards-container
  :::generic-card
  ---
  path: https://manager.line.biz/
  title-id: about.lineoamanager.title
  description-id: about.lineoamanager.description
  ---
  :::

  :::generic-card
  ---
  path: https://api.line-status.info/
  title-id: about.lineapistatus.title
  description-id: about.lineapistatus.description
  ---
  :::

  :::generic-card
  ---
  path: https://www.lycbiz.com/jp/
  title-id: about.lyforbusiness.title
  description-id: about.lyforbusiness.description
  ---
  :::

  :::generic-card
  ---
  path: https://line-marketplace.com/
  title-id: about.linemarketplace.title
  description-id: about.linemarketplace.description
  ---
  :::

  :::generic-card
  ---
  path: https://www.lycorp.co.jp/ja/technology-design/
  title-id: about.lineengineering.title
  description-id: about.lineengineering.description
  ---
  :::

  :::generic-card
  ---
  path: https://lymcampus.jp/
  title-id: about.lymcampus.title
  description-id: about.lymcampus.description
  ---
  :::

  :::generic-card
  ---
  path: https://linedevth.line.me/
  title-id: about.linedevelopersthailand.title
  description-id: about.linedevelopersthailand.description
  ---
  :::
::

## LINE公式アカウント

::cards-container
:generic-card{path="https://line.me/R/ti/p/@linedevelopers_ja" title-id="about.linedevelopersofficialaccount.title" description-id="about.linedevelopersofficialaccount.description"}
::

## Xアカウント

::cards-container
  :::generic-card
  ---
  path: https://twitter.com/lycorptech_jp
  title-id: about.linedevtwitter.title
  description-id: about.linedevtwitter.description
  ---
  :::

  :::generic-card
  ---
  path: https://twitter.com/linedc_jp
  title-id: about.linedevcommunitytwitter.title
  description-id: about.linedevcommunitytwitter.description
  ---
  :::
::
