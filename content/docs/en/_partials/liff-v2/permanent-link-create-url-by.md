---
title: Permanent Link Create Url By
navigation: true
description: ''
meta: '{}'
path: /en/_partials/liff-v2/permanent-link-create-url-by
__hash__: RUo1WYXfKFfwitj-WMJg8ChxuYgUBXD6P9YsoEmL4kw
seo:
  description: ''
---

### liff.permanentLink.createUrlBy()

::reference-with-code
  :::reference-content
  Get the permanent link of any page in the LIFF app.

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
      // For example, if the endpoint URL of the LIFF app
      // is https://example.com/path1?q1=v1
      // and its LIFF ID is 1234567890-AbcdEfgh
      liff.permanentLink
        .createUrlBy("https://example.com/path1?q1=v1")
        .then((permanentLink) => {
          // https://liff.line.me/1234567890-AbcdEfgh
          console.log(permanentLink);
        });

      liff.permanentLink
        .createUrlBy("https://example.com/path1/path2?q1=v1&q2=v2")
        .then((permanentLink) => {
          // https://liff.line.me/1234567890-AbcdEfgh/path2?q=2=v2
          console.log(permanentLink);
        });

      liff.permanentLink
        .createUrlBy("https://example.com/")
        .catch((error) => {
        // Error: currentPageUrl must start with endpoint URL of LIFF App.
        console.log(error);
      });
      ```
      :::::
    ::::
  :::
::

#### Syntax

```javascript
liff.permanentLink.createUrlBy(url);
```

#### Arguments

::parameter-table
  :::parameter-table-entry{required="true"}
  #undefined
  url

  #undefined
  String

  URL to get the permanent link. You can add any query parameter or URL fragment.
  :::
::

#### Return value

Returns a `Promise` object.

Returns the string of the permanent link when `Promise` is resolved.

##### Error responsee

If the URL to get the permanent link doesn't begin with the URL specified for **Endpoint URL** on the [LINE Developers Console](/console/), `Promise` will be rejected and [`LiffError`](#liff-errors) will be returned.

For example, if the URL to get the permanent link (e.g. `https://example.com/`) is above **Endpoint URL** (e.g. `https://example.com/path1?q1=v1`), `Promise` will be rejected.
