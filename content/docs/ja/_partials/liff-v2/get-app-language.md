---
title: Get App Language
navigation: true
description: ''
meta: '{}'
path: /ja/_partials/liff-v2/get-app-language
__hash__: NzTKk1QEhimEpvthkcOvFyalVHBiCemsistSQfSN8yk
seo:
  description: ''
---

### liff.getAppLanguage()

LIFFアプリが動作しているLINEアプリの言語設定を取得します。

::admonition{title="LIFFアプリ初期化前でも実行できます" type="tip"}
このメソッドは、`liff.init()`によるLIFFアプリの初期化が終了する前でも実行できます。
::

#### 使用条件

LIFF SDKのバージョンが2.24.0以上

#### 動作条件

`liff.getAppLanguage()`メソッドが正しく動作するには、以下の条件をすべて満たす必要があります。

- LIFFアプリが::glossary-tooltip{glossary-id="liff-browser"}
[LIFFブラウザ](/glossary/#liff-browser)
::

上で動作している。
- LINEアプリのバージョンが14.11.0以上である。

なお、上記の条件を満たさない場合、`liff.getAppLanguage()`メソッドは[`liff.getLanguage()`](#get-language)メソッドと同じ挙動になります。

#### 構文

```javascript
liff.getAppLanguage();
```

#### 引数

なし

#### 戻り値

LIFFアプリが動作しているLINEアプリの言語設定が[RFC 5646](https://datatracker.ietf.org/doc/html/rfc5646){rel="[\"nofollow\"]"}に準拠した文字列で返されます。
