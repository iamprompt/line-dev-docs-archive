---
title: Is Logged In
navigation: true
description: ''
meta: '{}'
path: /en/_partials/liff-v2/is-logged-in
__hash__: 48YMhHImdxAh7x36AaZWAh9ZnWW8anksT61yPlZck68
seo:
  description: ''
---

### liff.isLoggedIn()

::reference-with-code
  :::reference-content
  Checks whether the user is logged in.
  :::

  :::reference-code
  *Example*

    ::::code-tabs
      :::::tab{lang="javascript"}
      ```javascript
      if (liff.isLoggedIn()) {
        // The user can use an API that requires an access token, such as liff.getProfile().
      }
      ```
      :::::
    ::::
  :::
::

#### Syntax

```javascript
liff.isLoggedIn();
```

#### Arguments

None

#### Return value

- `true`: The user is logged in.
- `false`: The user is not logged in.
