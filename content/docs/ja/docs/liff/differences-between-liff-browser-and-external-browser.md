---
title: LIFFブラウザと外部ブラウザの違い
navigation: true
description: ''
meta: '{"tags":null,"author":null,"last_updated":null,"source_language":"ja"}'
path: /ja/docs/liff/differences-between-liff-browser-and-external-browser
__hash__: NthVN09drFrdXFpxqKOLpmaEISL4TSmsEdaLvtz6_qY
seo:
  title: LIFFブラウザと外部ブラウザの違い
  description: ''
---

# :page-title

:markdown-controls::admonition{title="LIFFブラウザの仕様" type="tip"}
詳しくは、「[LIFFブラウザの仕様](/docs/liff/overview/#liff-browser-spec)」を参照してください。
::

:glossary-tooltip[[LIFFブラウザ](/glossary/#liff-browser)]{glossary-id="liff-browser"}は、:glossary-tooltip[[外部ブラウザ](/glossary/#external-browser)]{glossary-id="external-browser"}がサポートしているウェブ技術の一部をサポートしていません。LIFFブラウザでサポートしていないウェブ技術として、以下のものがあります。

| ウェブ技術                                                                                      | 説明                                                                                                                                                                                                                                                                                                                                                                                                                  |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [theme-color Meta Tag](https://caniuse.com/meta-theme-color){rel="[\"nofollow\"]"}         | ユーザーインターフェースの色を指定する機能                                                                                                                                                                                                                                                                                                                                                                                               |
| [Download attribute](https://caniuse.com/download){rel="[\"nofollow\"]"}                   | ハイパーリンクを、リソースへの遷移ではなく、リソースのダウンロードに使用する機能                                                                                                                                                                                                                                                                                                                                                                            |
| [Add to home screen (A2HS)](https://caniuse.com/sr-web-app-manifest){rel="[\"nofollow\"]"} | ユーザーがウェブアプリケーションを端末のホーム画面に追加できるようにする機能。  なお、LINEミニアプリでは、[マルチタブビュー](/docs/line-mini-app/discover/builtin-features/#multi-tab-view)の［**ホーム画面に追加**］や[`liff.createShortcutOnHomeScreen()`](/reference/liff/#create-shortcut-on-home-screen)メソッドを使うことで、ユーザー端末のホーム画面にLINEミニアプリへのショートカットを追加できます。詳しくは、『LINEミニアプリドキュメント』の「[ユーザー端末のホーム画面にLINEミニアプリへのショートカットを追加する](/docs/line-mini-app/develop/add-to-home-screen/)」を参照してください。 |
| [Service Workers](https://caniuse.com/serviceworkers){rel="[\"nofollow\"]"}                | ウェブアプリケーションでオフライン対応、バックグラウンド同期、プッシュ通知などをできるようにする機能                                                                                                                                                                                                                                                                                                                                                                  |

なお、上記のウェブ技術については、今後、LIFFブラウザがサポートする可能性があります。

上記以外のウェブ技術について、LIFFブラウザがサポートしているかどうかは、[WKWebView](https://developer.apple.com/documentation/webkit/wkwebview){rel="[\"nofollow\"]"}や[Android WebView](https://developer.android.com/reference/android/webkit/WebView){rel="[\"nofollow\"]"}の仕様に従います。詳しくは、『[Can I use...](https://caniuse.com/){rel="[\"nofollow\"]"}』を参照してください。
