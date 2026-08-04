---
title: Get Line Version
navigation: true
description: ''
meta: '{}'
path: /ja/_partials/liff-v2/get-line-version
__hash__: HQC4GG5CYyXjPjD7w8pxuWj1lH40Hr7WLH_rgaGAYkk
seo:
  description: ''
---

### liff.getLineVersion()

::reference-with-code
  :::reference-content
  ユーザーのLINEバージョンを取得します。

    ::::admonition{title="LIFFアプリ初期化前でも実行できます" type="tip"}
    このメソッドは、`liff.init()`によるLIFFアプリの初期化が終了する前でも実行できます。
    ::::
  :::
::

#### 構文

```javascript
liff.getLineVersion();
```

#### 引数

なし

#### 戻り値

ユーザーがLIFFブラウザでLIFFアプリを開くと、ユーザーのLINEバージョンが文字列で返されます。ユーザーが外部ブラウザでLIFFアプリを開くと、 `null`が返されます。
