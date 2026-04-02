---
title: Login
navigation: true
description: ''
meta: '{}'
path: /ja/_partials/liff-v2/login
__hash__: 3rmjIg71bbjlnwLwY6StGO0O9duHhR9G08axxjLxHdo
seo:
  description: ''
---

### liff.login()

::reference-with-code
  :::reference-content
  :glossary-tooltip[[外部ブラウザ](/glossary/#external-browser)]{glossary-id="external-browser"}および:glossary-tooltip[[LINE内ブラウザ](/glossary/#line-iab)]{glossary-id="line-iab"}上で、ログイン処理を行います。

    ::::admonition{title="注意" type="note"}
    LIFFブラウザの場合、`liff.init()`実行時に自動でログイン処理が実行されるため、`liff.login()`は利用できません。
    ::::

    ::::admonition{title="LIFFブラウザ内での認可リクエストについて" type="note"}
    LIFFブラウザ内でLINEログインによる認可リクエストを行った際の動作は保証されません。また、LIFFアプリを外部ブラウザやLINE内ブラウザで開く場合には、必ず本メソッドでログイン処理を行い、[LINEログインによる認可リクエスト](/docs/line-login/integrate-line-login/#making-an-authorization-request)は行わないでください。
    ::::
  :::

  :::reference-code
  *例*

    ::::code-tabs
      :::::tab{lang="javascript"}
      ```javascript
      if (!liff.isLoggedIn()) {
        liff.login({ redirectUri: "https://example.com/path" });
      }
      ```
      :::::
    ::::
  :::
::

#### 構文

```javascript
liff.login(loginConfig);
```

#### 引数

::parameter-table
  :::parameter-table-entry{optional=""}
  #undefined
  loginConfig

  #undefined
  Object

  ログインの設定
  :::

  :::parameter-table-entry{optional=""}
  #undefined
  loginConfig.redirectUri

  #undefined
  String

  ログイン後にLIFFアプリで表示するURL。デフォルト値は［**エンドポイントURL**］に設定したURLです。［**エンドポイントURL**］の設定方法について詳しくは、『LIFFドキュメント』の「[LIFFアプリをチャネルに追加する](/docs/liff/registering-liff-apps/#registering-liff-app)」を参照してください。

  `redirectUri`に指定したURLが［**エンドポイントURL**］に設定したURLで始まらない場合、ログイン処理に失敗し、エラー画面が表示されます。

  ![](/media/liff/liff_login_error_screen.png){className="[\"w-fix-400\",\"border\"]"}

  たとえば、［**エンドポイントURL**］が`https://example.com/path1/path2?query1=value1`の場合、ログイン処理の成否は以下のとおりです。なお、クエリパラメータやURLフラグメントはログイン処理の成否に影響しません。

  | redirectUri                                                                                                                                                                                                                                                                                                        | ログイン処理 |
  | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------ |
  | - https://example.com/path1/path2?query1=value1            - https://example.com/path1/path2?query2=value2            - https://example.com/path1/path2#URL-fragment            - https://example.com/path1/path2            - https://example.com/path1/path2/            - https://example.com/path1/path2/path3 | ✅ 成功   |
  | - https://example.com/path1            - https://example.com/            - https://example.com/path2/path1                                                                                                                                                                                                         | ❌ 失敗   |
  :::
::

#### 戻り値

なし
