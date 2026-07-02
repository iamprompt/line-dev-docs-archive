---
title: LIFF SDKのプラガブルSDKに実装しているちょっとした型の工夫
navigation: true
description: >-
  こんにちは！LIFF SDKの開発を担当しているodanです。今回のTipsでは、LIFF
  SDKのプラガブルSDKに実装しているちょっとした型の工夫について紹介します。
meta: '{"date":"2026-07-02 00:00 UTC","tags":"liff","locale":"ja","sidebar":false}'
path: /ja/tips/2026/07/02/pluggable-sdk-type
__hash__: dxVHIUjsXiUkcW1EMY1WA-yetWfmAFYR_xY0OqshdOI
seo:
  title: LIFF SDKのプラガブルSDKに実装しているちょっとした型の工夫
  description: >-
    こんにちは！LIFF SDKの開発を担当しているodanです。今回のTipsでは、LIFF
    SDKのプラガブルSDKに実装しているちょっとした型の工夫について紹介します。
---

::Tips
# :page-title

  :::display-date{date="2026/07/02" .!mb-20}

  :::

こんにちは！LIFF SDKの開発を担当しているodanです。今回のTipsでは、LIFF SDKのプラガブルSDKに実装しているちょっとした型の工夫について紹介します。

## プラガブルSDKとは

通常のLIFF SDKは`import liff from "@line/liff"`の形でimportします。

このときの`liff`オブジェクトには`liff.requestFriendship`メソッドや`liff.permission`オブジェクトなどが含まれています。これらのメソッドやオブジェクトは必ずしもすべてのLIFFアプリで必要なものではありません。使用されないオブジェクトは余計なバンドルサイズの増加を招いてしまいます。

この問題を解決するのが[プラガブルSDK](/docs/liff/pluggable-sdk/)です。プラガブルSDKは必要最小限のメソッドだけを持つ`liff`オブジェクト（以下、LIFF Coreオブジェクト）を提供します。

以下がその使用例です。

```javascript
import liff from "@line/liff/core"; // @line/liff の代わりに @line/liff/core を import する
liff.init({ liffId: "" }); // 必要最小限のメソッドのため利用できる
liff.requestFriendship(); // 必要最小限のメソッドではないため利用できない（ランタイムエラーになる）
```

必要最小限に含まれないメソッドを使用する例:

```javascript
import liff from "@line/liff/core";
import RequestFriendship from "@line/liff/request-friendship";

liff.use(new RequestFriendship());

liff.init({ liffId: "" });
liff.requestFriendship(); // liff.use によってメソッドを追加したため利用できるようになる
```

プラガブルSDKを使うことで、LIFFアプリのバンドルサイズを削減できます。

## LIFF Coreオブジェクトの型の拡張

先ほど紹介した通り、JavaScriptの世界ではLIFF Coreオブジェクトに対して`liff.requestFriendship`メソッドを呼び出すとランタイムエラーになります。

この問題を開発者が早期に気付くことができるように、型の世界でもLIFF Coreオブジェクトには必要最小限のメソッドしか定義されていません。

```ts
import liff from "@line/liff/core";

liff.requestFriendship(); // 型エラーになる
```

必要最小限の型を拡張するには、各モジュールのパッケージをimportする必要があります。

```ts
import liff from "@line/liff/core";
import RequestFriendship from "@line/liff/request-friendship";

liff.use(new RequestFriendship());
liff.requestFriendship(); // @line/liff/request-friendship をimportしているので型エラーにならない
```

## Declaration Mergingで型を拡張する

さて、パッケージをimportするだけで型エラーが解決するこの仕組みはどう実現されているでしょうか？

TypeScriptには[Declaration Merging](https://www.typescriptlang.org/docs/handbook/declaration-merging.html){rel="[\"nofollow\"]"}と呼ばれるテクニックがあり、これを利用しています。簡単に説明すると、同じ名前で定義されたinterfaceの各メンバーはマージされて扱えます。

先ほどのドキュメントでは、以下のサンプルコードが紹介されています。

```ts
interface Box {
  height: number;
  width: number;
}
interface Box {
  scale: number;
}
let box: Box = { height: 5, width: 6, scale: 10 };
```

このテクニックを用いてLIFF Coreオブジェクトの型を拡張しています。実際に`@line/liff/request-friendship`の中身を覗いてみましょう。

```ts
// LIFF SDK v2.29.0の@line/liff/request-friendshipの内容
import { RequestFriendshipModule } from '@liff/request-friendship';
export default RequestFriendshipModule;
declare module '@liff/core' {
    interface LiffCore {
        requestFriendship: ReturnType<typeof RequestFriendshipModule.prototype.install>;
    }
}
```

5行目からのinterfaceの宣言がポイントです。`LiffCore`の宣言を書くことで型情報がマージされるようになっています。これによりLIFF Coreオブジェクトを使う場合に、オブジェクトの追加を忘れるというケアレスミスにすぐに気づくことができます。

ちなみにVue.jsのプラグインでも同様の仕組みが採用されています。

## まとめ

プラガブルSDKに実装しているちょっとした型の工夫について紹介しました。

Declaration Mergingのおかげで型について安心して利用できるため、バンドルサイズの改善の際にぜひプラガブルSDKをご検討ください。

  :::style
  html pre.shiki code .suJrU, html code.shiki .suJrU{--shiki-default:#FF7B72}html pre.shiki code .sZEs4, html code.shiki .sZEs4{--shiki-default:#E6EDF3}html pre.shiki code .s9uIt, html code.shiki .s9uIt{--shiki-default:#A5D6FF}html pre.shiki code .sH3jZ, html code.shiki .sH3jZ{--shiki-default:#8B949E}html pre.shiki code .sc3cj, html code.shiki .sc3cj{--shiki-default:#D2A8FF}html .default .shiki span {color: var(--shiki-default);background: var(--shiki-default-bg);font-style: var(--shiki-default-font-style);font-weight: var(--shiki-default-font-weight);text-decoration: var(--shiki-default-text-decoration);}html .shiki span {color: var(--shiki-default);background: var(--shiki-default-bg);font-style: var(--shiki-default-font-style);font-weight: var(--shiki-default-font-weight);text-decoration: var(--shiki-default-text-decoration);}html pre.shiki code .sQhOw, html code.shiki .sQhOw{--shiki-default:#FFA657}html pre.shiki code .sFSAA, html code.shiki .sFSAA{--shiki-default:#79C0FF}
  :::

  :::tags{tags="liff" lang="en" section="tips"}

  :::
::
