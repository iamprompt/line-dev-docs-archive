---
title: Close Window
navigation: true
description: ''
meta: '{}'
path: /ja/_partials/liff-v2/close-window
__hash__: PvQg33qIm25LD0xOs0fA4MKjXF6McXtLQRjonz6mX60
seo:
  description: ''
---

### liff.closeWindow()

::reference-with-code
  :::reference-content
  LIFFアプリを閉じます。

  LIFFアプリを閉じたときの挙動は、LINEアプリのバージョンやLIFFアプリの設定によって異なります。詳しくは、『LIFFドキュメント』の「[LIFFアプリを閉じたときの挙動](/docs/liff/developing-liff-apps/#behavior-when-closing-liff-app)」を参照してください。

    ::::admonition{title="LIFFアプリ初期化前でも実行できます" type="tip"}
    このメソッドは、LIFF SDKバージョンが2.4.0以上の場合のみ、`liff.init()`によるLIFFアプリの初期化が終了する前でも実行できます。
    ::::

    ::::admonition{title="注意" type="note"}
    `liff.closeWindow()`の外部ブラウザでの動作は、保証対象外です。
    ::::
  :::

  :::reference-code
  *例*

    ::::code-tabs
      :::::tab{lang="javascript"}
      ```javascript
      liff.closeWindow();
      ```
      :::::
    ::::
  :::
::

#### 構文

```javascript
liff.closeWindow();
```

#### 引数

なし

#### 戻り値

なし
