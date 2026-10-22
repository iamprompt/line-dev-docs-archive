---
title: LIFF CLIでLIFFアプリ開発の手間を減らす
navigation: true
description: こんにちは！テクニカルサポートを担当している岡です。
meta: >-
  {"date":"2026-10-22 00:00 UTC","tags":"liff,
  line-mini-app","locale":"ja","sidebar":false}
path: /ja/tips/2026/10/22/solution-using-liff-cli
__hash__: cx-Nj_TzWbaBP5_HSMAlyCrytkZj6RLQvBtIWvVOVIw
seo:
  title: LIFF CLIでLIFFアプリ開発の手間を減らす
  description: こんにちは！テクニカルサポートを担当している岡です。
---

::Tips
# :page-title

  :::display-date{date="2026/10/22" .!mb-20}

  :::

こんにちは！テクニカルサポートを担当している岡です。

LIFFアプリを開発するとき、アプリの初期設定やローカル開発環境の準備、デバッグなどに手間がかかることはありませんか？

こうした作業を効率化するツールとして、[LIFF CLI](/docs/liff/liff-cli/)が用意されています。

LIFF CLIを使うと、LIFFアプリの作成や管理、HTTPSを使ったローカル開発、LIFFブラウザ上でのデバッグなどをコマンドラインから行うことができます。

前回のTips記事「[LIFFアプリをローカルで開発するには？HTTPS対応のヒント](/tips/2026/10/15/configure-the-liff-development-environment/)」では、LIFFアプリのローカル開発環境を整える方法を紹介しました。

今回は、LIFF CLIが開発中のどのような場面で役立つのか、3つのユースケースを通してご紹介します。

  :::toc

  :::

## LIFFアプリの初期設定をまとめて行う

LIFFアプリの開発を始めるには、LINE Developersコンソールでの設定や、アプリのひな形の準備などが必要です。

LIFF CLIの`init`コマンドを使うと、チャネルの追加、LIFFアプリの作成、プロジェクトのひな形生成といった作業を、対話形式でまとめて進められます。

```bash
liff-cli init
```

コマンドを実行し、画面内に表示される案内に従って必要な情報を入力していくことで、開発を始めるまでの複数の作業を一連の流れで進められます。

このため、初めてLIFFアプリを作る場面や、新しいプロジェクトを立ち上げる場合に便利です。

## ローカル開発用のエンドポイントURLを簡単に変更する

LIFFアプリをローカル環境で開発するには、HTTPSでアクセスできる環境を用意する必要があります。また、LIFFブラウザからローカルの開発サーバーにアクセスするためには、LIFFアプリのエンドポイントURLを設定する必要があります。

LIFF CLIの`serve`コマンドを使うと、ローカル開発サーバーを対象とするHTTPSプロキシの起動と、LIFFアプリのエンドポイントURLをプロキシのURLに変更が、一度に行えます。

たとえば、ローカル開発サーバーが`http://localhost:3000/`で動作している場合、次のように実行します。

```bash
liff-cli serve --liff-id 1234567890-Abcdefgh --url http://localhost:3000/
```

これにより、HTTPSプロキシの起動とエンドポイントURLの変更を一度に行うことができます。

なお、`serve`コマンドを使用するには、localhostに対して有効な証明書と秘密鍵を事前に用意する必要があります。詳しくは「[serveコマンドの動作条件](/docs/liff/liff-cli/#serve-operating-conditions)」を参照してください。

  :::admonition{title="公開済みのLIFFアプリでは使用しないでください" type="note"}
  `serve`コマンドはLIFFアプリのエンドポイントURLを書き換えます。公開済みのLIFFアプリに対して実行すると、ユーザーがアクセスできなくなるため、開発・検証用のLIFFアプリで使用してください。
  :::

## LIFFブラウザで動作するアプリをデバッグする

LIFFブラウザ上で発生する問題を調査したいときには、[LIFF Inspector](/docs/liff/liff-plugin/#liff-inspector)が役立ちます。

LIFF CLIでは、`serve`コマンドに`--inspect`オプションを指定することで、LIFF Inspector ServerをHTTPSで起動できます。

```bash
liff-cli serve --liff-id 1234567890-Abcdefgh --url http://localhost:3000/ --inspect
```

LIFFアプリ側にLIFF Inspector Pluginを導入した上でLIFF URLにアクセスすると、`serve`コマンドを実行したターミナルに`devtools://devtools/`から始まるURLが表示されます。

このURLをGoogle Chromeで開くことで、LIFFアプリをデバッグできます。

LIFF Inspectorの導入方法など、詳しい利用手順については、「[LIFF Inspector](/docs/liff/liff-plugin/#liff-inspector)」を参照してください。

## おわりに

今回は、LIFF CLIが役立つ3つのユースケースを紹介しました。

LIFF CLIは、LIFFアプリの初期設定だけでなく、ローカル開発やデバッグなど、開発のさまざまな場面で活用できます。

また、今回紹介した機能のほかにも、LIFFアプリの登録情報を管理する`app`コマンドなどが用意されています。

LIFFアプリを開発する際は、ぜひLIFF CLIの活用を検討してみてください。

  :::style
  html pre.shiki code .sQhOw, html code.shiki .sQhOw{--shiki-default:#FFA657}html pre.shiki code .s9uIt, html code.shiki .s9uIt{--shiki-default:#A5D6FF}html .default .shiki span {color: var(--shiki-default);background: var(--shiki-default-bg);font-style: var(--shiki-default-font-style);font-weight: var(--shiki-default-font-weight);text-decoration: var(--shiki-default-text-decoration);}html .shiki span {color: var(--shiki-default);background: var(--shiki-default-bg);font-style: var(--shiki-default-font-style);font-weight: var(--shiki-default-font-weight);text-decoration: var(--shiki-default-text-decoration);}html pre.shiki code .sFSAA, html code.shiki .sFSAA{--shiki-default:#79C0FF}
  :::

  :::tags{tags="liff, line-mini-app" lang="en" section="tips"}

  :::
::
