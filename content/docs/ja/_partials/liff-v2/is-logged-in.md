---
title: Is Logged In
navigation: true
description: ''
meta: '{}'
path: /ja/_partials/liff-v2/is-logged-in
__hash__: OPaILKMv_isGt1wKPp0_oyL1mcdN9BH-y0rRdU8SCpE
seo:
  description: ''
---

### liff.isLoggedIn()

::reference-with-code
  :::reference-content
  ユーザーがログインしているかどうかを取得します。
  :::

  :::reference-code
  *例*

    ::::code-tabs
      :::::tab{lang="javascript"}
      ```javascript
      if (liff.isLoggedIn()) {
        // `liff.getProfile()`のような、アクセストークンが必要なAPIを使用できます。
      }
      ```
      :::::
    ::::
  :::
::

#### 構文

```javascript
liff.isLoggedIn();
```

#### 引数

なし

#### 戻り値

- `true`：ログインしている
- `false`：ログインしていない
