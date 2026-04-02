---
title: スターターアプリを試してみる
navigation: true
description: null
meta: '{"tags":null,"author":null,"last_updated":null,"source_language":"ja"}'
path: /ja/docs/line-login-sdks/unity-sdk/try-line-login
__hash__: 8R3G6MHPhZqEMHntWMwY_r0Kiqe2K4wWIaNbSzbeNEw
seo:
  title: スターターアプリを試してみる
  description: null
---

# :page-title

:markdown-controlsUnity向けのLINEログインスターターアプリでは、Unityゲームで[LINEログイン](/docs/line-login/overview/)がどのように動作するかをすぐに理解できます。

## 前提条件

スターターアプリをビルドして実行する前に、「[プロジェクトを設定する](/docs/line-login-sdks/unity-sdk/project-setup/)」の説明に従って、Unity、iOS、およびAndroid向けに適切な環境を設定してください。

## 定義済みのサンプルチャネルを使ってスターターアプリを試してみる

LINEヤフー株式会社が提供するサンプルチャネルを使ってスターターアプリを試すには、以下の手順に従います。

1. [LINE SDK for Unityのオープンソースリポジトリ](https://github.com/line/line-sdk-unity){rel="[\"nofollow\"]"}をクローンします。```sh
$ git clone https://github.com/line/line-sdk-unity.git
```
2. Unityで`LINE_SDK_Unity`フォルダーのプロジェクトを開きます。
3. `Assets/LineSDK/Demo/Scenes/Main`にあるシーンをビルドし、iOSまたはAndroidにエクスポートします。
4. エクスポートしたプロジェクト/バイナリファイルをデバイスにインストールします。

::admonition{title="注意" type="note"}
サンプルアプリをiOSデバイスにインストールするために、証明書を変更する必要がある可能性があります。証明書がない場合は、［**Player Settings］ > ［Settings for iOS］ > ［Other Settings**］を選択して、［**Target SDK**］を［**Simulator SDK**］に設定し、サンプリアプリをiOS simulatorで実行します。
::

### 自分のチャネルを使ってスターターアプリを試してみる

スターターアプリを、自分のチャネルにリンクすることもできます。チャネルを作成していない場合は、LINE Developersコンソールで[作成します](/console/register/line-login/channel/)。チャネルを作るときは、:glossary-tooltip[[プロバイダー](/glossary/#provider)]{glossary-id="provider"}を選択または作成してください。

作成したチャネルに、スターターアプリをリンクするには、Unityプロジェクトで以下の設定を行います。

1. ［**File**］ > ［**Build Settings**］を選択します。
2. ［**Player Settings**］をクリックします。
3. ［![iPhone, iPod Touch and iPad settingsタブ](/media/unity-sdk/ios-settings-tab.png)］ > ［**Other Settings**］を選択して、［**Bundle Identifier**］に、LINE DevelopersコンソールのLINEログインのチャネルの［**LINEログイン設定**］タブにある［**iOS bundle ID**］と同じ値を入力します。  
![Bundle Identifier](/media/unity-sdk/bundle-identifier-settings.png)
4. 次の2か所に、LINE DevelopersコンソールのLINEログインのチャネルの［**LINEログイン設定**］タブにあるAndroidの［**パッケージ名**］と同じ値を入力します。
  - ［**Product Name**］
  - ［![Android settingsタブ](/media/unity-sdk/android-settings-tab.png)］ > ［**Other Settings**］ > ［**Package Name**］  
![Package Name](/media/unity-sdk/package-name-settings.png)
5. メインシーンで**LineSDK**オブジェクトを選択します。
6. ［**Line SDK（Script）**］の［**Channel ID**］に、LINEログインのチャネルIDを設定します。  
![Channel ID](/media/unity-sdk/channel-id-settings.png)

## スターターアプリを実行する

iOS/AndroidデバイスまたはSimulatorを使用してアプリを実行します。初回ログイン時に、アプリがプロフィール情報にアクセスすることを許可する必要があります。

［**Log in with LINE**］をタップし、アプリ連携ログインを使ってログインします。

デバイスにLINEがインストールされていて、ログイン済みである場合は、LINE認証情報を入力せずに自動的にスターターアプリにログインできます。そうでない場合は、ブラウザを使ってログインするように求められます。2番目のシナリオの場合は、LINE認証情報を入力する必要があります。

### LINE SDKの機能を試す

アプリにログインした後でメニュー項目をタップして、LINE SDKの以下の機能を試すことができます。

一般ユーザーが使用できる機能は以下のとおりです。

- ユーザーをログアウトする
- ユーザープロフィールを取得する
- アクセストークンを検証する
- チャネルにリンクされたLINE公式アカウントとユーザーの間の友だち関係を取得する

表示されるその他の機能は、限られたユーザーのみが実行できます。
