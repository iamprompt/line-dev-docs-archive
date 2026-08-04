---
title: Get Id Token
navigation: true
description: ''
meta: '{}'
path: /en/_partials/liff-v2/get-id-token
__hash__: 971YEy-DBH3pKMEy00uY3dBmpK34oLNkZF3zYOt2sL4
seo:
  description: ''
---

### liff.getIDToken()

::reference-with-code
  :::reference-content
  Get the ID token of the current user obtained by the LIFF SDK. An ID token is a JSON Web Token (JWT) that contains user data. The ID token is valid for one hour after it is issued.

  You can use the ID token obtained with this API when sending the user data from the LIFF app to the server. For more information, see [Using user data in LIFF apps and servers](/docs/liff/using-user-profile/) in the LIFF documentation.

    ::::admonition{title="Select a scope" type="note"}
    When [adding a LIFF app to your channel](/docs/liff/registering-liff-apps/), select the `openid` scope. You can't get the ID tokens if you don't select the scope, or the users don't grant permission. The scope selections can be changed in the LIFF tab of the [LINE Developers Console](/console/) even after adding the LIFF app.
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
          const idToken = liff.getIDToken();
          console.log(idToken); // print idToken object
        });
      ```
      :::::
    ::::
  :::
::

#### Syntax

```javascript
liff.getIDToken();
```

#### Argument

None

#### Return value

Returns an ID token.
