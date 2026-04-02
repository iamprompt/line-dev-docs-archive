---
title: Permanent Link Create Url By
navigation: true
description: ''
meta: '{}'
path: /ja/_partials/liff-v2/permanent-link-create-url-by
__hash__: HfMaJnyDOlbwc2t9nvfgsMD0Qy7vrO_E68Ml-PihM7o
seo:
  description: ''
---

### liff.permanentLink.createUrlBy()

::reference-with-code
  :::reference-content
  LIFFアプリの任意のページのパーマネントリンクを取得します。

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
      // For example, if the endpoint URL of the LIFF app
      // is https://example.com/path1?q1=v1
      // and its LIFF ID is 1234567890-AbcdEfgh
      liff.permanentLink
        .createUrlBy("https://example.com/path1?q1=v1")
        .then((permanentLink) => {
          // https://liff.line.me/1234567890-AbcdEfgh
          console.log(permanentLink);
        });

      liff.permanentLink
        .createUrlBy("https://example.com/path1/path2?q1=v1&q2=v2")
        .then((permanentLink) => {
          // https://liff.line.me/1234567890-AbcdEfgh/path2?q=2=v2
          console.log(permanentLink);
        });

      liff.permanentLink
        .createUrlBy("https://example.com/")
        .catch((error) => {
        // Error: currentPageUrl must start with endpoint URL of LIFF App.
        console.log(error);
      });
      ```
      :::::
    ::::
  :::
::

#### 構文

```javascript
liff.permanentLink.createUrlBy(url);
```

#### 引数

::parameter-table
  :::parameter-table-entry{required="true"}
  #undefined
  url

  #undefined
  String

  パーマネントリンクを取得するURL。任意のクエリパラメータやURLフラグメントを追加できます。
  :::
::

#### 戻り値

`Promise`オブジェクトが返されます。

`Promise`がresolveされると、パーマネントリンクの文字列が渡されます。

##### エラーレスポンス

パーマネントリンクを取得するURLが、[LINE Developersコンソール](/console/)の［**エンドポイントURL**］に指定したURLで始まらない場合、`Promise`がrejectされ、[`LiffError`](#liff-errors)が渡されます。

たとえば、パーマネントリンクを取得するURL（例：`https://example.com/`）が、［**エンドポイントURL**］（例：`https://example.com/path1?q1=v1`）より上の階層の場合、`Promise`がrejectされます。
