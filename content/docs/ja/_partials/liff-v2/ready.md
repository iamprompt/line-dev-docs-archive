---
title: Ready
navigation: true
description: ''
meta: '{}'
path: /ja/_partials/liff-v2/ready
__hash__: wkCnNABtr7gg5gU1AxMOiAur7qwOBqNrikg3mz8Akok
seo:
  description: ''
---

### liff.ready

::reference-with-code
  :::reference-content
  LIFFアプリ起動後、[`liff.init()`](#initialize-liff-app)の実行が初めて終了したときにresolveする`Promise`オブジェクトを保持するプロパティです。

  `liff.ready`を利用すると、`liff.init()`の終了を待って、任意の処理を実行できます。

    ::::admonition{title="LIFFアプリ初期化前でも実行できます" type="tip"}
    `liff.ready`は、`liff.init()`によるLIFFアプリの初期化が終了する前でも実行できます。
    ::::
  :::

  :::reference-code
  *例*

    ::::code-tabs
      :::::tab{lang="javascript"}
      ```javascript
      liff.ready.then(() => {
        // do something you want when liff.init finishes
      });
      ```
      :::::
    ::::
  :::
::

::admonition{title="注意" type="note"}
`liff.init()`実行中に何か問題が起きても、`liff.ready`はrejectしません。また、[`LiffError`オブジェクト](#liff-errors)を返すこともありません。
::
