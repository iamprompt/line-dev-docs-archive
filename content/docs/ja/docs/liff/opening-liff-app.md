---
title: LIFFアプリを開く
navigation: true
description: ''
meta: '{"tags":null,"author":null,"last_updated":null,"source_language":"ja"}'
path: /ja/docs/liff/opening-liff-app
__hash__: KOgXE2EcX01vyEuC9RW-ToBfzFWDHl2xkXkjP7sG9wU
seo:
  title: LIFFアプリを開く
  description: ''
---

# :page-title

:markdown-controlsLIFFアプリは、:glossary-tooltip[[LIFFブラウザ](/glossary/#liff-browser)]{glossary-id="liff-browser"}または:glossary-tooltip[[外部ブラウザ](/glossary/#external-browser)]{glossary-id="external-browser"}で開くことができます。

このページでは、ユーザーがLIFFアプリを開く際の操作方法や、LIFFアプリが開くまでの動作について説明します。

:toc## ユーザーがLIFFアプリを開く際の操作

ここでは、ユーザーがLIFFアプリを開く際の操作を説明します。

1. ユーザーが::glossary-tooltip{glossary-id="liff-url"}
[LIFF URL](/glossary/#liff-url)
::

にアクセスします。  
LIFF URLは、[LIFFアプリをチャネルに追加する](/docs/liff/registering-liff-apps/)と、発行されます。  

たとえば、LINEアプリのトークにLIFF URLを送信し、吹き出しに表示されたLIFF URLをタップします。  
![](/media/liff/open-liff-app.png){className="[\"w-fix-320\"]"}
2. ユーザーからの認可が必要な場合、チャネル同意画面が表示されます。同意画面では、ユーザーがLIFFアプリに必要な権限を与えることを許可します。  
![同意画面](/media/liff/opening-liff-app/channel-consent-screen-ja.png){className="[\"border\",\"w-fix-280\"]"}
3. LIFFアプリが開きます。  
![LIFF browser](/media/liff/overview/liffBrowser.png){className="[\"border\"]"}

### LIFF URLにアクセスした際にLIFFアプリが開かれる環境について

ユーザーがLIFF URLにアクセスすると、:glossary-tooltip[[外部ブラウザ](/glossary/#external-browser)]{glossary-id="external-browser"}またはLINEアプリ上で:glossary-tooltip[[LIFFブラウザ](/glossary/#liff-browser)]{glossary-id="liff-browser"}が開きます。

LIFF URLは、iOSの[ユニバーサルリンク](https://developer.apple.com/documentation/xcode/allowing-apps-and-websites-to-link-to-your-content/){rel="[\"nofollow\"]"}やAndroidの[アプリリンク](https://developer.android.com/training/app-links){rel="[\"nofollow\"]"}に対応しているため、LINEアプリ外からLIFF URLを開いた場合もLINEアプリ上でLIFFブラウザが開かれます。

ただしユーザーが利用するOSの仕様によって、Safari、Chromeなどの外部ブラウザ上でも、ユニバーサルリンクやアプリリンクが動作せずにLINEアプリ上でLIFFブラウザが開かないことがあります。また、LINEアプリ以外のネイティブアプリ上でLIFF URLにアクセスした場合、外部ブラウザとLIFFブラウザのどちらでLIFFアプリが開かれるかは、そのネイティブアプリのWebView仕様に準拠します。

これらの理由から、LIFF URLにアクセスした場合にLIFFアプリがどの環境で開かれるかは保証していません。LIFF URLにアクセスしたとしてもLINEアプリ上でLIFFブラウザが開かない場合もあることに注意してください。

## LIFF URLにアクセスしてからLIFFアプリが開くまでの動作について

ここでは、ユーザーがLIFF URLにアクセスしたときに、LIFFアプリが正しく開くように実装するために、2つのリダイレクト先の設定方法、および`liff.init()`メソッドを実行するタイミングを説明します。

| リダイレクト先      | 説明                                                                                             |
| ------------ | ---------------------------------------------------------------------------------------------- |
| 1次リダイレクト先URL | ユーザーがLIFF URLにアクセスしたときに、LIFFサーバーから初めてリダイレクトされる先のURLです。ここにリダイレクトされたときに、`liff.init()`メソッドを実行します。 |
| 2次リダイレクト先URL | `liff.init()`メソッドが実行されたときに、ユーザーがリダイレクトされる先のURLです。ここにリダイレクトされたら、LIFFアプリのページを表示します。              |

![リダイレクトの流れ](/media/liff/redirect-flow.png){className="[\"w-fix-680\",\"bg-border\"]"}

### LIFF URLを作成する

LIFF URLは、LINEヤフー株式会社が提供するLIFFサーバーを指すURLです。[LIFFアプリをチャネルに追加する](/docs/liff/registering-liff-apps/)と、発行されます。

LIFF URLの例：`https://liff.line.me/1234567890-AbcdEfgh`

#### サポートされているLIFF URL

サポートされているLIFF URLは、以下のとおりです。

- `https://liff.line.me/{liffId}`
- `https://miniapp.line.me/{liffId}` (LINEミニアプリのみ)

::admonition
---
title: 「https://line.me/R/app/{liffId}」および「line://app/{liffId}」は非推奨です
type: note
---
[LIFF v1](/docs/liff/versioning-policy/#life-cycle-schedule)向けに提供されていた以下の形式のLIFF URLは、:glossary-tooltip[[非推奨](/glossary/#deprecated)]{glossary-id="deprecated"}です。

- `https://line.me/R/app/{liffId}`
- `line://app/{liffId}`
::

### 1次リダイレクト先URLを作成する

1次リダイレクト先URLは、常にLINE Developersコンソールの［**エンドポイントURL**］に指定したURLです。

::admonition{title="LIFF URLに指定した追加情報の扱い" type="note"}
1次リダイレクト先URLではLIFF URLに指定した追加情報（例：`path_A/?key1=value1#URL-fragment`）はすべて`liff.state`クエリパラメータに含まれています。

例：`https://example.com/2020campaign/?key=value&liff.state=urlencoded(path_A/?key1=value1#URL-fragment)`

なお、LIFF URLに追加情報を指定しない場合は、`liff.state`クエリパラメータは省略されます。
::

### 2次リダイレクト先URLを作成する

2次リダイレクト先URLは、ユーザーがアクセスするURLによって異なります。

LINE Developersコンソールの［**エンドポイントURL**］に指定したパスやクエリパラメータ（`/2020campaign/?key=value`）が、2次リダイレクト先に含まれます。

| ユーザーがアクセスするURL                                                                                | 2次リダイレクト先URL                                                                                                                                                                                                                                                                             |
| --------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| LIFF URL（1）   例：`https://liff.line.me/{liffId}`                                               | LINE Developersコンソールの［**エンドポイントURL**］に指定したURLです。   例：`https://example.com/2020campaign/?key=value`                                                                                                                                                                                       |
| LIFF URLに追加情報を指定したURL（2）   例：`https://liff.line.me/{liffId}/path_A/?key1=value1#URL-fragment` | 図の(2)のように3種類の情報を組み合わせたURLです。- ［**エンドポイントURL**］に指定したドメイン名（`https://example.com`） - ［**エンドポイントURL**］に指定したパスやクエリパラメータ（`/2020campaign/?key=value`） - LIFF URLに指定した追加情報（`/path_A/?key1=value1#URL-fragment`）  例：`https://example.com/2020campaign/path_A/?key=value&key1=value1#URL-fragment` |

![エンドポイントURL](/media/liff/endpoint-url.png){className="[\"bg-border\"]"}

## LIFFアプリから別のLIFFアプリを開いた場合の動作について（LIFF間遷移）

LIFFブラウザでLIFFアプリを開いているときに、別のLIFFアプリへのリンクをクリックすると、LIFFブラウザを開いたまま別のアプリを表示することができます。これを「LIFF間遷移」と呼びます。LIFF間遷移ではLIFFブラウザが閉じないため、LIFFブラウザの戻るボタンで遷移元のLIFFアプリに戻ることができます。

- [LIFF間遷移が可能な条件](#conditions-liff-to-liff)
- [LIFFアプリの画面サイズによる動作](#behavior-by-screen-size)
- [LIFF間遷移後の「chat_message.write」スコープについて](#about-chat-message-write-scope)
- [LIFF間遷移前のURLを取得する](#using-liff-referrer)
- [別のLIFFアプリを開いた場合に表示されるメッセージ](#messages-liff-to-liff)

![LIFF-apps-transition](/media/liff/liff_transition.png){className="[\"w-fix-640\"]"}

::admonition{title="意図しない動作" type="note"}
古いバージョンのLIFF SDKを使っている場合、以下のような意図しない動作になることがあります。

- パス（`/path`）が指定されたLIFF URLから別のLIFFアプリへ遷移したにもかかわらず、LINE Developersコンソールの［**エンドポイントURL**］に指定したURLへ遷移してしまう
- ユーザーに権限の認可を求める[同意画面](/docs/line-login/link-a-bot/)で［**キャンセル**］をクリックした場合、一度LIFFブラウザを閉じなくてはならない
- 遷移先がLINEミニアプリの場合、LIFFブラウザヘッダのデザインが自動で変化しない

複数のLIFFアプリ間を遷移するように設計する際は、最新版のLIFF SDKを使うことをお勧めします。
::

### LIFF間遷移が可能な条件

以下の条件をすべて満たす場合に、LIFF間遷移が可能となります。

- LIFF SDKバージョンが2.4.1以上
- 遷移元のLIFFアプリの画面サイズが`Full`表示に設定されている
- 遷移先のLIFFアプリが`liff.init()`で正しく初期化されている

### LIFFアプリの画面サイズによる動作

- 遷移元のLIFFアプリの画面サイズが`Tall`もしくは`Compact`の場合は、遷移先の画面サイズにかかわらず一度ブラウザが閉じてから、遷移先のLIFFアプリが表示されます。
- 遷移元のLIFFアプリの画面サイズが`Full`の場合、遷移後のLIFFアプリは画面サイズの指定にかかわらず`Full`で表示されます。
- 遷移元のLIFFアプリの画面サイズが`Full`で、遷移先のLIFFアプリの画面サイズの指定が`Tall`もしくは`Compact`だった場合、遷移後のLIFFアプリでは、[アクションボタン](/docs/liff/overview/#action-button)は表示されません。

### LIFF間遷移後の「chat_message.write」スコープについて

LIFF間遷移後の`chat_message.write`スコープは、遷移先のURLによって有効かどうかが異なります。

| 遷移先のURL               | URLの例                                                            | 遷移後の`chat_message.write`スコープ |
| --------------------- | ---------------------------------------------------------------- | ---------------------------- |
| LIFF URL              | `https://liff.line.me/{liffId}`                                  | **有効**                       |
| LIFF URLに追加情報を指定したURL | `https://liff.line.me/{liffId}/path_A/?key1=value1#URL-fragment` | **有効**                       |
| エンドポイントURL            | `https://example.com`                                            | **無効**                       |

`chat_message.write`スコープが有効であれば、遷移後のLIFFアプリでも[`liff.sendMessages()`](/reference/liff/#send-messages)メソッドを利用できます。

### LIFF間遷移前のURLを取得する

LIFF間遷移でLIFFアプリを開いた場合、遷移後のLIFFアプリのURLには`liff.referrer`というクエリパラメータが付与されます。`liff.referrer`の値には、LIFF間遷移時にLIFFサーバーが受信した`Referer`リクエストヘッダーのアドレスを、[パーセントエンコード](https://ja.wikipedia.org/wiki/%E3%83%91%E3%83%BC%E3%82%BB%E3%83%B3%E3%83%88%E3%82%A8%E3%83%B3%E3%82%B3%E3%83%BC%E3%83%87%E3%82%A3%E3%83%B3%E3%82%B0){rel="[\"nofollow\"]"}したURLが設定されます。`liff.referrer`の値を確認することで、遷移前のURLを取得できます。

::admonition
---
title: LINEバージョン12.13.0〜13.19.xでは、LIFF間遷移後のLIFFアプリのURLにliff.referrerが付与されません
type: note
---
詳しくは、2023年11月30日のニュース、「[LINEバージョン12.13.0以降でLIFF間遷移後にliff.referrerが付与されない不具合を修正しました](/news/2023/11/30/liff-update-line-13-20-0/)」を参照してください。
::

以下は、LIFF間遷移時に`liff.referrer`が付与される例です。

|              | 遷移前のLIFFアプリのURL              | リンク先のURL                                      | 遷移後のLIFFアプリのURL（`liff.init()`メソッド実行後）                                               |
| ------------ | ---------------------------- | --------------------------------------------- | ----------------------------------------------------------------------------------- |
| **付与される場合**  | `https://first.example.com/` | `https://liff.line.me/{LIFF ID}`   （LIFF URL） | `✅ https://second.example.com/?liff.referrer=https%3A%2F%2Ffirst.example.com%2F` ※1 |
| **付与されない場合** | `https://first.example.com/` | `https://second.example.com/`   （エンドポイントURL）  | `❌ https://second.example.com/` ※2                                                  |

※1 遷移後のLIFFアプリのURLには`liff.referrer`以外にも`liff.*`のクエリパラメータが付与されていることがあります。  
※2 LIFFアプリのエンドポイントURLを直接開いた場合、`liff.referrer`は付与されません。

### 別のLIFFアプリを開いた場合に表示されるメッセージ

LIFFアプリから別のURLにアクセスしたときに、「○○（LIFFアプリの名称）へ移動しました。」というメッセージが表示される場合があります。

このメッセージは、先に開いているLIFFアプリ（遷移元のLIFFアプリ）と異なるLIFF IDのLIFFアプリを開いたときに表示されます。このメッセージの表示の有無は、LIFF間遷移の成功とは関係ありません。

![](/media/liff/switched-to-another-app-ja.png){className="[\"w-fix-240\"]"}
