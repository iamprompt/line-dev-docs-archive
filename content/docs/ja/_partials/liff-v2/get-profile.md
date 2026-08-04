---
title: Get Profile
navigation: true
description: ''
meta: '{}'
path: /ja/_partials/liff-v2/get-profile
__hash__: MFBDmvDfZQr9qtrnxixP8-xiAf21qQxnBlApCsb28hI
seo:
  description: ''
---

### liff.getProfile()

::reference-with-code
  :::reference-content
  現在のユーザーの:glossary-tooltip[[プロフィール情報](/glossary/#profile-information)]{glossary-id="profile-information"}を取得します。

  なお取得できる情報はメインプロフィールのみです。ユーザーの:glossary-tooltip[[サブプロフィール](/glossary/#subprofile)]{glossary-id="subprofile"}は取得できません。

    ::::admonition{title="ユーザー情報をサーバーに送信しないでください" type="warning"}
    このメソッドで取得したユーザー情報をサーバーに送信しないでください。サーバーでユーザー情報を使用する方法について詳しくは、『LIFFドキュメント』の「[LIFFアプリおよびサーバーでユーザー情報を使用する](/docs/liff/using-user-profile/)」を参照してください。
    ::::

    ::::admonition{title="スコープを選択してください" type="note"}
    [LIFFアプリをチャネルに追加する](/docs/liff/registering-liff-apps/)ときに、`profile`スコープを選択してください。スコープを選択しなかった場合やユーザーが認可しなかった場合は、プロフィール情報を取得できません。スコープの選択は、LIFFアプリ追加後も[LINE Developersコンソール](/console/)のLIFFタブで変更できます。
    ::::
  :::

  :::reference-code
  *例*

    ::::code-tabs
      :::::tab{lang="javascript"}
      ```javascript
      liff
        .getProfile()
        .then((profile) => {
          const name = profile.displayName;
        })
        .catch((err) => {
          console.log("error", err);
        });
      ```
      :::::
    ::::
  :::
::

#### 構文

```javascript
liff.getProfile();
```

#### 引数

なし

#### 戻り値

::reference-with-code
  :::reference-content
  `Promise`オブジェクトが返されます。

  `Promise`がresolveされると、ユーザーのプロフィール情報を含むオブジェクトが渡されます。

    ::::parameter-table
      :::::parameter-table-entry
      #undefined
      userId

      #undefined
      String

      ユーザーID
      :::::

      :::::parameter-table-entry
      #undefined
      displayName

      #undefined
      String

      表示名
      :::::

      :::::parameter-table-entry
      #undefined
      pictureUrl

      #undefined
      String

      画像のURL。ユーザーが設定していない場合は返されません。
      :::::

      :::::parameter-table-entry
      #undefined
      statusMessage

      #undefined
      String

      ステータスメッセージ。ユーザーが設定していない場合は返されません。
      :::::
    ::::

  ##### エラーレスポンス

  `Promise`がrejectされたときは、[`LiffError`](#liff-errors)が渡されます。
  :::

  :::reference-code
  *例*

    ::::code-tabs
      :::::tab{lang="json"}
      ```json
      {
        "userId": "U4af4980629...",
        "displayName": "Brown",
        "pictureUrl": "https://profile.line-scdn.net/abcdefghijklmn",
        "statusMessage": "Hello, LINE!"
      }
      ```
      :::::
    ::::
  :::
::
