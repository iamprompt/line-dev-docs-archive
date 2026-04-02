---
title: Get Context
navigation: true
description: ''
meta: '{}'
path: /ja/_partials/liff-v2/get-context
__hash__: tnln5bHKAyPYkIVNvJuvPSOBAk06zvUDkcB2xCwDRFw
seo:
  description: ''
---

### liff.getContext()

::reference-with-code
  :::reference-content
  LIFFアプリが起動された画面（1対1のトーク、グループトーク、複数人トーク、または外部ブラウザ）に関する情報を取得します。

    ::::admonition{title="トークルームの内部識別子の提供は廃止されました" type="warning"}
    LIFFアプリに対するトークルームの内部識別子（1対1トークID、グループID、トークルームID）の提供は廃止されました。詳しくは、2023年2月6日のニュース、「[2023年2月6日をもってLIFFアプリに対するトークルームの内部識別子の提供を廃止しました](/news/2023/02/06/liff-spec-change/)」を参照してください。
    ::::
  :::

  :::reference-code
  *例*

    ::::code-tabs
      :::::tab{lang="javascript"}
      ```javascript
      const context = liff.getContext();
      console.log(context);
      ```
      :::::
    ::::
  :::
::

#### 構文

```javascript
liff.getContext();
```

#### 引数

なし

#### 戻り値

