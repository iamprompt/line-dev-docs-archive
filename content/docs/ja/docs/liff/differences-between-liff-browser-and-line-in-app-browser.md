---
title: LIFFブラウザとLINE内ブラウザの違い
navigation: true
description: ''
meta: '{"tags":null,"author":null,"last_updated":null,"source_language":"ja"}'
path: /ja/docs/liff/differences-between-liff-browser-and-line-in-app-browser
__hash__: hP9NXSPHjbSjdiz9cWGInU1yt-8MqUVJrzZXnFo0XOI
seo:
  title: LIFFブラウザとLINE内ブラウザの違い
  description: ''
---

# :page-title

:markdown-controlsLINEアプリ上でLIFFアプリを開くと、:glossary-tooltip[[LIFFブラウザ](/glossary/#liff-browser)]{glossary-id="liff-browser"}または:glossary-tooltip[[LINE内ブラウザ](/glossary/#line-iab)]{glossary-id="line-iab"}上で開かれます。LIFFブラウザとLINE内ブラウザは異なるブラウザであり、LIFFアプリの一部機能はLIFFブラウザでのみ利用できます。

このページでは、LIFFブラウザとLINE内ブラウザを判別する方法や、利用できる機能の違いなどを紹介します。

:toc## LIFFブラウザ

LIFFアプリ専用のブラウザです。次の方法でLIFFアプリを開くと、LIFFブラウザで開かれます。

- LINEアプリのトークルーム上で::glossary-tooltip{glossary-id="liff-url"}
[LIFF URL](/glossary/#liff-url)
::

をタップする。
- 外部ブラウザでLIFF URLをタップする。

## LINE内ブラウザ

LINEのアプリ内専用のブラウザです。次の方法でLIFFアプリを開くと、LINE内ブラウザで開かれます。

- LINEアプリのトークルーム上でLIFFアプリのエンドポイントURLをタップする。

なお、LIFFではLINE内ブラウザは外部ブラウザの一種として扱われます。たとえば、LINE内ブラウザで[`liff.getContext()`](/reference/liff/#get-context)メソッドを実行すると、戻り値の`type`プロパティの値は`external`（外部ブラウザ）になります。

## LIFFブラウザかLINE内ブラウザかを判別する

LIFFアプリが開かれたブラウザがLIFFブラウザかLINE内ブラウザかを判別するには、次の2つの方法があります。

- [ユーザーインターフェースで判別する](#identify-from-ui)
- [`liff.isInClient()`メソッドで判別する](#identify-using-liff-is-in-client)

### ユーザーインターフェースで判別する

LIFFブラウザとLINE内ブラウザでは、ヘッダーやフッターのユーザーインターフェースが異なります。そのため、LIFFアプリを開いているブラウザのユーザインターフェースを確認することで、LIFFブラウザかLINE内ブラウザかを判別できます。

| LIFFブラウザ                                                                                                                                                                                        | LINE内ブラウザ                                                                                                                                                                                           |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ![](/media/liff/differences-between-liff-browser-and-line-in-app-browser/liff-browser.png){className="[\"border\",\"w-fix-360\"]"}- ヘッダー   - 最小化ボタンが:b[ない]   - アクションボタンが:b[ある]（※） - フッターが:b[ない] | ![](/media/liff/differences-between-liff-browser-and-line-in-app-browser/line-in-app-browser.png){className="[\"border\",\"w-fix-360\"]"}- ヘッダー   - 最小化ボタンが:b[ある]   - アクションボタンが:b[ない] - フッターが:b[ある] |

※ モジュールモードでは非表示になります。詳しくは、「[LIFFアプリをチャネルに追加する](/docs/liff/registering-liff-apps/#registering-liff-app)」を参照してください。

### `liff.isInClient()`メソッドで判別する

`liff.isInClient()`メソッドを使うと、LIFFブラウザかどうかを判別できます。詳しくは、『LIFF APIリファレンス』の「[liff.isInClient()](/reference/liff/#is-in-client)」を参照してください。

## LIFFブラウザとLINE内ブラウザで利用できる機能の違い

LIFFブラウザとLINE内ブラウザで利用できる機能の違いは次のとおりです。

| 機能                                                                                              | LIFFブラウザ | LINE内ブラウザ |
| ----------------------------------------------------------------------------------------------- | -------- | --------- |
| [画面サイズ](/docs/liff/overview/#screen-size)の指定                                                    | ✅        | ❌         |
| [アクションボタン](/docs/liff/overview/#action-button)                                                  | ✅        | ❌         |
| [マルチタブビュー](/docs/liff/overview/#multi-tab-view)                                                 | ✅        | ❌         |
| [二次元コードリーダー](/docs/liff/developing-liff-apps/#opening-two-dimensional-code-reader)              | ✅        | ❌         |
| [トークルームへのメッセージ送信](/docs/liff/developing-liff-apps/#sending-messages)                            | ✅        | ❌         |
| [シェアターゲットピッカー](/docs/liff/developing-liff-apps/#share-target-picker)                            | ✅        | ❌         |
| [LIFFアプリではない外部のサイトへの遷移時のポップアップ表示](/docs/liff/developing-liff-apps/#transition-to-external-site) | ✅        | ❌         |
| [LIFF間遷移](/docs/liff/opening-liff-app/#move-liff-to-liff)                                       | ✅        | ❌         |

✅：利用できる  
❌：利用できない
