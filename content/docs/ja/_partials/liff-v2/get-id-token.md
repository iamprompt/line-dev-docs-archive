---
title: Get Id Token
navigation: true
description: ''
meta: '{}'
path: /ja/_partials/liff-v2/get-id-token
__hash__: e-Jq4xaDT5diRti5MWOGMI6rqgCR8NYcNDibIRIEmjA
seo:
  description: ''
---

### liff.getIDToken()

::reference-with-code
  :::reference-content
  LIFF SDKが取得した「現在のユーザーのIDトークン」を取得します。IDトークンは、ユーザー情報を含むJSONウェブトークン（JWT）です。IDトークンの有効期間は発行から1時間です。

  LIFFアプリからサーバーにユーザー情報を送信するときに、このAPIで取得したIDトークンを利用できます。サーバーでユーザー情報を使用する方法について詳しくは、『LIFFドキュメント』の「[LIFFアプリおよびサーバーでユーザー情報を使用する](/docs/liff/using-user-profile/)」を参照してください。

    ::::admonition{title="スコープを選択してください" type="note"}
    [LIFFアプリをチャネルに追加する](/docs/liff/registering-liff-apps/)ときに、`openid`スコープを選択してください。スコープを選択しなかった場合やユーザーが認可しなかった場合は、IDトークンを取得できません。スコープの選択は、LIFFアプリ追加後も[LINE Developersコンソール](/console/)のLIFFタブで変更できます。
    ::::

    ::::admonition{title="LIFF SDKがIDトークンを取得するタイミング" type="tip"}
    - LIFFブラウザでLIFFアプリを起動した場合は、[`liff.init()`](#initialize-liff-app)を呼び出したときに、LIFF SDKがIDトークンを取得します。
    - 外部ブラウザでLIFFアプリを起動した場合は、以下の手順を行ったのちに、LIFF SDKがIDトークンを取得します。

      1. LIFFアプリで、[`liff.login()`](#login)を呼び出す。
      2. ユーザーがログインする。
      3. LIFFアプリで、再度[`liff.init()`](#initialize-liff-app)を呼び出す。
    ::::

    ::::admonition{title="メールアドレスを取得できます" type="tip"}
    [LIFFアプリをチャネルに追加する](/docs/liff/registering-liff-apps/)ときに、`email`スコープを選択し、ユーザーが認可すると、メールアドレスも取得できます。スコープの選択は、LIFFアプリ追加後も[LINE Developersコンソール](/console/)のLIFFタブで変更できます。
    ::::
  :::

  :::reference-code
  *例*

    ::::code-tabs
      :::::tab{lang="javascript"}
      ```javascript
      liff
        .init({
          liffId: "123456-abcedfg", // Use own liffId
        })
        .then(() => {
          const idToken = liff.getIDToken();
          console.log(idToken); // print idToken object
        });
      ```
      :::::
    ::::
  :::
::

#### 構文

```javascript
liff.getIDToken();
```

#### 引数

なし

#### 戻り値

IDトークンが返されます。
