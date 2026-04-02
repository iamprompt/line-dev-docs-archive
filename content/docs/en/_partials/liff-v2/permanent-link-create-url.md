---
title: Permanent Link Create Url
navigation: true
description: ''
meta: '{}'
path: /en/_partials/liff-v2/permanent-link-create-url
__hash__: jwBwGbmYRGgE408eIEB13M0vG1dUwAZC38xQrmRMq4M
seo:
  description: ''
---

### liff.permanentLink.createUrl()

::reference-with-code
  :::reference-content
    ::::admonition
    ---
    title: >-
      liff.permanentLink.createUrl() may be deprecated in the next major version
      update
    type: note
    ---
    Due to technical issues, `liff.permanentLink.createUrl()` may be deprecated in the next major version update. To get the permanent link of the current page, we recommend using [`liff.permanentLink.createUrlBy()`](#permanent-link-create-url-by).
    ::::

  Gets the permanent link for the current page.

  Permanent link format:

  ```text
  https://liff.line.me/{liffId}/{path}?{query}#{URL fragment}
  ```
  :::

  :::reference-code
  *Example*

    ::::code-tabs
      :::::tab{lang="javascript"}
      ```javascript
      // For example, if current location is
      // /shopping?item_id=99#details
      // (LIFF ID = 1234567890-AbcdEfgh)
      const myLink = liff.permanentLink.createUrl();

      // myLink equals "https://liff.line.me/1234567890-AbcdEfgh/shopping?item_id=99#details"
      ```
      :::::
    ::::
  :::
::

#### Syntax

```javascript
liff.permanentLink.createUrl();
```

#### Arguments

None

#### Return value

Returns the current page's permanent link as a string.

A `LiffError` exception is thrown if the current page URL doesn't start with the URL specified in **Endpoint URL** of the LINE Developers console.
