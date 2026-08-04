---
title: liff.requestFriendship()メソッドならLINE公式アカウントの友だち追加やブロック解除を自然に促すことができます
navigation: true
description: こんにちは！テクニカルライターの古木です。
meta: >-
  {"date":"2026-05-21 00:00 UTC","tags":"liff,
  line-mini-app","locale":"ja","sidebar":false}
path: /ja/tips/2026/05/21/line-request-friendship
__hash__: w698zxRN8y-vsL-GJ0r--gyoVdyxQLQwf89vm3dpb8Q
seo:
  title: liff.requestFriendship()メソッドならLINE公式アカウントの友だち追加やブロック解除を自然に促すことができます
  description: こんにちは！テクニカルライターの古木です。
---

::Tips
# :page-title

  :::display-date{date="2026/05/21" .!mb-20}

  :::

こんにちは！テクニカルライターの古木です。

LIFFアプリやLINEミニアプリに組み込まれるLIFF SDKには、さまざまなメソッドが継続して追加されています。今回は、[2026年3月24日](/news/2026/03/24/release-liff-2-28-0/)に追加された[`liff.requestFriendship()`](/reference/liff/#request-friendship)メソッドを**推しメソッド**として紹介します！

※ 「推し」という表現は、著者個人の感想を表したものです。

  :::toc

  :::

## `liff.requestFriendship()`メソッドとは

`liff.requestFriendship()`メソッドは、チャネルにリンクされたLINE公式アカウントの友だち追加、またはブロック解除を促すサブウィンドウを表示するメソッドです。

> - LINE公式アカウントと友だちになっていない場合は、友だち追加を促すサブウィンドウが表示されます。
> - LINE公式アカウントをブロックしている場合は、ブロック解除を促すサブウィンドウが表示されます。
> - LINE公式アカウントと既に友だちになっている場合は、サブウィンドウが表示された後、自動で閉じられます。

具体的な動作イメージは以下のとおりです。

| 友だち追加前                                                                                | ブロック中                                                                                     | 友だち追加済み                                                                              |
| ------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------ |
| ![](/media/tips/2026/tips-request-friendship-add-ja.gif){className="[\"w-fix-240\"]"} | ![](/media/tips/2026/tips-request-friendship-unblock-ja.gif){className="[\"w-fix-240\"]"} | ![](/media/tips/2026/tips-request-friendship-added.gif){className="[\"w-fix-240\"]"} |

なお、`liff.requestFriendship()`メソッドはLIFFブラウザの画面サイズが`Full`の場合のみ利用できます。画面サイズについて詳しくは、『LIFFドキュメント』の「[LIFFブラウザの画面サイズ](/docs/liff/overview/#screen-size)」を参照してください。

## 推しポイント

- [アプリの利用を中断しないシームレスなUX](#favorite-point-1)
- [`profile`スコープ不要で簡単に実行可能](#favorite-point-2)
- [ユースケースになじむデザイン](#favorite-point-3)

### アプリの利用を中断しないシームレスなUX

推しポイントの1つ目は、利用中のLIFFアプリやLINEミニアプリの画面上でそのまま友だち追加やブロック解除を促せる点です。

外部ページやLINE公式アカウントのプロフィール画面に遷移させず、サブウィンドウ（モーダル）上で処理が完結するため、ユーザーは簡単に元の画面に戻ってくることができます。このため、フォーム入力などの操作中であっても、アプリを閉じることなく友だち追加を促せます。

### `profile`スコープ不要で簡単に実行可能

次の推しポイントは、`liff.requestFriendship()`メソッドの実行には`profile`スコープを必要としない点です。

このため、友だち関係の取得は行わずに、まずは友だち追加だけを促したいケースで組み込みやすいのが利点です。

特にLINEミニアプリでは、[チャネル同意の簡略化](/docs/line-mini-app/develop/channel-consent-simplification/#what-is-channel-consent-simplification)による認可フローで`openid`スコープの権限を取得していればこのメソッドを実行できます。追加の権限要求を前提にしなくてよいため、実装や導線の設計をシンプルに保ちやすくなります。

  :::admonition{title="友だち関係の取得にはprofileスコープが必要です" type="tip"}
  ユーザーとLINE公式アカウントの友だち関係を取得する[`liff.getFriendship()`](/reference/liff/#get-friendship)メソッドを実行するためには、`profile`スコープが必要です。

  そのため、以下のように友だち追加されていない場合に`liff.requestFriendship()`メソッドを実行するケースでは、`profile`スコープが必要であることに注意してください。

  ```javascript
  const { friendFlag } = await liff.getFriendship();

  // 友だち追加されているか
  if (!friendFlag) {
    // 友だち追加されていない場合、友だち追加のリクエストを送る
    try {
      await liff.requestFriendship();
    } catch (error) {
      console.log(error);
    }
  }
  ```
  :::

### ユースケースになじむデザイン

3つ目の推しポイントは、友だち追加を促す場合のユースケースになじむデザインです。

友だち追加を起点としたクーポン配信やリマインド通知、会員向け情報の案内といったユースケースにおいて、自然になじむシンプルで直感的なデザインになっています。

![](/media/tips/2026/tips-request-friendship-add-ja.png){className="[\"border\",\"w-fix-240\"]"}

「特典を受け取るためには、LINE公式アカウントを友だち追加してください。」といった案内の後にサブウィンドウを表示することで、必要なフローをユーザーに分かりやすく伝えることができます。

## おわりに

今回は、推しメソッドとして[`liff.requestFriendship()`](/reference/liff/#request-friendship)メソッドをご紹介しました。`liff.requestFriendship()`メソッドは、少ない実装でLINE公式アカウントへの導線をアプリ内に組み込める、実用的なメソッドです。ユーザー体験を大きく崩さずに友だち追加やブロック解除を促したい場合は、ぜひ活用を検討してみてください！

**この記事の著者**

ふるき（テクニカルライター）：[LINE Developersサイト](/)のドキュメントを担当。テクニカルライティングに関するコミュニティ「[Technical Writing Meetup](https://tw-meetup.connpass.com/){rel="[\"nofollow\"]"}」を主催。

  :::style
  html pre.shiki code .suJrU, html code.shiki .suJrU{--shiki-default:#FF7B72}html pre.shiki code .sZEs4, html code.shiki .sZEs4{--shiki-default:#E6EDF3}html pre.shiki code .sFSAA, html code.shiki .sFSAA{--shiki-default:#79C0FF}html pre.shiki code .sc3cj, html code.shiki .sc3cj{--shiki-default:#D2A8FF}html pre.shiki code .sH3jZ, html code.shiki .sH3jZ{--shiki-default:#8B949E}html .default .shiki span {color: var(--shiki-default);background: var(--shiki-default-bg);font-style: var(--shiki-default-font-style);font-weight: var(--shiki-default-font-weight);text-decoration: var(--shiki-default-text-decoration);}html .shiki span {color: var(--shiki-default);background: var(--shiki-default-bg);font-style: var(--shiki-default-font-style);font-weight: var(--shiki-default-font-weight);text-decoration: var(--shiki-default-text-decoration);}
  :::

  :::tags{tags="liff, line-mini-app" lang="en" section="tips"}

  :::
::
