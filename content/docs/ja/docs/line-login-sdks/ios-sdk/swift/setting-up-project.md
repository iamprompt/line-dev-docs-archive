---
title: プロジェクトを設定する
navigation: true
description: LINE SDK for iOS Swiftをプロジェクトに組み込む方法
meta: '{"tags":null,"author":null,"last_updated":null,"source_language":null}'
path: /ja/docs/line-login-sdks/ios-sdk/swift/setting-up-project
__hash__: rK0SeYj2-cSwDX_8GR3kS_CtXnxWPu-hNNTazFZZ8Yw
seo:
  title: プロジェクトを設定する
  description: LINE SDK for iOS Swiftをプロジェクトに組み込む方法
---

# :page-title

:markdown-controlsここでは、LINE SDK for iOS SwiftをiOSプロジェクトに組み込み、必要な設定をする方法について説明します。

アプリを最新バージョンのiOSに対応させて最新技術を活用するため、このトピックの手順に従って最新のLINE SDK for iOS Swiftをインストールすることを強くお勧めします。

## 前提条件

LINE SDK for iOS Swiftをビルドして使用するには、以下が必要です。

- ::glossary-tooltip{glossary-id="provider"}
[プロバイダー](/glossary/#provider)
::

およびLINEログインのチャネルを作成する。どちらもLINE Developersコンソールで[作成できます](/console/register/line-login/channel/)。
- デプロイメントターゲットとしてiOS 13.0以降
- Xcode 14.1以降

::admonition{title="デプロイメントターゲットとしてiOS 13.0未満をサポートする" type="tip"}
デプロイメントターゲットとしてiOS 13.0未満をサポートしたい場合は、以前のバージョンのLINE SDK for iOS Swiftを利用してください。詳しくは、「[Releases](https://github.com/line/line-sdk-ios-swift/releases){rel="[\"nofollow\"]"}」を参照してください。
::

LINE SDK for iOS Swiftは、SwiftとObjective-Cのどちらのコードでも利用できます。このガイドでは、Swiftのコードを使ってLINE SDK for iOS Swiftを実装することを前提とします。Objective-Cのコードを使ってLINE SDK for iOS Swiftを組み込む場合は、「[Objective-CのコードでSDKを使用する](/docs/line-login-sdks/ios-sdk/swift/using-objc/)」を参照してください。

## インストール

LINE SDK for iOS Swiftは、以前のバージョンのLINE SDK for iOS Objective-Cと互換性がありません。LINE SDKのバージョンをアップグレードする場合は、アップグレードに進む前に「[SDKをアップグレードする](/docs/line-login-sdks/ios-sdk/swift/migration-guide/)」を参照してください。

### CocoaPods

CocoaPodsについて詳しくない場合は、『[CocoaPods Getting Started Guide](https://guides.cocoapods.org/using/getting-started.html){rel="[\"nofollow\"]"}』を参照してください。CocoaPodsを使ってLINE SDK for iOS Swiftをアプリに組み込む前に、作業環境にCocoaPodsのgemをインストールする必要があります。

1. Podfileを準備したら、ターゲットに以下のpodコマンドを追加します。```ruby
platform :ios, '13.0'
use_frameworks!

target '<Your App Target Name>' do
    pod 'LineSDKSwift', '~> 5.0'
end
```
2. 以下のコマンドを実行します。```bash
$ pod install
```

LINE SDK for iOS Swiftがダウンロードされ、Xcodeのワークスペースに組み込まれます。

### Carthage

[Carthage](https://github.com/Carthage/Carthage){rel="[\"nofollow\"]"}は分散型の依存性マネージャーで、ライブラリをビルドしてバイナリのフレームワークとして利用できます。

1. Carthageツールをインストールするには、[Homebrew](https://brew.sh/){rel="[\"nofollow\"]"}を使います。```bash
$ brew update
$ brew install carthage
```
2. Carthageを使ってLINE SDK for iOS SwiftをXcodeプロジェクトに組み込むには、CartfileにSDKのGitHubリポジトリを以下のように指定します。```text
github "line/line-sdk-ios-swift" ~> 5.0
```
3. 以下のコマンドを実行してLINE SDK for iOS Swiftをビルドします。```text
$ carthage update line-sdk-ios-swift
```

以下のセクションに記載された手順に従って、ビルドされた`LineSDK.framework`ファイルをXcodeプロジェクトに追加できます。

#### `LineSDK.framework`ファイルをXcodeプロジェクトにリンクする

`Carthage/Build/iOS`フォルダーから`LineSDK.framework`ファイルをドラッグして、アプリのターゲットの［General］設定タブの［Linked Frameworks and Libraries］セクションにドロップします。

![LINE SDK Framework ファイルが、Finder からアプリターゲットのLinked Frameworks and Libraries セクションに移動されています。](/media/ios-sdk-swift/install-link.png){className="[\"border\",\"w-fix-600\"]"}

#### ビルドフェーズで`LineSDK.framework`ファイルをコピーする

1. アプリのターゲットの［Build Phases］設定タブで ［**+**］アイコンをクリックして、［**New Run Script Phase**］を選択します。以下の内容で実行スクリプトを作成します。```text
/usr/local/bin/carthage copy-frameworks
```
2. `LineSDK.framework`ファイルのパスを［Input Files］セクションに追加します。```text
$(SRCROOT)/Carthage/Build/iOS/LineSDK.framework
```
3. `LineSDK.framework`ファイルのパスを［Output Files］セクションに追加します。```text
$(BUILT_PRODUCTS_DIR)/$(FRAMEWORKS_FOLDER_PATH)/LineSDK.framework
```

実行スクリプトは以下のようになるはずです。

![実行スクリプトセクションが展開されて、Shell、Input Files、Input File Lists、および Output Files が表示されます。](/media/ios-sdk-swift/install-carthage-copy.png){className="[\"border\",\"w-fix-600\"]"}

## アプリをチャネルにリンクする

アプリをLINEログインのチャネルにリンクするために、いくつかの設定を行います。[LINE Developersコンソール](/console/)でLINEログインのチャネル設定に進んで、［LINEログイン設定］タブで以下の項目を設定してください。

- **iOS bundle ID**：アプリのバンドル識別子。Xcodeのプロジェクト設定の［General］設定タブにあります。小文字を使用する必要があります。たとえば、`com.example.app`です。複数のバンドル識別子を指定するには、改行で区切ります。
- **iOSユニバーサルリンク**：アプリに設定したユニバーサルリンクを設定します。ユニバーサルリンクを使ったログイン処理の制御について詳しくは、「[ユニバーサルリンクを利用する](/docs/line-login-sdks/ios-sdk/swift/universal-links-support/)」を参照してください。

![LINE LoginのiOSバンドルIDとユニバーサルリンク設定](/media/line-login/integrate-login-ios/ios-app-settings.png){className="[\"border\",\"w-fix-640\"]"}

## `Info.plist`ファイルを設定する

Xcodeでアプリの`Info.plist`ファイルを右クリックして、［**Open As**］、［**Source Code**］の順に選択します。以下のスニペットを最後の`</dict>`タグの直前に挿入します。

```xml
<key>CFBundleURLTypes</key>
<array>
    <dict>
        <key>CFBundleTypeRole</key>
        <string>Editor</string>
        <key>CFBundleURLSchemes</key>
        <array>
            <!-- LINEからアプリに戻る際に利用するURLスキーマを追加 -->
            <string>line3rdp.$(PRODUCT_BUNDLE_IDENTIFIER)</string>
        </array>
    </dict>
</array>
<key>LSApplicationQueriesSchemes</key>
<array>
    <!-- アプリからLINEを起動する際に利用するURLスキーマを追加 -->
    <string>lineauth2</string>
</array>
```

このスニペットにより以下の設定が追加されます。

| キー                          | 説明                                                                                                                                                                                                                                           |
| --------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| CFBundleURLSchemes          | 開発中のアプリを起動するためのURLスキームとして、`line3rdp.$(PRODUCT_BUNDLE_IDENTIFIER)`を追加します。このURLスキームが、iOSに登録されます。LINEプラットフォームからLINEログインの結果が返されたときに、LINEからアプリに戻るために利用されます。   注：`lineauth2`は、LINEを起動するためにLINEですでに登録されているURLスキームです。CFBundleURLSchemesには追加しないでください。 |
| LSApplicationQueriesSchemes | アプリからLINEを起動することを許可するために、`lineauth2`を追加します。LINEログインを行う際に、アプリがLINEを起動します。                                                                                                                                                                     |
