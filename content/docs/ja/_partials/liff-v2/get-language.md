---
title: Get Language
navigation: true
description: ''
meta: '{}'
path: /ja/_partials/liff-v2/get-language
__hash__: 4JTS541_g81wdXws1PmjUy6gH9Fqk20BCHIeNGvcXcM
seo:
  description: ''
---

### liff.getLanguage()

::admonition{title="liff.getLanguage()メソッドは非推奨です" type="note"}
`liff.getLanguage()`メソッドは非推奨になりました。LIFFアプリを動作させている環境の言語設定を取得するには、[`liff.getAppLanguage()`](#get-app-language)メソッドを使用してください。詳しくは、[2024年7月23日のニュース](/news/2024/07/23/release-liff-2-24-0/)を参照してください。
::

LIFFアプリを動作させている環境の言語設定を取得します。

::admonition{title="LIFFアプリ初期化前でも実行できます" type="tip"}
このメソッドは、`liff.init()`によるLIFFアプリの初期化が終了する前でも実行できます。
::

#### 構文

```javascript
liff.getLanguage();
```

#### 引数

なし

#### 戻り値

LIFFアプリを動作させている環境の`navigator.language`で取得できる言語設定が、文字列で返されます。
