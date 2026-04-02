---
title: AIにLINE Developersサイトのドキュメントを読ませる：Markdown表示機能の活用方法
navigation: true
description: こんにちは！LINE Developersサイトのドキュメントを担当している、テクニカルライターの岡島です。
meta: >-
  {"date":"2026-02-19 00:00 UTC","tags":"docs,
  line-developers-site","locale":"ja","sidebar":false}
path: /ja/tips/2026/02/19/markdown-notebooklm
__hash__: G4LTcU-35uugBxohyrFhfzvy41Cq6YGQMhXmZ-wWggw
seo:
  title: AIにLINE Developersサイトのドキュメントを読ませる：Markdown表示機能の活用方法
  description: こんにちは！LINE Developersサイトのドキュメントを担当している、テクニカルライターの岡島です。
---

::Tips
# :page-title

  :::display-date{date="2026/02/19" .!mb-4}

  :::

こんにちは！[LINE Developersサイト](/)のドキュメントを担当している、テクニカルライターの岡島です。

LINE Developersサイトでは、ドキュメントおよびリファレンス（以下、まとめて「ドキュメント」と言います）の一部が、[Markdown形式での表示](/about/#line-developers-site-markdown)（以下、「Markdown表示機能」と言います）に対応しています。

Markdown表示機能に対応しているページでは、ページタイトル下に［**LLM用にコピー**］ボタンと［**Markdownで表示**］ボタンが表示されます。これらのボタンを押すことで、そのページの内容をMarkdown形式で取得または表示できます。

![](/media/tips/2026/markdown-notebooklm-buttons-ja.png){className="[\"border\"]"}

Markdown表示機能とAIを組み合わせることで、LINE DevelopersサイトのドキュメントをAIの一次情報として活用できるようになります。

その活用例の1つとして、LINE DevelopersサイトのドキュメントのMarkdownファイルを[Google NotebookLM](https://notebooklm.google/?hl=ja){rel="[\"nofollow\"]"}にアップロードし、AIリサーチアシスタントとして使用する例をご紹介します。

## NotebookLMとは

NotebookLMは、リサーチに特化したAIサービスです。ファイルやウェブサイト、テキストなどをソースとして追加でき、そのソースのみを参照して、回答やコンテンツを生成するのが特徴です。

## Markdown表示機能とNotebookLMの活用例

今回は、『[LINEミニアプリドキュメント](/docs/line-mini-app/)』の「LINEミニアプリを知る」カテゴリーのドキュメントを例に、Markdownファイルを取得するところから、NotebookLMに質問するところまでをご紹介します。

1. [Markdownファイルを取得する](#step-1)
2. [ノートブックを作成する](#step-2)
3. [ノートブックにMarkdownファイルを追加する](#step-3)
4. [質問する](#step-4)

### 1. Markdownファイルを取得する

以下のページのMarkdownファイルを取得します。各ページにアクセスし、タイトル下の［**Markdownで表示**］ボタンを押します。

- [LINEミニアプリとは](/docs/line-mini-app/discover/introduction/)
- [LINEミニアプリ用LINE Developersコンソールガイド](/docs/line-mini-app/discover/console-guide/)
- [LINEミニアプリの仕様](/docs/line-mini-app/discover/specifications/)
- [ビルトイン機能](/docs/line-mini-app/discover/builtin-features/)
- [カスタム機能](/docs/line-mini-app/discover/custom-features/)
- [LINEミニアプリの構造](/docs/line-mini-app/discover/ui-components/)

![](/media/tips/2026/markdown-notebooklm-view-as-markdown-ja.png){className="[\"border\"]"}

`index.html.md`が表示されたら、そのページの内容をファイルとして保存します。ファイル名は`index.html.md`のままでも問題ありませんが、`introduction.md`のようにページのパスと対応した名前にしておくと、NotebookLM上で識別しやすくなります。

### 2. ノートブックを作成する

[NotebookLM](https://notebooklm.google.com/){rel="[\"nofollow\"]"}にアクセスし、［**ノートブックを新規作成**］ボタンを押します。

![](/media/tips/2026/markdown-notebooklm-create-notebook-ja.png){className="[\"border\"]"}

### 3. ノートブックにMarkdownファイルを追加する

作成したノートブックのソースにMarkdownファイルを追加します。「ソース」パネルの［**ソースを追加**］ボタンを押し、Markdownファイルをアップロードします。

![](/media/tips/2026/markdown-notebooklm-add-source-ja.png){className="[\"border\"]"}

### 4. 質問する

Markdownファイルをソースに追加したら、「チャット」パネルでLINEミニアプリについて質問してみます。

たとえば、「LINEミニアプリと通常のLIFFアプリの主な違いは何ですか？」と質問すると、ソースとして追加されたLINEミニアプリのドキュメントに基づき、回答が生成されます。

![](/media/tips/2026/markdown-notebooklm-answer-ja.png){className="[\"border\"]"}

```markdown
提供された資料に基づき、LINEミニアプリと通常のLIFFアプリ（LINEログインチャネルに追加するLIFFアプリ）の主な違いを解説します。

基本として、LINEミニアプリはLIFF（LINE Front-end Framework）上で動作するウェブアプリであり、技術的な基盤は共通しています。しかし、機能面、管理構造、およびユーザーとの接点において以下のような重要な違いがあります。

### 1. 開発・管理体制（コンソール設定）の違い

LINEミニアプリチャネルは、通常のLIFFアプリとは異なる独自の構造を持っています。

- **3つの内部チャネル構造:** LINEミニアプリチャネルを作成すると、自動的に「開発用」「審査用」「本番用」の3つの内部チャネルが生成されます。通常のLIFFアプリのように単独で管理するのではなく、この3つの環境を通じて開発・審査・公開のプロセスを経る必要があります。
- **LIFF IDの管理:** 内部チャネルごとに異なるLIFF IDが発行されます。
- **1チャネル1アプリの制限:** LINEミニアプリチャネルでは、同一チャネルに複数のLIFFアプリを追加することはできません。
- **設定の制約:** LINEミニアプリチャネルでは、LIFFアプリごとにScopeや友だち追加オプションなどの設定を変更することはできません（開発用で設定し、審査・公開時に反映される仕組みです）。

### 2. UI（ユーザーインターフェース）の制約と機能

画面表示や挙動に関して、LINEミニアプリには特定の仕様が存在します。

- **アクションボタンの常時表示:** LINEミニアプリでは、ヘッダーにある「アクションボタン」を非表示にすることはできません。通常のLIFFアプリで設定可能な「モジュールモード（アクションボタンの非表示）」は、LINEミニアプリでは利用できません。
- **最近使用したサービス:** LINEミニアプリは、ユーザーの「最近使用したサービス」リストに表示され、履歴から再アクセスしやすくなっています。

### 3. ユーザー体験とリテンション機能（主なカスタム機能）

LINEミニアプリ（特に認証済ミニアプリ）には、通常のLIFFアプリにはない、ユーザーの利便性と再訪を促す機能が用意されています。

- **サービスメッセージ:** 予約確認や通知などをLINEのトークとしてユーザーに無料で送信できる機能です。
- **ホーム画面へのショートカット:** ユーザーのスマートフォンのホーム画面にアイコンを追加し、アプリのように直接起動させることができます。
- **チャネル同意の簡略化:** ユーザーが初めてアクセスする際の同意画面をスキップできる機能（簡略化への同意が必要）があり、スムーズに利用を開始できます。
- **検索と露出:** 認証済ミニアプリになれば、LINEの「ホーム」タブや検索結果からのアクセスが可能になります。

### 4. 今後の方向性と推奨事項

現在、LIFFとLINEミニアプリはブランド統合が予定されています。

- **統合の予定:** LIFFは将来的にLINEミニアプリに統合される予定です。
- **新規作成の推奨:** この統合に伴い、LIFFアプリを新規作成する場合は、通常のLIFFアプリではなく「LINEミニアプリ」として作成することが推奨されています。

まとめると、**LINEミニアプリは「通常のLIFFアプリの機能に加え、LINE内での露出、通知機能（サービスメッセージ）、審査プロセスなどを統合した、よりサービス提供に特化したパッケージ」**と言えます。
```

このように、欲しい情報を伝えるだけで、ユーザーの代わりにNotebookLMがドキュメントを参照し、回答してくれます。また、NotebookLMは回答の引用元を表示してくれるため、ハルシネーションがないかの確認も容易です。

## 終わりに

今回は、Markdown表示機能とAIの活用例の1つとして、LINE DevelopersサイトのドキュメントのMarkdownファイルをNotebookLMにアップロードし、AIリサーチアシスタントとして使用する例をご紹介しました。

今回ご紹介した内容のほかにも、NotebookLMの音声解説や動画解説の機能を使って、新しいドキュメントを音声や動画でキャッチアップしたり、新しいチームメンバーのオンボーディングに使ったりなど、さまざまな活用方法が考えられます。

ぜひ、LINE DevelopersサイトのMarkdown表示機能を使って、ドキュメントの新しい活用方法を試してみてください。

  :::style
  html .default .shiki span {color: var(--shiki-default);background: var(--shiki-default-bg);font-style: var(--shiki-default-font-style);font-weight: var(--shiki-default-font-weight);text-decoration: var(--shiki-default-text-decoration);}html .shiki span {color: var(--shiki-default);background: var(--shiki-default-bg);font-style: var(--shiki-default-font-style);font-weight: var(--shiki-default-font-weight);text-decoration: var(--shiki-default-text-decoration);}
  :::

  :::tags{tags="docs, line-developers-site" lang="en" section="tips"}

  :::
::
