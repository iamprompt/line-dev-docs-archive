---
title: サンプルアプリを試してみる
navigation: true
description: null
meta: '{"tags":null,"author":null,"last_updated":null,"source_language":null}'
path: /ja/docs/line-login-sdks/android-sdk/try-line-login
__hash__: ssQtKZuu0ee7U_0pZsK1yueIRta3ihUFWn_3t3Jx6Tc
seo:
  title: サンプルアプリを試してみる
  description: null
---

# :page-title

:markdown-controlsAndroid向けのLINEログインサンプルアプリを実行すると、Androidアプリで[LINEログイン](/docs/line-login/overview/)がどのように動作するかをすぐに理解できます。

## 前提条件

サンプルアプリをビルドして実行するには、以下が必要です。

- [Android Studio](https://developer.android.com/studio){rel="[\"nofollow\"]"}をインストールする。

## サンプルアプリを試してみる

LINEヤフー株式会社が提供するサンプルチャネルを使ってサンプルアプリを試すには、以下の手順に従います。

1. [LINE SDK for Androidのオープンソースリポジトリ](https://github.com/line/line-sdk-android){rel="[\"nofollow\"]"}をクローンします。```sh
$ git clone https://github.com/line/line-sdk-android.git
```
2. Android StudioでLINE SDKプロジェクトを開きます。
3. プロジェクトをビルドし、AndroidデバイスまたはAndroid Emulatorを使用してアプリを実行します。

::admonition{title="ヒント" type="tip"}
サンプルアプリには、既に`1620019587`というサンプルチャネルIDが設定されています。自身のチャネルIDを設定する必要はありません。
::

## サンプルアプリを実行してみる

お手元のAndroid端末、またはAndroidエミュレーターを使ってサンプルアプリを実行します。初回ログイン時のみ、アプリのプロフィール情報取得に同意する必要があります。

![サンプルアプリのメイン画面](/media/line-login/try-line-login/line-sdk-sample-app-home-screen.jpg){className="[\"border\",\"w-fix-200\"]"}

### ［Log in with LINE］ボタンを使う

緑色の［**Log in with LINE**］ボタンをタップし、アプリ連携ログインを使ってログインします。これはLINE SDKに組み込まれているログインボタンです。

デバイスにLINEがインストールされていて、ログイン済みである場合は、LINE認証情報を入力せずに自動的にサンプルアプリにログインできます。そうでない場合は、デバイスのブラウザでログイン画面が開きます。この場合は、LINE認証情報を入力する必要があります。

### ［login］ボタンを使う

ログインしていない場合は、［**login**］ボタンが表示されます。［**login**］ボタンをタップすると、アプリ連携ログインの処理が開始されます。このログインメソッドとプロセスは、SDKに組み込まれたログインボタンと同じですが、`Scopes`などのオプションで調整できます。詳しくは、LINE SDK が提供する`LineLoginApi`クラスの`getLoginIntent`メソッドを参照してください。

::admonition{title="注意" type="note"}
デフォルトのスコープは`PROFILE`と`OPENID_CONNECT`です。
::

### ［web login］ボタンを使う

ログインしていない場合は、［**web login**］ボタンが表示されます。［**web login**］ボタンをタップすると、ブラウザでLINEのログイン画面が表示されます。

### ［logout］ボタンを使う

ログインしている場合は、［**logout**］ボタンが表示されます。［**logout**］ボタンをタップして、現在のユーザーをログアウトできます。

詳しくは、「[ユーザーをログアウトする](/docs/line-login-sdks/android-sdk/managing-users/#logout)」を参照してください。

### LINE SDKの機能を試す

![LINE SDKサンプルアプリリスト画面](/media/line-login/try-line-login/line-sdk-sample-app-api-list-screen.jpg){className="[\"border\",\"w-fix-200\"]"}

アプリにログインした後で［**API List Page**］ボタンをタップして、LINE SDKの以下の機能を試すことができます。

- [ユーザープロフィールを取得する](/docs/line-login-sdks/android-sdk/managing-users/#get-profile)
- [現在のアクセストークンを取得する](/docs/line-login-sdks/android-sdk/managing-access-tokens/#get-current-token)
- [アクセストークンを更新する](/docs/line-login-sdks/android-sdk/managing-access-tokens/#refresh-token)
- [アクセストークンを検証する](/docs/line-login-sdks/android-sdk/managing-access-tokens/#verify-access-token)
- [LINEログインAPIを使って友だち関係を取得する](/docs/line-login-sdks/android-sdk/link-a-bot/#use-line-login-api)

それぞれの機能のボタンをタップすると、ページの上部でレスポンスを確認できます。
