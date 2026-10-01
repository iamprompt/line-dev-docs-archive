---
title: Cloudflare+HonoでMessaging APIのボットを動かしてみる
navigation: true
description: >-
  こんにちは！LINE Developersサイトの運営を担当している、テクニカルライターの銭神です。みなさんは、どのような環境でMessaging
  APIのボットを動かしているでしょうか。
meta: >-
  {"date":"2026-10-01 00:00
  UTC","tags":"messaging-api","locale":"ja","sidebar":false}
path: /ja/tips/2026/10/01/messaging-api-bot-cloudflare-hono
__hash__: s7vIHfBt4K7rwTYzGdGsySl8polx41HK-moS2s2cdJQ
seo:
  title: Cloudflare+HonoでMessaging APIのボットを動かしてみる
  description: >-
    こんにちは！LINE Developersサイトの運営を担当している、テクニカルライターの銭神です。みなさんは、どのような環境でMessaging
    APIのボットを動かしているでしょうか。
---

::Tips
# :page-title

  :::display-date{date="2026/10/01" .!mb-20}

  :::

こんにちは！LINE Developersサイトの運営を担当している、テクニカルライターの銭神です。みなさんは、どのような環境でMessaging APIのボットを動かしているでしょうか。

最近の代表的な構成のひとつに[Cloudflare](https://www.cloudflare.com/ja-jp/){rel="[\"nofollow\"]"}+[Hono](https://hono.dev/){rel="[\"nofollow\"]"}がありますが、この構成でもボットを動かすことができます。この記事では、Cloudflare+Honoでボットを動かすための最低限の手順を紹介します。

なお、デプロイ先となるCloudflare Workersには[無料枠](https://www.cloudflare.com/ja-jp/plans/developer-platform/#workers){rel="[\"nofollow\"]"}があるため、今回の手順はすべて無料で試せます。

  :::toc

  :::

## 動作環境

この記事の内容は、以下の環境において動作することを確認しています。

| 名前                                                                                                      | バージョン   |
| ------------------------------------------------------------------------------------------------------- | ------- |
| Node.js                                                                                                 | v26.8.1 |
| create-hono                                                                                             | 0.19.5  |
| Hono                                                                                                    | 4.13.9  |
| Wrangler                                                                                                | 4.144.0 |
| [LINE Messaging API SDK for Node.js](https://github.com/line/line-bot-sdk-nodejs){rel="[\"nofollow\"]"} | 11.2.0  |

## プロジェクトを作成する

まず、ウェブフレームワークであるHonoが提供するテンプレートを使用して、プロジェクトを初期化します。プロジェクトを初期化するには、以下のコマンドを実行します。

```bash
$ npm create hono@latest my-line-bot
```

コマンドを実行すると、いくつか質問されます。これらには、以下の内容で回答します。

| 質問                                           | 回答                 |
| -------------------------------------------- | ------------------ |
| Which template do you want to use?           | cloudflare-workers |
| Do you want to install project dependencies? | Yes                |
| Which package manager do you want to use?    | npm                |

また、LINE Messaging API SDK for Node.jsをインストールします。これを用いることで、署名の検証やメッセージの送信などが簡単にできるようになります。

```bash
$ cd my-line-bot
$ npm install @line/bot-sdk
```

次に、生成された`wrangler.jsonc`を開きます。`compatibility_date`の末尾にカンマを追加し、`compatibility_flags`のコメントアウトを外します。SDKの署名検証にはNode.jsの`crypto`モジュールを使用するため、コメントアウトを外してNode.jsの互換モードにします。

```jsonc
// 末尾のカンマを追加する
"compatibility_date": "2026-09-30",
// コメントアウトを外す
"compatibility_flags": [
  "nodejs_compat"
],
```

## アプリケーションを実装する

それでは、アプリケーションを実装していきます。`src/index.ts`を開いて、以下のコードに置き換えます。

このアプリケーションでは、ユーザーがLINE公式アカウントにメッセージを送ったときに、その内容をそのままオウム返し🦜しています。

```ts
import { Hono } from "hono";
import { HTTPException } from "hono/http-exception";
import { messagingApi, validateSignature, webhook } from "@line/bot-sdk";

type Bindings = {
  CHANNEL_ACCESS_TOKEN: string;
  CHANNEL_SECRET: string;
};

const app = new Hono<{ Bindings: Bindings }>();

app.post("/webhook", async (c) => {
  const body = await c.req.text();
  const signature = c.req.header("x-line-signature");

  // 署名を検証する
  if (!signature || !validateSignature(body, c.env.CHANNEL_SECRET, signature)) {
    throw new HTTPException(401, { message: "Unauthorized" });
  }

  const client = new messagingApi.MessagingApiClient({
    channelAccessToken: c.env.CHANNEL_ACCESS_TOKEN,
  });

  const data: webhook.CallbackRequest = JSON.parse(body);

  for (const event of data.events) {
    if (
      event.type === "message" &&
      event.message.type === "text" &&
      event.replyToken
    ) {
      try {
        await client.replyMessage({
          replyToken: event.replyToken,
          messages: [
            {
              type: "text",
              text: event.message.text,
            },
          ],
        });
      } catch (error) {
        throw new HTTPException(500, {
          message: "Reply API Error",
          cause: error,
        });
      }
    }
  }

  return c.text("OK");
});

export default app;
```

## 環境変数を設定する

アプリケーションの実装が終わったら、いよいよアプリケーションをデプロイするのですが、その前に以下のコマンドで環境変数を設定します。コマンド実行時にCloudflareへのログインを求められた場合は、そのままログインを済ませてください。

```bash
$ npx wrangler secret put CHANNEL_ACCESS_TOKEN
$ npx wrangler secret put CHANNEL_SECRET
```

チャネルアクセストークンとチャネルシークレットは、[LINE Developersコンソール](/console/)のMessaging APIチャネルで確認できます。Messaging APIチャネルをまだ作成していない場合は、「[Messaging APIを始めよう](/docs/messaging-api/getting-started/)」を参考に作成します。

たとえば`CHANNEL_ACCESS_TOKEN`を設定するときは、以下のようになります。コマンドの実行時点ではまだCloudflare上にWorkerがないため、以下のようにWorkerを作成するかどうかの質問もされます。

```bash
$ npx wrangler secret put CHANNEL_ACCESS_TOKEN

 ⛅️ wrangler 4.144.0
───────────────────────────────────────────────
✔ Enter a secret value: … ****
🌀 Creating the secret for the Worker "my-line-bot"
✔ There doesn't seem to be a Worker called "my-line-bot". Do you want to create a new Worker with that name and add secrets to it? … yes
🌀 Creating new Worker "my-line-bot"...
✨ Success! Uploaded secret CHANNEL_ACCESS_TOKEN
```

## デプロイする

環境変数を設定したら、アプリケーションをデプロイします。デプロイは、次のコマンドでできます。

```bash
$ npm run deploy
```

デプロイが完了すると、コマンドの実行結果としてデプロイ先のURLが`https://my-line-bot.<YOUR_SUBDOMAIN>.workers.dev`のように表示されます。

## 動作を確認する

アプリケーションをデプロイしたら、デプロイ先のURLの末尾に`/webhook`をつけたURLをLINE Developersコンソールに登録します。Messaging APIチャネルを開き、［**Messaging API設定**］タブの［**Webhook URL**］にURLを入力して、［**Webhookの利用**］を有効にします。

![](/media/tips/2026/cloudflare-hono-webhook-url-ja.png){className="[\"border\",\"w-fix-480\"]"}

ここまできたら、準備は完了です。LINE公式アカウントを開いて、なにか適当な文字を送ってみます。

![](/media/tips/2026/cloudflare-hono-oa.png){className="[\"border\",\"w-fix-320\"]"}

このように、送った文字と同じ文字がLINE公式アカウントから返ってきたら成功です。

## おわりに

以上のように、CloudflareとHonoを使うことで、Messaging APIを簡単に動かすことができます。どこで動かすか悩んだときは、ぜひ参考にしてみてください。

  :::style
  html pre.shiki code .sQhOw, html code.shiki .sQhOw{--shiki-default:#FFA657}html pre.shiki code .s9uIt, html code.shiki .s9uIt{--shiki-default:#A5D6FF}html .default .shiki span {color: var(--shiki-default);background: var(--shiki-default-bg);font-style: var(--shiki-default-font-style);font-weight: var(--shiki-default-font-weight);text-decoration: var(--shiki-default-text-decoration);}html .shiki span {color: var(--shiki-default);background: var(--shiki-default-bg);font-style: var(--shiki-default-font-style);font-weight: var(--shiki-default-font-weight);text-decoration: var(--shiki-default-text-decoration);}html pre.shiki code .suJrU, html code.shiki .suJrU{--shiki-default:#FF7B72}html pre.shiki code .sZEs4, html code.shiki .sZEs4{--shiki-default:#E6EDF3}html pre.shiki code .sFSAA, html code.shiki .sFSAA{--shiki-default:#79C0FF}html pre.shiki code .sc3cj, html code.shiki .sc3cj{--shiki-default:#D2A8FF}html pre.shiki code .sH3jZ, html code.shiki .sH3jZ{--shiki-default:#8B949E}
  :::

  :::tags{tags="messaging-api" lang="en" section="tips"}

  :::
::
