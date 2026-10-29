---
title: ローディングのアニメーションでユーザーに安心して返答を待ってもらおう
navigation: true
description: こんにちは。LINE Developersサイトのドキュメントを担当している、テクニカルライターの堀越です。
meta: >-
  {"date":"2026-10-29 00:00
  UTC","tags":"messaging-api","locale":"ja","sidebar":false}
path: /ja/tips/2026/10/29/loading-indicator
__hash__: x_cQq7SRgFOpW7e5ggFzAFljs2rOzCBCRWb0ATYUhfE
seo:
  title: ローディングのアニメーションでユーザーに安心して返答を待ってもらおう
  description: こんにちは。LINE Developersサイトのドキュメントを担当している、テクニカルライターの堀越です。
---

::Tips
# :page-title

  :::display-date{date="2026/10/29" .!mb-20}

  :::

こんにちは。[LINE Developersサイト](/)のドキュメントを担当している、テクニカルライターの堀越です。

LINE公式アカウントがユーザーからのメッセージを受信したあと、裏側で生成AIを使って回答文を準備していて、返信のメッセージを送れるようになるまで少し時間がかかることがあります。そんなとき、何も言わずに何十秒も待たされると「既読が付いたのに反応がないな」とユーザーは不安になってしまいます。

## ローディングのアニメーションで「準備中」を視覚的に伝える

Messaging APIの「[ローディングのアニメーションを表示する](/reference/messaging-api/#display-a-loading-indicator)」エンドポイントを使うと、ぐるぐる動くローディングのアニメーションで、ユーザーに「いまメッセージを準備中です」という状況を視覚的に伝えることができます。

![](/media/messaging-api/loading-indicator/loading-animation.webp){className="[\"border\",\"w-fix-480\"]"}

返信に時間が掛かるときは、黙って待たせると不安にさせてしまうので、ローディングのアニメーションを使ってユーザーに安心して待ってもらえるようにしましょう。

詳しくは、『Messaging APIドキュメント』の「[ローディングのアニメーションを表示する](/docs/messaging-api/use-loading-indicator/)」を参照してください。

  :::tags{tags="messaging-api" lang="en" section="tips"}

  :::
::
