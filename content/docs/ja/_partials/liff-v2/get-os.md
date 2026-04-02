---
title: Get Os
navigation: true
description: ''
meta: '{}'
path: /ja/_partials/liff-v2/get-os
__hash__: TPDFavB-6d8cFCBL-mXo8SEYJZZnrBakIIlH76UbZvc
seo:
  description: ''
---

### liff.getOS()

::reference-with-code
  :::reference-content
  ユーザーがLIFFアプリを動作させている環境を取得します。

    ::::admonition{title="LIFFアプリ初期化前でも実行できます" type="tip"}
    このメソッドは、`liff.init()`によるLIFFアプリの初期化が終了する前でも実行できます。
    ::::
  :::
::

#### 構文

```javascript
liff.getOS();
```

#### 引数

なし

#### 戻り値

ユーザーがLIFFアプリを動作させている環境が、文字列で返されます。戻り値はユーザーエージェント文字列中のOS名に基づくため、返却される値はブラウザの種類（:glossary-tooltip[[LIFFブラウザ](/glossary/#liff-browser)]{glossary-id="liff-browser"}、:glossary-tooltip[[LINE内ブラウザ](/glossary/#line-iab)]{glossary-id="line-iab"}、:glossary-tooltip[[外部ブラウザ](/glossary/#external-browser)]{glossary-id="external-browser"}）を問いません。

たとえば、ユーザーがiOSを使用している場合、使用しているブラウザがLIFFブラウザかSafariかは問わず、`ios` が返却されます。

| 戻り値     | 説明            |
| ------- | ------------- |
| ios     | iOSもしくはiPadOS |
| android | Android       |
| web     | 上記以外          |

LIFFアプリをサポートするOSやブラウザについては、[動作環境](/docs/liff/overview/#operating-environment)を参照してください。
