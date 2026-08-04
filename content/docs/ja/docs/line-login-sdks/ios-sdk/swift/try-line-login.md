---
title: スターターアプリを試してみる
navigation: true
description: null
meta: '{"tags":null,"author":null,"last_updated":null,"source_language":null}'
path: /ja/docs/line-login-sdks/ios-sdk/swift/try-line-login
__hash__: ytjWOgAr8fQmqpf59boiNK5qKRhP3-ovy0QNv70rpXk
seo:
  title: スターターアプリを試してみる
  description: null
---

# :page-title

:markdown-controlsiOS向けのLINEログインスターターアプリを実行すると、iOSアプリで[LINEログイン](/docs/line-login/overview/)がどのように動作するかをすぐに理解できます。

## 前提条件

スターターアプリをビルドして実行するには、以下が必要です。

- Xcode 14.1以降

## 定義済みのサンプルチャネルを使ってスターターアプリを試してみる

LINEヤフー株式会社が提供するサンプルチャネルを使ってスターターアプリを試すには、以下の手順に従います。

1. [LINE SDK for iOS Swiftのオープンソースリポジトリ](https://github.com/line/line-sdk-ios-swift){rel="[\"nofollow\"]"}をクローンします。```sh
$ git clone https://github.com/line/line-sdk-ios-swift.git
```
2. `LineSDK.xcworkspace`ファイルを開きます。
3. `LineSDKSample`プロジェクトをビルドします。スターターアプリがSimulatorで起動します。

### 自分のチャネルを使ってスターターアプリを試してみる

スターターアプリを、自分のチャネルにリンクすることもできます。チャネルを作成していない場合は、LINE Developersコンソールで[作成します](/console/register/line-login/channel/)。チャネルを作るときは、:glossary-tooltip[[プロバイダー](/glossary/#provider)]{glossary-id="provider"}を選択または作成してください。

作成したチャネルに、スターターアプリをリンクするには、以下の設定を行います。

- LINE Developersコンソールで、「[アプリをチャネルにリンクする](/docs/line-login-sdks/ios-sdk/swift/setting-up-project/#linking-app-to-channel)」に従って設定を行う。
- アプリのバンドルIDを、自分のチャネルに設定したバンドルIDに変更する。
- `Config.xcconfig`ファイルの`LINE_CHANNEL_ID`の値を、自分のチャネルのIDに変更する。

## スターターアプリを実行する

iOSデバイスまたはSimulatorを使用してアプリを実行します。初回ログイン時に、アプリがプロフィール情報にアクセスすることを許可する必要があります。

［**Log in with LINE**］ボタンをタップし、アプリ連携ログインを使ってログインします。

デバイスにLINEがインストールされていて、ログイン済みである場合は、LINE認証情報を入力せずに自動的にスターターアプリにログインできます。そうでない場合は、デバイスのブラウザにログイン画面が開きます。ここでは、LINE認証情報を入力する必要があります。

### LINE SDKの機能を試す

アプリにログインした後でメニュー項目をタップして、LINE SDKの以下の機能を試すことができます。

一般ユーザーは以下の機能を実行できます。

- ユーザーをログアウトする
- ユーザープロフィールを取得する
- アクセストークンを検証する
- チャネルにリンクされたLINE公式アカウントとユーザーの間の友だち関係を取得する

画面上のその他の機能は、限られたユーザーのみが実行できます。
