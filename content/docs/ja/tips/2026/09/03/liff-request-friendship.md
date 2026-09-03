---
title: 友だち追加のメリットをliff.requestFriendship()のtemplateプロパティで伝えよう
navigation: true
description: こんにちは！LINE Developersサイトのドキュメントを担当している、テクニカルライターの岡島です。
meta: >-
  {"date":"2026-09-03 00:00 UTC","tags":"liff,
  line-mini-app","locale":"ja","sidebar":false}
path: /ja/tips/2026/09/03/liff-request-friendship
__hash__: ssPKg6asXcvce0qt_zegYQuGR1inUP4G-vy3YnJkA48
seo:
  title: 友だち追加のメリットをliff.requestFriendship()のtemplateプロパティで伝えよう
  description: こんにちは！LINE Developersサイトのドキュメントを担当している、テクニカルライターの岡島です。
---

::Tips
# :page-title

  :::display-date{date="2026/09/03" .!mb-20}

  :::

こんにちは！LINE Developersサイトのドキュメントを担当している、テクニカルライターの岡島です。

[`liff.requestFriendship()`](/reference/liff/#request-friendship)メソッドを使うと、LIFFアプリやLINEミニアプリ上で、LINE公式アカウントの友だち追加を促すことができます。

![](/media/liff/request-friendship/request-friendship-add-friend-ja.png){className="[\"border\",\"w-fix-320\"]"}

この`liff.requestFriendship()`メソッドがLIFF v2.30.0でパワーアップし、`template`プロパティを指定できるようになりました。このプロパティを使うと、あらかじめ用意された[テンプレート](/reference/liff/#request-friendship-template)から用途に合ったものを選び、友だち追加を促すメッセージとして表示できます。

たとえば、`template.id`プロパティに`coupon`を指定すると、「この公式アカウントを友だち追加しますか？」というデフォルトのメッセージの代わりに「公式アカウントからクーポンや特典情報をお届けします。」というメッセージが表示されます。

```javascript
try {
  await liff.requestFriendship({
    template: { id: "coupon" },
  });
} catch (error) {
  console.log(error);
}
```

![](/media/tips/2026/liff-request-friendship-coupon-ja.png){className="[\"border\",\"w-fix-320\"]"}

このように、単に友だち追加を促すだけでなく、友だち追加の先にあるメリットを伝えることができます。そのため、友だち追加を迷っているユーザーの判断を後押しし、友だち追加に繋げやすくなります。

テンプレートは「クーポン」、「イベント・報酬」、「重要なお知らせ」など、全部で15種類あり、ユーザーが友だち追加することで得られる体験に最も近いものを選ぶことができます。詳しくは、『LIFF APIリファレンス』の「[テンプレート](/reference/liff/#request-friendship-template)」を参照してください。

![](/media/tips/2026/liff-request-friendship-event-reward-ja.png){className="[\"border\",\"w-fix-320\",\"inline-block\",\"mb-0-important\"]"} ![](/media/tips/2026/liff-request-friendship-important-announcement-ja.png){className="[\"border\",\"w-fix-320\",\"inline-block\"]"}

## まとめ

`liff.requestFriendship()`メソッドの`template`プロパティを使うと、ユーザーに友だち追加を促すだけでなく、友だち追加の先にあるメリットも伝えることができます。

あなたのサービスに合ったテンプレートを見つけて、友だち追加の導線づくりに活用してみてください。

`liff.requestFriendship()`メソッドについて詳しくは、『LIFF APIリファレンス』の「[`liff.requestFriendship()`](/reference/liff/#request-friendship)」を参照してください。

  :::style
  html pre.shiki code .suJrU, html code.shiki .suJrU{--shiki-default:#FF7B72}html pre.shiki code .sZEs4, html code.shiki .sZEs4{--shiki-default:#E6EDF3}html pre.shiki code .sc3cj, html code.shiki .sc3cj{--shiki-default:#D2A8FF}html pre.shiki code .s9uIt, html code.shiki .s9uIt{--shiki-default:#A5D6FF}html .default .shiki span {color: var(--shiki-default);background: var(--shiki-default-bg);font-style: var(--shiki-default-font-style);font-weight: var(--shiki-default-font-weight);text-decoration: var(--shiki-default-text-decoration);}html .shiki span {color: var(--shiki-default);background: var(--shiki-default-bg);font-style: var(--shiki-default-font-style);font-weight: var(--shiki-default-font-weight);text-decoration: var(--shiki-default-text-decoration);}
  :::

  :::tags{tags="liff, line-mini-app" lang="en" section="tips"}

  :::
::
