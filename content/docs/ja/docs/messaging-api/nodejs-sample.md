---
title: チュートリアル - 応答ボットを作る
navigation: true
description: null
meta: '{"tags":null,"author":null,"last_updated":null,"source_language":"ja"}'
path: /ja/docs/messaging-api/nodejs-sample
__hash__: xNWVe01lixDIDpv-c8RdsHOh9NnZVxd6VVBIJjS1ZwU
seo:
  title: チュートリアル - 応答ボットを作る
  description: null
---

# :page-title

:markdown-controlsこのチュートリアルでは、Node.jsとMessaging APIを使って、応答ボットでメッセージを送信する方法を学びます。

Messaging APIは、サービスとLINEユーザーとの間で双方向のコミュニケーションを可能にする機能です。Messaging APIの機能を利用して、ユーザーとの交流を深めることができます。様々な種類のメッセージの送信、ユーザープロフィールの取得、ユーザーが送信したコンテンツの取得など、[その機能は多岐にわたります](/docs/messaging-api/overview/#what-you-can-do)。

このチュートリアルを最後まで進めると、ユーザーが送信したメッセージに自動的に応答するアプリが作成できます。

![サンプルボットとの会話イメージ](/media/messaging-api/node-js-sample/sample-bot-test.png){className="[\"border\",\"w-fix-320\"]"}

## 始める前に

このチュートリアルは、JavaScriptとNode.jsの基本的な知識を必要とします。また、チュートリアルをスムーズに進めるために、「[Messaging APIの概要](/docs/messaging-api/overview/)」を読んでおくことをお勧めします。

::admonition{title="このチュートリアルではSDKを使用しません" type="tip"}
このチュートリアルでは、Messaging APIの仕様を理解するために、LINEプラットフォームのSDKを使わずにNode.jsでMessaging APIを使用する方法を説明します。Node.jsを使ったプロジェクトで、Messaging APIをより少ないコード行数で素早く利用したい場合は、[LINE Messaging API SDK for nodejs](https://line.github.io/line-bot-sdk-nodejs/){rel="[\"nofollow\"]"}を利用してください。
::

### 準備

チュートリアルで応答ボットを作成するために、まずは必要なシステムへの登録と、ツールをインストールします。

アカウントを登録するもの：

- [LINE Developersコンソール](/console/)のアカウント：LINE DevelopersコンソールにLINEアカウントまたはビジネスアカウントでログインし、まだお持ちでなければ[開発者アカウントを作成](/docs/line-developers-console/login-account/#register-as-developer)してください。
- [Heroku](https://www.heroku.com/){rel="[\"nofollow\"]"}アカウント::admonition{title="Herokuの無料プランは廃止されました" type="note"}
Herokuの無料プランは、2022年11月27日をもって廃止されました。このチュートリアルを無料で試したい場合は、他のプラットフォームを利用してください。詳しくは、「[Heroku’s Next Chapter](https://www.heroku.com/blog/next-chapter/){rel="[\"nofollow\"]"}」を参照してください。
::

インストールするもの：

- [Node.js](https://nodejs.org/en){rel="[\"nofollow\"]"}
- [Heroku CLI](https://devcenter.heroku.com/articles/heroku-cli){rel="[\"nofollow\"]"}
- [Git](https://git-scm.com/install/){rel="[\"nofollow\"]"}

## 1. Herokuの設定

ターミナルまたはコマンドラインツールで、以下のコマンドを実行し、Heroku CLIにログインします。

```sh
heroku login
```

次に、チュートリアル用のディレクトリを作成し、そのディレクトリに移動します。そして、Gitを初期化してHerokuを使ったアプリを作成します。`{Name of your app}`は、`msg-api-tutorial-{YYYYMMDD}`などの一意の名前に置き換えてください。

```sh
mkdir sample-app
cd sample-app
git init
heroku create {Name of your app}
```

アプリが問題なく作成されると、HerokuのURLが`https://{Name of your app}.herokuapp.com/`のような形式で生成されます。このURLはチュートリアルの中で必要になります。生成されたHerokuのURLを、ブラウザで開いてください。ウェルカムページが表示されます。

![ウェルカムページ](/media/messaging-api/node-js-sample/welcome-page.png){className="[\"border\",\"w-fix-480\"]"}

## 2. プロジェクトの設定

npmがプロジェクトを識別できるように、`package.json`ファイルを作成する必要があります。このファイルには、プロジェクトのメタデータと依存関係を定義する必要があります。`package.json`は、npmパッケージを初期化するためのコマンド`npm init`で作成します。このチュートリアルでは特別な設定は必要ないので、`-y`コマンドを使用して、パッケージをセットアップするための質問をすべてスキップします。

```sh
npm init -y
```

以下のような`package.json`が作成されます。

```json
{
  "name": "sample-app",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC"
}
```

次に、スタートスクリプトを定義します。スタートスクリプトは、Herokuのようなサーバープラットフォームに、サーバーの起動時にどのファイルを使用するかを知らせるためのものです。このチュートリアルでは、サーバーの設定ファイルとして`index.js`を設定します。テキストエディタで`package.json`を開き、`"start"`プロパティに`"node index.js"`を指定してください。

```json
{
  "name": "sample-app",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "start": "node index.js",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC"
}
```

以下のコマンドを実行して、[Express.js](https://expressjs.com/){rel="[\"nofollow\"]"}のパッケージをインストールします。Express.jsは軽量なNode.jsのウェブサーバーフレームワークです。

```sh
npm install express
```

Express.jsをインストールすると、`package.json`にパッケージの依存関係が追加されます。また、同時に`node_modules`というディレクトリが作成されます。このディレクトリには、ローカルでインストールしたパッケージが保存されますが、Herokuにはプッシュされないようにします。このディレクトリを除外するために、`.gitignore`ファイルを作成します。

```sh
touch .gitignore
```

作成した`.gitignore`ファイルをテキストエディタで開き、以下のように除外したいディレクトリ名をファイルに追加します。

```text
node_modules/
```

これにより、指定したディレクトリがプッシュされることはありません。

## 3. ボットの実装

準備が完了しました。応答ボットを実装しましょう。

1. [グローバル設定](#global-config)
2. [ミドルウェアの設定](#middleware-config)
3. [ルーティングの設定](#routing-config)
4. [応答メッセージを送る](#send-reply)

### 3-1. グローバル設定

サーバー設定のためのJavaScriptファイル`index.js`を作りましょう。

```sh
touch index.js
```

作成した`index.js`ファイルには、先ほどインストールした`express`パッケージをインポートするコードと、インスタンス化するコードを追加します。また、ボットがHTTPリクエストを処理できるように`https`パッケージもインポートします。このパッケージは、Node.jsにデフォルトで付属しているので、インストールする必要はありません。

`index.js`をテキストエディタで開き、以下のコードを追加しましょう。

```javascript
const https = require("https");
const express = require("express");
const app = express();
```

続いて、設定プロセスを簡素化する目的と、認証情報を保護する目的で環境変数を追加します。`process.env.PORT`は、サーバーがどのポートでListenするかを指定します。`process.env.LINE_ACCESS_TOKEN`は、Messaging APIを呼び出すために必要な:glossary-tooltip[[チャネルアクセストークン](/glossary/#channel-access-token)]{glossary-id="channel-access-token"}を指定します。`index.js`で、インポートしたパッケージの下に、以下を追加します。

```javascript
const PORT = process.env.PORT || 3000;
const TOKEN = process.env.LINE_ACCESS_TOKEN;
```

### 3-2. ミドルウェアの設定

Express.jsは、ミドルウェアのウェブフレームワークです。ミドルウェア関数を使って、リクエストとレスポンスのサイクルを決めることができます。

このチュートリアルでは、Express.jsに付属する関数`express.json()`と`express.urlencoded()`を使用します。これらの関数は、それぞれリクエストオブジェクトをJSON、文字列、配列として扱うためにあらかじめ用意されているミドルウェア関数です。ミドルウェアの機能を使用するために、`app.use()`を呼び出します。`index.js`ファイルに以下のコードを追加します。

```javascript
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);
```

### 3-3. ルーティングの設定

ボットサーバーに基本的なルーティングロジックを追加しましょう。ヘルスチェック等の失敗を防ぐために、ドメインのルート（`/`）へのHTTP GETリクエストに対して、ステータス`200`を返すようにします。`index.js`ファイルに以下のコードを追加します。

```javascript
app.get("/", (req, res) => {
  res.sendStatus(200);
});
```

次に、`app.listen()`関数を使って、サーバーにリスナーを設定します。リスナーのポートには、先ほど設定した環境変数`PORT`を指定します。そのため、特に異なる指定がされていない限り、`3000`をListenします。`index.js`に、以下のコードを追加します。

```javascript
app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});
```

Listenする準備ができたので、LINEプラットフォームからWebhook URLに送られてくるリクエストを処理するコードを追加しましょう。ユーザーがボットにメッセージを送信すると、LINEプラットフォームは、ボットサーバーがホストするWebhook URLにHTTP POSTリクエスト（Webhookイベント）を送信します。LINEプラットフォームからのリクエストに応答するために、`app.post()`関数を使って、リクエストをルーティングします。`index.js`の、`app.get()`と`app.listen()`関数の間に、以下のコードを追加します。

```javascript
app.post("/webhook", function (req, res) {
  res.send("HTTP POST request sent to the webhook URL!");
});
```

このコードは、`/webhook`エンドポイントにHTTP POSTリクエストが送られてきたときに、`HTTP POST request sent to the webhook URL!`というHTTPレスポンスを返すようにボットサーバーに指示するものです。

ここまでで、`index.js`は以下のようになっているはずです。

```javascript
const https = require("https");
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const TOKEN = process.env.LINE_ACCESS_TOKEN;

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.get("/", (req, res) => {
  res.sendStatus(200);
});

app.post("/webhook", function (req, res) {
  res.send("HTTP POST request sent to the webhook URL!");
});

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});
```

### 3-4. 応答メッセージを送る

応答ボットのコア機能である、ユーザーのメッセージに応答する機能を実装します。まず、ユーザーからメッセージを受信したことを識別する必要があります。Webhook URLで、`type`プロパティの値が`message`になっている[メッセージイベント](/reference/messaging-api/#message-event)オブジェクトを受信したら、ユーザーからメッセージが送信されたと識別します。

::admonition{title="ボットを本番用として公開する場合は署名を検証してください" type="warning"}
本番用として、不特定多数のユーザー向けにボットを公開する場合には署名の検証が必要です。HTTPリクエストがLINEプラットフォームから送られたことを確認するために、リクエストヘッダーの`x-line-signature`に含まれる署名を検証してください。

署名の検証方法について詳しくは、「[署名を検証する](/docs/messaging-api/receiving-messages/#verify-signature)」を参照してください。
::

ユーザーに応答するには、[応答メッセージを送る](/reference/messaging-api/#send-reply-message)エンドポイント（`https://api.line.me/v2/bot/message/reply`）を使います。`index.js`の`app.post`から、応答メッセージを送るエンドポイント（`https://api.line.me/v2/bot/message/reply`）を呼び出します。以下のコードで`app.post`を置き換えてください。それぞれの処理の詳しい説明は、コードコメントで確認してください。

```javascript
app.post("/webhook", function (req, res) {
  res.send("HTTP POST request sent to the webhook URL!");
  // ユーザーがボットにメッセージを送った場合、応答メッセージを送る
  if (req.body.events[0].type === "message") {
    // APIサーバーに送信する応答トークンとメッセージデータを文字列化する
    const dataString = JSON.stringify({
      // 応答トークンを定義
      replyToken: req.body.events[0].replyToken,
      // 返信するメッセージを定義
      messages: [
        {
          type: "text",
          text: "Hello, user",
        },
        {
          type: "text",
          text: "May I help you?",
        },
      ],
    });

    // リクエストヘッダー。仕様についてはMessaging APIリファレンスを参照してください。
    const headers = {
      "Content-Type": "application/json",
      Authorization: "Bearer " + TOKEN,
    };

    // Node.jsドキュメントのhttps.requestメソッドで定義されている仕様に従ったオプションを指定します。
    const webhookOptions = {
      hostname: "api.line.me",
      path: "/v2/bot/message/reply",
      method: "POST",
      headers: headers,
      body: dataString,
    };

    // messageタイプのHTTP POSTリクエストが/webhookエンドポイントに送信された場合、
    // 変数webhookOptionsで定義したhttps://api.line.me/v2/bot/message/replyに対して
    // HTTP POSTリクエストを送信します。

    // リクエストの定義
    const request = https.request(webhookOptions, (res) => {
      res.on("data", (d) => {
        process.stdout.write(d);
      });
    });

    // エラーをハンドリング
    // request.onは、APIサーバーへのリクエスト送信時に
    // エラーが発生した場合にコールバックされる関数です。
    request.on("error", (err) => {
      console.error(err);
    });

    // 最後に、定義したリクエストを送信
    request.write(dataString);
    request.end();
  }
});
```

## 4. Messaging APIチャネルを準備する

Messaging APIの機能を利用するには、Messaging APIチャネルを作成し、Webhook URLを登録する必要があります。作成していない場合は、[チャネルを作成](/docs/messaging-api/getting-started/)してください。

LINE DevelopersコンソールのMessaging APIチャネルの［**Messaging API設定**］タブで、[チャネルアクセストークン](/docs/basics/channel-access-token/)を発行します。このトークンは、「[Herokuでアプリをデプロイする](#deploy-on-heroku)」で使用します。

![Messaging APIチャネルのチャネルアクセストークンセクションを示す画像](/media/messaging-api/node-js-sample/channel-access-token-ja.png){className="[\"border\",\"w-fix-720\"]"}

次にWebhook URLを登録します。［**Messaging API設定**］タブで、［**Webhook URL**］に、「[Herokuの設定](#set-up-heroku)」で取得したHerokuのURLを元に、サーバーがWebhookをListenするURLを入力します。URLは`https://{Name of your app}.herokuapp.com/webhook`という形式になっています。［**Webhook URL**］は`https://{Name of your app}.herokuapp.com/`ではないので注意してください。

::admonition{title="HerokuのURLを忘れてしまったら" type="tip"}
HerokuのURLを忘れてしまった場合は、[Heroku Dashboard](https://dashboard.heroku.com/){rel="[\"nofollow\"]"}で確認できます。
::

［**Webhookの利用**］を有効にします。

![Messaging API設定タブの「Webhookの利用」設定](/media/messaging-api/node-js-sample/enable-webhook-ja.png){className="[\"border\",\"w-fix-480\"]"}

ボットをテストするために、［**Messaging API設定**］タブのQRコードを読み取って、ボットに紐づけられたLINE公式アカウントを友だちとして追加します。テストのために、［**応答メッセージ**］と［**あいさつメッセージ**］は無効にしてください。

これで、Messaging APIチャネルの準備が整いました。

## 5. Herokuでアプリをデプロイする

先ほど「[グローバル設定](#global-config)」で、環境変数`LINE_ACCESS_TOKEN`の値をチャネルアクセストークンとして使うように設定しました。Herokuにデプロイしたアプリを正常に動作させるために、環境変数`LINE_ACCESS_TOKEN`を登録する必要があります。

環境変数にチャネルアクセストークンを登録するために、ターミナルまたはコマンドラインツールで、以下のコマンドを実行してください。`LINE_ACCESS_TOKEN`には、「[Messaging APIチャネルを準備する](#prepare-channel)」で取得したチャネルアクセストークンを設定します。

```sh
heroku config:set LINE_ACCESS_TOKEN={チャネルアクセストークンをここに入力してください}
```

これで、アプリをHerokuにデプロイする準備が整いました。作成したコードをHerokuにプッシュしましょう。ターミナルまたはコマンドラインツールで、以下のコマンドを実行してください。

```sh
git add .
git commit -m "First commit"
git push heroku main
```

### Webhook URLを検証する

ボットをテストする前に、Webhookが正常に動作しているか確認しましょう。「[Messaging APIチャネルを準備する](#prepare-channel)」で作成したチャネルの［**Messaging API設定**］タブに移動します。［**Webhook URL**］の［**検証**］をクリックし、Webhookが動作するかを確認します。Webhook URLに問題がない場合、「成功」のメッセージが表示されます。これでサンプルボットが完成しました。

### ボットを試す

LINEでボットにメッセージを送ってみてください。このようなメッセージが届くはずです。

![サンプルボットとの会話イメージ](/media/messaging-api/node-js-sample/sample-bot-test.png){className="[\"border\",\"w-fix-320\"]"}

### トラブルシューティング

ボットが正常に動作していない場合は、以下のコマンドを実行することでHerokuのログを確認できます。

```sh
heroku logs --tail
```

## 次のステップ

このボットには、さまざまな機能を追加できます。その例をいくつかご紹介します。

- [リッチメニュー](/reference/messaging-api/#rich-menu)を使って、ユーザーがタップ可能なオプションを追加する。
- ユーザーが特定のアクションを実行したときに送信される[アクションオブジェクト](/reference/messaging-api/#action-objects)を使って、レスポンスを送信する。
- [ユーザープロフィールを取得](/reference/messaging-api/#get-profile)して、カスタマイズしたメッセージを送信する。

前述の通り、[LINE Messaging API SDK for nodejs](https://line.github.io/line-bot-sdk-nodejs/){rel="[\"nofollow\"]"}を使えば、より素早くボットを開発できます。こちらもぜひご検討ください。

## 関連ドキュメント

- [Messaging APIリファレンス](/reference/messaging-api/)
- [Messaging APIの概要](/docs/messaging-api/overview/)
- [https.requestの仕様（Node.js）](https://nodejs.org/api/https.html#https_https_request_options_callback){rel="[\"nofollow\"]"}