::reference-with-code
  :::reference-content
  各種APIを呼び出すために必要な情報を含むデータオブジェクトが返されます。

    ::::parameter-table
      :::::parameter-table-entry
      #undefined
      type

      #undefined
      String

      LIFFアプリが起動された画面の種類。以下のいずれかの値が含まれます。

      - `utou`：1対1のトーク。
      - `group`：グループトーク。
      - `room`：複数人トーク。
      - `external`：外部ブラウザ。
      - `none`：LINEの1対1のトーク、グループ、複数人トーク、外部ブラウザ以外から起動した場合。例：ウォレットタブ

      LIFF間遷移後のLIFFアプリでも、このプロパティが返ります。
      :::::

      :::::parameter-table-entry
      #undefined
      userId

      #undefined
      String

      ユーザーID。`type`プロパティが、`utou`、`room`、`group`、`none`または`external`の場合に含まれます。ただし、`type`プロパティが`external`の場合は、nullが返されることがあります。
      :::::

      :::::parameter-table-entry
      #undefined
      liffId

      #undefined
      String

      LIFF ID。
      :::::

      :::::parameter-table-entry
      #undefined
      viewType

      #undefined
      String

      LIFFアプリの画面サイズ。`type`プロパティが`external`以外の場合に、以下のいずれかの値が含まれます。

      - `compact`
      - `tall`
      - `full`

      詳しくは、「[LIFFアプリをチャネルに追加する](/docs/liff/registering-liff-apps/)」を参照してください。
      :::::

      :::::parameter-table-entry
      #undefined
      endpointUrl

      #undefined
      String

      LIFFアプリのエンドポイントURL。
      :::::

      :::::parameter-table-entry
      #undefined
      accessTokenHash

      #undefined
      String

      SHA256でハッシュ化したアクセストークンの前半部分。アクセストークンの検証に使用されます。
      :::::

      :::::parameter-table-entry
      #undefined
      availability

      #undefined
      Object

      LIFFアプリを起動した環境で、LIFFの機能が使用可能かどうかを[`availability`オブジェクト](#get-context-return-value-availability)として返します。
      :::::

      :::::parameter-table-entry
      #undefined
      scope

      #undefined
      Array of strings

      LIFF SDKの一部のメソッドを利用するために必要なスコープの中で、どのスコープを持っているかを返します。

      - `openid`：[`liff.getIDToken()`](#get-id-token)および[`liff.getDecodedIDToken()`](#get-decoded-id-token)を使用するためのスコープ
      - `email`：[`liff.getIDToken()`](#get-id-token)および[`liff.getDecodedIDToken()`](#get-decoded-id-token)で、メールアドレスを取得するためのスコープ
      - `profile`：[`liff.getProfile()`](#get-profile)および[`liff.getFriendship()`](#get-friendship)を使用するためのスコープ
      - `chat_message.write`：[`liff.sendMessages()`](#send-messages)を使用するためのスコープ

      スコープについて詳しくは、『LIFFドキュメント』の「[LIFFアプリをチャネルに追加する](/docs/liff/registering-liff-apps/#registering-liff-app)」を参照してください。

        ::::::admonition
        ---
        title: liff.getContext()メソッドとliff.permission.getGrantedAll()メソッドの違い
        type: tip
        ---
        `liff.getContext()`メソッドでは、LIFFアプリのスコープ（※）の一覧を取得します。

        一方、[`liff.permission.getGrantedAll()`](#permission-get-granted-all)メソッドでは、LIFFアプリのスコープのうち、ユーザーが権限の付与に同意したスコープの一覧を取得します。

        ※ LINEログインチャネルの［**LIFF**］タブにある「Scope」セクションで指定したスコープ
        ::::::
      :::::

      :::::parameter-table-entry
      #undefined
      menuColorSetting

      #undefined
      Object

      LIFFブラウザのヘッダー部分のカラー設定を[`menuColorSetting`オブジェクト](#get-context-return-value-menucolorsetting)として返します。

      なお、ヘッダー部分のカラー設定の変更は、現在提供していません。
      :::::

      :::::parameter-table-entry{annotation="含まれないことがあります"}
      #undefined
      miniAppId

      #undefined
      String

      LINEミニアプリのCustom Path機能で設定されている文字列が返されます。Custom Path機能について詳しくは、『LINEミニアプリドキュメント』の「[Custom Pathを設定する](/docs/line-mini-app/develop/custom-path/)」を参照してください。
      :::::

      :::::parameter-table-entry
      #undefined
      miniDomainAllowed

      #undefined
      Boolean

      LINEミニアプリを`miniapp.line.me`ドメインで利用できるかどうかを返します。
      :::::

      :::::parameter-table-entry
      #undefined
      permanentLinkPattern

      #undefined
      String

      LIFF URLの追加情報の処理方法。`concat`が返されます。

      詳しくは、『LIFFドキュメント』の「[LIFFアプリを開く](/docs/liff/opening-liff-app/)」を参照してください。
      :::::

      :::::parameter-table-entry{annotation="廃止"}
      #undefined
      utouId

      #undefined
      String

      このプロパティは廃止されました。詳しくは、2023年2月6日のニュース、「[2023年2月6日をもってLIFFアプリに対するトークルームの内部識別子の提供を廃止しました](/news/2023/02/06/liff-spec-change/)」を参照してください。
      :::::

      :::::parameter-table-entry{annotation="廃止"}
      #undefined
      groupId

      #undefined
      String

      このプロパティは廃止されました。詳しくは、2023年2月6日のニュース、「[2023年2月6日をもってLIFFアプリに対するトークルームの内部識別子の提供を廃止しました](/news/2023/02/06/liff-spec-change/)」を参照してください。
      :::::

      :::::parameter-table-entry{annotation="廃止"}
      #undefined
      roomId

      #undefined
      String

      このプロパティは廃止されました。詳しくは、2023年2月6日のニュース、「[2023年2月6日をもってLIFFアプリに対するトークルームの内部識別子の提供を廃止しました](/news/2023/02/06/liff-spec-change/)」を参照してください。
      :::::
    ::::
  :::

  :::reference-code
  *例（LIFFブラウザの場合）*

    ::::code-tabs
      :::::tab{lang="json"}
      ```json
      {
        "type": "utou",
        "utouId": "e2bff570-...",
        "userId": "U850014438e...",
        "liffId": "123456-abcedfg",
        "viewType": "full",
        "endpointUrl": "https://example.com/",
        "accessTokenHash": "EVWYWo1yYA...",
        "availability": {
          "shareTargetPicker": {
            "permission": true,
            "minVer": "10.3.0"
          },
          "multipleLiffTransition": {
            "permission": true,
            "minVer": "10.18.0"
          },
          "subwindowOpen": {
            "permission": true,
            "minVer": "11.7.0"
          },
          "scanCode": {
            "permission": false,
            "minVer": "9.4.0",
            "unsupportedFromVer": "9.19.0"
          },
          "scanCodeV2": {
            "permission": true,
            "minVer": "11.7.0",
            "minOsVer": "14.3.0"
          },
          "getAdvertisingId": {
            "permission": false,
            "minVer": "7.14.0"
          },
          "addToHomeScreen": {
            "permission": false,
            "minVer": "9.16.0"
          },
          "bluetoothLeFunction": {
            "permission": false,
            "minVer": "9.14.0",
            "unsupportedFromVer": "9.19.0"
          },
          "skipChannelVerificationScreen": {
            "permission": false,
            "minVer": "11.14.0"
          },
          "addToHomeV2": {
            "permission": false,
            "minVer": "13.20.0"
          },
          "addToHomeHideDomain": {
            "permission": false,
            "minVer": "13.20.0"
          },
          "addToHomeLineScheme": {
            "permission": false,
            "minVer": "13.20.0"
          }
        },
        "scope": [
          "chat_message.write",
          "openid",
          "profile"
        ],
        "menuColorSetting": {
          "adaptableColorSchemes": [
            "light"
          ],
          "lightModeColor": {
            "iconColor": "#111111",
            "statusBarColor": "black",
            "titleTextColor": "#111111",
            "titleSubtextColor": "#B7B7B7",
            "titleButtonColor": "#111111",
            "titleBackgroundColor": "#FFFFFF",
            "progressBarColor": "#06C755",
            "progressBackgroundColor": "#FFFFFF"
          },
          "darkModeColor": {
            "iconColor": "#FFFFFF",
            "statusBarColor": "white",
            "titleTextColor": "#FFFFFF",
            "titleSubtextColor": "#949494",
            "titleButtonColor": "#FFFFFF",
            "titleBackgroundColor": "#111111",
            "progressBarColor": "#06C755",
            "progressBackgroundColor": "#111111"
          }
        },
        "miniDomainAllowed": false,
        "permanentLinkPattern": "concat"
      }
      ```
      :::::
    ::::

  *例（外部ブラウザの場合）*

    ::::code-tabs
      :::::tab{lang="json"}
      ```json
      {
        "type": "external",
        "liffId": "123456-abcedfg",
        "endpointUrl": "https://example.com/",
        "accessTokenHash": "EVWYWo1yYA...",
        "availability": {
          "shareTargetPicker": {
            "permission": true,
            "minVer": "10.3.0"
          },
          "multipleLiffTransition": {
            "permission": true,
            "minVer": "10.18.0"
          },
          "subwindowOpen": {
            "permission": true,
            "minVer": "11.7.0"
          },
          "scanCode": {
            "permission": true,
            "minVer": "9.4.0",
            "unsupportedFromVer": "9.19.0"
          },
          "scanCodeV2": {
            "permission": true,
            "minVer": "11.7.0",
            "minOsVer": "14.3.0"
          },
          "getAdvertisingId": {
            "permission": false,
            "minVer": "7.14.0"
          },
          "addToHomeScreen": {
            "permission": false,
            "minVer": "9.16.0"
          },
          "bluetoothLeFunction": {
            "permission": false,
            "minVer": "9.14.0",
            "unsupportedFromVer": "9.19.0"
          },
          "skipChannelVerificationScreen": {
            "permission": false,
            "minVer": "11.14.0"
          },
          "addToHomeV2": {
            "permission": false,
            "minVer": "13.20.0"
          },
          "addToHomeHideDomain": {
            "permission": false,
            "minVer": "13.20.0"
          },
          "addToHomeLineScheme": {
            "permission": false,
            "minVer": "13.20.0"
          }
        },
        "scope": [
          "chat_message.write",
          "openid",
          "profile"
        ],
        "menuColorSetting": {
          "adaptableColorSchemes": [
            "light"
          ],
          "lightModeColor": {
            "iconColor": "#111111",
            "statusBarColor": "black",
            "titleTextColor": "#111111",
            "titleSubtextColor": "#B7B7B7",
            "titleButtonColor": "#111111",
            "titleBackgroundColor": "#FFFFFF",
            "progressBarColor": "#06C755",
            "progressBackgroundColor": "#FFFFFF"
          },
          "darkModeColor": {
            "iconColor": "#FFFFFF",
            "statusBarColor": "white",
            "titleTextColor": "#FFFFFF",
            "titleSubtextColor": "#949494",
            "titleButtonColor": "#FFFFFF",
            "titleBackgroundColor": "#111111",
            "progressBarColor": "#06C755",
            "progressBackgroundColor": "#111111"
          }
        },
        "miniDomainAllowed": false,
        "permanentLinkPattern": "concat"
      }
      ```
      :::::
    ::::
  :::
::

#### `availability`オブジェクト

::reference-with-code
  :::reference-content
  `availability`オブジェクトには、以下のプロパティが含まれます。

    ::::parameter-table
      :::::parameter-table-entry
      #undefined
      shareTargetPicker

      #undefined
      Object

      LIFFアプリを起動した環境で、[`liff.shareTargetPicker()`](#share-target-picker)が使用可能かどうかを[オブジェクト](#get-context-return-value-availability-common)で表します。

      ※`liff.shareTargetPicker()`の使用可否は、このプロパティではなく、[liff.isApiAvailable('shareTargetPicker')](#is-api-available)で確認することをお勧めします。
      :::::

      :::::parameter-table-entry
      #undefined
      multipleLiffTransition

      #undefined
      Object

      LIFFアプリを起動した環境で、LIFFアプリを閉じずに[`liff.openWindow()`](#open-window)で[別のLIFFアプリへ遷移する](/docs/liff/opening-liff-app/#move-liff-to-liff)ことが可能かどうかを[オブジェクト](#get-context-return-value-availability-common)で表します。

      ※LIFF間遷移可否の情報は、このプロパティではなく、[liff.isApiAvailable('multipleLiffTransition')](/reference/liff/#is-api-available)で確認することをお勧めします。
      :::::

      :::::parameter-table-entry
      #undefined
      subwindowOpen

      #undefined
      Object

      LIFFアプリを起動した環境で、サブウィンドウが使用可能かどうかを[オブジェクト](#get-context-return-value-availability-common)で表します。
      :::::

      :::::parameter-table-entry
      #undefined
      scanCode

      #undefined
      Object

      LIFFアプリを起動した環境で、[`liff.scanCode()`](#scan-code)が使用可能かどうかを[オブジェクト](#get-context-return-value-availability-common)で表します。
      :::::

      :::::parameter-table-entry
      #undefined
      scanCodeV2

      #undefined
      Object

      LIFFアプリを起動した環境で、[`liff.scanCodeV2()`](#scan-code-v2)が使用可能かどうかを[オブジェクト](#get-context-return-value-availability-common)で表します。
      :::::

      :::::parameter-table-entry
      #undefined
      getAdvertisingId

      #undefined
      Object

      LIFFアプリを起動した環境で、`liff.getAid()`が使用可能かどうかを[オブジェクト](#get-context-return-value-availability-common)で表します。

      なお、`liff.getAid()`は現在提供していません。
      :::::

      :::::parameter-table-entry
      #undefined
      addToHomeScreen

      #undefined
      String

      LIFFアプリを起動した環境で、`liff.addToHomeScreen()`が使用可能かどうかを[オブジェクト](#get-context-return-value-availability-common)で表します。

      なお、`liff.addToHomeScreen()`は現在提供していません。
      :::::

      :::::parameter-table-entry
      #undefined
      bluetoothLeFunction

      #undefined
      Object

      LIFFアプリを起動した環境で、LINE ThingsのためのBluetooth® Low Energyが使用可能かどうかを[オブジェクト](#get-context-return-value-availability-common)で表します。

      なお、この機能は現在提供していません。
      :::::

      :::::parameter-table-entry
      #undefined
      skipChannelVerificationScreen

      #undefined
      Object

      LIFFアプリを起動した環境で、「チャネル同意の簡略化」機能を利用できるかどうかを[オブジェクト](#get-context-return-value-availability-common)で表します。詳しくは、『LINEミニアプリドキュメント』の「[同意画面のプロセスをスキップする](/docs/line-mini-app/develop/channel-consent-simplification/)」を参照してください。
      :::::

      :::::parameter-table-entry
      #undefined
      addToHomeV2

      #undefined
      Object

      LIFFアプリを起動した環境で、[`liff.createShortcutOnHomeScreen()`](#create-shortcut-on-home-screen)が使用可能かどうかを[オブジェクト](#get-context-return-value-availability-common)で表します。

      ※`liff.createShortcutOnHomeScreen()`の使用可否は、このプロパティではなく、[liff.isApiAvailable('createShortcutOnHomeScreen')](#is-api-available)で確認することをお勧めします。
      :::::

      :::::parameter-table-entry
      #undefined
      addToHomeHideDomain

      #undefined
      Object

      ショートカットを、ユーザー端末のホーム画面に追加する画面を表示する際に、エンドポイントURLを非表示にできるかどうかを[オブジェクト](#get-context-return-value-availability-common)で表します。

      なお、この機能は現在提供していません。
      :::::

      :::::parameter-table-entry
      #undefined
      addToHomeLineScheme

      #undefined
      Object

      [LINE URLスキーム](/docs/line-login/using-line-url-scheme/)を指定したショートカットが作成可能かどうかを[オブジェクト](#get-context-return-value-availability-common)で表します。

      なお、この機能は現在提供していません。
      :::::
    ::::
  :::

  :::reference-code
  *例*

    ::::code-tabs
      :::::tab{lang="json"}
      ```json
      {
        "shareTargetPicker": {
          "permission": true,
          "minVer": "10.3.0"
        }
      }
      ```
      :::::
    ::::
  :::
::

#### `availability`オブジェクトの共通プロパティ

::parameter-table
  :::parameter-table-entry
  #undefined
  permission

  #undefined
  Boolean

  LIFFアプリを起動した環境で、`availability`オブジェクトのプロパティ名で指定された機能が、使用可能かどうかを表します。

  - `true`：機能は使用可能。
  - `false`：機能は使用不可。
  :::

  :::parameter-table-entry{annotation="含まれないことがあります"}
  #undefined
  minVer

  #undefined
  String

  該当する機能がサポートされているLINEの最小バージョン
  :::

  :::parameter-table-entry{annotation="含まれないことがあります"}
  #undefined
  maxVer

  #undefined
  String

  該当する機能がサポートされているLINEの最大バージョン
  :::

  :::parameter-table-entry{annotation="含まれないことがあります"}
  #undefined
  unsupportedFromVer

  #undefined
  String

  該当する機能がサポート対象外となったLINEのバージョン
  :::

  :::parameter-table-entry{annotation="含まれないことがあります"}
  #undefined
  minOsVer

  #undefined
  String

  該当する機能がサポートされているOSの最小バージョン
  :::

  :::parameter-table-entry{annotation="含まれないことがあります"}
  #undefined
  maxOsVer

  #undefined
  String

  該当する機能がサポートされているOSの最大バージョン
  :::

  :::parameter-table-entry{annotation="含まれないことがあります"}
  #undefined
  unsupportedFromOsVer

  #undefined
  String

  該当する機能がサポート対象外となったOSのバージョン
  :::
::

#### `menuColorSetting`オブジェクト

::reference-with-code
  :::reference-content
  `menuColorSetting`オブジェクトには、以下のプロパティが含まれます。

    ::::parameter-table
      :::::parameter-table-entry
      #undefined
      adaptableColorSchemes

      #undefined
      Array of strings

      常に`light`を返します。
      :::::

      :::::parameter-table-entry
      #undefined
      lightModeColor

      #undefined
      Object

      `adaptableColorSchemes`が`light`だった場合の、カラー設定を[オブジェクト](#get-context-return-value-menucolorsetting-common)で表します。
      :::::

      :::::parameter-table-entry
      #undefined
      darkModeColor

      #undefined
      Object

      `adaptableColorSchemes`が`dark`だった場合の、ヘッダーのカラー設定を[オブジェクト](#get-context-return-value-menucolorsetting-common)で表します。

      なお、このヘッダーのカラー設定は現在提供していません。
      :::::
    ::::
  :::

  :::reference-code
  *例*

    ::::code-tabs
      :::::tab{lang="json"}
      ```json
      {
        "adaptableColorSchemes": [
          "light"
        ],
        "lightModeColor": {
          "iconColor": "#111111",
          "statusBarColor": "black",
          "titleTextColor": "#111111",
          "titleSubtextColor": "#B7B7B7",
          "titleButtonColor": "#111111",
          "titleBackgroundColor": "#FFFFFF",
          "progressBarColor": "#06C755",
          "progressBackgroundColor": "#FFFFFF"
        },
        "darkModeColor": {
          "iconColor": "#FFFFFF",
          "statusBarColor": "white",
          "titleTextColor": "#FFFFFF",
          "titleSubtextColor": "#949494",
          "titleButtonColor": "#FFFFFF",
          "titleBackgroundColor": "#111111",
          "progressBarColor": "#06C755",
          "progressBackgroundColor": "#111111"
        }
      }
      ```
      :::::
    ::::
  :::
::

#### `menuColorSetting`オブジェクトの共通プロパティ

::parameter-table
  :::parameter-table-entry
  #undefined
  iconColor

  #undefined
  String

  ヘッダーのアイコンの色を`#RRGGBB`のような16進数カラーコードで表します。
  :::

  :::parameter-table-entry
  #undefined
  statusBarColor

  #undefined
  String

  常に`white`を返します。
  :::

  :::parameter-table-entry
  #undefined
  titleTextColor

  #undefined
  String

  ヘッダーのタイトルテキストの色を`#RRGGBB`のような16進数カラーコードで表します。
  :::

  :::parameter-table-entry
  #undefined
  titleSubtextColor

  #undefined
  String

  ヘッダーのサブタイトルテキストの色を`#RRGGBB`のような16進数カラーコードで表します。
  :::

  :::parameter-table-entry
  #undefined
  titleButtonColor

  #undefined
  String

  ヘッダーのボタンの色を`#RRGGBB`のような16進数カラーコードで表します。
  :::

  :::parameter-table-entry
  #undefined
  titleBackgroundColor

  #undefined
  String

  ヘッダーの背景色を`#RRGGBB`のような16進数カラーコードで表します。
  :::

  :::parameter-table-entry
  #undefined
  progressBarColor

  #undefined
  String

  ヘッダーのプログレスバーの色を`#RRGGBB`のような16進数カラーコードで表します。
  :::

  :::parameter-table-entry
  #undefined
  progressBackgroundColor

  #undefined
  String

  ヘッダーのプログレスバーの背景色を`#RRGGBB`のような16進数カラーコードで表します。
  :::
::
