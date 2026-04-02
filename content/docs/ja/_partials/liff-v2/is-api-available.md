---
title: Is Api Available
navigation: true
description: ''
meta: '{}'
path: /ja/_partials/liff-v2/is-api-available
__hash__: tXxKjCp8gUsJtjzxdY5zQB3aEG2B6zxYSoLIoREi3JY
seo:
  description: ''
---

### liff.isApiAvailable()

::reference-with-code
  :::reference-content
  指定したAPIや機能が、LIFFアプリを起動した環境で使用可能かどうかを確認します。たとえば、APIが対応しているLINEバージョンであることや、APIを呼び出すために特別な同意が必要な場合は同意していることを確認します。
  :::

  :::reference-code
  *例*

    ::::code-tabs
      :::::tab{lang="javascript"}
      ```javascript
      // Check if shareTargetPicker is available
      if (liff.isApiAvailable('shareTargetPicker')) {
        liff.shareTargetPicker([
          {
            type: "text",
            text: "Hello, World!"
          }
        ])
          .then(
            console.log("ShareTargetPicker was launched")
          ).catch(function(res) {
            console.log("Failed to launch ShareTargetPicker")
          })
      }

      // Check if the LIFF-to-LIFF transition is available
      if (liff.isApiAvailable('multipleLiffTransition')) {
        window.location.href = "https://line.me/{liffId}", // URL for another LIFF app
      }
      ```
      :::::
    ::::
  :::
::

#### 構文

```javascript
liff.isApiAvailable(apiName);
```

#### 引数

::parameter-table
  :::parameter-table-entry{required="true"}
  #undefined
  apiName

  #undefined
  String

  LIFFのクライアントAPIや機能の名前。次のいずれかを指定できます。

  - `createShortcutOnHomeScreen`：[`liff.createShortcutOnHomeScreen()`](#create-shortcut-on-home-screen)メソッドが利用可能かどうか
  - `scanCodeV2`：[`liff.scanCodeV2()`](#scan-code-v2)メソッドが利用可能かどうか
  - `scanCode`：[`liff.scanCode()`](#scan-code)メソッドが利用可能かどうか
  - `shareTargetPicker`：[`liff.shareTargetPicker()`](#share-target-picker)メソッドが利用可能かどうか
  - `iap`：LINEミニアプリの[アプリ内課金](/docs/line-mini-app/in-app-purchase/overview/)機能が利用可能かどうか
  - `multipleLiffTransition`：[LIFF間遷移](/docs/liff/opening-liff-app/#move-liff-to-liff)が利用可能かどうか
  - `skipChannelVerificationScreen`：LINEミニアプリの「[チャネル同意の簡略化](/docs/line-mini-app/develop/channel-consent-simplification/#what-is-channel-consent-simplification)」機能が利用可能かどうか
  :::
::

#### 戻り値

指定したAPIや機能が、現在の環境で使用可能かどうかが返されます。使用可能の場合は`true`が返されます。使用不可能の場合は`false`が返されます。`false`が返される例は以下のとおりです。

- APIが対応していないLINEバージョンでLIFFアプリを起動した場合
- 外部ブラウザで利用できないAPIにもかかわらず、外部ブラウザでLIFFアプリを起動した場合
- 使用するために特別な同意が必要なAPIにもかかわらず、同意していない場合
- 使用するためにログインが必要なAPIにもかかわらず、ログインしていない場合
- 使用するためにアクセストークンが必要なAPIにもかかわらず、アクセストークンの有効期限が切れている場合
