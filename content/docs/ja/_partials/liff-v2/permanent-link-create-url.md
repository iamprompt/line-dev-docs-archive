---
title: Permanent Link Create Url
navigation: true
description: ''
meta: '{}'
path: /ja/_partials/liff-v2/permanent-link-create-url
__hash__: N_Ql0IW46REXGBqWl9TJizEbAYkAD3pWNjzAwtffrAY
seo:
  description: ''
---

### liff.permanentLink.createUrl()

::reference-with-code
  :::reference-content
    ::::admonition
    ---
    title: liff.permanentLink.createUrl()は次回メジャーバージョン以降に非推奨になる可能性があります
    type: note
    ---
    技術的な問題があり、`liff.permanentLink.createUrl()`は、次回メジャーバージョン以降に非推奨になる可能性があります。現在のページのパーマネントリンクを取得するには、[`liff.permanentLink.createUrlBy()`](#permanent-link-create-url-by)を使用することをお勧めします。
    ::::

  現在のページのパーマネントリンクを取得します。

  パーマネントリンクの形式：

  ```text
  https://liff.line.me/{liffId}/{path}?{query}#{URL fragment}
  ```
  :::

  :::reference-code
  *例*

    ::::code-tabs
      :::::tab{lang="javascript"}
      ```javascript
      // For example, if current location is
      // /shopping?item_id=99#details
      // (LIFF ID = 1234567890-AbcdEfgh)
      const myLink = liff.permanentLink.createUrl();

      // myLink equals "https://liff.line.me/1234567890-AbcdEfgh/shopping?item_id=99#details"
      ```
      :::::
    ::::
  :::
::

#### 構文

```javascript
liff.permanentLink.createUrl();
```

#### 引数

なし

#### 戻り値

現在のページのパーマネントリンクが、文字列で返されます。

現在のページのURLがLINE Developersコンソールの［**エンドポイントURL**］に指定したURLで始まらない場合、`LiffError`例外が発生します。
