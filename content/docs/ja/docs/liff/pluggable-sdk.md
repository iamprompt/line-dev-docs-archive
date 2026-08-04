---
title: プラガブルSDK
navigation: true
description: null
meta: '{"tags":null,"author":null,"last_updated":null,"source_language":"ja"}'
path: /ja/docs/liff/pluggable-sdk
__hash__: zwrkllLBIFal5ynZxVWieI5dHfDR4BaRJEi8ABeDv08
seo:
  title: プラガブルSDK
  description: null
---

# :page-title

:markdown-controls:toc## プラガブルSDKとは

プラガブルSDKとは、LIFF SDKに含めるLIFF APIを選択できる機能です。

LIFFアプリで利用するLIFF APIのみをLIFF SDKに含めることで、LIFF SDKのファイルサイズを最大約34%削減できます。その結果、LIFFアプリの表示速度を向上させることができます。

## プラガブルSDKの使用条件

LIFF v2.22.0以降のnpmパッケージ版でのみ利用できます。CDN版では利用できません。npmパッケージの利用方法について詳しくは、「[npmパッケージを利用する](/docs/liff/developing-liff-apps/#use-npm-package)」を参照してください。

## プラガブルSDKの使用方法

プラガブルSDKの使用方法は、以下のとおりです。

- [liffオブジェクトをインポートする](#import-liff-object)
- [LIFF APIを有効化する](#activate-liff-api)

### liffオブジェクトをインポートする

まず、`liff`オブジェクトを`@line/liff/core`からインポートします。

```js
import liff from "@line/liff/core";
```

この`liff`オブジェクトには、以下のプロパティとメソッドのみが含まれています。

- [`liff.id`](/reference/liff/#id)プロパティ
- [`liff.ready`](/reference/liff/#ready)プロパティ
- [`liff.init()`](/reference/liff/#initialize-liff-app)メソッド
- [`liff.getVersion()`](/reference/liff/#get-version)メソッド
- [`liff.use()`](/reference/liff/#use)メソッド

上記以外のLIFF APIを利用するには、対応するモジュールをインポートします。以下の例では、[`liff.getOS()`](/reference/liff/#get-os)メソッドと[`liff.getAppLanguage()`](/reference/liff/#get-app-language)メソッドに対応するモジュールをインポートしています。

```js
import liff from "@line/liff/core";
import GetOS from "@line/liff/get-os";
import GetAppLanguage from "@line/liff/get-app-language";
```

各LIFF APIに対応するモジュールについては、「[LIFF APIと対応するモジュール一覧](#liff-api-and-module-list)」を参照してください。

### LIFF APIを有効化する

次に、インポートしたLIFF APIのモジュールを`liff.use()`メソッドに渡し、LIFF APIを有効化します。LIFF APIのモジュールはクラスで定義されているため、`liff.use()`メソッドにインスタンスを渡す必要があります。

```js
import liff from "@line/liff/core";
import GetOS from "@line/liff/get-os";
import GetAppLanguage from "@line/liff/get-app-language";

liff.use(new GetOS());
liff.use(new GetAppLanguage());
```

LIFF APIを有効化すると、LIFF APIを利用できるようになります。

以下の例では、有効化した`liff.getOS()`メソッドと`liff.getAppLanguage()`メソッドは利用できますが、有効化していない`liff.login()`メソッドは利用できません。

```js
import liff from "@line/liff/core";
import GetOS from "@line/liff/get-os";
import GetAppLanguage from "@line/liff/get-app-language";

liff.use(new GetOS());
liff.use(new GetAppLanguage());

liff.init({
  liffId: "123456-abcedfg",
});

liff.getOS(); // 利用できる
liff.getAppLanguage(); // 利用できる
liff.login(); // 利用できない
```

## プラガブルSDKの注意事項

技術的な制約から、`liff.use()`メソッドは`liff.init()`メソッドより前に実行してください。`liff.init()`メソッドを実行した後に`liff.use()`メソッドを実行した場合の動作は保証されません。

### liff.use()メソッドの正しい実行例

```js
import liff from "@line/liff/core";
import GetOS from "@line/liff/get-os";

// liff.use()メソッドをliff.init()メソッドより前に実行している
liff.use(new GetOS());

liff.init({
  liffId: "123456-abcedfg",
});
```

### liff.use()メソッドの間違った実行例

```js
import liff from "@line/liff/core";
import GetOS from "@line/liff/get-os";

liff.init({
  liffId: "123456-abcedfg",
});

// liff.use()メソッドをliff.init()メソッドより後に実行している
liff.use(new GetOS());
```

## LIFF APIと対応するモジュール一覧

| LIFF API                                                                                                                                                                                                                                                                         | モジュール                                       |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------- |
| [`liff.getOS()`](/reference/liff/#get-os)                                                                                                                                                                                                                                        | `@line/liff/get-os`                         |
| [`liff.getAppLanguage()`](/reference/liff/#get-app-language)                                                                                                                                                                                                                     | `@line/liff/get-app-language`               |
| [`liff.getLanguage()`](/reference/liff/#get-language)（非推奨）                                                                                                                                                                                                                       | `@line/liff/get-language`                   |
| [`liff.getLineVersion()`](/reference/liff/#get-line-version)                                                                                                                                                                                                                     | `@line/liff/get-line-version`               |
| [`liff.getContext()`](/reference/liff/#get-context)                                                                                                                                                                                                                              | `@line/liff/get-context`                    |
| [`liff.isInClient()`](/reference/liff/#is-in-client)                                                                                                                                                                                                                             | `@line/liff/is-in-client`                   |
| [`liff.isLoggedIn()`](/reference/liff/#is-logged-in)                                                                                                                                                                                                                             | `@line/liff/is-logged-in`                   |
| [`liff.isApiAvailable()`](/reference/liff/#is-api-available)                                                                                                                                                                                                                     | `@line/liff/is-api-available`               |
| [`liff.login()`](/reference/liff/#login)                                                                                                                                                                                                                                         | `@line/liff/login`                          |
| [`liff.logout()`](/reference/liff/#logout)                                                                                                                                                                                                                                       | `@line/liff/logout`                         |
| [`liff.getAccessToken()`](/reference/liff/#get-access-token)                                                                                                                                                                                                                     | `@line/liff/get-access-token`               |
| [`liff.getIDToken()`](/reference/liff/#get-id-token)                                                                                                                                                                                                                             | `@line/liff/get-id-token`                   |
| [`liff.getDecodedIDToken()`](/reference/liff/#get-decoded-id-token)                                                                                                                                                                                                              | `@line/liff/get-decoded-id-token`           |
| [`liff.permission.getGrantedAll()`](/reference/liff/#permission-get-granted-all)      [`liff.permission.query()`](/reference/liff/#permission-query)      [`liff.permission.requestAll()`](/reference/liff/#permission-request-all)                                              | `@line/liff/permission`                     |
| [`liff.getProfile()`](/reference/liff/#get-profile)                                                                                                                                                                                                                              | `@line/liff/get-profile`                    |
| [`liff.getFriendship()`](/reference/liff/#get-friendship)                                                                                                                                                                                                                        | `@line/liff/get-friendship`                 |
| [`liff.openWindow()`](/reference/liff/#open-window)                                                                                                                                                                                                                              | `@line/liff/open-window`                    |
| [`liff.closeWindow()`](/reference/liff/#close-window)                                                                                                                                                                                                                            | `@line/liff/close-window`                   |
| [`liff.sendMessages()`](/reference/liff/#send-messages)                                                                                                                                                                                                                          | `@line/liff/send-messages`                  |
| [`liff.shareTargetPicker()`](/reference/liff/#share-target-picker)                                                                                                                                                                                                               | `@line/liff/share-target-picker`            |
| [`liff.scanCodeV2()`](/reference/liff/#scan-code-v2)                                                                                                                                                                                                                             | `@line/liff/scan-code-v2`                   |
| [`liff.scanCode()`](/reference/liff/#scan-code)（非推奨）                                                                                                                                                                                                                             | `@line/liff/scan-code`                      |
| [`liff.permanentLink.createUrlBy()`](/reference/liff/#permanent-link-create-url-by)      [`liff.permanentLink.createUrl()`](/reference/liff/#permanent-link-create-url)      [`liff.permanentLink.setExtraQueryParam()`](/reference/liff/#permanent-linke-set-extra-query-param) | `@line/liff/permanent-link`                 |
| [`liff.i18n.setLang()`](/reference/liff/#i18n-set-lang)                                                                                                                                                                                                                          | `@line/liff/i18n`                           |
| [`liff.createShortcutOnHomeScreen()`](/reference/liff/#create-shortcut-on-home-screen)                                                                                                                                                                                           | `@line/liff/create-shortcut-on-home-screen` |
