---
title: I18n Set Lang
navigation: true
description: ''
meta: '{}'
path: /ja/_partials/liff-v2/i18n-set-lang
__hash__: SXAOXx_DSdJ-KvYMBIdxKdab6o21zE_L2NeLMHTjKvA
seo:
  description: ''
---

### liff.i18n.setLang()

::reference-with-code
  :::reference-content
  LIFF SDKが表示する文言の言語を指定します。
  :::

  :::reference-code
  *例*

    ::::code-tabs
      :::::tab{lang="javascript"}
      ```javascript
      liff.i18n.setLang("en");
      ```
      :::::
    ::::
  :::
::

#### 構文

```javascript
liff.i18n.setLang(language);
```

#### 引数

::parameter-table
  :::parameter-table-entry{required="true"}
  #undefined
  language

  #undefined
  String

  [RFC 5646（BCP 47）](https://datatracker.ietf.org/doc/html/rfc5646){rel="[\"nofollow\"]"}で定義されている言語タグ。指定した言語タグの翻訳がない場合は、`en`がフォールバックとして使用されます。
  :::
::

#### 戻り値

`Promise`オブジェクトが返されます。

##### エラーレスポンス

`Promise`がrejectされたときは、[`LiffError`](#liff-errors)が渡されます。
