---
title: LIFFの概要
navigation: true
description: LINE Front-end Framework（LIFF）は、LINEヤフー株式会社が提供するプラットフォームです。
meta: '{"tags":null,"author":null,"last_updated":null,"source_language":"ja"}'
path: /ja/docs/liff/overview
__hash__: kVK74BSnQq_rkS9BSL8djNa9577bHLGSGFgkMpNgG6Q
seo:
  title: LIFFの概要
  description: LINE Front-end Framework（LIFF）は、LINEヤフー株式会社が提供するプラットフォームです。
---

# :page-title

:markdown-controlsLINE Front-end Framework（LIFF）は、LINEヤフー株式会社が提供するウェブアプリのプラットフォームです。このプラットフォームで動作するウェブアプリを、LIFFアプリと呼びます。

LIFFアプリを使うと、LINEのユーザーIDなどをLINEプラットフォームから取得できます。LIFFアプリではこれらを利用して、ユーザー情報を活用した機能を提供したり、ユーザーの代わりにメッセージを送信したりできます。

LIFF v2で追加された機能については、「[リリースノート](/docs/liff/release-notes/)」を参照してください。

::admonition{title="LIFFの機能をウェブ上で試せます" type="tip"}
LINEヤフー株式会社では開発者向けに[LIFFプレイグラウンド](https://liff-playground.netlify.app/){rel="[\"nofollow\"]"}というウェブアプリ（LIFFアプリ）を提供しています。LIFFプレイグラウンドではLIFFの基本的な機能が試せます。LIFFを用いるとどのようなことができるのかを確認したいときに参照してください。なお、[LIFFプレイグラウンドのソースコード](https://github.com/line/liff-playground){rel="[\"nofollow\"]"}をGitHubで公開しています。
::

::admonition{title="OpenChatでのLIFFアプリの利用はサポートされていません" type="note"}
現在のところ、OpenChatではLIFFアプリの利用は正式にサポートされていません。たとえば、LIFFアプリからプロフィール情報を取得できない場合があります。
::

## 推奨環境

LIFFの推奨環境は以下のとおりです。

なお、LIFFアプリを[LIFFブラウザ](#liff-browser)で開いた場合と、:glossary-tooltip[[外部ブラウザ](/glossary/#external-browser)]{glossary-id="external-browser"}で開いた場合では、使用できる機能が異なります。たとえば、`liff.scanCode()`は、外部ブラウザでは利用できません。詳しくは、「[LIFF APIリファレンス](/reference/liff/)」を参照してください。

### LIFFアプリをLIFFブラウザで開く場合

| 項目      | 推奨環境                                                                                                                    | 最低動作環境           |
| ------- | ----------------------------------------------------------------------------------------------------------------------- | ---------------- |
| iOS     | 最新バージョン。[WKWebView](https://developer.apple.com/documentation/webkit/wkwebview){rel="[\"nofollow\"]"}が使用されます。           | LINEの推奨環境に準ずる。 * |
| Android | 最新バージョン。[Android WebView](https://developer.android.com/reference/android/webkit/WebView){rel="[\"nofollow\"]"}が使用されます。 | LINEの推奨環境に準ずる。 * |
| LINE    | 最新バージョン                                                                                                                 | LINEの推奨環境に準ずる。 * |

::admonition{title="LIFFアプリは、OS、LINEともに最新バージョンの環境での利用を推奨します" type="note"}
LIFFアプリは、OS、LINEともに最新バージョンの環境での利用を推奨します。上記の「最低動作環境」以降のバージョンでも、機能や設定によっては動作しない場合や画面が正常に表示されない場合があります。
::

* LINEの推奨環境については、ヘルプセンターの「[LINEの推奨環境を教えてください](https://help.line.me/line/ios/pc?lang=ja&contentId=10002433){rel="[\"nofollow\"]"}」を参照してください。

### LIFFアプリを外部ブラウザで開く場合

以下のブラウザの最新バージョンで動作します。

Microsoft Edge、Google Chrome、Firefox、Safari

## LIFFブラウザ

LIFFブラウザはLIFFアプリ専用のブラウザです。ユーザーがLINEでLIFFのURLを開くと、LIFFブラウザでLIFFアプリが開きます。

![LIFF browser](/media/liff/overview/liffBrowser.png){className="[\"border\"]"}

LIFFブラウザはLINE内で動作するため、LIFFアプリはユーザーにログインを促さなくてもユーザーデータにアクセスすることができます。また、LIFFブラウザはLIFFアプリを共有したり、LIFFアプリから友だちにメッセージを送るなど、LINE特有の機能を提供しています。

## LIFFブラウザの仕様

LIFFブラウザは、iOSでは[WKWebView](https://developer.apple.com/documentation/webkit/wkwebview){rel="[\"nofollow\"]"}、Androidでは[Android WebView](https://developer.android.com/reference/android/webkit/WebView){rel="[\"nofollow\"]"}を利用しています。そのため、LIFFブラウザの仕様および動作についてもこれらの仕組みに準拠します。

なお、LIFFブラウザは、外部ブラウザがサポートしているウェブ技術の一部をサポートしていません。詳しくは、「[LIFFブラウザと外部ブラウザの違い](/docs/liff/differences-between-liff-browser-and-external-browser/)」を参照してください。

## LIFFブラウザのキャッシュ

LIFFブラウザが利用している[WKWebView](https://developer.apple.com/documentation/webkit/wkwebview){rel="[\"nofollow\"]"}や[Android WebView](https://developer.android.com/reference/android/webkit/WebView){rel="[\"nofollow\"]"} は、表示したコンテンツの内容を、[Cache-Control](https://developer.mozilla.org/ja/docs/Web/HTTP/Reference/Headers/Cache-Control){rel="[\"nofollow\"]"} などのHTTPヘッダーの指示に従って、キャッシュとして保存して利用する場合があります。

LIFFブラウザにおけるキャッシュの制御については、[Cache-Control](https://developer.mozilla.org/ja/docs/Web/HTTP/Reference/Headers/Cache-Control){rel="[\"nofollow\"]"} などのHTTPヘッダーを用いて行ってください。

::admonition{title="キャッシュの削除について" type="note"}
LIFFブラウザに保存されたキャッシュを明示的に削除することはできません。
::

## LIFFブラウザの画面サイズ

LIFFブラウザは、以下の3つの画面サイズで表示できます。

![画面サイズ](/media/liff/overview/viewTypes.png){className="[\"border\"]"}

画面サイズは、LIFFアプリをLINEログインチャネルに追加するときに指定します。詳しくは、「[LIFFアプリをチャネルに追加する](/docs/liff/registering-liff-apps/#registering-liff-app)」を参照してください。

## アクションボタン

LIFFアプリの画面サイズを`Full`に指定している場合、ヘッダーには、デフォルトでアクションボタンが表示されます。

![](/media/liff/overview/liff-header.png){className="[\"w-fix-320\",\"border\"]"}

::admonition{title="アクションボタンを非表示にする" type="tip"}
LINE DevelopersコンソールでLIFFアプリの［**モジュールモード**］をオンにすると、アクションボタンを非表示にできます。詳しくは、「[LIFFアプリをチャネルに追加する](/docs/liff/registering-liff-apps/)」を参照してください。
::

アクションボタンを押すと、以下に示すLINEアプリのバージョンに応じた機能が表示されます。なお、アクションボタンのアイコンはLINEバージョンによって異なります。

| LINEアプリのバージョン     | 表示される機能     |
| ----------------- | ----------- |
| 26.7.0以降          | ドロップダウンメニュー |
| 15.12.0以降26.7.0未満 | マルチタブビュー    |
| 15.12.0未満         | オプション       |

### ドロップダウンメニュー

LINEバージョン26.7.0以降では、アクションボタンをタップすると、以下のドロップダウンメニューが表示されます。

| 項目          | 説明                                                                                                                              |
| ----------- | ------------------------------------------------------------------------------------------------------------------------------- |
| **すべてのタブ**  | [マルチタブビュー](#multi-tab-view)を表示します。                                                                                              |
| **更新**      | 現在開いているページを再読み込みします。                                                                                                            |
| **ページを最小化** | LIFFブラウザを最小化します。詳しくは、「[LIFFブラウザを最小化する](/docs/liff/minimizing-liff-browser/)」を参照してください。                                          |
| **シェア**     | 現在開いているページの:glossary-tooltip[[パーマネントリンク](/glossary/#permanent-link-liff)]{glossary-id="permanent-link-liff"}を、LINEメッセージでシェアします。 |
| **権限設定**    | 権限設定画面を開きます。権限設定画面では、現在開いているLIFFアプリのカメラやマイクへのアクセス権を確認できます。変更はできません。LINEバージョン14.6.0以降で利用可能です。                                    |

::admonition{title="パーマネントリンクのシェアに失敗する場合があります" type="note"}
現在のページのURLがLINE Developersコンソールの［**エンドポイントURL**］に指定したURLで始まらない場合、パーマネントリンクを取得できずシェアに失敗します。
::

### マルチタブビュー

マルチタブビューには、最近使用したサービスが表示されます。最近使用したサービスには、ユーザーが開いたLIFFアプリが、利用履歴の新しい順に最大50件まで表示されます。

LIFFアプリを閉じたり、別のLIFFアプリを新たに開いたりするとその時点のスクリーンショットが利用履歴として表示されます。ユーザーは利用履歴を使って、LIFFアプリを再度開くことができます。

LIFFアプリが利用履歴から再度開かれた際、LIFFアプリは再開または再読み込みされます。再開、再読み込みの仕様は、以下のとおりです。

| 再度開かれた際の挙動       | 条件                                                                | 仕様                                                                    |
| ---------------- | ----------------------------------------------------------------- | --------------------------------------------------------------------- |
| LIFFアプリが再開される    | 以下の条件を両方満たすLIFFアプリ  - 12時間以内に使用したLIFFアプリ - 利用履歴の最新10件に含まれるLIFFアプリ | ユーザーが使用を中断した画面からLIFFアプリが再開します。アクセストークン、ブラウザの閲覧履歴、画面のスクロール位置は保持されています。 |
| LIFFアプリが再読み込みされる | 再開される条件を満たさない場合                                                   | ユーザーが使用を中断したURLでLIFFアプリが初期化されます。アクセストークン、ブラウザの閲覧履歴、画面のスクロール位置は破棄されます。 |

#### 最近使用したサービスに表示される条件

最近使用したサービスにLIFFアプリが表示されるには、以下の条件をすべて満たす必要があります。

- LINEアプリのバージョンが15.12.0以降
- LIFFアプリの[画面サイズ](#screen-size)に`Full`を指定
- LIFFアプリのモジュールモードがオフ

#### 最近使用したサービスに表示される単位

最近使用したサービスでは、LIFFアプリがLIFF ID単位で表示されます。同じLIFFアプリを「最近使用したサービス」以外から再度開いた場合は、新たにLIFFアプリが開かれ、古いLIFFアプリは終了します。

なお、LIFF間遷移で他のLIFFアプリを開いた場合は、異なるLIFF IDであっても1つのLIFFアプリとしてまとめて表示されます。

#### LIFFアプリが再読み込みされた場合`liff.sendMessages()`メソッドは使用できません

最近使用したサービスから再読み込みされたLIFFアプリで、[`liff.sendMessages()`](/reference/liff/#send-messages)メソッドを使用するとエラーが発生します。このため、LIFFアプリが再読み込みされた場合`liff.sendMessages()`メソッドは使用できません。

LIFFアプリが再読み込みされた後に`liff.sendMessages()`メソッドを使いたい場合は、トークルーム上のLIFF URLをタップするなどしてLIFFアプリを開き直す必要があります。

## 開発上のガイドライン

LIFFアプリを開発する際は、「[LIFFアプリ開発ガイドライン](/docs/liff/development-guidelines/)」に従ってください。

## LIFFアプリの開発をサポートするツール

LINEヤフー株式会社では、開発者の方々がLIFFアプリの開発をより円滑に行えるよう、以下のツールを提供しています。

| ツール名                                                                       | このツールでできること                                                                                                                                                                                                                                                                                                                         |
| -------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [LIFFスターターアプリ](/docs/liff/trying-liff-app/)                                | LIFFについて初めて学ぶ人向けのスターターアプリです。LIFFアプリの開発の始め方を理解しやすいよう、LIFFアプリの初期化のデモのみを行っています。まずは動くものを作って、LIFFの概要を大まかに理解したい方にお勧めです。                                                                                                                                                                                                                   |
| [Create LIFF App](/docs/liff/cli-tool-create-liff-app/)                    | LIFFアプリの開発環境がコマンド1つで構築できるCLIツールです。Reactの[Create React App](https://github.com/facebook/create-react-app){rel="[\"nofollow\"]"}や、Next.jsの[Create Next App](https://nextjs.org/docs/pages/api-reference/cli/create-next-app){rel="[\"nofollow\"]"}のように、Create LIFF Appからの質問に答えていくことで、用途に合わせたLIFFアプリのひな形を含む開発環境が生成され、すぐに開発を始めることができます。 |
| [LIFF CLI](/docs/liff/liff-cli/)                                           | LIFFアプリの開発を円滑にするCLIツールです。LIFF CLIでできることは次のとおりです。  - LIFFアプリを作成、更新、参照、削除する - LIFFアプリの開発環境を作成する - LIFFアプリを[LIFF Inspector](/docs/liff/liff-plugin/#liff-inspector)でデバッグする - ローカル開発サーバーをHTTPSで起動する  今後のアップデートで[LIFF Mock](/docs/liff/liff-plugin/#liff-mock)の機能も追加される予定です。                                                             |
| [LIFFプレイグラウンド](https://liff-playground.netlify.app/){rel="[\"nofollow\"]"} | LIFFの機能をオンライン上で試すことができます。[LIFFプレイグラウンドのソースコード](https://github.com/line/liff-playground){rel="[\"nofollow\"]"}はGitHubで公開していますので、開発者は任意のLIFF IDを設定して、独自のLIFFプレイグラウンドをサーバー上にデプロイすることも可能です。                                                                                                                                             |

## 作業の流れ

LIFFアプリをエンドユーザーが利用できるようにするには、以下の手順を行います。

1. LIFFアプリを追加する[チャネルを作成する](/docs/liff/getting-started/)
2. [LIFFスターターアプリを試してみる](/docs/liff/trying-liff-app/)、または[LIFFアプリを開発する](/docs/liff/developing-liff-apps/)
