---
title: Use
navigation: true
description: ''
meta: '{}'
path: /ja/_partials/liff-v2/use
__hash__: KpPowMFUgodUN_8J9N8oEsCx_WFc7ffOEUpoh79LxhU
seo:
  description: ''
---

### liff.use()

::reference-with-code
  :::reference-content
  [プラガブルSDK](/docs/liff/pluggable-sdk/)のLIFF APIや、[LIFFプラグイン](/docs/liff/liff-plugin/)を有効化し、初期化処理を実行します。
  :::

  :::reference-code
  *プラガブルSDKのLIFF APIの例*

    ::::code-tabs
      :::::tab{lang="javascript"}
      ```javascript
      import liff from "@line/liff/core";
      import GetOS from "@line/liff/get-os";

      liff.use(new GetOS());

      liff.init({
        liffId: "123456-abcedfg", // Use own liffId
      });
      ```
      :::::
    ::::

  *LIFFプラグインの例*

    ::::code-tabs
      :::::tab{lang="javascript"}
      ```javascript
      class greetPlugin {
        constructor() {
          this.name = "greet";
        }

        install() {
          return {
            hello: this.hello,
          };
        }

        hello() {
          console.log("Hello, World!");
        }
      }

      liff.use(new greetPlugin());
      ```
      :::::
    ::::
  :::
::

#### 構文

```javascript
liff.use(module, option);
```

#### 引数

::parameter-table
  :::parameter-table-entry{required="true"}
  #undefined
  module

  #undefined
  Object

  プラガブルSDKのLIFF APIのモジュールやLIFFプラグイン。

  LIFF APIのモジュールを渡す場合、インスタンス化する必要があります。詳しくは、『LIFFドキュメント』の「[プラガブルSDKの使用方法](/docs/liff/pluggable-sdk/#how-to-use)」を参照してください。

  LIFFプラグインを渡す場合、LIFFプラグインがクラスのときは、インスタンス化する必要があります。詳しくは、『LIFFドキュメント』の「[LIFFプラグインを使用する](/docs/liff/liff-plugin/#use-liff-plugin)」を参照してください。
  :::

  :::parameter-table-entry{optional=""}
  #undefined
  option

  #undefined
  Any value

  `module`プロパティで指定した、LIFFプラグインに渡す値。LIFFプラグインの[`install()`](/docs/liff/liff-plugin/#install)メソッドの第2引数として渡されます。詳しくは、『LIFFドキュメント』の「[option](/docs/liff/liff-plugin/#option)」を参照してください。
  :::
::

#### 戻り値

`liff`オブジェクトが返されます。
