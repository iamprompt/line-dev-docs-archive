---
title: Permission Api
navigation: true
description: ''
meta: '{}'
path: /ja/_partials/liff-v2/permission-api
__hash__: gSyOT-cO1brhyTlo8ZDdBavaqmgZriPl95-s9Mx2yGk
seo:
  description: ''
---

### liff.permission.getGrantedAll()

::reference-with-code
  :::reference-content
  ユーザーが権限の付与に同意したスコープの一覧を取得します。

  このメソッドで取得できるスコープは次のとおりです。

  - [`profile`](/docs/liff/registering-liff-apps/#registering-liff-app)
  - [`chat_message.write`](/docs/liff/registering-liff-apps/#registering-liff-app)
  - [`openid`](/docs/liff/registering-liff-apps/#registering-liff-app)
  - [`email`](/docs/liff/registering-liff-apps/#registering-liff-app)

    ::::admonition
    ---
    title: liff.getContext()メソッドとliff.permission.getGrantedAll()メソッドの違い
    type: tip
    ---
    [`liff.getContext()`](#get-context)メソッドでは、LIFFアプリのスコープ（※）の一覧を取得します。

    一方、`liff.permission.getGrantedAll()`メソッドでは、LIFFアプリのスコープのうち、ユーザーが権限の付与に同意したスコープの一覧を取得します。

    ※ LINEログインチャネルの［**LIFF**］タブにある「Scope」セクションで指定したスコープ
    ::::
  :::

  :::reference-code
  *例*

    ::::code-tabs
      :::::tab{lang="javascript"}
      ```javascript
      liff.permission.getGrantedAll().then((scopes) => {
        // ["profile", "chat_message.write", "openid", "email"]
        console.log(scopes);
      });
      ```
      :::::
    ::::
  :::
::

#### 構文

```javascript
liff.permission.getGrantedAll();
```

#### 引数

なし

#### 戻り値

`Promise`がresolveされると、ユーザーが権限の付与に同意したスコープの配列が渡されます。

##### エラーレスポンス

`Promise`がrejectされたときは、[`LiffError`](#liff-errors)が渡されます。

### liff.permission.query()

::reference-with-code
  :::reference-content
  ユーザーが指定した権限の付与に同意しているかどうかを確認します。
  :::

  :::reference-code
  *例*

    ::::code-tabs
      :::::tab{lang="javascript"}
      ```javascript
      liff.permission.query("profile").then((permissionStatus) => {
        // permissionStatus = { state: 'granted' }
      });
      ```
      :::::
    ::::
  :::
::

#### 構文

```javascript
liff.permission.query(permission);
```

#### 引数

::parameter-table
  :::parameter-table-entry{required="true"}
  #undefined
  permission

  #undefined
  String

  確認対象の権限。以下のいずれかのスコープを指定します。

  - [`profile`](/docs/liff/registering-liff-apps/#registering-liff-app)
  - [`chat_message.write`](/docs/liff/registering-liff-apps/#registering-liff-app)
  - [`openid`](/docs/liff/registering-liff-apps/#registering-liff-app)
  - [`email`](/docs/liff/registering-liff-apps/#registering-liff-app)
  :::
::

#### 戻り値

`Promise`オブジェクトが返されます。

`Promise`がresolveされると、以下のプロパティを持つオブジェクトが渡されます。

::parameter-table
  :::parameter-table-entry
  #undefined
  state

  #undefined
  String

  以下のいずれかの値が含まれます。

  - `granted`: 権限付与にユーザーが同意済み。
  - `prompt`: 権限付与にユーザーが未同意。
  - `unavailable`: 指定したスコープをチャネルが持たないため、利用不可。
  :::
::

### liff.permission.requestAll()

LINEミニアプリが要求する権限の「アクセス許可要求画面」を表示します。

![アクセス許可要求画面](/media/line-mini-app/verification-screen-ja.png){className="[\"border\",\"w-fix-200\"]"}

::reference-with-code
  :::reference-content
    ::::admonition{title="liff.permission.requestAll()の動作環境" type="note"}
    `liff.permission.requestAll()`は[LINEミニアプリ](/docs/line-mini-app/)でのみ動作します。

    このメソッドを実行するには、あらかじめ[LINE Developersコンソール](/console/)で、［**チャネル同意の簡略化**］をオンにする必要があります。チャネル同意の簡略化の設定方法について詳しくは、『LINEミニアプリドキュメント』の「[「チャネル同意の簡略化」の設定方法](/docs/line-mini-app/develop/channel-consent-simplification/#simplification-feature-setup)」を参照してください。
    ::::

    ::::admonition{title="ユーザーが未同意の権限があるかどうか確認してから実行してください" type="note"}
    権限付与にユーザーがすべて同意済みの場合、`liff.permission.requestAll()`を実行すると、`Promise`がrejectされ、[`LiffError`](/reference/liff/#liff-errors)が渡されます。そのため、[`liff.permission.query()`](/reference/liff/#permission-query)を使って、ユーザーが未同意の権限があるかどうかを確認してください。未同意の権限がある場合にのみ、`liff.permission.requestAll()`を実行するようにしてください。
    ::::
  :::

  :::reference-code
  *例*

    ::::code-tabs
      :::::tab{lang="javascript"}
      ```javascript
      liff.permission.query("profile").then((permissionStatus) => {
        if (permissionStatus.state === "prompt") {
          liff.permission.requestAll();
        }
      });

      // LINEミニアプリチャネルの［複数アカウントを使用］がオンの場合
      liff.permission.query("profile").then((permissionStatus) => {
        if (permissionStatus.state === "prompt") {
          liff.permission.requestAll({
            officialAccount: {
              id: "@819...",
              fallback: true,
            },
          });
        }
      });
      ```
      :::::
    ::::
  :::
::

#### 構文

```javascript
liff.permission.requestAll(params);
```

#### 引数

引数は、LINEミニアプリでのみ利用できます。また、LIFF SDKがv2.30.0以上、かつLINEミニアプリチャネルの［**複数アカウントを使用**］をオンにする必要があります。詳しくは、『LINEミニアプリドキュメント』の「[LINEミニアプリ上でLINE公式アカウントを友だち追加する（友だち追加オプション）](/docs/line-mini-app/service/add-friend-option/)」を参照してください。

::parameter-table
  :::parameter-table-entry{optional=""}
  #undefined
  params

  #undefined
  Object

  パラメータオブジェクト
  :::

  :::parameter-table-entry{optional=""}
  #undefined
  params.officialAccount

  #undefined
  Object

  友だち追加オプションによる友だち追加、またはブロック解除を促すLINE公式アカウントを指定するためのオブジェクト。省略すると、デフォルトのLINE公式アカウントが表示されます。
  :::

  :::parameter-table-entry{required="true"}
  #undefined
  officialAccount.id

  #undefined
  String

  友だち追加オプションによる友だち追加、またはブロック解除を促すLINE公式アカウントのID。ベーシックIDまたは:glossary-tooltip[[プレミアムID](/glossary/#premium-id)]{glossary-id="premium-id"}で指定します。
  :::

  :::parameter-table-entry{optional=""}
  #undefined
  officialAccount.fallback

  #undefined
  Boolean

  `officialAccount.id`プロパティで指定したLINE公式アカウントが存在しない場合や、許可リストに登録されていない場合などに、デフォルトのLINE公式アカウントを表示するかどうか。デフォルト値は`true`です。

  - `true`：デフォルトのLINE公式アカウントを表示する。
  - `false`：LINE公式アカウントを表示しない。
  :::
::

#### 戻り値

`Promise`オブジェクトが返されます。

#### エラーレスポンス

`Promise`がrejectされたときは、[`LiffError`](#liff-errors)が渡されます。`liff.permission.requestAll()`メソッドに特有のエラーは次のとおりです。

| エラーコード             | エラーメッセージ                                        | 説明                                        |
| ------------------ | ----------------------------------------------- | ----------------------------------------- |
| `FORBIDDEN`        | `All permissions have already been approved.`   | ユーザーがすべての権限の付与に既に同意している。                  |
| `FORBIDDEN`        | `SkipChannelVerificationScreen is unavailable.` | ［**チャネル同意の簡略化**］がオフになっている。                |
| `INVALID_ARGUMENT` | `officialAccount.id must start with "@".`       | `officialAccount.id`プロパティの値が`@`から始まっていない。 |
