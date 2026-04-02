---
title: Create Shortcut On Home Screen
navigation: true
description: ''
meta: '{}'
path: /ja/_partials/liff-v2/create-shortcut-on-home-screen
__hash__: pIuD_p1cU7IQITRAW_KgL8JLFTVZqHwZkWycza45M0o
seo:
  description: ''
---

### liff.createShortcutOnHomeScreen()

::reference-with-code
  :::reference-content
    ::::admonition{title="認証済ミニアプリでのみ利用できます" type="tip"}
    この機能は、認証済ミニアプリでのみ利用できます。未認証ミニアプリの場合、開発用の内部チャネルではテストできますが、公開用の内部チャネルでは利用できません。
    ::::

  [LINEミニアプリ](/docs/line-mini-app/)へのショートカットを、ユーザー端末のホーム画面に追加する画面を表示します。

  ![](/media/line-mini-app/develop/add-to-home-screen/add-shortcut-screen-ios-ja.png){className="[\"border\",\"w-fix-240\"]"}

  詳しくは、『LINEミニアプリドキュメント』の「[ユーザー端末のホーム画面にLINEミニアプリへのショートカットを追加する](/docs/line-mini-app/develop/add-to-home-screen/)」を参照してください。

    ::::admonition
    ---
    title: liff.createShortcutOnHomeScreen()メソッドを実行するタイミング
    type: note
    ---
    `liff.createShortcutOnHomeScreen()`メソッドは、ユーザー体験を損なわないよう、LINEミニアプリ上でのユーザー操作（例：タップ）に対する応答として実行してください。
    ::::
  :::

  :::reference-code
  *例*

    ::::code-tabs
      :::::tab{lang="javascript"}
      ```javascript
      // LINEミニアプリのエンドポイントURLが
      // https://example.com/path1/path2、
      // LIFF IDが1234567890-AbcdEfghの場合

      // LIFF URLを指定した例
      liff
        .createShortcutOnHomeScreen({
          url: "https://miniapp.line.me/1234567890-AbcdEfgh",
        })
        .then(() => { /* ... */ });

      liff
        .createShortcutOnHomeScreen({
          url: "https://liff.line.me/1234567890-AbcdEfgh",
        })
        .then(() => { /* ... */ });

      // パーマネントリンクを指定した例
      liff
        .createShortcutOnHomeScreen({
          url: "https://liff.line.me/1234567890-AbcdEfgh/path3",
        })
        .then(() => { /* ... */ });

      // LINEミニアプリのエンドポイントURLを指定した例
      liff
        .createShortcutOnHomeScreen({
          url: "https://example.com/path1/path2",
        })
        .then(() => { /* ... */ });

      // LINEミニアプリのエンドポイントURLから始まるURLを指定した例
      liff
        .createShortcutOnHomeScreen({
          url: "https://example.com/path1/path2/path3",
        })
        .then(() => { /* ... */ });

      // エラーになるURLを指定した例
      liff
        .createShortcutOnHomeScreen({
          url: "https://example.com/invalid-path",
        })
        .then(() => { /* ... */ })
        .catch((error) => {
          // invalid URL.
          console.log(error.message);
        });
      ```
      :::::
    ::::
  :::
::

#### 使用条件

`liff.createShortcutOnHomeScreen()`メソッドを使用するには、以下の条件をすべて満たす必要があります。

- LINEミニアプリである。
- LINEミニアプリのLIFF SDKのバージョンがv2.23.0以上である。
- ユーザー端末のLINEアプリのバージョンが13.20.0以上である。

#### 動作条件

ユーザー端末のOSがiOSの場合、`liff.createShortcutOnHomeScreen()`メソッドが動作する条件は以下のとおりです。動作しない環境においてこのメソッドを実行すると、エラーページが表示されます。

| デフォルトのブラウザ           | iOSのバージョン | 動作するかどうか  |
| -------------------- | --------- | --------- |
| Safari               | すべてのバージョン | 動作する      |
| Chrome               | 16.4以降    | 動作する      |
| Safari、Chrome以外のブラウザ | 16.4以降    | 動作は保証されない |
| Safari以外のブラウザ        | 16.4未満    | 動作しない     |

たとえば、iOS 16.4未満において、Chromeで`liff.createShortcutOnHomeScreen()`メソッドを実行した場合は、以下のエラーページが表示されます。

![](/media/line-mini-app/develop/add-to-home-screen/add-shortcut-screen-ios-error-ja.png){className="[\"border\",\"w-fix-240\"]"}

#### 構文

```javascript
liff.createShortcutOnHomeScreen(params);
```

#### 引数

::parameter-table
  :::parameter-table-entry{required="true"}
  #undefined
  params

  #undefined
  Object

  パラメータオブジェクト
  :::

  :::parameter-table-entry{required="true"}
  #undefined
  params.url

  #undefined
  String

  URL。以下のURLを指定できます。

  - ::::glossary-tooltip{glossary-id="liff-url"}
  [LIFF URL](/glossary/#liff-url)
  ::::
  - ::::glossary-tooltip{glossary-id="permanent-link-liff"}
  [パーマネントリンク](/glossary/#permanent-link-liff)
  ::::
  - LINEミニアプリのエンドポイントURL
  - LINEミニアプリのエンドポイントURLから始まるURL
  :::
::

#### 戻り値

`Promise`オブジェクトが返されます。

ショートカット追加画面が表示されると、`Promise`がresolveされます。値は渡されません。

なお、ユーザーが端末のホーム画面にLINEミニアプリへのショートカットを実際に追加したかどうかは確認できません。

##### エラーレスポンス

`Promise`が`reject`されたときは、[`LiffError`](#liff-errors)が渡されます。
