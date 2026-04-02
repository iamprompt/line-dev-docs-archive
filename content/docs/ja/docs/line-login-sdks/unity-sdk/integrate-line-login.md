---
title: UnityゲームにLINEログインを組み込む
navigation: true
description: LINEログインを使って、サービスのユーザーからデータ取得の許可を得られます。
meta: '{"tags":null,"author":null,"last_updated":null,"source_language":"ja"}'
path: /ja/docs/line-login-sdks/unity-sdk/integrate-line-login
__hash__: f0QUWeBM8KD0G0vAyfAtuY0br5aPty5BwZ2PWkOfgzg
seo:
  title: UnityゲームにLINEログインを組み込む
  description: LINEログインを使って、サービスのユーザーからデータ取得の許可を得られます。
---

# :page-title

:markdown-controls[プロジェクトをセットアップ](/docs/line-login-sdks/unity-sdk/project-setup/)すると、既存のUnityゲームにLINE SDK for Unityをインポートでき、LINEログインを活用して、アプリのユーザーエクスペリエンスを向上できます。

## SDKを取得する

### GitHubからダウンロードする

最新のLINE SDK for Unityを取得するには、[GitHubのReleasesページ](https://github.com/line/line-sdk-unity/releases){rel="[\"nofollow\"]"}から`.unitypackage`ファイルをダウンロードします。

### プロジェクトにインポートする

::admonition{title="注意" type="note"}
LINE SDK for Unityをプロジェクトにインポートする前に、プロジェクトのバックアップを作成するか、バージョン管理システムに保存してください。
::

Unityプロジェクトを開いたまま、ダウンロードした`.unitypackage`ファイルをダブルクリックします。以下のように、パッケージ内のすべてのファイルをインポートします。

![Import Unity package](/media/unity-sdk/importing.png)

## LineSDKプレハブをシーンに追加する

パッケージをインポートすると、［**Project**］パネルで、`Assets/LineSDK/`に［**LineSDK**］プレハブが表示されます。LINEログインを追加するシーンの［**Hierarchy**］パネルに、プレハブをドラッグしてください。

![Add LineSDK prefab](/media/unity-sdk/adding-prefab.png)

次に、シーンのLineSDK GameObjectをクリックし、［**Channel ID**］にLINEログインのチャネルのチャネルIDを入力します。

![Set Channel ID](/media/unity-sdk/setting-channel-id.png)

LINEログインのチャネルのIDを、[LINE Developersコンソール](/console/)で確認します。チャネルを作成していない場合は、LINE Developersコンソールで[作成します](/console/register/line-login/channel/)。チャネルを作るときは、:glossary-tooltip[[プロバイダー](/glossary/#provider)]{glossary-id="provider"}を選択または作成してください。

## プレイヤー設定を更新する

LINEログインを組み込む前、またはLINE APIをゲームで使用する前に、以下の手順に従ってプロジェクトのプレイヤー設定が正しいことを確認してください。

### Androidエクスポートの設定

1. ［**File**］ > ［**Build Settings**］を選択します。
2. ［**Player Settings**］をクリックします。
3. ［**Company Name**］および［**Product Name**］に、LINE DevelopersコンソールのLINEログインのチャネルの［**LINEログイン設定**］タブにあるAndroidの［**パッケージ名**］と同じ値を入力します。
4. ［![Android settingsタブ](/media/unity-sdk/android-settings-tab.png)］ > ［**Other Settings**］を選択します。
5. ［**Package Name**］に、LINE DevelopersコンソールのLINEログインのチャネルの［**LINEログイン設定**］タブにあるAndroidの［**パッケージ名**］と同じ値を入力します。
6. ［**Minimum API Level**］を、［**API level 19**］以上に設定します。
7. ［**Publishing Settings**］を選択して、［**Custom Gradle Template**］を有効にします。

### iOSエクスポートの設定

1. ［**File**］ > ［**Build Settings**］を選択します。
2. ［**Player Settings**］をクリックします。
3. ［![iPhone, iPod Touch and iPad settingsタブ](/media/unity-sdk/ios-settings-tab.png)］ >  ［**Other Settings**］を選択します。
4. ［**Bundle Identifier**］に、LINE DevelopersコンソールのLINEログインのチャネルの［**LINEログイン設定**］タブにある［**iOS bundle ID**］と同じ値を入力します。
5. ［**Target minimum iOS Version**］を、`11.0`以上に設定します。

## LINEを使用するログイン方法を実装する

LineSDK (GameObject)が存在するシーンに、LINEを使用するログイン方法を実装できます。例：

```csharp
using Line.LineSDK;

public class MyController : MonoBehaviour {
    public void LoginButtonClicked() {
        var scopes = new string[] {"profile", "openid"};
        LineSDK.Instance.Login(scopes, result => {
            result.Match(
                value => {
                    Debug.Log("Login OK. User display name: " + value.UserProfile.DisplayName);
                },
                error => {
                    Debug.Log("Login failed, reason: " + error.Message);
                }
            );
        });
    }
}
```

現在、LINE SDK for Unityでは、iOSおよびAndroidのみがサポートされています。Unityエディターのプレイモードで実行すると、常にエラーが返されます。テストするには、シーンをiOSまたはAndroidデバイスにエクスポートしてください。
