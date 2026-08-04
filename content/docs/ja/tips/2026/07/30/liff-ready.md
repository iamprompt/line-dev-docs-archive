---
title: どこからでもliff.init()の完了を待てるliff.readyと、その注意点
navigation: true
description: 今回のTipsでは、地味ながら便利なプロパティliff.readyと、その使い方の注意点を紹介します。
meta: '{"date":"2026-07-30 00:00 UTC","tags":"liff","locale":"ja","sidebar":false}'
path: /ja/tips/2026/07/30/liff-ready
__hash__: YxDa_C5ewkjResXoPENiLmzFTlYXtmp4NIk-aYiWpQQ
seo:
  title: どこからでもliff.init()の完了を待てるliff.readyと、その注意点
  description: 今回のTipsでは、地味ながら便利なプロパティliff.readyと、その使い方の注意点を紹介します。
---

::Tips
# :page-title

  :::display-date{date="2026/07/30" .!mb-20}

  :::

今回のTipsでは、地味ながら便利なプロパティ[`liff.ready`](/reference/liff/#ready)と、その使い方の注意点を紹介します。

## `liff.init()`の完了をどこで待つか

LIFFアプリでは、[`liff.getProfile()`](/reference/liff/#get-profile)メソッドをはじめ多くのメソッドが、[`liff.init()`](/reference/liff/#initialize-liff-app)メソッドの完了後にしか呼べません。アプリの規模が小さいうちは`liff.init().then(...)`の中にすべての処理を書けば済みますが、処理がモジュールやファイルに分かれてくると、イベントハンドラやユーティリティ関数の側でも「`liff.init()`の完了後であること」を保証したくなります。

そのための仕組みは自分で用意することもできます。たとえば、`liff.init()`が返すPromiseをexportして共有したり、初期化が完了したかどうかのフラグを自前で管理したりする方法です。一方で、LIFF SDKにも組み込みのプロパティが用意されています。それが[`liff.ready`](/reference/liff/#ready)です。

## `liff.ready`で`liff.init()`の「呼ぶ場所」と「待つ場所」を分離する

`liff.ready`は、`liff.init()`の実行が成功したときにresolveされるPromiseを保持するプロパティです。`liff.init()`を呼ぶ前から参照できるため、「`liff.init()`はアプリのエントリポイントで1回だけ呼ぶ。その完了を待ちたい場所では`liff.ready`をawaitする」という分離ができます。

```javascript
// エントリポイント: liff.init()はここで1回だけ呼ぶ。エラー処理もここで行う
liff.init({ liffId: 'YOUR-LIFF-ID' }).catch(handleInitError);
```

```javascript
// クリックハンドラやユーティリティ関数: liff.init()の完了だけ待つ
async function loadProfile() {
  await liff.ready;
  const profile = await liff.getProfile();
  showDisplayName(profile.displayName);
}
```

`liff.ready`の利点は手軽さです。Promiseやフラグを自前で配線しなくても、import済みの`liff`オブジェクトからそのまま完了を待つことができます。`liff.init()`の完了より先に`loadProfile()`が呼ばれても、`liff.ready`が解決されてから後続の処理が実行されます。

## `liff.ready`は「成功」しか通知しない

ここからが本題です。『LIFF APIリファレンス』の「[liff.ready](/reference/liff/#ready)」には次のように書かれています。

> `liff.init()`実行中に何か問題が起きても、`liff.ready`はrejectしません。また、`LiffError`オブジェクトを返すこともありません。

つまり、LIFF IDの設定ミスやネットワークエラーで`liff.init()`が失敗すると、`liff.ready`はrejectされるのではなく、**いつまでも解決されないまま残ります**。先ほどの`loadProfile()`でいえば、`await liff.ready`の先には進みません。このとき`liff.ready`側にはエラーが通知されないため、エラー処理を`liff.ready`に期待していると、「画面が表示されないが、コンソールにもそれらしいエラーがない」という状況になり、原因に気づきにくくなります。

`liff.ready`は「`liff.init()`が完了したか」だけを伝えるシンプルな完了シグナルで、エラーハンドリングの責務は持っていません。エラー処理は`liff.init()`が返すPromiseの側で行ってください。最初のコード例で、エントリポイントの`liff.init()`に`.catch(handleInitError)`を付けていたのはこのためです。初期化の失敗は、この`catch`にしか通知されません。`handleInitError`でエラー画面への切り替えなどを行っておけば、`liff.ready`を待つ側が止まったままでも、ユーザーに何も表示されないという事態を避けることができます。

役割分担は以下のとおりです。

| やりたいこと                    | 使うもの                            |
| ------------------------- | ------------------------------- |
| `liff.init()`の完了を任意の場所で待つ | `liff.ready`                    |
| `liff.init()`の失敗をハンドリングする | `liff.init()`が返すPromiseの`catch` |

なお、「`liff.init()`の完了を待つ場所」で失敗も知りたい場合は、`liff.ready`ではなく`liff.init()`が返すPromiseを共有してawaitしてください。こちらは失敗時にrejectされます。また、アプリの状態管理に`liff.init()`の成否を載せる方法もあります。失敗のハンドリングが各所で必要なアプリでは、最初からPromiseを共有する設計のほうが向いています。`liff.ready`はあくまで「成功だけを手軽に待つ」ためのプロパティです。

## プラガブルSDKでもそのまま利用できます

[`liff.ready`](/reference/liff/#ready)はSDKのコアに含まれているため、バンドルサイズ削減のために[プラガブルSDK](/docs/liff/pluggable-sdk/)（`@line/liff/core`）を使っている場合でも、追加モジュールなしでそのまま利用できます。

## まとめ

- `liff.ready`を使うと、`liff.init()`の完了を自前の配線なしで手軽に待つことができます。
- ただし、`liff.ready`は失敗を通知しません。エラー処理は`liff.init()`が返すPromiseの`catch`で行ってください。
- 待つ場所で失敗も知りたい場合は、`liff.init()`が返すPromiseを共有するか、アプリの状態管理に成否を載せる方法を検討してください。

詳しくは、『LIFF APIリファレンス』の「[liff.ready](/reference/liff/#ready)」を参照してください。

  :::style
  html pre.shiki code .sH3jZ, html code.shiki .sH3jZ{--shiki-default:#8B949E}html pre.shiki code .sZEs4, html code.shiki .sZEs4{--shiki-default:#E6EDF3}html pre.shiki code .sc3cj, html code.shiki .sc3cj{--shiki-default:#D2A8FF}html pre.shiki code .s9uIt, html code.shiki .s9uIt{--shiki-default:#A5D6FF}html .default .shiki span {color: var(--shiki-default);background: var(--shiki-default-bg);font-style: var(--shiki-default-font-style);font-weight: var(--shiki-default-font-weight);text-decoration: var(--shiki-default-text-decoration);}html .shiki span {color: var(--shiki-default);background: var(--shiki-default-bg);font-style: var(--shiki-default-font-style);font-weight: var(--shiki-default-font-weight);text-decoration: var(--shiki-default-text-decoration);}html pre.shiki code .suJrU, html code.shiki .suJrU{--shiki-default:#FF7B72}html pre.shiki code .sFSAA, html code.shiki .sFSAA{--shiki-default:#79C0FF}
  :::

  :::tags{tags="liff" lang="en" section="tips"}

  :::
::
