---
title: Get Version
navigation: true
description: ''
meta: '{}'
path: /ja/_partials/liff-v2/get-version
__hash__: Sm8PBwkOHQqFK6hOObMLQonQAHyfS1ROyEr24Qgkcyc
seo:
  description: ''
---

### liff.getVersion()

::reference-with-code
  :::reference-content
  LIFF SDKのバージョンを取得します。

    ::::admonition{title="LIFFアプリ初期化前でも実行できます" type="tip"}
    このメソッドは、`liff.init()`によるLIFFアプリの初期化が終了する前でも実行できます。
    ::::
  :::
::

#### 構文

```javascript
liff.getVersion();
```

#### 引数

なし

#### 戻り値

LIFF SDKのバージョンが、文字列で返されます。
