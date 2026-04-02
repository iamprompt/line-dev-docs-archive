---
title: Login
navigation: true
description: ''
meta: '{}'
path: /en/_partials/liff-v2/login
__hash__: 2hUbJIShNUW2XKy5JglXZtyw5wggQVXY7Jvvvq_UquA
seo:
  description: ''
---

### liff.login()

::reference-with-code
  :::reference-content
  Performs the login process in the :glossary-tooltip[[LINE's in-app browser](/glossary/#line-iab)]{glossary-id="line-iab"} or :glossary-tooltip[[external browser](/glossary/#external-browser)]{glossary-id="external-browser"}.

    ::::admonition{title="Note" type="note"}
    You can't use `liff.login()` in a LIFF browser, as it is automatically executed when `liff.init()` is executed.
    ::::

    ::::admonition{title="Authorization requests within LIFF browser" type="note"}
    The behavior of LINE Login authorization requests within the LIFF browser isn't guaranteed. Also, when opening LIFF apps from an external browser or LINE's in-app browser, make sure to use this method for the login process, not the [authorization requests with LINE Login](/docs/line-login/integrate-line-login/#making-an-authorization-request).
    ::::
  :::

  :::reference-code
  *Example*

    ::::code-tabs
      :::::tab{lang="javascript"}
      ```javascript
      if (!liff.isLoggedIn()) {
        liff.login({ redirectUri: "https://example.com/path" });
      }
      ```
      :::::
    ::::
  :::
::

#### Syntax

```javascript
liff.login(loginConfig);
```

#### Arguments

::parameter-table
  :::parameter-table-entry{optional=""}
  #undefined
  loginConfig

  #undefined
  Object

  Login configurations
  :::

  :::parameter-table-entry{optional=""}
  #undefined
  loginConfig.redirectUri

  #undefined
  String

  URL to open in the LIFF app after logging in. The default value is the URL set in **Endpoint URL**. For more information on how to set **Endpoint URL**, see [Adding a LIFF app to your channel](/docs/liff/registering-liff-apps/#registering-liff-app) in the LIFF documentation.

  If the URL specified in `redirectUri` doesn't start with the URL specified in **Endpoint URL**, the login process fails and an error screen is displayed.

  ![](/media/liff/liff_login_error_screen.png){className="[\"w-fix-400\",\"border\"]"}

  For example, if **Endpoint URL** is `https://example.com/path1/path2?query1=value1`, the success or failure of the login process is as follows. Query parameters and URL fragments don't affect the success or failure of the login process.

  | redirectUri                                                                                                                                                                                                                                                                                                        | Login process |
  | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------- |
  | - https://example.com/path1/path2?query1=value1            - https://example.com/path1/path2?query2=value2            - https://example.com/path1/path2#URL-fragment            - https://example.com/path1/path2            - https://example.com/path1/path2/            - https://example.com/path1/path2/path3 | ✅ Success     |
  | - https://example.com/path1            - https://example.com/            - https://example.com/path2/path1                                                                                                                                                                                                         | ❌ Failure     |
  :::
::

#### Return value

None
