---
title: Create LIFF AppでLIFFアプリの開発環境を構築する
navigation: true
description: null
meta: '{"tags":null,"author":null,"last_updated":null,"source_language":null}'
path: /ja/docs/liff/cli-tool-create-liff-app
__hash__: 2iyuXw5TmuMTTTCwyFjuAygXwJ6XVTwajNu1REZivIU
seo:
  title: Create LIFF AppでLIFFアプリの開発環境を構築する
  description: null
---

# :page-title

:markdown-controls## Create LIFF Appとは

Create LIFF Appは、LIFFアプリの開発環境がコマンド1つで構築できるCLIツールです。Reactの[Create React App](https://github.com/facebook/create-react-app){rel="[\"nofollow\"]"}や、Next.jsの[Create Next App](https://nextjs.org/docs/pages/api-reference/cli/create-next-app){rel="[\"nofollow\"]"}のように、Create LIFF Appからの質問に答えていくことで、用途に合わせたLIFFアプリのひな形を含む開発環境が生成され、すぐに開発を始めることができます。

- [GitHub](https://github.com/line/create-liff-app){rel="[\"nofollow\"]"}
- [npm](https://www.npmjs.com/package/@line/create-liff-app){rel="[\"nofollow\"]"}

LIFFスターターアプリやLIFFプレイグラウンドと、Create LIFF Appの違いについて詳しくは、「[LIFFアプリの開発をサポートするツール](/docs/liff/overview/#support-tool)」を参照してください。

## 言語とフレームワーク

Create LIFF Appにおいて、現時点で生成可能な言語、フレームワークは以下のとおりです。たとえば、TypeScriptで記述されたNext.jsのソースコードを生成できます。

### Create LIFF Appで生成可能な言語

- JavaScript
- TypeScript

### Create LIFF Appで生成可能なフレームワーク

- [Next.js](https://nextjs.org/){rel="[\"nofollow\"]"}
- [Nuxt](https://nuxt.com/){rel="[\"nofollow\"]"}
- [React](https://ja.reactjs.org/){rel="[\"nofollow\"]"}
- [Vue.js](https://ja.vuejs.org/){rel="[\"nofollow\"]"}
- [Svelte](https://svelte.dev/){rel="[\"nofollow\"]"}

## 動作環境

Create LIFF AppはNode.jsで動作します。パッケージ管理にはYarnまたはnpmが使用可能ですが、このページではYarnを使います。このページの内容は次の各バージョンで動作を確認しています。

| 名前                                                                               | バージョン   |
| -------------------------------------------------------------------------------- | ------- |
| [Create LIFF App](https://github.com/line/create-liff-app){rel="[\"nofollow\"]"} | 1.1.0   |
| [Node.js](https://nodejs.org/en){rel="[\"nofollow\"]"}                           | 18.17.1 |
| [Yarn](https://yarnpkg.com/){rel="[\"nofollow\"]"}                               | 1.22.19 |

## 事前準備

Create LIFF Appの実行時にはLIFF IDが必要となります。まず「[チャネルを作成する](/docs/liff/getting-started/)」と「[LIFFアプリをチャネルに追加する](/docs/liff/registering-liff-apps/)」を読み、LIFF IDを取得してください。

::admonition{title="エンドポイントURLを入力する" type="tip"}
LIFFアプリをチャネルに追加する際に［**エンドポイントURL**］を入力する必要があります。［**エンドポイントURL**］は後から修正できますので、この時点では仮のURL（`https://example.com/`など）を入力しても構いません。
::

## Create LIFF Appを使う

次の2つのステップで、Create LIFF Appを使ってLIFFアプリの開発環境を作り、ローカルで動作確認してみましょう。

1. [Create LIFF Appを使って開発環境を作る](#create-a-dev-env-using-liff-app)
2. [LIFFアプリをローカルホストで起動する](#start-the-liff-app-on-the-localhost)

### Create LIFF Appを使って開発環境を作る

1. Create LIFF Appを実行します。ターミナルまたはコマンドラインツール（以下「ターミナル」といいます）を開いてください。任意のディレクトリ上で、次のコマンドを実行します。```bash
$ npx @line/create-liff-app
```

  
なお、コマンド実行時には[オプション](#options)の指定が可能です。
2. ここからはCreate LIFF Appの質問に答えていきます。質問の途中でやめたくなった場合は、WindowsならCtrl+c、macOSならcontrol+cで中断できます。
3. プロジェクト名を入力します。何も入力せずにそのまま進んだ場合、プロジェクト名はデフォルトの`my-app`になります。プロジェクト名は、Create LIFF Appによって生成されるディレクトリの名前等に用いられます。```bash
? Enter your project name:  (my-app)
```

  
以降の手順では、プロジェクト名に`my-app`を入力したものとして説明します。
4. 使用するライブラリやフレームワークを選択します。```bash
? Which template do you want to use? (Use arrow keys)
❯ vanilla
  react
  vue
  svelte
  nextjs
  nuxtjs
```
5. 使用する言語を選択します。```bash
? JavaScript or TypeScript? (Use arrow keys)
❯ JavaScript
  TypeScript
```
6. LIFF IDを入力します。未入力で進むこともできます。後からLIFF IDを入力、変更したい場合は、生成された`my-app`ディレクトリ内にある`.env`ファイルを直接編集してください。```bash
? Please enter your LIFF ID:
Don't you have LIFF ID? Check out https://developers.line.biz/ja/docs/liff/getting-started/ (liffId)
```
7. どのパッケージマネージャを使用するかを選択します。パッケージ管理にはYarnまたはnpmが使用できますが、ここではYarnを選択します。```bash
? Which package manager do you want to use? (Use arrow keys)
❯ yarn
  npm
```
8. すべての質問が終わると、LIFFアプリのひな形を含む開発環境が`my-app`ディレクトリ以下に生成されます。```bash
yarn install v1.22.19
warning package.json: No license field
info No lockfile found.
warning my-app@0.0.0: No license field
[1/4] 🔍  Resolving packages...
[2/4] 🚚  Fetching packages...
[3/4] 🔗  Linking dependencies...
[4/4] 🔨  Building fresh packages...
success Saved lockfile.
✨  Done in 25.06s.


Done! Now run:

  cd my-app
  yarn dev
```

#### オプション一覧

  
Create LIFF Appは、以下の表に示すオプションを受け付けています。たとえば、TypeScriptで記述されたNext.jsのソースコードを生成するには、次のコマンドを実行します。なお、オプションで指定した項目については、Create LIFF Appからの質問が省略されます。```bash
$ npx @line/create-liff-app -t nextjs --ts
```

| 短いオプション | 長いオプション      | 引数         | 動作                                                                      |
| ------- | ------------ | ---------- | ----------------------------------------------------------------------- |
| -v      | --version    |            | バージョン情報を表示する                                                            |
| -t      | --template   | <template> | テンプレートを指定する   引数の選択肢：`vanilla`、`react`、`vue`、`svelte`、`nextjs`、`nuxtjs` |
| -l      | --liffid     | <liff id>  | LIFF IDを指定する                                                            |
| --js    | --javascript |            | JavaScriptで記述されたソースコードを生成する                                             |
| --ts    | --typescript |            | TypeScriptで記述されたソースコードを生成する                                             |
| --npm   | --use-npm    |            | パッケージマネージャにnpmを使用する                                                     |
| --yarn  | --use-yarn   |            | パッケージマネージャにYarnを使用する                                                    |
| -h      | --help       |            | コマンドのヘルプを表示する                                                           |

### LIFFアプリをローカルホストで起動する

1. 生成されたLIFFアプリを早速ローカルホストで起動してみましょう。LIFFアプリを起動するには、`yarn dev`コマンドを実行します。以下のようなメッセージが表示されて、ターミナルの画面出力が止まったら、ローカルサーバーでLIFFアプリが起動しています。```bash
$ yarn dev
yarn run v1.22.19
warning package.json: No license field
$ vite

  vite v2.9.13 dev server running at:

  > Local: http://localhost:3000/
  > Network: use `--host` to expose

  ready in 170ms.
```
2. ターミナルに表示されたURL（vanilla JavaScriptの場合は`http://localhost:3000`）にブラウザでアクセスすると、次のように`LIFF init succeeded.`というメッセージを含む画面が表示されます。  
![成功](/media/liff/cli-tool-create-liff-app/create-liff-app-success.png){className="[\"border\",\"w-fix-480\"]"}  
LIFF IDを設定していない場合は、次のように`LIFF init failed.`というメッセージを含む画面が表示されます。生成された`my-app`ディレクトリ内にある`.env`ファイルにLIFF IDを書いて、ローカルサーバーを再起動してください。  
![失敗](/media/liff/cli-tool-create-liff-app/create-liff-app-failed.png){className="[\"border\",\"w-fix-480\"]"}
3. ブラウザでLIFFアプリの起動を確認できたら、WindowsならCtrl+c、macOSならcontrol+cでローカルサーバーを停止します。

## 次のステップ

これでLIFFアプリを開発する準備ができました。

なおLINE上でLIFFアプリの動作を確認するには、生成されたLIFFアプリをNetlifyなど任意のサーバーにデプロイした上で、URLを［**エンドポイントURL**］に設定します。Netlifyへのデプロイ方法やLINE上での動作確認方法は、このページでは解説しません。LIFFスターターアプリの[サーバーへのデプロイ](/docs/liff/trying-liff-app/#deploy-to-server)を参考にしてください。

実際の開発を行う際は、「[LIFFアプリを開発する](/docs/liff/developing-liff-apps/)」を参照してください。
