---
title: Is In Client
navigation: true
description: ''
meta: '{}'
path: /ja/_partials/liff-v2/is-in-client
__hash__: 2FMO25XngT1hQ4lXOI7LbvZd2ceX7mqTMS8heeCn7nI
seo:
  description: ''
---

### liff.isInClient()

::reference-with-code
  :::reference-content
  LIFFアプリをLIFFブラウザで動作させているかどうかを取得します。

    ::::admonition{title="LIFFアプリ初期化前でも実行できます" type="tip"}
    このメソッドは、`liff.init()`によるLIFFアプリの初期化が終了する前でも実行できます。
    ::::
  :::
::

#### 構文

```javascript
liff.isInClient();
```

#### 引数

なし

#### 戻り値

- `true`：::glossary-tooltip{glossary-id="liff-browser"}
[LIFFブラウザ](/glossary/#liff-browser)
::

で動作させている
- `false`：::glossary-tooltip{glossary-id="external-browser"}
[外部ブラウザ](/glossary/#external-browser)
::

または::glossary-tooltip{glossary-id="line-iab"}
[LINE内ブラウザ](/glossary/#line-iab)
::

で動作させている
