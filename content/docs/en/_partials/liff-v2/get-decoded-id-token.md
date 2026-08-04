---
title: Get Decoded Id Token
navigation: true
description: ''
meta: '{}'
path: /en/_partials/liff-v2/get-decoded-id-token
__hash__: p8ItfGX7-pBH2qtvQfDc9SdHiV0SVVfoli_x2gMTZ3s
seo:
  description: ''
---

### liff.getDecodedIDToken()

::reference-with-code
  :::reference-content
  Gets the payload of the ID token that's acquired by the LIFF SDK. The payload includes information such as user display name, profile image URL, email address, etc.

  Use this method when you want to use the display name of the user in the LIFF app.

  You can only get the main profile information. You can't get the user's :glossary-tooltip[[subprofile](/glossary/#subprofile)]{glossary-id="subprofile"}.

    ::::admonition{title="Don't send user info to server" type="warning"}
    Don't send the user data obtained by this method to the server. For more information, see [Using user data in LIFF apps and servers](/docs/liff/using-user-profile/) in the LIFF documentation.
    ::::

    ::::admonition{title="Select a scope" type="note"}
    When [adding a LIFF app to your channel](/docs/liff/registering-liff-apps/), select the `openid` scope. You can't get the ID tokens if you don't select the scope, or users don't grant permission. The scope selections can be changed in the LIFF tab of the [LINE Developers Console](/console/) even after adding the LIFF app.
    ::::

    ::::admonition{title="Getting an ID token" type="tip"}
    - If the user starts the LIFF app in a LIFF browser, the LIFF SDK will get an ID token when you call [`liff.init()`](#initialize-liff-app).
    - If the user starts the LIFF app in an external browser, the LIFF SDK will get an ID token when these steps are satisfied:
      1. You call [`liff.login()`](#login).
      2. The user logs in.
      3. You call [`liff.init()`](#initialize-liff-app).
    ::::

    ::::admonition{title="You can get the user's email address" type="tip"}
    To get the email addresses of users, select the `email` scope when [adding a LIFF app to your channel](/docs/liff/registering-liff-apps/). You will get the email addresses once the users grant permission. The scope selections can be changed in the LIFF tab of the [LINE Developers Console](/console/) even after adding the LIFF app.
    ::::
  :::

  :::reference-code
  *Example*

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

#### Syntax

```javascript
liff.getDecodedIDToken();
```

#### Arguments

None

#### Return value

::reference-with-code
  :::reference-content
  Gets the ID token payload.

  For more information on ID token payloads, see the **Payload** section of [Get profile information from ID tokens](/docs/line-login/verify-id-token/) in the Integrate LINE Login documentation.
  :::

  :::reference-code
  *Example*

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
