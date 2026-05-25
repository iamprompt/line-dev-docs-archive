---
title: Get Access Token
navigation: true
description: ''
meta: '{}'
path: /en/_partials/liff-v2/get-access-token
__hash__: d95ml2-gx1pWzAQzeazUmJvBf3kQoeDKDXWtZNyL8OY
seo:
  description: ''
---

### liff.getAccessToken()

::reference-with-code
  :::reference-content
  Gets the current user's access token.

  You can use the access token obtained with this API to send user data from the LIFF app to the server. For more information, see [Using user data in LIFF apps and servers](/docs/liff/using-user-profile/) in the LIFF documentation.

  #### Access token validity period

  An access token is valid for 12 hours after it is issued. However, even within this validity period, the access token may be revoked due to user actions.

  - When the user closes the LIFF app, the access token may be revoked. For more information, see [Behavior when closing the LIFF app](/docs/liff/developing-liff-apps/#behavior-when-closing-liff-app) in the LIFF documentation.
  - In a LINE MINI App where the "[Channel consent simplification](/docs/line-mini-app/develop/channel-consent-simplification/#what-is-channel-consent-simplification)" feature is enabled, granting additional permissions from the verification screen refreshes the access token and revokes the previously issued access token. For more information, see [Request permissions other than the `openid` scope on the verification screen](/docs/line-mini-app/develop/channel-consent-simplification/#request-permissions-other-than-openid) in the LINE MINI App documentation.

    ::::admonition{title="Getting an access token" type="tip"}
    - If the user starts the LIFF app in a LIFF browser, the LIFF SDK will get an access token when you call [`liff.init()`](#initialize-liff-app).
    - If the user starts the LIFF app in an external browser, the LIFF SDK will get an access token when these steps are satisfied:

      1. You call [`liff.login()`](#login).
      2. The user logs in.
      3. You call [`liff.init()`](#initialize-liff-app).
    ::::
  :::

  :::reference-code
  *Example*

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

#### Syntax

```javascript
liff.getAccessToken();
```

#### Arguments

None

#### Return value

Returns the current user's access token as a string.
