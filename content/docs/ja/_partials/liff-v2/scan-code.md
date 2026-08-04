---
title: Scan Code
navigation: true
description: ''
meta: '{}'
path: /ja/_partials/liff-v2/scan-code
__hash__: eRhB8bd09oWmem0Hv6SMubBDtWZQUzDbQ6FidJOyaUw
seo:
  description: ''
---

### liff.scanCode()

::reference-with-code
  :::reference-content
    ::::admonition{title="liff.scanCode()メソッドは非推奨です" type="note"}
    従来の`liff.scanCode()`メソッドは:glossary-tooltip[[非推奨](/glossary/#deprecated)]{glossary-id="deprecated"}になります。二次元コードリーダーを実装する場合は、[`liff.scanCodeV2()`](#scan-code-v2)メソッドを使用することをお勧めします。
    ::::

    
  LINEの二次元コードリーダーを起動し、読み取った文字列を取得します。二次元コードリーダーを起動するには、あらかじめ[LINE Developersコンソール](/console/)で、 [**Scan QR**] をオンにする必要があります。

    ::::admonition{title="iOS版LINEでは使用できません" type="note"}
    `liff.scanCode()`は以下の環境で動作します。

    | OS      | バージョン     | LIFFブラウザ | 外部ブラウザ |
    | ------- | --------- | -------- | ------ |
    | iOS     | すべてのバージョン | ❌        | ❌      |
    | Android | すべてのバージョン | ✅        | ❌      |
    | PC      | すべてのバージョン | ❌        | ❌      |

    技術的な問題があり、iOS版LINEでは、`liff.scanCode`は`undefined`になります。サンプルコードのように、関数の存在を確認してから、使用してください。iOS版LINEや外部ブラウザでも二次元コードリーダーをお使いになりたい場合は、「[`liff.scanCodeV2()`](/reference/liff/#scan-code-v2)」を参照してください。
    ::::

    ::::admonition{title="二次元コードリーダーを起動するには［Scan QR］をオンにしてください" type="note"}
    - [LIFFアプリをチャネルに追加する](/docs/liff/registering-liff-apps/)ときに、［**Scan QR**］をオンにしてください。［**Scan QR**］の設定は、LIFFアプリ追加後も[LINE Developersコンソール](/console/)のLIFFタブで変更できます。
    - `liff.scanCode()`は、外部ブラウザでは利用できません。
    ::::
  :::

  :::reference-code
  *例*

    ::::code-tabs
      :::::tab{lang="javascript"}
      ```javascript
      if (liff.scanCode) {
        liff.scanCode().then((result) => {
          // result = { value: "" }
        });
      }
      ```
      :::::
    ::::
  :::
::

#### 構文

```javascript
liff.scanCode();
```

#### 引数

なし

#### 戻り値

`Promise`オブジェクトが返されます。

LINEの二次元コードリーダーで文字列が読み取れると、`Promise`がresolveされ、読み取った文字列を含むオブジェクトが渡されます。

::parameter-table
  :::parameter-table-entry
  #undefined
  value

  #undefined
  String

  二次元コードリーダーで読み取った文字列
  :::
::
