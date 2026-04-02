---
title: Scan Code V2
navigation: true
description: ''
meta: '{}'
path: /ja/_partials/liff-v2/scan-code-v2
__hash__: yP6ccuaY4ie2qso5DPFup3ddDq5nh-PwLtlWA8iehCo
seo:
  description: ''
---

### liff.scanCodeV2()

::reference-with-code
  :::reference-content
  二次元コードリーダーを起動し、読み取った文字列を取得します。二次元コードリーダーを起動するには、あらかじめ[LINE Developersコンソール](/console/)で、 [**Scan QR**] をオンにする必要があります。

    ::::admonition{title="liff.scanCodeV2()の動作環境" type="note"}
    `liff.scanCodeV2()`は以下の環境で動作します。

    - iOS：iOS14.3以降
    - Android：すべてのバージョン
    - 外部ブラウザ：[WebRTC API](https://developer.mozilla.org/ja/docs/Web/API/WebRTC_API){rel="[\"nofollow\"]"} をサポートするウェブブラウザ

    | OS      | バージョン     | LIFFブラウザ | 外部ブラウザ |
    | ------- | --------- | -------- | ------ |
    | iOS     | 11〜14.2   | ❌        | ✅ ※1   |
    | 14.3以降  | ✅ ※2      | ✅ ※1     |        |
    | Android | すべてのバージョン | ✅ ※2     | ✅ ※1   |
    | PC      | すべてのバージョン | ❌        | ✅ ※1   |

    ※1 [WebRTC API](https://developer.mozilla.org/ja/docs/Web/API/WebRTC_API){rel="[\"nofollow\"]"}をサポートするウェブブラウザのみ利用できます。

    ※2 LIFFブラウザの画面サイズが`Full`の場合のみ利用できます。詳しくは、『LIFFドキュメント』の「[LIFFブラウザの画面サイズ](/docs/liff/overview/#screen-size)」を参照してください。
    ::::

    ::::admonition{title="二次元コードリーダーを起動するには［Scan QR］をオンにしてください" type="note"}
    [LIFFアプリをチャネルに追加する](/docs/liff/registering-liff-apps/)ときに、［**Scan QR**］をオンにしてください。［**Scan QR**］の設定は、LIFFアプリ追加後も[LINE Developersコンソール](/console/)のLIFFタブで変更できます。
    ::::

    ::::admonition{title="liff.scanCodeV2()の動作仕様" type="note"}
    `liff.scanCodeV2()`は、内部で[jsQR](https://github.com/cozmo/jsQR){rel="[\"nofollow\"]"}という外部ライブラリを使用しています。そのため、`liff.scanCodeV2()`メソッド実行時に起動する二次元コードリーダーは、[jsQR](https://github.com/cozmo/jsQR){rel="[\"nofollow\"]"}の動作仕様に依存します。なお、使用ライブラリは予告なく更新、変更される可能性があります。
    ::::
  :::

  :::reference-code
  *例*

    ::::code-tabs
      :::::tab{lang="javascript"}
      ```javascript
      liff
        .scanCodeV2()
        .then((result) => {
          // result = { value: "" }
        })
        .catch((error) => {
          console.log("error", error);
        });
      ```
      :::::
    ::::
  :::
::

#### 構文

```javascript
liff.scanCodeV2();
```

#### 引数

なし

#### 戻り値

`Promise`オブジェクトが返されます。

二次元コードリーダーで文字列が読み取れると、`Promise`がresolveされ、読み取った文字列を含むオブジェクトが渡されます。

::parameter-table
  :::parameter-table-entry
  #undefined
  value

  #undefined
  String

  二次元コードリーダーで読み取った文字列
  :::
::

##### エラーレスポンス

`Promise`が`reject`されたときは、[`LiffError`](#liff-errors)が渡されます。
