---
title: LINEログインの概要
navigation: true
description: LINEログインをウェブアプリやネイティブアプリに組み込むと、ユーザーがLINEログインを使用できるようになります。
meta: '{"tags":null,"author":null,"last_updated":null,"source_language":"ja"}'
path: /ja/docs/line-login/overview
__hash__: 1UM1cZLkzNYnX-twSrdhBOBbiytnxtzOI9n2B_sPbsE
seo:
  title: LINEログインの概要
  description: LINEログインをウェブアプリやネイティブアプリに組み込むと、ユーザーがLINEログインを使用できるようになります。
---

# :page-title

:markdown-controls::admonition{title="開発者用ドキュメント" type="tip"}
これは、開発者用ドキュメントです。LINEアプリの使いかたや、ログイン方法については、[ヘルプセンター](https://help.line.me/){rel="[\"nofollow\"]"}を参照してください。
::

## LINEログインとは

LINEログインは、LINEアカウントを使ったソーシャルログインサービスで、無料で利用できます。

LINEログインをあなたのウェブサイトやアプリに組み込むことで、ユーザーが会員登録やログインをする時に、次のような利便性の向上が見込めます。

- 会員登録する際に、あらかじめLINEに登録されている::glossary-tooltip{glossary-id="profile-information"}
[プロフィール情報](/glossary/#profile-information)
::

が自動で入力されるので、ユーザーの入力の手間を省ける
- サイトごとのメールアドレスとパスワードを覚えなくても、「LINEログイン」ボタンで簡単にログインできる

LINEログインは、ウェブアプリ（ウェブサイト）、iOSアプリ、Androidアプリ、またはUnityゲームに組み込むことができます。

::admonition{title="LINEログインを組み込んだウェブサイトの例" type="tip"}
たとえば、電子書籍ストア「[BOOK☆WALKER](https://bookwalker.jp/top/){rel="[\"nofollow\"]"}」では、ユーザーが簡単に会員登録、継続利用できるように、LINEログインをはじめとするさまざまなソーシャルログインが組み込まれています。

![電子書籍ストアのログイン画面](/media/line-login/overview/line-login-bookwalker-01-ja.png){className="[\"border\",\"w-fix-560\"]"}
::

## デモサイトでLINEログインを体験する

デモサイトで実際にLINEログインを体験してみましょう。お使いのスマートフォンでLINEを起動し、以下のQRコードを読み込むとデモを見ることができます。

![](/media/line-login/demo/login-demo-qr-code.png){className="[\"border\",\"w-fix-560\"]"}

::admonition{title="デモサイトで取得するデータについて" type="note"}
LINEログインのデモサイトでは、デモを利用したユーザーのLINEアカウントの「プロフィール情報（表示名、プロフィール画像のURL、ユーザーID）」を取得します。 ユーザーIDのみをサーバーに保存しますが、保存されたデータは毎日削除されます。上記をご理解の上、ご利用ください。
::

## LINEログインを組み込む開発を始める

LINEログインを組み込む開発を始めるには、先ずはLINEログイン用のチャネルが必要です。詳しくは、「[LINEログインを始めよう](/docs/line-login/getting-started/)」を参照してください。

### ウェブアプリにLINEログインを組み込む

LINEログインをあなたのウェブアプリ（ウェブサイト）に組み込むと、ユーザーが簡単にアカウントを作成してログインできるようになります。ユーザーがデバイス上のLINEにログイン済みの場合、LINEログインを使って自動的にあなたが開発したウェブアプリにログインできます。認証と認可のプロセスは[OAuth 2.0](https://datatracker.ietf.org/doc/html/rfc6749){rel="[\"nofollow\"]"}と[OpenID® Connect](https://openid.net/specs/openid-connect-core-1_0.html){rel="[\"nofollow\"]"}プロトコルに基づきます。詳しくは、「[ウェブアプリにLINEログインを組み込む](/docs/line-login/integrate-line-login/)」を参照してください。

LINEログインによって向上するユーザー体験の例として、[LINE STORE](https://store.line.me/){rel="[\"nofollow\"]"}のウェブサイトを参考にしてください。

![LINEログイン](/media/line-login/overview/line-login-web.png)

### ネイティブアプリにLINEログインを組み込む

LINE SDKを使用してLINEログインをアプリに組み込めば、LINEでユーザー認証を処理できます。ユーザーがデバイスのLINEにログイン済みであれば、ユーザーはEメールアドレスとパスワードを入力せずにあなたのアプリにログインできます。Android、iOS、Unity向けのSDKが利用できます。

- [LINE SDK for iOS Swiftの概要](/docs/line-login-sdks/ios-sdk/swift/overview/)
- [LINE SDK for Androidの概要](/docs/line-login-sdks/android-sdk/overview/)
- [LINE SDK for Unityの概要](/docs/line-login-sdks/unity-sdk/overview/)
- [LINE SDK for Flutter](/docs/line-login-sdks/flutter-sdk/)

たとえば、LINEレンジャーゲームにはLINEログインが組み込まれており、ユーザーは自分のLINEアカウントで簡単にゲームのアカウントを作成することができます。

![LINE Rangers 1](/media/line-login/overview/line-login-rangers-1.png){className="[\"border\"]"}![LINE Rangers 3](/media/line-login/overview/line-login-rangers-3.png){className="[\"border\"]"}

## LINEログインの認証方法

LINEログインが組み込まれたアプリでは、以下のいずれかの認証方法でログインできます。

| 認証方法                                                                           | 説明                                                       |
| ------------------------------------------------------------------------------ | -------------------------------------------------------- |
| [自動ログイン](/docs/line-login/integrate-line-login/#line-auto-login)               | ユーザーの操作なしでログイン。LINEログイン画面や確認画面は表示されません                   |
| [メールアドレスログイン](/docs/line-login/integrate-line-login/#mail-or-qrcode-login)     | LINEログイン画面にメールアドレスとパスワードを入力してログイン                        |
| [QRコードログイン](/docs/line-login/integrate-line-login/#mail-or-qrcode-login)       | LINEログイン画面に表示されたQRコードを、スマートフォン版LINEのQRコードリーダーでスキャンしてログイン |
| [シングルサインオン（SSO）によるログイン](/docs/line-login/integrate-line-login/#line-sso-login) | 「次のアカウントでログイン」と表示された確認画面でログインボタンをクリックしてログイン              |

認証方法ごとの表示条件や、実際に表示される画面については、「[ユーザーがユーザー認証を行う](/docs/line-login/integrate-line-login/#authentication-process)」を参照してください。

## ユーザーを識別する

ユーザーがLINEログインを使用してアプリにログインし、アプリがユーザーのアクセストークンを取得すると、ユーザーがLINEに登録しているプロフィール情報を取得できます。ユーザーの表示名、ユーザーID、プロフィール画像のURL、およびステータスメッセージを取得できます。

詳しくは、「[ユーザープロフィールを取得する](/docs/line-login/managing-users/#get-profile)」を参照してください。

## LINEログインのバージョンについて

LINEログインでは[OpenID Connect Discovery 1.0](https://openid.net/specs/openid-connect-discovery-1_0.html){rel="[\"nofollow\"]"}をサポートしており、以下のURLでOpenIDプロバイダの情報を公開しています。

- [OpenID Provider Configuration Document](https://access.line.me/.well-known/openid-configuration){rel="[\"nofollow\"]"}

LINEログインには、以下のバージョンがあります。利用できる機能はバージョンによって異なります。

| バージョン         | ステータス                                                                             | 説明                                                                                                                                                                                                                                                                                                                                           |
| ------------- | --------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| LINEログイン v2.1 | :glossary-tooltip[[アクティブ](/glossary/#active)]{glossary-id="active"}               | [OAuth 2.0の認可コード付与のフロー](https://datatracker.ietf.org/doc/html/rfc6749){rel="[\"nofollow\"]"}に基づきログインを処理できます。また、[OpenID Connect](https://openid.net/developers/how-connect-works/){rel="[\"nofollow\"]"}プロトコルをサポートし、ユーザー情報をIDトークンで取得できます。   2017年9月28日にリリースされました。詳しくは、「[LINEログイン v2.1がリリースされました](/news/2017/09/28/line-login-v21/)」を参照してください。 |
| LINEログイン v2.0 | :glossary-tooltip[[非推奨](/glossary/#deprecated)]{glossary-id="deprecated"}         | 2017年1月24日にリリースされました。LINEログイン v2.0は:glossary-tooltip[[非推奨](/glossary/#deprecated)]{glossary-id="deprecated"}であり、時期は未定ですが:glossary-tooltip[[廃止](/glossary/#end-of-life)]{glossary-id="end-of-life"}を予定しているため、現行バージョン（LINEログイン v2.1）の利用を推奨します。なお廃止時期の告知から、実際の廃止までは一定の猶予期間を置く予定です。                                                              |
| LINEログイン v1   | ::glossary-tooltip{glossary-id="end-of-life"}   [廃止](/glossary/#end-of-life)   :: | **2018年6月30日にすべての機能の提供を終了しました。現在は利用できません。** 詳しくは、「[LINEログインv1の提供終了予定について](/news/2018/02/28/line-login-v1-notice/)」を参照してください。                                                                                                                                                                                                                 |

## 2要素認証を必須化する

チャネルの管理者が、ユーザーがチャネルにログインする際に2要素認証を要求するように設定できます。

2要素認証によって、リスト型攻撃などの不正ログインを受ける際のリスクを低減できる可能性が高くなります。

ユーザー保護の観点から、2要素認証を必須化することを推奨します。ただし、LINEアプリがインストールされたスマートフォンが必要になる場合があるなど、ユーザーにとっての制約が発生することにもなりますので、あらかじめご了承ください。

### 2要素認証とは

2要素認証とはパスワードのような本人だけが知っている知識、ICカードやスマートフォンなどの本人の所有物、指紋や顔などの生体情報のうち、2つの要素を利用してユーザー認証する仕組みです。2要素認証を使用すると、万が一パスワードが第三者に知られても不正ログインを防げる可能性が高くなります。

LINEログインでは、LINEアカウントによるパスワード認証と、画面に表示された認証番号をスマートフォン版LINEに入力することで2要素認証を行います。

ユーザーがサービスに最初にログインする際や、端末やブラウザが変わった場合は、パスワードを入力後に認証番号の入力を求められます。

![](/media/news/2023/login-flow-with-2fa-ja.png){className="[\"w-fix-760\"]"}

アカウントの切り替えを行ったり、ブラウザのcookieを削除したりしない限り、365日間は信頼済み状態が継続し、認証番号の入力を求められることはありません。

また、同じブラウザですでにログイン済みだった場合も、2要素認証はスキップされます。

::admonition{title="LINEログイン v2.1の使用を推奨します" type="tip"}
2要素認証は、LINEログイン v2.1で利用できます。LINEログイン v1.0（:glossary-tooltip[[廃止](/glossary/#end-of-life)]{glossary-id="end-of-life"}）またはLINEログイン v2.0（:glossary-tooltip[[非推奨](/glossary/#deprecated)]{glossary-id="deprecated"}）を使用している場合は、LINEログイン v2.1へのアップデートを推奨します。

バージョンの違いについて詳しくは、「[LINEログインのバージョンについて](/docs/line-login/overview/#versions)」を参照してください。
::

### LINE Developersコンソールで2要素認証の必須化を設定する

2要素認証の必須化は、チャネルを新規作成する際と、既存チャネルを編集する際に設定できます。設定できるチャネルの種類と設定できるタイミングは、次のとおりです。

| チャネルの種類       | 新規作成時 | 編集時  |
| ------------- | ----- | ---- |
| LINEログイン      | ✅     | ✅    |
| ブロックチェーンサービス  | ✅     | ✅    |
| Messaging API | - *1  | ✅ *2 |
| LINEミニアプリ     | ❌     | ❌    |

*1 Messaging APIチャネルは、LINE Developersコンソール上で作成できません

*2 過去に作成したチャネルでLIFFを保持している場合のみ

#### チャネルの新規作成時に設定する

[LINE Developersコンソール](/console/)でチャネルを新規作成する際に、［**2要素認証の必須化**］の項目でトグルスイッチを「オン」（右）にすると、設定を有効にできます。初期設定は「オン」です。

![](/media/news/2023/2fa-on-a-channel-ja.png){className="[\"bg-border\"]"}

#### 既存チャネルの編集時に設定する

LINE Developersコンソールで既存チャネルを編集する際に、［**2要素認証の必須化**］のオン／オフの設定が可能です。

設定を編集できるのは、Admin権限を持つユーザーのみです。Member権限の場合は、設定項目が画面に表示されません。

［**2要素認証の必須化**］の設定は、各チャネルの下記のタブに配置されています。

| チャネルの種類       | タブの名前      |
| ------------- | ---------- |
| LINEログイン      | LINEログイン設定 |
| ブロックチェーンサービス  | LINEログイン設定 |
| Messaging API | LIFF       |

### 2要素認証スイッチ機能との優先順位

[2要素認証スイッチ](/news/2022/04/26/2fa-switch-function/)は、ユーザーの端末でLINEの［**ホーム**］>［**設定**］>［**アカウント**］>［**Webログインの2要素認証**］のトグルスイッチがオンの場合、LINEログイン v2.1を使用しているサービスにログインする際に2要素認証を行う機能です。

チャネルにおける2要素認証の必須化は、ユーザーの端末の設定より優先されます。つまり、チャネルで2要素認証を必須化した場合は、ユーザーの端末で2要素認証スイッチがオフになっていても、ユーザーに2要素認証を要求します。

ユーザー端末の2要素認証スイッチと、チャネルの設定との関係は次のとおりです。

|                      | ユーザー端末の設定   オフ | ユーザー端末の設定   オン |
| -------------------- | -------------- | -------------- |
| **チャネルの設定**   **オフ** | 2要素認証が無効       | 2要素認証が有効       |
| **チャネルの設定**   **オン** | 2要素認証が有効       | 2要素認証が有効       |

### LINEログインの認証方式による挙動の違い

[LINEログインの認証方法](#auth-method)によって、［**2要素認証の必須化**］をオンにしていても認証番号の入力が要求されない場合があります。

| 認証方法                  | 2要素認証 |
| --------------------- | ----- |
| メールアドレスログイン           | 要求する  |
| QRコードログイン             | 要求する  |
| 自動ログイン                | 要求しない |
| シングルサインオン（SSO）によるログイン | 要求しない |

## 関連ページ

- [LINEログイン開発ガイドライン](/docs/line-login/development-guidelines/)
- [セキュリティチェックリスト](/docs/line-login/security-checklist/)
- [LINEログイン v2.1 APIリファレンス](/reference/line-login/)
