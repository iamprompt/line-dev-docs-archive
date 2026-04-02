---
title: Get Access Token
navigation: true
description: ''
meta: '{}'
path: /ja/_partials/liff-v2/get-access-token
__hash__: fYIuxr3Qh1-PaPHHOvNv3rPPNdLQfMdJ0ojKEyRuksw
seo:
  description: ''
---

### liff.getAccessToken()

::reference-with-code
  :::reference-content
  LIFF SDKが取得した「現在のユーザーのアクセストークン」を取得します。

  LIFFアプリからサーバーにユーザー情報を送信するときに、このAPIで取得したアクセストークンを利用できます。サーバーでユーザー情報を使用する方法について詳しくは、『LIFFドキュメント』の「[LIFFアプリおよびサーバーでユーザー情報を使用する](/docs/liff/using-user-profile/)」を参照してください。

    ::::admonition{title="アクセストークンの有効期間" type="note"}
    アクセストークンの有効期間は、発行後12時間です。なお、ユーザーがLIFFアプリを閉じると、有効期限が切れていなくてもアクセストークンが無効化される場合があります。詳しくは、『LIFFドキュメント』の「[LIFFアプリを閉じたときの挙動](/docs/liff/developing-liff-apps/#behavior-when-closing-liff-app)」を参照してください。
    ::::

    ::::admonition{title="LIFF SDKがアクセストークンを取得するタイミング" type="tip"}
    - LIFFブラウザでLIFFアプリを起動した場合は、[`liff.init()`](#initialize-liff-app)を呼び出したときに、LIFF SDKがアクセストークンを取得します。
    - 外部ブラウザでLIFFアプリを起動した場合は、以下の手順を行ったのちに、LIFF SDKがアクセストークンを取得します。

      1. LIFFアプリで、[`liff.login()`](#login)を呼び出す。
      2. ユーザーがログインする。
      3. LIFFアプリで、再度[`liff.init()`](#initialize-liff-app)を呼び出す。
    ::::
  :::

  :::reference-code
  *例*

    ::::code-tabs
      :::::tab{lang="javascript"}
      ```javascript
      const accessToken = liff.getAccessToken();
      if (accessToken) {
        fetch("https://api...", {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`,
          },
          //...
        });
      }
      ```
      :::::
    ::::
  :::
::

#### 構文

```javascript
liff.getAccessToken();
```

#### 引数

なし

#### 戻り値

現在のユーザーのアクセストークンを文字列で返します。
