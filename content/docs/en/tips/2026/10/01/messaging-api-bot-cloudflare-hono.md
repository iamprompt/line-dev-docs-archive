---
title: Running a Messaging API bot with Cloudflare + Hono
navigation: true
description: >-
  Hello! I'm Zenigami, a technical writer in charge of managing the LINE
  Developers site. What kind of environment do you use to run your Messaging API
  bots?
meta: >-
  {"date":"2026-10-01 00:00
  UTC","tags":"messaging-api","locale":"en","sidebar":false}
path: /en/tips/2026/10/01/messaging-api-bot-cloudflare-hono
__hash__: qKOzbEmDwhA1p_0bS5JWNPlhmyxNVbna05kmOufSvrQ
seo:
  title: Running a Messaging API bot with Cloudflare + Hono
  description: >-
    Hello! I'm Zenigami, a technical writer in charge of managing the LINE
    Developers site. What kind of environment do you use to run your Messaging
    API bots?
---

::Tips
# :page-title

  :::display-date{date="2026/10/01" .!mb-20}

  :::

Hello! I'm Zenigami, a technical writer in charge of managing the LINE Developers site. What kind of environment do you use to run your Messaging API bots?

One of the popular setups recently is [Cloudflare](https://www.cloudflare.com/){rel="[\"nofollow\"]"} + [Hono](https://hono.dev/){rel="[\"nofollow\"]"}, and you can absolutely run a bot with this architecture. In this article, I will introduce the minimum steps required to run a bot using Cloudflare + Hono.

Cloudflare Workers offers a [free tier](https://www.cloudflare.com/plans/developer-platform/#workers){rel="[\"nofollow\"]"}, so you can try all the steps in this tip for free.

  :::toc

  :::

## Environment

I have confirmed that the contents of this article work in the following environment:

| Name                                                                                                    | Version |
| ------------------------------------------------------------------------------------------------------- | ------- |
| Node.js                                                                                                 | v26.8.1 |
| create-hono                                                                                             | 0.19.5  |
| Hono                                                                                                    | 4.13.9  |
| Wrangler                                                                                                | 4.144.0 |
| [LINE Messaging API SDK for Node.js](https://github.com/line/line-bot-sdk-nodejs){rel="[\"nofollow\"]"} | 11.2.0  |

## Create a project

First, initialize the project using a template provided by the Hono web framework. Run the following command to initialize the project:

```bash
$ npm create hono@latest my-line-bot
```

When you run the command, you will be asked a few questions. Answer them as follows:

| Question                                     | Answer             |
| -------------------------------------------- | ------------------ |
| Which template do you want to use?           | cloudflare-workers |
| Do you want to install project dependencies? | Yes                |
| Which package manager do you want to use?    | npm                |

Next, install the LINE Messaging API SDK for Node.js. Using this SDK makes it easy to verify signatures and send messages.

```bash
$ cd my-line-bot
$ npm install @line/bot-sdk
```

Then, open the generated `wrangler.jsonc`. Add a comma at the end of `compatibility_date` and uncomment `compatibility_flags`. Since the SDK uses the Node.js `crypto` module for signature verification, we need to uncomment this to enable Node.js compatibility mode.

```jsonc
// Add a comma at the end
"compatibility_date": "2026-09-30",
// Uncomment the following line
"compatibility_flags": [
  "nodejs_compat"
],
```

## Implement the application

Now, let's implement the application. Open `src/index.ts` and replace its contents with the following code.

In this application, when a user sends a message to the LINE Official Account, the bot echoes 🦜 the exact same content back to them.

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

  // Verify the signature
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

## Set environment variables

Once the application is implemented, it is time to deploy it. But before you do, set the environment variables using the following commands. If prompted to log in to Cloudflare when running these commands, please do so to continue.

```bash
$ npx wrangler secret put CHANNEL_ACCESS_TOKEN
$ npx wrangler secret put CHANNEL_SECRET
```

You can check your channel access token and channel secret in your Messaging API channel on the [LINE Developers Console](/console/). If you haven't created a Messaging API channel yet, see [Getting started with the Messaging API](/docs/messaging-api/getting-started/) to create one.

For example, when setting `CHANNEL_ACCESS_TOKEN`, it will look like this. Since there is no Worker on Cloudflare at the time you run the command, you will also be asked whether to create a Worker:

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

## Deploy

After setting up the environment variables, deploy the application. You can deploy it using the following command:

```bash
$ npm run deploy
```

When the deployment is complete, the deployment destination URL will be displayed in the command output, looking something like `https://my-line-bot.<YOUR_SUBDOMAIN>.workers.dev`.

## Check the behavior

After deploying the application, take the deployment destination URL, append `/webhook` to it, and register this URL in the LINE Developers Console. Open your Messaging API channel, and enter the URL into the **Webhook URL** field on the **Messaging API** tab, and then enable **Use webhook**.

![](/media/tips/2026/cloudflare-hono-webhook-url-en.png){className="[\"border\",\"w-fix-480\"]"}

At this point, the setup is complete. Open your LINE Official Account and try sending some random text.

![](/media/tips/2026/cloudflare-hono-oa.png){className="[\"border\",\"w-fix-320\"]"}

If the exact same text you sent comes back from the LINE Official Account like this, it's a success!

## Conclusion

As described above, by using Cloudflare and Hono, you can easily get the Messaging API up and running. If you are ever wondering where to host your bot, please give this setup a try.

  :::style
  html .default .shiki span {color: var(--shiki-default);background: var(--shiki-default-bg);font-style: var(--shiki-default-font-style);font-weight: var(--shiki-default-font-weight);text-decoration: var(--shiki-default-text-decoration);}html .shiki span {color: var(--shiki-default);background: var(--shiki-default-bg);font-style: var(--shiki-default-font-style);font-weight: var(--shiki-default-font-weight);text-decoration: var(--shiki-default-text-decoration);}html pre.shiki code .sQhOw, html code.shiki .sQhOw{--shiki-default:#FFA657}html pre.shiki code .s9uIt, html code.shiki .s9uIt{--shiki-default:#A5D6FF}html pre.shiki code .suJrU, html code.shiki .suJrU{--shiki-default:#FF7B72}html pre.shiki code .sZEs4, html code.shiki .sZEs4{--shiki-default:#E6EDF3}html pre.shiki code .sFSAA, html code.shiki .sFSAA{--shiki-default:#79C0FF}html pre.shiki code .sc3cj, html code.shiki .sc3cj{--shiki-default:#D2A8FF}html pre.shiki code .sH3jZ, html code.shiki .sH3jZ{--shiki-default:#8B949E}
  :::

  :::tags{tags="messaging-api" lang="en" section="tips"}

  :::
::
