---
title: LIFFアプリが期待どおりに動かない？開いているブラウザを確認しよう
navigation: true
description: こんにちは！LINE Developersサイトのドキュメントを担当している、テクニカルライターの岡島です。
meta: '{"date":"2026-11-26 00:00 UTC","tags":"liff","locale":"ja","sidebar":false}'
path: /ja/tips/2026/11/26/identify-liff-browser
__hash__: Att0ms-EQuEKhY1E7FmebzMw-DIKvR7mTh4E0vs9Txg
seo:
  title: LIFFアプリが期待どおりに動かない？開いているブラウザを確認しよう
  description: こんにちは！LINE Developersサイトのドキュメントを担当している、テクニカルライターの岡島です。
---

::Tips
# :page-title

  :::display-date{date="2026/11/26" .!mb-20}

  :::

こんにちは！LINE Developersサイトのドキュメントを担当している、テクニカルライターの岡島です。

LINEのトークルーム上でLIFFアプリを開いたにも関わらず、[アクションボタン](/docs/liff/overview/#action-button)が表示されなかったり、[`liff.sendMessages()`](/reference/liff/#send-messages)メソッドでメッセージを送信できなかったりして、困ったことはありませんか？

そんなときは、LIFFアプリを開いているブラウザを確認してみてください。:glossary-tooltip[[LIFFブラウザ](/glossary/#liff-browser)]{glossary-id="liff-browser"}で開いたつもりでも、実際は:glossary-tooltip[[LINE内ブラウザ](/glossary/#line-iab)]{glossary-id="line-iab"}で開いているかもしれません。

## LIFFブラウザとLINE内ブラウザの見分け方

LIFFブラウザとLINE内ブラウザは、ヘッダーやフッターの見た目で判別できます。次の画像では、それぞれのブラウザのヘッダーとフッターを色枠で囲んでいます。

| LIFFブラウザ                                                                                                                            | LINE内ブラウザ                                                                                                                                  |
| ----------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------ |
| ![](/media/liff/differences-between-liff-browser-and-line-in-app-browser/liff-browser.webp){className="[\"border\",\"w-fix-360\"]"} | ![](/media/liff/differences-between-liff-browser-and-line-in-app-browser/line-in-app-browser.webp){className="[\"border\",\"w-fix-360\"]"} |

注目するポイントは、次の3つです。

|               | LIFFブラウザ | LINE内ブラウザ |
| ------------- | -------- | --------- |
| ヘッダーの最小化ボタン   | なし       | あり        |
| ヘッダーのアクションボタン | あり（※）    | なし        |
| フッター          | なし       | あり        |

※ LIFFアプリの画面サイズが`Full`かつモジュールモードがオフの場合に表示されます。詳しくは、『LIFFドキュメント』の「[アクションボタン](/docs/liff/overview/#action-button)」を参照してください。

  :::admonition{title="liff.isInClient()メソッドで判別する" type="tip"}
  LIFFアプリをLIFFブラウザで開いているかどうかは、`liff.isInClient()`メソッドでも判別できます。詳しくは、『LIFF APIリファレンス』の「[`liff.isInClient()`](/reference/liff/#is-in-client)」を参照してください。
  :::

## 想定と違ったら、アクセスしたURLを確認しよう

LIFFアプリをLIFFブラウザで開いたつもりが、実際にはLINE内ブラウザで開いていた場合、LIFFアプリを開くときに使ったURLを確認してみてください。:glossary-tooltip[[LIFF URL](/glossary/#liff-url)]{glossary-id="liff-url"}ではなく、エンドポイントURLになっているかもしれません。

| URL        | 説明                                                                                                             |
| ---------- | -------------------------------------------------------------------------------------------------------------- |
| LIFF URL   | LIFFアプリにアクセスするためのURL。LINEのトークルーム上でアクセスすると、LIFFブラウザでLIFFアプリが開きます。  例：`https://liff.line.me/1234567890-abcdefgh` |
| エンドポイントURL | LIFFアプリを実装したウェブアプリのURL。LINEのトークルーム上でアクセスすると、LINE内ブラウザでLIFFアプリが開きます。  例：`https://example.com/`                  |

同じLINEのトークルーム上でも、LIFF URLにアクセスした場合とエンドポイントURLにアクセスした場合とでは、LIFFアプリを開くブラウザが異なります。最終的に表示されるページが同じであっても、LIFFブラウザとLINE内ブラウザとでは利用できる機能が異なるため、注意してください。

LIFFブラウザとLINE内ブラウザの違いについて詳しくは、『LIFFドキュメント』の「[LIFFブラウザとLINE内ブラウザの違い](/docs/liff/differences-between-liff-browser-and-line-in-app-browser/)」を参照してください。

## おわりに

LINEのトークルーム上でLIFFアプリを開いていても、必ずしもLIFFブラウザで開いているとは限りません。LIFFアプリが期待どおりに動作しないときは、ヘッダーやフッターを見て、今開いているブラウザが何かを確認してみてください。

  :::tags{tags="liff" lang="en" section="tips"}

  :::
::
