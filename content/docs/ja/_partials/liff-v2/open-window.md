---
title: Open Window
navigation: true
description: ''
meta: '{}'
path: /ja/_partials/liff-v2/open-window
__hash__: u9JDNCd4b97OG-6w005AWOK1ngVDs6AGrLZbtpOtatg
seo:
  description: ''
---

### liff.openWindow()

::reference-with-code
  :::reference-content
  指定したURLをLINE内ブラウザまたは外部ブラウザで開きます。

    ::::admonition{title="liff.openWindow()の動作環境" type="note"}
    `liff.openWindow()`の外部ブラウザでの利用は、保証対象外です。
    ::::
  :::

  :::reference-code
  *例*

    ::::code-tabs
      :::::tab{lang="javascript"}
      ```javascript
      liff.openWindow({
        url: "https://line.me",
        external: true,
      });
      ```
      :::::
    ::::
  :::
::

#### LINEバージョンごとの挙動の違い

`liff.openWindow()`メソッドで[ユニバーサルリンク](https://developer.apple.com/documentation/xcode/allowing-apps-and-websites-to-link-to-your-content/){rel="[\"nofollow\"]"}や[アプリリンク](https://developer.android.com/training/app-links){rel="[\"nofollow\"]"}が有効なURLを開いた場合、LINEバージョンと[`params.external`](#open-window-arguments)パラメータの設定によって挙動が異なります。挙動の違いは以下のとおりです。

|                         | `params.external`が`false`   （デフォルト値）                  | `params.external`が`true`                              |
| ----------------------- | ----------------------------------------------------- | ----------------------------------------------------- |
| LINE 14.20.0未満（※）       | - iOSの場合：LINE内ブラウザでURLを開く - Androidの場合：URLに対応するアプリに遷移 | - iOSの場合：URLに対応するアプリに遷移 - Androidの場合：デフォルトブラウザでURLを開く |
| LINE 14.20.0以上15.20.0未満 | URLに対応するアプリに遷移                                        | URLに対応するアプリに遷移                                        |
| LINE 15.20.0以上          | LINE内ブラウザでURLを開く                                      | URLに対応するアプリに遷移                                        |

※ LINEバージョン14.20.0以降はOSによる挙動の違いはありません。

#### 構文

```javascript
liff.openWindow(params);
```

#### 引数

::parameter-table
  :::parameter-table-entry{required="true"}
  #undefined
  params

  #undefined
  Object

  パラメータオブジェクト
  :::

  :::parameter-table-entry{required="true"}
  #undefined
  params.url

  #undefined
  String

  URL。完全なURLで指定します。
  :::

  :::parameter-table-entry{optional=""}
  #undefined
  params.external

  #undefined
  Boolean

  指定したURLを外部ブラウザで開くかどうかを、以下のどちらかの値で指定します。デフォルト値は`false`です。

  - `true`：外部ブラウザで開きます。
  - `false`：LINE内ブラウザで開きます。
  :::
::

#### 戻り値

なし
