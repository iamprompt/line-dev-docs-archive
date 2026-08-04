---
title: Get Access Token
navigation: true
description: ''
meta: '{}'
path: /ja/_partials/liff-v2/get-access-token
__hash__: BFCooqO3-jWuyQf1PMbJhDkA1OUDQeWV_7T8vsVljDQ
seo:
  description: ''
---

### liff.getAccessToken()

::reference-with-code
  :::reference-content
  LIFF SDKが取得した「現在のユーザーのアクセストークン」を取得します。

  LIFFアプリからサーバーにユーザー情報を送信するときに、このAPIで取得したアクセストークンを利用できます。サーバーでユーザー情報を使用する方法について詳しくは、『LIFFドキュメント』の「[LIFFアプリおよびサーバーでユーザー情報を使用する](/docs/liff/using-user-profile/)」を参照してください。

  #### アクセストークンの有効期間

  アクセストークンの有効期間は、発行後12時間です。ただし、有効期間内であっても、ユーザーの操作によりアクセストークンが無効化される場合があります。

  - ユーザーがLIFFアプリを閉じると、アクセストークンが無効化される場合があります。詳しくは、『LIFFドキュメント』の「[LIFFアプリを閉じたときの挙動](/docs/liff/developing-liff-apps/#behavior-when-closing-liff-app)」を参照してください。
  - 「[チャネル同意の簡略化](/docs/line-mini-app/develop/channel-consent-simplification/#what-is-channel-consent-simplification)」機能が有効なLINEミニアプリにおいて、ユーザーが「アクセス許可要求画面」から追加の権限を許可すると、アクセストークンが更新され、それ以前に発行されたアクセストークンは無効化されます。詳しくは、『LINEミニアプリドキュメント』の「[「アクセス許可要求画面」で`openid`スコープ以外の権限を要求する](/docs/line-mini-app/develop/channel-consent-simplification/#request-permissions-other-than-openid)」を参照してください。

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
