---
title: Messaging APIでは、メッセージ送信元のアイコンと表示名をメッセージごとに変更して送ることができます
navigation: true
description: こんにちは。LINE Developersサイトのドキュメントを担当している、テクニカルライターの堀越です。
meta: >-
  {"date":"2026-03-12 00:00
  UTC","tags":"messaging-api","locale":"ja","sidebar":false}
path: /ja/tips/2026/03/12/icon-nickname-switch
__hash__: WV6rS-sN7rj8xATIOfYP96u-DlpaXLEZFwhiBiRcVyw
seo:
  title: Messaging APIでは、メッセージ送信元のアイコンと表示名をメッセージごとに変更して送ることができます
  description: こんにちは。LINE Developersサイトのドキュメントを担当している、テクニカルライターの堀越です。
---

::Tips
# :page-title

  :::display-date{date="2026/03/12" .!mb-20}

  :::

こんにちは。[LINE Developersサイト](/)のドキュメントを担当している、テクニカルライターの堀越です。

あまり知られていない機能ですが、実はMessaging APIでは、メッセージ送信元のアイコンと表示名をメッセージごとに変更して送ることができます。

## アイコンと表示名を変更してメッセージを送る

たとえば、オンライン学習サービスのLINE公式アカウントから次のような[プッシュメッセージ](/reference/messaging-api/#send-push-message)を送ったとします。

```sh
curl -v -X POST https://api.line.me/v2/bot/message/push \
-H 'Content-Type: application/json' \
-H 'Authorization: Bearer {channel access token}' \
-d '{
    "to": "U4af4980629...",
    "messages": [
        {
            "type": "text",
            "text": "課題の提出期限を過ぎています。急いで提出してください。",
            "sender": {
                "name": "数学の田中先生",
                "iconUrl": "https://example.com/profile/math-angry-icon.jpg"
            }
        },
        {
            "type": "text",
            "text": "来月の授業予定をお知らせします。"
        }
    ]
}'
```

すると、こんな見た目のメッセージが届きます。

![](/media/tips/2026/change-icon-and-nickname-ja.png){className="[\"w-fix-360\",\"border\"]"}

アイコンと名前が違うと、どういう内容のメッセージなのかが一目で判断できるので分かりやすいですね。

この機能を使うと、このように「各講座に関するメッセージはそれぞれの担当講師のアイコンと名前で送り、全体的なお知らせはデフォルトのアイコンと名前で送る」といったことができます。詳しくは、Messaging APIドキュメントの「[アイコンと表示名をカスタマイズする](/docs/messaging-api/icon-nickname-switch/)」を参照してください。

  :::style
  html pre.shiki code .sQhOw, html code.shiki .sQhOw{--shiki-default:#FFA657}html pre.shiki code .sFSAA, html code.shiki .sFSAA{--shiki-default:#79C0FF}html pre.shiki code .s9uIt, html code.shiki .s9uIt{--shiki-default:#A5D6FF}html pre.shiki code .suJrU, html code.shiki .suJrU{--shiki-default:#FF7B72}html pre.shiki code .sZEs4, html code.shiki .sZEs4{--shiki-default:#E6EDF3}html .default .shiki span {color: var(--shiki-default);background: var(--shiki-default-bg);font-style: var(--shiki-default-font-style);font-weight: var(--shiki-default-font-weight);text-decoration: var(--shiki-default-text-decoration);}html .shiki span {color: var(--shiki-default);background: var(--shiki-default-bg);font-style: var(--shiki-default-font-style);font-weight: var(--shiki-default-font-weight);text-decoration: var(--shiki-default-text-decoration);}
  :::

  :::tags{tags="messaging-api" lang="en" section="tips"}

  :::
::
