---
title: LIFF v2.9.1をリリースしました
navigation: true
description: LIFF v2.9.1では、以下の不具合が修正されました。機能に変更はありません。
meta: '{"date":"2021-04-27 00:00 UTC","tags":"LIFF","locale":"ja"}'
path: /ja/_partials/news/2021/2021-04-27-liff-v2-9-1-release
__hash__: SG4zeWp7XR7kAeOwjTZ2Rtyfc0QB-7hG_OkL1Gfi5xk
seo:
  title: LIFF v2.9.1をリリースしました
  description: LIFF v2.9.1では、以下の不具合が修正されました。機能に変更はありません。
---

LIFF v2.9.1では、以下の不具合が修正されました。機能に変更はありません。

### LIFF SDKのnpmパッケージ利用時の不具合を修正しました

LIFF SDKのnpmパッケージをTypeScriptで利用しようとすると、コンパイル時にエラーが発生する不具合を修正しました。LIFF v2.9.1ではTypeScript利用時でも問題なくコンパイルされます。

なお、今回の修正はnpm版とCDN版両方のLIFF SDKに適用されます。

LIFF SDKのnpmパッケージに関して詳しくは、「[npmパッケージを利用する](/docs/liff/developing-liff-apps/#use-npm-package)」を参照してください。

::admonition{title="コンパイル時のエラーの対処方法" type="tip"}
TypeScript利用時のコンパイルエラーの対処方法としてLIFF v2.9.1へのアップグレードを推奨しますが、アップグレードができない場合、以下の方法でコンパイルエラーを解消できます。

`tsconfig.json`などのTypeScriptの設定ファイルで、[`skipLibCheck`](https://www.typescriptlang.org/ja/tsconfig#skipLibCheck){rel="[\"nofollow\"]"}オプションを有効化するとコンパイルエラーが発生しません。
::

  
CDNエッジパス（`https://static.line-scdn.net/liff/edge/2/sdk.js`）を利用している場合は、自動でv2.9.1にアップデートされています。

npmパッケージを利用している場合は、`npm install @line/liff@2.9.1`もしくは`yarn add @line/liff@2.9.1`を実行するとv2.9.1にバージョンアップされます。

LIFF SDKの組み込み方法について詳しくは、「[LIFFアプリにLIFF SDKを組み込む](/docs/liff/developing-liff-apps/#integrating-sdk)」を参照してください。
