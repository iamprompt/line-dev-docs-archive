---
title: Permanent Link Set Extra Query Params
navigation: true
description: ''
meta: '{}'
path: /en/_partials/liff-v2/permanent-link-set-extra-query-params
__hash__: dx103sYjiswUHFrunGX8edOb1Z2MTTnYt8XxOt-h4vY
seo:
  description: ''
---

### liff.permanentLink.setExtraQueryParam()

::reference-with-code
  :::reference-content
    ::::admonition
    ---
    title: >-
      liff.permanentLink.setExtraQueryParam() may be deprecated in the next major
      version update
    type: note
    ---
    Due to technical issues, `liff.permanentLink.setExtraQueryParam()` may be deprecated in the next major version update. To add any query parameter to a permanent link on the current page, we recommend using [`liff.permanentLink.createUrlBy()`](#permanent-link-create-url-by).
    ::::

  You can add any query parameter to a permanent link on the current page.

  Each time you execute `liff.permanentLink.setExtraQueryParam()`, the query parameters added last time are overwritten.

    ::::admonition{title="Delete added query parameters" type="tip"}
    - To delete the added query parameters, execute `liff.permanentLink.setExtraQueryParam("")`.
    - The added query parameters will be discarded when the user navigates to another page.
    ::::
  :::

  :::reference-code
  *Example*

    ::::code-tabs
      :::::tab{lang="javascript"}
      ```javascript
      // For example, if current location is
      // /food?menu=pizza
      // (LIFF ID = 1234567890-AbcdEfgh)
      liff.permanentLink.setExtraQueryParam("user_tracking_id=8888");
      const myLink = liff.permanentLink.createUrl();

      // myLink equals "https://liff.line.me/1234567890-AbcdEfgh/food?menu=pizza&user_tracking_id=8888"
      ```
      :::::
    ::::
  :::
::

#### Syntax

```javascript
liff.permanentLink.setExtraQueryParam(extraString);
```

#### Arguments

::parameter-table
  :::parameter-table-entry{required="true"}
  #undefined
  extraString

  #undefined
  String

  Query parameters to add
  :::
::

#### Return value

None
