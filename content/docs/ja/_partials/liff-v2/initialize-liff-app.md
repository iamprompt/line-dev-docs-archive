---
title: Initialize Liff App
navigation: true
description: ''
meta: '{}'
path: /ja/_partials/liff-v2/initialize-liff-app
__hash__: wV5kLD9sp64usfIqQbfDoyMRd23Rb3X3s9N6VpGyIw0
seo:
  description: ''
---

### liff.init()

::reference-with-code
  :::reference-content
  LIFFアプリを初期化します。

  このメソッドを実行すると、LIFF SDKの他のメソッドを実行できるようになります。LIFFアプリは、ページを開くたびに必ず初期化する必要があります。同じLIFFアプリ内での遷移であっても、新たにページを開く場合には`liff.init()`メソッドを実行してください。

  LIFFアプリが正しく初期化されていない状態でLIFFの機能を使用した場合、それらの動作は保証対象外です。

  `liff.init()`メソッドを実行するとき、LIFF SDKは現在のユーザーのアクセストークンやIDトークンをLINEプラットフォームから取得します。

  - LIFF SDKが取得したアクセストークンを利用するには、「[liff.getAccessToken()](#get-access-token)」を呼び出します。
  - LIFF SDKが取得したIDトークンのペイロードを利用するには、「[liff.getDecodedIDToken()](#get-decoded-id-token)」を呼び出します。

  #### LIFFアプリ初期化時の注意事項

  LIFFアプリを初期化する際の注意事項は以下のとおりです。注意事項を確認し、理解した上でLIFFアプリの開発を行ってください。

  - [`liff.init()`をエンドポイントURL以下の階層で実行する](#initializing-liff-app-notes-1)
  - [`liff.init()`を1次リダイレクト先URLと2次リダイレクト先URLで1回ずつ実行する](#initializing-liff-app-notes-2)
  - [URLを操作する処理は`liff.init()`が完了してから実行する](#initializing-liff-app-notes-3)
  - [1次リダイレクト先URLの取り扱いに注意する](#initializing-liff-app-notes-4)

  ##### `liff.init()`をエンドポイントURL以下の階層で実行する

  `liff.init()`メソッドはエンドポイントURLと完全に一致、もしくはエンドポイントURLよりも下の階層においてのみ動作します。これら以外のURLに遷移して実行した場合、`liff.init()`メソッドの動作は保証されません。

  以下の例では、エンドポイントURLが`https://example.com/path1/`の場合に、`liff.init()`メソッドを実行するURLで動作が保証されるかどうかを示しています。なお、動作が保証されないURLでは、[マルチタブビュー](/docs/liff/overview/#multi-tab-view)などのLIFFアプリの一部機能が正しく動作しない可能性があります。

  | `liff.init()`を実行するURL                 | 動作の保証 |
  | ------------------------------------- | ----- |
  | `https://example.com/`                | ❌     |
  | `https://example.com/path1/`          | ✅     |
  | `https://example.com/path1/language/` | ✅     |
  | `https://example.com/path2/`          | ❌     |

    ::::admonition
    ---
    title: >-
      liff.init()メソッドの実行時に、コンソールに「liff.init() was called with a current URL that is
      not related to the endpoint URL.」という警告メッセージが表示される
    type: note
    ---
    LIFF v2.27.2以降では、動作が保証されないURLで`liff.init()`メソッドを実行すると、コンソールに警告メッセージが表示されます。

    たとえば、LIFFアプリのエンドポイントURLが`https://example.com/path1/path2/`で、`liff.init()`メソッドを実行するURLが`https://example.com/path1/`の場合、表示される警告メッセージは次のとおりです。

    ```text
    liff.init() was called with a current URL that is not related to the endpoint URL.
    https://example.com/path1/ is not under https://example.com/path1/path2/
    ```

    上記の警告メッセージが表示された場合、エンドポイントURLを`https://example.com/`や`https://example.com/path1/`に変更できないか検討してください。これらのURLに変更することで、`liff.init()`メソッドの動作が保証されます。
    ::::

  ##### `liff.init()`を1次リダイレクト先URLと2次リダイレクト先URLで1回ずつ実行する

  `liff.init()`メソッドは、1次リダイレクト先URLに付与される`liff.state`や`access_token=xxx`などの情報を元に初期化処理を行います。エンドポイントURLにクエリパラメータやパスが含まれている場合、正しくLIFFアプリを初期化するために、1次リダイレクト先URLと2次リダイレクト先URLで、1回ずつ`liff.init()`メソッドを実行してください。リダイレクトについて詳しくは、『LIFFドキュメント』の「[LIFF URLにアクセスしてからLIFFアプリが開くまでの動作について](/docs/liff/opening-liff-app/#redirect-flow)」を参照してください。

  ##### URLを操作する処理は`liff.init()`が完了してから実行する

  URLを操作する処理は、`liff.init()`メソッドが返す`Promise`オブジェクトがresolveしてから実行してください。

  ```javascript
  // Example using window.location.replace()
  liff
    .init({
      liffId: "1234567890-AbcdEfgh", // Use own liffId
    })
    .then(() => {
      // Redirect to another page after the returned Promise object has been resolved
      window.location.replace(location.href + "/entry/");
    });
  ```

  `Promise`オブジェクトがresolveする前に、次のようなURLを操作する処理を実行すると、LIFFアプリを正常に開けない場合があります。

  - [`Document.location`](https://developer.mozilla.org/ja/docs/Web/API/Document/location){rel="[\"nofollow\"]"}プロパティや[`Window.location`](https://developer.mozilla.org/ja/docs/Web/API/Window/location){rel="[\"nofollow\"]"}プロパティを使ってURLを変更する
  - [History API](https://developer.mozilla.org/ja/docs/Web/API/History_API){rel="[\"nofollow\"]"}の[`history.pushState()`](https://developer.mozilla.org/ja/docs/Web/API/History/pushState){rel="[\"nofollow\"]"}メソッドや[`history.replaceState()`](https://developer.mozilla.org/ja/docs/Web/API/History/replaceState){rel="[\"nofollow\"]"}メソッドを使ってURLを変更する
  - サーバー側でステータスコード`301`や`302`を返し、別のURLにリダイレクトする

  ##### 1次リダイレクト先URLの取り扱いに注意する

  1次リダイレクト先URLに自動的に付与される`access_token=xxx`はユーザーのアクセストークン（機密情報）です。Google Analyticsなど外部のロギングツールに、1次リダイレクト先URLを送らないように注意してください。

  なお、LIFF v2.11.0以降のバージョンでは、`liff.init()`メソッドがresolveされたタイミングでURLから機密情報が除外されます。そのため、以下のように`then()`メソッド内でページビューを送信することで、機密情報の漏洩を防ぐことができます。ロギングツールを利用する場合は、LIFFアプリをv2.11.0以降にバージョンアップすることをお勧めします。LIFF v2.11.0の更新内容について詳しくは、『LIFFドキュメント』の「[リリースノート](/docs/liff/release-notes/#liff-v2-11-0)」を参照してください。

  ```javascript
  liff
    .init({
      liffId: "1234567890-AbcdEfgh", // Use own liffId
    })
    .then(() => {
      ga("send", "pageview");
    });
  ```

    ::::admonition{title="LIFFアプリのクエリパラメータについて" type="note"}
    LIFF URLへのアクセス時やLIFF間遷移時などに、URLに以下のようなクエリパラメータが付与されることがあります。

    - `liff.state`：LIFF URLに指定した追加情報を示します。
    - `liff.referrer`：LIFF間遷移前のURLを示します。詳しくは、『LIFFドキュメント』の「[LIFF間遷移前のURLを取得する](/docs/liff/opening-liff-app/#using-liff-referrer)」を参照してください。
    - `lineAppVersion`：Android版のLINEでLIFFアプリを開いた場合に付与されることがあります。

    上記は、LIFFアプリを正常に動作させるために、LIFF SDK側から付与されるクエリパラメータです。LIFFアプリのURLに独自の処理を行う場合は、LIFFアプリの起動やLIFF間遷移などLIFFアプリの正常な動作を保証するため、`liff.init()`メソッドがresolveされるまでLIFF SDK側で付与されるクエリパラメータを変更しないでください。

    また、上記以外のクエリパラメータも付与される可能性があります。このため、LIFF URLへのアクセス時やLIFF間遷移時などに付与されるクエリパラメータを変更しないように設計してください。
    ::::

    ::::admonition{title="LIFFアプリを初期化する前でも実行できるメソッド" type="tip"}
    以下のプロパティおよびメソッドは、`liff.init()`メソッドを実行する前でも利用できます。LIFFアプリを初期化する前にLIFFアプリを動作させている環境を取得したり、LIFFアプリ初期化に失敗した際にLIFFアプリを閉じたりできます。

    - [liff.ready](/reference/liff/#ready)
    - [liff.getOS()](/reference/liff/#get-os)
    - [liff.getAppLanguage()](/reference/liff/#get-app-language)
    - [liff.getLanguage()](/reference/liff/#get-language)（非推奨）
    - [liff.getVersion()](/reference/liff/#get-version)
    - [liff.getLineVersion()](/reference/liff/#get-line-version)
    - [liff.isInClient()](/reference/liff/#is-in-client)
    - [liff.closeWindow()](/reference/liff/#close-window)
    - [liff.use()](/reference/liff/#use)
    - [liff.i18n.setLang()](/reference/liff/#i18n-set-lang)

    `liff.closeWindow()`メソッドは、LIFF SDKバージョンが2.4.0以上の場合のみ、`liff.init()`によるLIFFアプリの初期化が終了する前でも実行できます。
    ::::
  :::

  :::reference-code
  *例*

    ::::code-tabs
      :::::tab{lang="javascript"}
      ```javascript
      // Promiseオブジェクトを使用する方法
      liff
        .init({
          liffId: "123456-abcedfg", // Use own liffId
        })
        .then(() => {
          // Start to use liff's api
        })
        .catch((err) => {
          // Error happens during initialization
          console.log(err.code, err.message);
        });

      // コールバックを使用する方法
      liff.init({ liffId: "123456-abcedfg" }, successCallback, errorCallback);
      ```
      :::::
    ::::
  :::
::

#### 構文

```javascript
liff.init(config, successCallback, errorCallback);
```

#### 引数

::parameter-table
  :::parameter-table-entry{required="true"}
  #undefined
  config

  #undefined
  Object

  LIFFアプリの設定
  :::

  :::parameter-table-entry{required="true"}
  #undefined
  config.liffId

  #undefined
  String

  LIFFアプリID。LIFFアプリをチャネルに追加すると取得できます。詳しくは、「[LIFFアプリをチャネルに追加する](/docs/liff/registering-liff-apps/)」を参照してください。  

  ここで指定したLIFFアプリIDは、[`liff.id`](#id)で取得できます。
  :::

  :::parameter-table-entry{optional=""}
  #undefined
  config.withLoginOnExternalBrowser

  #undefined
  Boolean

  外部ブラウザでのLIFFアプリ初期化時に`liff.login()`メソッドを自動で実行するかどうかを、以下のどちらかの値で指定します。デフォルト値は`false`です。

  - `true`：外部ブラウザで`liff.login()`メソッドを自動で実行します。
  - `false`：外部ブラウザで`liff.login()`メソッドを自動で実行しません。
  :::

  :::parameter-table-entry{optional=""}
  #undefined
  successCallback

  #undefined
  Function

  LIFFアプリの初期化に成功したときにデータオブジェクトを返すコールバック

    ::::admonition{title="注意" type="note"}
    successCallbackは、戻り値の`Promise`オブジェクトのresolveと同じタイミングで処理されます。ただし、処理の順番は保証されません。
    ::::
  :::

  :::parameter-table-entry{optional=""}
  #undefined
  errorCallback

  #undefined
  Function

  LIFFアプリの初期化に失敗したときにエラーオブジェクトを返すコールバック

    ::::admonition{title="注意" type="note"}
    errorCallbackは、戻り値の`Promise`オブジェクトのrejectと同じタイミングで処理されます。ただし、処理の順番は保証されません。
    ::::
  :::
::

#### 戻り値

`Promise`オブジェクトが返されます。

##### エラーレスポンス

`Promise`がrejectされたときは、[`LiffError`](#liff-errors)が渡されます。
