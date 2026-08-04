---
title: LIFF URLに追加したパラメータ、読み取るのはliff.init()の後で
navigation: true
description: >-
  LIFF URLには、クエリパラメータを追加できることを知っていますか？今回のTipsでは、LIFF
  URLに追加したパラメータの便利な使い方と、それを読み取るときのコツを紹介します。
meta: '{"date":"2026-07-16 00:00 UTC","tags":"liff","locale":"ja","sidebar":false}'
path: /ja/tips/2026/07/16/liff-url-additional-info
__hash__: 8MQS2ArDfol7JGZmW8ms0Hp2YByE2etHlDRMJpVSi88
seo:
  title: LIFF URLに追加したパラメータ、読み取るのはliff.init()の後で
  description: >-
    LIFF URLには、クエリパラメータを追加できることを知っていますか？今回のTipsでは、LIFF
    URLに追加したパラメータの便利な使い方と、それを読み取るときのコツを紹介します。
---

::Tips
# :page-title

  :::display-date{date="2026/07/16" .!mb-20}

  :::

LIFF URLには、クエリパラメータを追加できることを知っていますか？今回のTipsでは、LIFF URLに追加したパラメータの便利な使い方と、それを読み取るときのコツを紹介します。

## LIFF URLには追加情報を付与できる

:glossary-tooltip[[LIFF URL](/glossary/#liff-url)]{glossary-id="liff-url"}には、パスやクエリパラメータ、URLフラグメントといった追加情報を付与できます。

- `https://liff.line.me/{liffId}/?store=shibuya`
- `https://liff.line.me/{liffId}/summer2026/#coupon`

追加情報は、最終的に表示されるページのURLにも引き継がれます。店舗ごとにパラメータを変えたQRコードを配って画面を出し分けたり、キャンペーンの流入経路を区別したりといった使い方ができます。

ただし、パラメータなどの追加情報を読み取るタイミングには注意が必要です。

## パラメータの読み取りは`liff.init()`の完了後に

LIFF URLに付与した追加情報は、一時的に`liff.state`というクエリパラメータへ退避され、[`liff.init()`](/reference/liff/#initialize-liff-app)メソッドの処理の中で行われるリダイレクトを経て、元の形に復元されます。

例えば`https://liff.line.me/{liffId}/?store=shibuya`にアクセスしたとき、次の書き方は典型的な失敗例です。

```javascript
// NG例: liff.init()の完了を待たずにURLを読み取っている
const params = new URLSearchParams(location.search);
const store = params.get("store"); // nullになることがある

liff.init({ liffId: myLiffId });
```

追加情報がまだ`liff.state`へ退避されたままのため、`store`は`null`になることがあります。

そのため、URLの読み取りは、`liff.init()`メソッドが返す`Promise`オブジェクトがresolveされてから実行してください。

```javascript
await liff.init({ liffId: myLiffId });

// liff.init()完了後にパラメータを読み取ることができる
const params = new URLSearchParams(location.search);
const store = params.get("store");
```

パスやURLフラグメントも同様に、`liff.init()`の完了後であれば`location.pathname`や`location.hash`から読み取ることができます。

書き換えはより深刻で、resolve前にURLを変更したりサーバーサイドでリダイレクトしたりすると、LIFFアプリを正常に開けない場合があります。SPAのルーターや計測タグなど、読み込み時にURLを操作するライブラリの初期化も`liff.init()`の完了後に行ってください。詳しくは、『LIFF APIリファレンス』の「[URLを操作する処理は`liff.init()`が完了してから実行する](/reference/liff/#initializing-liff-app-notes-3)」を参照してください。

## `liff.`で始まるクエリパラメータは変更しない

`liff.state`のように`liff.`で始まるクエリパラメータは、LIFF SDKが初期化やLIFF間遷移のために使う情報です。変更したり削除したりするとLIFFアプリが正常に動作しなくなることがあるため、手を加えないでください:sup[[1](#user-content-fn-liff-query-params){ariaDescribedBy="[\"footnote-label\"]" dataFootnoteRef="" #user-content-fnref-liff-query-params}]。

## おわりに

今回紹介した動作について詳しくは、以下のドキュメントを参照してください。

- 『LIFFドキュメント』の「[LIFF URLにアクセスしてからLIFFアプリが開くまでの動作について](/docs/liff/opening-liff-app/#redirect-flow)」
- 『LIFF APIリファレンス』の「[`liff.init()`](/reference/liff/#initialize-liff-app)」

  :::section
  ---
  className:
    - footnotes
  dataFootnotes: ''
  ---
  ## Footnotes

  1. 詳しくは、『LIFFドキュメント』の「[LIFFアプリを初期化する](/docs/liff/developing-liff-apps/#initializing-liff-app)」を参照してください。 [↩](#user-content-fnref-liff-query-params){ariaLabel="Back to reference 1" className="[\"data-footnote-backref\"]" dataFootnoteBackref=""}
  :::

  :::style
  html pre.shiki code .sH3jZ, html code.shiki .sH3jZ{--shiki-default:#8B949E}html pre.shiki code .suJrU, html code.shiki .suJrU{--shiki-default:#FF7B72}html pre.shiki code .sFSAA, html code.shiki .sFSAA{--shiki-default:#79C0FF}html pre.shiki code .sc3cj, html code.shiki .sc3cj{--shiki-default:#D2A8FF}html pre.shiki code .sZEs4, html code.shiki .sZEs4{--shiki-default:#E6EDF3}html pre.shiki code .s9uIt, html code.shiki .s9uIt{--shiki-default:#A5D6FF}html .default .shiki span {color: var(--shiki-default);background: var(--shiki-default-bg);font-style: var(--shiki-default-font-style);font-weight: var(--shiki-default-font-weight);text-decoration: var(--shiki-default-text-decoration);}html .shiki span {color: var(--shiki-default);background: var(--shiki-default-bg);font-style: var(--shiki-default-font-style);font-weight: var(--shiki-default-font-weight);text-decoration: var(--shiki-default-text-decoration);}
  :::

  :::tags{tags="liff" lang="en" section="tips"}

  :::
::
