---
title: LIFFアプリはどこで動く？実行環境ごとの挙動の違いを整理する
navigation: true
description: こんにちは！テクニカルサポートを担当している岡です。今回のTipsでは、LIFFの実行環境についてご紹介します。
meta: '{"date":"2026-08-06 00:00 UTC","tags":"liff","locale":"ja","sidebar":false}'
path: /ja/tips/2026/08/06/between-liff-browser-and-external-browser
__hash__: S6slVzD8DUfxTKXeIENc03CLWcqHiU4fMyvmkqO3J4k
seo:
  title: LIFFアプリはどこで動く？実行環境ごとの挙動の違いを整理する
  description: こんにちは！テクニカルサポートを担当している岡です。今回のTipsでは、LIFFの実行環境についてご紹介します。
---

::Tips
# :page-title

  :::display-date{date="2026/08/06" .!mb-20}

  :::

こんにちは！テクニカルサポートを担当している岡です。今回のTipsでは、LIFFの実行環境についてご紹介します。

LIFFアプリを開発していて、「手元のPCのブラウザでは動くのに、LINEアプリ上で開くと挙動が違う」と戸惑ったことはありませんか？

あるいは逆に、「LINEアプリ上では動くのに、外部ブラウザで開くとボタンが押せない」といった報告を受けたこともあるかもしれません。

LIFFアプリは複数の実行環境で動作するため、環境ごとの違いを理解しておくことが、安定したLIFFアプリ開発の第一歩です。

この記事では、実行環境の整理と、実装で必要となる分岐パターンを紹介します。

## LIFFアプリが動く2つの実行環境

LIFFアプリの実行環境は、大きく次の2つに分けられます。

- LIFFブラウザ
- LIFFブラウザ以外：ChromeやSafariなどの外部ブラウザ、またはLINE内ブラウザ

「LINEアプリの中で開いているから同じ」と思われがちですが、:glossary-tooltip[[LIFFブラウザ](/glossary/#liff-browser)]{glossary-id="liff-browser"}と:glossary-tooltip[[LINE内ブラウザ](/glossary/#line-iab)]{glossary-id="line-iab"}は別物です。LIFFブラウザとLINE内ブラウザの違いについて、詳しくは「[LIFFブラウザとLINE内ブラウザの違い](/docs/liff/differences-between-liff-browser-and-line-in-app-browser/)」をご覧ください。

## LIFFアプリがどの環境で動いているかは`liff.isInClient()`でわかる

現在の実行環境がLIFFブラウザかどうかは、[`liff.isInClient()`](/reference/liff/#is-in-client)で判定できます。

```js
if (liff.isInClient()) {
    // LIFFブラウザで動作している
} else {
    // LIFFブラウザ以外で動作している
}
```

## 分岐パターンの考え方

上で紹介した`liff.isInClient()`メソッドを起点にして、ここから分岐パターンを組み立てていきましょう。

### ログインフローの違い

LIFFブラウザでは、ユーザーはすでにLINEにログインした状態でLIFFアプリを開くため、明示的なログイン処理は不要です。

一方、LIFFブラウザ以外の場合では、[`liff.login()`](/reference/liff/#login)によるログイン処理が必要です。

```js
await liff.init({ liffId: "1234567890-abcdefgh" });

if (!liff.isInClient() && !liff.isLoggedIn()) {
    liff.login()
}
```

なお、`liff.init()`のオプション`withLoginOnExternalBrowser: true`を以下のように指定すると、LIFFブラウザ以外の環境での初期化時に`liff.login()`を自動で実行できます。

```js
await liff.init({
    liffId: "1234567890-abcdefgh",
    withLogintOnExternalBrowser: true,
});
```

また、LIFFブラウザ内で認可リクエストを直接行った場合の動作は保証されません。したがってログイン処理には、LINEログインの認可リクエストを直接実装するのではなく、必ず`liff.login()`を使用するようにしてください。

### `liff.closeWindow()`はLIFFブラウザ以外では挙動が保証されない

「閉じる」ボタンでLIFFアプリを閉じる実装は定番ですが、[`liff.closeWindow()`](/reference/liff/#close-window)は、LIFFブラウザ以外での動作は保証対象外です。LIFFブラウザ以外でも表示される可能性のある画面では、別の動線を確保することを検討しましょう。

```js
if (liff.isInClient()) {
    liff.closeWindow();
} else {
    // LIFFブラウザ以外向けの代替動線（例:トップページへ戻る）
}
```

### トークルームと連携する機能

[`liff.sendMessages()`](/reference/liff/#send-messages)のように、LIFFアプリを開いているトークルームを前提とする機能は、LIFFブラウザでのみ利用できます。

トークルームの情報は[`liff.getContext()`](/reference/liff/#get-context)で取得できるため、コンテキストの有無に応じて機能の表示を切り替えるとよいでしょう。

このほかにも、APIごとに利用できる実行環境やOS、必要な権限は細かく異なります。実装前に[LIFF APIリファレンス](/reference/liff/)で対象APIの動作環境を確認する習慣をつけておくと、「この環境では動かない」とリリース後になって気づく事故を防げます。

## まとめ

- LIFFアプリの実行環境は、大きく分けて「LIFFブラウザ」または「LIFFブラウザ以外（外部ブラウザ、LINE内ブラウザ）」の2つ
- 環境の判定には`liff.isInClient()`を使用する
- ログインフロー、`liff.closeWindow()`、トークルーム連携機能は環境ごとの分岐が必要
- 迷ったらAPIリファレンスの動作環境欄を確認する

「検証環境では動くのに実機では動かない」という事象は、実行環境の違いが原因であることが少なくありません。ブラウザごとの特徴を押さえて、どの環境でも快適に動作するLIFFアプリを作りましょう。

  :::style
  html .default .shiki span {color: var(--shiki-default);background: var(--shiki-default-bg);font-style: var(--shiki-default-font-style);font-weight: var(--shiki-default-font-weight);text-decoration: var(--shiki-default-text-decoration);}html .shiki span {color: var(--shiki-default);background: var(--shiki-default-bg);font-style: var(--shiki-default-font-style);font-weight: var(--shiki-default-font-weight);text-decoration: var(--shiki-default-text-decoration);}
  :::

  :::tags{tags="liff" lang="en" section="tips"}

  :::
::
