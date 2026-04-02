---
title: Get Decoded Id Token
navigation: true
description: ''
meta: '{}'
path: /ja/_partials/liff-v2/get-decoded-id-token
__hash__: 4gCLYIkOU-hXes-MmFZtJT-mUA93OPDhvrLMnCEHsVc
seo:
  description: ''
---

### liff.getDecodedIDToken()

::reference-with-code
  :::reference-content
  LIFF SDKが取得したIDトークンの「ペイロード」を取得します。ペイロードには、ユーザーの表示名、プロフィール画像のURL、メールアドレスなどの情報が含まれます。

  LIFFアプリでユーザーの表示名などを利用する場合に、このメソッドを利用してください。

  なお取得できる情報はメインプロフィールのみです。ユーザーの:glossary-tooltip[[サブプロフィール](/glossary/#subprofile)]{glossary-id="subprofile"}は取得できません。

    ::::admonition{title="ユーザー情報をサーバーに送信しないでください" type="warning"}
    このメソッドで取得したユーザー情報をサーバーに送信しないでください。サーバーでユーザー情報を使用する方法について詳しくは、『LIFFドキュメント』の「[LIFFアプリおよびサーバーでユーザー情報を使用する](/docs/liff/using-user-profile/)」を参照してください。
    ::::

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
          const idToken = liff.getDecodedIDToken();
          console.log(idToken); // print decoded idToken object
        });
      ```
      :::::
    ::::
  :::
::

#### 構文

```javascript
liff.getDecodedIDToken();
```

#### 引数

なし

#### 戻り値

::reference-with-code
  :::reference-content
  IDトークンのペイロードが返されます。

  IDトークンのペイロードについて詳しくは、「[IDトークンからプロフィール情報を取得する](/docs/line-login/verify-id-token/)」の「ペイロード」を参照してください。
  :::

  :::reference-code
  *例*

    ::::code-tabs
      :::::tab{lang="json"}
      ```json
      {
        "iss": "https://access.line.me",
        "sub": "U1234567890abcdef1234567890abcdef ",
        "aud": "1234567890",
        "exp": 1504169092,
        "iat": 1504263657,
        "amr": ["pwd"],
        "name": "Taro Line",
        "picture": "https://sample_line.me/aBcdefg123456"
      }
      ```
      :::::
    ::::
  :::
::
