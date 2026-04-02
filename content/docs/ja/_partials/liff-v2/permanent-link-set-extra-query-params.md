---
title: Permanent Link Set Extra Query Params
navigation: true
description: ''
meta: '{}'
path: /ja/_partials/liff-v2/permanent-link-set-extra-query-params
__hash__: 1W3z3gD3y4GqadH440Xk1vJg1kDHoW0TEKt3quBmOec
seo:
  description: ''
---

### liff.permanentLink.setExtraQueryParam()

::reference-with-code
  :::reference-content
    ::::admonition
    ---
    title: liff.permanentLink.setExtraQueryParam()は次回メジャーバージョン以降に非推奨になる可能性があります
    type: note
    ---
    技術的な問題があり、`liff.permanentLink.setExtraQueryParam()`は、次回メジャーバージョン以降に非推奨になる可能性があります。現在のページのパーマネントリンクに、任意のクエリパラメータを追加するには、[`liff.permanentLink.createUrlBy()`](#permanent-link-create-url-by)を使用することをお勧めします。
    ::::

  現在のページのパーマネントリンクに、任意のクエリパラメータを追加できます。

  `liff.permanentLink.setExtraQueryParam()`を実行するたびに、前回追加したクエリパラメータは破棄されます。

    ::::admonition{title="追加したクエリパラメータの削除について" type="tip"}
    - 追加したクエリパラメータを削除するには、`liff.permanentLink.setExtraQueryParam("")`を実行します。
    - 追加したクエリパラメータは、ユーザーが別のページに移動すると破棄されます。
    ::::
  :::

  :::reference-code
  *例*

    ::::code-tabs
      :::::tab{lang="javascript"}
      ```javascript
      // For example, if current location is
      // /food?menu=pizza
      // (LIFF ID = 1234567890-AbcdEfgh)
      liff.permanentLink.setExtraQueryParam("user_tracking_id=8888");
      const myLink = liff.permanentLink.createUrl();

      // myLink equals "https://liff.line.me/1234567890-AbcdEfgh/food?menu=pizza&user_tracking_id=8888"
      ```
      :::::
    ::::
  :::
::

#### 構文

```javascript
liff.permanentLink.setExtraQueryParam(extraString);
```

#### 引数

::parameter-table
  :::parameter-table-entry{required="true"}
  #undefined
  extraString

  #undefined
  String

  追加するクエリパラメータ
  :::
::

#### 戻り値

なし
